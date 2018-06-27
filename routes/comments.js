let express = require('express');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");

/* GET home page. */
router.post('/add', function (req, res, next) {
    let sql = "insert into comments (content,createdAt,placeId,nickname,userId,rating)" +
        "values(?,?,?,?,?,?)";
    mysqlCon.query(sql, [req.query.content, new Date(), req.query.placeId,
            req.query.nickname, req.query.userId, req.query.rating
        ],
        function (error, results, fields) {
            if (error) throw error;

        });
    res.json({
        status: 0,
        data: "" + JSON.stringify(req.query)
    });
});
//http://localhost:3000/comments/save?place.id=10&contont=2113123&point=5&police.policeid=18
router.post('/save', function (req, res, next) {
    let imgs = "";
    if (req.imgBase64) {
        req.imgBase64.forEach(img => {
            imgs += img.filename;
            imgs += "||||";
        });
    }
    let sql = "insert into comments (content,fromId,loginname,userId,rating,status,type,imgs)" +
        "values(?,?,?,?,?,?,?,?)";
    let params = req.body;
    mysqlCon.query(sql, [params.content, params.placeId,
            params.loginname, params.userId, params.rating, true, 1, imgs
        ],
        function (error, results, fields) {
            if (error) {
                res.json({
                    status: false,
                    error: error
                });
            } else {
                res.json({
                    status: true,
                    sql: sql
                });
            }

        });
});
router.get("/page", function (req, res, next) {
    let countSql = "";
    let sql = "";
    if (req.query.placeId && req.query.pageSize && req.query.pageNumber) {
        countSql = "select count(id) as count from comments where type=1 and fromId=" + req.query.placeId;
        let fromId = Number.parseInt(req.query.placeId);
        let limit1 = (Number.parseInt(req.query.pageNumber) - 1) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from comments where type=1 and fromId=" + mysqlCon.escape(fromId) +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.userId) {
        let userId = Number.parseInt(req.query.userId);
        let limit1 = (Number.parseInt(req.query.pageNumber) - 1) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        countSql = "select count(id) as count from comments where type=1 and userId=" + mysqlCon.escape(userId);
        sql = "select * from comments where type=1 and userId=" + mysqlCon.escape(userId) +
            " order by createdAt desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber) {
        countSql = "select count(id) as count from comments";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from comments" +
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
                        }else{
                            result.imgs = [];
                        }
                    });
                    res.json({
                        status: true,
                        data: results,
                        sql: sql,
                        counts: counts[0].count
                    })
                };
            })
        }
    })
});

module.exports = router;