export default {

    getRequest (url, options = {}) {
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
            fetch(url, reqOptions)
              .then((response) => {
                return response.json();
              })
              .then((myJson) => {
                resolve(myJson)
              }).catch(err => {
                  reject(err)
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
        fetch(url, reqOptions)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            resolve(myJson)
          }).catch(err => {
              reject(err)
          });
      }) 

    }
}