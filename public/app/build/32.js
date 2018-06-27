webpackJsonp([32],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActicityaddPageModule", function() { return ActicityaddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acticityadd__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActicityaddPageModule = /** @class */ (function () {
    function ActicityaddPageModule() {
    }
    ActicityaddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__acticityadd__["a" /* ActicityaddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__acticityadd__["a" /* ActicityaddPage */]),
            ],
        })
    ], ActicityaddPageModule);
    return ActicityaddPageModule;
}());

//# sourceMappingURL=acticityadd.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActicityaddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ActicityaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActicityaddPage = /** @class */ (function () {
    function ActicityaddPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.peopleurl = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/xfwSpider/xueshiusers?cookie=" + localStorage.xfwcookie;
        this.newurl = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/xfwSpider/shyk_save";
        this.table = {
            cookie: "",
            cookie_djy: "",
            shykType: "",
            tips: "",
            shijianString: "",
            didian: "",
            zhuchiren: "",
            jiluren: "",
            yingdaoren: "",
            shidaoren: "",
            title: "",
            liexiren: "",
            content: "",
            cpc_user_name: "",
            cpc_user_id: "",
            cpc_absentuser_id: ""
        };
        this.max = this.time(new Date());
        var x = new Date();
        var y = x.setDate(x.getDate() - 15);
        this.min = this.time(new Date(y));
    }
    ActicityaddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActicityaddPage');
        if (this.navParams.data.id || this.navParams.data.shykType) {
            console.log(1);
        }
    };
    ActicityaddPage.prototype.people = function (alerttype, alerttitle) {
        var _this = this;
        this.nocomename = [];
        this.nocomereason = [];
        this.nocomenum = [];
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.peopleurl)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                if (data.status) {
                    var names;
                    var peoplearr = [];
                    var alert_1 = _this.alertCtrl.create();
                    alert_1.setTitle(alerttitle);
                    for (var i = 0; i < data.data.length; i++) {
                        alert_1.addInput({
                            type: alerttype,
                            label: data.data[i].name,
                            value: data.data[i].name,
                        });
                        names = names + "," + data.data[i].name;
                        peoplearr.push({
                            name: data.data[i].name,
                            id: data.data[i].id
                        });
                    }
                    names = names.split(",");
                    names.splice(0, 1);
                    alert_1.addButton('取消');
                    alert_1.addButton({
                        text: '确定',
                        handler: function (data) {
                            if (alerttitle == '选择主持人') {
                                _this.table.zhuchiren = data;
                            }
                            if (alerttitle == '选择记录人') {
                                _this.table.jiluren = data;
                            }
                            if (alerttitle == '选择参加人员') {
                                _this.table.cpc_user_name = data.toString();
                                for (var i = 0; i < data.length; i++) {
                                    if (names.indexOf(data[i]) > -1) {
                                        names.splice(names.indexOf(data[i]), 1);
                                    }
                                }
                                for (var i = 0; i < names.length; i++) {
                                    _this.nocomename.push(names[i]);
                                    _this.nocomereason.push("");
                                    _this.nocomenum.push(i);
                                }
                                var addpeoplearr = [];
                                for (var i = 0; i < data.length; i++) {
                                    for (var x = 0; x < peoplearr.length; x++) {
                                        if (peoplearr[x].name.indexOf(data[i]) > -1) {
                                            addpeoplearr.push(peoplearr.splice(x, 1));
                                        }
                                    }
                                }
                                for (var i = 0; i < peoplearr.length; i++) {
                                    _this.table.cpc_absentuser_id = _this.table.cpc_absentuser_id + peoplearr[i].id + ",";
                                }
                                for (var i = 0; i < addpeoplearr.length; i++) {
                                    _this.table.cpc_user_id = _this.table.cpc_user_id + addpeoplearr[i][0].id + ",";
                                }
                            }
                        }
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: data.msg
                    });
                    alert_2.present();
                }
            }, function (err) {
                var alert = _this.alertCtrl.create({
                    title: err
                });
                alert.present();
            });
            loading.dismiss();
        });
    };
    ActicityaddPage.prototype.type = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        var txts = ["支部党员会", "支部委员会", "党小组会", "党课"];
        alert.setTitle("选择会议类型");
        alert.addInput({
            type: 'radio',
            label: '支部党员会',
            value: '0',
        });
        alert.addInput({
            type: 'radio',
            label: '支部委员会',
            value: '1',
        });
        alert.addInput({
            type: 'radio',
            label: '党小组会',
            value: '2',
        });
        alert.addInput({
            type: 'radio',
            label: '党课',
            value: '3',
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                _this.table.shykType = data;
                _this.table.shykType_ = txts[Number.parseInt(data) || 0];
            }
        });
        alert.present();
    };
    ActicityaddPage.prototype.tip = function () {
        var _this = this;
        var txts = ["无", "两学一做", "中心组学习", "四个意识专题教育", "精神文明创建", "党员志愿服务"];
        var alert = this.alertCtrl.create();
        alert.setTitle("选择标签");
        alert.addInput({
            type: 'radio',
            label: '无',
            value: '0',
        });
        alert.addInput({
            type: 'radio',
            label: '两学一做',
            value: '1',
        });
        alert.addInput({
            type: 'radio',
            label: '中心组学习',
            value: '2',
        });
        alert.addInput({
            type: 'radio',
            label: '四个意识专题教育',
            value: '3',
        });
        alert.addInput({
            type: 'radio',
            label: '精神文明创建',
            value: '4',
        });
        alert.addInput({
            type: 'radio',
            label: '党员志愿服务',
            value: '5',
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                _this.table.tips = data;
                _this.table.tips_ = txts[Number.parseInt(data) || 0];
            }
        });
        alert.present();
    };
    ActicityaddPage.prototype.sub = function () {
        var _this = this;
        if (!this.table.shykType ||
            !this.table.tips ||
            !this.table.shijianString ||
            !this.table.didian ||
            !this.table.zhuchiren ||
            !this.table.jiluren ||
            !this.table.yingdaoren ||
            !this.table.shidaoren ||
            !this.table.title ||
            !this.table.content) {
            var alert_3 = this.alertCtrl.create({
                title: '请填写全部内容才能进行提交!'
            });
            alert_3.present();
        }
        else {
            var alert_4 = this.alertCtrl.create();
            alert_4.setTitle("提交选项");
            alert_4.addInput({
                type: 'checkbox',
                label: '提交至先锋网',
                value: '0',
            });
            alert_4.addInput({
                type: 'checkbox',
                label: '提交至党建云',
                value: '1',
            });
            alert_4.addButton('取消');
            alert_4.addButton({
                text: '确定',
                handler: function (data) {
                    if (data.indexOf("0") > -1) {
                        _this.table.cookie = localStorage.xfwcookie;
                    }
                    if (data.indexOf("1") > -1) {
                        _this.table.cookie_djy = localStorage.djycookie;
                    }
                    _this.sub2();
                }
            });
            alert_4.present();
        }
    };
    ActicityaddPage.prototype.sub2 = function () {
        var _this = this;
        console.log(this.table);
        var x = "";
        for (var i = 0; i < this.nocomename.length; i++) {
            x = "&model.cpc_absentuser_name=" + this.nocomename[i] + "&model.quexireason=" + this.nocomereason[i] + x;
        }
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        console.log(x);
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/x-www-form-urlencoded");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.newurl, _this.transformAsUrlEncode(_this.table) + x, { headers: header })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                console.log(data);
                if (data.status) {
                    var alert_5 = _this.alertCtrl.create({
                        title: "提交成功"
                    });
                    alert_5.addButton({
                        text: '确定',
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    });
                    alert_5.present();
                }
                else {
                    var alert_6 = _this.alertCtrl.create({
                        title: data.msg
                    });
                    alert_6.present();
                }
            }, function (err) {
                reject(err);
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: '服务器连接失败!'
                });
                alert.present();
            });
            loading.dismiss();
        });
    };
    ActicityaddPage.prototype.transformAsUrlEncode = function (params) {
        var urlEncodeParams = "";
        for (var key in params) {
            if (key == "imgcode") {
                //imgcode参数是app本地使用的参数，且size较大，在上传时将其排除
                continue;
            }
            var param = key + "=" + params[key] + "&";
            param = param.replace(/\+/g, "%2B"); //base64图片中+号会变空格，处理下
            urlEncodeParams += param;
        }
        return urlEncodeParams;
    };
    ActicityaddPage.prototype.time = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    };
    ActicityaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acticityadd',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\activity\acticityadd\acticityadd.html"*/'<!--\n  Generated template for the ActicityaddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>信息发布</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content>\n  <div class="input_list">\n    <p>时间（点击滑动选择时间）</p>\n    <div class="input_li">\n      <ion-icon name="time"></ion-icon>\n      <input type="date" min="{{min}}" max="{{max}}" [(ngModel)]="table.shijianString">\n    </div>\n  </div>\n  <div class="input_list">\n    <p>地点</p>\n    <div class="input_li">\n      <ion-icon name="pin"></ion-icon>\n      <input [(ngModel)]="table.didian">\n    </div>\n  </div>\n  <ion-row>\n    <ion-col col-6>\n      <div class="input_list" (click)="people(\'radio\', \'选择主持人\')">\n        <p>主持人</p>\n        <div class="input_li">\n          <ion-icon name="person"></ion-icon>\n          <input readonly value="{{table.zhuchiren}}">\n        </div>\n      </div>\n    </ion-col>\n    <ion-col col-6>\n      <div class="input_list" (click)="people(\'radio\', \'选择记录人\')">\n        <p>记录人</p>\n        <div class="input_li">\n          <ion-icon name="person"></ion-icon>\n          <input readonly value="{{table.jiluren}}">\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6>\n      <div class="input_list">\n        <p>应到</p>\n        <div class="input_li">\n          <ion-icon name="person"></ion-icon>\n          <input type="number" [(ngModel)]="table.yingdaoren">\n        </div>\n      </div>\n    </ion-col>\n    <ion-col col-6>\n      <div class="input_list">\n        <p>实到</p>\n        <div class="input_li">\n          <ion-icon name="person"></ion-icon>\n          <input type="number" [(ngModel)]="table.shidaoren">\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div class="input_list" (click)="people(\'checkbox\', \'选择参加人员\')">\n    <p>参加人员</p>\n    <div class="input_li">\n      <ion-icon name="md-person-add"></ion-icon>\n      <input readonly value="{{table.cpc_user_name}}">\n    </div>\n  </div>\n  <ion-row *ngFor="let i of nocomenum;let i=index;">\n    <ion-col col-4>\n      <div class="input_list">\n        <p>请假人</p>\n        <div class="input_li">\n          <input readonly [(ngModel)]="nocomename[i]">\n        </div>\n      </div>\n    </ion-col>\n    <ion-col col-8>\n      <div class="input_list">\n        <p>原因</p>\n        <div class="input_li">\n          <input [(ngModel)]="nocomereason[i]">\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class="input_list">\n    <p>主要内容（请控制在30个汉字以内）</p>\n    <div class="input_li">\n      <ion-icon name="home"></ion-icon>\n      <input [(ngModel)]="table.title">\n    </div>\n  </div>\n  <div class="input_list">\n    <p>会议情况</p>\n    <div class="input_li">\n      <textarea [(ngModel)]="table.content"></textarea>\n    </div>\n  </div>\n  <div class="input_list" (click)="type()">\n    <p>会议类型</p>\n    <div class="input_li">\n      <ion-icon name="pricetags"></ion-icon>\n      <input readonly value="{{table.shykType_}}">\n    </div>\n  </div>\n  <div class="input_list" (click)="tip()">\n    <p>标签</p>\n    <div class="input_li">\n      <ion-icon name="pricetags"></ion-icon>\n      <input readonly value="{{table.tips_}}">\n    </div>\n  </div>\n  <!-- <div class="input_list">\n    <p>添加图片</p>\n    <div class="input_li">\n      <ion-icon name="md-photos"></ion-icon>\n      <input>\n    </div>\n  </div> -->\n  <div padding>\n    <button ion-button full round (click)="sub()">提交</button>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\activity\acticityadd\acticityadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ActicityaddPage);
    return ActicityaddPage;
}());

//# sourceMappingURL=acticityadd.js.map

/***/ })

});
//# sourceMappingURL=32.js.map