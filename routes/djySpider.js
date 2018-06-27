let express = require('express');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");
const superagent = require('superagent');
const querystring = require('querystring');
const cheerio = require('cheerio');

function doSpider(url, cookie, post, params) {
    return new Promise((resolve, reject) => {
        if (!post) {
            superagent.get(url).set({
                cookie: cookie
            }).send(params || {}).end((err, res) => {
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
 * @api {get} /djySpider/userInfo 获取党建云用户信息
 * @apiName userInfo
 * @apiGroup djy
 *
 * @apiParam {String} cookie cookie
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"userInfo":{"username":"李金妹","userinfo-exp":"2077/2500","userinfo-level":"LV4","userinfo-company":"区国资委党委","userinfo-branch":"区国资委机关党支部"}}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/userInfo", function (req, res, next) {
    if (req.query.cookie) {
        doSpider("https://www.dangjianwang.com/User/UserInfo?type=1", req.query.cookie).then(resp => {
            let $ = cheerio.load(resp.text);
            res.json({
                status: true,
                userInfo: {
                    "username": $(".userinfo-name").text(),
                    "userinfo-exp": $(".userinfo-exp").text(),
                    "userinfo-exp": $(".userinfo-exp").text(),
                    "userinfo-level": $(".userinfo-level").text(),
                    "userinfo-company": $(".userinfo-company").text(),
                    "userinfo-branch": $(".userinfo-branch").text(),
                }
            })
        }, j => {
            res.json({
                status: false,
                msg: "爬取出错"
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
 * @api {get} /djySpider/GetMoreActivities 党建云“津南党建”新闻
 * @apiName GetMoreActivities
 * @apiGroup djy
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} type type不知道什么用，传3就行
 * @apiParam {String} pg pg分页
 * @apiParam {String} keyword keyword搜索词
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":{"source":"津南区级机关工作委员会-区民宗办党支部","time":"2018-05-28","browses":"2","comments":"2","collections":"0","title1":"区民宗办组织全体干部深入学习纪念中共中央发布“五一口号”70周年座谈会精神","title":"区民宗办组织全体干部深入学习纪念中共中央发布“五一...","url":"/Activities/Detail?tid=560426","viewed":0,"sign":"<span class=\"unit-name\"><em class=\"jgdzb\">机关党支部</em><span>|</span></span>","cover":"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=150&height=100","push_status":0,"push_url":"javascript:;"},{"source":"区市容园林委党总支-津南区渣土所党支部","time":"2018-05-28","browses":"7","comments":"5","collections":"0","title1":"渣土所传达落实区市容园林委不担当三年行动方案布置会","title":"渣土所传达落实区市容园林委不担当三年行动方案布置会","url":"/Activities/Detail?tid=560323","viewed":0,"sign":"<span class=\"unit-name\"><em class=\"jgdzb\">党支部</em><span>|</span></span>","cover":"https://file.dangjianwang.com/WebView/view?type=img&id=1840382&salt=ljvi&width=150&height=100","push_status":0,"push_url":"javascript:;"}}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/GetMoreActivities", function (req, res, next) {
    if (req.query.cookie) {
        doSpider("https://www.dangjianwang.com/IActivities/GetMoreActivities", req.query.cookie, true, {
                keyword: req.query.keyword,
                type: req.query.type,
                pg: req.query.pg,
            })
            .then(resp => {
                res.json({
                    status: true,
                    data: JSON.parse(resp.text)
                })
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错"
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
 * @api {get} /djySpider/ActivitiesDetail “津南党建”新闻 详情
 * @apiName ActivitiesDetail
 * @apiGroup djy
 *
 * @apiParam {String} cookie cookie
 * @apiParam {String} tid 新闻id
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":{"imgs":[{"url":"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=900&height=506"},{"url":"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=900&height=506"},{"url":"https://file.dangjianwang.com/WebView/view?type=img&id=1840711&salt=asmw&width=900&height=506"}],"text":"区民宗办组织全体干部深入学习纪念中共中央发布“五一口号”70周年座谈会中共中央政治局常委、全国政协主席汪洋同志重要讲话及我市纪念大会上市委书记李鸿忠同志的讲话精神。通过学习，干部们更充分地理解了“五一口号”发布70年来，中国共产党与各民主党派、无党派人士勠力同心、团结奋斗，共同走过了不平凡的光辉历程；更深刻地认识了中国共产党领导的多党合作和政治协商制度是从中国土壤中生长出来的新型政党制度；更加坚定地明确了我国新型政党制度的理论特色、实践特色、时代特色。"}}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/ActivitiesDetail", function (req, res, next) {
    if (req.query.cookie) {
        doSpider("https://www.dangjianwang.com/Activities/Detail?tid=" + req.query.tid, req.query.cookie, false, {
                tid: req.query.tid
            })
            .then(resp => {
                let results = {
                    status: true,
                    data: {
                        imgs: [],
                        text: ""
                    }
                };
                let $ = cheerio.load(resp.text);
                console.log($("img", ".infobanner"))
                let imgs = $("img", ".infobanner");
                if (imgs && imgs.length > 0) {
                    for (let i = 0; i < imgs.length; i++) {
                        results.data.imgs.push({
                            url: imgs[i].attribs.src
                        })
                    }
                }
                results.data.text = $(".text").text().trim();
                res.json(results);
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错"
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});
//https://www.dangjianwang.com/manageactivities/BranchActList?pass=&start=10&keyword=&dept_id=&start_time=&end_time=&type=1


/**
 * @api {get} /djySpider/shyk 三会一课
 * @apiName shyk
 * @apiGroup djy
 *
 * @apiParam {String} cookie cookie 必填
 * @apiParam {String} type  必填 类型 可传1~9的值对应网站上9个分类
 * @apiParam {String} start 可选 从第x条开始
 * @apiParam {String} keyword 可选 关键词
 * @apiParam {String} dept_id 可选 部门
 * @apiParam {String} start_time 可选 开始时间
 * @apiParam {String} end_time 可选 结束时间
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":[[{"text":"区粮贸公司机关党支部组织开展集中学习活动"},{"text":"刘悦2018-04-08"},{"text":"刘悦2018-04-08"},{"text":"已备案"},{"text":"重新备案查看个人详情","id":"494048"}],[{"text":"组织生活会及民主评议党员"},{"text":"翟风伟2018-03-14"},{"text":"李晓岭2018-03-26"},{"text":"已备案"},{"text":"重新备案查看个人详情","id":"465552"}]]}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/shyk", function (req, res, next) {
    if (req.query.cookie) {
        let url="https://www.dangjianwang.com/Manageactivities/BranchActList?";
        for(let key in req.query){
            url=url+key+"="+req.query[key]+"&";
        }
        doSpider(url, req.query.cookie, false,
                {})
            .then(resp => {
                let trsData = [];
                let $ = cheerio.load(resp.text);
                let trs = $($("#class-table").get(0)).find("tr")
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
                                tdData.id = querystring.parse(href.split("?")[1]).aid;
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
                    msg: "爬取出错"
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
 * @api {get} /djySpider/shyk_view 三会一课详情查看
 * @apiName shyk_view
 * @apiGroup djy
 *
 * @apiParam {String} cookie cookie 必填
 * @apiParam {String} id  必填 从shyk接口获得
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":"<tbody><tr><td class=\"text-center\" colspan=\"4\">党员大会会议记录</td></tr><tr><td class=\"text-center\" style=\"width:125px;\">所在组织</td><td colspan=\"3\"><input type=\"text\" style=\"width:650px;\" readonly value=\"粮油贸易有限公司党委 - 粮油贸易有限公司机关党支部\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">会议主题</td><td colspan=\"3\"><input type=\"text\" style=\"width:650px;\" readonly value=\"区粮贸公司机关党支部组织开展集中学习活动\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">活动时间</td><td style=\"width: 210px;\"><input type=\"text\" style=\"width:260px;\" readonly value=\"2018-04-08\"></td><td class=\"text-center\" style=\"width:125px;\">活动地点</td><td><input type=\"text\" style=\"width:150px;\" readonly value=\"公司党员活动室\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">主持人</td><td colspan=\"3\"><input type=\"text\" style=\"width:650px;\" readonly value=\"李超英\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">应到党员</td><td colspan=\"3\"><input type=\"text\" style=\"width:650px;\" readonly value=\"潘春红;孙忠荣;李金禄;闻淑龙;李超英;龚娜;刘悦;杜向臣;陈浩\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">实到党员</td><td colspan=\"3\"><input type=\"text\" style=\"width:650px;\" readonly value=\"潘春红;孙忠荣;李金禄;闻淑龙;李超英;龚娜;刘悦;杜向臣;陈浩\"></td></tr><tr><td colspan=\"4\"><div>学习内容：<br><textarea style=\"padding:14px; border:0; outline: none; resize:none; font-size:16px; width: 780px;\" name=\"content\" id=\"\" cols=\"30\" rows=\"10\" readonly>区粮贸公司机关党支部组织开展集中学习活动。一是传达学习了“全国优秀组织工作干部”杨汉军同志先进事迹，号召全体党员学习他信念坚定、对党忠诚、公道正派、清正廉洁的政治品格，学习他拼搏奉献、精于业务的工匠精神，学习他生命不息、奋斗不止的扎实作风；二是组织收看了“两会”相关新闻视频，学习“两会”精神及习近平总书记讲话精神，把思想认识行动统一到习近平总书记重要讲话和“两会”精神上来，坚持以习近平新时代中国特色社会主义思想为指引，深刻领会精神实质，结合本岗工作抓好贯彻落实。</textarea></div></td></tr><tr><td colspan=\"4\"><div>图片：<br><ul class=\"image-list clearfix\"><li><img src=\"https://file.dangjianwang.com/WebView/view?type=img&id=1616303&salt=htpr&width=300&height=200\" alt=\"IMG_6226学习杨汉军.jpg\"></li><li><img src=\"https://file.dangjianwang.com/WebView/view?type=img&id=1616305&salt=bwcb&width=300&height=200\" alt=\"IMG_6229.JPG\"></li><li><img src=\"https://file.dangjianwang.com/WebView/view?type=img&id=1616308&salt=gevy&width=300&height=200\" alt=\"IMG_6231.JPG\"></li></ul></div></td></tr><tr><td colspan=\"4\"><div>附件：<br><ul class=\"file-list\"></ul></div></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">填报人</td><td style=\"width: 180px;\"><input type=\"text\" style=\"width:260px;\" readonly value=\"刘悦\"></td><td class=\"text-center\" style=\"width:125px;\">填报时间</td><td><input type=\"text\" style=\"width:150px;\" readonly value=\"2018-04-08\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">备案管理</td><td style=\"width: 180px;\"><input type=\"text\" style=\"width:260px;\" value=\"粮油贸易有限公司党委\"></td><td class=\"text-center\" style=\"width:125px;\">审核时间</td><td><input type=\"text\" style=\"width:150px;\" readonly value=\"2018-04-08\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">备案状态</td><td colspan=\"3\"><input type=\"text\" style=\"width:650px;\" readonly value=\"已备案\"></td></tr><tr><td class=\"text-center\" style=\"width:125px;\">意见</td><td colspan=\"3\"><input type=\"text\" style=\"width:650px;\" readonly value=\"同意\"></td></tr></tbody>"}
 * @apiErrorExample {json} 失败
 *  {
                status: false,
                msg: "爬取出错"
            }
 */
router.get("/shyk_view", function (req, res, next) {
    if (req.query.cookie&&req.query.id) {
        let url="https://www.dangjianwang.com/Manageactivities/BranchActView?aid="+req.query.id;
        doSpider(url, req.query.cookie, false,
                {})
            .then(resp => {
                console.log(resp.text)
                res.json({
                    status: true,
                    data: cheerio.load(resp.text, {
                        decodeEntities: false
                    })("table").first().html().replace(/\t|\n/g, "").trim()
                })
            }, j => {
                res.json({
                    status: false,
                    msg: "爬取出错"
                })
            });
    } else {
        res.json({
            status: false,
            msg: "参数错误"
        })
    }
});

module.exports = router;