webpackJsonp([12],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(100);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getUrl() + "/user/reg";
        this.partyurl = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getUrl() + "/user/partys";
        this.positionurl = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getUrl() + "/user/positions";
        this.user = { loginname: "", partyNo: "", positionId: "", positionName: "", pwd: "", pwdcheck: "" };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signin = function () {
        var _this = this;
        if (!this.user.loginname || !this.user.partyNo || !this.user.pwd || !this.user.pwdcheck) {
            var alert_1 = this.alertCtrl.create({
                title: '请填写全部内容才能进行注册!'
            });
            alert_1.present();
        }
        else if (this.user.pwd.length < 5) {
            var alert_2 = this.alertCtrl.create({
                title: '密码必须为6位以上!'
            });
            alert_2.present();
        }
        else if (this.user.pwd != this.user.pwdcheck) {
            var alert_3 = this.alertCtrl.create({
                title: '两次密码不一致，请重新输入!'
            });
            alert_3.present();
            this.user.pwd = "";
            this.user.pwdcheck = "";
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: '加载中...'
            });
            loading_1.present();
            return new Promise(function (resolve, reject) {
                _this.http.post(_this.url, null, { params: _this.user })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    loading_1.dismiss();
                    resolve(data);
                    console.log(data);
                    if (data.status) {
                        var alert_4 = _this.alertCtrl.create({
                            title: data.msg || "注册成功"
                        });
                        alert_4.onDidDismiss(function () {
                            _this.navCtrl.pop();
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
    SignupPage.prototype.choose = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.partyurl)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                var alert = _this.alertCtrl.create();
                alert.setTitle('选择组织');
                for (var i = 0; i < data.results.length; i++) {
                    alert.addInput({
                        type: 'radio',
                        label: data.results[i].partyName.replace("中共天津市津南区", "津南"),
                        value: data.results[i].partyNo,
                    });
                }
                alert.addButton('取消');
                alert.addButton({
                    text: 'OK',
                    handler: function (data) {
                        _this.user.partyNo = data;
                    }
                });
                alert.present();
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: '服务器连接失败!'
                });
                alert.present();
            });
        });
    };
    SignupPage.prototype.choose2 = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.positionurl)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                var alert = _this.alertCtrl.create();
                alert.setTitle('选择岗位');
                for (var i = 0; i < data.results.length; i++) {
                    alert.addInput({
                        type: 'radio',
                        label: data.results[i].positionName,
                        value: data.results[i].positionName + "," + data.results[i].id,
                    });
                }
                alert.addButton('取消');
                alert.addButton({
                    text: 'OK',
                    handler: function (data) {
                        _this.user.positionName = data.split(",")[0];
                        _this.user.positionId = data.split(",")[1];
                    }
                });
                alert.present();
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: '服务器连接失败!'
                });
                alert.present();
            });
        });
    };
    SignupPage.prototype.signup = function () {
        this.navCtrl.pop();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>注册</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <img class="logo" src="assets/imgs/logo.png">\n    <h2>津南国资智慧党建</h2>\n    <ion-list inset>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="md-person"></ion-icon>\n            </ion-label>\n            <ion-input type="text" [(ngModel)]="user.loginname" placeholder="请输入登录名"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="md-person"></ion-icon>\n            </ion-label>\n            <ion-input type="text" [(ngModel)]="user.nickname" placeholder="请输入姓名"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="md-person"></ion-icon>\n            </ion-label>\n            <ion-input type="text" readonly="true" (click)="choose()" [(ngModel)]="user.partyNo" placeholder="请选择组织"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="md-person"></ion-icon>\n            </ion-label>\n            <ion-input type="text" readonly="true" (click)="choose2()" [(ngModel)]="user.positionName" placeholder="请选择岗位"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="md-key"></ion-icon>\n            </ion-label>\n            <ion-input type="password" [(ngModel)]="user.pwd" placeholder="请输入密码"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <ion-icon name="md-key"></ion-icon>\n            </ion-label>\n            <ion-input type="password" [(ngModel)]="user.pwdcheck" placeholder="再次输入密码"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div padding>\n        <button ion-button full round (click)="signin()">注册</button>\n        <p (click)="signup()">已有账号，点击登录</p>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=12.js.map