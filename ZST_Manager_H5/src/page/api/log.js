import request from './request';
import qs from "qs";

// 获取全部的模块条目（用于前端初始化下拉框）
export function getAllmoduleEntries(data) {
    return request({
        url: '/enterprise_admin/api/v1/log/user_action/get_all_module_entries',
        method: 'post',
        data: data
    })
}
// 查询 log 初始化数据 data
export function getFunentriesModuleurl(data) {
    return request({
        url: '/enterprise_admin/api/v1/log/user_action/list',
        method: 'post',
        data: data
    })
}

// 获取指定模块下的全部功能条目（用于前端初始化下拉框）
export function useractionList(data) {
    return request({
        url: '/enterprise_admin/api/v1/log/user_action/get_fun_entries_by_module_url',
        method: 'post',
        data: data
    })
}


/* app 日志 */
// 获取日志详情  getApplogDetail  getApplist listOperationtypes
export function getApplogDetail(data) {
    return request({
        url: '/enterprise_admin/api/v1/log/app/detail',
        method: 'post',
        data: data
    })
}
// 查询满足条件的APP日志
export function getApplist(data) {
    return request({
        url: '/enterprise_admin/api/v1/log/app/list',
        method: 'post',
        data: data
    })
}
// 获取指定模块下的全部功能条目（用于前端初始化下拉框）
export function listOperationtypes(data) {
    return request({
        url: '/enterprise_admin/api/v1/log/app/list_operation_types',
        method: 'post',
        data: data
    })
}




/* app 日志 */
