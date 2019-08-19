import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    getGrounds(params={}, options={}){
        let uri = "/ground/getGrounds?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
    getGround(params={}, options={}){
        let uri = "/ground/getGround?t=" + new Date();
        return request.getRequest(uri, params, options);
    }
}