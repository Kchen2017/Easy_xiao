let mysql = require('mysql');//引入mysql模块
var databaseConfig = {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'gowherelist'
  } 

module.exports = {
    query : function(sql,params){
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        var connection = mysql.createConnection(databaseConfig);        
        connection.connect(function(err){
            if(err){
                console.log('数据库链接失败');
                throw err;
            }
            //开始数据操作
            //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数
            connection.query( sql, params, function(err,results,fields ){
                if(err){
                    console.log('数据操作失败');
                    throw err;
                }
                //将查询出来的数据返回给回调函数
                callback && callback(results, fields);
                return new Promise((resolve, reject)=>{
                    if(result){
                        resolve(result)
                    }
                })
           });
       });
    }
};