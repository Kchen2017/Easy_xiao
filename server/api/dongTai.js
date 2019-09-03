var express = require('express');
var router = express.Router();

var multiparty = require('connect-multiparty')
var multipartyMiddleware = new multiparty()

var db = require('../baseData/mysqlutil')
var base = require('../utils/base')
var fromQueryOrBody = base.fromQueryOrBody
var transFromfiltersql = base.transFromfiltersql

var objArrIndexs = ['content', 'like', 'comments']

router.all("/dongtaiList", async (req, res, next) => {
    var pageNumber = fromQueryOrBody(req, "pageNumber")
    var pageSize = fromQueryOrBody(req, "pageSize")
    var userPin =  fromQueryOrBody(req, "userPin")

    var sql = `SELECT * FROM users_table WHERE userPin = '${userPin}'`
    console.log(sql)
    var userObj = await db.query(sql)
    var uidFilter = userObj[0].friends.split(",")[0]

    var sql1 = `SELECT * FROM dongtai_table WHERE uid = '${uidFilter}'`
    try{
        var resultRes = await db.query(sql1)
        var result = []
        if(resultRes && resultRes.length){
            resultRes.forEach(item => {
                var tempObj = {
                    "post_id": '',
                    "uid": null,
                    "username": "",
                    "header_image": "",
                    "content": null,
                    "islike": 0,
                    "like": null,
                    "comments": null,
                    "timestamp": ""
                }
                for(var key in item){
                    if(item[key]){
                        if(objArrIndexs.indexOf(key) > -1){
                            tempObj[key] = JSON.parse(item[key])
                        }else{
                            tempObj[key] = item[key]
                        }
                    }
                }
                result.push(tempObj)
            })
        }
            
        res.json({
            code: 200,
            msg: "success", 
            result: result
        });
    }catch(err){
        res.json({status:-1,msg:err})
    } 
})

router.all("/publicDontai", function(req, res, next){
    var uid = fromQueryOrBody(req, "uid")
    var username = fromQueryOrBody(req, "username")
    var content = fromQueryOrBody(req, "content")
    var like = fromQueryOrBody(req, "like")
    var comments = fromQueryOrBody(req, "comments")
    var timestamp = fromQueryOrBody(req, "timestamp")
    var header_image = fromQueryOrBody(req, "header_image")

    var tempObj = {
        "uid": uid,
        "username": username,
        "header_image": header_image,
        "content": Json.stringify(content) ,
        "islike": 0,
        "like": Json.stringify(like),
        "comments": Json.stringify(comments),
        "timestamp": timestamp
    }

    try{
        var sql1 = `SELECT * FROM dongtai_table WHERE uid = '${uid}'`
        var userObj = await db.query(sql1)

        if(userObj.length){
            var sql2 = `UPDATE dongtai_table SET ? WHERE uid = '${uid}'`
            var params2 = [tempObj]
            var userObj = await db.query(sql2, params2)

            res.json({
                code: 200,
                msg: "success", 
                result: result
            });
        }else{
            var sql3 = `INSERT INTO dongtai_table SET ?`
            var params3 = [tempObj]
            var userObj = await db.query(sql3, params3)

            res.json({
                code: 200,
                msg: "success", 
                result: result
            });
        }
    }catch(err){
        res.json({status:-1,msg:err})
    }
})





module.exports = router;
