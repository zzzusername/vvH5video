<template>
  <div class="login">
    <el-header class="logheader">
      <el-row>
        <el-col class="loginblank " :xs="12" :sm="16" :md="18" :lg="18" :xl="18"><span class="ltm">1</span></el-col>
        <el-col :xs="6" :sm="4" :md="3" :lg="3" :xl="3">
          <div @mouseenter="isenter()" @mouseleave="isleave()">
            <el-button size="small" type="success" icon="el-icon-mobile-phone">APP</el-button>
            <div class="imgbox" v-if="isimgshow">
              <img src="../assets/APP.png" alt="">
            </div>
          </div>

        </el-col>
        <el-col :xs="6" :sm="4" :md="3" :lg="3" :xl="3">
          <el-button size="small" type="success" @click="listlogin()">登录</el-button>
          <el-button size="small" type="success" @click="listregister()">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="logmain" v-if="logmain">

      <el-row>
        <el-col class="loginblank ltm" :xs="0" :sm="2" :md="4" :lg="8" :xl="8"><span class="ltm">1</span></el-col>
        <el-col :xs="24" :sm="20" :md="16" :lg="8" :xl="8">
          <div class="logbox">
            <div>
              <el-input
                placeholder="手机号"
                prefix-icon="el-icon-s-custom" v-model="input1">
              </el-input>
            </div>
            <div class="input_Password">
              <el-input
                placeholder="密码"
                type="password"
                prefix-icon="el-icon-goods"
                v-model="input2">
              </el-input>
            </div>
            <div class="input_code ">
              <el-input
                placeholder="验证码"
                prefix-icon="el-icon-s-order"
                v-model="input3"
                class="codeinputbut">
              </el-input>
              <div class="code">
                <img class="codeimg" :src="item.src" alt @click="postcode()"/>

              </div>
            </div>


            <div class="Forget ">
              忘记密码？
            </div>
            <el-button class="loginbut" type="primary" @click="userlogin()">登录</el-button>


          </div>
        </el-col>
        <el-col :xs="0" :sm="2" :md="4" :lg="8" :xl="8"><span class="ltm"><span class="ltm">1</span></span></el-col>
      </el-row>

    </el-main>
    <!-- 注册部分 -->
    <el-main class="registermain" v-if="registermain">


      <el-row>
        <el-col class="registerblank ltm" :xs="0" :sm="2" :md="4" :lg="8" :xl="8">1 </el-col>
        <el-col :xs="24" :sm="20" :md="16" :lg="8" :xl="8">
          <div>
            <div class="Titlecon">
              <h1>视联云播</h1>
            </div>
            <div class="Welcome">
              <h4 v-html="artliat"></h4>

            </div>

            <div class="regphonebut">
              <el-input
                placeholder="手机号"
                prefix-icon="el-icon-s-custom" v-model="regphone ">
              </el-input>
            </div>

            <div v-if="regphoneshow">


              <el-button class="registerbut" type="primary" @click="phonenum">下一步</el-button>
            </div>
            <div v-if="enterpriseshow" class="qybox">
              <div class=" mtb5" >
                <el-input
                  placeholder="邮箱"
                  prefix-icon="el-icon-message" v-model="enterprise.email ">
                </el-input>
              </div>
              <div  class=" mtb5" >
              <el-input
                placeholder="姓名"
                prefix-icon="el-icon-s-custom" v-model="enterprise.realname ">
              </el-input>
              </div>
              <div  class=" mtb5" >
                <el-input
                  placeholder="密码"
                  type="password"
                  prefix-icon="
el-icon-goods" v-model="enterprise.password1 ">
                </el-input>
              </div>
              <div  class=" mtb5" >
                <el-input
                  placeholder="确认密码"
                  type="password"
                  prefix-icon="
