let myql = require("mysql");
let connection = myql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "thinkbright.cn",
    dateStrings: true
});
let dbName = "jndj";
connection.connect((e, r) => {
    if (e) {
        console.log("连接数据库失败：" + JSON.stringify(e))
        process.exit(1);
    } else {
        console.log("连接数据库成功：" + JSON.stringify(r))
    }
});
connection.query("create database if not exists " + dbName);
connection.query("use " + dbName);
let createTables = [];
createTables.push("create table if not exists types (id int primary key auto_increment,name varchar(20))" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists positions (id int primary key auto_increment,positionName varchar(20)," +
    "positionDesc varchar(2000))ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists party (id int primary key auto_increment," +
    "partyNo varchar(200) unique,partyName varchar(200),responsibility varchar(10000))ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists user (id int primary key auto_increment," +
    "password varchar(20),loginname varchar(20) unique,nickname varchar(20)," +
    "positionName varchar(20),positionId int,age int,gender boolean,phone varchar(20),email varchar(20),idcardno varchar(20)," +
    "djyLoginname varchar(20), djyPassword varchar(20),xfwLoginname varchar(20),xfwPassword varchar(20)," +
    "xfwType int default 0,djyType int default 0,djyPoints varchar(20),xfwPoints varchar(20)," +
    "partyNo varchar(200),foreign key (partyNo) references party(partyNo)" +
    ",foreign key (positionId) references positions(id))ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists admin (id int primary key auto_increment," +
    "password varchar(20),loginname varchar(20) unique,nickname varchar(20)," +
    "partyNo varchar(200),foreign key (partyNo) references party(partyNo))ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists task (id int primary key auto_increment,title varchar(200)," +
    "descs varchar(2000),attachments varchar(1000)," +
    "starttime timestamp default 0,endtime timestamp default 0,status boolean," +
    "type1 int,type2 int,type3 int,periodCount int,childtaskId int,position1Desc varchar(2000)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");


createTables.push("create table if not exists task_finishSituation (id int primary key auto_increment," +
    "taskId int,foreign key (taskId) references task(id)," +
    "descs varchar(2000),userId int," +
    "partyNo varchar(200),foreign key (partyNo) references party(partyNo),"+
    "foreign key (userId) references user(id)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists task_party (id int primary key auto_increment,positionId int," +
    "taskId int,foreign key (taskId) references task(id)," +
    "partyNo varchar(200),foreign key (partyNo) references party(partyNo)" +
    ",foreign key (positionId) references positions(id)" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");


createTables.push("create table if not exists notification (id int primary key auto_increment,notificationTitle varchar(200)," +
    "title varchar(200),descs varchar(2000),attachments varchar(1000)," +
    "status boolean,fromId int," +
    "type int,userId int," +
    "foreign key (userId) references user(id)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists artical (id int primary key auto_increment,title varchar(200)," +
    "descs varchar(5000),attachments varchar(1000)" +
    ",status boolean," +
    "type int," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists artical_party (id int primary key auto_increment,positionId int," +
    "articalId int,foreign key (articalId) references artical(id)," +
    "partyNo varchar(200),foreign key (partyNo) references party(partyNo)," +
    "foreign key (positionId) references positions(id)" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists task_user (id int primary key auto_increment,title varchar(200)," +
    "taskId int,userId int,status int,attachments varchar(1000),content varchar(1000)," +
    "foreign key (taskId) references task(id)," +
    "foreign key (userId) references user(id)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists shyk (id int primary key auto_increment,shykType int,xfwId int,djyId int," +
    "userId int,shijianString varchar(50),didian varchar(50),title varchar(50),zhuchiren varchar(50),content varchar(1000)," +
    "jiluren varchar(50),yingdaoren int,shidaoren int,cpc_user_names varchar(200),cpc_absentuser_names varchar(200)," +
    "quexireasons varchar(1000),liexiren varchar(100)," +
    "imgs varchar(1000),attachments varchar(1000)," +
    "foreign key (userId) references user(id)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists yearassessment (id int primary key auto_increment," +
    "userId int,score1 int,score2 int,score3 int,score4 int,score5 int,score6 int,score7 int,score8 int," +
    "score9 int,score10 int,score11 int,score12 int,score13 int,score14 int,score15 int,score16 int," +
    "score17 int,score18 int,score19 int,score20 int,score21 int,score22 int,score23 int,score24 int," +
    "score25 int,score26 int,total int," +
    "foreign key (userId) references user(id)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists activity (id int primary key auto_increment,title varchar(200)," +
    "descs varchar(2000),attachments varchar(1000)," +
    "address varchar(100),organizer varchar(100),sponsor varchar(100)," +
    "starttime timestamp default 0,endtime timestamp default 0,status boolean," +
    "type1 int,type2 int,type3 int," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists activity_party (id int primary key auto_increment,positionId int," +
    "activityId int,foreign key (activityId) references activity(id)," +
    "partyNo varchar(200),foreign key (partyNo) references party(partyNo)," +
    "foreign key (positionId) references positions(id)" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists activity_user (id int primary key auto_increment,title varchar(200)," +
    "activityId int,userId int,status int,attachments varchar(1000),content varchar(1000)," +
    "foreign key (activityId) references activity(id)," +
    "foreign key (userId) references user(id)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists banner (id int primary key auto_increment,name varchar(100)," +
    "descs varchar(9000),type int,orders int," +
    "imgs varchar(2000)," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP)ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists place (id int primary key auto_increment,name varchar(1000)," +
    "descs varchar(9000),type int,longitude double,latitude double,address varchar(255),contact varchar(255)," +
    "imgs varchar(2000),uid varchar(100)," +
    "businessmanId int)ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists ibeacon (id int primary key auto_increment,mac varchar(100)," +
    "name varchar(100),mark varchar(100),mp3 varchar(100),placeId int,uuid varchar(100),major int,minor int," +
    "imgs varchar(1000),longitude double,latitude double," +
    "foreign key (placeId) references place(id))ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists comments (id int primary key auto_increment,content varchar(1000)," +
    "rating int,status boolean,imgs varchar(1000),type int," +
    "createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP," +
    "fromId int,loginname varchar(20),userId int," +
    "foreign key (userId) references user(id),foreign key (type) references types(id))" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");


createTables.push("create table if not exists favs (id int primary key auto_increment,content varchar(1000)," +
    "userId int,type int,fromId int,createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP," +
    "foreign key (userId) references user(id),foreign key (type) references types(id))" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists redpacket (id int primary key auto_increment,name varchar(100)," +
    "title varchar(100),descs varchar(10000),type int,total double default 0,received double default 0," +
    "dividers int,placeId int,rules varchar(1000),receivers int default 0," +
    "notice varchar(1000),imgs varchar(2000),createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" +
    ",starttime timestamp,endtime timestamp)ENGINE=InnoDB DEFAULT CHARSET=utf8");

createTables.push("create table if not exists redpacketrecords (id int primary key auto_increment," +
    "userId int,redpacketId int,money double,status boolean,createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP," +
    "foreign key (userId) references user(id),foreign key (redpacketId) references redpacket(id))" +
    "ENGINE=InnoDB DEFAULT CHARSET=utf8");
createTables.forEach(element => {
    connection.query(element, (err, res, fields) => {
        if (err) {
            console.log(element)
        }
    });
});


insertDataSql = [];
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001','中共天津市津南区人民政府国有资产监督管理委员会委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001001','中共天津市津南区人民政府国有资产监督管理委员会机关党支部','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001002','中共天津市津南区粮油贸易有限公司委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001003','中共天津市津南区咸水沽储运贸易有限公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001004','中共天津市津南区谷星粮油加工有限公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001005','中共天津市津南区军粮供应站支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001006','中共天津市津南区粮油贸易有限公司机关支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001007','中共天津金谷鑫农种业有限公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001008','中共天津市津南区粮食购销有限公司总支委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001009','中共天津市津南区粮食购销有限公司机关支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001010','中国天津津南国家粮食储备库支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001011','中共天津市津南区小站粮食购销有限公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001012','中共天津市津南区诚信粮食销售有限公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001013','中共天津市津南区诚信粮食销售有限公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001014','中共天津富凯建设集团有限公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001015','中共天津市津南区建设开发公司支部委员会','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001016','中共天津津南城市建设投资有限公司支部','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001010001','津南国储库第一党小组','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001010002','津南国储库第二党小组','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001014001','第一党小组','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001014002','第二党小组','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001014003','第三党小组','暂无')");
insertDataSql.push("insert into party (partyNo,partyName,responsibility)values('001014004','第四党小组','暂无')");

insertDataSql.push("insert into positions (positionName,positionDesc)values('书记','')");
insertDataSql.push("insert into positions (positionName,positionDesc)values('副书记','')");
insertDataSql.push("insert into positions (positionName,positionDesc)values('组织委员','')");
insertDataSql.push("insert into positions (positionName,positionDesc)values('宣传委员','')");
insertDataSql.push("insert into positions (positionName,positionDesc)values('纪检委员','')");
insertDataSql.push("insert into positions (positionName,positionDesc)values('党小组组长','')");
insertDataSql.push("insert into positions (positionName,positionDesc)values('普通党员','')");

insertDataSql.push("insert into user (password,loginname,partyNo,positionId,positionName)values('111111','test','001010001',1,'书记')");
insertDataSql.push("insert into user (password,loginname,partyNo,positionId,positionName)values('111111','test2','001001',2,'副书记')");
insertDataSql.push("insert into user (password,loginname,partyNo,positionId,positionName)values('111111','test3','001',7,'普通党员')");

insertDataSql.push("insert into admin (password,loginname,nickname,partyNo)" +
    "values('111111','admin','李金妹','001')");
insertDataSql.push("insert into admin (password,loginname,nickname,partyNo)values('111111','admin2','李大海','001001')");
insertDataSql.push("insert into admin (password,loginname,nickname,partyNo)values('111111','admin3','王华华','001010001')");
setTimeout(() => {
    connection.query("select count(*) as count from party", (err, res) => {
        if (res && res[0].count == 0) {
            insertDataSql.forEach(element => {
                connection.query(element, (err, res, fields) => {
                    if (err) {
                        console.log(element)
                    }
                });
            });
        }
    });
}, 1000)
module.exports = connection;