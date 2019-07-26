export default {

    getRequest (url, params, options = {}) {
        url = 'http://127.0.0.1:3090' + url 
        var reqOptions = {}
        reqOptions.headers = options.headers || {};
        reqOptions.headers = Object.assign({
            'Content-Type': 'application/json',
            'Authorization': 'Tenant=5678efgh Credential=5678efgh/credential-scope',
            'Accept': 'application/json'
        }, reqOptions.headers);
        reqOptions.credentials = 'same-origin';

        return new Promise((resolve, reject) => {
            uni.request({
				url: url,
				data: params,
				header: reqOptions.headers,
				success: (res) => {
					resolve(res);
				}
			});
        }) 
    },
    postRequest (url, params, options = {}){
        url = 'http://127.0.0.1:3090' + url 
      var reqOptions = {};
      reqOptions.headers = options.headers || {};
      reqOptions.headers = Object.assign({
          'Content-Type': 'application/json',
          'Authorization': 'Tenant=5678efgh Credential=5678efgh/credential-scope',
          'Accept': 'application/json'
      }, reqOptions.headers);
      reqOptions.method = "POST";
      reqOptions.credentials = 'same-origin';
      reqOptions.body = params;
    
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				data: params,
				method: "POST",
				header: reqOptions.headers,
				success: (res) => {
					resolve(res);
				}
			});
		}) 

    }
}