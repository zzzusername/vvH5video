<template>
  <div class="loginBody">
    <div id="content-lkj">
      <div class="wraper">
        <div class="loginTitle">移动终端管理平台</div>
        <div class="loginBox">
          <div class="loginMain">
            <div class="loginForm">
              <div class="logo">
                <img src="../assets/loginlogo.png" alt />
              </div>
              <div class="userName inputBg">
                <span>
                  <img src="../assets/password.png" alt />
                </span>
                <input
                  @click="blank()"
                  class="username"
                  name="login"
                  type="text"
                  value
                  maxlength="20"
                  autocomplete="off"
                  placeholder
                />
              </div>
              <div class="passWord inputBg inputchang">
                <span>
                  <img src="../assets/userName.png" alt />
                </span>
                <input
                  @click="blank()"
                  class="password"
                  name="pwd"
                  type="password"
                  v-model="loginpassword"
                  maxlength="22"
                  autocomplete="off"
                  placeholder="密码"
                />
              </div>
              <div class="verificationCode">
                <input
                  @click="blank()"
                  class="ValidateNum"
                  name="code"
                  type="text"
                  maxlength="4"
                  autocomplete="off"
                  placeholder="验证码"
                />
                <div class="code">
                  <img :src="item.src" alt @click="postcode()" />
                  <canvas
                    class="J_codeimg"
                    id="myCanvas"
                    @click="Code();"
                  >对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
                </div>
                <!--<span class="refresh"><img src="../assets/refresh.png" alt=""></span>-->
              </div>
              <div class="errorInfo"></div>
              <div class="submit">
                <input
                  type="button"
                  @click="loginbut('signForm')"
                  v-loading.fullscreen.lock="fullscreenLoading"
                  value="登录"
                />
              </div >
                 <!-- <div class="passwordbox">
                  <span class="Forget" @click="Forgetpassword">忘记密码</span>
                </div> -->

            </div>
          </div>
          <div class="loginBg">
            <img src="../assets/loginBg.png" alt />
          </div>
        </div>
      </div>


      <div class="Copyright">
        <span class="myversion"></span>
        <p v-text="company"></p>

      </div>
  </div>

    <el-dialog
      title="选择企业"
      :visible.sync="typedialogVisible"
      width="30%"
      :before-close="handleClosetype"
    >
      <div class="logintype">
        <el-col :span="24" class="dataimg_height Live_page_list" id="homePage_Vod">
          <div class="listBox">
            <ul>
              <li class="fleft tll" v-for="(item, index) in logintypeData" :key="index">
                <el-radio @ v-model="radio" :label="item">{{item.enterprise_name}}</el-radio>
              </li>
            </ul>
          </div>
        </el-col>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="typedialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="userlogin">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
window.IsTips = false;
import $ from "jquery";

import axios from "axios";
// 获 //获取验证码 PostlLogincode
import {
  PostlLogincode,
  PostlLoginoptions,
  Postuserlogin,
  Postuserlogin2,
  getinit


} from "@/components/interface/common.js";
import crypto from "crypto";

