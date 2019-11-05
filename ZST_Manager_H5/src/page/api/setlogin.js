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
//   /enterprise_admin/api/v1/app_management/enterprise_user_registration_setting/list
//  列出企业用户注册信息字段具体的约束值
export function enterpriseUserregistrationSettinglist(data) {
    return request({
        url: '/enterprise_admin/api/v1/app_management/enterprise_user_registration_setting/list',
        method: 'post',
        data: data
    })
}
// 列出企业用户注册信息字段可选的约束值
// /enterprise_admin/api/v1/app_management/enterprise_user_registration_setting/list_registration_field_constraints
export function listRegistrationfieldConstraints(data) {
    return request({
        url: '/enterprise_admin/api/v1/app_management/enterprise_user_registration_setting/list_registration_field_constraints',
        method: 'post',
        data: data
    })
}
//  修改企业用户注册信息字段具体的约束值 
//  /enterprise_admin/api/v1/app_management/enterprise_user_registration_setting/modify
export function enterpriseUserregistrationSettingmodify(data) {
    return request({
        url: '/enterprise_admin/api/v1/app_management/enterprise_user_registration_setting/modify',
        method: 'post',
        data: data
    })
}
// enterpriseUserregistrationSettinglist,listRegistrationfieldConstraints,enterpriseUserregistrationSettingmodify