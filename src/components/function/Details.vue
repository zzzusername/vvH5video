<template>


  <div id="Details">
    <el-row class="header_Motif">

      <el-col :span="14" class="dataimg_height header_home_list" id="homePage_Vod">
        <div>
          <h2>安卓/浏览器</h2>
          <!--<video id="example_video_1" class="video-js vjs-default-skin" controls autoplay preload="none" width="640" height="480" data-setup="{}">-->
          <!--<source src="http://10.1.24.111:8000/cctv/1/index.m3u8" type="application/x-mpegURL" />-->
          <!--</video>-->

          <video id="videoElement" name="videoElement" class="centeredVideo" controls autoplay width="640" height="480">
            Your browser is too old which doesn't support HTML5 video.
          </video>
        </div>
        <div>
          <el-tabs type="border-card" @tab-click="handleClickCity">
            <el-tab-pane label="直播介绍">直播介绍</el-tab-pane>
            <el-tab-pane  label="文档">文档</el-tab-pane>

          </el-tabs>
        </div>


      </el-col>
      <el-col :span="10" class="dataimg_height header_home_list" id="homePage_Vod">
        <div>
          <div>
            <H2>聊天</H2>
          </div>
        </div>

      </el-col>
    </el-row>




  </div>

</template>
<script>
  import axios from "axios";
  import $ from "jquery";
  import flv from "../script/flv.js";
  import flvplayer from "../script/flvplayer.js";
  import {
    liveUrl,
    liveUrlCheck,


  } from  "../interface/live"
  var ResourcesId=""


  export default {
    data() {
      return {
      wSocketUrl:"",

      };
    },
    mounted() {
       var path = this.$route.path;
    ResourcesId = path.split("/").pop();
    console.log(ResourcesId);
    this.live_Verification()
          // this.flv_load()


    },
    computed: {


    },
    methods: {
    flv_load(e) {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement');
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: e
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
    window.player=flvPlayer;
  
  },
  // setTimeout(function(){
  //   flv_load();
  // },1000);

      
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
     
          console.log(res)
        
          _this.wSocketUrl=res.data.wSocketUrl;
          _this.flv_load(res.data.wSocketUrl) 
          var that = this
				// window.timer1 = setTimeout(function() {
				// _this.flv_load( _this.wSocketUrl)
				// }, 10000); //一分钟刷一次
        

        }).catch(function (error) {
          console.log(error);
        });

     }



    },
    destroyed: function() {
     window.clearTimeout(window.timer1)
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
