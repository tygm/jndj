webpackJsonp([23],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPageModule", function() { return FilesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__files__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilesPageModule = /** @class */ (function () {
    function FilesPageModule() {
    }
    FilesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__files__["a" /* FilesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__files__["a" /* FilesPage */]),
            ],
        })
    ], FilesPageModule);
    return FilesPageModule;
}());

//# sourceMappingURL=files.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesPage; });
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
 * Generated class for the FilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilesPage = /** @class */ (function () {
    function FilesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilesPage');
    };
    FilesPage.prototype.goto = function () {
        this.navCtrl.push("FilemorePage");
    };
    FilesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-files',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\files\files.html"*/'<!--\n  Generated template for the FilesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>档案库</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="list_file" (click)="goto()">\n    <img src="assets/imgs/file_list1.jpg">\n    <h2>2018年4月20日会议记录</h2>\n  </div>\n  <div class="list_file" (click)="goto()">\n    <img src="assets/imgs/file_list2.jpg">\n    <h2>2018年4月20日会议记录</h2>\n  </div>\n  <div class="list_file" (click)="goto()">\n    <img src="assets/imgs/file_list3.jpg">\n    <h2>2018年4月20日会议记录</h2>\n  </div>\n  <div class="list_file" (click)="goto()">\n    <img src="assets/imgs/file_list4.jpg">\n    <h2>2018年4月20日会议记录</h2>\n  </div>\n  <div class="list_file" (click)="goto()">\n    <img src="assets/imgs/file_list5.jpg">\n    <h2>2018年4月20日会议记录</h2>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\files\files.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FilesPage);
    return FilesPage;
}());

//# sourceMappingURL=files.js.map

/***/ })

});
//# sourceMappingURL=23.js.map