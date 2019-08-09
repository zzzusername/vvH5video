<template>
  <div id="Details">
    <H2>IOS直播页_1</H2>

    <video   id="myVideo" class="video-js vjs-default-skin" controls autoplay preload="none" width="640" height="480"  data-setup="{}">
      <source src='http:stream.m3u8'  type="application/x-mpegURL"/>
    </video>

    <video-player
                id="testVideo"
                oncontextmenu="return false;"
                style="object-fit:fill"
                class="vjs-custom-skin vjs-big-play-centered"
                preload="auto"
                webkit-playsinline="true"
                ref="videoPlayer"
                :options="playerOptions"
                :playsinline="true"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)"
              ></video-player>
  

  </div>
</template>
<script>
var liveId = "";
  import axios from "axios";
  import $ from "jquery";
  import videojs from 'video.js';
  import "videojs-contrib-hls";

    import {
    liveUrl,
    liveUrlCheck,


  } from  "../interface/live"

  var ResourcesId=""





  export default {
    data() {
      return {
        videoSrc:"",
        islive:false,
          playerOptions: {
        height: "100%",
        autoplay: false,
        muted: false,
        language: "zh-CN",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "application/x-mpegURL",
            src: "http://10.1.24.111:8000/live/stream1208/index.m3u8"
          }
        ],
        poster: "",
        notSupportedMessage: "此视频暂无法播放,请稍后再试"
      },

      };
    },
    mounted() {
       this.$nextTick(() => {
      this.getVideo();
    });
  
         var path = this.$route.path;
    ResourcesId = path.split("/").pop();
    liveId = path.split("/").pop();
    console.log(ResourcesId);
    this.live_Verification()

      this.videoSrc=""
                $.ajax({
    type:"GET",
    url:"https://10.1.24.111:5001/api/Ffmpeg/101",
    success:function (data) {
         console.log(data);
    }, error:function(e){
           console.log(e)//请求失败是执行这里的函数
       }
 });
      


    },
    computed: {

    },
  methods: {
    getVideo() {
      this.myVideo = videojs("myVideo", {
        bigPlayButton: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        hls: {
          withCredentials: true
        }
      });
    },
          initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: "muted",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "640px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "400px"
        });
      
            myPlayer.play(); 

       },

      
      handleClickCity(tab, event){
        console.log(tab, event);
      },
      /*
验证直播是否存在*/
     live_Verification(){
       var _this=this;
       var id={
         id:parseInt(ResourcesId)
       }
      liveUrlCheck(id).then(function (res) {

          console.log(res)
          if(res.data){
            _this.livestartUrl()


          }else{
            
          }
      

        }).catch(function (error) {
          console.log(error);
        });
     },
     livestartUrl(){
       var _this=this
        var Urlid={
         id:parseInt(ResourcesId)
       }
        liveUrl(Urlid).then(function (res) {

          console.log("ja=assd")
          console.log(res)
            alert(res.data.m3U8Url)
          _this.videoSrc=res.data.m3U8Url;
           _this.myVideo.src( {src: res.data.m3U8Url})

//  var myPlayer = videojs('example_video_1');
        // 实现功能加载完成在，自动播放
        // videojs("example_video_1").ready(function () {
        //     //在回调函数中，this代表当前播放器，
        //     //可以调用方法，也可以绑定事件。
        //     var myPlayer = this;
        //     myPlayer.src({
        //         src: res.data.m3U8Url

        //     });
       
        //     myPlayer.load();
        //     myPlayer.play(); //播放
        //     myPlayer.volume(.5); //声音大小（0-1之间）
        // });
         
        
     
        }).catch(function (error) {
          console.log(error);
        });

     }



    },
    destroyed: function() {

    },

  };
</script>
<style>
  @import url("../script/video-js.css");
  @import url("../css/flvplayer.css");
</style>
<style lang="scss">
  #Details {
    width: 100%;
    overflow: hidden;
    background: #f7f7f7;

  }


</style>
