import request from './request';
import qs from "qs";

// 列出企业下的会议信息
export function conferenceList(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/conference/list',
        method: 'post',
        data: data
    })
}
// 删除会议
export function conferenceDelete(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/conference/delete',
        method: 'post',
        data: data
    })
}
// 会议详情
export function conferenceGet(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/conference/get',
        method: 'post',
        data: data
    })
}

//结束会议
export function conferenceEnd(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/conference/end',
        method: 'post',
        data: data
    })
}
// 列出全部会议方式（用于前端初始化下拉框）
export function listAllcameraTypes(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/conference/list_all_camera_types',
        method: 'post',
        data: data
    })
}
// 列出全部会议状态（用于前端初始化下拉框）
export function listAllcameraStatus(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/conference/list_all_status',
        method: 'post',
        data: data
    })
}
// 列出全部会议类型（用于前端初始化下拉框）
export function listAlltype(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/conference/list_all_types',
        method: 'post',
        data: data
    })
}
// conferenceList,conferenceDelete,conferenceGet,conferenceEnd,listAllcameraTypes,listAllcameraStatus,listAlltype

