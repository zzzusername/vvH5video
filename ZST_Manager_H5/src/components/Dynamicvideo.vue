<template>
  <div class="wrapper">
        <div class="main">
            <div id="videoPlay">
                <!-- <video class="video" src="https://cdn.qiniu.intersee.cn/79f167d2-25d1-45d3-8294-2aa6a193c73e%40%E8%A7%86%E9%A2%91.mp4"></video> -->
                <video class="video" :src="videoUrl" controls="controls">
                    your browser does not support the video tag
                </video>
            </div>
        </div>
  </div>
</template>

<script>
import $ from "jquery";
import {heightAuto} from '../page/untils/heightAuto' //注意路径
export default {
    data: function() {
        return {
            videoUrl : this.$route.query.url, 
        };
    },
    mounted: function() {
        var hei = document.documentElement.clientHeight;
        $('.wrapper').css("height", hei);
        $(window).resize(function () {
            var wid = document.documentElement.clientWidth,
                hei = document.documentElement.clientHeight;
            $('.wrapper').css("height", hei);
        });
    },
};
</script>
<style scoped>
#videoPlay{
    width: 500px;
    margin: 50px auto;
    height: 500px;
}
#videoPlay .video{
    width: 500px;
    height: 500px;
}
</style>


