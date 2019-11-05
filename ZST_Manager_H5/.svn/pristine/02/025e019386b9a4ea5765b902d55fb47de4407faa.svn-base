import request from './request';
import qs from "qs";
/* 终端通讯录 */
// 列出指定单位下的终端设备信息 
export function getTerminallist(data) {
    return request({
        url: '/admin/api/v1/resources_management/terminal/list',
        method: 'post',
        data: data
    })
}
// 列出当前企业分配的终端通讯录地区目录路径
export function listRootterminalRegionpath(data) {
    return request({
        url: '/admin/api/v1/resources_management/terminal/list_root_terminal_region_path',
        method: 'post',
        data: data
    })
}
// 列出当前企业分配的终端通讯录地区目录
export function listRootterminalRegions(data) {
    return request({
        url: '/admin/api/v1/resources_management/terminal/list_root_terminal_regions',
        method: 'post',
        data: data
    })
}
// 列出终端通讯录子级地区目录和单位
export function listSubterminalRegionsdeparts(data) {
    return request({
        url: '/admin/api/v1/resources_management/terminal/list_sub_terminal_regions_and_departs',
        method: 'post',
        data: data
    })
}
// 列出终端通讯录子级单位
export function listTerminaldeparts(data) {
    return request({
        url: '/admin/api/v1/resources_management/terminal/list_terminal_departs',
        method: 'post',
        data: data
    })
}
// 搜索终端设备信息
export function getTerminalsearch(data) {
    return request({
        url: '/admin/api/v1/resources_management/terminal/search',
        method: 'post',
        data: data
    })
}
//  搜索终端通讯录地区目录
export function getSearchterminalRegions(data) {
    return request({
        url: '/admin/api/v1/resources_management/terminal/search_terminal_regions',
        method: 'post',
        data: data
    })
}