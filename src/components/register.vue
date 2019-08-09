<template>
  <div class="login">
    <el-header class="logheader">
      <el-row>
        <el-col class="loginblank ltm" :xs="12" :sm="16" :md="18" :lg="18" :xl="18">1</el-col>
        <el-col :xs="6" :sm="4" :md="3" :lg="3" :xl="3">
          <el-button size="small" type="success" icon="el-icon-mobile-phone">APP</el-button>
        </el-col>
        <el-col :xs="6" :sm="4" :md="3" :lg="3" :xl="3">
          <el-button size="small" type="success" @click="listlogin()">登录</el-button>
          <el-button size="small" type="success"  @click="listregister()">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="logmain">
      <el-row>
        <el-col class="loginblank ltm" :xs="0" :sm="2" :md="4" :lg="8" :xl="8">1 </el-col>
        <el-col :xs="24" :sm="20" :md="16" :lg="8" :xl="8">
          <div>
            <div>
              <el-input
                placeholder="手机号"
                prefix-icon="el-icon-s-custom" v-model="input1">
              </el-input>
            </div>
            <div class="input_Password">
              <el-input
                placeholder="密码"
                prefix-icon="el-icon-goods"
                v-model="input2">
              </el-input>
            </div>
            <div class="input_code">
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
              <el-button class="loginbut" type="primary">登录</el-button>


          </div>
        </el-col>
        <el-col :xs="0" :sm="2" :md="4" :lg="8" :xl="8">1 </el-col>
      </el-row>
    </el-main>
    <!-- xs	<768px
    sm	≥768px
    md	≥992px
    lg	≥1200px
    xl	≥1920px -->
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from "axios";
  import {
    PostlLogincode,
  } from "./interface/common";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '登录',
        input1: "",
        input2: "",
        input3: "",
        item: {
          src: "",
          cipher: ""
        },
      }
    },
    mounted() {
      this.postcode();

    },
    methods: {
      //获取验证
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
            }
          })
          .catch(function (error) {
//          console.log(error);
          });
      },
         listlogin(){
              console.log("2222222")
           this.$router.push({
             path: "/login"
           });

          },
          listregister(){
            console.log("11")
           this.$router.push({
             path: "/register"
           });


    },

    },
  
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .login {
    .logmain {
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

  }


</style>
