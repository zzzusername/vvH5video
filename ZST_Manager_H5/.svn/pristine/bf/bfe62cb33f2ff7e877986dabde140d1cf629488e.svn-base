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
// /enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_enterprise_groups
// 列出可分配的企业权限组
export function listAssignableenterpriseGroups(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_enterprise_groups',
        method: 'post',
        data: data
    })
}

//  /enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_stream_servers
// 列出可分配的流媒体拉流服务器
export function listAssignablestreamServers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_stream_servers',
        method: 'post',
        data: data
    })
}
//  /enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_functions
// 列出可分配的功能
export function listAllocablefunctions(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_functions',
        method: 'post',
        data: data
    })
}
// 监控地址 下拉数据
// /enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_monitor_servers
export function listAssignablemonitorServers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_assignable_monitor_servers',
        method: 'post',
        data: data
    })
}
// 监控数据根节点数据
export function listRootorganizationPaths(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_root_organization_paths',
        method: 'post',
        data: data
    })
}
// 监控数据下级节点根目录 /enterprise_admin/api/v1/enterprise_user_management/user_list/list_sub_organizations
export function listSuborganizations(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_sub_organizations',
        method: 'post',
        data: data
    })
}

//  /enterprise_admin/api/v1/enterprise_user_management/user_list/get_root_terminal_region
// 获取可分配的终端通讯录地区根目录
export function getRootterminalRegion(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/get_root_terminal_region',
        method: 'post',
        data: data
    })
}
//  获取可分配的终端通讯录同步服务器信息
export function userListgetTerminalserver(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/get_terminal_server',
        method: 'post',
        data: data
    })
}
// listSubterminalRegionsandDeparts
//   /enterprise_admin/api/v1/enterprise_user_management/user_list/list_sub_terminal_regions_and_departs
export function listSubterminalRegionsandDeparts(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_sub_terminal_regions_and_departs',
        method: 'post',
        data: data
    })
}
//  列出终端通讯录子级单位 
//   /enterprise_admin/api/v1/enterprise_user_management/user_list/list_sub_terminal_departs
export function listSubterminalDeparts(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_sub_terminal_departs',
        method: 'post',
        data: data
    })
}

// /enterprise_admin/api/v1/enterprise_user_management/user_list/save_privileges
//  保存企业用户已分配的权限信息
export function userListsavePrivileges(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/save_privileges',
        method: 'post',
        data: data
    })
}

// /enterprise_admin/api/v1/enterprise_user_management/user_list/get_assignable_privileges
// 获取企业用户已分配的权限信息
export function getAssignableprivileges(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/get_assignable_privileges',
        method: 'post',
        data: data
    })
}

/*  用户审核列表页面需要的所有api */
//  /enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_enterprise_groups
// 列出可分配的企业权限组
export function get_assignable_privileges(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_enterprise_groups',
        method: 'post',
        data: data
    })
}
//  /enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_functions
// 列出可分配的功能
export function list_assignable_functions(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_functions',
        method: 'post',
        data: data
    })
}

// 列出可分配的监控平台服务器（用于前端初始化下拉框）
// /enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_monitor_servers
export function list_assignable_monitor_servers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_monitor_servers',
        method: 'post',
        data: data
    })
}
// 列出可分配的流媒体拉流服务器
// /enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_stream_servers
export function list_assignable_stream_servers(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/list_assignable_stream_servers',
        method: 'post',
        data: data
    })
}
// 列出可分配的监控资源根目录路径
// /enterprise_admin/api/v1/enterprise_user_management/apply_event/list_root_organization_paths
export function list_root_organization_paths(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/list_root_organization_paths',
        method: 'post',
        data: data
    })
}
//  获取可分配的终端通讯录地区根目录
// /enterprise_admin/api/v1/enterprise_user_management/apply_event/get_root_terminal_region
export function get_root_terminal_region(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/get_root_terminal_region',
        method: 'post',
        data: data
    })
}
// 获取可分配的终端通讯录同步服务器信息
// /enterprise_admin/api/v1/enterprise_user_management/apply_event/get_terminal_server
export function get_terminal_server(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/get_terminal_server',
        method: 'post',
        data: data
    })
}

// 通过企业用户注册申请事件
// /enterprise_admin/api/v1/enterprise_user_management/apply_event/approve
export function apply_event_approve(data) {
    return request({
        url: '/enterprise_admin/api/v1/enterprise_user_management/apply_event/approve',
        method: 'post',
        data: data
    })
}


/*  用户审核列表页面需要的所有api */