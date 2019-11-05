import request from './request';
import qs from "qs";

/* 子企业列表 api  */

// 查询子企业列表
export function listSubenterpriseInfos(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_sub_enterprise_infos',
        method: 'post',
        data: data
    })
}
// 注销企业
export function unregisterEnterprise(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/unregister_sub_enterprise',
        method: 'post',
        data: data
    })
}
// 查询企业临时管理员账号
export function getCasualadminInfo(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/get_casual_admin_info',
        method: 'post',
        data: data
    })
}
  
//给企业临时管理员账号延期
export function postponeCasualadmin(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/postpone_casual_admin',
        method: 'post',
        data: data
    })
}
// 列出企业可分配的所有功能权限
export function listEnterprisefunctions(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_assignable_enterprise_functions',
        method: 'post',
        data: data
    })
}
// 列出全部的辅助服务器
export function listAllassistServers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_assignable_stream_servers',
        method: 'post',
        data: data
    })
}

// 新增子企业接口
// /enterprise_admin/api/v1/enterprise_management/register_sub_enterprise
export function registerSubenterprise(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/register_sub_enterprise',
        method: 'post',
        data: data
    })
}
// /enterprise_admin/api/v1/enterprise_management/list_root_organization_paths
// 列出企业已分配的监控资源 
export function listAssignablemonitorServers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_assignable_monitor_servers',
        method: 'post',
        data: data
    })
}
// 列出监控平台（唐古拉）中指定组织机构（区域）的下属组织机构（区域）
// /enterprise_admin/api/v1/enterprise_management/list_sub_monitor_resource_organizations
export function listSubmonitorResourceorganizations(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_sub_monitor_resource_organizations',
        method: 'post',
        data: data
    })
}

// 获取终端通讯录地区目录路径 
// /enterprise_admin/api/v1/enterprise_management/list_root_terminal_region_paths
export function getTerminalregionPath(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_root_terminal_region_paths',
        method: 'post',
        data: data
    })
}
// 获取终端通讯录子级地区目录和单位
// /enterprise_admin/api/v1/enterprise_management/get_terminal_regions_and_departs
export function getTerminalregionsAnddeparts(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/get_terminal_regions_and_departs',
        method: 'post',
        data: data
    })
}
// 获取终端通讯录子级地区单位 
export function getTerminaldeparts(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/get_terminal_departs',
        method: 'post',
        data: data
    })
}
/* 查询企业信息 */
export function getEnterprisinfo(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/get_enterprise_info',
        method: 'post',
        data: data
    })
}
// 查询子企业信息
// /enterprise_admin/api/v1/enterprise_management/get_sub_enterprise_info
export function getSubenterpriseInfo(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/get_sub_enterprise_info',
        method: 'post',
        data: data
    })
}
// 编辑企业信息
//  /enterprise_admin/api/v1/enterprise_management/modify_sub_enterprise
export function modifyEnterprise(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/modify_sub_enterprise',
        method: 'post',
        data: data
    })
}

// 流媒体
export function listEnterprisestreamServers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_assignable_stream_servers',
        method: 'post',
        data: data
    })
}
//  /enterprise_admin/api/v1/enterprise_management/list_assignable_terminal_servers
// 列出子企业可分配的终端通讯录同步服务器
export function listAssignableterminalServers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_management/list_assignable_terminal_servers',
        method: 'post',
        data: data
    })
}
