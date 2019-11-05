import Vue from 'vue';
import axios from 'axios';
// import qs from 'qs';


//var BASE_API = window.ServerUrl;

var BASE_API = window.ServerUrl;

console.log('接口地址API：' + BASE_API)
// create an axios instance
const service = axios.create({
    baseURL: BASE_API // api的base_url
    // timeout: 5000 request timeout
});
const url = window.location.href.replace(window.location.hash, '');
// request 拦截器 对请求参数处理 
service.interceptors.request.use(config => {
    let token = localStorage.Accesstoken;
    if (config.url.indexOf('/login') < 0) {
      
        if (token == undefined) {
            // 跳转登录页面
            window.location.href = url; 
        } else {
            //Authorization: 'Bearer '+token
            config.headers.common['Authorization'] = 'Bearer ' + token;
            //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            if (config.url.indexOf('?') < 0) {
                if (config.method == 'get') {
                    config.url = config.url + '?timestamp=' + Date.parse(new Date());
                }
            } else {
                //get请求加入时间戳
                if (config.method == 'get') {
                    config.url = config.url + '&timestamp=' + Date.parse(new Date());
                }
            }
        }
    }
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// 响应拦截器 拦截登录请求
/* service.interceptors.response.use(
    response => {
        // 权限验证
        if (response.data.resultCode == "401") {
            //location.href = 'http://' + location.host + '/login';
            console.log('token');
        }
        return response;
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }); */

export default service;
