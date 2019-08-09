import request from './request';
import qs from "qs";




/*
获取实时直播列表*/
export function videolivelist (data) {
    return request({
        url: '/lv/api/v1/video_live_list',
        method: 'post',
        data: data
    })
}








