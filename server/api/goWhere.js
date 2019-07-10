var express = require('express');
var router = express.Router();
var db = require('../baseData/mysql')
var base = require('../utils/base')
var path = require('path')
var logger_tag = path.basename(__filename).split(".")[0];
var logger = require('../utils/logger').getLogger(logger_tag);
var util = require('util');
var fromQueryOrBody = base.fromQueryOrBody
var getFiltersInReq = base.getFiltersInReq
var whereDataList = require('../baseData/wherList')


router.all("/list", async function(req, res, next){
    var pageNumber = fromQueryOrBody(req, "pageNumber")
    var pageSize = fromQueryOrBody(req, "pageSize")
    var filters =  getFiltersInReq(req)


    var start = (pageNumber - 1)*pageSize
    try{
        var dbData = await db.getListbyPage("wherelist", filters ,start, pageSize-0)

        var titleCount = await db.getlistTotleCount("wherelist")

        var resListData = {
            listData: dbData,
            totalCount: titleCount[0]["COUNT(*)"]
        }
        logger.info(util.format('gowhere  list [pin: %s] [result: %s]', req.pin, JSON.stringify(resListData).toString()))
        res.json(resListData);
    }catch(err){
        res.json({status:-1,msg:err});
    }
})

router.all("/detail", async function(req, res, next){
    var id = fromQueryOrBody(req, "id")

    try{
        var dbData = await db.searchData("wherelist", {id: id})

        var resListData = {
            detailData: dbData[0]
        }
        logger.info(util.format('gowhere  list [pin: %s] [result: %s]', req.pin, JSON.stringify(resListData).toString()))
        res.json(resListData);
    }catch(err){
        res.json({status:-1,msg:err});
    }
})

module.exports = router;