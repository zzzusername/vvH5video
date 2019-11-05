import Vue from 'vue';
import axios from 'axios';
// import qs from 'qs';

import { Message } from 'element-ui';

var BASE_API = window.ServerUrl;

console.log('接口地址API：' + BASE_API)
// create an axios instance
const service = axios.create({
    baseURL: BASE_API // api的base_url
    // timeout: 5000 request timeout
});
// request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    // let token = Vue.prototype.getCookie('token');

    //let token = JSON.parse(localStorage.person).token;  // localStorage
    let token = localStorage.Accesstoken;  // localStorage

    console.log('token----' + token)

    if (config.url.indexOf('/login') < 0) {
        if (token === null) {
            console.log('未登录');
            // 跳转 登录页面
        } else {

            /* config.headers.common['Authorization'] = 'Bearer ' + token; */

            //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            // if (config.method==='get'){
            //     // config.headers['Content-Type'] = 'application/json';
            //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            // }
          /*   if (config.url.indexOf('?') < 0) {
                if (config.method == 'get') {
                    config.url = config.url + '?timestamp=' + Date.parse(new Date());
                }
            } else {
                //get请求加入时间戳
                if (config.method == 'get') {
                    config.url = config.url + '&timestamp=' + Date.parse(new Date());
                }
            } */
        }
    }
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// 响应拦截器 拦截登录请求
// service.interceptors.response.use(
//     response => {
//         if (response.data.errorCode == 11001) {
//             location.href = 'http://' + location.host + '/login';
//         }
//         return response;
//     },
//     error => {
//         Message({
//             message: error.message,
//             type: 'error',
//             duration: 5 * 1000
//         });
//         return Promise.reject(error);
//     });

export default service;
