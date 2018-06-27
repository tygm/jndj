let express = require('express');
let router = express.Router();
let mysqlCon = require("../db/mysqlCon");
router.get("/login", (req, res, next) => {
    if (req.session && req.session.user) {
        res.redirect("/admin/index");
    } else {
        let params = req.body;
        console.log("/login111 ", params);
        res.render("admin/login");
    }
});
router.post("/login", (req, res, next) => {
    let params = req.body;
    if (!params.loginname)
        params = req.query;
    console.log("/login ", params)
    if (params.loginname && params.password) {
        //let sql = "select * from admin where loginname=? and password=?";
        let sql = "select * from user where loginname=? and password=? and positionId<7"; // and positionId<7
        mysqlCon.query(sql, [params.loginname, params.password], (error, results, fields) => {
            console.log("results", sql)
            if (error) {
                res.redirect("/admin/login")
            } else if (results.length == 0) {
                res.redirect("/admin/login")
            } else {
                req.session.user = results[0];
                res.redirect("/admin/index");
            }
        })
    } else {
        res.redirect("/admin/login")
    }
});
router.get("/index", (req, res, next) => {
    let data = {
        totalUser: "",
        totalActivities: "",
        totalTasks: "",
        totalArticals: "",
        menuName: "首页",
        subMenuName: ""
    }
    mysqlCon.query("select count(*) as count from user", (error, results, fields) => {
        if (error) {
            res.render("admin/index");
        } else {
            data.totalUser = results[0].count;
            mysqlCon.query("select count(*) as count from activity", (error, results, fields) => {
                if (error) {
                    res.render("admin/index", data);
                } else {
                    data.totalActivities = results[0].count;
                    mysqlCon.query("select count(*) as count from task", (error, results, fields) => {
                        if (error) {
                            res.render("admin/index", data);
                        } else {
                            data.totalTasks = results[0].count;
                            mysqlCon.query("select count(*) as count from artical", (error, results, fields) => {
                                if (error) {
                                    res.render("admin/index", data);
                                } else {
                                    data.totalArticals = results[0].count;
                                    res.render("admin/index", data);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

router.get("/place", (req, res, next) => {
    let data = {
        menuName: "地点管理",
        subMenuName: "地点列表"
    };
    res.render("admin/place", data);
});
router.get("/placeAdd", (req, res, next) => {
    let data = {
        menuName: "地点管理",
        subMenuName: "添加地点"
    };
    res.render("admin/placeAdd", data);
});

router.get("/bannerEdit", (req, res, next) => {
    let data = {
        menuName: "轮播图管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.query("select * from banner where id=?", [params.id],
            (error, results, fields) => {
                if (error) {
                    res.redirect("/admin/index")
                } else {
                    if (results[0]) {
                        data.id = params.id;
                        data.results = results[0];
                        res.render("admin/bannerEdit", data);
                    } else {
                        res.redirect("/admin/index")
                    }
                }
            })
    } else {
        res.redirect("/admin/index")
    }
});


router.get("/bannerDel", (req, res, next) => {
    let data = {
        menuName: "轮播图管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.query("delete from banner where id=?", [params.id],
            (error, results, fields) => {
                if (error) {
                    res.redirect("/admin/index")
                } else {
                    res.redirect("/admin/banner")
                }
            })
    } else {
        res.redirect("/admin/index")
    }
});




router.get("/taskEdit", (req, res, next) => {
    let data = {
        menuName: "任务管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.query("select * from task where id=?", [params.id],
            (error, results, fields) => {
                if (error) {
                    res.redirect("/admin/index")
                } else {
                    if (results[0]) {
                        data.id = params.id;
                        data.results = results[0];
                        res.render("admin/taskEdit", data);
                    } else {
                        res.redirect("/admin/index")
                    }
                }
            })
    } else {
        res.redirect("/admin/index")
    }
});


router.get("/taskDel", (req, res, next) => {
    let data = {
        menuName: "任务管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.beginTransaction(function (err) {
            if (err) {
                mysqlCon.rollback();
                res.redirect("/admin/index")
            } else {
                mysqlCon.query("delete from task_party where taskId=?", [params.id],
                    (error, results, fields) => {
                        if (error) {
                            mysqlCon.rollback();
                            res.redirect("/admin/index")
                        } else {
                            mysqlCon.query("delete from task where id=?", [params.id],
                                (error, results, fields) => {
                                    if (error) {
                                        mysqlCon.rollback();
                                        res.redirect("/admin/index")
                                    } else {
                                        mysqlCon.commit();
                                        res.redirect("/admin/task")
                                    }
                                })
                        }
                    })
            }
        })
    } else {
        res.redirect("/admin/index")
    }
});



router.get("/articalEdit", (req, res, next) => {
    let data = {
        menuName: "文章管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.query("select * from artical where id=?", [params.id],
            (error, results, fields) => {
                if (error) {
                    res.redirect("/admin/index")
                } else {
                    if (results[0]) {
                        data.id = params.id;
                        data.results = results[0];
                        res.render("admin/articalEdit", data);
                    } else {
                        res.redirect("/admin/index")
                    }
                }
            })
    } else {
        res.redirect("/admin/index")
    }
});


router.get("/articalDel", (req, res, next) => {
    let data = {
        menuName: "文章管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.beginTransaction(function (err) {
            if (err) {
                mysqlCon.rollback();
                res.redirect("/admin/index")
            } else {
                mysqlCon.query("delete from artical_party where articalId=?", [params.id],
                    (error, results, fields) => {
                        if (error) {
                            mysqlCon.rollback();
                            res.redirect("/admin/index")
                        } else {
                            mysqlCon.query("delete from artical where id=?", [params.id],
                                (error, results, fields) => {
                                    if (error) {
                                        mysqlCon.rollback();
                                        res.redirect("/admin/index")
                                    } else {
                                        mysqlCon.commit();
                                        res.redirect("/admin/artical")
                                    }
                                })
                        }
                    })
            }
        })
    } else {
        res.redirect("/admin/index")
    }
});




router.get("/activityEdit", (req, res, next) => {
    let data = {
        menuName: "活动管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.query("select * from activity where id=?", [params.id],
            (error, results, fields) => {
                if (error) {
                    res.redirect("/admin/index")
                } else {
                    if (results[0]) {
                        data.id = params.id;
                        data.results = results[0];
                        res.render("admin/activityEdit", data);
                    } else {
                        res.redirect("/admin/index")
                    }
                }
            })
    } else {
        res.redirect("/admin/index")
    }
});


router.get("/activityDel", (req, res, next) => {
    let data = {
        menuName: "活动管理",
        subMenuName: ""
    };
    let params = req.query;
    if (params.id) {
        mysqlCon.beginTransaction(function (err) {
            if (err) {
                mysqlCon.rollback();
                res.redirect("/admin/index")
            } else {
                mysqlCon.query("delete from activity_party where activityId=?", [params.id],
                    (error, results, fields) => {
                        if (error) {
                            mysqlCon.rollback();
                            res.redirect("/admin/index")
                        } else {
                            mysqlCon.query("delete from activity where id=?", [params.id],
                                (error, results, fields) => {
                                    if (error) {
                                        mysqlCon.rollback();
                                        res.redirect("/admin/index")
                                    } else {
                                        mysqlCon.commit();
                                        res.redirect("/admin/activity")
                                    }
                                })
                        }
                    })
            }
        })
    } else {
        res.redirect("/admin/index")
    }
});


router.get("/comments", (req, res, next) => {
    res.render("admin/comments", {
        menuName: "评论管理",
        subMenuName: ""
    });
});
router.get("/notification", (req, res, next) => {
    res.render("admin/notification", {
        menuName: "通知管理",
        subMenuName: "通知列表"
    });
});
router.get("/notificationAdd", (req, res, next) => {
    res.render("admin/notificationAdd", {
        menuName: "通知管理",
        subMenuName: "添加通知"
    });
});
router.get("/user", (req, res, next) => {
    res.render("admin/user", {
        menuName: "用户列表",
        subMenuName: ""
    });
});
router.get("/activityshyk", (req, res, next) => {
    res.render("admin/activityshyk", {
        menuName: "活动管理",
        subMenuName: "活动列表"
    });
});

router.get("/activityshykadd", (req, res, next) => {
    res.render("admin/activityshykadd", {
        menuName: "活动管理",
        subMenuName: "添加活动"
    });
});
router.get("/yearassessment", (req, res, next) => {
    res.render("admin/yearassessment", {
        menuName: "工作考核",
        subMenuName: ""
    });
});

router.get("/redpacket", (req, res, next) => {
    res.render("admin/redpacket", {
        menuName: "红包管理",
        subMenuName: "红包列表"
    });
});
router.get("/redpacketAdd", (req, res, next) => {
    res.render("admin/redpacketAdd", {
        menuName: "红包管理",
        subMenuName: "添加红包"
    });
});

router.get("/logout", (req, res, next) => {
    if (req.session && req.session.user)
        delete req.session.user;
    res.redirect("/admin/login");
});

router.get("/activity", (req, res, next) => {
    res.render("admin/activity", {
        menuName: "活动管理",
        subMenuName: "活动列表"
    });
});
router.get("/activityAdd", (req, res, next) => {
    res.render("admin/activityAdd", {
        menuName: "活动管理",
        subMenuName: "添加活动"
    });
});

router.get("/task", (req, res, next) => {
    res.render("admin/task", {
        menuName: "任务管理",
        subMenuName: "任务列表"
    });
});
router.get("/taskAdd", (req, res, next) => {
    res.render("admin/taskAdd", {
        menuName: "任务管理",
        subMenuName: "添加任务"
    });
});

router.get("/banner", (req, res, next) => {
    res.render("admin/banner", {
        menuName: "轮播图管理",
        subMenuName: "轮播图列表"
    });
});
router.get("/bannerAdd", (req, res, next) => {
    res.render("admin/bannerAdd", {
        menuName: "轮播图管理",
        subMenuName: "添加轮播图"
    });
});

router.get("/artical", (req, res, next) => {
    res.render("admin/artical", {
        menuName: "文章管理",
        subMenuName: "文章列表"
    });
});
router.get("/articalADD", (req, res, next) => {
    res.render("admin/articalAdd", {
        menuName: "文章管理",
        subMenuName: "添加文章"
    });
});
router.get("/delRedPacket", (req, res, next) => {
    if (req.query.id) {
        mysqlCon.beginTransaction(err => {
            if (err)
                throw err;
            else {
                mysqlCon.query("delete from redpacketrecords where redpacketId=?", req.query.id, (error, results, fields) => {
                    if (err) {
                        mysqlCon.rollback(err => {
                            throw err;
                        });
                        throw err;
                    } else {
                        mysqlCon.query("delete from redpacket where id=?", req.query.id, (error, results, fields) => {
                            if (err) {
                                mysqlCon.rollback(err => {
                                    throw err;
                                });
                                throw err;
                            } else {
                                mysqlCon.commit(err => {
                                    if (err) {
                                        mysqlCon.rollback();
                                        console.log(err)
                                        throw err;
                                    } else {
                                        res.redirect("/admin/redpacket")
                                    }
                                });
                            }
                        })
                    }
                })
            }
        })
    } else {
        res.redirect("/admin/index");
    }
});
module.exports = router;