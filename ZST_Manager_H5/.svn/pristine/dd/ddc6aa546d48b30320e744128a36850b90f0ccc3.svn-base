<template>
	<div class="mRight">
		<div class="mRightTree">
			<div class="zmainBox">
				<div class="systemtable" id="systemtable">
                    <ul>
						<li class="zname">企业名称</li>
                        <li class="zinput"><input v-model="system.name" type="text" name="name" maxlength="200" value="歌华大厦" /></li>
					</ul>
                    <ul>
						<li class="zname">企业地区</li>
                        <li class="zinput"><input v-model="system.region_name" type="text" name="name" maxlength="200"/></li>
					</ul>
                    <ul>
						<li class="zname">联系人</li>
                        <li class="zinput"><input v-model="system.contacts_names" type="text" name="name" maxlength="200" value="王大拿" /></li>
					</ul>
                    <ul>
						<li class="zname">联系人手机号</li>
                        <li class="zinput"><input v-model="system.contacts_phonenums" type="text" name="name" maxlength="200" value="13800000000" /></li>
					</ul>
					<ul>
						<li class="zname" style="color:red;">提示</li>
                        <li class="zinput"><input style="color:red;" type="text" name="name" maxlength="200" value="企业信息如需更新，请联系客服！" /></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	import {heightAuto} from '../../untils/heightAuto' //注意路径
	import {getEnterprisinfo}from '../../api/commonapi.js'
	export default {
        data() {
			return {
				system: {}
			}
		},
		methods :{
			getDetaildata(){
				let objData = {
						"enterprise_id": localStorage.EnterpriseId
					}

				getEnterprisinfo(objData).then(res => {

					if (res.status === 200 && res.data.result == "ok") {
							console.log(res)
							this.system = res.data.data
					}

				});	

			}
		},
		mounted: function() {
			/* 高度自适应 */
			let row = '.mRightTree';
			heightAuto(row)
			this.getDetaildata()
		},

    }
</script>
<style scoped>
	.load {
		float: right;
	}
	
	.mRightTree {
		margin: 15px 27px 15px 15px;
		background: #354166;
		box-shadow: 0px 0px 26px #212c3d;
		box-shadow: 0px 0px 26px #01060e;
	}
	
	.mRightTree h3 {
		color: #fff;
		height: 50px;
		font-size: 16px;
		line-height: 50px;
		padding-left: 20px;
		font-weight: normal;
		padding-right: 36px;
		background: -webkit-linear-gradient(#283357, #404d74);
		background: -o-linear-gradient(#283357, #404d74);
		background: -moz-linear-gradient(#283357, #404d74);
		background: linear-gradient(#283357, #404d74);
	}
	
	.mRightTree h3 button {
		float: right;
		margin: 11px 0 0 26px;
	}
	
	.zmainBox {
		height: 100%;
		overflow: hidden;
	}
	
	.zmainBoxBorder {
		border-top: 20px #232a44 solid;
	}
	
	#systemtable {
		width: 818px;
		overflow-x: hidden;
		margin: 40px auto;
		border: 1px #4a567c solid;
	}
	.systemtable {
		width: 806px;
		height: 83.3%;
		overflow: hidden;
		margin: 40px auto;
		border: 1px #4a567c solid;
	}
	
	.systemtable li {
		float: left;
		width: 418px;
		height: 36px;
		line-height: 36px;
		border: 2px #4a567c solid;
	}
	
	.systemtable li.zname {
		width: 360px;
		font-size: 14px;
		text-align: right;
		padding-right: 20px;
		background: #1b274c;
	}
	
	.systemtable li.zinput {
		background: #2a3558;
	}
	
	.systemtable li.zinput input {
		width: 95%;
		background: none;
		height: 36px;
		font-size: 14px;
		padding-left: 8px;
	}
	
	.systemtable p {
		clear: both;
		height: 40px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
		background: #1b274c;
		border: 2px #4a567c solid;
	}
	
	#systemtable .zinput .el-date-editor.el-input {
		width: 99%;
	}
	
	@media screen and (max-width: 1440px) {
		.mRightTree h3 button {
			float: right;
			margin: 5px 0 0 20px;
		}
		#systemtable {
			width: 800px;
			height: 79%;
			overflow-x: hidden;
			overflow-y: auto;
			margin: 30px auto;
			border: 1px #4a567c solid;
		}
		#systemtable .inputdate .el-input--suffix .el-input__inner {
			border: none;
			height: 24px;
			line-height: 24px;
		}
		.systemtable {
			margin: 30px auto
		}
		.systemtable li {
			width: 400px;
			height: 26px;
			line-height: 26px;
			font-size: 13px;
		}
		.systemtable {
			width: 788px;
		}
		.systemtable p {
			height: 30px;
			line-height: 30px;
		}
	}
	
	@media screen and (max-width: 1366px) {
		.systemtable .el-input__icon {
			line-height: 24px;
		}
		.mRightTree h3 button {
			float: right;
			margin: 5px 0 0 20px;
		}
		
		#systemtable {
			width: 800px;
			height: 81.5%;
			overflow-x: hidden;
			overflow-y: auto;
			margin: 10px auto;
		}
		
		#systemtable .inputdate .el-input--suffix .el-input__inner {
			border: none;
			height: 24px;
			line-height: 24px;
		}
		.systemtable {
			margin: 10px auto
		}
		.systemtable li {
			width: 400px;
			height: 24px;
			line-height: 24px;
			font-size: 13px;
		}
		.systemtable {
			width: 788px;
		}
		.systemtable p {
			height: 28px;
			line-height: 28px;
		}
		#systemtable .el-input__inner {
			border: none;
			height: 34px;
			line-height: 34px;
		}
		.zmainBox h3 .el-button {
			float: right;
		}
		.systemtable li.zinput input {
			height: 24px;
			line-height: 24px;
		}
		#systemtable .zinput .el-date-editor.el-input {
			height: 24px;
			line-height: 24px;
		}
		#systemtable .inputdate .el-input__inner {
			height: 24px;
			line-height: 24px;
		}
	}
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
<style type="text/css">
	@media screen and (max-width: 1440px) {
		.inputdate .el-input--suffix .el-input__inner {
			height: 24px;
		}
	}
	@media screen and (max-width: 1366px) {
		.inputdate .el-input--suffix .el-input__inner {
			height: 22px;
		}
	}
	
</style>