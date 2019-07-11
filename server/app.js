var express = require("express")

var app = express()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var db = require('./baseData/mysql')
var base = require('./utils/base')
var fromQueryOrBody = base.fromQueryOrBody

app.use("*", (req, res, next)=>{
    // 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));

var userApi = require('./api/user')
var commonApi = require('./api/common')
var groundApi = require('./api/ground')
var groupApi = require('./api/group')
var dongTaiApi = require('./api/dongTai')



app.use("/login", function(req, res, next){
    var userPin = fromQueryOrBody(req, "userPin")
    var password = fromQueryOrBody(req, "password")

    var filters = {
        userPin: userPin,
        password: password
    }
    console.log(filters)
    db.searchData("userList", filters).then(res => {
        if(res){
            res.json({
                code: 200,
                _Easy: 1
            });
        }else{
            res.json({
                code: 200,
                _Easy: 0
            });
        }
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})



app.use("/user", userApi)
app.use("/common", commonApi)
app.use("/ground", groundApi)
app.use("/group", groupApi)
app.use("/dongTai", dongTaiApi)



app.listen(3090, function () {
    console.log('server运行在 http://127.0.0.1:3090');
});



