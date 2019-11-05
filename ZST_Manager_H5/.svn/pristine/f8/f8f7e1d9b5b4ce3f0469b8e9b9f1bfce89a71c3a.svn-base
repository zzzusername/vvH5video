import request from './request';
import qs from "qs";


/* common 接口 */
/* 获取  获取行政区域详情  commone */
export function getRegiondetail(data) {
    return request({
        url: '/common/api/v1/region/get_region_detail',
        method: 'post',
        data: data
    })
}

/* 获取 下级行政区域 */
export function getRegionsbyPid(data) {
    return request({
        url: '/common/api/v1/region/get_regions_by_pid',
        method: 'post',
        data: data
    })
}
/* 子企业编辑提交接口 */
/* /super/admin/api/v1/enterprise_management/modify_enterprise */
export function modifyEnterprise(data) {
    return request({
        url: '/super/admin/api/v1/enterprise_management/modify_enterprise',
        method: 'post',
        data: data
    })
}
/* 查询企业信息 */
export function getEnterprisinfo(data) {
    return request({
        url: '/admin/api/v1/enterprise_management/get_enterprise_info',
        method: 'post',
        data: data
    })
}