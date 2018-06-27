let express = require('express');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");

/* GET home page. */
router.post('/add', function (req, res, next) {
    let sql = "insert into place (name,descs,type,longitude,latitude,address,contact,imgs,uid,businessmanId)" +
        "values(?,?,?,?,?,?,?,?,?,?)";
    let params = req.query;
    if (req.body.name)
        params = req.body;
    if (params.name &&
        params.longitude && params.latitude &&
        params.address) {
        let imgs = "";
        if (req.files)
            req.files.forEach(file => {
                imgs += file.filename;
                imgs += "||||";
            });
        mysqlCon.query(sql, [params.name, params.description, params["type"],
                params.longitude, params.latitude,
                params.address, params.contact, imgs, params.uid, 0
            ],
            function (error, results, fields) {
                if (error) {
                    res.json({
                        status: false,
                        data: "" + JSON.stringify(req.query),
                        msg: JSON.stringify(error)
                    });
                } else {
                    if (req.body.type) {
                        res.redirect("/admin/place")
                    } else {
                        res.json({
                            status: true,
                            data: "" + JSON.stringify(req.query),
                            query: req.query,
                            body: req.body
                        });
                    }
                }

            });
    } else {
        if (req.body.type) {
            console.log("aaaaaa")
            res.redirect("/admin/placeAdd")
        } else {
            res.json({
                status: false,
                data: "" + JSON.stringify(req.query),
                query: req.query,
                body: req.body,
                params: params
            });
        }
    }

});
router.post('/edit', function (req, res, next) {
    let params = req.query;
    if (req.body.name)
        params = req.body;
    if (params.id && params.name &&
        params.longitude && params.latitude &&
        params.address) {
        let imgs = "";
        if (req.files)
            req.files.forEach(file => {
                imgs += file.filename;
                imgs += "||||";
            });
        if (!imgs) {
            let sql = "update place set name=?,descs=?,longitude=?,latitude=?," +
                "address=?,contact=?,businessmanId=? where id=?";
            mysqlCon.query(sql, [params.name, params.description,
                    params.longitude, params.latitude,
                    params.address, params.contact, 0, params.id
                ],
                function (error, results, fields) {
                    if (error) {
                        console.log(error)
                        res.redirect("/admin/index")
                    } else {
                        res.redirect("/admin/place")
                    }

                });
        } else {
            let sql = "update place set name=?,descs=?,longitude=?,latitude=?," +
                "address=?,contact=?,businessmanId=?,imgs=? where id=?";
            mysqlCon.query(sql, [params.name, params.description,
                    params.longitude, params.latitude,
                    params.address, params.contact, 0, imgs, params.id
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
        console.log("aaaaaa")
        if (req.body.type) {
            console.log("aaaaaa")
            res.redirect("/admin/index")
        } else {
            res.json({
                status: false,
                data: "" + JSON.stringify(req.query),
                query: req.query,
                body: req.body,
                params: params
            });
        }
    }

});
router.get("/list", function (req, res, next) {
    if (req.query.pageNo && req.query.pageSize) {
        let countSql = "select count(id) as count from place where name like ?"
        let sql = "select * from place where name like ? order by id desc limit " + (Number.parseInt(req.query.pageNo)) * req.query.pageSize +
            "," + req.query.pageSize + "";
        let keywords = "%%";
        if (req.query.keywords)
            keywords = "%" + req.query.keywords + "%";

        mysqlCon.query(countSql, [keywords], function (error, results, fields) {
            if (error)
                res.json({
                    status: false
                })
            else {
                let count = results[0].count;
                mysqlCon.query(sql, [keywords], function (error, results, fields) {
                    if (error)
                        res.json({
                            status: false,
                            sql: sql
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
                            } else {
                                result.imgs = [];
                            }
                        });
                        res.json({
                            status: true,
                            results: results,
                            count: count,
                        })
                    };
                })
            }


        })
    } else {
        res.json({
            status: false,
            msg: "参数错误 pageNo pegeSize",
            sql: sql
        });
    }
});

router.get("/listAllSimple", function (req, res, next) {
    mysqlCon.query("select id,name from place", function (error, results, fields) {
        res.json({
            status: true,
            results: results
        })
    })
});

function algorithm(longitude1, latitude1, longitude2, latitude2) {

    let Lat1 = rad(latitude1); // 纬度

    let Lat2 = rad(latitude2);

    let a = Lat1 - Lat2; //两点纬度之差

    let b = rad(longitude1) - rad(longitude2); //经度之差

    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(Lat1) * Math.cos(Lat2) * Math.pow(Math.sin(b / 2), 2))); //计算两点距离的公式

    s = s * 6378137.0; //弧长乘地球半径（半径为米）

    s = Math.round(s * 10000) / 10000; //精确距离的数值

    return s;

}

function rad(d) {
    return d * Math.PI / 180.00; //角度转换成弧度
}
router.get("/getPlacesByUserPoint", function (req, res, next) {
    console.log("111", req.session.aaa)
    if (req.query.userpoint && req.query.range) {
        let sql = "select * from place";
        if (req.query.type) {
            sql = sql + " where type=" + req.query.type;
        }
        mysqlCon.query(sql, function (error, results, fields) {
            if (error)
                res.json({
                    status: false
                })
            else {
                let host = req.headers.host;
                results = results.filter(result => {
                    let ds = algorithm(req.query.userpoint.split(",")[0], req.query.userpoint.split(",")[1],
                        result.longitude, result.latitude);
                    result.ds = ds;
                    if (result.imgs) {
                        let imgs = result.imgs.split("||||");
                        result.imgs = [];
                        imgs.forEach(img => {
                            if (img) {
                                if (img.startsWith("http"))
                                    result.imgs.push({url:img});
                                else
                                    result.imgs.push({url:"http://" + host + "/" + img});
                            }
                        });
                    } else
                        result.imgs = [];
                    if (ds > req.query.range)
                        return false;
                    else {
                        return true;
                    }
                })
                res.json({
                    status: true,
                    rs: results
                })
            }
        })
    } else {
        res.json({
            status: false,
            msg: "参数错误",
            sql: sql
        });
    }
});
module.exports = router;