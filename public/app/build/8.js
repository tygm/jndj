webpackJsonp([8],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudymeansPageModule", function() { return StudymeansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studymeans__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudymeansPageModule = /** @class */ (function () {
    function StudymeansPageModule() {
    }
    StudymeansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__studymeans__["a" /* StudymeansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__studymeans__["a" /* StudymeansPage */]),
            ],
        })
    ], StudymeansPageModule);
    return StudymeansPageModule;
}());

//# sourceMappingURL=studymeans.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudymeansPage; });
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
 * Generated class for the StudymeansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudymeansPage = /** @class */ (function () {
    function StudymeansPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/artical/page?pageSize=10&type=1&partyNo=" + localStorage.partyNo;
        this.pageNo = 0;
    }
    StudymeansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudymeansPage');
        this.get();
    };
    StudymeansPage.prototype.get = function (event) {
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
    StudymeansPage.prototype.goto = function (id) {
        this.navCtrl.push("StudyarticlePage", { article: this.arr[id] });
    };
    StudymeansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studymeans',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studymeans\studymeans.html"*/'<!--\n  Generated template for the StudymeansPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>学习资料</ion-title>\n    <!-- \n    <ion-buttons end>\n      <button ion-button (click)="goto(3)">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="means_li" *ngFor="let li of arr;let li=index;" (click)="goto(li.id)">\n    <h2>{{li.title}}</h2>\n    <p>{{li.createdAt}}</p>\n  </div>\n<ion-infinite-scroll (ionInfinite)="get($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\study\studymeans\studymeans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], StudymeansPage);
    return StudymeansPage;
}());

//# sourceMappingURL=studymeans.js.map

/***/ })

});
//# sourceMappingURL=8.js.map