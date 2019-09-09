var express = require("express");
var router = express.Router();

var multiparty = require("connect-multiparty");
var multipartyMiddleware = new multiparty();

var db = require("../baseData/mysqlutil");
var base = require("../utils/base");
var fromQueryOrBody = base.fromQueryOrBody;
var transFromfiltersql = base.transFromfiltersql;

var objArrIndexs = ["content", "like", "comments"];

router.all("/dongtaiList", async (req, res, next) => {
  var pageNumber = fromQueryOrBody(req, "pageNumber");
  var pageSize = fromQueryOrBody(req, "pageSize");
  var userPin = fromQueryOrBody(req, "userPin");

  var sql = `SELECT * FROM users_table WHERE userPin = '${userPin}'`;
  console.log(sql);
  var userObj = await db.query(sql);
  var uidFilter = userObj[0].friends.split(",")[0];

  var sql1 = `SELECT * FROM dongtai_table WHERE uid = '${uidFilter}'`;
  try {
    var resultRes = await db.query(sql1);
    var result = [];
    if (resultRes && resultRes.length) {
      resultRes.forEach(item => {
        var tempObj = {
          post_id: "",
          uid: null,
          username: "",
          header_image: "",
          content: null,
          islike: 0,
          like: null,
          comments: null,
          timestamp: ""
        };
        for (var key in item) {
          if (item[key]) {
            if (objArrIndexs.indexOf(key) > -1) {
              tempObj[key] = JSON.parse(item[key]);
            } else {
              tempObj[key] = item[key];
            }
          }
        }
        result.push(tempObj);
      });
    }

    res.json({
      code: 200,
      msg: "success",
      result: result
    });
  } catch (err) {
    res.json({ status: -1, msg: err });
  }
});

router.all("/publicDontai", multipartyMiddleware, async function(
  req,
  res,
  next
) {
  var uid = fromQueryOrBody(req, "uid");
  var userPin = fromQueryOrBody(req, "userPin");
  var text = fromQueryOrBody(req, "text");
  var longitude = fromQueryOrBody(req, "longitude");
  var latitude = fromQueryOrBody(req, "latitude");
  var timestamp = fromQueryOrBody(req, "timestamp");
  var type = fromQueryOrBody(req, "type");
  var post_id = fromQueryOrBody(req, "post_id");
  var file = req.files["file"];

  try {
    var sqluser = `SELECT * FROM users_table WHERE userPin = '${userPin}'`;
    var userReq = await db.query(sqluser);
    var userObj = userReq[0];

    var contentObj = null;

    if (type === "image") {
      var sqlimage = `SELECT * FROM dongtai_table WHERE post_id = '${post_id}'`;
      var imageObjArr = await db.query(sqlimage);

      if (imageObjArr.length === 0) {
        var contentObj = {
          images: [file.path],
          text: text,
          type: type
        };
      } else {
        contentObj = JSON.parse(imageObjArr[0].content);
        if (contentObj.images) {
          contentObj.images.push(file.path);
        }
      }
    } else if (type === "video") {
      contentObj = {
        video: file.path,
        text: text,
        type: type
      };
    } else if (type === "text") {
      contentObj = {
        text: text,
        type: type
      };
    }
    console.log(JSON.stringify(contentObj));
    var tempObj = {
      post_id: post_id,
      uid: uid,
      userPin: userPin,
      avatarUrl: userObj.avatarUrl,
      content: JSON.stringify(contentObj),
      islike: 0,
      like: JSON.stringify({ total: 0, content: [] }),
      comments: JSON.stringify({ total: 0, comment: [] }),
      longitude: longitude,
      latitude: latitude,
      timestamp: timestamp
    };

    if (type === "image" && imageObjArr && imageObjArr.length) {
      var sql2 = `UPDATE dongtai_table SET ? WHERE post_id = '${post_id}'`;
      var params2 = [tempObj];
      var userObj = await db.query(sql2, params2);

      res.json({
        code: 200,
        msg: "success"
      });
    } else {
      var sql3 = `INSERT INTO dongtai_table SET ?`;
      var params3 = [tempObj];
      var userObj = await db.query(sql3, params3);

      res.json({
        code: 200,
        msg: "success"
      });
    }
  } catch (err) {
    res.json({ status: -1, msg: err });
  }
});

router.all("/dongtaiLike", async (req, res, next) => {
  var post_id = fromQueryOrBody(req, "post_id");
  var likecontent = JSON.parse(fromQueryOrBody(req, "likecontent"));
  var islike = fromQueryOrBody(req, "islike");

  try {
    var sql1 = `SELECT * FROM dongtai_table WHERE post_id = '${post_id}'`;
    var resultRes = await db.query(sql1);
    if (resultRes && resultRes.length) {
      var like = JSON.parse(resultRes[0].like);
      if (islike==1&&(like.content.length===0||
        like.content.filter(item => {
          return item.uid === likecontent.uid;
        }).length === 0)
      ) {
        like.content.push(likecontent);
        like.total = like.content.length;
      }
      if (islike==0&&
        like.content.filter(item => {
          return item.uid === likecontent.uid;
        }).length
      ) {
        like.content.splice(like.content.indexOf(likecontent), 1);
        like.total = like.content.length;
      }
      var tempObj = {
          like: JSON.stringify(like)
      }
      var sql2 = `UPDATE dongtai_table SET ? WHERE post_id = '${post_id}'`;
      var params2 = [tempObj];
      await db.query(sql2, params2);
    }
    res.json({
      code: 200,
      msg: "success"
    });
  } catch (err) {
    res.json({ status: -1, msg: err });
  }
});

router.all("/sendComment", async (req, res, next) => {
    var post_id = fromQueryOrBody(req, "post_id");
    var commit = JSON.parse(fromQueryOrBody(req, "commit"));
  
    try {
      var sql1 = `SELECT * FROM dongtai_table WHERE post_id = '${post_id}'`;
      var resultRes = await db.query(sql1);
      if (resultRes && resultRes.length) {
        var comments = JSON.parse(resultRes[0].comments);
        comments.comment.push(commit);
        comments.total = comments.comment.length;

        var tempObj = {
            comments: JSON.stringify(comments)
        }
        var sql2 = `UPDATE dongtai_table SET ? WHERE post_id = '${post_id}'`;
        var params2 = [tempObj];
        await db.query(sql2, params2);
      }
      res.json({
        code: 200,
        msg: "success"
      });
    } catch (err) {
      res.json({ status: -1, msg: err });
    }
  });

module.exports = router;
