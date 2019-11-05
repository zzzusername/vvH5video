import request from './request';
import qs from "qs";

// 获取列表
export function getEventList(data) {
  return request({
    url: '/server_one_touch_alarm/api/v1/alarm_event_list',
    method: 'post',
    data: data
  })
}
