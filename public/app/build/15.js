webpackJsonp([15],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizePageModule", function() { return OrganizePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organize__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrganizePageModule = /** @class */ (function () {
    function OrganizePageModule() {
    }
    OrganizePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__organize__["a" /* OrganizePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__organize__["a" /* OrganizePage */]),
            ],
        })
    ], OrganizePageModule);
    return OrganizePageModule;
}());

//# sourceMappingURL=organize.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizePage; });
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
 * Generated class for the OrganizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizePage = /** @class */ (function () {
    function OrganizePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.partyNo = "";
        this.partyNo = localStorage.getItem("partyNo") || "";
    }
    OrganizePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrganizePage');
    };
    OrganizePage.prototype.show = function (id) {
        switch (id) {
            case 1:
                var alert1 = this.alertCtrl.create({
                    title: '岗位职责',
                    subTitle: '党委书记的职责\n' +
                        '　　党委书记主持党委日常工作，认真贯彻执行党的路线、方针、政策，对执行上级党组织和党委的决议、完成党委各项任务负主要责任，其主要职责是：\n' +
                        '　　1.主持召开党委会议，贯彻党委决议并检查决议执行情况；\n' +
                        '　　2.坚持党组织参与企业重大决策的原则，发现企业重大问题决策不符合党和国家方针政策、法律法规或脱离实际时，应及时提出意见； \n' +
                        '　　3.正确执行党的民主集中制，发挥党委的核心领导作用； \n' +
                        '　　4.努力加强班子建设，自觉维护和加强班子团结，主持召开领导班子民主生活会，带头开展批评与自我批评； \n' +
                        ' 5.抓好三会一课，组织党员政治学习，教育党员发挥好先锋模范作用。\n' +
                        '　  6.深入基层，调查研究，总结经验，及时发现和解决问题；\n' +
                        '　　7．加强党的思想、组织、作风建设，抓好本部门党员干部的廉政、勤政教育； \n' +
                        '    8. 研究安排党委工作，组织制订党委工作计划，向上级党组织和党委会、党员大会报告工作。\n' +
                        '　　9．检查和指导工会、共青团等群众工作情况，密切联系群众，关心群众；\n' +
                        '　　10．依照党内有关制度规定完成其它工作。 \n' +
                        '党委副书记的职责\n' +
                        '　　1.贯彻执行党的路线、方针、政策，落实党总支及上级部门的有关文件和会议精神，检查和指导所属支部开展工作； \n' +
                        '　　2.带头执行民主集中制，开展批评与自我批评，搞好班子团结和建设；\n' +
                        '　　3.协助党总支书记抓好党的思想建设，组织建设、作风建设； \n' +
                        '　　4.协助书记做好对后备干部的培养教育工作，抓好干部队伍建设； \n' +
                        '　　5.协助书记做好党、纪、工、团相关工作； \n' +
                        '    6.与其他委员密切配合，创造性地开展党的活动。如：落实“三会一课”制度，召开党总支委员会民主生活会、党员组织生活会，总支委员会和党员大会，组织政治学习、慰问、民主评议党员、党组织的换届选举工作、发展新党员等工作；\n' +
                        '　　7.完成所分管的工作及党总支交办的其他工作。 \n' +
                        '党委组织委员的职责\n' +
                        '    党委组织委员在党委委员会的集体领导下，负责党委的组织工作。其主要职责是：\n' +
                        '　1.了解和掌握党委的组织状况，根据需要，提出党小组的划分和调整意见，检查和督促党小组过好组织生活，适时做好所属党组织换届改选、补选委员的准备工作；\n' +
                        '　2.了解和掌握党员的思想状况，协助宣传委员、纪律检查委员对党员进行思想教育和纪律教育工作；。\n' +
                        '　3.提出发展党员的意见，负责对入党积极分子的培养、教育和考察工作，制定发展党员计划，提出发展党员的意见，具体办理接收新党员的手续，做好对预备党员的教育、考察工作,按时办理预备党员转正的手续。\n' +
                        '　4.负责党员民主评议、党员统计、组织关系接转等工作；\n' +
                        '  5.负责党费收缴并定期向党员公布党费收缴和使用情况。\n' +
                        '党委宣传委员的职责\n' +
                        '    党委宣传委员在党委委员会的集体领导下负责党委的宣传工作，其主要职责是：\n' +
                        '　1.根据不同时期党的工作重心和上级党组织的指示，结合本单位党员和群众的思想实际，提出宣传教育工作计划和意见，经党委会集体讨论通过后，具体组织实施；\n' +
                        '　2.提出加强党员教育的意见。组织党员干部的政治理论、时事政策学习，组织党课学习，负责分配和管理党报、党刊、党员读物，积极做好思想政治工作；\n' +
                        '　3.根据党组织要求，围绕每个时期的工作任务开展宣传工作；\n' +
                        '　4.组织指导和推动本单位工会、共青团等群众组织的教育、学习及文化体育活动。抓好社会主义精神文明建设，指导本单位的政治学习。\n' +
                        '党委纪律检查委员的职责\n' +
                        '    党委纪律检查委员在党委委员会和上级纪律检查委员会的双重领导下工作，分管党委的纪律检查工作。其主要职责是：\n' +
                        '　1.负责党委党员党内法规、党风党纪的教育；\n' +
                        '　2.检查落实本单位对党的路线、方针、政策的贯彻执行情况；研究本单位党风方面存在的问题，向党委委员会提出加强党风建设的意见和措施；\n' +
                        '　3.承办纪检相关工作，了解并向党委委员会和上级纪委反映本单位党员遵纪守法状况；\n' +
                        '　4.保障党员的民主权利。受理党员和群众的申诉和控告，并及时向党委委员会和上级党组织汇报；\n' +
                        '　5.对党员违反党纪的问题进行调查，并提出处理意见。对受处分的党员进行考察和帮助教育。\n' +
                        '党委其他委员的职责\n' +
                        '　　1.认真履行党委的职责，完成党委交给的任务，重视党的建设，对党委的工作积极提出意见和建议；\n' +
                        '　　2.按时参加党委会议、党委理论学习中心组的学习，执行党委决议，维护党委集体领导； \n' +
                        '　　3.正确行使党和人民赋予的权力，廉洁从业，密切联系群众，自觉接受党员和群众的监督； \n' +
                        '　　4.坚持参加所在支部的组织活动，不作特殊党员。\n'
                });
                alert1.present();
                break;
            case 2:
                var alert2 = this.alertCtrl.create({
                    title: '岗位职责',
                    subTitle: '党总支书记的职责\n' +
                        '　　党总支书记主持党总支日常工作，认真贯彻执行党的路线、方针、政策，对执行上级党组织和党总支的决议、完成党总支各项任务负主要责任，其主要职责是：\n' +
                        '　　1.主持召开党总支会议，贯彻党总支决议并检查决议执行情况；\n' +
                        '　　2.坚持党组织参与企业重大决策的原则，发现企业重大问题决策不符合党和国家方针政策、法律法规或脱离实际时，应及时提出意见； \n' +
                        '　　3.正确执行党的民主集中制，发挥党总支的核心领导作用； \n' +
                        '　　4.努力加强班子建设，自觉维护和加强班子团结，主持召开领导班子民主生活会，带头开展批评与自我批评； \n' +
                        ' 5.抓好三会一课，组织党员政治学习，教育党员发挥好先锋模范作用。\n' +
                        '　  6.深入基层，调查研究，总结经验，及时发现和解决问题；\n' +
                        '　　7．加强党的思想、组织、作风建设，抓好本部门党员干部的廉政、勤政教育； \n' +
                        '    8. 研究安排党总支工作，组织制订党总支工作计划，向上级党组织和党总支会、党员大会报告工作。\n' +
                        '　　9．检查和指导工会、共青团等群众工作情况，密切联系群众，关心群众；\n' +
                        '　　10．依照党内有关制度规定完成其它工作。 \n' +
                        '党总支副书记的职责\n' +
                        '　　1.贯彻执行党的路线、方针、政策，落实党总支及上级部门的有关文件和会议精神，检查和指导所属支部开展工作； \n' +
                        '　　2.带头执行民主集中制，开展批评与自我批评，搞好班子团结和建设；\n' +
                        '　　3.协助党总支书记抓好党的思想建设，组织建设、作风建设； \n' +
                        '　　4.协助书记做好对后备干部的培养教育工作，抓好干部队伍建设； \n' +
                        '　　5.协助书记做好党、纪、工、团相关工作； \n' +
                        '    6.与其他委员密切配合，创造性地开展党的活动。如：落实“三会一课”制度，召开党总支委员会民主生活会、党员组织生活会，总支委员会和党员大会，组织政治学习、慰问、民主评议党员、党组织的换届选举工作、发展新党员等工作；\n' +
                        '　　7.完成所分管的工作及党总支交办的其他工作。 \n' +
                        '党委组织委员的职责\n' +
                        '    党总支组织委员在党总支委员会的集体领导下，负责党总支的组织工作。其主要职责是：\n' +
                        '　1.了解和掌握党总支的组织状况，根据需要，提出党小组的划分和调整意见，检查和督促党小组过好组织生活，适时做好所属党组织换届改选、补选委员的准备工作；\n' +
                        '　2.了解和掌握党员的思想状况，协助宣传委员、纪律检查委员对党员进行思想教育和纪律教育工作；。\n' +
                        '　3.提出发展党员的意见，负责对入党积极分子的培养、教育和考察工作，制定发展党员计划，提出发展党员的意见，具体办理接收新党员的手续，做好对预备党员的教育、考察工作,按时办理预备党员转正的手续。\n' +
                        '　4.负责党员民主评议、党员统计、组织关系接转等工作；\n' +
                        '  5.负责党费收缴并定期向党员公布党费收缴和使用情况。\n' +
                        '党总支宣传委员的职责\n' +
                        '    党总支宣传委员在党总支委员会的集体领导下负责党总支的宣传工作，其主要职责是：\n' +
                        '　1.根据不同时期党的工作重心和上级党组织的指示，结合本单位党员和群众的思想实际，提出宣传教育工作计划和意见，经党总支会集体讨论通过后，具体组织实施；\n' +
                        '　2.提出加强党员教育的意见。组织党员干部的政治理论、时事政策学习，组织党课学习，负责分配和管理党报、党刊、党员读物，积极做好思想政治工作；\n' +
                        '　3.根据党组织要求，围绕每个时期的工作任务开展宣传工作；\n' +
                        '　4.组织指导和推动本单位工会、共青团等群众组织的教育、学习及文化体育活动。抓好社会主义精神文明建设，指导本单位的政治学习。\n' +
                        '党总支纪律检查委员的职责\n' +
                        '    党总支纪律检查委员在党总支委员会和上级纪律检查委员会的双重领导下工作，分管党总支的纪律检查工作。其主要职责是：\n' +
                        '　1.负责党总支党员党内法规、党风党纪的教育；\n' +
                        '　2.检查落实本单位对党的路线、方针、政策的贯彻执行情况；研究本单位党风方面存在的问题，向党总支总支员会提出加强党风建设的意见和措施；\n' +
                        '　3.承办纪检相关工作，了解并向党总支委员会和上级纪委反映本单位党员遵纪守法状况；\n' +
                        '　4.保障党员的民主权利。受理党员和群众的申诉和控告，并及时向党总支委员会和上级党组织汇报；\n' +
                        '　5.对党员违反党纪的问题进行调查，并提出处理意见。对受处分的党员进行考察和帮助教育。\n'
                });
                alert2.present();
                break;
            case 3:
                var alert3 = this.alertCtrl.create({
                    title: '岗位职责',
                    subTitle: '党支部书记的职责\n' +
                        '    党支部书记负责主持党支部工作。其主要职责是:\n' +
                        '  1.负责召集支部委员会和支部党员大会；结合本单位的具体情况，认真贯彻执行党的路线、方针、政策和上级的决议、指示；研究安排支部工作，将支部工作中的重大问题，及时提交支部委员会和支部党员大会讨论决定；\n' +
                        '2.组织制定和落实支部工作计划，检查支部的工作计划、决议的执行情况，按时向支部委员会、支部党员大会和上级党组织报告工作；\n' +
                        '3.了解掌握党员的思想、工作和学习情况，发现问题及时解决，做好经常性的思想政治工作；\n' +
                        '4. 协调党、政、工、团的关系，充分调动各方面的积极性；  \n' +
                        '5.抓好“三会一课”，按时召开支委民主生活会，充分发挥支部集体领导作用。\n' +
                        '党支部副书记的职责\n' +
                        '　副书记协助党支部书记工作，书记不在时履行书记职责：\n' +
                        '　1.协助党支部书记工作，负责党支部日常工作，完成书记交办的其它事务；\n' +
                        '   2.协助抓好支部自身建设，党风廉政以及党员的发展、教育和管理工作；\n' +
                        '   3.积极帮助和协调工会、共青团等群众组织开展工作。\n' +
                        '   4.与其他委员密切配合，创造性地开展党的活动。如：落实“三会一课”制度，召开党员组织生活会，总支委员会和党员大会，组织政治学习、慰问、民主评议党员、党组织的换届选举工作等工作。\n' +
                        '党支部组织委员的职责\n' +
                        '    党支部组织委员在支部委员会的集体领导下，负责支部的组织工作。其主要职责是：\n' +
                        '　1.了解和掌握党支部的组织状况，根据需要，提出党小组的划分和调整意见，检查和督促党小组过好组织生活，适时做好支部委员会换届改选、补选支部委员的准备工作；\n' +
                        '　2.了解和掌握党员的思想状况，协助宣传委员、纪律检查委员对党员进行思想教育和纪律教育工作；。\n' +
                        '　3.提出发展党员的意见，负责对入党积极分子的培养、教育和考察工作，制定发展党员计划，提出发展党员的意见，具体办理接收新党员的手续，做好对预备党员的教育、考察工作,按时办理预备党员转正的手续。\n' +
                        '　4.负责党员民主评议、党员统计、组织关系接转等工作；\n' +
                        '  5.负责党费收缴并定期向党员公布党费收缴和使用情况。\n' +
                        '党支部宣传委员的职责\n' +
                        '    支部宣传委员在支部委员会的集体领导下负责支部的宣传工作，其主要职责是：\n' +
                        '　1.根据不同时期党的工作重心和上级党组织的指示，结合本单位党员和群众的思想实际，提出宣传教育工作计划和意见，经支部委员会集体讨论通过后，具体组织实施；\n' +
                        '　2.提出加强党员教育的意见。组织党员干部的政治理论、时事政策学习，组织党课学习，负责分配和管理党报、党刊、党员读物，积极做好思想政治工作；\n' +
                        '　3.根据党组织要求，围绕每个时期的工作任务开展宣传工作；\n' +
                        '　4.组织指导和推动本单位工会、共青团等群众组织的教育、学习及文化体育活动。抓好社会主义精神文明建设，指导本单位的政治学习。\n' +
                        '党支部纪律检查委员的职责\n' +
                        '    党支部纪律检查委员在支部委员会和上级纪律检查委员会的双重领导下工作，分管支部的纪律检查工作。其主要职责是：\n' +
                        '　1.负责支部党员党内法规、党风党纪的教育；\n' +
                        '　2.检查落实本单位对党的路线、方针、政策的贯彻执行情况；研究本单位党风方面存在的问题，向支部委员会提出加强党风建设的意见和措施；\n' +
                        '　3.承办纪检相关工作，了解并向支部委员会和上级纪委反映本单位党员遵纪守法状况；\n' +
                        '　4.保障党员的民主权利。受理党员和群众的申诉和控告，并及时向支部委员会和上级党组织汇报；\n' +
                        '　5.对党员违反党纪的问题进行调查，并提出处理意见。对受处分的党员进行考察和帮助教育。\n' +
                        '党总支其他委员的职责\n' +
                        '　　1.认真履行党总支的职责，完成党总支交给的任务，重视党的建设，对党总支的工作积极提出意见和建议；\n' +
                        '　　2.按时参加党总支会议、党总支理论学习中心组的学习，执行党总支决议，维护党总支集体领导； \n' +
                        '　　3.正确行使党和人民赋予的权力，廉洁从业，密切联系群众，自觉接受党员和群众的监督； \n' +
                        '　　4.坚持参加所在支部的组织活动，不作特殊党员。 \n'
                });
                alert3.present();
                break;
            case 4:
                var alert4 = this.alertCtrl.create({
                    title: '岗位职责',
                    subTitle: '党小组组长的职责\n' +
                        ' 党小组长在支部委员会的领导下，组织本小组党员积极开展党内各项活动，保证支部的决议和任务的贯彻落实，主要职责是：\n' +
                        '　1.按照党支部要求，组织党员学习，做好党员的思想工作。根据支部的决议和工作安排，向本小组的党员布置任务，并负责督促检查；\n' +
                        '　2.每月召开一至两次党小组会，严格党的组织生活。会前，党小组长要做好准备，并将小组会的内容、开会时间和地点及时通知组内每个党员；\n' +
                        '　3.了解党员的思想、工作和生活等方面的情况，经常向党支部反映党员的意见、建议和要求；\n' +
                        '　4.组织党员做好群众工作，及时反映群众的情绪和要求；\n' +
                        '　5.培养入党积极分子，协助支部做好发展党员工作；\n' +
                        '　6.按时收缴党费。'
                });
                alert4.present();
                break;
        }
    };
    OrganizePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organize',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\organize\organize.html"*/'<!--\n  Generated template for the OrganizePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>组织架构</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <p class="tips">提示：长按各分部显示岗位职责</p>\n  <h1 (press)="show(1)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001\'"></ion-icon>\n    国资委</h1>\n  <h2 (press)="show(2)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001009\'"></ion-icon>\n    中共天津市津南区粮食购销有限公司机关支部委员会</h2>\n\n  <h2 (press)="show(2)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001002\'"></ion-icon>\n    中共天津市津南区粮油贸易有限公司委员会</h2>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001006\'"></ion-icon>\n    中共天津市津南区咸水沽储运贸易有限公司支部委员会</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001004\'"></ion-icon>\n    中共天津市津南区谷星粮油加工有限公司支部委员会</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001005\'"></ion-icon>\n    中共天津市津南区军粮供应站支部委员会</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001006\'"></ion-icon>\n    中共天津市津南区粮油贸易有限公司机关支部委员会</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001007\'"></ion-icon>\n    中共天津金谷鑫农种业有限公司支部委员会</p>\n\n  <h2 (press)="show(2)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001008\'"></ion-icon>\n    中共天津市津南区粮食购销有限公司总支委员会</h2>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001009\'"></ion-icon>\n    中共天津市津南区粮食购销有限公司机关支部委员会</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001010\'"></ion-icon>\n    中国天津津南国家粮食储备库支部委员会</p>\n  <p class="li" (press)="show(4)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001010001\'"></ion-icon>\n    津南国储库第一党小组</p>\n  <p class="li" (press)="show(4)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001010002\'"></ion-icon>\n    津南国储库第二党小组 </p>\n\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001011\'"></ion-icon>\n    中共天津市津南区小站粮食购销有限公司支部委员会</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001012\'"></ion-icon>\n    中共天津市津南区诚信粮食销售有限公司支部委员会</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001013\'"></ion-icon>\n    中共天津市津南区八里台粮食购销有限公司支部委员会</p>\n  <h2 (press)="show(2)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001014\'"></ion-icon>\n    中共天津富凯建设集团有限公司支部委员会</h2>\n\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001014001\'"></ion-icon>\n    第一党小组</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001014002\'"></ion-icon>\n    第二党小组</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001014003\'"></ion-icon>\n    第三党小组</p>\n  <p (press)="show(3)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001014004\'"></ion-icon>\n    第四党小组</p>\n  <h2 (press)="show(2)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001015\'"></ion-icon>\n    中共天津市津南区建设开发公司支部委员会</h2>\n  <h2 (press)="show(2)">\n    <ion-icon name="person" class="me" *ngIf="partyNo==\'001016\'"></ion-icon>\n    中共天津津南城市建设投资有限公司支部</h2>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ionic2\jndjapp\src\pages\organize\organize.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OrganizePage);
    return OrganizePage;
}());

//# sourceMappingURL=organize.js.map

/***/ })

});
//# sourceMappingURL=15.js.map