let express = require('express');
let fs = require('fs');
let path = require('path');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");
const querystring = require('querystring');
const superagent = require('superagent');
const cheerio = require('cheerio');

function doSpider(url, cookie, post, params) {
    return new Promise((resolve, reject) => {
        if (!post) {
            superagent.get(url).set({
                cookie: cookie
            }).query(params || {}).end((err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(res);
                }
            })
        } else {
            superagent.post(url).set({
                cookie: cookie
            }).send(params || {}).type("form").end((err, res) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(res);
                }
            })
        }
    })
}

/**
 * @api {post} /xfwSpider/shyk 三会一课列表
 * @apiName shyk
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie 必填
 * @apiParam {String} shykType 会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课
 * @apiParam {String} createdepartmentid 组织id 默认空即可
 * @apiParam {String} departmentname 组织名称 默认空即可
 * @apiParam {String} departmenttype 搜索层级 now本级 down包含下级
 * @apiParam {String} cpc_user_id 留空 
 * @apiParam {String} title 搜索词
 * @apiParam {String} shijianBegin 搜索开始时间
 * @apiParam {String} shijianEnd 搜索结束时间
 * @apiParam {String} pageNumber 页码
 * @apiParam {String} pageSize 分页长度
 * 
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":[[{"text":"机关党支部民主评议工作"},{"text":"2018-03-16"},{"text":"已备案"},{"text":"查看修改删除个人详情","id":"575892"}],[{"text":"十九大专题学习"},{"text":"2017-12-01"},{"text":"已备案"},{"text":"查看修改删除个人详情","id":"499055"}]]}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.post("/shyk", function (req, res, next) {
    req.body = req.query;
    if (req.body.cookie && req.body.shykType) {
        let urls1 = ["http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcCongress/searchlist.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcBranch/searchlist.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcPartygroup/searchlist.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcPartylecture/searchlist.do"
        ];

        let urls2 = ["http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcCongress/list.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcBranch/list.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcPartygroup/list.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcPartylecture/list.do"
        ];
        let shykType = Number.parseInt(req.body.shykType);
        let url1 = urls1[shykType];
        let url2 = urls2[shykType];
        doSpider("http://tjdyda.tjzzb.gov.cn/tjsinfo/zbb/system/danganleft.do", req.body.cookie, false, {})
            .then(resp => {
                let onclickStr = cheerio.load(resp.text)(".first_dd").find("a").first().attr("onclick");
                if (onclickStr.indexOf("searchlist") > -1) {
                    doSpider(url1, req.body.cookie, true, {
                            createdepartmentid: req.body.createdepartmentid || "4c7b732092c54fc4bc0a4d53fa245b23",
                            departmentname: req.body.departmentname || "",
                            departmenttype: req.body.departmenttype || "down",
                            cpc_user_id: req.body.cpc_user_id || "",
                            title: req.body.title || "",
                            shijianBegin: req.body.shijianBegin || "",
                            pageNumber: req.body.pageNumber || "",
                            pageSize: req.body.pageSize || "",
                        })
                        .then(resp => {

                            let trsData = [];
                            let $ = cheerio.load(resp.text);
                            let trs = $($("table").get(1)).find("tr")
                            for (let i = 0; i < trs.length; i++) {
                                if (i == 0)
                                    continue
                                let tds = $(trs[i]).find("td");
                                if (tds.length > 0) {
                                    let trData = [];
                                    trsData.push(trData);
                                    for (let j = 0; j < tds.length; j++) {
                                        let tdData = {};
                                        trData.push(tdData);
                                        tdData.text = $.load(tds[j]).text().replace(/\t|\n/g, "").trim();
                                        if ($.load(tds[j])("a").length > 0) {
                                            let href = $.load(tds[j])("a").first().attr("href");
                                            tdData.id = querystring.parse(href.split("?")[1]).id;
                                        }
                                    }
                                }
                            }
                            res.json({
                                status: true,
                                data: trsData
                            })
                        }, j => {
                            res.json({
                                status: false,
                                msg: "爬取出错",
                                error: j
                            })
                        });
                } else {
                    console.log(req.query)
                    console.log(req.body)
                    doSpider(url2, req.body.cookie, true, {
                            title: req.body.title || "",
                            createtimeBegin: req.body.shijianBegin || "",
                            createtimeEnd: req.body.shijianEnd || "",
                            pageNumber: req.body.pageNumber || "",
                            pageSize: req.body.pageSize || "",
                        })
                        .then(resp => {
                            let trsData = [];
                            let $ = cheerio.load(resp.text);
                            let trs = $($("table").get(1)).find("tr")
                            for (let i = 0; i < trs.length; i++) {
                                if (i == 0)
                                    continue
                                let tds = $(trs[i]).find("td");
                                if (tds.length > 0) {
                                    let trData = [];
                                    trsData.push(trData);
                                    for (let j = 0; j < tds.length; j++) {
                                        let tdData = {};
                                        trData.push(tdData);
                                        tdData.text = $.load(tds[j]).text().replace(/\t|\n/g, "").trim();
                                        if ($.load(tds[j])("a").length > 0) {
                                            let href = $.load(tds[j])("a").first().attr("href");
                                            tdData.id = querystring.parse(href.split("?")[1]).id;
                                        }
                                    }
                                }
                            }
                            res.json({
                                status: true,
                                data: trsData
                            })
                        }, j => {
                            res.json({
                                status: false,
                                msg: "爬取出错",
                                error: j
                            })
                        });
                }
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {get} /xfwSpider/shyk_view 三会一课详情查看
 * @apiName shyk_view
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} shykType 会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课
 * @apiParam {String} id 详情id
 * 
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":[[{"text":"机关党支部民主评议工作"},{"text":"2018-03-16"},{"text":"已备案"},{"text":"查看修改删除个人详情","id":"575892"}],[{"text":"十九大专题学习"},{"text":"2017-12-01"},{"text":"已备案"},{"text":"查看修改删除个人详情","id":"499055"}]]}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/shyk_view", function (req, res, next) {
    if (req.query.cookie && req.query.id && req.query.shykType) {
        let urls = ["http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcCongress/show.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcBranch/show.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcPartygroup/show.do",
            "http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcPartylecture/show.do"
        ];
        let url = urls[req.query.shykType];
        doSpider(url, req.query.cookie, false, {
                id: req.query.id
            })
            .then(resp => {
                console.log(resp)
                res.json({
                    status: true,
                    data: cheerio.load(resp.text, {
                        decodeEntities: false
                    })("table").first().html().replace(/\t|\n/g, "").trim()
                })
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {get} /xfwSpider/shyk_updateparams 修改会议时时获取记录的参数
 * @apiName shyk_updateparams
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} id 会议记录的id
 * @apiParam {String} shykType 会议类型 0 1 2 3 
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"data":{"inputs":[{"type":"hidden","name":"id","value":"575892"},{"id":"basePath","type":"hidden","value":"http://tjdyda.tjzzb.gov.cn:80/"}],"files":[{"fid":"325c0e33c6f141ee948a14395648ba7a","fname":"123_副本_副本.png","_fname":"81f0f288077e40459a4b6aa8ad0a303e.png"},{"fid":"b839f8d9ffae4067bb762e98b489a43b","fname":"微信图片_20180408140211.jpg","_fname":"79533a1fe9bf4f35ba8e9861a1dcbded.jpg"}],"users":[{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"repassword":null,"toplevel":null,"post":null,"shengriString":null,"departmentname":null,"contact":null,"idcard":"23202db12f744889b76d6d6803f116d9","name":"孙兆彬","banben":null,"id":"23202db12f744889b76d6d6803f116d9","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"repassword":null,"toplevel":null,"post":null,"shengriString":null,"departmentname":null,"contact":null,"idcard":"15a692e5cc4340bf88a47bbc08e4570d","name":"任美蓉","banben":null,"id":"15a692e5cc4340bf88a47bbc08e4570d","department":null,"maintype":null}]}}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/shyk_updateparams", function (req, res, next) {
    if (req.query.cookie && req.query.id && req.query.shykType) {
        //http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcCongress/edit.do?id=575892&pgnumber=1
        let urls = ["http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcCongress/edit.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcBranch/edit.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartygroup/edit.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartylecture/edit.do"
        ]
        let url = urls[Number.parseInt(req.query.shykType)];
        doSpider(url, req.query.cookie, false, {
                id: req.query.id
            })
            .then(resp => {
                let $ = cheerio.load(resp.text);
                let originalData = {
                    inputs: []
                };
                $("input,textarea").each((i, element) => {
                    if (element.name == "textarea")
                        element.attribs.value = cheerio.load(element).text().replace(/\t|\n/g, "")
                    originalData.inputs.push(element.attribs);
                });
                let files = [];
                $(".uploadify-queue-item").each((i, element) => {
                    let onclickStr = $(element).find("a").attr("onclick");
                    onclickStr = onclickStr.substring(12, onclickStr.length - 2).replace(/'/g, "");
                    let onclickStrs = onclickStr.split(",");
                    files.push({
                        fid: onclickStrs[0],
                        fname: onclickStrs[1],
                        _fname: onclickStrs[2]
                    });
                });
                originalData.files = files;
                doSpider("http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcSearchWindow/listUserByDepartmentWindow.do?sessionid=71ABCF7C8CFC17322B6B75F9F499A423",
                    req.query.cookie, false, {}).then(resp => {
                    originalData.users = JSON.parse(resp.text)
                    res.json({
                        status: true,
                        data: originalData
                    })
                }, e => {
                    res.json({
                        status: false,
                        msg: "爬取出错",
                        error: e
                    })
                })
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {get} /xfwSpider/shyk_delfile 修改会议时删除文件
 * @apiName shyk_delfile
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} fid 文件id
 * @apiParam {String} shykType 会议类型 0 1 2 3 
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true, "msg": "删除成功"}
 * @apiErrorExample {json} 失败
 * {"status":false, "msg": "删除失败"}
 */
