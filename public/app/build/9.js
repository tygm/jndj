webpackJsonp([9],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyarticlePageModule", function() { return StudyarticlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studyarticle__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudyarticlePageModule = /** @class */ (function () {
    function StudyarticlePageModule() {
    }
    StudyarticlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__studyarticle__["a" /* StudyarticlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__studyarticle__["a" /* StudyarticlePage */]),
            ],
        })
    ], StudyarticlePageModule);
    return StudyarticlePageModule;
}());

//# sourceMappingURL=studyarticle.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyarticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(26);
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
 * Generated class for the StudyarticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyarticlePage = /** @class */ (function () {
    function StudyarticlePage(navCtrl, navParams, http, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sanitizer = sanitizer;
        this.article = this.navParams.data.article;
        this.enterTime = 0;
    }
    StudyarticlePage.prototype.ionViewDidLoad = function () {
        this.enterTime = new Date().getTime();
        console.log('ionViewDidLoad StudyarticlePage');
    };
    StudyarticlePage.prototype.ionViewWillLeave = function () {
        var duration = ((new Date().getTime() - this.enterTime) / 1000 / 60 / 45);
        this.points = Number.parseFloat(localStorage.getItem("xfwPoints")) || 0;
        this.points += duration;
        this.points = this.points.toFixed(5);
        this.updatePoints(this.points);
    };
    StudyarticlePage.prototype.updatePoints = function (points) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/user/xfwPoints", null, { params: {
                userId: localStorage.getItem("userid"),
                points: points
            } }).subscribe(function (r) {
            var j = r.json();
            if (j.status) {
                localStorage.setItem("xfwPoints", _this.points + "");
            }
        }, function (e) {
        });
    };
    StudyarticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studyarticle',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studymeans\studyarticle\studyarticle.html"*/'<!--\n  Generated template for the StudyarticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{article.title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <div class="article_body">\n        <img src="{{article.attachments}}" alt="">\n        <div class="text" [innerHTML]="sanitizer.bypassSecurityTrustHtml(article.descs)">\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studymeans\studyarticle\studyarticle.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
    ], StudyarticlePage);
    return StudyarticlePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=studyarticle.js.map

/***/ })

});
//# sourceMappingURL=9.js.map