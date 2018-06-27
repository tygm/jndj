webpackJsonp([2],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskmorePageModule", function() { return TaskmorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskmore__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskmorePageModule = /** @class */ (function () {
    function TaskmorePageModule() {
    }
    TaskmorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__taskmore__["a" /* TaskmorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__taskmore__["a" /* TaskmorePage */]),
            ],
        })
    ], TaskmorePageModule);
    return TaskmorePageModule;
}());

//# sourceMappingURL=taskmore.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskmorePage; });
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
 * Generated class for the TaskmorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskmorePage = /** @class */ (function () {
    function TaskmorePage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/task/finish?userId=" + localStorage.userid;
        this.mess = this.navParams.data.mess;
    }
    TaskmorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskmorePage');
    };
    TaskmorePage.prototype.goto = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + "&taskId=" + _this.mess.taskid)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                if (data.status) {
                    var alert_1 = _this.alertCtrl.create({
                        title: "操作成功"
                    });
                    alert_1.present();
                    _this.mess.finishTime = new Date();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: data.msg
                    });
                    alert_2.present();
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
    TaskmorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taskmore',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\task\taskmore\taskmore.html"*/'<!--\n  Generated template for the TaskmorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>任务详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-slides class="banner" pager autoplay="2000" loop=true>\n    <ion-slide *ngFor="let img of mess.attachments;let img=index;">\n      <img src="{{img}}">\n    </ion-slide>\n  </ion-slides>\n  <div class="actmore">\n    <h2>{{mess.title}}</h2>\n<div class="act_li">\n  <span class="tit">任务类型</span>\n  <div class="mess">\n    <p>{{mess.type3}}</p>\n  </div>\n</div>\n    <div class="act_li">\n      <span class="tit">任务内容</span>\n      <div class="mess nr">\n        <p>{{mess.descs}}</p>\n      </div>\n    </div>\n    <div class="act_li">\n      <span class="tit">发布时间</span>\n      <div class="mess">\n        <p>{{mess.createdAt}}</p>\n      </div>\n    </div>\n    <div class="act_li">\n      <span class="tit">任务时间</span>\n      <div class="mess">\n        <p>开始时间：{{mess.starttime}}</p>\n        <p>结束时间：{{mess.endtime}}</p>\n      </div>\n    </div>\n  </div>\n\n<div padding>\n<button ion-button full round (click)="goto()" *ngIf="!mess.finishTime">点击完成</button>\n<button ion-button full round color="dark" *ngIf="mess.finishTime">已完成</button>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\task\taskmore\taskmore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TaskmorePage);
    return TaskmorePage;
}());

//# sourceMappingURL=taskmore.js.map

/***/ })

});
//# sourceMappingURL=2.js.map