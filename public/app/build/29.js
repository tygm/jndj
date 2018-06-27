webpackJsonp([29],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitylistPageModule", function() { return ActivitylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activitylist__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivitylistPageModule = /** @class */ (function () {
    function ActivitylistPageModule() {
    }
    ActivitylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */]),
            ],
        })
    ], ActivitylistPageModule);
    return ActivitylistPageModule;
}());

//# sourceMappingURL=activitylist.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitylistPage; });
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
 * Generated class for the ActivitylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitylistPage = /** @class */ (function () {
    function ActivitylistPage(navCtrl, navParams, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/xfwSpider/shyk";
        this.peopleurl = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/xfwSpider/xueshiusers?cookie=" + localStorage.xfwcookie;
        this.newurl = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/xfwSpider/xueshiadd";
        this.traintimeString = "";
        this.trainway = "";
        this.content = "";
        this.list = [];
        this.addtype = false;
        this.table = {
            cookie: localStorage.xfwcookie,
            nameid: "",
            name: ""
        };
    }
    ActivitylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitylistPage');
        this.activity = "0";
        this.get();
        if (localStorage.xfwcookie) {
            this.addtype = true;
        }
    };
    ActivitylistPage.prototype.get = function () {
        var _this = this;
        if (this.activity != "4") {
            this.loginmess = { cookie: localStorage.xfwcookie, shykType: this.activity };
            var loading_1 = this.loadingCtrl.create({
                content: '加载中...'
            });
            loading_1.present();
            this.list = [];
            return new Promise(function (resolve, reject) {
                _this.http.post(_this.url, null, { params: _this.loginmess })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    loading_1.dismiss();
                    resolve(data);
                    console.log(data);
                    if (data.status) {
                        for (var i = 0; i < data.data.length; i++) {
                            _this.list.push({
                                id: data.data[i][data.data[i].length - 1].id,
                                title: data.data[i][0].text,
                                time: data.data[i][1].text
                            });
                        }
                        console.log(_this.list);
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: data.msg
                        });
                        alert_1.present();
                    }
                }, function (err) {
                    reject(err);
                    loading_1.dismiss();
                    console.log(err);
                    var alert = _this.alertCtrl.create({
                        title: '服务器连接失败!'
                    });
                    alert.present();
                });
            });
        }
    };
    ActivitylistPage.prototype.more = function (id) {
        this.navCtrl.push("ActicitymorePage", { "id": id, shykType: this.activity });
    };
    ActivitylistPage.prototype.delete = function (id) {
        console.log(1);
    };
    ActivitylistPage.prototype.add = function () {
        this.navCtrl.push("ActicityaddPage");
    };
    ActivitylistPage.prototype.people = function () {
        var _this = this;
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
                    var peoplearr = [];
                    var alert_2 = _this.alertCtrl.create();
                    alert_2.setTitle('选择参加人员');
                    for (var i = 0; i < data.data.length; i++) {
                        alert_2.addInput({
                            type: 'checkbox',
                            label: data.data[i].name,
                            value: data.data[i].name,
                        });
                        peoplearr.push({
                            name: data.data[i].name,
                            id: data.data[i].id
                        });
                    }
                    alert_2.addButton('取消');
                    alert_2.addButton({
                        text: '确定',
                        handler: function (data) {
                            _this.table.name = data.toString();
                            var addpeoplearr = [];
                            for (var i = 0; i < data.length; i++) {
                                for (var x = 0; x < peoplearr.length; x++) {
                                    if (peoplearr[x].name.indexOf(data[i]) > -1) {
                                        addpeoplearr.push(peoplearr.splice(x, 1));
                                    }
                                }
                            }
                            for (var i = 0; i < addpeoplearr.length; i++) {
                                _this.table.nameid = addpeoplearr[i][0].id + "," + _this.table.nameid;
                            }
                        }
                    });
                    alert_2.present();
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: data.msg
                    });
                    alert_3.present();
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
    ActivitylistPage.prototype.sub = function () {
        var _this = this;
        console.log(this.table);
        var x;
        x = "&tcpcTrainCondition.traintimeString=" + this.traintimeString + "&tcpcTrainCondition.trainway=" + this.trainway + "&tcpcTrainCondition.content=" + this.content;
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
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
                    var alert_4 = _this.alertCtrl.create({
                        title: "提交成功"
                    });
                    alert_4.present();
                }
                else {
                    var alert_5 = _this.alertCtrl.create({
                        title: data.msg
                    });
                    alert_5.present();
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
    ActivitylistPage.prototype.transformAsUrlEncode = function (params) {
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
    ActivitylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activitylist',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\activity\activitylist\activitylist.html"*/'<!--\n  Generated template for the ActivitylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>活动管理</ion-title>\n    <ion-buttons end>\n<button ion-button (click)="add()" *ngIf="addtype">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-segment class="navs" [(ngModel)]="activity" (ngModelChange)="get()">\n    <ion-segment-button value="0">党员大会</ion-segment-button>\n    <ion-segment-button value="1">支部委员会</ion-segment-button>\n    <ion-segment-button value="2">党小组会</ion-segment-button>\n    <ion-segment-button value="3">党课</ion-segment-button>\n    <ion-segment-button value="4">集体研讨会</ion-segment-button>\n  </ion-segment>\n  <ion-list class="article_list" *ngIf="activity != \'4\'">\n    <img src="assets/imgs/activity_banner.png">\n    <ion-item-sliding *ngFor="let item of list;">\n      <ion-item class="article_li" (click)="more(item.id)">\n        <h3>{{item.title}}</h3>\n        <p>{{item.time}}</p>\n      </ion-item>\n      <!-- \n      <ion-item-options side="right">\n        <button ion-button expandable (click)="delete(item.id)">删除</button>\n      </ion-item-options> -->\n    </ion-item-sliding>\n  </ion-list>\n  <div class="time" *ngIf="activity === \'4\'">\n    <div class="input_list" (click)="people()">\n      <p>参加人员</p>\n      <div class="input_li">\n        <ion-icon name="md-person-add"></ion-icon>\n        <input readonly value="{{table.name}}">\n      </div>\n    </div>\n    <div class="input_list">\n      <p>时间（点击滑动选择时间）</p>\n      <div class="input_li">\n        <ion-icon name="time"></ion-icon>\n<input type="date" [(ngModel)]="traintimeString">\n      </div>\n    </div>\n    <div class="input_list">\n      <p>学习方式</p>\n      <div class="input_li">\n        <ion-icon name="home"></ion-icon>\n<input [(ngModel)]="trainway">\n      </div>\n    </div>\n    <div class="input_list">\n      <p>学习内容</p>\n      <div class="input_li">\n<textarea [(ngModel)]="content"></textarea>\n      </div>\n    </div>\n    <div padding>\n      <button ion-button full round (click)="sub()">提交</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\activity\activitylist\activitylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ActivitylistPage);
    return ActivitylistPage;
}());

//# sourceMappingURL=activitylist.js.map

/***/ })

});
//# sourceMappingURL=29.js.map