router.get("/shyk_delfile", function (req, res, next) {
    if (req.query.cookie && req.query.fid && req.query.shykType) {
        let urls = ["http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcCongress/delFile.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcBranch/delFile.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartygroup/delFile.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartylecture/delFile.do"
        ]
        let url = urls[Number.parseInt(req.query.shykType)];
        doSpider(url, req.query.cookie, true, {
                fid: req.query.fid
            })
            .then(resp => {
                if (resp.text == "true") {
                    res.json({
                        status: true,
                        msg: "删除成功"
                    })
                } else {

                    res.json({
                        status: false,
                        msg: "删除失败",
                        resp: resp.text
                    })
                }
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {post} /xfwSpider/shyk_update 修改会议记录
 * @apiName shyk_update
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} id 会议记录的id
 * @apiParam {String} shykType 会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课
 * @apiParam {String} others  其他参数 根据网页端的参数传
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {status:true}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/shyk_update", function (req, res, next) {
    if (req.body.cookie && req.body.id && req.body.shykType) {
        let urls = ["http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcCongress/update.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcBranch/update.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartygroup/update.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartylecture/update.do"
        ]
        let url = urls[Number.parseInt(req.body.shykType)];
        doSpider(url, req.query.cookie, false, req.body)
            .then(resp => {
                if (resp.text.indexOf("成功") > -1) {
                    res.json({
                        status: true,
                        msg: "更新成功"
                    })
                } else {
                    res.json({
                        status: false,
                        msg: "更新失败",
                        error: j
                    })
                }
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {post} /xfwSpider/shyk_delete 删除会议记录 客户真实数据不要删除
 * @apiName shyk_delete
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie 先锋网cookie 可选 填写则提交到对应网站 两个最少填写1个
 * @apiParam {String} cookie_djy 党建云cookie 可选 填写则提交到对应网站 两个最少填写1个
 * @apiParam {String} id 会议记录的id
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"msg": "删除成功"}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.get("/shyk_delete", function (req, res, next) {
    if (req.query.cookie && req.query.id) {
        doSpider("http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcCongress/delete.do", req.query.cookie, false, {
                id: req.query.id
            })
            .then(resp => {
                if (resp.text.indexOf("成功") > -1) {
                    res.json({
                        status: true,
                        msg: "删除成功"
                    })
                } else {
                    res.json({
                        status: false,
                        msg: "删除失败",
                        error: j
                    })
                }
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {post} /xfwSpider/shyk_save 添加会议记录
 * @apiName shyk_save
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie 先锋网cookie 可选 填写则提交到对应网站 两个最少填写1个
 * @apiParam {String} cookie_djy 党建云cookie 可选 填写则提交到对应网站 两个最少填写1个
 * @apiParam {String} userId app用户id  必填
 * @apiParam {String} shykType 会议类型 必填 0支部党员会 1支部委员会 2党小组会 3党课
 * @apiParam {String} others 其他参数 按照web端实际参数上传
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.post("/shyk_save", function (req, res, next) {
    if ((req.body.cookie || req.body.cookie_djy) && req.body.shykType) {
        let urls = ["http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcCongress/bookSave.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcBranch/bookSave.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartygroup/bookSave.do",
            "http://tjdyda.tjzzb.gov.cn:80/cpcarchives/TcpcPartylecture/bookSave.do"
        ];
        //岗位任务 个人任务
        let shykTaskIds=[{id1:26,id2:24}];
        let url = urls[Number.parseInt(req.body.shykType)];
        let shykTaskId = shykTaskIds[Number.parseInt(req.body.shykType)];
        if(req.body.ourUserId&&req.body.ourUserId.split(",").length>0){
            let ourUserIds=req.body.ourUserId.split(",");
            //mysqlCon.query()
            let sqlInsert = "insert into task_user (taskId,userId)values";
            ourUserIds.forEach(userid => {
                if(userid)
                sqlInsert = sqlInsert + "(" + shykTaskId.id1 + "," + userid + "),"
            });
            ourUserIds.forEach(userid => {
                if(userid)
                sqlInsert = sqlInsert + "(" + shykTaskId.id2 + "," + userid + "),"
            });
            sqlInsert = sqlInsert.substr(0, sqlInsert.length - 1);
            mysqlCon.query(sqlInsert, (error) => {
                if (error)
                    console.log(error)
            })
        }
        let urlEncodeParams_xfw = "";
        for (let key in req.body) {
            if (req.body[key] instanceof Array) {
                for (let i = 0; i < req.body[key].length; i++) {
                    let param = key + "=" + req.body[key][i] + "&";
                    urlEncodeParams_xfw += param;
                }
            } else {
                let param = key + "=" + req.body[key] + "&";
                urlEncodeParams_xfw += param;
            }
        }
        let params_djy = {
            title: req.body.title,
            class_id: (Number.parseInt(req.body.shykType) + 1) || 1,
            tags: req.body.tags || "1",
            time: req.body.shijianString,
            place: req.body.didian,
            compere: req.body.zhuchiren,
            "due[]": [84557, 84871, 83818],
            "actual": "84557",
            "content": req.body.content,
            "imgs[]": ["1944158", "1944241", "1944244"],
            "attach[]": "49289",
        };
        // if(req.body.cpc_user_name){
        //     let cpc_user_names=req.body.cpc_user_name.split(",");
        //     djy_users.forEach(djy_user => {
        //         if(cpc_user_names.indexOf(djy_user.real_name)>-1){
        //             params_djy["due[]"].push(djy_user.id);
        //             params_djy["actual"].push(djy_user.id);
        //         }
        //     });
        // }
        let urlEncodeParams_djy = "";
        for (let key in params_djy) {
            if (params_djy[key] instanceof Array) {
                for (let i = 0; i < params_djy[key].length; i++) {
                    let param = key + "=" + params_djy[key][i] + "&";
                    urlEncodeParams_djy += param;
                }
            } else {
                let param = key + "=" + params_djy[key] + "&";
                urlEncodeParams_djy += param;
            }
        }
        if (req.body.cookie) {
            doSpider(url, req.body.cookie, true,
                    urlEncodeParams_xfw)
                .then(resp => {
                    if (resp.text.indexOf("成功") > -1) {
                        console.log(resp.text)
                        req.body.xfwId = resp.text.substr(resp.text.indexOf('"toDelete(') + 10, resp.text.indexOf(');">删除') - (resp.text.indexOf('"toDelete(') + 10));
                        if (req.body.cookie_djy) {
                            doSpider("https://www.dangjianwang.com/IActivities/BranchActPublish",
                                req.body.cookie_djy, true, urlEncodeParams_djy).then(r => {
                                res.json({
                                    status: true,
                                    msg: "保存成功",
                                    text: resp.text,
                                    text2: r.text
                                });
                                doSpider("https://www.dangjianwang.com/Manageactivities/BranchActList?type=" + params_djy.class_id,
                                    req.body.cookie_djy, false, {}).then(resp => {
                                    console.log(resp.text)
                                    req.body.djyId = resp.text.substr(resp.text.indexOf('data-id="') + 9, resp.text.indexOf('">删除</a>') - (resp.text.indexOf('data-id="') + 9));
                                    mysqlCon.query("insert into shyk (xfwId, djyId, userId, shijianString, didian, title, zhuchiren, " +
                                        "content, jiluren, yingdaoren, shidaoren, cpc_user_names, cpc_absentuser_names, quexireasons, " +
                                        "liexiren, imgs, attachments)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [req.body.xfwId, req.body.djyId,
                                            req.body.userId || 1, req.body.shijianString, req.body.didian, req.body.title, req.body.zhuchiren, req.body.content,
                                            req.body.jiluren, req.body.yingdaoren, req.body.shidaoren, req.body.cpc_user_name, req.body["model.cpc_absentuser_name"], req.body["model.quexireason"],
                                            req.body.liexiren, req.body.fiidSWFUpload_0_0 || "", req.body.fiidSWFUpload_0_0 || ""
                                        ], (error, results, fields) => {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                console.log(results)
                                            }
                                        });
                                }, j => {

                                })
                            }, j => {
                                res.json({
                                    status: false,
                                    msg: "爬取出错",
                                    error: j
                                })
                            });
                        } else {
                            res.json({
                                status: true,
                                msg: "保存成功",
                                text: resp.text
                            });
                        }
                    } else {
                        res.json({
                            status: false,
                            msg: "保存失败",
                            text: resp.text
                        });
                    }
                }, j => {
                    res.json({
                        status: false,
                        msg: "爬取出错",
                        error: j
                    })
                });
        } else {
            doSpider("https://www.dangjianwang.com/IActivities/BranchActPublish",
                req.body.cookie_djy, true, urlEncodeParams_djy).then(r => {
                res.json({
                    status: true,
                    msg: "保存成功",
                    text2: r.text
                });
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
        }
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

router.post("/djyshyk_save", function (req, res, next) {
    req.body.cookie = "PHPSESSID=e862egla8p5r31jqgpcimrpch7";
    if (req.body.cookie) {
        req.body.title = "aaa";
        req.body.class_id = "1";
        req.body.tags = "1";
        req.body.time = "2018-06-08";
        req.body.place = "aaa";
        req.body.compere = "aaa";
        req.body["due[]"] = [84557, 84871, 83818];
        req.body.actual = "84557";
        req.body.content = "aaa";
        for (let i = 0; i < 1000; i++)
            req.body.content = req.body.content + "aaaaaaaaaaaaaaaaaa";
        req.body["imgs[]"] = ["1944158", "1944241", "1944244"];
        req.body["attach[]"] = "49289";
        let urlEncodeParams = "";
        for (let key in req.body) {
            if (req.body[key] instanceof Array) {
                for (let i = 0; i < req.body[key].length; i++) {
                    let param = key + "=" + req.body[key][i] + "&";
                    urlEncodeParams += param;
                }
            } else {
                let param = key + "=" + req.body[key] + "&";
                urlEncodeParams += param;
            }
        }
        doSpider("https://www.dangjianwang.com/IActivities/BranchActPublish", req.body.cookie, true,
                urlEncodeParams)
            .then(resp => {
                if (resp.text.indexOf("成功") > -1) {
                    res.json({
                        status: true,
                        msg: "保存成功",
                        text: resp.text
                    });
                    // let newParams = {
                    //     title: req.body.title,
                    //     class_id: req.body.title,
                    //     tags: req.body.title,
                    //     time: req.body.title,
                    //     place: req.body.title,
                    //     compere: req.body.title,
                    //     "due[]": req.body.title,
                    //     "actual": req.body.title,
                    //     "content": req.body.title,
                    //     "imgs[]": req.body.title,
                    //     "imgs[]": req.body.title,
                    // };
                    // this.doSpider("https://www.dangjianwang.com/IActivities/BranchActPublish",
                    //     "PHPSESSID=e862egla8p5r31jqgpcimrpch7", true, {})
                } else {
                    res.json({
                        status: false,
                        msg: "保存失败",
                        text: resp.text
                    });
                }
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});
/**
 * @api {GET} /xfwSpider/xueshi 获取学时列表
 * @apiName xueshi
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"data":[{"text":["序号","姓名","培训时间","培训形式","培训班次或内容","累计完成学时"],"id":"","id2":""},{"text":["1","孙兆彬","2018-06-01","213","213","1"],"id":"23202db12f744889b76d6d6803f116d9","id2":"315712"},{"text":["1","孙兆彬","2018-06-06","213","213"],"id":"","id2":"315711"},{"text":["1","孙兆彬","2018-06-11","aaaaaaaaa","2222222222"],"id":"","id2":"315716"},{"text":["2","任美蓉","2018-06-01","213","213",""],"id":"15a692e5cc4340bf88a47bbc08e4570d","id2":"315713"},{"text":["2","任美蓉","2018-06-11","aaaaaaaaa","2222222222"],"id":"","id2":"315717"},{"text":["3","赵晓磊","2018-06-01","213","213",""],"id":"64f58cc431354e5eb8dd8dc0ba40ac64","id2":"315714"},{"text":["4","赵荣荣","2018-06-01","213","213",""],"id":"7de8ef92cb6348248067ca7d9d1258bf","id2":"315715"}]}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.get("/xueshi", function (req, res, next) {
    if (req.query.cookie) {
        doSpider("http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcTrainConditionZhu/book_page16_bianji.do", req.query.cookie, false, {})
            .then(resp => {
                let $ = cheerio.load(resp.text, {
                    decodeEntities: false
                });
                let trs = $("table").find("tr");
                let trdatas = [];
                let name = "";
                let xuhao = "";
                let lastId = "";
                $("tr").each((i, element) => {
                    let tds = cheerio.load(element)("td");
                    let tddatas = {
                        text: [],
                        id: "",
                        id2: ""
                    }
                    if (tds.length > 4) {
                        name = cheerio.load(tds[0]).text().replace(/\t|\n/g, "");
                        xuhao = cheerio.load(tds[1]).text().replace(/\t|\n/g, "");
                    }
                    if (tds.length <= 4) {
                        tddatas.text.push(name)
                        tddatas.text.push(xuhao)
                    }
                    trdatas.push(tddatas);
                    for (let j = 0; j < tds.length; j++) {
                        if (tds.length - 1 == j) {
                            if ($.load(tds[j])("a").length > 0) {
                                let href = $.load(tds[j])("a").first().attr("href");
                                tddatas.id2 = querystring.parse(href.split("?")[1]).id;
                            }
                        } else {
                            if (cheerio.load(tds[j])("input").length > 0) {
                                tddatas.text.push(cheerio.load(tds[j])("input")[0].attribs.value)
                                tddatas.id = cheerio.load(tds[j])("input")[0].attribs.id;
                                tddatas.id = tddatas.id.substr(0, tddatas.id.length - 6);
                                lastId = tddatas.id;
                            } else {
                                tddatas.text.push(cheerio.load(tds[j]).text().replace(/\t|\n/g, ""))
                            }
                        }
                    }
                    if (!tddatas.id && lastId)
                        tddatas.id = lastId;
                });
                res.json({
                    status: true,
                    data: trdatas
                })
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});


/**
 * @api {GET} /xfwSpider/xueshiparams 获取编辑学时的参数
 * @apiName xueshiparams
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} id 学时id，对应xueshi接口返回的id2参数
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"data":[{"class":"required input-box","hidden":"","name":"id","type":"text","value":"","id":"textfield","size":"70","title":"departmentid"},{"class":"required input-box","hidden":"","name":"trainId","type":"text","value":"","id":"textfield","size":"70","title":"departmentid"},{"class":"required input-box","hidden":"","name":"departmentid","type":"text","value":"","id":"textfield","size":"70","title":"departmentid"},{"class":"required input-box","hidden":"","name":"createtimeString","type":"text","onclick":"WdatePicker({dateFmt:'yyyy-MM-dd'})","value":"","id":"textfield","size":"70","style":"width: 150px;","title":"createtime"},{"class":"required input-box","hidden":"","name":"nameId","type":"text","value":"","id":"textfield","size":"70","title":"nameId"},{"class":"required input-box","name":"traintimeString","type":"text","onclick":"WdatePicker({dateFmt:'yyyy-MM-dd'})","value":"","id":"textfield","size":"70","style":"width: 150px;","title":"traintime"},{"class":"required input-box","name":"trainway","type":"text","value":"","id":"textfield","size":"70","title":"trainway"},{"class":"required input-box","name":"content","type":"text","value":"","id":"textfield","size":"70","title":"content"}]}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.get("/xueshiparams", function (req, res, next) {
    if (req.query.cookie && req.query.id) {
        doSpider("http://tjdyda.tjzzb.gov.cn//cpcarchives/TcpcTrainCondition/edit.do", req.query.cookie, false, {
            id: req.query.id
        }).then(resp => {

            let $ = cheerio.load(resp.text, {
                decodeEntities: false
            });
            let inputs = [];
            $("input,textarea").each((i, element) => {
                inputs.push(element.attribs);
            });
            res.json({
                status: true,
                data: inputs
            })
        }, j => {
            res.json({
                status: false,
                msg: "爬取出错",
                error: j
            })
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});


/**
 * @api {POST} /xfwSpider/xueshiupdate 编辑学时信息
 * @apiName xueshiupdate
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} others 其他参数 根据xueshiparams接口返回的传
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"msg":"更新成功"}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.post("/xueshiupdate", function (req, res, next) {
    if (req.body.cookie && req.body.id) {
        doSpider("http://tjdyda.tjzzb.gov.cn//cpcarchives/TcpcTrainCondition/book_update.do", req.body.cookie, true,
            req.body).then(resp => {
            if (resp.text.indexOf("成功") > -1) {
                res.json({
                    status: true,
                    msg: "更新成功"
                })
            } else {
                res.json({
                    status: false,
                    msg: "更新失败",
                    error: j
                })
            }
        }, j => {
            res.json({
                status: false,
                msg: "爬取出错",
                error: j
            })
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});


/**
 * @api {POST} /xfwSpider/xueshiupdatetime 编辑学时时长
 * @apiName xueshiupdatetime
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {Number} xueshi 时长
 * @apiParam {String} userid 不是用户id ，xueshiparams获取的id
 * @apiParam {String} year 年份(如2018)
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"msg":"更新成功"}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.post("/xueshiupdatetime", function (req, res, next) {
    if (req.body.cookie && req.body.xueshi && req.body.xueshi && req.body.userid && req.body.year) {
        doSpider("http://tjdyda.tjzzb.gov.cn//cpcarchives/TcpcTrainConditionZhu/changexueshi.do", req.body.cookie, false,
            req.body).then(resp => {
            if (resp.text.indexOf("showMessage") > -1) {
                res.json({
                    status: true,
                    msg: "更新成功"
                })
            } else {
                res.json({
                    status: false,
                    msg: "更新失败"
                })
            }
        }, j => {
            res.json({
                status: false,
                msg: "爬取出错",
                error: j
            })
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});


/**
 * @api {POST} /xfwSpider/xueshidelete 删除学时记录
 * @apiName xueshidelete
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {Number} id 学时id  对应xueshi接口的id2参数
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":false,"msg":"删除成功"}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "删除失败"
            }
 */
router.post("/xueshidelete", function (req, res, next) {
    if (req.body.cookie && req.body.id) {
        doSpider("http://tjdyda.tjzzb.gov.cn//cpcarchives/TcpcTrainConditionZhu/book_delete.do", req.body.cookie, false,
            req.body).then(resp => {
            if (resp.text.indexOf("showMessage") > -1) {
                res.json({
                    status: true,
                    msg: "删除成功"
                })
            } else {
                res.json({
                    status: false,
                    msg: "删除失败"
                })
            }
        }, j => {
            res.json({
                status: false,
                msg: "爬取出错",
                error: j
            })
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});


/**
 * @api {GET} /xfwSpider/xueshiusers 添加学时时选人的人员列表
 * @apiName xueshiusers
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"data":[{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"23202db12f744889b76d6d6803f116d9","contact":null,"name":"孙兆彬","banben":null,"id":"23202db12f744889b76d6d6803f116d9","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"15a692e5cc4340bf88a47bbc08e4570d","contact":null,"name":"任美蓉","banben":null,"id":"15a692e5cc4340bf88a47bbc08e4570d","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"64f58cc431354e5eb8dd8dc0ba40ac64","contact":null,"name":"赵晓磊","banben":null,"id":"64f58cc431354e5eb8dd8dc0ba40ac64","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"7de8ef92cb6348248067ca7d9d1258bf","contact":null,"name":"赵荣荣","banben":null,"id":"7de8ef92cb6348248067ca7d9d1258bf","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"4a696f3bb16446beaefa1745d53b2bb2","contact":null,"name":"李振","banben":null,"id":"4a696f3bb16446beaefa1745d53b2bb2","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"16f1f12285a64481a11ed94549e9de79","contact":null,"name":"李金妹","banben":null,"id":"16f1f12285a64481a11ed94549e9de79","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"6cff235da587473e823192f517c03d91","contact":null,"name":"陈炳羽","banben":null,"id":"6cff235da587473e823192f517c03d91","department":null,"maintype":null},{"departmenttype":null,"role":null,"sex":null,"shengri":null,"oldpassword":null,"createdateString":null,"createdate":null,"sort":null,"type":null,"password":null,"toplevel":null,"repassword":null,"post":null,"departmentname":null,"shengriString":null,"idcard":"531cbad734eb4a9592b5111b39eb66f4","contact":null,"name":"刘强","banben":null,"id":"531cbad734eb4a9592b5111b39eb66f4","department":null,"maintype":null}]}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.get("/xueshiusers", function (req, res, next) {
    if (req.query.cookie ) {
        doSpider("http://tjdyda.tjzzb.gov.cn/cpcarchives/TcpcSearchWindow/listUserByDepartmentWindow.do", req.query.cookie, false, {}).then(resp => {
            mysqlCon.query("select * from user",(error,results)=>{
                if(error){
                    res.json({
                        status: false,
                        msg: "系统错误"
                    })
                }else{
                    let xfwUsers = JSON.parse(resp.text);
                    xfwUsers.forEach(xfwUser => {
                        results.forEach(ourUser => {
                            if(xfwUser.name==ourUser.nickname){
                                xfwUser.ourUserId=ourUser.id
                            }
                        });
                    });
                    if(req.query.cookie_djy){
                        doSpider("https://www.dangjianwang.com/Manageactivities/BranchActPublish?type=2", req.query.cookie_djy, false, {}).then(resp => {
                            let index1=resp.text.indexOf("var branchId =");
                            let index2=resp.text.indexOf(";",index1);
                            index1=index1+"var branchId =".length;
                            let branchId=resp.text.substr(index1,index2-index1).trim();
                            doSpider("https://www.dangjianwang.com/IActivities/BranchMembersList?branch_id="+branchId,req.query.cookie_djy, false, {}).then(resp=>{
                                console.log(JSON.parse(resp.text))
                                let djyUsers=JSON.parse(resp.text).data;
                                xfwUsers.forEach(xfwUser => {
                                    djyUsers.forEach(djyUser => {
                                        if(xfwUser.name==djyUser.real_name){
                                            xfwUser.djyId=djyUser.id
                                        }
                                    });
                                });
                                res.json({
                                    status: true,
                                    data: xfwUsers
                                })
                            },j=>{
            
                            })
                        }, j => {
                            res.json({
                                status: false,
                                msg: "爬取出错",
                                error: j
                            })
                        })
                    }else{
                        res.json({
                            status: true,
                            data: xfwUsers
                        });
                    }
                }
            })
        }, j => {
            res.json({
                status: false,
                msg: "爬取出错",
                error: j
            })
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});


/**
 * @api {POST} /xfwSpider/xueshiadd 新增学时记录
 * @apiName xueshiadd
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} nameid 参与学习人的id 多个逗号分割,通过接口获取人名列表 23202db12f744889b76d6d6803f116d9,15a692e5cc4340bf88a47bbc08e4570d 
 * @apiParam {String} name 参与学习的人名,多个逗号分割，孙兆彬,任美蓉,赵晓磊,赵荣荣,
 * @apiParam {String} tcpcTrainConditioNtraintimeString 学习时间 2018-06-01(tcpcTrainConditioN换成tcpcTrainCondition.)
 * @apiParam {String} tcpcTrainConditioNtrainway 学习方式 (tcpcTrainConditioN换成tcpcTrainCondition.)
 * @apiParam {String} tcpcTrainConditioNcontent 学习内容(tcpcTrainConditioN换成tcpcTrainCondition.)
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"msg":"添加成功"}
 * @apiErrorExample {json} 失败
 *  {
                "status": false,
                "msg": "爬取出错"
            }
 */
router.post("/xueshiadd", function (req, res, next) {
    if (req.body.cookie && req.body.name && req.body["tcpcTrainCondition.traintimeString"] &&
        req.body["tcpcTrainCondition.trainway"] && req.body["tcpcTrainCondition.content"] &&
        req.body.nameid) {
        doSpider("http://tjdyda.tjzzb.gov.cn//cpcarchives/TcpcTrainConditionZhu/book_save.do", req.body.cookie, true,
            req.body).then(resp => {
            if (resp.text.indexOf("showMessage") > -1) {
                res.json({
                    status: true,
                    msg: "添加成功"
                })
            } else {
                res.json({
                    status: false,
                    msg: "添加失败"
                })
            }
        }, j => {
            res.json({
                status: false,
                msg: "爬取出错",
                error: j
            })
        });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {post} /xfwSpider/fileupload 添加会议记录时上传图片
 * @apiName fileupload
 * @apiGroup xfwSpider
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} imgBase64 base64图片
 * 
 * @apiSuccessExample {json} 成功
 * {"oldname":"e2e4c0d3fb399f4e286458212bbc0081.jpg","size":0,"uporder":"20180531125035477","newname":"fcdc7f41dff6495aa1b089783c41cf86.jpg","type":"jpg"}
 * @apiErrorExample {json} 失败
 *  {"status":false,"msg":"爬取出错"}
 */
router.post("/fileupload", function (req, res, next) {
    if (req.query.cookie && req.imgBase64 && req.imgBase64.length > 0) {
        setTimeout(() => {
            let file = req.imgBase64[0];
            let fileBuffer = fs.readFileSync(path.join(file.destination, file.filename));
            superagent.post("http://tjdyda.tjzzb.gov.cn/pages/Upload/save.do;sessionid=[object%20Object]").set({
                    cookie: req.query.cookie
                }).field('Filename', file.filename)
                .field('mokuai', 'congress')
                .attach('Filedata', fileBuffer, file.filename)
                .field('Upload', 'Submit Query').end((error, resp) => {
                    if (error) {
                        console.log(error)
                        res.json({
                            status: false,
                            msg: "上传失败"
                        })
                    } else {
                        //console.log(resp.text)
                        res.json(JSON.parse(resp.text))
                    }
                });
        }, 1000)
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

router.get("/leftmenu", function (req, res, next) {
    if (req.query.cookie) {
        doSpider("http://tjdyda.tjzzb.gov.cn/tjsinfo/zbb/system/danganleft.do", req.query.cookie, false, {})
            .then(resp => {
                res.json({
                    status: true,
                    data: cheerio.load(resp.text)(".first_dd").find("a").first().attr("onclick")
                })
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错",
                    error: j
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

/**
 * @api {post} /xfwSpider/depts 党组织层级数据，搜索时用到
 * @apiName depts
 * @apiGroup xfwSpider
 *
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":{"id":"13ff00bc60d74d9eac11b2538a0cf9cc","text":"机关党支部"}}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/depts", function (req, res, next) {
    let depts = [{
        "id": "13ff00bc60d74d9eac11b2538a0cf9cc",
        "text": "机关党支部"
    }, {
        "id": "f0ac79ab4bca48cb92730fd2a9f20f27",
        "text": "城市建设投资有限公司党支部"
    }, {
        "id": "1a8166a320d642bbbf273478be4f4584",
        "text": "富凯建设集团有限公司党支部"
    }, {
        "id": "e2663593320d448893802fbf772ce4d4",
        "text": "粮油贸易有限公司党委",
        "children": [{
            "id": "f4a48e6d9c23496cb3820ac6be2a33df",
            "text": "咸水沽储运贸易有限公司党支部"
        }, {
            "id": "524273dc09aa4da4abc1822851e9fee3",
            "text": "谷星粮油加工有限公司党支部"
        }, {
            "id": "02dae03c17da466f8d1745a47cfa09fe",
            "text": "军粮供应站党支部"
        }, {
            "id": "01a7e21172c344fab44a55a14bf419fb",
            "text": "粮油贸易有限公司机关党支部"
        }]
    }, {
        "id": "d1e2b53fb9394a6dbf964415d9f739cd",
        "text": "粮食购销有限公司党总支",
        "children": [{
            "id": "5b9166a8db7648bc9ce4288fde0f8c24",
            "text": "粮食购销有限公司机关党支部"
        }, {
            "id": "3efe512c1bda415294bab96c3a0228e5",
            "text": "国家粮食储备库党支部"
        }, {
            "id": "dbaf60cf8b434a8e8d72018545bd4cf4",
            "text": "小站粮食购销有限公司党支部"
        }, {
            "id": "25edc15d2a0a40ee854963355407607d",
            "text": "信诚粮食销售有限公司党支部"
        }, {
            "id": "b61f79d5a0ab4f7f972d82397312b0b3",
            "text": "八里台粮食购销有限公司党支部"
        }]
    }, {
        "id": "0801100ccffd4e239d9e803e5a00118a",
        "text": "建设开发公司党支部"
    }];
    res.json({
        status: true,
        data: depts
    })
})
module.exports = router;