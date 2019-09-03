var express = require('express');
var router = express.Router();

var multiparty = require('connect-multiparty')
var multipartyMiddleware = new multiparty()

var db = require('../baseData/mysqlutil')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody
var transFromfiltersql = base.transFromfiltersql

router.all("/getKings", function(req, res, next){
    var groundId = fromQueryOrBody(req, "groundId")

    var sql = `SELECT * FROM king_table WHERE ownGroundId = '${groundId}'`
    console.log(sql)
    db.query(sql).then(result => {
        res.json({
            code: 200,
            msg: "success", 
            result: result
        });
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})

router.all("/getKing", function(req, res, next){
    var kingId = fromQueryOrBody(req, "kingId")


    var sql = "SELECT * FROM king_table WHERE kingId = ?"
    var params = [kingId]

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