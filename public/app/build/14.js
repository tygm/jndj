webpackJsonp([14],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizelistPageModule", function() { return OrganizelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizelist__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrganizelistPageModule = /** @class */ (function () {
    function OrganizelistPageModule() {
    }
    OrganizelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__organizelist__["a" /* OrganizelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__organizelist__["a" /* OrganizelistPage */]),
            ],
        })
    ], OrganizelistPageModule);
    return OrganizelistPageModule;
}());

//# sourceMappingURL=organizelist.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizelistPage; });
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
 * Generated class for the OrganizelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizelistPage = /** @class */ (function () {
    function OrganizelistPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "dangyuanglist.shtml?userid=2";
        this.list = [];
    }
    OrganizelistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrganizelistPage');
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        console.log(this.url);
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                console.log(data);
                if (data.rows.users) {
                    for (var n = 0; n < data.rows.users.length; n++) {
                        var photomod = "";
                        if (!data.rows.users[n].photo) {
                            photomod = "assets/imgs/mod_avatar.png";
                        }
                        else {
                            photomod = data.rows.users[n].photo;
                        }
                        _this.list.push({
                            id: n,
                            xingbie: data.rows.users[n].xingbie,
                            wenhua: data.rows.users[n].wenhua,
                            photo: photomod,
                            rudangriqiString: data.rows.users[n].rudangriqiString,
                            jiankang: data.rows.users[n].jiankang,
                            zhuzhi: data.rows.users[n].zhuzhi,
                            zhuanzhengriqiString: data.rows.users[n].zhuanzhengriqiString,
                            xingming: data.rows.users[n].xingming,
                            chuguo: data.rows.users[n].chuguo,
                            phone: data.rows.users[n].phone,
                            shengriString: data.rows.users[n].shengriString,
                        });
                    }
                }
                else {
                    console.log(1);
                }
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        });
    };
    OrganizelistPage.prototype.goto = function (id) {
        this.navCtrl.push("OrganizemorePage", { "list": this.list[id] });
    };
    OrganizelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organizelist',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\organize\organizelist\organizelist.html"*/'<!--\n  Generated template for the OrganizelistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>组织架构</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="person_li" *ngFor="let item of list;" (click)="goto(item.id)">\n    <img src={{item.photo}}>\n    <div class="person_mess">\n      <h3>{{item.xingming}}</h3>\n      <p>入党时间：{{item.rudangriqiString}}</p>\n      <span class="type">{{item.zhuzhi}}</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\organize\organizelist\organizelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], OrganizelistPage);
    return OrganizelistPage;
}());

//# sourceMappingURL=organizelist.js.map

/***/ })

});
//# sourceMappingURL=14.js.map