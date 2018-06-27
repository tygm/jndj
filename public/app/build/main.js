webpackJsonp([34],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    //测试环境URL
    AppConfig.getUrl = function () {
        return "http://219.150.56.201:8080";
    };
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="tab-a"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="通知" tabIcon="tab-b"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="个人中心" tabIcon="tab-c"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/aboutmore/aboutmore.module": [
		275,
		33
	],
	"../pages/activity/acticityadd/acticityadd.module": [
		279,
		32
	],
	"../pages/activity/acticitymore/acticitymore.module": [
		280,
		31
	],
	"../pages/activity/activity.module": [
		276,
		30
	],
	"../pages/activity/activitylist/activitylist.module": [
		282,
		29
	],
	"../pages/aricle/aricle.module": [
		277,
		28
	],
	"../pages/contact/aboutapp/aboutapp.module": [
		278,
		27
	],
	"../pages/contact/bindadd/bindaccound/bindaccound.module": [
		281,
		26
	],
	"../pages/contact/bindadd/bindadd.module": [
		288,
		25
	],
	"../pages/contact/files/filemore/filemore.module": [
		284,
		24
	],
	"../pages/contact/files/files.module": [
		283,
		23
	],
	"../pages/contact/mystudy/mystudy.module": [
		286,
		22
	],
	"../pages/contact/point/point.module": [
		285,
		21
	],
	"../pages/contact/set/set.module": [
		287,
		20
	],
	"../pages/duty/duty.module": [
		297,
		19
	],
	"../pages/login/login.module": [
		289,
		18
	],
	"../pages/message/message.module": [
		290,
		17
	],
	"../pages/message/messarticle/messarticle.module": [
		291,
		16
	],
	"../pages/organize/organize.module": [
		292,
		15
	],
	"../pages/organize/organizelist/organizelist.module": [
		293,
		14
	],
	"../pages/organize/organizemore/organizemore.module": [
		295,
		13
	],
	"../pages/signup/signup.module": [
		296,
		12
	],
	"../pages/study/study.module": [
		298,
		11
	],
	"../pages/study/studyadd/studyadd.module": [
		294,
		10
	],
	"../pages/study/studymeans/studyarticle/studyarticle.module": [
		300,
		9
	],
	"../pages/study/studymeans/studymeans.module": [
		302,
		8
	],
	"../pages/study/studytime/studytime.module": [
		299,
		7
	],
	"../pages/study/studytime/studytimeper/studytimeper.module": [
		301,
		6
	],
	"../pages/study/studyvideo/studyplay/studyplay.module": [
		303,
		5
	],
	"../pages/study/studyvideo/studyvideo.module": [
		304,
		4
	],
	"../pages/task/task.module": [
		307,
		3
	],
	"../pages/task/taskmore/taskmore.module": [
		305,
		2
	],
	"../pages/work/work.module": [
		308,
		1
	],
	"../pages/work/workarticle/workarticle.module": [
		306,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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





var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.about = "1";
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/notification/page?pageSize=10&userId=" + localStorage.userid;
        this.pageNo = 0;
        this.get();
    }
    AboutPage.prototype.get = function (event) {
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
            _this.http.get(_this.url + "&type=" + _this.about + "&pageNumber=" + _this.pageNo)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                if (event)
                    event.complete();
                if (data.status) {
                    for (var i = 0; i < data.data.length; i++) {
                        _this.arr.push({
                            id: i + (10 * _this.pageNo),
                            tid: data.data[i].id,
                            title: data.data[i].title,
                            attachments: data.data[i].attachments[0],
                            notificationTitle: data.data[i].notificationTitle,
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
    AboutPage.prototype.goto = function (id) {
        this.navCtrl.push("AboutmorePage", { article: this.arr[id] });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>通知</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment class="navs" [(ngModel)]="about" (click)="get()">\n        <ion-segment-button value="1">岗位任务提醒</ion-segment-button>\n        <ion-segment-button value="2">个人任务提醒</ion-segment-button>\n        <ion-segment-button value="3">其他通知</ion-segment-button>\n    </ion-segment>\n\n    <div class="notice_list" *ngFor="let li of arr;let li=index;" (click)="goto(li.id)">\n        <div class="notice_body">\n            <h3>{{li.title}}</h3>\n            <p class="mess">{{li.notificationTitle}}</p>\n            <p class="time">{{li.createdAt}}</p>\n        </div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)="get($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.name = localStorage.djyuserName;
        this.job = localStorage.djydanwei;
        this.work = "区国资委党支部";
    }
    ContactPage.prototype.goto = function (id) {
        switch (id) {
            case 1:
                this.navCtrl.push("PointPage");
                break;
            case 2:
                this.navCtrl.push("BindaddPage");
                break;
            case 3:
                this.navCtrl.push("FilesPage");
                break;
            case 4:
                this.navCtrl.push("SetPage");
                break;
            case 5:
                this.navCtrl.push("AboutappPage");
                break;
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\contact.html"*/'<ion-content>\n    <div class="header">\n        <img src="assets/imgs/mod_avatar.png">\n        <h3>{{name}}</h3>\n        <p>{{job}}</p>\n        <!-- <p>我的积分：，个人学时：</p> -->\n    </div>\n    <div class="mod_hr"></div>\n    <!-- <div class="mod_btn" (click)="goto(1)">\n        <img class="icon_uesr" src="assets/imgs/user_icon1.png">\n        <p>我的积分\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n        </p>\n    </div> -->\n    <div class="mod_btn" (click)="goto(2)">\n        <img class="icon_uesr" src="assets/imgs/user_icon3.png">\n        <p>账号绑定\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n        </p>\n    </div>\n\n    <!--  <div class="mod_btn" (click)="goto(3)">\n        <img class="icon_uesr" src="assets/imgs/user_icon2.png">\n        <p>档案库\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n        </p>\n    </div> -->\n    <div class="mod_hr"></div>\n    <div class="mod_btn" (click)="goto(4)">\n        <img class="icon_uesr" src="assets/imgs/user_icon4.png">\n        <p>设置\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n        </p>\n    </div>\n    <div class="mod_btn" (click)="goto(5)">\n        <img class="icon_uesr" src="assets/imgs/user_icon5.png">\n        <p>关于\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n        </p>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.djycookie = localStorage.djycookie;
        this.xfwcookie = localStorage.xfwcookie;
        this.bannerurl = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/banner/page?pageSize=10&pageNumber=0";
        this.len = 0;
        this.banner();
    }
    HomePage.prototype.banner = function () {
        var _this = this;
        this.bannerarr = [];
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.bannerurl)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                if (data.status) {
                    for (var i = 0; i < data.data.length; i++) {
                        _this.bannerarr.push({
                            name: data.data[i].name,
                            imgs: data.data[i].imgs[0],
                            descs: data.data[i].descs,
                        });
                    }
                    console.log(_this.bannerarr);
                    _this.len = _this.bannerarr.length;
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
    HomePage.prototype.goto = function (id) {
        if (!localStorage.djycookie || !localStorage.xfwcookie) {
            var toast = this.toastCtrl.create({
                message: '需要先绑定党建云和先锋网账号',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            this.navCtrl.push("BindaddPage");
        }
        else {
            switch (id) {
                case 1:
                    this.navCtrl.push("TaskPage");
                    break;
                case 2:
                    this.navCtrl.push("StudyPage");
                    break;
                case 3:
                    this.navCtrl.push("OrganizePage");
                    break;
                case 4:
                    this.navCtrl.push("WorkPage");
                    break;
                case 5:
                    this.navCtrl.push("MessagePage");
                    break;
                case 6:
                    this.navCtrl.push("ActivitylistPage");
                    break;
                case 7:
                    this.navCtrl.push("DutyPage");
                    break;
            }
        }
    };
    HomePage.prototype.article = function () {
        this.navCtrl.push("AriclePage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="header">津南国资智慧党建</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <p class="tip" *ngIf="!xfwcookie">请先进入个人中心对先锋网账号进行绑定！</p>\n    <p class="tip" *ngIf="!djycookie">请先进入个人中心对党建云账号进行绑定！</p>\n<ion-slides class="banner" pager autoplay="2000" loop=true *ngIf="len >=1">\n        <ion-slide *ngFor="let li of bannerarr;">\n            <img src="{{li.imgs}}">\n            <h2>{{li.name}}</h2>\n        </ion-slide>\n    </ion-slides>\n    <ion-grid class="btn_list">\n        <ion-row>\n            <ion-col col-4 (click)="goto(1)">\n                <img src="assets/icon/home_ico1.png">\n                <p>我的任务</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(2)">\n                <img src="assets/icon/home_ico2.png">\n                <p>学习资料</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(3)">\n                <img src="assets/icon/home_ico3.png">\n                <p>组织架构</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(4)">\n                <img src="assets/icon/home_ico4.png">\n                <p>党务公开</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(5)">\n                <img src="assets/icon/home_ico5.png">\n                <p>支部风采</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(6)">\n                <img src="assets/icon/home_ico6.png">\n                <p>活动管理</p>\n            </ion-col>\n            <ion-col col-4 (click)="goto(7)">\n                <img src="assets/icon/home_ico7.png">\n                <p>主体责任</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <img style="position: absolute;bottom: 0;z-index: -1" src="assets/imgs/home_bottom.png">\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    iconMode: 'ios',
                    mode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition',
                    backButtonIcon: "ios-arrow-back",
                    activator: "highlight"
                }, {
                    links: [
                        { loadChildren: '../pages/about/aboutmore/aboutmore.module#AboutmorePageModule', name: 'AboutmorePage', segment: 'aboutmore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/activity.module#ActivityPageModule', name: 'ActivityPage', segment: 'activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aricle/aricle.module#AriclePageModule', name: 'AriclePage', segment: 'aricle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/aboutapp/aboutapp.module#AboutappPageModule', name: 'AboutappPage', segment: 'aboutapp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/acticityadd/acticityadd.module#ActicityaddPageModule', name: 'ActicityaddPage', segment: 'acticityadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/acticitymore/acticitymore.module#ActicitymorePageModule', name: 'ActicitymorePage', segment: 'acticitymore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/bindadd/bindaccound/bindaccound.module#BindaccoundPageModule', name: 'BindaccoundPage', segment: 'bindaccound', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/activitylist/activitylist.module#ActivitylistPageModule', name: 'ActivitylistPage', segment: 'activitylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/files/files.module#FilesPageModule', name: 'FilesPage', segment: 'files', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/files/filemore/filemore.module#FilemorePageModule', name: 'FilemorePage', segment: 'filemore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/point/point.module#PointPageModule', name: 'PointPage', segment: 'point', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/mystudy/mystudy.module#MystudyPageModule', name: 'MystudyPage', segment: 'mystudy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/set/set.module#SetPageModule', name: 'SetPage', segment: 'set', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/bindadd/bindadd.module#BindaddPageModule', name: 'BindaddPage', segment: 'bindadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/messarticle/messarticle.module#MessarticlePageModule', name: 'MessarticlePage', segment: 'messarticle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organize/organize.module#OrganizePageModule', name: 'OrganizePage', segment: 'organize', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organize/organizelist/organizelist.module#OrganizelistPageModule', name: 'OrganizelistPage', segment: 'organizelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/studyadd/studyadd.module#StudyaddPageModule', name: 'StudyaddPage', segment: 'studyadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organize/organizemore/organizemore.module#OrganizemorePageModule', name: 'OrganizemorePage', segment: 'organizemore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duty/duty.module#DutyPageModule', name: 'DutyPage', segment: 'duty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/study.module#StudyPageModule', name: 'StudyPage', segment: 'study', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/studytime/studytime.module#StudytimePageModule', name: 'StudytimePage', segment: 'studytime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/studymeans/studyarticle/studyarticle.module#StudyarticlePageModule', name: 'StudyarticlePage', segment: 'studyarticle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/studytime/studytimeper/studytimeper.module#StudytimeperPageModule', name: 'StudytimeperPage', segment: 'studytimeper', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/studymeans/studymeans.module#StudymeansPageModule', name: 'StudymeansPage', segment: 'studymeans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/studyvideo/studyplay/studyplay.module#StudyplayPageModule', name: 'StudyplayPage', segment: 'studyplay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/study/studyvideo/studyvideo.module#StudyvideoPageModule', name: 'StudyvideoPage', segment: 'studyvideo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/taskmore/taskmore.module#TaskmorePageModule', name: 'TaskmorePage', segment: 'taskmore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work/workarticle/workarticle.module#WorkarticlePageModule', name: 'WorkarticlePage', segment: 'workarticle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/work/work.module#WorkPageModule', name: 'WorkPage', segment: 'work', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, http) {
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        //this.rootPage="LoginPage";
        this.rootPage = "ActicityaddPage";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map