import request from '../util/request'
import { encode_url_params } from '../util/apiTools'

export default {
    //获取用户地域
    getGroups(params={}, options={}){
        let uri = "/group/getGroups?t=" + new Date();
        return request.getRequest(uri, params, options);
    },
    getGroup(params={}, options={}){
        let uri = "/group/getGroup?t=" + new Date();
        return request.getRequest(uri, params, options);
    }
}