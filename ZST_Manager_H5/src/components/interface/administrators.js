import request from './request';
import qs from "qs";


/* administrators 接口 */
/* 获取  新增用户个人信息   */
export function getadd_personal_info(data) {
    return request({
        url: '/sys_super_admin/api/v1/user_management/add_personal_info',
        method: 'post',
        data: data
    })
}


/* administrators 接口 */
/* 列出用户个人信息  */
export function adminagetlist_personal_infos(data) {
    return request({
        url: '/sys_super_admin/api/v1/user_management/list_personal_infos',
        method: 'post',
        data: data
    })
}
/* administrators 接口 */
/* 
删除账号信息用户个人信息  */
export function adminagetlistdelete(data) {
    return request({
        url: '/sys_super_admin/api/v1/user_management/delete_personal_info',
        method: 'post',
        data: data
    })
}

/* administrators 接口 */
/* 修改用户个人信息  */
export function adminagetlistmodify(data) {
    return request({
        url: '/sys_super_admin/api/v1/user_management/modify_personal_info',
        method: 'post',
        data: data
    })
}

/* administrators 接口 */
/* 修改用户个人信息  */
export function adminaget_personal_info(data) {
    return request({
        url: '/sys_super_admin/api/v1/user_management/get_personal_info',
        method: 'post',
        data: data
    })
}

