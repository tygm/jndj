var express = require('express');
var router = express.Router();
let path = require("path");
let mysqlCon = require("../db/mysqlCon");



/* GET home page. */
router.post('/add', function (req, res, next) {
    let body = req.body;
    if (body.notificationTitle &&
        body.title && body.descs) {
        let attachments = "";
        if (req.files) {
            req.files.forEach(file => {
                attachments += file.filename;
                attachments += "||||";
            });
        }
        if (typeof body.partys == "string") {
            body.partys = [body.partys]
        }
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
                    sql4 = sql4 + "('"+body.notificationTitle+"','" + body.title + "','" + body.descs +
                        "',0," + "0" + "," + "3" + "," + result.id + ",'" + attachments + "'),";
                });
                sql4 = sql4.substring(0, sql4.length - 1);
                mysqlCon.query(sql4, (error, results, fields) => {
                    if (error) {
                        console.log(error)
                        res.redirect("/admin/index");
                    }else{
                        res.redirect("/admin/notification");
                    }
                })
            } else {
                console.log(error)
                res.redirect("/admin/index");
            }
        });
    } else {
        res.redirect("/admin/index");
    }
});


/**
 * @api {get} /notification/page 获取通知
 * @apiName page
 * @apiGroup notification
 *
 * @apiParam {Number} pageSize 分页大小
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} userId 用户id
 * @apiParam {Number} type 通知类型 1岗位任务通知 2个人任务通知  3其他通知 可选 不填则返回全部类型通知
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":[{"id":8,"notificationTitle":"你有新的任务","title":"34535","descs":"34535","attachments":[],"status":0,"fromId":10,"type":1,"userId":1,"createdAt":"2018-06-22T07:07:34.000Z"},{"id":4,"notificationTitle":"你有新的任务","title":"12313","descs":"1313","attachments":[],"status":0,"fromId":9,"type":1,"userId":1,"createdAt":"2018-06-22T06:50:56.000Z"}],"counts":2}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get("/page", function (req, res, next) {
    let countSql = "";
    let sql = "";
    if (req.query.pageSize && req.query.pageNumber && req.query.userId && req.query.type) {
        countSql = "select count(*) as count from notification where userId=" +
            mysqlCon.escape(req.query.userId) + " and type=" + mysqlCon.escape(req.query.type);
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from notification where userId=" +
            mysqlCon.escape(req.query.userId) +
            " and type=" + mysqlCon.escape(req.query.type) +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber && req.query.userId) {
        countSql = "select count(*) as count from notification where userId=" +
            mysqlCon.escape(req.query.userId);
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from notification where userId=" +
            mysqlCon.escape(req.query.userId) + "" +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber && req.query.type) {
        countSql = "select count(distinct createdAt) as count from notification where type=" +
            mysqlCon.escape(req.query.type);
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from notification where type=" +
            mysqlCon.escape(req.query.type) + " group by createdAt" +
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



/**
 * @api {get} /notification/update 更新通知状态为已读/未读
 * @apiName update
 * @apiGroup notification
 *
 * @apiParam {Number} id 通知id
 * @apiParam {Number} status 1已读 0未读
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get("/update", function (req, res, next) {
    if (req.query.id && req.query.status) {
        mysqlCon.query("update notification set status=? where id=?", [req.query.status, req.query.id], (error, results, fields) => {
            if (!error) {
                res.json({
                    status: true
                })
            } else {
                res.json({
                    status: false,
                    msg: "操作失败",
                    error: error
                })
            }
        })
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

module.exports = router;