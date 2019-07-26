import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    getUserRegion(params={}, options={}){
        let uri = "/user/getUserRegion?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
	getUserRegion(params={}, options={}){
        let uri = "/user/setUserRegion?t=" + new Date();
        return request.postRequest(uri, params, options);
    },
	login(params={}, options={}){
	    let uri = "/login?t=" + new Date();
	    return request.getRequest(uri, params, options);
	},
}