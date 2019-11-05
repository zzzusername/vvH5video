import request from './request';
import qs from "qs";

// 列出企业下的直播信息
export function liveVideolist(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/live_video/list',
        method: 'post',
        data: data
    })
}
// 删除直播信息
export function livevVideodelete(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/live_video/delete',
        method: 'post',
        data: data
    })
}
// 获取直播详情
export function liveVideoget(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/live_video/get',
        method: 'post',
        data: data
    })
}
// 列出全部直播状态（用于前端初始化下拉框）
export function listAllstatus(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/live_video/list_all_status',
        method: 'post',
        data: data
    })
}
// 终止直播
export function liveVideostop(data) {
    return request({
        url: '/enterprise_admin/api/v1/video_management/live_video/end',
        method: 'post',
        data: data
    })
}