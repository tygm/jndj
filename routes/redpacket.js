let express = require('express');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");

/* GET home page. */

router.post('/add', function (req, res, next) {
    let params = req.body;
    if (params.name, params.title, params.descs, params.type, params.total,
        params.dividers, params.placeId, params.rules, params.notice,
        params.starttime, params.endtime) {
        let sql = "insert into redpacket (name, title, descs, type, total, " +
            "dividers, placeId, rules, notice, imgs, starttime, " +
            "endtime)values(?,?,?,?,?,?,?,?,?,?,?,?)";
        let imgs = "";
        if(req.files)
        req.files.forEach(file => {
            imgs += file.filename;
            imgs += "||||";
        });
        mysqlCon.query(sql, [params.name, params.title, params.descs, params.type, params.total,
            params.dividers, params.placeId, params.rules, params.notice,
            imgs, params.starttime, params.endtime
        ], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    error: error,
                    files: req.files
                });
            } else {
                res.redirect("/admin/redpacket")
            }
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
    }
});
router.get("/addPage", function (req, res, next) {
    //res.sendFile(__dirname + "/addRedPacket.html")
    res.render("addRedPacket")
});
router.get("/page", function (req, res, next) {
    let countSql = "select count(*) as count from redpacket";
    let sql = "";
    if (req.query.pageSize && req.query.pageNumber) {
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select redpacket.*,redpacket.name as redpacketName,redpacket.imgs as redpacketImgs,redpacket.id as redpacketId,redpacket.type as redpacketType" +
            ",place.*,place.name as placeName from redpacket left join place on redpacket.placeId=place.id" +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
        return;
    }
    mysqlCon.query(countSql, function (error, results, fields) {
        if (error)
            res.json({
                status: false,
                sql: sql,
                error: error
            })
        else {
            let count = results[0].count;
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
                        if (result.redpacketImgs) {
                            let imgs = result.redpacketImgs.split("||||");
                            result.imgs = [];
                            imgs.forEach(img => {
                                if (img) {
                                    if (img.startsWith("http"))
                                        result.imgs.push(img);
                                    else
                                        result.imgs.push("http://" + host + "/" + img);
                                }
                            });
                        }else{
                            result.imgs = [];
                        }
                    });
                    res.json({
                        status: true,
                        data: results,
                        sql: sql,
                        count:count
                    })
                };
            });
        }
    })
});
router.get("/obtain", function (req, res, next) {
    let params = req.query;
    if (params.redpacketId && params.userId) {
        let querySql1 = "select count(*) as count from redpacketrecords where userId=? and redpacketId=?";
        mysqlCon.query(querySql1, [params.userId, params.redpacketId], function (error, results, fields) {
            if (error) {
                res.json({
                    status: false,
                    msg: "操作失败",
                    error: error
                });
            } else if (results[0].count > 0) {
                res.json({
                    status: false,
                    msg: "你已经领取过该红包！"
                });
            } else {
                let querySql2 = "select * from redpacket where id=?";
                mysqlCon.query(querySql2, [params.redpacketId], function (error, results, fields) {
                    if (error) {
                        res.json({
                            status: false,
                            msg: "操作失败",
                            error: error
                        });
                    } else {
                        if (results.length > 0) {
                            let total = results[0].total;
                            let received = results[0].received;
                            let receivers = results[0].receivers;
                            let dividers = results[0].dividers;
                            let type = results[0].type; //1平分  2随机
                            if (received >= total) {
                                res.json({
                                    status: false,
                                    msg: "该红包已经被抢光了"
                                });
                            } else if (type == 1) {
                                let money = (total / dividers).toFixed(1);
                                if ((dividers - receivers) == 1) {
                                    money = total - received;
                                }
                                mysqlCon.query("update redpacket set receivers=receivers+1,received=received+? where id=?", [money, params.redpacketId], function (error, results, fields) {
                                    if (error) {
                                        res.json({
                                            status: false,
                                            msg: "操作失败",
                                            error: error
                                        });
                                    } else {
                                        res.json({
                                            status: true,
                                            msg: "抢红包成功，抢到" + money + "元",
                                            money:money
                                        });
                                        mysqlCon.query("insert into redpacketrecords (userId, redpacketId, money, status)" +
                                            "values(?,?,?,true)", [params.userId, params.redpacketId, money],
                                            function (error, results, fields) {
                                                console.log(error)
                                                console.log(results)
                                                console.log(fields)
                                            });
                                    }
                                });
                            } else if (type == 2) {
                                let money = ((total / dividers) * (Math.random() * 2)).toFixed(1);
                                if ((dividers - receivers) == 1) {
                                    money = total - received;
                                }
                                mysqlCon.query("update redpacket set receivers=receivers+1,received=received+? where id=?", [money, params.redpacketId], function (error, results, fields) {
                                    if (error) {
                                        res.json({
                                            status: false,
                                            msg: "操作失败",
                                            error: error
                                        });
                                    } else {
                                        res.json({
                                            status: true,
                                            msg: "抢红包成功，抢到" + money + "元",
                                            money:money
                                        });
                                        mysqlCon.query("insert into redpacketrecords (userId, redpacketId, money, status)" +
                                            "values(?,?,?,true)", [params.userId, params.redpacketId, money],
                                            function (error, results, fields) {
                                                console.log(error)
                                                console.log(results)
                                                console.log(fields)

                                            });
                                    }
                                });
                            } else {
                                res.json({
                                    status: false,
                                    msg: "红包数据有误！"
                                });
                            }
                        } else {
                            res.json({
                                status: false,
                                msg: "指定的红包不存在！"
                            });
                        }
                    }
                })
            }
        })
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
    }
});
router.post("/del",(req, res, next) => {
    let params=req.body;
    if(params.id){
        mysqlCon.query("delete * from redpacketrecords where")
    }else{
        res.redirect("/admin/index");
    }
});
router.get("/status", (req, res, next) => {
    let params = req.query;
    if (params.userId && params.redpacketId) {
        let sql = "select count(*) as count from redpacketrecords where userId=? and redpacketId=?";
        mysqlCon.query(sql, [params.userId, params.redpacketId], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    msg: "查询失败"
                });
            } else {
                res.json({
                    status: true,
                    results: results
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
router.get("/my", (req, res, next) => {
    let params = req.query;
    if (params.userId) {
        let sql = "select  redpacket.*,redpacket.name as redpacketName,place.*,place.name as placeName,redpacketrecords.* from redpacketrecords left join redpacket on redpacketrecords.redpacketId=redpacket.id" +
            " left join place on redpacket.placeId=place.id where userId=? order by redpacket.createdAt desc";
        mysqlCon.query(sql, [params.userId], (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    msg: "查询失败",
                    error: error
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
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
    }
});
module.exports = router;