import axios from 'axios'

var URL = window.ServerUrl;

class All {
  static PutLogondata(param) {
    //登录接口post
    return axios.post(URL + '/api/Provider/Logon', param, {
      headers: {
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type',
        'Access-Control-Allow-Origin': 'front.webmanager.com',
      }
    });
  }

  static getMenuModel(param) {
    //导航接口post
    return axios.put(URL + '/api/Provider/Logon', param, {
      headers: {
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type  ',
        'Access-Control-Allow-Origin': 'front.webmanager.com',
      }
    });
  }

  static getSelect(param) { //获取短信类型Select列表zxj
    return axios.post(URL + '/api/Provider/DropDown', param, {
      headers: {
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type  ',
        'Access-Control-Allow-Origin': 'front.webmanager.com',
      }
    });
  }

  static GetCameraGroupdata(params) {
    //获取摄像机               组
    return axios.get(URL + '/api/Provider/CameraGroup?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&id=' + params, {
      headers: {
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type  ',
        'Access-Control-Allow-Origin': 'front.webmanager.com',
      }
    });
  }
  static PutCameraGroupdata(param) {
    //更新摄像机组
    return axios.put(URL + '/api/Provider/CameraGroup', param, {
      headers: {
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type  ',
        'Access-Control-Allow-Origin': 'front.webmanager.com',
      }
    });
  }
  // static  GetMediaServerManagement(UniqueCode,Name,OrderFileds,PageIndex,PageSize){
  static GetMediaServerManagement(MediaServe) {
    //取流媒体服务器
    var UniqueCode = MediaServe.UniqueCode;
    var Name = MediaServe.Name;
    var OrderFileds = MediaServe.OrderFileds;
    var PageIndex = MediaServe.PageIndex;
    var PageSize = MediaServe.PageSize;

    return axios.get(URL + '/api/Provider/MediaServer?UniqueCode=' + UniqueCode + '&Name=' + Name + '&OrderFileds=' + OrderFileds + '&PageIndex=' + PageIndex + '&PageSize=' + PageSize + '&ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token, {
      //   return axios.get(URL+'api/Provider/MediaServerManagement?&PageIndex='+PageIndex+'&PageSize='+PageSize+'&ClientKey='+localStorage.clientKey+'&Token='+localStorage.token,{
      headers: {
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type  ',
        'Access-Control-Allow-Origin': 'front.webmanager.com',
      }
    });
  }
  static PostMediaServerManagement(param) {
    //添加流媒体服务器post
    return axios.post(URL + '/api/Provider/MediaServer', param, {
      headers: {
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-origin,content-type',
        'Access-Control-Allow-Origin': 'front.webmanager.com',
      }
    });
  }

}
export default function(Vue) {
  Vue.prototype.myserver = All
}

// localStorage.clientKey ='a2530ec77e9513d'; ///clientKey
// localStorage.userName=login   //账号
// localStorage.userPassword=pwd //密码

// var personparse= JSON.parse(localStorage.person)
