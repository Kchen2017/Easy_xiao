var db = require('./mysql')
var whereDataList = require('./wherList')


var insert = function(){
	whereDataList.data.searchResult.forEach(async (item)=>{
		var operation ={
			groupId: item.id,
			name: item.title,
			images: item.imageUrl,
			avatarUrl: item.imageUrl,
			adress: item.address,
			sportType: item.backCateName,
			regionId: item.city,
			star: 5,
			billType: "free",
			tags: "高手,器材好，牛逼",
			ownGroundId: "1001",
			sign: "不服就干"
		}
		await db.insertData("group_table", operation).then(res=>{
	        console.log(res)
	    }).catch(err=>{
	        console.log(err)
	    })
	})
}

insert()