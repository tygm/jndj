let express = require('express');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");
let fs = require('fs');
let tesseract = require('node-tesseract');
let gm = require('gm');
const superagent = require('superagent');
const cheerio = require('cheerio');
let path = require('path');
/* GET users listing. */

/**
 * @api {post} /user/login 登录接口
 * @apiName login
 * @apiGroup user
 *
 * @apiParam {String} loginname 用户名
 * @apiParam {String} pwd 密码
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":{"id":1,"password":"111111","loginname":"test","positionName": "书记","positionId": 1,"nickname":null,"position":null,"age":null,"gender":null,"phone":null,"email":null,"idcardno":null,"djyLoginname":"13642075123","djyPassword":"123456","xfwLoginname":"120112320000","xfwPassword":"123456","djyPoints":null,"xfwPoints":null,"partyNo":"001010001"},"djy":{"cookie":"PHPSESSID=cruiou4k1347hvs29jovvf5dm1","userName":"李金妹","danwei":"· 区国资委党委 - 区国资委机关党支部"},"xfw":{"cookie":"JSESSIONID=264A11B661F5BDF1B0A7AA555567A891"}}
 * @apiErrorExample {json} 失败
 *  {"status":false,"msg":"用户名或密码错误"}
 * 
 */
router.post('/login', function (req, res, next) {
  let params = req.query;
  if (!params.loginname)
    params = req.body;
  if (params.loginname && params.pwd) {
    let sql = "select * from user where loginname=? and password=?";
    mysqlCon.query(sql, [params.loginname, params.pwd], (error, results, fields) => {
      if (error) {
        res.json({
          status: false,
          msg: "系统错误"
        });
      } else {
        if (results && results.length > 0) {
          if (results[0].djyLoginname && results[0].djyPassword) {
            preLogin(results[0].djyLoginname, results[0].djyPassword).then(dyjRes => {
              xfwLogin(results[0].xfwLoginname, results[0].xfwPassword).then(xfwRes => {
                res.json({
                  status: true,
                  data: results[0],
                  djy: dyjRes,
                  xfw: xfwRes
                });
              }, j => {
                res.json({
                  status: true,
                  data: results[0],
                  djy: dyjRes,
                  xfw: false
                });
              });
            }, j => {
              xfwLogin(results[0].xfwLoginname, results[0].xfwPassword).then(xfwRes => {
                res.json({
                  status: true,
                  data: results[0],
                  djy: false,
                  xfw: xfwRes
                });
              }, j => {
                res.json({
                  status: true,
                  data: results[0],
                  djy: false,
                  xfw: false
                });
              });
            })
          } else if (results[0].xfwLoginname && results[0].xfwPassword) {
            xfwLogin(results[0].xfwLoginname, results[0].xfwPassword).then(xfwRes => {
              res.json({
                status: true,
                data: results[0],
                djy: false,
                xfw: xfwRes
              });
            }, j => {
              res.json({
                status: true,
                data: results[0],
                djy: false,
                xfw: false
              });
            });
          } else {
            res.json({
              status: true,
              data: results[0],
              djy: false,
              xfw: false
            });
          }
        } else
          res.json({
            status: false,
            msg: "用户名或密码错误"
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


/**
 * @api {post} /user/reg 注册接口
 * @apiName reg
 * @apiGroup user
 *
 * @apiParam {String} loginname 用户名 必填
 * @apiParam {String} pwd 密码 必填
 * @apiParam {String} partyNo 组织编号 必填
 * @apiParam {String} positionId 岗位id 必填 从/user/positions接口获取
 * @apiParam {String} positionName 岗位名称 必填 从/user/positions接口获取
 * @apiParam {String} nickname 昵称/真是姓名 选填
 * @apiParam {String} position 职位 选填
 * @apiParam {String} age 年龄 选填
 * @apiParam {String} gender 性别0/1 选填
 * @apiParam {String} phone 手机号 选填
 * @apiParam {String} email 邮箱 选填
 * @apiParam {String} idcardno 身份证号 选填
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"msg":"注册成功"}
 * @apiErrorExample {json} 失败
 *  {"status":false,"msg":"用户名或密码错误"}
 * 
 */
router.post('/reg', function (req, res, next) {
  let params = req.query;
  if (!params.loginname)
    params = req.body;
  if (params.loginname && params.pwd && params.partyNo && params.positionId && params.positionName) {
    let sql = "insert into user (password,loginname,nickname,positionId,positionName,age,gender,phone,email,partyNo)values" +
      "(?,?,?,?,?,?,?,?,?,?)";
    mysqlCon.query(sql, [params.pwd, params.loginname, params.nickname, params.positionId, params.positionName, params.age,
      params.gender, params.phone, params.email, params.partyNo
    ], (error, results, fields) => {
      if (error) {
        if (error.errno == 1062) {
          res.json({
            status: false,
            msg: "该账号已被注册"
          });
        } else {
          res.json({
            status: false,
            msg: "系统错误",
            error: error
          });
        }
      } else {
        res.json({
          status: true,
          msg: "注册成功"
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

/**
 * @api {post} /user/bindDJY 绑定党建云账号
 * @apiName bindDJY
 * @apiGroup user
 *
 * @apiParam {String} loginname 先锋网用户名
 * @apiParam {String} pwd 先锋网密码
 * @apiParam {String} userid 用户id
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"msg":"绑定成功","result":{"cookie":"PHPSESSID=h7tfiaihofn41manc6a7ikmn85","userName":"李金妹","danwei":"· 区国资委党委 - 区国资委机关党支部"}}
 * @apiErrorExample {json} 失败
 *  {"status":false,"msg":"绑定失败"}
 * 
 */
router.post("/bindDJY", function (req, res, next) {
  let params = req.query;
  if (!params.loginname)
    params = req.body;
  if (params.loginname && params.pwd && params.userid) {
    preLogin(params.loginname, params.pwd).then(r => {
      if (r.cookie) {
        let sql = "update user set djyLoginname=?, djyPassword=? where id=?";
        mysqlCon.query(sql, [params.loginname, params.pwd, params.userid],
          function (error, counts, fields) {
            if (error) {
              res.json({
                status: false,
                msg: "绑定失败"
              });
            } else {
              res.json({
                status: true,
                msg: "绑定成功",
                result: r
              });
            }
          })
      } else {
        res.json({
          status: false,
          msg: "绑定失败，请重试"
        });
      }
    }, e => {
      res.json({
        status: false,
        msg: "绑定失败，请重试",
        e: JSON.stringify(e)
      });
    });
  } else {
    res.json({
      status: false,
      msg: "参数错误"
    });
  }
})

/**
 * @api {post} /user/bindXFW 绑定先锋网账号
 * @apiName bindXFW
 * @apiGroup user
 *
 * @apiParam {String} loginname 先锋网用户名
 * @apiParam {String} pwd 先锋网密码
 * @apiParam {String} userid 用户id
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"msg":"绑定成功","result":{"cookie":"JSESSIONID=8233376ABEDAEE72F6EEC1304E1B7021"}}
 * @apiErrorExample {json} 失败
 *  {"status":false,"msg":"绑定失败"}
 * 
 */
router.post("/bindXFW", function (req, res, next) {
  let params = req.query;
  if (!params.loginname)
    params = req.body;
  if (params.loginname && params.pwd && params.userid) {
    xfwLogin(params.loginname, params.pwd).then(r => {
      if (r.cookie) {
        superagent.get("http://tjdyda.tjzzb.gov.cn/tjsinfo/zbb/system/danganleft.do").set({
          cookie: r.cookie
        }).end((err, resp) => {
          if (err) {
            res.json({
              status: false,
              msg: "绑定失败"
            });
          } else {
            let onclickStr = cheerio.load(resp.text)(".first_dd").find("a").first().attr("onclick");
            if (onclickStr.indexOf("searchlist") > -1) {
              let sql = "update user set xfwLoginname=?, xfwPassword=?,xfwType=? where id=?";
              mysqlCon.query(sql, [params.loginname, params.pwd, 0, params.userid],
                function (error, counts, fields) {
                  if (error) {
                    res.json({
                      status: false,
                      msg: "绑定失败"
                    });
                  } else {
                    res.json({
                      status: true,
                      msg: "绑定成功",
                      result: r
                    });
                  }
                })
            } else {
              let sql = "update user set xfwLoginname=?, xfwPassword=?,xfwType=? where id=?";
              mysqlCon.query(sql, [params.loginname, params.pwd, 1, params.userid],
                function (error, counts, fields) {
                  if (error) {
                    res.json({
                      status: false,
                      msg: "绑定失败"
                    });
                  } else {
                    res.json({
                      status: true,
                      msg: "绑定成功",
                      result: r
                    });
                  }
                })
            }
          }
        })
      } else {
        res.json({
          status: false,
          msg: "绑定失败，请重试",
          r: JSON.stringify(r)
        });
      }
    }, e => {
      res.json({
        status: false,
        msg: "绑定失败，请重试"
      });
    });
  } else {
    res.json({
      status: false,
      msg: "参数错误"
    });
  }
})

function xfwLogin(loginname, password) {
  console.log("xfwLogin", loginname, password)
  return new Promise((resolve, reject) => {
    superagent.post("http://tjdyda.tjzzb.gov.cn/tjsinfo/zbb/system/loginAjax.do").type("form").send({
      "users.idcard": loginname,
      "users.password": password
    }).end(function (err, res) {
      if (err)
        reject(err)
      else {
        if (!res.text || JSON.parse(res.text).msg) {
          let cookie = res.header["set-cookie"][0].split(";")[0];
          superagent.post("http://tjdyda.tjzzb.gov.cn/tjsinfo/zbb/system/login.do").type("form")
            .set({
              "cookie": cookie
            })
            .send({
              "users.idcard": loginname,
              "users.password": password
            }).end(function (err, res) {
              if (err)
                reject(err)
              else {
                if (res.text.indexOf("booktop.do") > -1) {
                  resolve({
                    cookie: cookie
                  })
                } else {
                  reject("登录失败")
                }
              }
            });
        } else {
          console.log("登录失败，用户名密码错误")
          reject("登录失败，用户名密码错误")
        }
      }
    });
  });
}

function preLogin(loginname, password) {
  return new Promise((resolve, reject) => {
    let agent = superagent.agent();
    agent.get("https://www.dangjianwang.com/Site/Login").end(function (err, res) {
      // 抛错拦截
      if (err) {
        reject({
          err: err
        })
      } else {
        let $ = cheerio.load(res.text);
        let token = $("input[name='token']").val();
        getImageCodeAndRec(agent).then(r => {
          doLogin(token, r, agent, loginname, password).then(r => {
            resolve(r || "");
          }, e => {
            reject(e || "");
          });
        }, j => {
          getImageCodeAndRec(agent).then(r => {
            doLogin(token, r, agent, loginname, password).then(r => {
              resolve(r || "");
            }, e => {
              reject(e || "");
            });
          }, j => {
            getImageCodeAndRec(agent).then(r => {
              doLogin(token, r, agent, loginname, password).then(r => {
                resolve(r || "");
              }, e => {
                reject(e || "");
              });
            }, j => {
              reject(j || "");
            });
          });
        });
      }
    });
  })
}

function doLogin(token, verifyCode, agent, loginname, password) {
  return new Promise((resolve, reject) => {
    agent.post("https://www.dangjianwang.com/Site/Login")
      .type("form")
      .send({
        "LoginForm[username]": loginname,
        "LoginForm[password]": password,
        "token": token,
        "LoginForm[verifyCode]": verifyCode
      }).end((e, res) => {
        if (e) {
          reject({
            e: e
          })
        } else {
          //console.log(res.text)
          if (res.text.indexOf("我的收藏") > 0) {
            console.log("登录成功:" + verifyCode)
            let $ = cheerio.load(res.text);
            resolve({
              cookie: res.request.header.cookie,
              userName: $(".top-user-name").text(),
              danwei: $(".top-status").text().trim().replace(/· /g, "")
            })
            //aa(cookie)
          } else
            reject("登录失败，验证码识别错误:" + verifyCode)
        }
      })
  })
}

function getImageCodeAndRec(agent) {
  return new Promise((resolve, reject) => {
    agent.get("https://www.dangjianwang.com/site/captcha?refresh=1").end(function (err, res) {
      if (err) {
        reject({
          err2: err
        })
      } else {
        let imgUrl = "https://www.dangjianwang.com/" + JSON.parse(res.text).url;
        agent.get(imgUrl).buffer(true).end(function (err, res) {
          if (err) {
            reject({
              err3: err
            })
          } else {
            //console.log(res.header)
            console.log("set-cookie", res.header['set-cookie'] || res.header['Set-cookie'])
            let fullpath = path.join(__dirname, "uploads", new Date().getTime() + ".png");
            fs.writeFile(fullpath, res.body, function (err) {
              if (err) {
                reject({
                  err4: err
                })
              } else {
                processImg(fullpath, fullpath).then(r => {
                  recognizer(fullpath).then(r => {
                    //console.log(r)
                    if (r && r.length == 4 && Number.parseInt(r) > 999) {
                      resolve(r);
                    } else {
                      console.log("识别失败:" + r)
                      reject({
                        err5: err
                      })
                    }
                  }, e => {
                    console.log("识别失败:" + JSON.stringify(e))
                    reject({
                      e6: e
                    })
                  })
                }, j => {
                  reject({
                    j7: j
                  })
                });
              }
            });
          }
        })
      }
    });
  });
}


/**
 * 处理图片为阈值图片
 * @param imgPath
 * @param newPath
 * @param [thresholdVal=55] 默认阈值
 * @returns {Promise}
 */
function processImg(imgPath, newPath, thresholdVal) {
  return new Promise((resolve, reject) => {
    gm(imgPath).normalize().strip().colorspace("GRAY")
      .threshold(thresholdVal || 88)
      .write(newPath, (err) => {
        if (err) return reject(err);
        resolve(newPath);
      });
  });
}

/**
 * 识别图片
 * @param imgPath
 * @param options tesseract options
 * @returns {Promise}
 */
function recognizer(imgPath, options) {
  options = Object.assign({
    psm: 7,
    l: "eng"
  }, options);

  return new Promise((resolve, reject) => {
    tesseract
      .process(imgPath, options, (err, text) => {
        if (err) return reject(err);
        fs.unlink(imgPath);
        resolve(text.replace(/[\r\n\s]/gm, ''));
      });
  });
}
//http://localhost:3000/user/save?loginname=test2&pwd=111111&name=%E5%B0%8F%E4%B8%8D%E7%82%B9

router.post('/save', function (req, res, next) {
  if (req.query.loginname && req.query.pwd && req.query.name) {
    let sql = "insert into user (loginname,password,nickname)values(?,?,?)";
    mysqlCon.query(sql, [req.query.loginname, req.query.pwd, req.query.name], (error, results, fields) => {
      if (error) {
        res.json({
          status: false,
          sql: sql,
          query: req.query,
          error: error
        });
      } else {
        res.json({
          status: true
        });
      }
    });
  } else {
    res.json({
      status: false
    });
  }
});

router.post('/changepwd', function (req, res, next) {
  if (req.body.oldpwd && req.body.newpwd && req.body.userId) {
    let params = req.body;
    let sql = "update user set password = ? where id=? and password=?";
    mysqlCon.query(sql, [params.newpwd, params.userId, params.oldpwd], (error, results, fields) => {
      if (error) {
        res.json({
          status: false,
          sql: sql,
          error: error
        });
      } else {
        if (results.affectedRows > 0) {
          res.json({
            status: true,
            results: results,
            sql: sql,
            error: error
          });
        } else {
          res.json({
            status: false,
            results: results,
            sql: sql,
            error: error
          });
        }
      }
    });
  } else {
    res.json({
      status: false
    });
  }
});

/**
 * @api {post} /user/partys 获取全部党组织机构
 * @apiName partys
 * @apiGroup user
 *
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"results":[{"id":1,"partyNo":"001","partyName":"中共天津市津南区人民政府国有资产监督管理委员会委员会","responsibility":"暂无"},{"id":2,"partyNo":"001001","partyName":"中共天津市津南区人民政府国有资产监督管理委员会机关党支部","responsibility":"暂无"},{"id":3,"partyNo":"001002","partyName":"中共天津市津南区粮油贸易有限公司委员会","responsibility":"暂无"},{"id":4,"partyNo":"001003","partyName":"中共天津市津南区咸水沽储运贸易有限公司支部委员会","responsibility":"暂无"},{"id":5,"partyNo":"001004","partyName":"中共天津市津南区谷星粮油加工有限公司支部委员会","responsibility":"暂无"},{"id":6,"partyNo":"001005","partyName":"中共天津市津南区军粮供应站支部委员会","responsibility":"暂无"},{"id":7,"partyNo":"001006","partyName":"中共天津市津南区粮油贸易有限公司机关支部委员会","responsibility":"暂无"},{"id":8,"partyNo":"001007","partyName":"中共天津金谷鑫农种业有限公司支部委员会","responsibility":"暂无"},{"id":9,"partyNo":"001008","partyName":"中共天津市津南区粮食购销有限公司总支委员会","responsibility":"暂无"},{"id":10,"partyNo":"001009","partyName":"中共天津市津南区粮食购销有限公司机关支部委员会","responsibility":"暂无"},{"id":11,"partyNo":"001010","partyName":"中国天津津南国家粮食储备库支部委员会","responsibility":"暂无"},{"id":12,"partyNo":"001011","partyName":"中共天津市津南区小站粮食购销有限公司支部委员会","responsibility":"暂无"},{"id":13,"partyNo":"001012","partyName":"中共天津市津南区诚信粮食销售有限公司支部委员会","responsibility":"暂无"},{"id":14,"partyNo":"001013","partyName":"中共天津市津南区诚信粮食销售有限公司支部委员会","responsibility":"暂无"},{"id":15,"partyNo":"001014","partyName":"中共天津富凯建设集团有限公司支部委员会","responsibility":"暂无"},{"id":16,"partyNo":"001015","partyName":"中共天津市津南区建设开发公司支部委员会","responsibility":"暂无"},{"id":17,"partyNo":"001016","partyName":"中共天津津南城市建设投资有限公司支部","responsibility":"暂无"},{"id":18,"partyNo":"001010001","partyName":"津南国储库第一党小组","responsibility":"暂无"},{"id":19,"partyNo":"001010002","partyName":"津南国储库第二党小组","responsibility":"暂无"},{"id":20,"partyNo":"001014001","partyName":"第一党小组","responsibility":"暂无"},{"id":21,"partyNo":"001014002","partyName":"第二党小组","responsibility":"暂无"},{"id":22,"partyNo":"001014003","partyName":"第三党小组","responsibility":"暂无"},{"id":23,"partyNo":"001014004","partyName":"第四党小组","responsibility":"暂无"}]}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get('/partys', function (req, res, next) {
  let params = req.body;
  let sql = "select * from party";
  mysqlCon.query(sql, (error, results, fields) => {
    if (error) {
      res.json({
        status: false,
        sql: sql,
        error: error
      });
    } else {
      res.json({
        status: true,
        results: results
      });
    }
  });
});


/**
 * @api {post} /user/positions 获取用户全部的岗位列表
 * @apiName positions
 * @apiGroup user
 *
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true,"results":[{"id":1,"positionName":"书记","positionDesc":""},{"id":2,"positionName":"副书记","positionDesc":""},{"id":3,"positionName":"组织委员","positionDesc":""},{"id":4,"positionName":"宣传委员","positionDesc":""},{"id":5,"positionName":"纪检委员","positionDesc":""},{"id":6,"positionName":"党小组组长","positionDesc":""},{"id":7,"positionName":"普通党员","positionDesc":""}]}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get('/positions', function (req, res, next) {
  let params = req.body;
  let sql = "select * from positions";
  mysqlCon.query(sql, (error, results, fields) => {
    if (error) {
      res.json({
        status: false,
        sql: sql,
        error: error
      });
    } else {
      res.json({
        status: true,
        results: results
      });
    }
  });
});


/**
 * @api {post} /user/xfwPoints 更新先锋网学时
 * @apiName xfwPoints
 * @apiGroup user
 *
 * 
 * @apiParam {Number} userId 用户id
 * @apiParam {String} points 学时
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.post('/xfwPoints', function (req, res, next) {
  let params = req.query;
  if (params.userId && params.points) {
    let sql = "update user set xfwPoints=? where id=?";
    mysqlCon.query(sql, [params.points ,params.userId], (error, results, fields) => {
      if (error) {
        res.json({
          status: false,
          sql: sql,
          error: error
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
      status: false
    });
  }
});


/**
 * @api {post} /user/djyPoints 更新党建云积分
 * @apiName djyPoints
 * @apiGroup user
 *
 * 
 * @apiParam {Number} userId 用户id
 * @apiParam {String} points 学时
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.post('/djyPoints', function (req, res, next) {
  let params = req.query;
  if (params.userId && params.points) {
    let sql = "update user set djyPoints=? where id=?";
    mysqlCon.query(sql, [params.points ,params.userId], (error, results, fields) => {
      if (error) {
        res.json({
          status: false,
          sql: sql,
          error: error
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
      status: false
    });
  }
});


/**
 * @api {post} /user/yearassessmentAdd 提交年度考核
 * @apiName yearassessmentAdd
 * @apiGroup user
 *
 * 
 * @apiParam {Number} userId 用户id 必填
 * @apiParam {Number} total 总分
 * @apiParam {Number} score1 得分项
 * @apiParam {Number} score2 得分项
 * @apiParam {Number} score3 得分项
 * @apiParam {Number} score4 得分项
 * @apiParam {Number} score5 得分项
 * @apiParam {Number} score6 得分项
 * @apiParam {Number} score7 得分项
 * @apiParam {Number} score8 得分项
 * @apiParam {Number} score9 得分项
 * @apiParam {Number} score10 得分项
 * @apiParam {Number} score11 得分项
 * @apiParam {Number} score12 得分项
 * @apiParam {Number} score13 得分项
 * @apiParam {Number} score14 得分项
 * @apiParam {Number} score15 得分项
 * @apiParam {Number} score16 得分项
 * @apiParam {Number} score17 得分项
 * @apiParam {Number} score18 得分项
 * @apiParam {Number} score19 得分项
 * @apiParam {Number} score20 得分项
 * 
 * 
 * @apiSuccessExample {json} 成功
 * {"status":true}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.post('/yearassessmentAdd', function (req, res, next) {
  let params = req.query;
  if (params.userId) {
    let sql = "insert into yearassessment (userId, score1, score2, score3, score4, score5, score6,"+
    " score7, score8, score9, score10, score11, score12, score13, score14, score15, score16, score17,"+
    " score18, score19, score20, total)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    mysqlCon.query(sql, [params.userId,params.score1,params.score2,params.score3,params.score4,
      params.score5,params.score6,params.score7,params.score8,params.score9,params.score10,
      params.score11,params.score12,params.score13,params.score14,params.score15,params.score16,
      params.score17,params.score18,params.score19,params.score20,params.total], (error, results, fields) => {
      if (error) {
        res.json({
          status: false,
          sql: sql,
          error: error
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
      status: false
    });
  }
});


router.get("/yearassessmentPage", function (req, res, next) {
  let countSql = "";
  let sql = "";
  if (req.query.pageSize && req.query.pageNumber) {
      countSql = "select count(*) as count from yearassessment";
      let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
      let limit2 = Number.parseInt(req.query.pageSize);
      sql = "select * from yearassessment left join user on yearassessment.userId=user.id" +
          " limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
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


router.get("/shykpage", function (req, res, next) {
  let countSql = "";
  let sql = "";
  if (req.query.pageSize && req.query.pageNumber) {
      countSql = "select count(*) as count from shyk";
      let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
      let limit2 = Number.parseInt(req.query.pageSize);
      sql = "select * from shyk left join user on shyk.userId=user.id" +
          " limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
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
 * @api {get} /user/page 获取用户信息
 * @apiName page
 * @apiGroup user
 *
 * @apiParam {String} pageSize 
 * @apiParam {String} pageNumber 
 * 
 * @apiSuccessExample {json} 成功
 *  {"status":true,"data":[{"id":1,"password":"111111","loginname":"test","nickname":null,"positionName":"书记","positionId":1,"age":null,"gender":null,"phone":null,"email":null,"idcardno":null,"djyLoginname":"13642075123","djyPassword":"123456","xfwLoginname":"120112320100","xfwPassword":"123456","xfwType":0,"djyType":0,"djyPoints":"2","xfwPoints":"2","partyNo":"001010001","imgs":[]}]}
 * @apiErrorExample {json} 失败
 *  {"status":false}
 * 
 */
router.get("/page", function (req, res, next) {
  let countSql = "";
  let sql = "";
  if (req.query.pageSize && req.query.pageNumber) {
    countSql = "select count(id) as count from user";
    let limit1 = (Number.parseInt(req.query.pageNumber)) * Number.parseInt(req.query.pageSize);
    let limit2 = Number.parseInt(req.query.pageSize);
    sql = "select * from user" +
      " limit " + mysqlCon.escape(limit1) + "," + mysqlCon.escape(limit2);
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
            delete result.password
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
router.post("/fileupload", (req, res, next) => {
  if (req.files && req.files.length > 0) {
    let host = req.headers.host;
    let imgs = [];
    if (req.files)
        req.files.forEach(file => {
            imgs.push("http://" + host + "/" +file.filename);
        });
    res.json({
      errno: 0,
      status:true,
      data:imgs
    })
  } else {
    res.json({
      errno: 1,
      status:false
    })
  }
});
router.get("/fileupload", (req, res, next) => {
  res.sendFile(__dirname + "/fileupload.html")
});
module.exports = router;