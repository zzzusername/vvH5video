import request from './request';
import qs from "qs";


/* 资源管理  辅助服务器 接口 */
/* 获取  列出全部的辅助服务器   */
export function getassist_serverlist(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/list',
        method: 'post',
        data: data
    })
}


/* 资源管理  辅助服务器 接口 */
/* 
删除辅助服务器  */
export function getassist_serverdelete(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/delete',
        method: 'post',
        data: data
    })
}


/* 资源管理  辅助服务器 接口 */
/* 
新增辅助服务器  */
export function getassist_serveradd(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/add',
        method: 'post',
        data: data
    })
}


/* 资源管理  辅助服务器 接口 */
/* 
获取指定ID的辅助服务器  */
export function getassist_serverget(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/get',
        method: 'post',
        data: data
    })
}
/* 资源管理  辅助服务器 接口 */
/* 
修改辅助服务器  */
export function getassist_servermodify(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/modify',
        method: 'post',
        data: data
    })
}
/* 资源管理  辅助服务器 接口 */
/* 
获取监控平台（唐古拉）服务器和会管服务器的配置信息  */
export function get_monitor_server_and_terminal_server_config(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/get_monitor_server_and_terminal_server_config',
        method: 'post',
        data: data
    })
}
/* 资源管理  辅助服务器 接口 */
/* 
获取监控平台（唐古拉）服务器的状态信息  */
export function get_monitor_server_status(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/get_monitor_server_status',
        method: 'post',
        data: data
    })
}
/* 资源管理  辅助服务器 接口 */
/* 
获取会管（终端通讯录）服务器的状态信息  */
export function get_terminal_server_status(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/get_terminal_server_status',
        method: 'post',
        data: data
    })
}
/* 资源管理  辅助服务器 接口 */
/* 
设置终端通讯录同步方式  */
export function get_set_terminal_sync_auto(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/set_terminal_sync_auto',
        method: 'post',
        data: data
    })
}
/* 资源管理  辅助服务器 接口 */
/* 

同步终端通讯录数据  */
export function get_sync_terminal_dev_data(data) {
    return request({
        url: '/sys_super_admin/api/v1/resources_management/assist_server/sync_terminal_dev_data',
        method: 'post',
        data: data,
        timeout: 3600000, //通过timeout属性，设置超时时间
    })
}

   // 终端同步地址列表

// 同步终端通讯录数据  */
export function get_sterminal_server_list(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/terminal_server/list',
        method: 'post',
        data: data,
     
    })
}

// 新增终端通讯录同步服务器信息  */
export function get_sterminal_server_add(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/terminal_server/add',
        method: 'post',
        data: data,
     
    })
}

// 获取指定ID的终端通讯录同步服务器信息  */
export function get_sterminal_server_get(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/terminal_server/get',
        method: 'post',
        data: data,
     
    })
}
// 删除指定ID的终端通讯录同步服务器信息  */
export function get_sterminal_server_delete(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/terminal_server/delete',
        method: 'post',
        data: data,
     
    })
}

// 修改终端通讯录同步服务器信息  */
export function get_sterminal_server_modify(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/terminal_server/modify',
        method: 'post',
        data: data,
     
    })
}

// 同步终端通讯录数据  */
export function get_sterminal_server_sync_data(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/terminal_server/sync_data',
        method: 'post',
        data: data,
     
    })
}
// 监控平台地址列表***********************************
// 列出监控平台服务器信息  */
export function get_monitor_server_list(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/monitor_server/list',
        method: 'post',
        data: data,
     
    })
}
// 新增监控平台服务器信息  */
export function get_monitor_server_add(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/monitor_server/add',
        method: 'post',
        data: data,
     
    })
}
// 删除指定ID的监控平台服务器信息  */
export function get_monitor_server_delete(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/monitor_server/delete',
        method: 'post',
        data: data,
     
    })
}

// 修改监控平台服务器信息  */
export function get_monitor_server_modify(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/monitor_server/modify',
        method: 'post',
        data: data,
     
    })
}

// 获取指定ID的监控平台服务器信息  */
export function get_monitor_server_get(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/monitor_server/get',
        method: 'post',
        data: data,
     
    })
}
// 流媒体地址列表**************************
// 列出VMServer信息  */
export function get_stream_server_list(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/list_vmservers',
        method: 'post',
        data: data,
     
    })
}
// 删除指定ID的VMServer信息  */
export function get_stream_server_delete_vmserver(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/delete_vmserver',
        method: 'post',
        data: data,
     
    })
}
// 添加流媒体拉流服务器  */
export function get_stream_server_add_vmserver(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/add_vmserver',
        method: 'post',
        data: data,
     
    })
}
// 获取指定ID的VMServer信息  */
export function get_stream_server_get_vmserver(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/get_vmserver',
        method: 'post',
        data: data,
     
    })
}
// 获取指定ID的VMServer信息  */
export function get_stream_server_modify_vmserver(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/modify_vmserver',
        method: 'post',
        data: data,
     
    })
}


/* zk */
// /sys_super_admin/api/v1/resource_management/stream_server/add_vmserver
// 获取指定ID的VMServer信息  */
export function stream_server_add_vmserver(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/add_vmserver',
        method: 'post',
        data: data,

    })
}
// 加载指定区域的流媒体
//  /sys_super_admin/api/v1/resource_management/stream_server/load_stream_servers
export function stream_server_load_stream_servers(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/load_stream_servers',
        method: 'post',
        data: data,

    })
}

// /common/api/v1/region/get_regions_by_pid
export function get_regions_by_pid(data) {
    return request({
        url: '/common/api/v1/region/get_regions_by_pid',
        method: 'post',
        data: data,

    })
}
//  /sys_super_admin/api/v1/resource_management/stream_server/modify_stream_server
//  修改流媒体信息
export function stream_server_modify_stream_server(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/modify_stream_server',
        method: 'post',
        data: data,

    })
}
// 添加流媒体
//  /sys_super_admin/api/v1/resource_management/stream_server/add_stream_server
export function stream_server_add_stream_server(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/add_stream_server',
        method: 'post',
        data: data,

    })
}
// 删除 流媒体 
//  /sys_super_admin/api/v1/resource_management/stream_server/delete_stream_server
export function stream_server_delete_stream_server(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/delete_stream_server',
        method: 'post',
        data: data,

    })
}
// 列出VMServer下的流媒体拉流服务器
//  /sys_super_admin/api/v1/resource_management/stream_server/list_stream_servers
export function stream_server_list_stream_servers(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/list_stream_servers',
        method: 'post',
        data: data,

    })
}

//    /sys_super_admin/api/v1/resource_management/stream_server/get_stream_server
export function stream_server_get_stream_server(data) {
    return request({
        url: '/sys_super_admin/api/v1/resource_management/stream_server/get_stream_server',
        method: 'post',
        data: data
    })
}

/* zk */