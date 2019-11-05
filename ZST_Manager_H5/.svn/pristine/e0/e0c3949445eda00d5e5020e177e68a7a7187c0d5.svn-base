import request from './request';
import qs from "qs";


/*  home页面 接口 */
/* 获取列出企业信息   */
export function getenterpriseinfos(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/list_enterprise_infos',
        method: 'post',
        data: data
    })
}

/* 注册企业信息   */
export function getregisterenterprise(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/register_enterprise',
        method: 'post',
        data: data
    })
}

/* 列出全部的辅助服务器   */
export function getall_assist_servers(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/list_all_assist_servers',
        method: 'post',
        data: data
    })
}

/* 从运维工作站获取指定区域下的流媒体拉流服务器  */
export function getallenterprise_streamservers(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/list_enterprise_streamservers_by_org_code_from_remote',
        method: 'post',
        data: data
    })
}
/* 获取终端通讯录子级地区目录和单位  */
export function get_terminal_regions_and_departs(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/get_terminal_regions_and_departs',
        method: 'post',
        data: data
    })
}

/* 获取终端通讯录地区目录  */
export function get_terminal_region(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/get_terminal_region',
        method: 'post',
        data: data
    })
}

/* 列出监控平台（唐古拉）中指定组织机构（区域）的下属组织机构（区域  */
export function getresource_organizations(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/list_sub_monitor_resource_organizations',
        method: 'post',
        data: data
    })
}



/* 列出监控平台（唐古拉）中指定组织机构（区域）的父级组织机构（区域）路径  不是全国的时候 拼取地址时
 */

export function  getresource_organization_paths (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/list_parent_monitor_resource_organization_paths',
        method: 'post',
        data: data
    })
}



/* 列出企业可分配的所有功能权限  */
export function  getenterprise_all_functions (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/list_enterprise_all_functions',
        method: 'post',
        data: data
    })
}



/* 列出企业可分配的所有功能权限  */
export function  get_monitor_server (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/get_monitor_server',
        method: 'post',
        data: data
    })
}
/* 注销企业 */
export function  get_unregister_enterprise (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/unregister_enterprise',
        method: 'post',
        data: data
    })
}


/* 给企业临时管理员账号延期 */
export function  getpostpone_casual_admin (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/postpone_casual_admin',
        method: 'post',
        data: data
    })
}

/* 查询企业临时管理员账号 */
export function get_casual_admin_info (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/get_casual_admin_info',
        method: 'post',
        data: data
    })
}


/* 查询企业信息*/
export function getenterprise_info (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/get_enterprise_info',
        method: 'post',
        data: data
    })
}

/* 
编辑企业信息*/
export function getmodify_enterprise (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/modify_enterprise',
        method: 'post',
        data: data
    })
}


/* 

获取终端通讯录子级单位*/
export function get_terminal_departs (data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/get_terminal_departs',
        method: 'post',
        data: data
    })
}






