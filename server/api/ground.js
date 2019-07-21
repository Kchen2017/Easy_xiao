var express = require('express');
var router = express.Router();

var db = require('../baseData/mysqlutil')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody


router.all("/getGroundList", async function(req, res, next){
    var pageNumber = fromQueryOrBody(req, "pageNumber")
    var pageSize = fromQueryOrBody(req, "pageSize")
    var filters =  getFiltersInReq(req)


    var start = (pageNumber - 1)*pageSize
    try{
        var sql = "SELECT * FROM groundList LIMIT ?,? WHERE ? "
        var params = [start, pageSize, filters]
        var dbData = await db.query(sql, params)

        var sql = "SELECT COUNT(*) FROM groundList"
        var titleCount = await db.query(sql, params)

        var resListData = {
            listData: dbData,
            totalCount: titleCount[0]["COUNT(*)"]
        }
        res.json(resListData);
    }catch(err){
        res.json({status:-1,msg:err});
    }
})

router.all("/getGroundDetail", async function(req, res, next){
    var id = fromQueryOrBody(req, "id")

    try{
        var sql = "SELECT * FROM groundList WHERE id=" + id
        var dbData = await db.query(sql, params)

        var resListData = {
            detailData: dbData[0]
        }
        res.json(resListData);
    }catch(err){
        res.json({status:-1,msg:err});
    }
})

module.exports = router;