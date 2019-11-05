import axios from 'axios'


var URL = window.ServerUrl;

class All {
  static postSwagger(swagger,param) {
    //登录接口post
    return axios.post(URL + swagger, param, {
 
    });
  }

}
export default function(Vue) {
  Vue.prototype.myserver = All
}
