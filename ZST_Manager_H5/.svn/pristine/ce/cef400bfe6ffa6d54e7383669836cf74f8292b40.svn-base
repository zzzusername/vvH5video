<template>
  <div class="wrapper">
    <Header logoName="掌上通管理平台" :isForgetpas='false'></Header>
    <div class="main">
        <div class="Pasontent">
            <div class="pason-cont">
                <div class="hd">
                    <ul class="for-tab">
                        <li v-for="item in tabData" :key="item.key" :class="item.isON ? 'on' : '' ">
                            <div v-if="item.isLine">
                                <div  class="imgTab" :class="item.class"></div>
                                <span>{{item.message}}</span>
                            </div>
                            <div v-if="!item.isLine">
                                  <span class="line"></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="bd">
                    <div class="authenticate" v-if='tabNumber === "first" '>
                        <p class="prompt">您正在使用 “验证短信” 进行校验，请填写你要找回密码的账号！</p>
                        <div class="item">
                            <input type="text" placeholder="请输入手机号" v-model="parameter.phone">
                        </div>
                        <div class="item">
                            <input class="small" type="text" placeholder="请输入图形验证码" v-model="parameter.code">
                            <img :src='parameter.src' alt="" class="imgCode" @click="switchVerificationcode">
                        </div>
                        <div class="item">
                            <input class="small" placeholder="请输入短信验证码" v-model="parameter.phoneCode">
                            <span v-if='!canClick' class="btnSpan" @click="getVerificationphoneCode">获取验证码</span>
                            <span v-else class="btnSpan">{{countdown}}</span>
                        </div>
                        <button class="nextBtn" @click="resetPassword">下一步</button>
                    </div>
                    <div class="authenticate" v-else-if='tabNumber === "second" '>
                        <p class="prompt">您正在修改密码，请填写您的新密码！</p>
                        <div class="item">
                            <input type="text" placeholder="请输入新密码" v-model="parameter.passworld">
                        </div>
                        <div class="item">
                            <input type="text" placeholder="请再次输入新密码" v-model="parameter.passworldagain">
                        </div>
                        <button class="nextBtn" @click="makeSuremodify">确认修改</button>
                    </div>
                     <div class="authenticate findSucce" v-else-if='tabNumber === "third" '>
                        <img class="findSuccess" src="../assets/findSuccess.png" alt="#">
                        <p>重置成功，您重置了您的流媒体密码！</p>
                        <span>下次登录时请使用新密码进行登录</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import Header from "./Header";

/* api */
// getResetpasswordCaptcha 获取 图形验证码
// sendSmsverificationCode 获取短信验证码
// resetPassword 重置密码
// checkSmsverificationCode  验证 图形验证码
import {getResetpasswordCaptcha, sendSmsverificationCode,resetPassword,checkSmsverificationCode} from '@/components/interface/common.js'

