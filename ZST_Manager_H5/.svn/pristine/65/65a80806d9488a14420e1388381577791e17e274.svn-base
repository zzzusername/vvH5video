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
// 列出当前企业下的所有职称
export function listRnterprisejobTitles(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/list_enterprise_job_titles',
        method: 'post',
        data: data
    })
}
// 列出用户角色
export function userListroles(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/list_roles',
        method: 'post',
        data: data
    })
}
// 列出用户状态
export function userListstatuses(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/list_statuses',
        method: 'post',
        data: data
    })
}
// 列出满足条件的企业用户信息
//  getEnterpriseuserManagementlist
export function getEnterpriseuserManagementlist(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/list',
        method: 'post',
        data: data
    })
}
// 添加企业用户信息
export function addEnterpriseuserInformation(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/add',
        method: 'post',
        data: data
    })
}
// 获取详情
// /admin/api/v1/enterprise_user_management/user_list/detail
export function getUserlistDetail(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/detail',
        method: 'post',
        data: data
    })
}
// 列出当前企业下的所有权限组
// /admin/api/v1/enterprise_user_management/user_list/list_enterprise_groups
export function listEnterprisegroups(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/list_enterprise_groups',
        method: 'post',
        data: data
    })
}
// 部门信息
// /admin/api/v1/enterprise_user_management/user_list/list_enterprise_departs
export function listEnterprisedeparts(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/list_enterprise_sub_departs',
        method: 'post',
        data: data
    })
}

// 删除数据
export function userListdelete(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/delete',
        method: 'post',
        data: data
    })
}
// 修改 信息
// /admin/api/v1/enterprise_user_management/user_list/modify
export function userListmodify(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/modify',
        method: 'post',
        data: data
    })
}
//  上传企业用户头像
export function userUploadavatar(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/user_list/upload_avatar',
        method: 'post',
        data: data
    })
}
// /admin/api/v1/enterprise_user_management/user_list/list_enterprise_sub_departs
