import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    dongtaiList(params={}, options={}){
        let uri = "/dongtai/dongtaiList?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
    dongtaiLike(params={}, options={}){
        let uri = "/dongtai/dongtaiLike?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
    sendComment(params={}, options={}){
        let uri = "/dongtai/sendComment?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
}