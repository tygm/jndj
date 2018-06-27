let express = require('express');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");

function add(req, res, next) {
    let params = req.body;
    if(!params.mac)
        params=req.query;
    if (params.mac && params.name && params.mark && params.placeId && params.uuid 
        && params.major && params.minor && params.longitude && params.latitude) {
        let sql = "insert into ibeacon (mac, name, mark,  mp3,placeId, uuid, major, minor,imgs, longitude, latitude)values" +
            "(?,?,?,?,?,?,?,?,?,?,?)";
        let imgs = "";
        if (params.imgs)
            imgs = params.imgs;

        let mp3 =  params.mp3;
        if (req.files && req.files[0]) {
            mp3 = req.files[0].filename
        }
        mysqlCon.query(sql, [params.mac, params.name, params.mark, mp3, params.placeId,
                params.uuid, params.major, params.minor, imgs, params.longitude, params.latitude
            ],
            (error, results, fields) => {
                if (error) {
                    res.json({
                        status: false,
                        error: error
                    });
                } else {
                    if(req.body.mac){
                        res.redirect("/admin/ibeacon")
                    }else
                    res.json({
                        status: true,
                    });
                }
            })
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        });
    }
}
router.get("/add", add)
router.post("/add", add)
router.get("/addForm", (req, res, next) => {
    res.render("forms/ibeaconAdd")
})

router.get("/page", function (req, res, next) {
    let countSql = "";
    let sql = "";
    if (req.query.placeId && req.query.pageSize && req.query.pageNumber) {
        countSql = "select count(id) as count from ibeacon and placeId=" + req.query.placeId;
        let placeId = Number.parseInt(req.query.placeId);
        let limit1 = (Number.parseInt(req.query.pageNumber) - 1) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from ibeacon and placeId=" + mysqlCon.escape(placeId) +
            " limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
    } else if (req.query.pageSize && req.query.pageNumber) {
        countSql = "select count(id) as count from ibeacon";
        let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
        let limit2 = Number.parseInt(req.query.pageSize);
        sql = "select * from ibeacon" +
            " order by id desc limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
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
                        } else {
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