webpackJsonp([10],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyaddPageModule", function() { return StudyaddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studyadd__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudyaddPageModule = /** @class */ (function () {
    function StudyaddPageModule() {
    }
    StudyaddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__studyadd__["a" /* StudyaddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__studyadd__["a" /* StudyaddPage */]),
            ],
        })
    ], StudyaddPageModule);
    return StudyaddPageModule;
}());

//# sourceMappingURL=studyadd.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyaddPage; });
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
 * Generated class for the StudyaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyaddPage = /** @class */ (function () {
    function StudyaddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudyaddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyaddPage');
    };
    StudyaddPage.prototype.goto = function () {
        this.navCtrl.pop();
    };
    StudyaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studyadd',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studyadd\studyadd.html"*/'<!--\n  Generated template for the StudyaddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>上传资料</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="input_list">\n    <p>会议主题（请控制在30个汉字以内）</p>\n    <div class="input_li">\n      <ion-icon name="home"></ion-icon>\n      <input>\n    </div>\n  </div>\n  <div class="input_list">\n    <p>时间（点击滑动选择时间）</p>\n    <div class="input_li">\n      <ion-icon name="time"></ion-icon>\n      <input type="date">\n    </div>\n  </div>\n  <div class="input_list">\n    <p>内容</p>\n    <div class="input_li">\n      <textarea></textarea>\n    </div>\n  </div>\n  <div class="input_list">\n    <p>添加图片</p>\n    <div class="input_li">\n      <ion-icon name="md-photos"></ion-icon>\n      <input>\n    </div>\n  </div>\n  <div class="input_list">\n    <p>添加视频</p>\n    <div class="input_li">\n      <ion-icon name="videocam"></ion-icon>\n      <input>\n    </div>\n  </div>\n  <div padding>\n    <button ion-button full round (click)="goto()">提交</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studyadd\studyadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StudyaddPage);
    return StudyaddPage;
}());

//# sourceMappingURL=studyadd.js.map

/***/ })

});
//# sourceMappingURL=10.js.map