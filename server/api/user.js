var express = require('express');
var router = express.Router();

var db = require('../baseData/mysqlutil')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody

router.all("/getUserRegion", function(res, req, next){
    var userPin = fromQueryOrBody(req, "userPin") || "admin"
    var sql = "SELECT * FROM userList WHERE userPin = ?"
    var params = [userPin]

    db.query(aql, params).then(res => {
        console.log(res)
    })
})

router.all("/setUserRegion", function(res, req, next){
    var userPin = "admin"

    var updataParams = {
        region: "zhengzhou"
    }


    var sql = "UPDATE userList SET ?? WHERE userPin = ?"
    var params = [updataParams, userPin]

    db.query(sql, params).then(res => {
        console.log(res)
    })
})

module.exports = router;