var express = require('express');
var router = express.Router();

var multiparty = require('connect-multiparty')
var multipartyMiddleware = new multiparty()

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

router.all("/upload", multipartyMiddleware, function(req, res, next){
    var userPin = fromQueryOrBody(req, "userPin")
    var file = req.files['file']

    var updataParams = {
        avatarUrl: file.path
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

router.all("/registerMsg", function(req, res, next){
    var userPin = fromQueryOrBody(req, "userPin")
    var msg = fromQueryOrBody(req, "msg")

    var sql = "UPDATE users_table SET ? WHERE userPin = ?"
    var params = [msg, userPin]

    db.query(sql, params).then(result => {
        res.json({
            code: 200,
            msg: "success"
        });
    }).catch(err => {
        res.json({status:-1,msg:err});
    })
})

router.all("/getIndexData", async function(req, res, next){
    var userPin = fromQueryOrBody(req, "userPin")
    try{
        var sql = "SELECT * FROM users_table WHERE userPin = ?"
        var params = [userPin]

        var userData =  await db.query(sql, params)
        if(userData && userData.length){
            var userRegionId = userData[0].regionId
        }
        
        var sql = "SELECT * FROM ground_table WHERE regionId = ? AND star = 1"
        var params = [userData[0].regionId]

        var groundList =  await db.query(sql, params)
        if(groundList && groundList.length){
            groundList = groundList.splice(0, 4)
        }
        
        var sql = "SELECT * FROM group_table WHERE regionId = ? AND star = 1"
        var params = [userData[0].regionId]

        var groupList =  await db.query(sql, params)
        if(groupList && groupList.length){
            groupList = groupList.splice(0, 4)
        }

        var sql = "SELECT * FROM common_table WHERE regionId = ?"
        var params = [userData[0].regionId]

        var commonData =  await db.query(sql, params)
        var swipPics = []
        if(commonData && commonData.length){
            var picData = commonData[0]
            for(var key in picData){
                if(picData[key] && key.indexOf("swipPic") > -1){
                    var objPic = {
                        url: picData[key]
                    }
                    swipPics.push(objPic)
                }
            }
        }

        var result = {
            regionId: userRegionId,
            groundIndexList: groundList,
            groupIndexList: groupList,
            swipPics: swipPics
        }
        res.json({
            code: 200,
            msg: "success",
            result: result
        });
    }catch(err){
        res.json({status:-1,msg:err});
    }
})

router.all("/getUserMsg", async function(req, res, next){
    var userPin = fromQueryOrBody(req, "userPin")
    try{
        var sql = "SELECT * FROM users_table WHERE userPin = ?"
        var params = [userPin]

        var result =  await db.query(sql, params)

        res.json({
            code: 200,
            msg: "success",
            result: result
        });
    }catch(err){
        res.json({status:-1,msg:err});
    }
})




module.exports = router;