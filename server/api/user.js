var express = require('express');
var router = express.Router();

var db = require('../baseData/mysqlutil')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody

router.all("/register", function(req, res, next){
    var phoneNum = fromQueryOrBody(req, "phoneNum")
    var password = fromQueryOrBody(req, "password")
    var userPin = fromQueryOrBody(req, "password")

    var tableData = {
        phoneNum: phoneNum,
        password: password,
        userPin: userPin
    }

    var sql = "INSERT INTO users_table SET ?"
    var params = [tableData]

    db.query(sql, params).then(result => {
        res.json({
            code: 200,
            msg: "success"
        });
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})

router.all("/isRegistered", function(req, res, next){
    var phoneNum = fromQueryOrBody(req, "phoneNum")
    var userPin = fromQueryOrBody(req, "userPin")
    if(phoneNum){
        var sql = "SELECT * FROM users_table WHERE phoneNum = ?"
        var params = [phoneNum]
    }

    if(userPin){
        var sql = "SELECT * FROM users_table WHERE userPin = ?"
        var params = [userPin]
    }
    

    db.query(sql, params).then(result => {
        if(result.length > 0){
            res.json({
                code: 200,
                exist: true
            });
        }else{
            res.json({
                code: 200,
                exist: false
            });
        }
        
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})

router.all("/getUserRegion", function(req, res, next){
    var userPin = fromQueryOrBody(req, "userPin")

    var sql = "SELECT * FROM users_table WHERE userPin = ?"
    var params = [userPin]

    db.query(sql, params).then(result => {
        var resListData = {
            listData: result,
            code: 200
        }
        res.json(resListData);
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})

router.all("/setUserRegion", function(req, res, next){
    var userPin = fromQueryOrBody(req, "userPin")
    var regionId = fromQueryOrBody(req, "regionId")

    var updataParams = {
        region: regionId
    }


    var sql = "UPDATE users_table SET ? WHERE userPin = ?"
    var params = [updataParams, userPin]

    db.query(sql, params).then(result => {
        res.json({
            code: 200,
            msg: "success"
        });
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})

router.all("/updataPassword", function(req, res, next){
    var phoneNum = fromQueryOrBody(req, "phoneNum")
    var password = fromQueryOrBody(req, "password")

    var updataParams = {
        password: password
    }


    var sql = "UPDATE users_table SET ? WHERE phoneNum = ?"
    var params = [updataParams, phoneNum]

    db.query(sql, params).then(result => {
        res.json({
            code: 200,
            msg: "success"
        });
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})



module.exports = router;