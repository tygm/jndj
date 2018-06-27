webpackJsonp([18],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(102);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.login = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getUrl() + "/user/login";
        this.user = { loginname: "", pwd: "" };
        localStorage.setItem('loginname', "test");
        localStorage.setItem('password', "111111");
        this.user = { loginname: localStorage.loginname, pwd: localStorage.password };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.login, null, { params: _this.user })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                loading.dismiss();
                resolve(data);
                console.log(data);
                if (data.status) {
                    if (data.data.djyLoginname && data.data.djyPassword && !data.djy) {
                        var alert_1 = _this.alertCtrl.create({
                            title: "党建云模拟验证失败，请再试一次"
                        });
                        alert_1.present();
                    }
                    else {
                        localStorage.setItem('userid', data.data.id);
                        localStorage.setItem('loginname', data.data.loginname);
                        localStorage.setItem('nickname', data.data.nickname);
                        localStorage.setItem('password', data.data.password);
                        localStorage.setItem('partyNo', data.data.partyNo);
                        localStorage.setItem('positionId', data.data.positionId);
                        localStorage.setItem('djyPoints', data.data.djyPoints || "0");
                        localStorage.setItem('xfwPoints', data.data.xfwPoints || "0");
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                        if (data.djy) {
                            localStorage.setItem('djycookie', data.djy.cookie);
                            localStorage.setItem('djyuserName', data.djy.userName);
                            localStorage.setItem('djydanwei', data.djy.danwei);
                        }
                        if (data.xfw) {
                            localStorage.setItem('xfwcookie', data.xfw.cookie);
                        }
                    }
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: data.msg
                    });
                    alert_2.present();
                }
            }, function (err) {
                reject(err);
                loading.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: '服务器连接失败!'
                });
                alert.present();
            });
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push("SignupPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <img class="logo" src="assets/imgs/logo.png">\n  <h2>津南国资智慧党建</h2>\n  <ion-list inset>\n    <ion-item>\n      <ion-label><ion-icon name="md-person"></ion-icon> 账号：</ion-label>\n      <ion-input type="text" [(ngModel)]="user.loginname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label><ion-icon name="md-key"></ion-icon> 密码：</ion-label>\n      <ion-input type="password" [(ngModel)]="user.pwd"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button full round (click)="signin()">登录</button>\n    <p (click)="signup()">没有账号，点击注册</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=18.js.map