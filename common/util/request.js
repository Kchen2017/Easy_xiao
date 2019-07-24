export default {

    fetch (url, options = {}) {
        options.reqOptions = options.reqOptions || {};
        var reqOptions = options.reqOptions;
        reqOptions.headers = reqOptions.headers || {};
        reqOptions.headers = Object.assign({
            'Content-Type': 'application/json',
            'Authorization': 'Tenant=5678efgh Credential=5678efgh/credential-scope',
            'Accept': 'application/json'
        }, reqOptions.headers);
        reqOptions.credentials = 'same-origin';

        return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				header: 
				data: {
					name: 'name',
					age: 18
				},
				success: function(res) {
					console.log(res.data);
				}
			})
		})
    },
    post (url, params, options = {}){
        options.reqOptions = options.reqOptions || {};
        var reqOptions = options.reqOptions;
        reqOptions.headers = reqOptions.headers || {};
        reqOptions.headers = Object.assign({
            'Content-Type': 'application/json',
            'Authorization': 'Tenant=5678efgh Credential=5678efgh/credential-scope',
            'Accept': 'application/json'
        }, reqOptions.headers);
        reqOptions.method = "POST";
        reqOptions.credentials = 'same-origin';
        reqOptions.body = params;
        return Promise.resolve(fetch(url, reqOptions).then(function (response) {
            
        })).then(null, (error) => {
           
        });

    }
}