<template>
    <div class="loginBox2">
        <div class="header2">
            <img src="../../assets/loginlogo2.png" alt="">
            <p>广州卫计委四分屏会议</p>
        </div>
        <div class="loginBg22">
            <div class="login">
                <form>
                    <div class="errorInfo"></div>
                    <div class="userName inputBg">
                        <span><img src="../../assets/user.png" alt=""></span>
                        <input class="username" name="login" v-model="username" @blur="ResName" type="text" maxlength="16" autocomplete="off" placeholder="请输入用户名">
                    </div>
                    <div class="passWord inputBg">
                        <span><img src="../../assets/pass.png" alt=""></span>
                        <input class="password" name="pwd" v-model="password" @blur="ResPwd" type="password" maxlength="16" autocomplete="off" placeholder="请输入密码">
                    </div>
                    <div class="passBox">
                            <div class="checkBox">
                                <el-checkbox v-model="checked" @change="SavePassword">记住密码</el-checkbox>
                            </div>  
                            <span class="forget"><a href="javascripg:;">忘记密码?</a></span>
                    </div>
                    <div class="submit">
                        <input type='button' @click="clickSignIn" value='登录'>
                    </div>
                </form>
            </div>
        </div>
        <div class="footer2">
            <p>视联动力信息技术股份有限公司&nbsp;&nbsp;版权所有</p>
            <p>版本：{{value}}</p>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
    $(document).keypress(function(e) {// 回车键事件
        if(e.which == 13) {
            console.log("点击了回车")
            $('input[type="button"]').click();
        }
    });
    export default {
        data() {
            return {
                value: '',
                checked: false,
                username: 'admin',
                password: '123456',
            }
        },
        mounted() {
            var version = Version;
            this.value = version;
            var wheight = $(window).height();
            $('.loginBox2').height(wheight);
            $(window).resize(function () {
                var resHeight = $(window).height();
                $('.loginBox2').height(resHeight);
            })
            if(localStorage.SaveName){
                this.checked = true;
                this.username = localStorage.SaveName;
                this.password = localStorage.SavePass;
            }
            $('.inputBg').each(function(){
                var _this = this;
                $(this).find("input").focus(function(){
                    $(_this).css("border-color","#1EBAA5");
                    $(_this).css("transition", "all 0.2s linear");
                });
                $(this).find("input").blur(function(){
                    $(_this).css("border-color","#BFBFBF");
                    $(_this).css("transition", "all 0.2s linear");
                });
            });
        },
        methods: {
            ResName(){
                if(this.username == localStorage.SaveName){
                    this.username = localStorage.SaveName;
                }else {
                    this.username = this.username;

                }
            },
            ResPwd(){
                if(this.password == localStorage.SavePass){
                    this.password = localStorage.SavePass;
                }else{
                    this.password = this.password
                }
            },
            clickSignIn(){//登陆
                if(this.username === ''){
                    $('.errorInfo').html('<p>请输入账户</p>');
                    $('.userName').css("border-color","#DA5132");
                }else if(this.password === '' ){
                    $('.errorInfo').html('<p>请输入密码</p>');
                    $('.passWord').css("border-color","#DA5132");
                }
                if(this.username != '' && this.password != ''){
                    let URL = ServerUrl;
                    var _this = this;
                    var datatest = {
                        name: this.username,
                        pwd: this.password
                    };
                    if(window.localStorage){
                        localStorage.setItem('userName', this.username)     //账号
                        localStorage.setItem('Password', this.password)     //密码
                    }
                    if(this.checked == true){
                        localStorage.setItem('SaveName', this.username)     //账号
                        localStorage.setItem('SavePass', this.password)     //密码
                    }
                    window.open('../static/ActiveX.html')
                    // $.ajax({
                    //     type: "POST",
                    //     url: URL + "/api/BackEndUser/BackLogin",
                    //     cache: false,
                    //     dataType: "json",
                    //     data: { user: JSON.stringify(datatest) },
                    //     header2s: {
                    //         applicationtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJKd3RTZXJ2ZXIiLCJzdWIiOiLljLvnlpfnrqHnkIblubPlj7DlkI7lj7AiLCJqdGkiOiJkNWQ0OWY0OS1kYzUzLTQ4ZGEtYmRiNS05MTFiYjNlYmVmMTQiLCJpYXQiOjE1Mjg3MTQxODYsIkFwcGlkIjoiMyIsIm5iZiI6MTUyODcxNDE4NiwiZXhwIjoxNTI5MzE4OTg2fQ.GsnK09pfE7j1sxt_NnpDY-6TCjzKNO7RHvvusu_R8HQ"
                    //     },
                    //     success: function(data) {
                    //         console.log(data);
                    //         if(data.Result === true){
                    //             if(window.localStorage){
                    //                 localStorage.setItem('token', data.Item);
                    //             }
                    //             _this.$message({
                    //                 message: data.Message,
                    //                 type: 'success'
                    //             });
                    //             _this.goHome();
                    //         }else{
                    //             $('.errorInfo').html('<p>账户或密码错误</p>');
                    //             _this.$message({
                    //                 message: data.Message,
                    //                 type: 'info'
                    //             });
                    //         }
                    //     }
                    // });
                }
                
            },
            goHome(){ //登陆跳转
                this.$router.push({
                    path: "/Home"
                })
            },
            SavePassword(val){
                if(this.checked === true){
                    if(window.localStorage){
                        localStorage.setItem('SaveName', this.username)     //账号
                        localStorage.setItem('SavePass', this.password)     //密码
                    }
                }else{
                    if(window.localStorage){
                        localStorage.removeItem('SaveName')     //账号
                        localStorage.removeItem('SavePass')     //密码
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    .loginBox2 {
        max-width: 1920px;
        min-width: 1366px;
        height: 100%;
        margin: 0 auto;
        background: #fafafa;
        .header2 {
            width: 100%;
            height: 15.74%;
            color: #1db09c;
            background: url(../../assets/logoBG1.png) no-repeat;
            background-size: cover;
            overflow: hidden;
            img {
                float: left;
                margin: 44px 0 0 70px;
            }
            p {
                color: #1db09c;
                height: 100%;
                font-size: 30px;
                overflow: hidden;
                padding-left: 20px;
                line-height: 156px;
            }
        }
        .loginBg22 {
            width: 100%;
            height: 68.51%;
            overflow: hidden;
            background: url(../../assets/logoBG2.png) no-repeat;
            background-size: cover;
            .login {
                width: 330px;
                height: 378px;
                overflow: hidden;
                background: #fff;
                border-radius: 6px;
                padding: 0px 50px 0;
                margin: 9.5% 0px 0px 54.32%;
                .errorInfo {
                    height: 40px;
                    margin-top: 6px;
                    font-size: 16px;
                    line-height: 40px;
                    text-align: center;
                    p {
                        overflow: hidden;
                        color: #DA5132;
                        font-weight: bold;
                        background: #FCEDB7;
                        border-radius: 4px;
                        box-shadow: 0px 1px 4px #D2D2D2;
                    }
                }
                .userName {
                    margin: 10px 0px 40px;
                }
                .inputBg {
                    overflow: hidden;
                    background: #fff;
                    border-radius: 4px;
                    padding: 10px 0px 11px 9px;
                    border: 1px #BFBFBF solid;
                    span {
                        float: left;
                        width: 26px;
                        height: 27px;
                        overflow: hidden;
                        text-align: center;
                        img {
                            padding-top: 3px;
                        }
                    }
                    input {
                        width: 86%;
                        float: left;
                        height: 27px;
                        color: #777;
                        font-size: 16px;
                        margin-left: 10px;
                        line-height: 27px;
                        border: none;
                    }
                }
                .passBox {
                    height: 18px;
                    overflow: hidden;
                    padding-top: 10px;
                    .forget {
                        float: right;
                        a {
                            color: #737373;
                        }
                    }
                    span {
                        color: #737373;
                        font-size: 16px;
                        line-height: 16px;
                    }
                    .checkBox {
                        float: left;
                        span {
                            float: left;
                            .el-checkbox__inner {
                                margin-top: 2px;
                                border-color: #1EBAA5;
                            }
                        }
                        .el-checkbox__input.is-focus .el-checkbox__inner {
                            border-color: #1EBAA5;
                        }
                        .el-checkbox__inner:hover {
                            border-color: #1EBAA5;
                        }
                        .el-checkbox__input.is-checked .el-checkbox__inner {
                            background-color: #fff;
                            border-color: #1EBAA5;
                        }
                    }
                }
                .submit {
                    overflow: hidden;
                    margin-top: 50px;
                    input {
                        color: #fff;
                        width: 100%;
                        height: 50px;
                        cursor: pointer;
                        font-size: 18px;
                        line-height: 50px;
                        border-radius: 4px;
                        text-align: center;
                        background: #1FBBA6;
                    }
                    input:hover {
                        background: #17e3c8;
                    }
                    input:active {
                        background: #138d7d;
                    }
                }
            }
        }
        .footer2 {
            width: 100%;
            height: 15.74%;
            font-size: 14px;
            overflow: hidden;
            text-align: center;
            line-height: 30px;
            background: url(../../assets/logoBG3.png) no-repeat;
            background-size: cover;
            p {
                color: #000;
            }
            p:nth-child(1) {
                padding-top: 3%;
            }
        }
    }
    @media screen and (max-width: 1440px) {
        .loginBox2 {
            max-width: 1440px;
            .header2 {
                img {
                    width: 47px;
                    margin: 43px 0 0 52px;
                }
                p {
                    font-size: 23px;
                    padding-left: 15px;
                    line-height: 128px;
                }
            }
            .loginBg22 {
                .login {
                    width: 246px;
                    height: 284px;
                    padding: 0px 38px 0;
                    margin: 9.5% 0px 0px 54.32%;
                    .errorInfo {
                        height: 28px;
                        font-size: 12px;
                        line-height: 28px;
                    }
                    .userName {
                        margin: 6px 0px 28px;
                    }
                    .inputBg {
                        border-radius: 4px;
                        padding: 9px 0px 9px 8px;
                        border: 1px #BFBFBF solid;
                        span {
                            height: 22px;
                            img {
                                height: 18px;
                                padding-top: 3px;
                            }
                        }
                        input {
                            height: 22px;
                            width: 80%;
                            font-size: 12px;
                            line-height: 22px;
                        }
                    }
                    .passBox {
                        height: 17px;
                        padding-top: 8px;
                        span {
                            font-size: 12px;
                            line-height: 14px;
                        }
                        .checkBox {
                            float: left;
                            .el-checkbox {
                                font-size: 12px;
                            }
                        }
                    }
                    .submit {
                        margin-top: 18px;
                        padding-top: 13px;
                        input {
                            height: 38px;
                            font-size: 14px;
                            line-height: 38px;
                        }
                    }
                }
            }
            .footer2 {
                line-height: 28px;
            }
        }
    }
    @media screen and (max-width: 1366px) {
        .loginBox2 {
            max-width: 1440px;
            .header2 {
                img {
                    width: 47px;
                    margin: 40px 0 0 50px;
                }
                p {
                    font-size: 23px;
                    padding-left: 15px;
                    line-height: 120px;
                }
            }
            .loginBg22 {
                .login {
                    width: 246px;
                    height: 268px;
                    padding: 0px 38px 0;
                    margin: 9% 0px 0px 54.32%; 
                    .userName {
                        margin: 6px 0px 28px;
                    }
                    .inputBg {
                        padding: 6px 0px 6px 8px;
                        span {
                            height: 22px;
                            img {
                                height: 15px;
                                padding-top: 3px;
                            }
                        }
                        input {
                            height: 22px;
                            font-size: 12px;
                            line-height: 22px;
                        }
                    }
                    .passBox {
                        height: 17px;
                        padding-top: 8px;
                        span {
                            font-size: 12px;
                            line-height: 14px;
                        }
                        .checkBox {
                            float: left;
                            .el-checkbox {
                                font-size: 12px;
                            }
                        }
                    }
                    .submit {
                        margin-top: 22px;
                        input {
                            height: 36px;
                            font-size: 14px;
                            line-height: 36px;
                        }
                    }
                }
            }
            .footer2 {
                line-height: 28px;
            }
        }
    }
</style>