var Codenumder = 1;
var countdown = 250;
var CodeVal = 0;
const canGetCookie = 1;
//是否支持存储Cookie 0 不支持 1 支持
const truelogin = ""; //账号
const truepwd = ""; //密码
var Mrcode = "";
var messages = "";
localStorage.removeItem("validCode");
var nums = "";
// var IsShowdialog=true;
//  console.log(nums)
//生成验证码
$(document).keypress(function(e) {
  // 回车键事件
  if (e.which == 13) {
    // console.log("点击了回车")
    $('input[type="button"]').click();
  }
});
export default {
  data() {
    return {
      company:"",
      radio: 0,
      user_role:"",
      loginpassword: "",
      logintypeData: [],
      typedialogVisible: false,
      item: {
        src: "",
        cipher: ""
      },
      fullscreenLoading: false,
      message: "Hello World!",
      dialogVisible: false
    };
  },
  mounted() {
    /** 设置版本号*/
    this.version();

    this.blank();
    this.Code();
    this.getNum();

    this.postcode();
    this.company=window.companyName;
     this.loading()
     this.user_role=""

    //      this.login_put()
  },
  methods: {
//    平台初始化
    version() {
      var _this = this
      var time={
        "timestamp": 0
      }

      getinit(time).then(function (res) {


        if (res.status === 200 && res.data.result == "ok") {
          window.mediaURL=res.data.data.stream_home_page;
          window.SkdURL=res.data.data.sdk_server_home_page;
          $(".myversion").html(res.data.data.sys_version);

        }
        if (res.data.result == "error") {
          _this.$message({
            message: res.data.error_description,
            type: 'warning'
          });

        }


      })

    },


    //忘记密码
    Forgetpassword(){
        this.$router.push({
                path: "/Forgetpassword"
              });

    },
    //开始二级登录
    userlogin() {
      let _this = this;
      let URL = ServerUrl;
      
      console.log(this.radio)

      if (this.radio.enterprise_name === "超级管理员"&& this.radio.user_role==="ROLE_SUPER_ADMIN") {
        var pwd = "";
        var login = $(".username").val();
        //    var pwd = $('.password').val();
        var code = $(".ValidateNum").val();
        let userparameter = {
          account: login,
          captcha: code,
          cipher: _this.item.cipher,
          is_encrypted_password: false,
          password: _this.loginpassword,
          purpose: "LOGIN"
        };
        console.log(userparameter);
        Postuserlogin(userparameter)
          .then(function(res) {
            //	跳转 超级管理员
            if (res.status === 200 && res.data.result == "ok") {
              var personparse = res.data.data;
              _this.typedialogVisible = false;

//              console.log(personparse)
//              console.log("我是用户名"+personparse.user
//.realname)
//
              localStorage.setItem(
                "Accesstoken",
                personparse.access_token.value
              );
              localStorage.setItem("realname", personparse.user
.realname);
              localStorage.setItem("Personparse", personparse);

              //console.log(localStorage);

              _this.$router.push({
                path: "/Home"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        var enterprise_id =this.radio.enterprise_id;
        var login = $(".username").val();
        var code = $(".ValidateNum").val();
        var logintype = this.logintypeData;
        // for (var index in logintype) {
        //   if (parseInt(index) === this.radio) {
        //     enterprise_id = logintype[index].enterprise_id;
        //   }
        // }
        let userparameter = {
          account: login,
          captcha: code,
          cipher: _this.item.cipher,
          enterprise_id: enterprise_id,
          is_encrypted_password: false,
          password: this.loginpassword,
          purpose: "LOGIN"
        };
        Postuserlogin2(userparameter).then(res => {
					  if (res.status === 200 && res.data.result == "ok") {
              var personparse = res.data.data;
              
              console.log(personparse);

//              console.log(personparse);

              _this.typedialogVisible = false;
              _this.typedialogVisible = false;
              // // 跳转到相应页面 Homeapp
              // 存企业 id  enterprise.id
              localStorage.setItem("EnterpriseId", personparse.enterprise.id);
              localStorage.setItem(
                "Accesstoken",
                personparse.access_token.value
              );

              localStorage.setItem("userId", personparse.user.id);
              localStorage.setItem("userPhone", personparse.user.phonenum);
              localStorage.setItem("Personparse", personparse);
              localStorage.setItem("realname", personparse.user
.realname);

              _this.$router.push({
                path: "/Homemain"
              });
            }
				});
       /*  this.$http.post(URL + "/admin/api/v1/user/login", userparameter).then(function(res) {
            // _this.reLogin(res.data.code); //提示帐号登陆、
            if (res.status === 200 && res.data.result == "ok") {
              var personparse = res.data.data;

              console.log(personparse);

              _this.typedialogVisible = false;
              _this.typedialogVisible = false;
              // // 跳转到相应页面 Homeapp
              // 存企业 id  enterprise.id
              localStorage.setItem("EnterpriseId", personparse.enterprise.id);
              localStorage.setItem(
                "Accesstoken",
                personparse.access_token.value
              );
              localStorage.setItem("Personparse", personparse);

              _this.$router.push({
                path: "/Homeapp"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });  */
      }
    },
    //获取验证
    postcode() {
      $(".errorInfo").html("");
      let _this = this;
      _this.item.src = "";
      let URL = ServerUrl;
      let param = {
        height: 40,
        length: 4,
        width: 95
      };
      PostlLogincode(param)
        .then(res => {
          if (res.status === 200 && res.data.result == "ok") {
            console.log(res);
            _this.item.src = "data:image/jpeg;base64," + res.data.data.image;
            _this.item.cipher = res.data.data.cipher;
          }
        })
        .catch(function(error) {
//          console.log(error);
        });
    },

    //開始一級登陆

    loginbut() {
      let _this = this;

      var login = $(".username").val();
      var pwd = $(".password").val();
      var code = $(".ValidateNum").val();
      if (code == "" || code == null || code == undefined) {
        $(".errorInfo").html("<span>*</span>输入验证码");
        return false;
      }
      if (login == "") {
        $(".errorInfo").html("<span>*</span>请输入您的账号");
        return false;
      } else if (pwd == "") {
        $(".errorInfo").html("<span>*</span>请输入密码");
        return false;
      } else if (
        localStorage.validCode !== "" &&
        localStorage.validCode !== undefined
      ) {
      } else {
        $(".errorInfo").html("");
      }
      let loginbutparam = {
        account: login,
        captcha: code,
        cipher: _this.item.cipher,
        is_encrypted_password: false,
        password: this.loginpassword,
        purpose: "LOGIN"
      };
//      console.log(loginbutparam);
      PostlLoginoptions(loginbutparam)
        .then(function(res) {
          console.log(res);
          // _this.reLogin(res.data.code); //提示帐号登陆、
          if (res.status === 200 && res.data.result == "ok") {
            var listtype = res.data.data.login_options;

            for (var its in listtype) {
//              console.log(listtype[its]);
              if (listtype[its].user_role === "ROLE_SUPER_ADMIN") {
                _this.user_role="ROLE_SUPER_ADMIN"
                listtype[its].enterprise_name = "超级管理员";
              }
            }
            _this.logintypeData = listtype;
            _this.radio=listtype[0]
           console.log(_this.logintypeData);
            _this.typedialogVisible = true;
          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: "warning"
            });

          }
        })
        .catch(function(error) {

        });
    },

    handleClose(done) {
      this.fullscreenLoading = false;
      this.$router.push({
        path: "/Home"
      });
    },
    handleClosetype(done) {
      this.typedialogVisible = false;
    },
    getNum() {
      nums = "";
      var chars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ];

      for (var i = 0; i < 32; i++) {
        var id = parseInt(Math.random() * 61);
        nums += chars[id];
      }
    },

    //			背景图适应屏幕

    loginopen() {
      // 	if(IsShowdialog){
      // 	this.dialogVisible=true;

      // }else{
      this.fullscreenLoading = false;
      this.$router.push({
        path: "/Home"
      });
      //
    },
    loginSuccess() {
      this.fullscreenLoading = false;
      this.$router.push({
        path: "/Home"
      });
    },
    loginfail() {
      this.fullscreenLoading = false;
      this.$router.push({
        path: "/Home"
      });
    },
    Loadingclose() {
      this.fullscreenLoading = false;
    },
    loading() {
      var wid = document.documentElement.clientWidth,
        hei = document.documentElement.clientHeight;

      var fheight = $(".Copyright").height();
        var content = document.getElementById("content-lkj")
//        console.log("content-lkj")
//        console.log(content.offsetHeight)
      $(".wraper").css("height", hei - fheight);
      $("#content-lkj").css("height", hei);
    },
    blank() {
      $(".errorInfo").html("");
    },
    Code() {
      this.showCheck();
    },
    showCheck(a) {
      a = Mrcode;
      CodeVal = a;
      // console.log('我是验证码' + a)
      var c = document.getElementById("myCanvas");
      if (c != null) {
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.font = "80px 'Hiragino Sans GB'";
        ctx.fillStyle = "#E8DFE8";
        ctx.fillText(a, 0, 100);
      }
    },

    //      fetchData() {
    //        //var personparse = JSON.parse(localStorage.person)
    //        let _this = this;
    //        var date = {
    //          "ClientKey": localStorage.clientKey,
    //          "Token": localStorage.token,
    //        }
    //        // console.log(date);
    //        this.myserver.getMenuModel(date).then(function (res) {
    //          var response = res.data;
    //          // console.log('登录时的导航');
    //          // console.log(res);
    //          window.navigationbar = response.data.items
    //          //          localStorage.setItem("Myitems",JSON.stringify( response.data.items));
    //          _this.items = response.data.items;
    //
    //        }).catch(function (error) {
    //
    //        });
    //      },

    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>
<style>
.loginForm .passwordbox {
  margin-top: 30px;
  text-align: right;

}
.loginForm .Forget:hover {
 color: rgb(148, 219, 171);

}
/* .logintype{
      position: absolute;
      top: 50%;
      left: 50%;
  } */
#content-lkj {
  position: relative;
}

#content-lkj .logintype {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(73, 70, 70, 0.2);
  z-index: 50;
}

#content-lkj .dataimg_height {
  position: absolute;
  top: 50%;
  left: 50%;
}

input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
      border: 1px solid #ffffff !important;
      background-color: #ffffff;
    }
.myversion {
  color: #4a567c;
  position: absolute;
  left: 20px;
}
</style>
