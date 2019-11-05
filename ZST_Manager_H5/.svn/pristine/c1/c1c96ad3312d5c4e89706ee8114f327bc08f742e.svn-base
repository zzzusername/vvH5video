<template>
  <div class="wrapper">
    <Header></Header>
    <div class="main">
      <NavView v-if="hackReset"></NavView>
      <!--	<HomeView></HomeView>-->
      <router-view />
    </div>
  </div>
</template>

<script>
import NavView from "../components/Nav.vue";
import Header from "./Header.vue";
import $ from "jquery";
import axios from "axios";

export default {
  data: function() {
    return {
      screenWidth:document.body.clientWidth,//网页可见区域宽
      screenHeight: document.body.clientHeight,//网页可见区域宽
      issecond: 60,
      countdown: "获取验证码",
      isshowinstall: false,
      hackReset: true,
      headPicUrl: "",
      Usemessage: localStorage.userName,
      parameter: {
        phone: "",
        code: "",
        Password1: "",
        Password2: ""
      }
    };
  },
  components: {
    NavView,
    Header
  },
   

  destroyed: function() {
   		   localStorage.removeItem('Accesstoken');
        // console.log(localStorage.getItem('Accesstoken'));
  },
   watch:{
            screenWidth(val){ //监听屏幕宽度变化
            
               var appH = $("#app").height();
      $(".wrapper").height(appH);

            },
            screenHeight(val){ //监听屏幕高度变化
                var appH = $("#app").height();
      $(".wrapper").height(appH);
            }
        },
  mounted() {
    let URL = ServerUrl;
    var hei = document.documentElement.clientHeight;
    $(".wrapper").css("height", hei);
    $(window).resize(function() {
     
      var appH = $("#app").height();
   
   
      $(".main").height(hei - $(".head").height());
      $(".mLeft").height($(".main").height());
      $(".mRight").height($(".main").height());
    });
  },
};
</script>

<style type="text/css">
::-webkit-scrollbar {
  width: 12px;
  /*滚动条宽度*/
  height: 12px;
  /*滚动条高度*/
}
::-webkit-scrollbar-track {
  border-radius: 5px;
  /*滚动条的背景区域的圆角*/
  background-color: #222d50;
  /*滚动条的背景颜色*/
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  /*滚动条的圆角*/
  background-color: #4f5c84;
  /*滚动条的背景颜色*/
}
#corporate_name {
  width: 100%;
}
#installlog .block #logcode {
  position: absolute;
  right: 15%;
  margin-top: 6px;
}
#installlog .block {
  overflow: hidden;
}
#installlog .textarea .el-form-item__label,
#menuEditModel .textarea .el-form-item__label {
  height: 160px;
  margin-top: 2px;
  background: #1b274c;
}

#installlog .textarea .el-textarea__inner,
#menuEditModel .textarea .el-textarea__inner {
  height: 160px;
}
@import url("../media/lkjmedia.css");
#menuEditModel .el-dialog,
#installlog .el-dialog {
  width: 1100px;
  top: 20%;
}

#menuEditModel .block .el-form-item__label,
#menuEditModel .block .el-input__inner {
  height: 36px;
  margin: 2px 0;
  line-height: 36px;
  border: 1px #3b4872 solid;
}
#menuEditModel .block .el-form-item__label,
#installlog .block .el-form-item__label {
  background: #1b274c;
}
#installlog .block .el-form-item__label,
#installlog .block .el-input__inner {
  height: 36px;
  margin: 2px 0;
  line-height: 36px;
  border: 1px #3b4872 solid;
}

#menuEditModel .el-dialog__body,
#installlog .el-dialog__body {
  padding: 24px 24px 18px;
  height: 250px;
}

#menuEditModel .el-checkbox,
#installlog .el-checkbox {
  float: left;
}

#menuEditModel .el-form-item,
#installlog .el-form-item {
  margin: 0;
  padding: 0;
  width: 91%;
  float: left;
}

#menuEditModel .userBtn .el-form-item,
#installlog .userBtn .el-form-item {
  width: 100%;
}

#menuEditModel .el-textarea,
#installlog .el-textarea {
  width: 106.2%;
}

.el-textarea__inner {
  height: 160px;
  margin: 2px 0;
  line-height: 22px;
  background: #2a3558;
  border: 1px #3b4872 solid;
  border-radius: 0;
}

.el-date-editor.el-input {
  width: 100%;
}

.el-select {
  width: 100%;
}

.el-textarea {
  float: left;
  width: 92.2%;
}

.el-dialog__header span {
  padding-left: 38px;
  height: 38px;
  display: inline-block;
}
/*img:hover{*/
/*background-color: #1b274c;*/
/*}*/

#installlog .block .el-form-item__content,
#menuEditModel .block .el-form-item__content {
  line-height: 32px;
}
</style>
<style>
.wrapper {
  height: 100%;
}

.user span {
  float: left;
  display: block;
  overflow: hidden;
}
.user .out {
  margin-left: 10px;
}

.out,
.install {
  float: left;
  width: 18px;
  height: 18px;
  display: block;
  overflow: hidden;
  line-height: 18px;
  margin: 18px 0px 0px 10px;
}

@media screen and (max-width: 1366px) {
  .out {
    float: left;
    width: 18px;
    height: 18px;
    display: block;
    overflow: hidden;
    line-height: 18px;
    margin: 10px 0px 0px 10px;
  }
}
</style>
