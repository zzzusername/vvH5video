import request from './request';
import qs from "qs";

// 列出数据
export function applyEventlist(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/apply_event/list',
        method: 'post',
        data: data
    })
}
// 列出审核类型 
export function applyEventlistType(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/apply_event/list_event_type',
        method: 'post',
        data: data
    })
}
// 列出审核状态
export function applyEventlistState(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/apply_event/list_event_status',
        method: 'post',
        data: data
    })
}
// 列出企业权限组
export function applyEventlistEnterprisegroups(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/apply_event/list_enterprise_groups',
        method: 'post',
        data: data
    })
}
// 通过企业用户注册申请事件
export function applyEventapprove(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/apply_event/approve',
        method: 'post',
        data: data
    })
}
// 驳回企业用户申请事件
export function userCheckapplyEventreject(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/apply_event/reject',
        method: 'post',
        data: data
    })
}
// userCheckapplyEventreject,applyEventapprove,applyEventlistEnterprisegroups