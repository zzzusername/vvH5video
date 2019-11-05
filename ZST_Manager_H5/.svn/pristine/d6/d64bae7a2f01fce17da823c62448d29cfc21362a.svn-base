import request from './request';
import qs from "qs";
/* 资源 */
// 获取 监控设备详情
export function getMonitordetail(data) {
    return request({
        url: '/admin/api/v1/resources_management/monitor/detail',
        method: 'post',
        data: data
    })
}
// 列出监控平台（唐古拉）中指定组织机构（区域）下的监控设备信息
export function getMonitorlist(data) {
    return request({
        url: '/admin/api/v1/resources_management/monitor/list',
        method: 'post',
        data: data
    })
}
// 列出当前企业分配的监控资源目录路径
// /admin/api/v1/resources_management/monitor/list_root_organization_paths
export function listRootorganizationPaths(data) {
    return request({
        url: '/admin/api/v1/resources_management/monitor/list_root_organization_paths',
        method: 'post',
        data: data
    })
}
// 列出监控平台（唐古拉）中指定组织机构（区域）的下属组织机构（区域）
export function listSuborganizations(data) {
    return request({
        url: '/admin/api/v1/resources_management/monitor/list_sub_organizations',
        method: 'post',
        data: data
    })
}
// 搜索监控平台（唐古拉）中的监控设备信息
export function getMonitorsearch(data) {
    return request({
        url: '/admin/api/v1/resources_management/monitor/search',
        method: 'post',
        data: data
    })
}
// 搜索监控平台（唐古拉）中的组织机构（区域）
export function getSearchorganizations(data) {
    return request({
        url: '/admin/api/v1/resources_management/monitor/search_organizations',
        method: 'post',
        data: data
    })
}