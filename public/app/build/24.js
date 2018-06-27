webpackJsonp([24],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilemorePageModule", function() { return FilemorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filemore__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilemorePageModule = /** @class */ (function () {
    function FilemorePageModule() {
    }
    FilemorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filemore__["a" /* FilemorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filemore__["a" /* FilemorePage */]),
            ],
        })
    ], FilemorePageModule);
    return FilemorePageModule;
}());

//# sourceMappingURL=filemore.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilemorePage; });
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
 * Generated class for the FilemorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilemorePage = /** @class */ (function () {
    function FilemorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilemorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilemorePage');
    };
    FilemorePage.prototype.goto = function () {
        this.navCtrl.pop();
    };
    FilemorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filemore',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\files\filemore\filemore.html"*/'<!--\n  Generated template for the FilemorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>档案详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="input_list">\n    <p>主题（请控制在30个汉字以内）</p>\n    <div class="input_li">\n      <ion-icon name="home"></ion-icon>\n      <input value="2018年4月20日会议记录">\n    </div>\n  </div>\n  <div class="input_list">\n    <p>时间（点击滑动选择时间）</p>\n    <div class="input_li">\n      <ion-icon name="time"></ion-icon>\n      <input type="date" value="2018-05-03">\n    </div>\n  </div>\n  <div class="input_list">\n    <p>内容</p>\n    <div class="input_li">\n      <textarea>会议情况：\n一、机关党支部书记孙兆彬同志就本次民主评议党员进行部署讲话。\n二、机关支部书记孙兆彬同志进行个人自评\n1、存在问题：用新理论武装头脑，指导实践能力有待加强，抓党建基础工作不够细，推进党员教育管理措施不活。\n努力方向：提高理论联系实际能力，增强党性修养，夯实党建基础工作，加强党员队伍教育管理。\n2、其他党员提出批评意见\n赵晓磊：多给予业务指导\n陈炳羽：加强本单位及国资系统精神文明建设\n3、支部书记孙兆彬同志表态：全部接受，及时整改。</textarea>\n    </div>\n  </div>\n  <!--<div class="input_list">\n    <p>添加图片</p>\n    <div class="input_li">\n      <ion-icon name="md-photos"></ion-icon>\n      <input>\n    </div>\n  </div>-->\n  <!--<div class="input_list">\n    <p>添加视频</p>\n    <div class="input_li">\n      <ion-icon name="videocam"></ion-icon>\n      <input>\n    </div>\n  </div>-->\n  <div padding>\n    <button ion-button full round (click)="goto()">提交</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\files\filemore\filemore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FilemorePage);
    return FilemorePage;
}());

//# sourceMappingURL=filemore.js.map

/***/ })

});
//# sourceMappingURL=24.js.map