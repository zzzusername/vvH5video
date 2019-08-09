// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
// import Video from 'video.js'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.config.productionTip = false
Vue.use(Element)
// Vue.use(Video)
Vue.use(VueVideoPlayer);
Vue.prototype.$http = axios
// Vue.prototype.$video = Video
//处理时间戳方法
Vue.prototype.timestampToTime  = function (res){


  var date = new Date(res) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
  var D = date.getDate() + ' '
  if(date.getDate()<10){

     D = '0'+ date.getDate();  //补齐
  }
  var h = date.getHours() + ':'
  var m = date.getMinutes() + ':'
  var s = date.getSeconds()
  if(date.getSeconds()<10){
    s = '0'+ date.getSeconds();  //补齐
  }


  return Y+M+D+" "+h+m+s
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
