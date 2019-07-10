var db = require('./mysql')
var whereDataList = require('./wherList')


var insert = function(){
	whereDataList.data.searchResult.forEach(async (item)=>{
		var operation ={
			id: item.id,
			name: item.title,
			imageUrl: item.imageUrl,
			address: item.address,
			type: item.backCateName,
			city: item.city,
			cityId: item.cityId
		}
		await db.insertData("wherelist", operation).then(res=>{
	        console.log(res)
	    }).catch(err=>{
	        console.log(err)
	    })
	})
}

insert()