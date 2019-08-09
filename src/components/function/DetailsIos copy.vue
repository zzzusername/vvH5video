<template>
  <div id="Details">
    <H2>IOS直播页</H2>

    <video id="example_video_1" class="video-js vjs-default-skin" controls autoplay preload="none" width="640" height="480" data-setup="{}">
      <source :src="videoSrc" type="application/x-mpegURL" />
    </video>

    <!--<video id="videoElement" name="videoElement" class="centeredVideo" controls autoplay width="640" height="480">-->
      <!--Your browser is too old which doesn't support HTML5 video.-->
    <!--</video>-->

  </div>
</template>
<script>
  import axios from "axios";
  import $ from "jquery";
  import flv from "../script/flv.js";
  import flvplayer from "../script/flvplayer.js";




  export default {
    data() {
      return {
        videoSrc:""

      };
    },
    mounted() {
      this.videoSrc="http://10.1.24.111:8000/cctv/1/index.m3u8"


    },
    computed: {

    },
    methods: {

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
