webpackJsonp([1],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPageModule", function() { return WorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkPageModule = /** @class */ (function () {
    function WorkPageModule() {
    }
    WorkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__work__["a" /* WorkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__work__["a" /* WorkPage */]),
            ],
        })
    ], WorkPageModule);
    return WorkPageModule;
}());

//# sourceMappingURL=work.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPage; });
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
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkPage = /** @class */ (function () {
    function WorkPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + "/artical/page?pageSize=10&type=3&partyNo=" + localStorage.partyNo;
        this.pageNo = 0;
    }
    WorkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkPage');
        this.get();
    };
    WorkPage.prototype.get = function (event) {
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
    WorkPage.prototype.article = function (id) {
        this.navCtrl.push("WorkarticlePage", { article: this.arr[id] });
    };
    WorkPage.prototype.tip = function () {
        this.navCtrl.push("WorkarticlePage", { article: {
                title: "中国共产党党务公开条例（试行）",
                descs: "第一章　总则 　　第一条　为了贯彻落实党的十九大精神，推动全面从严治党向纵深发展，加强和规范党务公开工作，发展党内民主，强化党内监督，使广大党员更好了解和参与党内事务，动员组织人民群众贯彻落实好党的理论和路线方针政策，提高党的执政能力和领导水平，根据《中国共产党章程》，制定本条例。 　　第二条　本条例所称党务公开，是指党的组织将其实施党的领导活动、加强党的建设工作的有关事务，按规定在党内或者向党外公开。 　　第三条　本条例适用于党的中央组织、地方组织、基层组织，党的纪律检查机关、工作机关以及其他党的组织。 　　第四条　党务公开应当遵循以下原则： 　　(一)坚持正确方向。坚持维护以习近平同志为核心的党中央权威和集中统一领导，认真贯彻落实习近平新时代中国特色社会主义思想，牢固树立“四个意识”，坚定“四个自信”，把党务公开放到新时代中国特色社会主义的伟大实践中来谋划和推进，把坚持和完善党的领导要求贯彻到党务公开的全过程和各方面。 　　(二)坚持发扬民主。保障党员民主权利，落实党员知情权、参与权、选举权、监督权，更好调动全党积极性、主动性、创造性，及时回应党员和群众关切，以公开促落实、促监督、促改进。 　　(三)坚持积极稳妥。注重党务公开与政务公开等的衔接联动，统筹各层级、各领域党务公开工作，一般先党内后党外，分类实施，务求实效。 　　(四)坚持依规依法。尊崇党章，依规治党，依法办事，科学规范党务公开的内容、范围、程序和方式，增强严肃性、公信度，不断提升党务公开工作制度化、规范化水平。 　　第五条　建立健全党中央统一领导，地方党委分级负责，各部门各单位各负其责的党务公开工作领导体制。 　　中央办公厅承担党中央党务公开的具体工作，负责统筹协调和督促指导整个党务公开工作。地方党委办公厅(室)承担本级党委党务公开的具体工作，负责统筹协调和督促指导本地区的党务公开工作。各地区各部门应当加强党务公开工作机构和人员队伍建设。 　　第六条　党的组织应当根据所承担的职责任务，建立健全党务公开的保密审查、风险评估、信息发布、政策解读、舆论引导、舆情分析、应急处置等工作机制。 　　第二章　公开的内容和范围 　　第七条　党的组织贯彻落实党的基本理论、基本路线、基本方略情况，领导经济社会发展情况，落实全面从严治党责任、加强党的建设情况，以及党的组织职能、机构等情况，除涉及党和国家秘密不得公开或者依照有关规定不宜公开的事项外，一般应当公开。 　　加强对权力运行的制约和监督，让人民监督权力，让权力在阳光下运行。 　　党务公开不得危及政治安全特别是政权安全、制度安全，以及经济安全、军事安全、文化安全、社会安全、国土安全和国民安全等。 　　第八条　党的组织应当根据党务与党员和群众的关联程度合理确定公开范围： 　　(一)领导经济社会发展、涉及人民群众生产生活的党务，向社会公开; 　　(二)涉及党的建设重大问题或者党员义务权利，需要全体党员普遍知悉和遵守执行的党务，在全党公开; 　　(三)各地区、各部门、各单位的党务，在本地区、本部门、本单位公开; 　　(四)涉及特定党的组织、党员和群众切身利益的党务，对特定党的组织、党员和群众公开。 　　第九条　党的中央组织公开党的理论和路线方针政策，管党治党、治国理政重大决策部署，习近平总书记有关重要讲话、重要指示，党中央重要会议、活动和重要人事任免，党的中央委员会、中央政治局、中央政治局常务委员会加强自身建设等情况。 　　第十条　党的地方组织应当公开以下内容： 　　(一)学习贯彻党中央和上级组织决策部署，坚决维护以习近平同志为核心的党中央权威和集中统一领导情况; 　　(二)本地区经济社会发展部署安排、重大改革事项、重大民生措施等重大决策和推进落实情况，以及重大突发事件应急处置情况; 　　(三)履行全面从严治党主体责任，坚持贯彻民主集中制原则，严肃党内政治生活，全面负责本地区党的建设情况; 　　(四)本地区党的重要会议、活动和重要人事任免情况; 　　(五)党的地方委员会加强自身建设情况; 　　(六)其他应当公开的党务。 　　第十一条　党的基层组织应当公开以下内容： 　　(一)学习贯彻党中央和上级组织决策部署，坚决维护以习近平同志为核心的党中央权威和集中统一领导情况; 　　(二)任期工作目标、阶段性工作部署、重点工作任务及落实情况; 　　(三)加强思想政治工作、开展党内学习教育、组织党员教育培训、执行“三会一课”制度等情况; 　　(四)换届选举、党组织设立、发展党员、民主评议、召开组织生活会、保障党员权利、党费收缴使用管理以及党组织自身建设等情况; 　　(五)防止和纠正“四风”现象，联系服务党员和群众情况; 　　(六)落实管党治党政治责任，加强党风廉政建设，对党员作出组织处理和纪律处分情况; 　　(七)其他应当公开的党务。 　　第十二条　党的纪律检查机关应当公开以下内容： 　　(一)学习贯彻党中央大政方针和重大决策部署，坚决维护以习近平同志为核心的党中央权威和集中统一领导，贯彻落实本级党委、上级纪律检查机关工作部署情况; 　　(二)开展纪律教育、加强纪律建设，维护党章党规党纪情况; 　　(三)查处违反中央八项规定精神，发生在群众身边、影响恶劣的不正之风和腐败问题情况; 　　(四)对党员领导干部严重违纪涉嫌违法犯罪进行立案审查、组织审查和给予开除党籍处分情况; 　　(五)对党员领导干部严重失职失责进行问责情况; 　　(六)加强纪律检查机关自身建设情况; 　　(七)其他应当公开的党务。 　　第十三条　党的工作机关、党委派出机关、党委直属事业单位和党组应当根据本条例第七条第一款规定，结合实际确定公开内容。 　　党的工作机关和党委直属事业单位应当重点公开落实党委决策部署、开展党的工作情况。 　　党委派出机关应当重点公开代表党委领导本地区、本领域、本行业、本系统党的工作情况。 　　党组应当重点公开在本单位发挥领导作用和落实党建工作责任制情况。 　　第十四条　党的组织应当根据本条例规定的党务公开内容和范围编制党务公开目录，并根据职责任务要求动态调整。党务公开目录应当报党的上一级组织备案，并按照规定在党内或者向社会公开。 　　中央纪律检查委员会、中央各部门应当加强对本系统本领域党务公开目录编制的指导。 　　第三章　公开的程序和方式 　　第十五条　凡列入党务公开目录的事项，有关党的组织应当按照以下程序及时主动公开： 　　(一)提出。党的组织有关部门研究提出党务公开方案，拟订公开的内容、范围、时间、方式等。 　　(二)审核。党的组织有关部门进行保密审查，并从必要性、准确性等方面进行审核。 　　(三)审批。党的组织依照职权对党务公开方案进行审批，超出职权范围的必须按程序报批。 　　(四)实施。党的组织有关部门按照经批准的方案实施党务公开。 　　第十六条　党的组织应当根据党务公开的内容和范围，选择适当的公开方式。 　　在党内公开的，一般采取召开会议、制发文件、编发简报、在局域网发布等方式。向社会公开的，一般采取发布公报、召开新闻发布会、接受采访，在报刊、广播、电视、互联网、新媒体、公开栏发布等方式，优先使用党报党刊、电台电视台、重点新闻网站等党的媒体进行发布。 　　党的中央纪律检查机关、党中央有关工作机关，县级以上地方党委以及地方纪律检查机关、地方党委有关工作机关应当建立和完善党委新闻发言人制度，逐步建立例行发布制度，及时准确发布重要党务信息。 　　第十七条　党务公开可以与政务公开、厂务公开、村(居)务公开、公共事业单位办事公开等方面的载体和平台实现资源共享的，应当统筹使用。 　　有条件的党的组织可以建立统一的党务信息公开平台。 　　第十八条　注重党务公开相关信息监测反馈，对引起重大舆情反应的，应当及时报告。发现有不真实、不完整、不准确的信息，应当及时加以澄清和引导。 　　第十九条　建立健全党员旁听党委会议、党的代表大会代表列席党委会议、党内情况通报反映、党内事务咨询、重大决策征求意见、重大事项社会公示和社会听证等制度，发展和用好党务公开新形式，不断拓展党员和群众参与党务公开的广度和深度。 　　第四章　监督与追责 　　第二十条　党的组织应当将党务公开工作情况纳入向上一级组织报告工作或者抓党建工作专题报告的重要内容。 　　第二十一条　党的组织应当将党务公开工作情况作为履行全面从严治党政治责任的重要内容，对下级组织及其主要负责人进行考核。 　　党的组织应当每年向有关党员和群众通报党务公开情况，并纳入党员民主评议范围，主动听取群众意见。 　　第二十二条　党的组织应当建立健全党务公开工作督查机制，开展经常性检查和专项督查，专项督查可以与党风廉政建设责任制检查考核、党建工作考核等相结合。督查情况应当在适当范围通报。 　　第二十三条　对违反本条例规定并造成不良后果的，应当依规依纪追究有关党的组织、党员领导干部和工作人员的责任。 　　第五章　附则 　　第二十四条　中央军事委员会可以根据本条例，制定有关党务公开规定。 　　第二十五条　中央纪律检查委员会、中央各部门，各省、自治区、直辖市党委应当根据本条例制定实施细则。 　　第二十六条　本条例由中央办公厅会同中央组织部解释。 　　第二十七条　本条例自2017年12月20日起施行。"
            } });
    };
    WorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-work',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\work\work.html"*/'<!--\n  Generated template for the WorkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n<ion-title>党务公开</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img (click)="article(1)" src="assets/imgs/work_banner.jpg">\n  <p class="tips" (click)="tip()">党务公开条例</p>\n  <div class="article_list">\n    <div class="article_li" *ngFor="let li of arr;let li=index;" (click)="article(li.id)">\n      <img src="{{li.attachments}}">\n      <div class="article_mod">\n        <h3>{{li.title}}</h3>\n        <p>\n          <span>{{li.createdAt}}</span>\n        </p>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="get($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\work\work.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], WorkPage);
    return WorkPage;
}());

//# sourceMappingURL=work.js.map

/***/ })

});
//# sourceMappingURL=1.js.map