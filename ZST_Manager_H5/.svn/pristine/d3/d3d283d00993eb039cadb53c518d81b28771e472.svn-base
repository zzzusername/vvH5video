import request from './request';
import qs from "qs";

/* common 接口 */
/* 获取  平台初始化  commone */
export function getinit(data) {
    return request({
        url: '/common/api/v1/init/',
        method: 'post',
        data: data
    })
}


/* common 接口 */
/* 获取  获取行政区域详情  commone */
export function getRegiondetail(data) {
    return request({
        url: '/common/api/v1/region/get_region_detail',
        method: 'post',
        data: data
    })
}

/* 获取 下级行政区域 */
export function getRegionsbyPid(data) {
    return request({
        url: '/common/api/v1/region/get_regions_by_pid',
        method: 'post',
        data: data
    })
}

/* 获取 获取行政区域路径 */
export function getregion_paths(data) {
    return request({
        url: '/common/api/v1/region/get_region_paths',
        method: 'post',
        data: data
    })
}
//获取验证码
export function PostlLogincode(data) {
  return request({
    url: '/common/api/v1/auth/get_login_captcha',
    method: 'post',
    data: data
  })
}


//列出用户登录选项
export function PostlLoginoptions(data) {
  return request({
    url: '/common/api/v1/auth/list_login_options',
    method: 'post',
    data: data
  })
}



//用户开始一级登录登
export function Postuserlogin(data) {
  return request({
    url: '/super/admin/api/v1/user/login',
    method: 'post',
    data: data
  })
}
// 2 /admin/api/v1/user/login
export function Postuserlogin2(data) {
  return request({
    url: '/admin/api/v1/user/login',
    method: 'post',
    data: data
  })
}
/* 个人信息 */

//  获取个人账号信息
export function getPersonalinfo(data) {
  return request({
    url: '/admin/api/v1/user/get_personal_info',
    method: 'post',
    data: data
  })
}
//   列出当前企业指定部门下的子部门
export function listEnterprisedeparts(data) {
  return request({
    url: '/admin/api/v1/user/list_enterprise_sub_departs',
    method: 'post',
    data: data
  })
}
// 当前企业所有职称
// /admin/api/v1/user/list_enterprise_job_titles
export function listEnterpriseJobtitles(data) {
  return request({
    url: '/admin/api/v1/user/list_enterprise_job_titles',
    method: 'post',
    data: data
  })
}
// 当前企业根部门
// /admin/api/v1/user/get_enterprise_root_depart
export function getEnterpriseRootdepart(data) {
  return request({
    url: '/admin/api/v1/user/get_enterprise_root_depart',
    method: 'post',
    data: data
  })
}
// 查询 子部门
// /admin/api/v1/user/list_enterprise_sub_departs
export function listEnterprisesubDeparts(data) {
  return request({
    url: '/admin/api/v1/user/list_enterprise_sub_departs',
    method: 'post',
    data: data
  })
}
// 上传企业用户头型
// /admin/api/v1/user/upload_avatar

export function uploadAvatar(data) {
  return request({
    url: '/admin/api/v1/user/upload_avatar',
    method: 'post',
    data: data
  })
}
// 修改个人信息
// /admin/api/v1/user/modify_personal_info

export function modifyPersonalinfo(data) {
  return request({
    url: '/admin/api/v1/user/modify_personal_info',
    method: 'post',
    data: data
  })
}