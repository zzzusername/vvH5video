
import axios from 'axios'

var liveUrls= "https://10.1.24.111:5001"



/*
获取实时直播路径*/
export function liveUrl (data) {
   return axios.get(liveUrls+'/api/Ffmpeg/'+data.id);
}


/*
验证直播是否存在*/
export function liveUrlCheck (data) {
    return axios.get(liveUrls+'/api/Ffmpeg/Check/'+data.id, data);

}






