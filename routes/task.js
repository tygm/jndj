var express = require('express');
var router = express.Router();
let path = require("path");
let mysqlCon = require("../db/mysqlCon");
/* GET users listing. */
//http://localhost:3000/user/login?loginname=test&pwd=111111
router.post('/add', function (req, res, next) {
    console.log("adddd")
    let body = req.body;
    if (body.title && body.descs && body.starttime && body.endtime &&
        body.status && body.type1 && body.type2 && body.type3 && body.partys) {
        let sql = "insert into task (title, descs, attachments, " +
            " starttime, endtime, status, type1, type2, type3,periodCount,childtaskId," +
            "position1Desc,targetPositionId)values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        let attachments = "";
        if (req.files)
            req.files.forEach(file => {
                attachments += file.filename;
                attachments += "||||";
            });
        mysqlCon.beginTransaction(err => {
            if (err)
                throw err;
            else {
                mysqlCon.query(sql, [body.title, body.descs, attachments,
                    body.starttime, body.endtime, body.status, body.type1, body.type2,
                    body.type3, body.periodCount, body.childtaskId, body.position1Desc,
                    body.targetPositionId || null
                ], (error, results, fields) => {
                    if (error) {
                        mysqlCon.rollback();
                        res.json({
                            status: false,
                            error: error
                        });
                    } else { //body.partyNos
                        let sql2 = "insert into task_party (taskId, partyNo,positionId)values";
                        if (typeof body.partys == "string") {
                            body.partys = [body.partys]
                        }
                        if (typeof body.positionId == "string") {
                            body.positionId = [body.positionId]
                        }
                        let taskId = results.insertId;
                        if (body.type3 == 1) {
                            body.partys.forEach(partyNo => {
                                body.positionId.forEach(positionId_ => {
                                    if (partyNo && partyNo.length > 0) {
                                        sql2 = sql2 + "(" + taskId + ",'" + partyNo + "'," + positionId_ + "),";
                                    }
                                });
                            });
                        } else {
                            body.partys.forEach(partyNo => {
                                if (partyNo && partyNo.length > 0) {
                                    sql2 = sql2 + "(" + taskId + ",'" + partyNo + "'," + null + "),";
                                }
                            });
                        }

                        sql2 = sql2.substring(0, sql2.length - 1);
                        mysqlCon.query(sql2, (error, results, fields) => {
                            if (error) {
                                mysqlCon.rollback();
                                res.json({
                                    status: false,
                                    error: error
                                });
                            } else {
                                mysqlCon.commit();
                                res.redirect("/admin/task");
                                //添加通知
                                let sql3 = "select id from user where partyNo in(";
                                body.partys.forEach(partyNo => {
                                    if (partyNo && partyNo.length > 0) {
                                        sql3 = sql3 + "'" + partyNo + "',";
                                    }
                                });
                                sql3 = sql3.substring(0, sql3.length - 1);
                                sql3 = sql3 + ")";
                                mysqlCon.query(sql3, (error, results, fields) => {
                                    if (!error && results.length > 0) {
                                        let sql4 = "insert into notification (notificationTitle,title,descs,status,fromId,type,userId,attachments)values";
                                        results.forEach(result => {
                                            sql4 = sql4 + "('你有新的任务','" + body.title + "','" + body.descs +
                                                "',0," + taskId + "," + body.type3 + "," + result.id + ",'" + attachments + "'),";
                                        });
                                        sql4 = sql4.substring(0, sql4.length - 1);
                                        mysqlCon.query(sql4, (error, results, fields) => {
                                            if (error) {
                                                console.log(error)
                                            }
                                        })
                                    } else {
                                        console.log(error)
                                    }
                                });
                            }
                        })
                    }
                });
            }
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
    }
});


router.post('/edit', function (req, res, next) {
    let body = req.body;
    if (body.id && body.title && body.descs &&
        body.status && body.type1 && body.type2 && body.type3 && body.starttime &&
        body.endtime) {
        let imgs = "";
        if (req.files)
            req.files.forEach(file => {
                imgs += file.filename;
                imgs += "||||";
            });
        if (!imgs) {
            let sql = "update task set title=?,descs=?," +
                "status=?,type1=?,type2=?,type3=?,starttime=?,endtime=? where id=?";
            mysqlCon.query(sql, [body.title, body.descs,
                    body.status, body.type1, body.type2, body.type3, body.starttime, body.endtime, body.id
                ],
                function (error, results, fields) {
                    if (error) {
                        res.redirect("/admin/index")
                    } else {
                        res.redirect("/admin/task")
                    }
                });
        } else {
            let sql = "update task set title=?,descs=?," +
                "status=?,type1=?,type2=?,type3=?,starttime=?,endtime=?,attachments=? where id=?";
            mysqlCon.query(sql, [body.title, body.descs,
                    body.status, body.type1, body.type2, body.type3, body.starttime, body.endtime, imgs, body.id
                ],
                function (error, results, fields) {
                    if (error) {
                        console.log(error)
                        res.redirect("/admin/index")
                    } else {
                        res.redirect("/admin/task")
                    }

                });
        }
    } else {
        res.redirect("/admin/index")
    }
});


/**
 * @api {get} /task/page 获取后台发布的任务
 * @apiName page
 * @apiGroup task
 *
 * @apiParam {Number} pageSize 分页大小
 * @apiParam {Number} pageNumber 页码
 * @apiParam {String} partyNo 用户党组织代码
 * @apiParam {Number} positionId 用户岗位id
 * @apiParam {Number} userId 用户id
 * @apiParam {Number} type3 任务类型 1岗位 2个人 可选 
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":[{"id":1,"title":"测试任务","descs":[{"element":"input","type":"text","title":"234"},{"element":"textarea","type":"text","title":"234324"},{"element":"input","type":"date","title":"2424"}],"attachments":["http://localhost:8080/d88f71e289b8a43f62b7d64e443ee61b.jpg"],"starttime":"2018-05-03T16:00:00.000Z","endtime":"2018-05-08T16:00:00.000Z","status":1,"type1":1,"type2":1,"type3":1,"createdAt":"2018-05-29T03:00:07.000Z"}],"sql":"select * from task order by createdAt desc limit 0,10","counts":1}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get("/page", function (req, res, next) {
    let countSql = "";
    let sql = "";

    if (req.query.pageSize && req.query.pageNumber && req.query.partyNo && req.query.positionId && req.query.userId && req.query.type3) {
        countSql = "select count(*) as count" +
            " from task_party left join task on task_party.taskId=task.id " +
            " left join (select * from task_user where userId=" +
            mysqlCon.escape(req.query.userId) + " or userId is null group" +
            " by taskId) as task_user on task_party.taskId=task_user.taskId" +
            " where partyNo=" +
            mysqlCon.escape(req.query.partyNo) +
            " and (positionId=" + mysqlCon.escape(req.query.positionId) + " or positionId is null)" +
            " and type3=" + mysqlCon.escape(req.query.type3);
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select *,task_user.createdAt as finishTime,task.createdAt as _createdAt,task.attachments as attachmentsTask" +
            ",task.title as _title,task.id as _id" +
            ",task_user.attachments as attachmentsUser" +
            " from task_party left join task on task_party.taskId=task.id " +
            " left join (select * from task_user where userId=" +
            mysqlCon.escape(req.query.userId) + " or userId is null group" +
            " by taskId) as task_user on task_party.taskId=task_user.taskId" +
            " where partyNo=" +
            mysqlCon.escape(req.query.partyNo) +
            " and (positionId=" + mysqlCon.escape(req.query.positionId) + " or positionId is null)" +
            " and type3=" + mysqlCon.escape(req.query.type3) +
            " order by _createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber && req.query.partyNo && req.query.positionId && req.query.userId) {
        countSql = "select count(*) as count from task_party left join task on task_party.taskId=task.id" +
            " left join task_user on task_party.taskId=task_user.taskId" +
            " where partyNo=" + mysqlCon.escape(req.query.partyNo) + " and (positionId=" +
            mysqlCon.escape(req.query.positionId) + " or positionId is null)"
        " )and (task_user.userId=" + mysqlCon.escape(req.query.userId) +
            " or task_user.userId is null)";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select *,task_user.createdAt as finishTime,task.createdAt as _createdAt,task.attachments as attachmentsTask" +
            ",task.title as _title,task.id as _id" +
            ",task_user.attachments as attachmentsUser" +
            " from task_party left join task on task_party.taskId=task.id " +
            " left join task_user on task_party.taskId=task_user.taskId" +
            " where partyNo=" +
            mysqlCon.escape(req.query.partyNo) +
            " and (positionId=" + mysqlCon.escape(req.query.positionId) + " or positionId is null)" +
            " and (task_user.userId=" + mysqlCon.escape(req.query.userId) +
            " or task_user.userId is null)" +
            " order by _createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber && req.query.partyNo) {
        countSql = "select count(*) as count from task_party left join task on task_party.taskId=task.id where partyNo=" +
            mysqlCon.escape(req.query.partyNo) + "";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from task_party left join task on task_party.taskId=task.id where partyNo=" +
            mysqlCon.escape(req.query.partyNo) + "" +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber) {
        countSql = "select count(*) as count from task";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from task" +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
        return;
    }
    mysqlCon.query(countSql, function (error, counts, fields) {
        if (error)
            res.json({
                status: false,
                error: error
            })
        else {
            mysqlCon.query(sql, function (error, results, fields) {
                if (error)
                    res.json({
                        status: false,
                        sql: sql,
                        error: error
                    })
                else {
                    let host = req.headers.host;
                    results.forEach(result => {
                        try {
                            result.descs = JSON.parse(result.descs);
                            result.total = result.periodCount;
                            result.finished = 0;
                        } catch (e) {

                        }
                        if (result._createdAt) {
                            result.createdAt = result._createdAt;
                            result.title = result._title;
                            result.id = result._id;
                            delete result._createdAt;
                            delete result._title;
                            delete result._id;
                        }

                        if (result.attachments) {
                            let attachments = result.attachments.split("||||");
                            result.attachments = [];
                            attachments.forEach(attachment => {
                                if (attachment) {
                                    if (attachment.startsWith("http"))
                                        result.attachments.push(attachment);
                                    else
                                        result.attachments.push("http://" + host + "/" + attachment);
                                }
                            });
                        } else {
                            result.attachments = [];
                        }

                        if (result.attachmentsTask) {
                            let attachments = result.attachmentsTask.split("||||");
                            result.attachments = [];
                            attachments.forEach(attachment => {
                                if (attachment) {
                                    if (attachment.startsWith("http"))
                                        result.attachments.push(attachment);
                                    else
                                        result.attachments.push("http://" + host + "/" + attachment);
                                }
                            });
                            delete result.attachmentsTask;
                        }
                        if (result.attachmentsUser) {
                            let attachments = result.attachmentsUser.split("||||");
                            result.attachmentsUser = [];
                            attachments.forEach(attachment => {
                                if (attachment) {
                                    if (attachment.startsWith("http"))
                                        result.attachmentsUser.push(attachment);
                                    else
                                        result.attachmentsUser.push("http://" + host + "/" + attachment);
                                }
                            });
                        } else {
                            result.attachmentsUser = [];
                        }
                    });

                    if (req.query.userId && results.length > 0) {
                        let queryTask_user = "";
                        let queryTask_finishSituation = "";
                        results.forEach(result => {
                            let date = new Date();
                            date.setDate(date.getDate() - Number.parseInt(result.type3));
                            let dateStr = date.format("yyyy-MM-dd");
                            queryTask_user = queryTask_user + "(select count(*) as count,taskId from task_user where " +
                                "taskId=" + result.id + " and userId=" + mysqlCon.escape(req.query.userId) + " and createdAt>'" +
                                dateStr + "') union all ";

                            queryTask_finishSituation = queryTask_finishSituation + "(select * from task_finishSituation where " +
                                "taskId=" + result.id + " and partyNo=" + mysqlCon.escape(req.query.partyNo) + " and createdAt>'" +
                                dateStr + "') union all ";

                        });
                        queryTask_user = queryTask_user.substr(0, queryTask_user.length - 11);
                        queryTask_finishSituation = queryTask_finishSituation.substr(0, queryTask_finishSituation.length - 11);
                        mysqlCon.query(queryTask_user, function (error, results_, fields) {
                            if (error) {
                                res.json({
                                    status: false,
                                    sql: sql,
                                    error: error
                                })
                            } else {
                                results_.forEach(results__ => {
                                    results.forEach(results2 => {
                                        if (results__.taskId == results2.id) {
                                            results2.finished = results__.count;
                                        }
                                    });
                                });
                                mysqlCon.query(queryTask_finishSituation, function (error, results_, fields) {
                                    if (error) {
                                        res.json({
                                            status: false,
                                            sql: sql,
                                            error: error
                                        })
                                    } else {
                                        results_.forEach(results__ => {
                                            results.forEach(results2 => {
                                                if (results__.taskId == results2.id) {
                                                    results2.position1Desc = results__.descs;
                                                }
                                            });
                                        });
                                        results.forEach(results2 => {
                                            if (results2.position1Desc)
                                                try {
                                                    results2.position1Desc = JSON.parse(results2.position1Desc);
                                                } catch (e) {

                                                }
                                        });
                                        res.json({
                                            status: true,
                                            data: results,
                                            counts: counts[0].count
                                        });
                                    }
                                })
                            }
                        })
                    } else {
                        res.json({
                            status: true,
                            data: results,
                            counts: counts[0].count
                        })
                    }
                };
            })
        }
    })
});

router.get("/aaa:id", function (req, res, next) {
    res.json({
        aaa: 11,
        query: req.query
    })
});


/**
 * @api {POST} /task/finish 完成任务
 * @apiName finish
 * @apiGroup task
 *
 * @apiParam {Number} userId 用户id 必填
 * @apiParam {Number} taskId 任务id 必填
 * @apiParam {Number} period 任务周期 对应任务的type2 必填
 * @apiParam {String} content 任务提交的内容 提交的json字符串 必填
 * @apiParam {String} partyNo 当前用户的党组织代码 必填
 * @apiParam {Number} targetPositionId 如果page接口有返回该字段则提交 可选
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.post("/finish", function (req, res, next) {
    let params = req.body;
    if (params.userId && params.taskId && params.period && params.partyNo) {
        if (params.targetPositionId) {
            mysqlCon.query("select * from user where partyNo=? and positionId=1", [params.partyNo],
                (error, results, fields) => {
                    if (error) {
                        res.json({
                            status: false,
                            error: error
                        });
                    } else if (results.length == 0) {
                        res.json({
                            status: false,
                            error: error,
                            msg: "你部没有该任务岗位指定的人员，无法提交该任务"
                        });
                    } else {
                        let sql = "insert into task_user (userId,taskId,content)values";
                        results.forEach(result => {
                            sql = sql + "(" + result.id + "," + params.taskId + ",'" + params.content + "'),"
                        });
                        sql = sql.substr(0, sql.length - 1);
                        mysqlCon.query(sql, (error, results, fields) => {
                            if (error) {
                                res.json({
                                    status: false,
                                    error: error
                                });
                            } else {
                                res.json({
                                    status: true,
                                    results: results
                                });
                                if (req.body.addId && req.body.addId.length > 0) {
                                    let userids = req.body.addId.split(",");
                                    if (userids.length > 0) {
                                        mysqlCon.query("select childtaskId from task where id=?", req.body.taskId,
                                            (error, results, fields) => {
                                                if (!error && results.length > 0) {
                                                    let sqlInsert = "insert into task_user (taskId,userId)values";
                                                    userids.forEach(userid => {
                                                        if (req.query.userId != userid)
                                                            sqlInsert = sqlInsert + "(" + req.body.taskId + "," + userid + "),"
                                                    });
                                                    sqlInsert = sqlInsert.substr(0, sqlInsert.length - 1);
                                                    mysqlCon.query(sqlInsert, (error) => {
                                                        if (error)
                                                            console.log(error)
                                                    })
                                                }
                                            });
                                    }
                                }
                            }
                        });
                    }
                })
        } else {
            let sql = "insert into task_user (userId,taskId,content)values(?,?,?)";
            mysqlCon.query(sql, [params.userId, params.taskId, params.content], (error, results, fields) => {
                if (error) {
                    res.json({
                        status: false,
                        error: error
                    });
                } else {
                    res.json({
                        status: true,
                        results: results
                    });
                    if (req.body.addId && req.body.addId.length > 0) {
                        let userids = req.body.addId.split(",");
                        if (userids.length > 0) {
                            mysqlCon.query("select childtaskId from task where id=?", req.body.taskId,
                                (error, results, fields) => {
                                    if (!error && results.length > 0) {
                                        let sqlInsert = "insert into task_user (taskId,userId)values";
                                        userids.forEach(userid => {
                                            if (req.query.userId != userid)
                                                sqlInsert = sqlInsert + "(" + req.body.taskId + "," + userid + "),"
                                        });
                                        sqlInsert = sqlInsert.substr(0, sqlInsert.length - 1);
                                        mysqlCon.query(sqlInsert, (error) => {
                                            if (error)
                                                console.log(error)
                                        })
                                    }
                                });
                        }
                    }
                    // mysqlCon.query(sql3, [params.taskId], (error, results, fields) => {

                    // });
                }
            });
        }
        // let date = new Date();
        // date.setDate(date.getDate() - Number.parseInt(params.period));
        // let countSql = "select count(*) as count,periodCount from task_user left join task on task.id=task_user.taskId where userId=? and taskId=? and task_user.createdAt>?";
        // mysqlCon.query(countSql, [params.userId, params.taskId, date], (error, results, fields) => {
        //     if (error) {
        //         res.json({
        //             status: false,
        //             error: error
        //         });
        //     } else {
        //         if (results && results[0] && results[0].count > 0 && results[0].count >= results[0].periodCount) {
        //             res.json({
        //                 status: false,
        //                 msg: "提交任务次数达到上限，不可提交",
        //                 results: results
        //             });
        //         } else {
        //         }
        //     }
        // })
    } else {
        res.json({
            status: false,
            error: "参数错误"
        });
    }
});

/**
 * @api {POST} /task/finish_position1 书记完成任务
 * @apiName finish_position1
 * @apiGroup task
 *
 * @apiParam {Number} userId 用户id
 * @apiParam {Number} taskId 任务id
 * @apiParam {Number} partyNo 用户党组织代码
 * @apiParam {Number} period 任务周期 对应任务的type2
 * @apiParam {String} content 任务提交的内容 提交的json字符串
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.post("/finish_position1", function (req, res, next) {
    let params = req.body;
    if (params.userId && params.taskId && params.period && params.partyNo && params.content) {
        let date = new Date();
        date.setDate(date.getDate() - Number.parseInt(params.period));
        let countSql = "select * from task_finishSituation where userId=? and taskId=? and createdAt>?";
        mysqlCon.query(countSql, [params.userId, params.taskId, date], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    error: error
                });
            } else {
                let sql = "";
                if (results && results.length > 0) {
                    sql = "update task_finishSituation set descs=? where id=?";
                    mysqlCon.query(sql, [params.content, results[0].id], (error, results, fields) => {
                        if (error) {
                            res.json({
                                status: false,
                                error: error
                            });
                        } else {
                            res.json({
                                status: true,
                                results: results,
                                msg: "提交成功，已更新"
                            });
                        }
                    });
                } else {
                    sql = "insert into task_finishSituation (userId,taskId,descs,partyNo)values(?,?,?,?)";
                    mysqlCon.query(sql, [params.userId, params.taskId, params.content, params.partyNo], (error, results, fields) => {
                        if (error) {
                            res.json({
                                status: false,
                                error: error
                            });
                        } else {
                            res.json({
                                status: true,
                                results: results,
                                msg: "提交成功，已新增"
                            });
                        }
                    });
                }
            }
        })
    } else {
        res.json({
            status: false,
            error: "参数错误"
        });
    }
});


/**
 * @api {GET} /task/page_finished 获取已完成的任务提交的数据
 * @apiName page_finished
 * @apiGroup task
 *
 * @apiParam {Number} pageSize 
 * @apiParam {Number} pageNumber 
 * @apiParam {Number} userId 用户id 必填
 * @apiParam {Number} taskId 任务id 必填
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"data":[{"id":13,"title":null,"taskId":27,"userId":1,"status":null,"attachments":null,"content":[{"element":"input","type":"text","title":"123213213","value":"123213"},{"element":"input","type":"selectperson","title":"2131313","value":"11,22,33,44,"},{"element":"textarea","type":"text","title":"123213","value":"32132131321"}],"createdAt":"2018-06-26 19:48:20"}],"counts":1}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */

router.get("/page_finished", function (req, res, next) {
    let params = req.query;
    if (params.pageNumber && params.pageSize && params.taskId && params.taskId) {
        countSql = "select count(*) as count from task_user where taskId=" + mysqlCon.escape(params.taskId) +
        " and userId=" + mysqlCon.escape(params.userId);
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from task_user where taskId=" + mysqlCon.escape(params.taskId) +
            " and userId=" + mysqlCon.escape(params.userId) +
            " limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else {
        res.json({
            status: false,
            error: "参数错误"
        });
    }

    mysqlCon.query(countSql, function (error, counts, fields) {
        if (error)
            res.json({
                status: false
            })
        else {
            mysqlCon.query(sql, function (error, results, fields) {
                if (error)
                    res.json({
                        status: false,
                        sql: sql,
                        error: error
                    })
                else {
                    results.forEach(result => {
                        try{
                            result.content=JSON.parse(result.content);
                        }catch(e){

                        }
                    });
                    res.json({
                        status: true,
                        data: results,
                        counts: counts[0].count
                    })
                };
            })
        }
    })
});


router.get("/disfavs", function (req, res, next) {
    let params = req.query;
    if (params.userid && params.fromId) {
        let sql1 = "delete from favs where userid=? and fromId=? and type=2";
        mysqlCon.query(sql1, [params.userid, params.fromId], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    error: error
                });
            } else {
                res.json({
                    status: true,
                    results: results
                });
                if (results.affectedRows > 0) {
                    let sql2 = "update activity set participant =participant-1 where id=?";
                    mysqlCon.query(sql2, [params.fromId], (error, results, fields) => {

                    });
                }
            }
        });
    } else {
        res.json({
            status: false,
            error: "参数错误"
        });
    }
});
router.get("/status", function (req, res, next) {
    let params = req.query;
    if (params.userid && params.fromId) {
        let sql = "select * from favs where userid=? and fromId=? and type=2";
        mysqlCon.query(sql, [params.userid, params.fromId], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    error: error
                });
            } else {
                res.json({
                    status: true,
                    results: results
                });
            }
        })
    } else {
        res.json({
            status: false,
            error: "参数错误"
        });
    }
});
router.get("/addViews", function (req, res, next) {
    let params = req.query;
    if (params.id) {
        let sql = "update activity set view=view+1 where id=?";
        mysqlCon.query(sql, [params.id], (error, results, fields) => {
            res.json({
                status: true
            });
        })
    }
});
router.get("/myactivity", function (req, res, next) {
    let params = req.query;
    if (params.userId) {
        let sql = "select * from favs left join activity on favs.fromId=activity.id where favs.userId=?";
        mysqlCon.query(sql, [params.userId], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    sql: sql
                });
            } else {
                let host = req.headers.host;
                results.forEach(result => {
                    if (result.imgs) {
                        let imgs = result.imgs.split("||||");
                        result.imgs = [];
                        imgs.forEach(img => {
                            if (img) {
                                if (img.startsWith("http"))
                                    result.imgs.push(img);
                                else
                                    result.imgs.push("http://" + host + "/" + img);
                            }
                        });
                    }
                });
                res.json({
                    status: true,
                    results: results
                });
            }
        })
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
    }
});
module.exports = router;