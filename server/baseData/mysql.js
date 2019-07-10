var mysql  = require('mysql');
const md5 = require('md5');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'gowherelist'
});
 
connection.md5 = md5;
//增添数据
var insertData = function(table, data){
	return new Promise((resolve, reject)=>{
			connection.query('insert into ?? set ?', [table, data], function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}
//查询全部数据
var searchData = function(table, filter){
	return new Promise((resolve, reject)=>{
			connection.query('SELECT * FROM ?? WHERE ?', [table, filter], function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}
//条件分页查询
var getListbyPage = function(table, filter ={}, pageize=10, pageNum=1){
	let queryCode = ""
	let codeArr = []
	if(Object.assign(filter).length>0){
		queryCode = 'SELECT * FROM ?? where ? LIMIT ?,?'
		codeArr = [table, filter,pageize, pageNum]
	}else{
		queryCode = 'SELECT * FROM ?? LIMIT ?,?'
		codeArr = [table, pageize, pageNum]
	}
	return new Promise((resolve, reject)=>{
			connection.query(queryCode, codeArr, function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}
//获取全部数据totleCount
var getlistTotleCount = function(table){
	return new Promise((resolve, reject)=>{
			connection.query('SELECT COUNT(*) FROM ??', table, function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}

//删除数据
var deleteData = function(table, id){
	return new Promise((resolve, reject)=>{
			connection.query('DELETE FROM ?? WHERE id = ?', [table, id], function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}

//更新数据
var updataData = function(table, Obj={}, id){
	return new Promise((resolve, reject)=>{
			connection.query('UPDATE ?? SET ? WHERE id = ?', [table, Obj, id], function(err, result) {
			    if (err) {
			    	reject(err)
			    }
			    if(result){
			    	resolve(result)
			    }
			    
			});
		})
}




module.exports = {
	insertData,
	searchData,
	getListbyPage,
	getlistTotleCount,
	deleteData
}