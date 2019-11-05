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

// 列出满足条件的企业权限组信息
export function enterpriseUsermanagementGrouplist(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list',
        method: 'post',
        data: data
    })
}
// 列出当前企业下的用户
export function listEnterpriseusers(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list_enterprise_users',
        method: 'post',
        data: data
    })
}

// 列出可分配的功能权限
export function listAllocablefunctions(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list_allocable_functions',
        method: 'post',
        data: data
    })
}
// 新增企业权限组
export function groupAdd(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/add',
        method: 'post',
        data: data
    })
}
// 删除企业权限组
export function groupDelete(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/delete',
        method: 'post',
        data: data
    })
}
// 列出当前企业分配的监控资源根目录路径
// /admin/api/v1/enterprise_user_management/group/list_root_organization_paths
export function listRootorganizationPaths(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list_root_organization_paths',
        method: 'post',
        data: data
    })
}
//  列出监控平台（唐古拉）中指定组织机构（区域）的下属组织机构（区域）
//   /admin/api/v1/enterprise_user_management/group/list_sub_organizations
export function listSuborganizations(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list_sub_organizations',
        method: 'post',
        data: data
    })
}
// 列出当前企业分配的终端通讯录地区根目录路径
export function listRootterminalRegionpath(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list_root_terminal_region_path',
        method: 'post',
        data: data
    })
}
//  列出终端通讯录子级地区   目录和单位
export function listSubterminalRegionsandDeparts(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list_sub_terminal_regions_and_departs',
        method: 'post',
        data: data
    })
}
// 列出终端通讯录子级   单位
//  /admin/api/v1/enterprise_user_management/group/list_terminal_departs
export function listTerminaldeparts(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/list_terminal_departs',
        method: 'post',
        data: data
    })
}
// 获取企业权限组信息
// /admin/api/v1/enterprise_user_management/group/get
export function getEnterpriseuserManagementgroup(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/get',
        method: 'post',
        data: data
    })
}
//  编辑企业权限组
export function enterpriseUsermanagementgroupmodify(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/modify',
        method: 'post',
        data: data
    })
}
// 将企业用户从权限组移除
// /admin/api/v1/enterprise_user_management/group/remove_from_group
export function userManagementremoveFromgroup(data) {
    return request({
        url: '/admin/api/v1/enterprise_user_management/group/remove_from_group',
        method: 'post',
        data: data
    })
}
