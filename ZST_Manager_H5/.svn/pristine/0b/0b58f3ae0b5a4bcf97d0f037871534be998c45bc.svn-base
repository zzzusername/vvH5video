<template>
  <div class="centerInfo">
  <video id="testVideo" oncontextmenu="return false;" class="video-js" controls preload="auto" :src="src" width="100%" height="100%"
       >
    <source src="" type='video/mp4'>
    <source src="" type='video/webm'>

  </video>
    </div >

    <!--<div id="app">-->
        <!--<div class="container">-->
            <!--<my-video :sources="video.sources" :options="video.options"></my-video>-->
        <!--</div>-->
    <!--</div>-->
</template>
<script>
import $ from "jquery";
import videojs from "video.js";
import "videojs-contrib-hls";

export default {
  data() {
    return {
      src: ""
    };
  },
  mounted: function() {

    if (localStorage.videoUrl != null && localStorage.videoUrl != "") {
      this.src=localStorage.videoUrl;
    }
  }

  //    components: {
  //        myVideo
  //    }
};
</script>
<style>
body {
  background-color: #000000;
  width: 100%;
}

body,
html {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #171717;
}

.title {
  font: 24px/1.5 weight;
  color: #fff;
  text-align: center;
  margin: 20px 0;
}

.centerInfo {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.getFullScreen {
  position: absolute;
  bottom: 100px;
  right: 100px;
  z-index: 1111;
}
.ctrl-c {
  width: 500px;
  height: auto;
  margin: 20px auto;
}

.btn {
  padding: 6px 10px;
  background: #5c96d8;
  margin: 5px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  display: inline-block;
}
#testVideo {
  min-height: 350px;
  min-width: 520px;
  width: 520px;
  height: auto;
  margin: 0 auto;
  outline: 2px solid #ccc;
}
body,
html {
  font-size: 16px;
}
.btn {
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.3) !important;
}

.github {
  display: block;
  width: 100%;
  text-align: center;
  color: #eee;
}
.video-js {
  width: 600px;
  height: 350px;
}
video::-internal-media-controls-download-button {
  display: none;
}

video::-webkit-media-controls-enclosure {
  overflow: hidden;
}

video::-webkit-media-controls-panel {
  width: calc(100% + 30px);
}
</style>
<style>
@import url("Video/css/Dvideo.css");
@import url("Video/font-icon/style.css");
</style>
