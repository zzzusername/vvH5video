<template>
  <div class="wrapper">
    <Header logoName="掌上通管理平台" isInformation = '1' ></Header>
    <div class="main">
      <Homeapp></Homeapp>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import Homeapp from "./homeapp.vue";
import Header from "../../components/Header.vue";

export default {
  data: function() {
    return {
      isShow : true,
    };
  },
  components: {
    Header,
    Homeapp
  },
  destroyed: function() {
    window.IsTips = false;
    console.log("页面关闭了");
  },
  mounted() {
    var hei = document.documentElement.clientHeight;
    $(".wrapper").css("height", hei);
    $(window).resize(function() {
      var appH = $("#app").height();
      $(".wrapper").height(appH);
      $(".main").height($(".wrapper").height() - $(".head").height());
      $(".mLeft").height($(".main").height());
      $(".mRight").height($(".main").height());
    });
  }
};
</script>

<style type="text/css">
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
