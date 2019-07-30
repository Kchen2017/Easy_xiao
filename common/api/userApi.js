import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    getUserRegion(params={}, options={}){
        let uri = "/user/getUserRegion?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
	setUserRegion(params={}, options={}){
        let uri = "/user/setUserRegion?t=" + new Date();
        return request.postRequest(uri, params, options);
    },
	login(params={}, options={}){
	    let uri = "/login?t=" + new Date();
	    return request.getRequest(uri, params, options);
    },
    register(params={}, options={}){
        let uri = "/user/register?t=" + new Date();
        return request.postRequest(uri, params, options);
    },
    isRegistered(params={}, options={}){
	    let uri = "/user/isRegistered?t=" + new Date();
	    return request.getRequest(uri, params, options);
    },
    updataPassword(params={}, options={}){
        let uri = "/user/updataPassword?t=" + new Date();
        return request.postRequest(uri, params, options);
    },
    getIndexData(params={}, options={}){
	    let uri = "/user/getIndexData?t=" + new Date();
	    return request.getRequest(uri, params, options);
    },
}