import request from './request';
import qs from "qs";
/* 终端通讯录 */
// 列出指定单位下的终端设备信息 
export function getTerminallist(data) {
    return request({
        url: '/enterprise_admin/api/v1/resources_management/terminal/list',
        method: 'post',
        data: data
    })
}
// 获取可分配的终端通讯录同步服务器信息
export function getTerminalserver(data) {
    return request({
        url: '/enterprise_admin/api/v1/resources_management/terminal/get_terminal_server',
        method: 'post',
        data: data
    })
}
// 列出当前企业分配的终端通讯录地区目录
export function listRootterminalRegion(data) {
    return request({
        url: '/enterprise_admin/api/v1/resources_management/terminal/list_root_terminal_region',
        method: 'post',
        data: data
    })
}
// 列出终端通讯录子级地区目录和单位
export function listSubterminalRegionsdeparts(data) {
    return request({
        url: '/enterprise_admin/api/v1/resources_management/terminal/list_sub_terminal_regions_and_departs',
        method: 'post',
        data: data
    })
}
// 列出终端通讯录子级单位
export function listTerminaldeparts(data) {
    return request({
        url: '/enterprise_admin/api/v1/resources_management/terminal/list_terminal_departs',
        method: 'post',
        data: data
    })
}
// 搜索终端设备信息
export function getTerminalsearch(data) {
    return request({
        url: '/enterprise_admin/api/v1/resources_management/terminal/search',
        method: 'post',
        data: data
    })
}
//  搜索终端通讯录地区目录
export function getSearchterminalRegions(data) {
    return request({
        url: '/enterprise_admin/api/v1/resources_management/terminal/search_terminal_regions',
        method: 'post',
        data: data
    })
}