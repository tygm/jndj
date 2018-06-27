webpackJsonp([26],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindaccoundPageModule", function() { return BindaccoundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindaccound__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BindaccoundPageModule = /** @class */ (function () {
    function BindaccoundPageModule() {
    }
    BindaccoundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bindaccound__["a" /* BindaccoundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bindaccound__["a" /* BindaccoundPage */]),
            ],
        })
    ], BindaccoundPageModule);
    return BindaccoundPageModule;
}());

//# sourceMappingURL=bindaccound.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindaccoundPage; });
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
 * Generated class for the BindaccoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BindaccoundPage = /** @class */ (function () {
    function BindaccoundPage(navCtrl, navParams, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.url1 = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getUrl() + "/user/bindDJY"; //党建云
        this.url2 = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getUrl() + "/user/bindXFW"; //先锋网
        this.user = { loginname: "", pwd: "", userid: localStorage.userid };
        this.id = this.navParams.data.id;
    }
    BindaccoundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BindaccoundPage');
    };
    BindaccoundPage.prototype.back = function () {
        var _this = this;
        var url;
        if (this.id == 1) {
            url = this.url1;
        }
        else {
            url = this.url2;
        }
        console.log(url);
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.post(url, null, { params: _this.user })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                loading.dismiss();
                resolve(data);
                console.log(data);
                if (data.status) {
                    if (_this.id == 1) {
                        localStorage.setItem('djycookie', data.cookie);
                        localStorage.setItem('djyuserName', data.userName);
                        localStorage.setItem('djydanwei', data.danwei);
                    }
                    else {
                        localStorage.setItem('xfwcookie', data.cookie);
                    }
                    var alert_1 = _this.alertCtrl.create({
                        title: '绑定成功!'
                    });
                    alert_1.present();
                    _this.navCtrl.popToRoot();
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
    BindaccoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bindaccound',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\bindadd\bindaccound\bindaccound.html"*/'<!--\n  Generated template for the BindaccoundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>账号绑定</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list inset>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="md-person"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user.loginname" placeholder="请输入登录名"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="md-key"></ion-icon>\n      </ion-label>\n      <ion-input type="password" [(ngModel)]="user.pwd" placeholder="请输入密码"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class="btn_mod">\n    <button ion-button full round (click)="back()">绑定</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\bindadd\bindaccound\bindaccound.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BindaccoundPage);
    return BindaccoundPage;
}());

//# sourceMappingURL=bindaccound.js.map

/***/ })

});
//# sourceMappingURL=26.js.map