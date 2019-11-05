<template>
 <div id="Forgetpassword">
	 <div class="Forgetbox">
 <el-row >
  
    <el-col :xs="24" :sm="20" :md="18" :lg="12" :xl="10" class="Forgetboxel">
		 <div>
		 	<el-form :model="parameter" ref="parameter" label-width="20%" class="demo-ruleForm">
				<div class="formTable">
					<p>请输入手机号验证再修改密码</p>
					<div class="block">
					<el-form-item label="手机号" :rules="[{ required: true, message: ' '}]" prop="phone">
						<el-input v-model="parameter.phone" maxlength="50" ></el-input>
					</el-form-item>
					</div>
					<div class="block">
					<el-form-item label="验证码" :rules="[{ required: true, message: ' '}]" prop="code">
						<el-input v-model="parameter.code" maxlength="50" ></el-input>
					</el-form-item>
					<div id="logcode" @click="isshowinstallclick" v-html="countdown"></div>
					</div>
					<div class="block">
					<el-form-item label="新密码" :rules="[{ required: true, message: ' '}]" prop="Password1">
						<el-input v-model="parameter.Password1" maxlength="120" type="password"></el-input>
					</el-form-item>
					</div>

					<div class="block">
					<el-form-item
						label="确认密码"
						:rules="[{ required: true, message: ' '}]"
						prop="Password2"
					>
						<el-input v-model="parameter.Password2" maxlength="120" type="password"></el-input>
					</el-form-item>
					</div>
					<div class="power"></div>
				</div>
				
			</el-form>
	 </div></el-col>
</el-row>
	
	 </div>
	





</div>
  
    
</template>

<script>
import $ from "jquery";
import axios from "axios";

import {
	listEnterprisedeparts,
	getPersonalinfo,
	listEnterpriseJobtitles,
	getEnterpriseRootdepart,
	listEnterprisesubDeparts,
	getRegionsbyPid,
	uploadAvatar,
	modifyPersonalinfo,
	getRegiondetail,
	} from '../components/interface/common'

export default {
  data: function() {
    return {
			parameter: {
		phone: "",
		code: "",
		Password1: "",
		Password2: ""
		},

	  
    };
  },

  methods: {
	
	},
	mounted() {
		  var hei = document.documentElement.clientHeight;
		     $("#Forgetpassword").height(hei);
		   console.log(hei);
	
	},
};
</script>
<style  lang='scss' >
#Forgetpassword{
	width: 100%; height: 100%;
	    background: #354166;
		.Forgetbox{
			position: relative;
			width: 80%;
			height: 80%;
			background: #ececec;
			left: 10%;
			top: 10%;
              
			  
			   }
		
		
		
		.Forgetboxel{
			position: fixed;
			left: 0;
			right: 0;
			top: 20%;
			bottom: 0;
			margin: 40px auto;
		}

}


</style>

<style scoped>
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

