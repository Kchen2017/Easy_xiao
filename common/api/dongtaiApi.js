import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    dongtaiList(params={}, options={}){
        let uri = "/dongtai/dongtaiList?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
    getKing(params={}, options={}){
        let uri = "/dongtai/getKing?t=" + new Date();
        return request.getRequest(uri, params, options);
    }
}