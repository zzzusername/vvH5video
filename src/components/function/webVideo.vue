<template>
  <div id="Details">
    <H2>IOS直播页_1</H2>
    <div id="cont">
      <video id="roomVideo" class="video-js vjs-default-skin vjs-big-play-centered">
        <source id="source" src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
      <!--   <source id="source" src="http://10.1.24.111:8000/live/stream3/index.m3u8" type="application/x-mpegURL"/> -->
      </video>
    </div>
    <p>{{textdata}}</p>
	<el-button id='play' @click="playClick">播放</el-button> 
	<!-- <el-button id='play' @click="setTimeoutClick">模拟异步函数</el-button>  -->
    <!-- <el-button id='play' @click="play">播放</el-button> -->
    <!-- <el-button id='play' @click="getUrl('http://10.1.24.111:8000/live/stream1208/index.m3u8')">异步函数</el-button> -->
	<!-- http://10.1.24.111:8000/live/streamNaN/index.m3u8 -->
    <!-- <el-button id='play' @click="getUrlplay">异步播放</el-button> -->
  </div>
</template>

<script>
/* 
<script src="./video/video.js?v=fc5104a2ab23"></script>
<script src="./video/videojs-contrib-hls.js?v=c726b94b9923"></script> 
*/
import axios from "axios";
import $ from "jquery";

/* import videojs from 'video.js';
import "videojs-contrib-hls"; */

/* api */
import { liveUrl, liveUrlCheck ,liveUrl3} from "../interface/live";
var myPlayer;
var ResourcesId = "";
export default {
  data() {
    return {
		textdata : '播放'
	};
  },
  mounted() {
    //this.Initvide("roomVideo");
    var path = this.$route.path;
    ResourcesId = path.split("/").pop();
	this.live_Verification();
	  //this.live_Url();
  },
  methods: {
	  
    live_Verification() {
      var _this = this;
      var id = {
        id: parseInt(ResourcesId)
	  };
	  
      liveUrlCheck(id)
        .then(function(res) {
          if (res.data) {
            _this.live_Url();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
	},
	// 二级 异步
    live_Url() {
      var _this = this;
      var Urlid = {
        id: '101'
      };
      liveUrl(Urlid)
        .then(function(res) {
		//动态赋值
		_this.videoSrc = res.data.m3U8Url;
		console.log(_this.videoSrc);
		_this.textdata = _this.videoSrc;
			// 清空 结构
		  _this.$nextTick(() => {
				_this.getUrl(res.data.m3U8Url);
			});
        })
        .catch(function(error) {
          console.log(error);
		});
	},
	// 模拟异步函数
	setTimeoutClick(){
		var _this = this;
		console.log("模拟异步")
		let apiUrl = 'http://10.1.24.111:8000/live/stream3/index.m3u8'
		// api 返回时间为 3s
		setTimeout(function(){
			// 调用  初始化函数
			_this.$nextTick(() => {
				_this.getUrl(apiUrl);
			});
		},5000)
	},	
    //初始化
    Initvide(id) {
      let pid = id;
      this.$nextTick(() => {
        this.getInitvideo(pid);
      });
    },
    getInitvideo(id) {
      myPlayer = videojs(
        id,
        {
          bigPlayButton: false,
          textTrackDisplay: false,
          posterImage: true,
          errorDisplay: false,
          controlBar: false
        },
        function() {
          this.on("loadedmetadata", function() {
            console.log("loadedmetadata");
            //加载到元数据后开始播放视频
            //startVideo();
          });

          this.on("ended", function() {
            console.log("ended");
          });
          this.on("firstplay", function() {
            console.log("firstplay");
          });
          this.on("loadstart", function() {
            //开始加载
            console.log("loadstart");
          });
          this.on("loadeddata", function() {
            console.log("loadeddata");
          });
          this.on("seeking", function() {
            //正在去拿视频流的路上
            console.log("seeking");
          });
          this.on("seeked", function() {
            //已经拿到视频流,可以播放
            console.log("seeked");
          });
          this.on("waiting", function() {
            console.log("waiting");
          });
          this.on("pause", function() {
            console.log("pause");
          });
          this.on("play", function() {
            console.log("play");
          });
        }
      );
    },
    // 拼接 DOM 节点
    getUrl(url) {
	let videoUrl = url
	//let videoUrl = 'http://10.1.24.111:8000/live/stream3/index.m3u8'
		$('#cont').html('');
      let text =
        '<video id="roomVideo2" class="video-js vjs-default-skin vjs-big-play-centered"><source id="source" src='+ videoUrl +' type="application/x-mpegURL"></video>';
	  $("#cont").html(text);
	  // 渲染成功后调用 初始化函数
	  this.$nextTick(() => {
		// 初始化
		this.Initvide("roomVideo2");
	  });
	},
	playClick(){
		console.log('播放');
		myPlayer.play();
	}
  }
};
</script>
<style>
video {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid;
}
button {
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 30px auto;
  display: block;
}
#Details {
  width: 100%;
  overflow: hidden;
  background: #f7f7f7;
}
</style>