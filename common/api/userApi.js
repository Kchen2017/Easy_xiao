import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    getUserRegion(params={}, options={}){
        let uri = "/user/getUserRegion" + encode_url_params(params);
        return request.getRequest(uri, options);
    },
	getUserRegion(params={}, options={}){
        let uri = "/user/setUserRegion?t=" + new Date();
        return request.postRequest(uri, JSON.stringify(params), options);
    }
}