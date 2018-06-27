webpackJsonp([30],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
            ],
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivityPage = /** @class */ (function () {
    function ActivityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityPage');
    };
    ActivityPage.prototype.goto = function () {
        this.navCtrl.push("ActivitylistPage");
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\activity\activity.html"*/'<!--\n  Generated template for the ActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>组织活动</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h1 (click)="goto()">国资委</h1>\n  <h2 (click)="goto()">中共天津市津南区粮食购销有限公司机关支部委员会</h2>\n\n  <h2 (click)="goto()">中共天津市津南区粮油贸易有限公司委员会</h2>\n  <p (click)="goto()">中共天津市津南区咸水沽储运贸易有限公司支部委员会</p>\n  <p (click)="goto()">中共天津市津南区谷星粮油加工有限公司支部委员会</p>\n  <p (click)="goto()">中共天津市津南区军粮供应站支部委员会</p>\n  <p (click)="goto()">中共天津市津南区粮油贸易有限公司机关支部委员会</p>\n  <p (click)="goto()">中共天津金谷鑫农种业有限公司支部委员会</p>\n\n  <h2 (click)="goto()">中共天津市津南区粮食购销有限公司总支委员会</h2>\n  <p (click)="goto()">中共天津市津南区粮食购销有限公司机关支部委员会</p>\n  <p (click)="goto()">中国天津津南国家粮食储备库支部委员会</p>\n  <p class="li" (click)="goto()">津南国储库第一党小组</p>\n  <p class="li" (click)="goto()">津南国储库第二党小组 </p>\n\n  <p (click)="goto()">中共天津市津南区小站粮食购销有限公司支部委员会</p>\n  <p (click)="goto()">中共天津市津南区诚信粮食销售有限公司支部委员会</p>\n  <p (click)="goto()">中共天津市津南区八里台粮食购销有限公司支部委员会</p>\n  <h2 (click)="goto()">中共天津富凯建设集团有限公司支部委员会</h2>\n\n  <p (click)="goto()">第一党小组</p>\n  <p (click)="goto()">第二党小组</p>\n  <p (click)="goto()">第三党小组</p>\n  <p (click)="goto()">第四党小组</p>\n  <h2 (click)="goto()">中共天津市津南区建设开发公司支部委员会</h2>\n  <h2 (click)="goto()">中共天津津南城市建设投资有限公司支部</h2>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\activity\activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ActivityPage);
    return ActivityPage;
}());

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=30.js.map