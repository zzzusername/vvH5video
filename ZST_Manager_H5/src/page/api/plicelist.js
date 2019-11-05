import request from './request';
import qs from "qs";

// 获取警员列表
export function getAllPoliceList(data) {
  return request({
    url: '/server_one_touch_alarm/api/v1/police_list',
    method: 'post',
    data: data
  })
}
// 新增警员信息
export function policeAdd(data) {
  return request({
    url: '/server_one_touch_alarm/api/v1/police_add',
    method: 'post',
    data: data
  })
}
// 编辑警员信息
export function policeUpdate(data) {
  return request({
    url: '/server_one_touch_alarm/api/v1/police_update',
    method: 'post',
    data: data
  })
}
// 删除警员信息
export function policeDelete(data) {
  return request({
    url: '/server_one_touch_alarm/api/v1/police_delete',
    method: 'post',
    data: data
  })
}
// 警员详情信息
export function policeInfo(data) {
  return request({
    url: '/server_one_touch_alarm/api/v1/police_info',
    method: 'post',
    data: data
  })
}
export function listEnterprisejobTitles(data) {
  return request({
    url: '/enterprise_admin/api/v1/enterprise_user_management/user_list/list_enterprise_job_titles',
    method: 'post',
    data: data
  })
}
