var express = require('express');
var router = express.Router();

var multiparty = require('connect-multiparty')
var multipartyMiddleware = new multiparty()

var db = require('../baseData/mysqlutil')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody

router.all("/getGroups", function(req, res, next){
    var groundId = fromQueryOrBody(req, "groundId")

    var sql = "SELECT * FROM group_table WHERE ownGroundId = ?"
    var params = [groundId]

    db.query(sql, params).then(result => {
        res.json({
            code: 200,
            msg: "success",
            result: result
        });
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})

router.all("/getGroup", function(req, res, next){
    var groundId = fromQueryOrBody(req, "groundId")


    var sql = "SELECT * FROM group_table WHERE groundId = ?"
    var params = [groundId]

    db.query(sql, params).then(result => {
        var groundObj = result[0]
        var tagArr = groundObj.tags.split(",")
        groundObj.tagsArr = tagArr
        groundObj.swips = []
        var urlImage = {
            url: groundObj.images
        }
        groundObj.swips.push(urlImage)

        res.json({
            code: 200,
            msg: "success",
            result: groundObj
        });
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})





module.exports = router;