export default {
  data: function() {
    return {
        tabData : [
            {
                class : 'oneImg',
                message : '验证身份',
                isLine : true,
                isON : true,
            },
            {
                isLine : false,
                isON : false,
            },
            {
                class : 'twoImg',
                message : '重置密码',
                isLine : true,
                isON : false,
            },
            {
                isLine : false,
                isON : false,
            },
            
            {
                class : 'threeImg',
                message : '重置成功',
                isLine : true,
                isON : false,
            },
        ],
        isShow : true,
        // 切换 项目 默认 第一个
        tabNumber : 'first', 
        // 图片验证码
        imgCode : '',
        parameter: {
            phone: "",
            code: "",
            // 图片地址
            src : '',
            // 验证提交信息
            cipher: "",
            // 手机验证码
            phoneCode : '',
            //  输入密码
            passworld : '',
            // 确定密码
            passworldagain : '',
        },
        // 倒计时
        countdown : '获取验证码',
        totalTime: 60,
        // 是否展示
        canClick: false
    };
  },
  components: {
    Header,
  },
  destroyed: function() {
    console.log("页面关闭了");
  },
  methods : {
      // 获取图形 验证码
    getInitimgCode(){
        // getResetpasswordCaptcha
        let objData = {
            height: 40,
            length: 4,
            width: 95
        }
        getResetpasswordCaptcha(objData).then(res => {
          if (res.status === 200 && res.data.result == "ok") {
            console.log(res);
            this.parameter.src = "data:image/jpeg;base64," + res.data.data.image;
            this.parameter.cipher = res.data.data.cipher;
          }
        });
        
    },
    // 切换 验证码
    switchVerificationcode(){
        this.getInitimgCode();
    },
    //获取手机验证码
    getVerificationphoneCode(){
        let _this = this;
        // 获取手机验证码  验证输入 图形 验证码是否正确
        let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
         
        // 验证手机好吗
        if(!reg.test(this.parameter.phone)){
            _this.$message.error('手机号码格式不正确');
            return false;
        }
        
        let totalTime = this.totalTime;

        this.canClick = true  //这里重新开启

        let objData = {
            "assertUser" : true,
            "captcha" : this.parameter.code,
            "captchaPurpose" : 'RESET_PASSWORD',
            "cipher": this.parameter.cipher,
            "phonenum": this.parameter.phone,
            "smsVerificationCodePurpose": "RESET_USER_PASSWORD",
        }

        sendSmsverificationCode(objData).then(res => {
            if (res.status === 200 && res.data.result == "ok") {
                // 倒计时
                if(this.canClick){
                        let clock = window.setInterval(() => {
                            this.countdown = totalTime + 's后重新发送'
                            totalTime--
                        
                        if (totalTime < 0) {
                            this.countdown = '获取验证码';
                            window.clearInterval(clock)
                            this.canClick = false  
                        }
                    },1000)  
                }

            }else{
                // 错误提示信息 账号不存在
                _this.$message.error(res.data.error_description);
            }
        });

    },
    // 下一步 重置密码
    resetPassword(){
        if(this.parameter.phoneCode == ''){
            this.$message.error('请输入手机验证码')
            return false;
        }

        let objData = {
            "phonenum": this.parameter.phone,
            "smsVerificationCode" : this.parameter.phoneCode,
            "smsVerificationCodePurpose": 'RESET_USER_PASSWORD',
        }
        // checkSmsverificationCode
         checkSmsverificationCode(objData).then(res => {
            if (res.status === 200 && res.data.result == "ok") {
                console.log(res);
                this.tabData[2].isON = true;
                this.tabNumber = "second";
            }else{
                this.$message.error(res.data.error_description);
            }
        });

    },
    // 确定修改
    makeSuremodify(){
        console.log('确定修改');
        let _this = this;
        // resetPassword
        let objData = {
            is_encrypted_password : false,
            new_password : this.parameter.passworld,
            phonenum : this.parameter.phone,
            sms_verification_code : this.parameter.phoneCode,
        }
        // 验证输入密码是否一直
        if(this.parameter.passworld != this.parameter.passworldagain ){
            this.$message.error('两次密码输入不一致');
            return false;
        }

        resetPassword(objData).then(res => {
            if (res.status === 200 && res.data.result == "ok") {
                console.log(res);
                this.tabData[4].isON = true;
                this.tabNumber = "third";
                // 倒计时 
                setTimeout(function(){
                    _this.$router.push({
                        path: "/"
                    });
                },3000)
            }else{
                // 错误提示信息 账号不存在
                this.$message.error(res.data.error_description);
            }
        });
    }
  },
  mounted() {
    var hei = document.documentElement.clientHeight;
    // 初始化高度
    $(".wrapper").css("height", hei);
    $('.Pasontent').css('height', hei - $(".head").height() - 60)
    // 动态计算
    $(window).resize(function() {
      var appH = $("#app").height();
      $(".wrapper").height(appH);
      $('.Pasontent').css('height', appH - $(".head").height() - 60)
    });
    // 获取图形 验证码
    this.getInitimgCode()
  }
};
</script>
<style scoped>
.pason-cont .hd{
    padding-top: 140px;
}
/* tab  */
.for-tab{
    margin-bottom: 60px;
    overflow: hidden;
}
.for-tab li{
    float: left;
    text-align: center;
}
.for-tab li .imgTab{
    margin: 0 auto 12px;
    background: url(../assets/one.png) no-repeat;
    display: block;
    width: 46px;
    height: 46px;
    border-radius: 50%;
}
/* tab切换 */
.for-tab li .oneImg{
    background: url(../assets/one.png) no-repeat;
}
.for-tab .on .oneImg{
    background: url(../assets/one_on.png) no-repeat;
}
.for-tab li .twoImg{
    background: url(../assets/two.png) no-repeat;
}
.for-tab .on .twoImg{
    background: url(../assets/two_on.png) no-repeat;
}
.for-tab li .threeImg{
    background: url(../assets/three.png) no-repeat;
}
.for-tab .on .threeImg{
    background: url(../assets/three_on.png) no-repeat;
}


/* tab切换 */
.for-tab li span{
    font-size: 16px;
    color: #7C88AF;
}
.for-tab .on span{
    color:rgba(49,230,187,1);
}
.for-tab .line{
    position: relative;
    top: 20px;
    float: left;
    width:312px;
    height:4px;
    background:rgba(255,255,255,1);
}
.authenticate .prompt{
    margin-bottom: 43px;
    padding-bottom: 17px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height: 14px;
    border-bottom: 1px solid rgba(124,136,175,1);
}
.authenticate .item{
    width: 322px;
    margin: 0 auto 20px;
    overflow: hidden;
}
.authenticate .item:last-child{
    margin-bottom:40px;
}
.authenticate .item input{
    width:100%;
    height:38px;
    line-height: 38px;
    background:rgba(27,39,76,1);
    border:1px solid rgba(59,72,114,1);
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:42px;
    text-indent: 1em;
}
.authenticate .item input::placeholder{
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(124,136,175,1);
}
.authenticate .item .small{
    float: left;
    margin-right: 10px;
    width:186px;
}
.imgCode{
    width: 124px;
    height: 40px;
}
.authenticate .item .btnSpan{
    display: inline-block;
    width: 124px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(87,226,155,1);
}
.Pasontent{
    margin: 30px;
    background: #354166;
}
.pason-cont{
    width: 817px;
    margin: 0 auto;
}
.btnSpan{
    cursor: pointer;
}
.nextBtn{
    display: block;
    margin: 0 auto;
    width:320px;
    height:38px;
    line-height: 38px;
    background:linear-gradient(90deg,rgba(49,227,196,1),rgba(49,244,144,1));
    box-shadow:0px 1px 6px 0px rgba(38, 113, 57, 0.35);
    border-radius:6px;  
    font-size:16px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.findSucce{
    text-align: center;
}
.findSucce  p{
    margin-bottom: 19px;
    font-size:24px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:24px;
}
.findSucce span{
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(124,136,175,1);
    line-height:24px;
}
.findSuccess{
    margin: 0 auto 40px;
    display: block;
    width: 50px;
    height: 50px;

}

</style>


