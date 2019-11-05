import request from './request';
import qs from "qs";

// 获取全部的模块条目（用于前端初始化下拉框）
export function getAllmoduleEntries(data) {
    return request({
        url: '/admin/api/v1/log/user_action/get_all_module_entries',
        method: 'post',
        data: data
    })
}
// 查询 log
// /admin/api/v1/log/user_action/get_fun_entries_by_module_url
export function getFunentriesModuleurl(data) {
    return request({
        url: '/admin/api/v1/log/user_action/get_fun_entries_by_module_url',
        method: 'post',
        data: data
    })
}

// 获取指定模块下的全部功能条目（用于前端初始化下拉框）
export function useractionList(data) {
    return request({
        url: '/admin/api/v1/log/user_action/list',
        method: 'post',
        data: data
    })
}