var express = require('express');
var router = express.Router();
let path = require("path");
let mysqlCon = require("../db/mysqlCon");
/* GET users listing. */
//http://localhost:3000/user/login?loginname=test&pwd=111111
router.post('/add', function (req, res, next) {
    let body = req.body;
    if (body.title && body.descs &&
        body.status && body.type && body.partys) {
        let sql = "insert into artical (title, descs, attachments, " +
            " status, type)values(?,?,?,?,?)";
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
                    body.status, body.type
                ], (error, results, fields) => {
                    if (error) {
                        mysqlCon.rollback();
                        res.json({
                            status: false,
                            error: error
                        });
                    } else { //body.partyNos
                        let sql2 = "insert into artical_party (articalId, partyNo)values";
                        if (typeof body.partys == "string") {
                            body.partys = [body.partys]
                        }
                        body.partys.forEach(partyNo => {
                            if (partyNo && partyNo.length > 0) {
                                sql2 = sql2 + "(" + results.insertId + ",'" + partyNo + "'),";
                            }
                        });
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
                                res.redirect("/admin/artical");
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
        body.status && body.type) {
        let imgs = "";
        if (req.files)
            req.files.forEach(file => {
                imgs += file.filename;
                imgs += "||||";
            });
        if (!imgs) {
            let sql = "update artical set title=?,descs=?," +
                "status=?,type=? where id=?";
            mysqlCon.query(sql, [body.title, body.descs,
                body.status ,body.type,body.id
                ],
                function (error, results, fields) {
                    if (error) {
                        res.redirect("/admin/index")
                    } else {
                        res.redirect("/admin/artical")
                    }
                });
        } else {
            let sql = "update artical set title=?,descs=?," +
                "status=?,type=?,attachments=? where id=?";
            mysqlCon.query(sql, [body.title, body.descs,
                body.status ,body.type,attachments, body.id
                ],
                function (error, results, fields) {
                    if (error) {
                        console.log(error)
                        res.redirect("/admin/index")
                    } else {
                        res.redirect("/admin/artical")
                    }

                });
        }
    } else {
        res.redirect("/admin/index")
    }
});
/**
 * @api {get} /artical/page 获取后台发布的文章
 * @apiName page
 * @apiGroup artical
 *
 * @apiParam {String} pageSize 分页大小
 * @apiParam {String} pageNumber 页码
 * @apiParam {String} partyNo 用户党组织代码，可选 不填则返回全部文章
 * @apiParam {String} type 文章类型 1学习资料  2学习视频  3党务公开  3支部风采  5党风建设 可选 不填则返回全部类型
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":[{"id":1,"title":"测试任务","descs":"测试任务","attachments":["http://localhost:8080/d88f71e289b8a43f62b7d64e443ee61b.jpg"],"starttime":"2018-05-03T16:00:00.000Z","endtime":"2018-05-08T16:00:00.000Z","status":1,"type1":1,"type2":1,"type3":1,"createdAt":"2018-05-29T03:00:07.000Z"}],"sql":"select * from artical order by createdAt desc limit 0,10","counts":1}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get("/page", function (req, res, next) {
    let countSql = "";
    let sql = "";
    if (req.query.pageSize && req.query.pageNumber && req.query.type&& req.query.partyNo) {
        countSql = "select count(*) as count from artical_party left join artical on artical_party.articalId=artical.id where type=" +
            mysqlCon.escape(req.query.type) + " and partyNo="+mysqlCon.escape(req.query.partyNo);
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from artical_party left join artical on artical_party.articalId=artical.id where type=" +
            mysqlCon.escape(req.query.type) + " and partyNo="+mysqlCon.escape(req.query.partyNo)+ 
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber && req.query.type) {
        countSql = "select count(*) as count from artical_party left join artical on artical_party.articalId=artical.id where type=" +
            mysqlCon.escape(req.query.type) + "";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from artical_party left join artical on artical_party.articalId=artical.id where type=" +
            mysqlCon.escape(req.query.type) + "" +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber && req.query.partyNo) {
        countSql = "select count(*) as count from artical_party left join artical on artical_party.articalId=artical.id where partyNo=" +
            mysqlCon.escape(req.query.partyNo) + "";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from artical_party left join artical on artical_party.articalId=artical.id where partyNo=" +
            mysqlCon.escape(req.query.partyNo) + "" +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber) {
        countSql = "select count(*) as count from artical";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from artical" +
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
router.get("/favs", function (req, res, next) {
    let params = req.query;
    if (params.userid && params.fromId) {
        let countSql = "select count(id) as count from favs where userid=? and fromId=? and type=2";
        mysqlCon.query(countSql, [params.userid, params.fromId], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    error: error
                });
            } else {
                if (results[0].count > 0) {
                    res.json({
                        status: true,
                        results: results
                    });
                } else {
                    let sql = "insert into favs (userId,fromId,type)values(?,?,?)";
                    mysqlCon.query(sql, [params.userid, params.fromId, 2], (error, results, fields) => {
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
                            let sql3 = "update artical set participant =participant+1 where id=?";
                            mysqlCon.query(sql3, [params.fromId], (error, results, fields) => {

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
                    let sql2 = "update artical set participant =participant-1 where id=?";
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
        let sql = "update artical set view=view+1 where id=?";
        mysqlCon.query(sql, [params.id], (error, results, fields) => {
            res.json({
                status: true
            });
        })
    }
});
router.get("/myartical", function (req, res, next) {
    let params = req.query;
    if (params.userId) {
        let sql = "select * from favs left join artical on favs.fromId=artical.id where favs.userId=?";
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