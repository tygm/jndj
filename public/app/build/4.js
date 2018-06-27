webpackJsonp([4],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyvideoPageModule", function() { return StudyvideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studyvideo__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudyvideoPageModule = /** @class */ (function () {
    function StudyvideoPageModule() {
    }
    StudyvideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__studyvideo__["a" /* StudyvideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__studyvideo__["a" /* StudyvideoPage */]),
            ],
        })
    ], StudyvideoPageModule);
    return StudyvideoPageModule;
}());

//# sourceMappingURL=studyvideo.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyvideoPage; });
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
 * Generated class for the StudyvideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudyvideoPage = /** @class */ (function () {
    function StudyvideoPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/artical/page?pageSize=10&type=2&partyNo=" + localStorage.partyNo;
        this.pageNo = 0;
    }
    StudyvideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudyvideoPage');
        this.get();
    };
    StudyvideoPage.prototype.get = function (event) {
        var _this = this;
        if (event) {
            this.pageNo++;
        }
        else {
            this.pageNo = 0;
            this.arr = [];
        }
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + "&pageNumber=" + _this.pageNo)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                if (event)
                    event.complete();
                if (data.status) {
                    for (var i = 0; i < data.data.length; i++) {
                        _this.arr.push({
                            id: i + (10 * _this.pageNo),
                            title: data.data[i].title,
                            attachments: data.data[i].attachments[0],
                            descs: data.data[i].descs,
                            createdAt: new Date(data.data[i].createdAt).getFullYear() + "-" + (new Date(data.data[i].createdAt).getMonth() * 1 + 1) + "-" + new Date(data.data[i].createdAt).getDate(),
                        });
                    }
                    console.log(_this.arr);
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: data.msg
                    });
                    alert_1.present();
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
    StudyvideoPage.prototype.goto = function (id) {
        this.navCtrl.push("StudyplayPage", { article: this.arr[id] });
    };
    StudyvideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studyvideo',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studyvideo\studyvideo.html"*/'<!--\n  Generated template for the StudyvideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>视频</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="video_content">\n    <div class="video_body" *ngFor="let li of arr;let li=index;" (click)="goto(li.id)">\n      <img src="https://img.dangjianwang.com/original/2018/03/23/a2fa994e53493da514920fc92b87b44b.png">\n      <p>{{li.title}}</p>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="get($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studyvideo\studyvideo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], StudyvideoPage);
    return StudyvideoPage;
}());

//# sourceMappingURL=studyvideo.js.map

/***/ })

});
//# sourceMappingURL=4.js.map