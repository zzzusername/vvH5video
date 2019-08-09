<template>
  <!-- xs	<768px
      sm	≥768px
      md	≥992px
      lg	≥1200px
      xl	≥1920px -->
<div class="Pageheader">
  <el-row>
    <el-col :xs="6" :sm="6" :md="3" :lg="3" :xl="3" class="ov-h">


      <div class="headerlogo">
        <img src="../../assets/logo64.png" alt="">


      </div>
      <div  class="headerfont">  视联云播</div>


    </el-col>
    <el-col  :xs="12" :sm="12" :md="18" :lg="18" :xl="18"><span class="ltm">1</span></el-col>

    <el-col :xs="6" :sm="6" :md="3" :lg="3" :xl="3" class="ov-h">
      <div class="realname">
        <span v-html="realname"></span>
      </div>
      <div>
          <span class="out">
			<img @click="SignOut" src="../../assets/out.png" />
		</span>
      </div>

    </el-col>
  </el-row>
</div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  data: function() {
    return {
      realname:localStorage.realname

    };
  },
  props: {
    logoName: {
      type: String,
      default: "移动终端管理平台"
	},
	isInformation : {
		type : String,
		default : '2'
	}
  },
    destroyed: function() {
   		   localStorage.removeItem('Accesstoken');
        // console.log(localStorage.getItem('Accesstoken'));
  },
  methods: {
		// 修改
		revise() {
			let _this = this;
			let URL = ServerUrl;
			if (this.parameter.Password1 == this.parameter.Password2) {
				console.log("一样");
				var reviseparameter = {
				is_encrypted_password: false,
				new_password: this.parameter.Password1,
				phonenum: this.parameter.phone,
				sms_verification_code: this.parameter.code
				};

				this.$http
				.post(URL + "/common/api/v1/auth/reset_password", reviseparameter)
				.then(function(res) {
					console.log(res);
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if (res.status === 200 && res.data.result == "ok") {
						_this.$message({
						message: "修改密码成功",
						type: "warning"
					});
					_this.isshowinstall = false;


					}
					if (res.data.result == "error") {
					_this.$message({
						message: res.data.error_description,
						type: "warning"
					});
					console.log(res);
					}
				})
				.catch(function(error) {
					console.log(error);
				});
			} else {
				_this.$message({
				message: "两次密码输入不一致",


					type: "warning"
				});
			}
		},
		// 获取验证码
		isshowinstallclick() {
			var that = this;
			let _this = this;
			let URL = ServerUrl;

			var userparameter = {
				phonenum: parseInt(this.parameter.phone)
			};
			if (this.issecond == 60) {
				this.$http
				.post(
					URL +
					"/common/api/v1/auth/send_sms_verification_code_for_reset_password",
					userparameter
				)
				.then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
					}
					if (res.data.result == "error") {
					_this.$message({
						message: res.data.error_description,
						type: "warning"
					});
					console.log(res);
					}
				})
				.catch(function(error) {
					console.log(error);
				});
			}

			var flag = 1;

			this.issecond = this.issecond - 1;
			console.log(this.issecond);

			this.countdown = this.issecond + "秒后重新发送";
			if (this.issecond == 0) {
				this.countdown = "获取验证码";
				flag = 1;
				this.issecond = 60;
				//  clearInterval(myVar);

				return;
			}
			var myVar = setTimeout(function() {
				that.isshowinstallclick();
			}, 1000);
		},
		// 退出登录
		SignOut() {
			   localStorage.removeItem('realname');
			   localStorage.removeItem('Accesstoken');

        // console.log(localStorage.getItem('Accesstoken'));
        // console.log(localStorage.realname);
			this.$router.push({
				path: "/"
			});

		},
		//  点击展示个人信息

	},
	mounted() {
		//this.getInitdata()
	},
};
</script>
<style lang="scss">
  .Pageheader{
    height: 64px;
    line-height: 64px;
    .headerlogo,
    .headerfont,
    .realname,.out{
      height: 64px;
      line-height: 64px;
      float: left;

    };
    .headerlogo{
      width: 40%;
    };
    .headerfont{
      width: 60%;

    };
    .realname,out{

    }
    .ov-h{
      overflow: hidden;
    }

  }



</style>
<style >
#installlog .el-dialog {
  margin: 0 !important;
}
#installlog .personal .el-dialog__body{
	height: auto;
	overflow: hidden;
}
/* 个人信息弹窗样式 */
.userBtn{
	text-align: right;
	margin-top: 20px;
}
.userBtn .colebut{
	margin-left: 10px;
}
/* 侧边栏样式 */
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

</style>

