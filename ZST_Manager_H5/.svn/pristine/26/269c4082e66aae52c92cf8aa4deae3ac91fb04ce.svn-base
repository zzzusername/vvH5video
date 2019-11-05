// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import msgserver from './components/message/msgservers/msgservers'
import $ from 'jquery'
import videojs from 'video.js'
import 'videojs-contrib-hls'

import 'video.js/dist/video-js.css'

import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import vuescroll from 'vuescroll'

import 'videojs-contrib-hls'
import myserver from './script/servers'
// import treemenu from './script/jquerytreemenu'
// import iptvserver from './components/liveRadio/IPTVserver'
// import deviceServer from './components/equipment/equipmentServer/deviceServer'
// import Logserver from './components/journal/journalServer/logservers'
// import orgserver from './components/organization/groupserver'
// import userserver from './components/user/userServer/userserver'
// import ondemandserver from './components/onDemand/onDemandServer/ondemandserver'
// import sysserver from './components/system/SystemServer/sysserver'
// import monitorserver from './components/monitor/monitorServer'
// import meetingserver from './components/meeting/meetingserver'





import store from './store'


// 全局过滤器文件
import * as filters from './filter/index'

Vue.use(myserver)
// Vue.use(treemenu)
Vue.use(vuescroll)
Vue.use(ElementUI)
Vue.use(msgserver)
// Vue.use(iptvserver)
// Vue.use(deviceServer)
// Vue.use(Logserver)
// Vue.use(orgserver)
// Vue.use(userserver)
// Vue.use(ondemandserver)
// Vue.use(sysserver)
// Vue.use(monitorserver)
// Vue.use(meetingserver)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios;
Vue.prototype.msgserver=msgserver

router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  let token = localStorage.Accesstoken;
  if (to.path=="/") { // 判断该路由是否需要登录权限


      next();


  }
  else {
    if (token === null||token ===undefined) {
      // console.log('未登录');
      next({
        path: '/',
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }else {
      next();
    }


  }

})
Vue.prototype.reLogin = function (res){
	console.log("进入判断是否需要弹窗"+"window.IsTips="+window.IsTips);
	// if(window.IsTips){
		if(res == 999002){

			this.$message({
				message: '您的账号在其他地方登录了',
				type: 'warning'
			});
			console.log(this.$route.path);

			this.$router.push({
				path: "/"
			})
		}
	// }else{
	// 	console.log("您的账号已退出");
	// }


}


Vue.prototype.removing=function(idlist){
  var obj={};

  for(var i=0;i<idlist.length;i++){
    var cur=idlist[i]; // 100 100 900.....
    if(obj[cur]===cur){
      idlist[i]=idlist[idlist.length-1];//对
      //ary[i]是对象的属性名
      //=ary[ary.length-1]
      /*ary[1]=2;  改变数组中索引为1的值
      cur=2; 将变量的值重新定义
      */
      //cur=ary[ary.length-1];//错
      //cur和ary[i]是什么关系？
      //cur代表的是数组中的属性值，是一个确定的值，而我们此时是需要将数组的末尾项给到数组的当前项
      //替换当前项
      idlist.length--;
      i--;
    }
    obj[cur]=cur;
  }
  console.info(idlist);

}
Vue.prototype.postSwagger = function (url,par){

	   let URL = ServerUrl;
		this.$http.post(URL + url, par).then(function (res) {
		console.log(res)
		return  res


		if (res.status === 200 && res.data.result == "ok") {
			


		}
		if (res.data.result == "error") {
		  _this.$message({
			message: res.data.error_description,
			type: 'warning'
		  });
		  console.log(res);
		}

	  }).catch(function (error) {
		console.log(error);
	  });


}
//处理时间戳方法
Vue.prototype.timestampToTime  = function (res){

	var date = new Date(res) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-'
	var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
	var D = date.getDate() + ' '
	var h = date.getHours() + ':'
	var m = date.getMinutes() + ':'
	var s = date.getSeconds()
	return Y+M+D+h+m+s
}


// 统一注册
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

