webpackJsonp([11],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyPageModule", function() { return StudyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__study__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudyPageModule = /** @class */ (function () {
    function StudyPageModule() {
    }
    StudyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__study__["a" /* StudyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__study__["a" /* StudyPage */]),
            ],
        })
    ], StudyPageModule);
    return StudyPageModule;
}());

//# sourceMappingURL=study.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AppAvailability } from '@ionic-native/app-availability';
//let app;
//let startApp;
/**
 * Generated class for the StudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyPage = /** @class */ (function () {
    function StudyPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.xueshiGeren = 0;
        this.jifen = "";
        this.xueshiJiti = 0;
    }
    StudyPage.prototype.ionViewWillEnter = function () {
        this.xueshiGeren = Number.parseFloat((localStorage.getItem("xfwPoints") || "0")) || 0;
        this.getPoints();
    };
    StudyPage.prototype.getPoints = function () {
        var _this = this;
        if (localStorage.getItem("djycookie"))
            this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/djySpider/userInfo", { params: { cookie: localStorage.getItem("djycookie") } }).subscribe(function (r) {
                var j = r.json();
                if (j.status) {
                    _this.jifen = j.userInfo["userinfo-exp"];
                }
            }, function (e) {
            });
        if (localStorage.getItem("xfwcookie"))
            this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/xfwSpider/xueshi", { params: { cookie: localStorage.getItem("xfwcookie") } }).subscribe(function (r) {
                var j = r.json();
                if (j.status) {
                    var nickname_1 = localStorage.getItem("nickname");
                    j.data.forEach(function (element) {
                        if (element.text[1] && element.text[5]) {
                            if (element.text[1] == nickname_1) {
                                _this.xueshiJiti = _this.xueshiJiti + (Number.parseInt(element.text[5]) || 0);
                            }
                        }
                    });
                }
            }, function (e) {
            });
    };
    StudyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyPage');
    };
    StudyPage.prototype.goto = function (id) {
        switch (id) {
            case 1:
                //this.out();
                break;
            case 2:
                this.navCtrl.push("StudymeansPage");
                break;
            case 3:
                this.navCtrl.push("StudyvideoPage");
                break;
        }
    };
    StudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-study',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\study.html"*/'<!--\n  Generated template for the StudyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>学习资料</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <img class="banner" src="assets/imgs/study_banner.png">\n    <p class="time">集体研讨：{{xueshiJiti}}学时，个人学时：{{xueshiGeren}}学时，积分：{{jifen}}\n    </p>\n    <ion-grid class="btn_list">\n        <ion-row>\n            <ion-col col-4 (click)="goto(1)">\n                <img src="assets/icon/study_ico1.png">\n                <p>去学习</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(2)">\n                <img src="assets/icon/study_ico2.png">\n                <p>资料</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(3)">\n                <img src="assets/icon/study_ico3.png">\n                <p>视频</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\study.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], StudyPage);
    return StudyPage;
}());

//# sourceMappingURL=study.js.map

/***/ })

});
//# sourceMappingURL=11.js.map