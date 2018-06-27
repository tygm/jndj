webpackJsonp([3],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskPageModule = /** @class */ (function () {
    function TaskPageModule() {
    }
    TaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */]),
            ],
        })
    ], TaskPageModule);
    return TaskPageModule;
}());

//# sourceMappingURL=task.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(100);
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
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskPage = /** @class */ (function () {
    function TaskPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */].getUrl() + "/task/page?pageSize=10&partyNo=" + localStorage.partyNo + "&userId=" + localStorage.userid + "&positionId=" + localStorage.positionId + "&pageNumber=";
        this.task = [];
        this.pageNo = 0;
        this.get();
    }
    TaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskPage');
    };
    TaskPage.prototype.get = function (event) {
        var _this = this;
        if (event) {
            this.pageNo++;
        }
        else {
            this.pageNo = 0;
            this.task = [];
        }
        var loading = this.loadingCtrl.create({
            content: '加载中...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.url + _this.pageNo)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (event)
                    event.complete();
                resolve(data);
                for (var i = 0; i < data.data.length; i++) {
                    var type3;
                    if (data.data[i].type3 == 1) {
                        type3 = "岗位任务";
                    }
                    else if (data.data[i].type3 == 2) {
                        type3 = "个人任务";
                    }
                    else {
                        type3 = data.data[i].type3;
                    }
                    _this.task.push({
                        taskid: data.data[i].id,
                        id: i + (10 * _this.pageNo),
                        title: data.data[i].title,
                        descs: data.data[i].descs,
                        attachments: data.data[i].attachments,
                        createdAt: new Date(data.data[i].createdAt).getFullYear() + "-" + (new Date(data.data[i].createdAt).getMonth() * 1 + 1) + "-" + new Date(data.data[i].createdAt).getDate(),
                        starttime: new Date(data.data[i].starttime).getFullYear() + "-" + (new Date(data.data[i].starttime).getMonth() * 1 + 1) + "-" + new Date(data.data[i].starttime).getDate(),
                        endtime: new Date(data.data[i].endtime).getFullYear() + "-" + (new Date(data.data[i].endtime).getMonth() * 1 + 1) + "-" + new Date(data.data[i].endtime).getDate(),
                        type3: type3,
                        finishTime: data.data[i].finishTime
                    });
                }
                console.log(_this.task);
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: '服务器连接失败!'
                });
                alert.present();
            });
            loading.dismiss();
        });
    };
    TaskPage.prototype.goto = function (id) {
        this.navCtrl.push("TaskmorePage", { mess: this.task[id] });
    };
    TaskPage.prototype.show = function () {
        var alert = this.alertCtrl.create({
            title: '总体完成要求!'
        });
        alert.present();
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\task\task.html"*/'<!--\n  Generated template for the TaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的任务</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div class="task_li" *ngFor="let li of task;let li=index;" (click)="goto(li.id)" (press)="show()">\n    <img src="{{li.attachments[0]}}">\n    <div class="task_li_mess">\n      <h3>{{li.title}}</h3>\n      <p class="descs">{{li.descs}}</p>\n      <p class="time">开始时间：{{li.starttime}}</p>\n      <p class="time">结束时间：{{li.endtime}}</p>\n      <p class="time">类型：{{li.type3}}</p>\n    </div>\n  </div>\n<ion-infinite-scroll (ionInfinite)="get($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\task\task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ })

});
//# sourceMappingURL=3.js.map