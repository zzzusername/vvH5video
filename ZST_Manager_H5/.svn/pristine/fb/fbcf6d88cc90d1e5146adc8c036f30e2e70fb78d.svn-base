import request from './request';
import qs from "qs";


/*  log页面 接口 */
/*查询满足条件的管理员操作日志   */
export function getFunentriesModuleurl(data) {
    return request({
        url: '/super/admin/api/v1/log/user_action/get_fun_entries_by_module_url',
        method: 'post',
        data: data
    })
}
/*获取全部的模块条目*/
export function getAllmoduleEntries(data) {
    return request({
        url: '/super/admin/api/v1/log/user_action/get_all_module_entries',
        method: 'post',
        data: data
    })
}
/*获取指定模块下的全部功能条目*/
export function specifyListof (data) {
    return request({
        url: '/super/admin/api/v1/log/user_action/list',
        method: 'post',
        data: data
    })
}








