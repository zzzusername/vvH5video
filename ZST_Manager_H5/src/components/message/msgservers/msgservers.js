import axios from 'axios'

var URL = window.ServerUrl;
class All {

  static  addMessageTemplet(param){ //新增短信模板列表zxj
    return axios.post(URL+'/api/Provider/ShortMessageTemplet',param);
  }
  
  static  editMessageTemplet(param){ //编辑短信模板列表zxj
    return axios.put(URL+'/api/Provider/ShortMessageTemplet',param);
  }

}
export default function(Vue){
  Vue.prototype.msgserver = All
}
