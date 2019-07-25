export function encode_url_params(params) {
    if(!params._t){
        params._t = +new Date();
    }
    return "?"+Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
}

export function monitor_encodeUrl_params(params) {
  let paramsObj = params.params
  let result = ""
  result += 'params' + '=' + JSON.stringify(paramsObj);
  return result ? "?" + result : ""
}

//前端分页
//data : 列表页后端返回的原始数据
//currentPage : 选中的页码
//pageSize : 每页显示的数量
export function frontPagination(data, currentPage, pageSize) {
  let result = [];
  let start = (currentPage - 1) * pageSize;
  let end = currentPage * pageSize;
  let arrayLength = data.length;
  for (let i = start; i < end && i < arrayLength; i++) {
    result.push(data[i]);
  }
  return result;
}
//状态筛选
// val : 状态码 arr中取值status
// obj : 传入总数据 arr格式
export function filterCurItem(val, obj) {
  let curEls = [];
  for (var i = 0; i < obj.length; i++) {
    if (val == 0) {
      return obj
    } else if (val == obj[i].status) {
      curEls.push(obj[i])
    }
  }
  return curEls;

}

// for get Cookie
function escapeRe(str) {
  return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&');
}

export function getCookie (key) {
  if (typeof(key) != 'string' || key == '') {
    return null
  }
  const reKey = new RegExp(`(?:^|; )${escapeRe(key)}(?:=([^;]*))?(?:;|$)`)
  const match = reKey.exec(document.cookie)

  if (match == null) {
    return null
  }

  return match[1]
}

export function isNullObject (obj) {
	if (Object.prototype.toString.call(obj) !== '[object Object]' &&
		obj !== null) {
		throw TypeError('isNullObject: arg must bu pure obj')
	}
	return Object.keys(obj).length <= 0
}

