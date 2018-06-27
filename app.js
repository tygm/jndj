let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');
var multer = require('multer');
let fs = require("fs");
let session = require("express-session")

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let placeRouter = require("./routes/place");
let commentsRouter = require("./routes/comments");
let activityRouter = require("./routes/activity");
let redpacketRouter = require("./routes/redpacket");
let articalRouter = require("./routes/artical");
let adminRouter = require("./routes/admin");
let djySpider = require("./routes/djySpider");
let xfwSpider = require("./routes/xfwSpider");
let taskRouter = require("./routes/task");
let bannerRouter = require("./routes/banner");
let notificationRouter = require("./routes/notification");

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(multer({
  dest: path.join(__dirname,'uploads')
}).any());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 30
  }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'views')));
//添加允许跨域
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
//修改文件后缀
app.use(function (req, res, next) {
  if (req.files) {
    req.files.forEach(file => {
      if (file.originalname && file.originalname.indexOf(".") > 0) {
        let houzhui = file.originalname.substr(file.originalname.lastIndexOf("."));
        if (houzhui) {
          file.filename += houzhui;
          fs.rename(file.path, file.path + houzhui, () => {});
        }
      }
    });
  }
  next();
});
app.use(function (req, res, next) {
  res.locals.webTitle = "津南国资智慧党建";
  res.locals.projName = "津南国资智慧党建";
  if (req.originalUrl && req.originalUrl.startsWith("/admin") && !req.originalUrl.startsWith("/admin/login") && !req.session.user) {
    console.log("not logined")
    res.redirect("/admin/login");
  } else {
    if (req.session && req.session.user)
      res.locals.user = req.session.user;
    next();
  }
});

//保存base64图片
app.use(function (req, res, next) {
  if (req.body.imgBase64) {
    //过滤data:URL
    //var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    req.imgBase64 = [];
    let imgBase64 = req.body.imgBase64.split(",");
    imgBase64.forEach(base64Data => {
      if (base64Data) {
        let filename = new Date().getTime() + ".png";
        req.imgBase64.push({
          filename: filename,
          destination:path.join(process.cwd(),"uploads")
        });
        var dataBuffer = new Buffer(base64Data, 'base64');
        fs.writeFile(path.join(__dirname, "uploads", filename), dataBuffer, function (err) {

        });
      }
    });
  }
  next();
});
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/place', placeRouter);
app.use('/comments', commentsRouter);
app.use('/activity', activityRouter);
app.use('/task', taskRouter);
app.use('/artical', articalRouter);
app.use('/admin', adminRouter);
app.use('/djySpider', djySpider);
app.use('/xfwSpider', xfwSpider);
app.use('/banner', bannerRouter);
app.use('/notification', notificationRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

Date.prototype.format = function (fmt) { // author: meizz
  var o = {
      "M+": this.getMonth() + 1, // 月份
      "d+": this.getDate(), // 日
      "h+": this.getHours(), // 小时
      "m+": this.getMinutes(), // 分
      "s+": this.getSeconds(), // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
      "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
module.exports = app;