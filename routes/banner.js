var express = require('express');
var router = express.Router();
let path = require("path");
let mysqlCon = require("../db/mysqlCon");
/* GET users listing. */
//http://localhost:3000/user/login?loginname=test&pwd=111111
router.post('/add', function (req, res, next) {
    let body = req.body;
    if (body.name && body.descs &&
        body.type && body.orders) {
        let sql = "insert into banner (name, descs, imgs, " +
            " orders, type)values(?,?,?,?,?)";
        let imgs = "";
        if (req.files)
            req.files.forEach(file => {
                imgs += file.filename;
                imgs += "||||";
            });
        mysqlCon.beginTransaction(err => {
            if (err)
                throw err;
            else {
                mysqlCon.query(sql, [body.name, body.descs, imgs,
                    body.orders, body.type
                ], (error, results, fields) => {
                    if (error) {
                        mysqlCon.rollback();
                        res.json({
                            status: false,
                            error: error
                        });
                    } else {
                        mysqlCon.commit();
                        res.redirect("/admin/banner");
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
    if (body.id && body.name && body.descs &&
        body.type && body.orders) {
        let imgs = "";
        if (req.files)
            req.files.forEach(file => {
                imgs += file.filename;
                imgs += "||||";
            });
        if (!imgs) {
            let sql = "update banner set name=?,descs=?," +
                "type=?,orders=? where id=?";
            mysqlCon.query(sql, [body.name, body.descs,
                    body.type, body.orders,
                    body.id
                ],
                function (error, results, fields) {
                    if (error) {
                        res.redirect("/admin/index")
                    } else {
                        res.redirect("/admin/banner")
                    }

                });
        } else {
            let sql = "update banner set name=?,descs=?," +
                "type=?,orders=?,imgs=? where id=?";
            mysqlCon.query(sql, [body.name, body.descs,
                    body.type, body.orders, imgs,
                    body.id
                ],
                function (error, results, fields) {
                    if (error) {
                        console.log(error)
                        res.redirect("/admin/index")
                    } else {
                        res.redirect("/admin/place")
                    }

                });
        }
    } else {
        res.redirect("/admin/index")
    }
});

/**
 * @api {get} /banner/page 获取后台发布的轮播图
 * @apiName page
 * @apiGroup banner
 *
 * @apiParam {String} pageSize 分页大小
 * @apiParam {String} pageNumber 页码
 * @apiSuccessExample {json} 成功
 * {"status":true,"data":[{"id":1,"name":"认真学习党的思想","descs":"认真学习党的思想，认真学习党的思想","type":1,"orders":1,"imgs":["http://localhost:8080/3cda636d61540a9caebb0e43abdad65f.jpg","http://localhost:8080/b9f2624099244c968d3670c316e80170.jpg","http://localhost:8080/53a36f4557cc784363257638a026135e.jpg"],"createdAt":"2018-06-20T03:05:43.000Z"}],"counts":1}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get("/page", function (req, res, next) {
    let countSql = "";
    let sql = "";
    if (req.query.pageSize && req.query.pageNumber) {
        countSql = "select count(*) as count from banner";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from banner" +
            " order by orders asc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
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
                        error: error
                    })
                else {
                    let host = req.headers.host;
                    results.forEach(result => {
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
                            let sql3 = "update banner set participant =participant+1 where id=?";
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
                    let sql2 = "update banner set participant =participant-1 where id=?";
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
        let sql = "update banner set view=view+1 where id=?";
        mysqlCon.query(sql, [params.id], (error, results, fields) => {
            res.json({
                status: true
            });
        })
    }
});
router.get("/mybanner", function (req, res, next) {
    let params = req.query;
    if (params.userId) {
        let sql = "select * from favs left join banner on favs.fromId=banner.id where favs.userId=?";
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