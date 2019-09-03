import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    getKings(params={}, options={}){
        let uri = "/king/getKings?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
    getKing(params={}, options={}){
        let uri = "/king/getKing?t=" + new Date();
        return request.getRequest(uri, params, options);
    }
}