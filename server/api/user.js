var express = require('express');
var router = express.Router();

var db = require('../baseData/mysqlutil')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody

router.all("/getUserRegion", function(res, req, next){
    var userPin = fromQueryOrBody(req, "userPin")

    var sql = "SELECT * FROM userList WHERE userPin = ?"
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

router.all("/setUserRegion", function(res, req, next){
    var userPin = fromQueryOrBody(req, "userPin")
    var regionId = fromQueryOrBody(req, "regionId")

    var updataParams = {
        region: regionId
    }


    var sql = "UPDATE userList SET ? WHERE userPin = ?"
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

module.exports = router;