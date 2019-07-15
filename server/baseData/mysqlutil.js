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

        return new Promise((resolve, reject)=>{
            connection.connect(function(err){
                if(err){
                    console.log('数据库链接失败');
                    throw err;
                }
                
                connection.query( sql, params, function(err,results,fields ){
                    if(err){
                        console.log('数据操作失败');
                        throw err;
                    }
    
                    if(results){
                        resolve(results)
                    }
    
                    connection.end(function(err){
                        if(err){
                            console.log('关闭数据库连接失败！');
                            throw err;
                        }
                    });
                });
            })
        })
    }
};