el-icon-goods" v-model="enterprise.password2">
                </el-input>
              </div>
              <div  class=" mtb5 sexbox" >
                <div class="sex">性别</div>
                <div class="optionbut">

                  <el-radio-group v-model="enterprise.sex">
                    <el-radio label="BOY">男</el-radio>
                    <el-radio label="GIRL">女</el-radio>
                  </el-radio-group>

                </div>


              </div>
              <!--<div class="regVerificationCode mtb5">-->
              <!--<el-input-->
              <!--placeholder="验证码"-->
              <!--prefix-icon="el-icon-s-order" v-model="enterprise.verifi_code">-->
              <!--</el-input>-->
              <!--<el-button id="regcode" size="mini" v-html="countdown"  @click="isshowinstallclick"-->
              <!--type="info"></el-button>-->


              <!--</div>-->
              <el-button class="registerbut" type="primary" @click="registergo('qy')">注册</el-button>

            </div>
            <div v-if="regmediashow" class="lmtbox">
              <div class="input_code  mtb5 ">
                <el-input
                  placeholder="验证码"
                  prefix-icon="el-icon-s-order"
                  v-model="lmtcode"
                  class="codeinputbut">
                </el-input>
                <div class="regcode">
                  <img class="codeimg fletleft" :src="item.src" alt @click="postcode()"/>

                </div>
              </div>
              <div class="regVerificationCode mtb5">
                <el-input
                  placeholder="手机验证码"
                  prefix-icon="el-icon-s-order" v-model="enterprise.verifi_code">
                </el-input>
                <el-button id="regcode" size="mini" v-html="countdown"  @click="isshowinstallclick('lmt')"
                           type="info"></el-button>


              </div>
              <div class=" mtb5" >
                <el-input
                  placeholder="邮箱"
                  prefix-icon="el-icon-message" v-model="enterprise.email ">
                </el-input>
              </div>
              <div  class=" mtb5" >
                <el-input
                  placeholder="姓名"
                  prefix-icon="el-icon-s-custom" v-model="enterprise.realname">
                </el-input>
              </div>
              <div  class=" mtb5" >
                <el-input
                  placeholder="密码"
                  type="password"
                  prefix-icon="el-icon-goods" v-model="enterprise.password1 ">
                </el-input>
              </div>
              <div  class=" mtb5" >
                <el-input
                  placeholder="确认密码"
                  type="password"
                  prefix-icon="el-icon-goods" v-model="enterprise.password2">
                </el-input>
              </div>
              <div  class=" mtb5 sexbox" >
                <div class="sex">性别</div>
                <div class="optionbut">

                    <el-radio-group v-model="enterprise.sex">
                      <el-radio label="BOY">男</el-radio>
                      <el-radio label="GIRL">女</el-radio>
                    </el-radio-group>

                </div>


              </div>

              <el-button class="registerbut" type="primary" @click="registergo('lmt')">注册</el-button>

            </div>

          </div>

        </el-col>
        <el-col :xs="0" :sm="2" :md="4" :lg="8" :xl="8"><span class="ltm">1</span></el-col>
      </el-row>
    </el-main>
    <!-- xs	<768px
    sm	≥768px
    md	≥992px
    lg	≥1200px
    xl	≥1920px -->
    <el-dialog
      title="选择企业"
      :visible.sync="typedialog"
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
  import $ from 'jquery'
  import axios from "axios";
  import {
    PostlLogincode,
    applogin,
    phone_verificode,//发送短信验证码
    getcheck_phonenum,//检查号码是否被注册
    platform_user_register,//流媒体用户注册
    enterprise_user_register//企业用户注册


  } from "./interface/common";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        loglist: {

          "captcha": "",
          "cipher": "",
          "client_type": "MOBILE",

          "enterprise_id": "1",
          "password": "",
          "phonenum": "",
          "purpose": "LOGIN",
          "timestamp": 0,
        },

        issecond: 60,
        countdown: "获取验证码",
        logmain: true,
        regphoneshow: true,//是否显示手机下一步

        enterprise:{
          "email": "",
          "enterprise_id": "1",
          "password1":"",
          "password2":"",
          "phonenum":"",
          "realname": "",
          "sex":"BOY",
          "timestamp": 0,
          "verifi_code": ""
        },
        isimgshow: false,
        enterpriseshow: false, //是父显示企业注册
        regmediashow: false, //是父显示流媒体注册
        registermain: false,
        typedialog: false,
        logintypeData: [],
        msg: '登录',
        input1: "",
        input2: "",
        input3: "",
        lmtcode: "",//流媒体注册图片验证码
        cipher: "",//图片验证码验证
        item: {
          src: "",
          cipher: ""
        },
        regphone: "",
        regcode: "",
        regpassword: "",
        regname: "",
        artliat: "欢迎注册",



      }
    },
    mounted() {
      this.postcode();

    },
    methods: {
      //检查号码是否注册过{
      phonenum() {
        let _this = this;
        if(this.regphone==""){
          this.$message({
            message: '手机号不允许为空',
            type: 'warning'
          });
        }else {
          var par = {
            "enterprise_id": "1",
            "phonenum": this.regphone,
            "timestamp": 0
          }

          getcheck_phonenum(par)
            .then(res => {
              console.log(res)
//              "check_platform_error","流媒体用户未注册"

              if (res.data.error === "check_platform_error") {

                _this.regmediashow=true
                _this.regphoneshow=false
                _this.artliat="欢迎注册流媒体户"

              } else if (res.data.error === "check_enterprise_error") {
                //"check_enterprise_error","企业用户未注册"

                _this.enterpriseshow=true

                _this.regphoneshow=false

                _this.artliat="欢迎注册企业用户"


              }
              else if (res.status === 200 && res.data.result == "ok") {

                _this.$message({
                  message: '用户已注册，请返回登录',
                  type: 'success'
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });

        }


      },
      registergo(e){
        var _this = this;
        var flag=true
        if(e=="lmt"){
          console.log(this.enterprise)
          if (this.enterprise.verifi_code == '') {
            this.$message({
              message: '验证码不允许为空',
              type: 'warning'
            });
            flag = false;
          } else if (this.enterprise.email == '') {
            this.$message({
              message: '邮箱不允许为空',
              type: 'warning'
            });
            flag = false;
          } else if (this.enterprise.realname == '') {
            this.$message({
              message: '姓名不允许为空',
              type: 'warning'
            });
            flag = false;
          }else if (this.enterprise.password1 == '') {
            this.$message({
              message: '密码不允许为空',
              type: 'warning'
            });
            flag = false;
          }else if (this.enterprise.password2 == '') {
            this.$message({
              message: '确认密码不允许为空',
              type: 'warning'
            });
            flag = false;
          }else  if(this.enterprise.password2 != this.enterprise.password1) {
            this.$message({
              message: '两次密码输入不一样，请重新输入',
              type: 'warning'
            });
            flag = false;
          }
        if(flag){
            var refliat= {
              "email": this.enterprise.email,
              "enterprise_id":"1",
              "password":this.enterprise.password1,

              "phonenum":this.regphone,
              "realname": this.enterprise.realname,
              "sex":this.enterprise.sex,
              "timestamp": 0,
              "verifi_code": this.enterprise.verifi_code
          };
          platform_user_register(refliat)
            .then(res => {
              console.log(res)


              if (res.status === 200 && res.data.result == "ok") {  _this.$message({
                message: "注册成功",
                type: "success"
              });
                _this.listlogin()


              } else {
                _this.$message({
                  message: res.data.error_description,
                  type: "warning"
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });

        }


        }
        else if (e=="qy"){
          console.log(this.enterprise)

        if (this.enterprise.email == '') {
            this.$message({
              message: '邮箱不允许为空',
              type: 'warning'
            });
            flag = false;
          } else if (this.enterprise.realname == '') {
            this.$message({
              message: '姓名不允许为空',
              type: 'warning'
            });
            flag = false;
          }else if (this.enterprise.password1 == '') {
            this.$message({
              message: '密码不允许为空',
              type: 'warning'
            });
            flag = false;
          }else if (this.enterprise.password2 == '') {
            this.$message({
              message: '确认密码不允许为空',
              type: 'warning'
            });
            flag = false;
          }else  if(this.enterprise.password2 != this.enterprise.password1) {
            this.$message({
              message: '两次密码输入不一样，请重新输入',
              type: 'warning'
            });
            flag = false;
          }
          if(flag){
            var refliat= {
              "email": this.enterprise.email,
              "enterprise_id":"1",
              "password":this.enterprise.password1,

              "phonenum":this.regphone,
              "realname": this.enterprise.realname,
              "sex":this.enterprise.sex,
              "timestamp": 0,
            };
            enterprise_user_register(refliat)
              .then(res => {
                console.log(res)


                if (res.status === 200 && res.data.result == "ok") {  _this.$message({
                  message: "注册企业用户成功",
                  type: "success"
                });
               _this.listlogin()


                } else {
                  _this.$message({
                    message: res.data.error_description,
                    type: "warning"
                  });
                }
              })
              .catch(function (error) {
                console.log(error);
              });

          }


        }

      },

      // 获取验证码
      isshowinstallclick(e) {
        var that = this;
        let _this = this;

        var lang=true
        if(e=="lmt"){
          if(this.lmtcode==""){
            this.$message({
              message: '图片验证不允许为空',
              type: 'warning'
            });
            lang = false;
          }else if(this.regphone==""){
            this.$message({
              message: '手机号不允许为空',
              type: 'warning'
            });
            lang = false;
          }
          if(lang){
            this.getphone_verificode()
          }



        }

      },

      //获取手机验证码
      getphone_verificode(){
        var that = this;
        let _this = this;

        var phone = {
          "captcha": this.lmtcode,
          "cipher": this.cipher,
          "operation_type": 1,
          "phonenum": parseInt(this.regphone),
          "purpose": "LOGIN",
          "timestamp": 0,

        };
        if (this.issecond == 60) {
          phone_verificode(phone)
            .then(res => {
              if (res.status === 200 && res.data.result == "ok") {
                console.log(res);
              } else {
                _this.$message({
                  message: res.data.error_description,
                  type: "warning"
                });
              }
            })
            .catch(function (error) {
//          console.log(error);
            });

        }

        var flags = 1;

        this.issecond = this.issecond - 1;


        this.countdown = this.issecond + "秒后重新发送";
        if (this.issecond == 0) {
          this.countdown = "获取验证码";
          flags = 1;
          this.issecond = 60;
            clearInterval(myVar);

          return;
        }
        var myVar = setTimeout(function () {
          that.getphone_verificode();
        }, 1000);
      },
      timeform(){

      },

      //获取图片验证
      postcode() {
        $(".errorInfo").html("");
        let _this = this;
        _this.item.src = "";

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
              _this.loglist.cipher = res.data.data.cipher;
              _this.cipher = res.data.data.cipher;
            }
          })
          .catch(function (error) {
//          console.log(error);
          });
      },
      userlogin() {
        console.log("登录")
        let _this = this;
        var flag = true;

        if (this.input1 == '') {
          this.$message({
            message: '手机号不允许为空',
            type: 'warning'
          });
          flag = false;
        } else if (this.input2 == '') {
          this.$message({
            message: '密码不允许为空',
            type: 'warning'
          });
          flag = false;
        } else if (this.input3 == '') {
          this.$message({
            message: '验证码不允许为空',
            type: 'warning'
          });
          flag = false;
        }


        var logindata = {
          "captcha": this.input3,
          "cipher": this.loglist.cipher,
          "client_type": "MOBILE",

          "enterprise_id": "1",
          "password": this.input2,
          "phonenum": this.input1,
          "purpose": "LOGIN",
          "timestamp": 0,
        }
        if (flag) {
          applogin(logindata)
            .then(res => {
              if (res.status === 200 && res.data.result == "ok") {
                console.log(res);
                var personparse=res.data.data
                localStorage.setItem("realname", personparse.user.realname);
                localStorage.setItem("enterprise_user_id", personparse.user.enterprise_user_id);
                localStorage.setItem("Accesstoken", personparse.token
                  .value);
                localStorage.setItem("refresh_token", personparse.token.refresh_token.value);

                _this.$router.push(
                  { path: "/Home"}
                )


              } else {
                _this.$message({
                  message: res.data.error_description,
                  type: 'warning'
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }


      },
      //鼠标滑过事件
      isenter() {
        console.log("1")
        this.isimgshow = true

      },
      isleave() {
        this.isimgshow = false
      },


      listlogin() {
        this.enterprise={
          "email": "",
            "enterprise_id": "1",
            "password1":"",
            "password2":"",
            "phonenum":"",
            "realname": "",
            "sex":"BOY",
            "timestamp": 0,
            "verifi_code": ""
        },
        this.postcode();
        this.logmain = true
        this.regphone = '';
        this.registermain = false
        console.log("222")


      },
      //点击注册
      listregister() {
        this.artliat="欢迎注册",
        this.postcode();
        this.enterpriseshow=false
        this.regmediashow=false
        this.regphoneshow=true
        this.logmain = false
        this.registermain = true
        console.log("11")


      },
      handleClosetype() {

      }

    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .login {
   input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
      border: 1px solid #ffffff !important;
      background-color: #ffffff;
    }

    .qybox{
      .sexbox{
        overflow: hidden;

      }
      .sex{
        float: left;
        margin-left: 20%;

      }
      .optionbut{
        float: left;
        margin-left: 20%;
      }

    }
    .lmtbox{
      .input_code{
        overflow: hidden;
      }
      .codeinputbut,.regcode {
        width: 50%;
        float: left;
      }
      .fletleft{
        float: right;
      }
      .sexbox{
        overflow: hidden;

      }
      .sex{
        float: left;
        margin-left: 20%;

      }
      .optionbut{
        float: left;
        margin-left: 20%;
      }

    }


    .imgbox {
      position: absolute;
    }
    .ltm {
      color: transparent;
    }
    .logmain {
      .logbox {
        margin-top: 10%;
        width: 70%;
        margin-left: 15%
      }
      .input_code {
        width: 100%;
        margin-top: 10%;
      }
      .codeinputbut {
        width: 50%;
        float: left;
      }
      .code {
        float: left;
        .codeimg {
          float: right;
        }

        width: 50%;
      }
      .Forget {
        float: right;
        text-align: right;
        color: rgb(30, 97, 184);
        margin-top: 10px;
      }
      .Forget:hover {
        color: rgb(5, 29, 61);
      }
      .loginbut {
        margin-top: 10%;
        width: 50%;
        margin-left: 25%
      }
      .input_Password {

        margin-top: 10%
      }
      margin-top: 10%
    }
    .logheader {
      line-height: 60px;
    }
    height: 100%;
    background-color: #909399;
    .registermain {
      .Titlecon {
        text-align: center;
      }
      .registerbut {
        margin-top: 10%;
        width: 70%;
        margin-left: 15%
      }
      .regVerificationCode {
        position: relative;
        #regcode {
          position: absolute;
          right: 5%;
          top: 20%;

        }

      }
      .regphonebut {
        margin-top: 10%;
        width: 70%;
        margin-left: 15%
      }
      .Welcome {
        h4 {
          height: 16px;
          line-height: 16px;
        }
        height: 20px;
        line-height: 20px;
        border-bottom: 1px solid #181717;
        margin-top: 5%;
        text-indent: 2em

      }
    }

  }


</style>
