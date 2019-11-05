<template>
  <div class="head">
    <div class="user">
		<div class="userImg"></div>
		<span>
			<a href="javascript:;" v-html="Usemessage"></a>
		</span>
		<span class="install">
			<el-dropdown>
			<span class="el-dropdown-link">
				<img src="../assets/install.png" />
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<span @click="isshowinstall = true">
					<el-dropdown-item>修改密码</el-dropdown-item>
				</span>
				<!-- <span @click="showPersonalinformation" v-if="isInformation = '1'">
					<el-dropdown-item>个人信息</el-dropdown-item>
				</span> -->
			</el-dropdown-menu>
			</el-dropdown>
		</span>
		<span class="out">
			<img @click="SignOut" src="../assets/out.png" />
		</span>
    </div>
    <div class="indexlogo">{{logoName}}</div>
    <div id="installlog">
		<el-dialog
			:close-on-click-modal="false"
			title="修改密码"
			:visible.sync="isshowinstall"
			width="40%"
			style="margin:0;"
		>
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
					<el-form-item label="新密码" :rules="[{ required: true, message: ' '}]">
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
				<div class="userBtn">
					<el-form-item>
						<el-button class="modify"   type="primary" @click="revise">修改</el-button>
					<el-button class="colebut" @click="isshowinstall=false">关闭</el-button>

					</el-form-item>
				</div>
			</el-form>
      </el-dialog>
    </div>
	<div id="personal">
		<el-dialog
			:before-close="closePersonalinformation"
			title="个人信息"
			:visible.sync="personalInformation"
			width="40%"
			style="margin:0;"
		>
			<el-form :model="information" ref="information" label-width="20%" class="demo-ruleForm">
				<div class="formTable">
					<div class="block">
						<el-form-item label="姓名" prop="realname">
							<el-input v-model="information.realname" maxlength="50" ></el-input>
						</el-form-item>
					</div>
					<div class="block">
						<el-form-item label="手机号" prop="phonenum">
							<el-input v-model="information.phonenum" maxlength="50"  disabled></el-input>
						</el-form-item>
					</div>
					<div class="block upLoad">
						<el-form-item label="头像" prop="img">
							<div class="Inf-img">
								<img :src='Initimgdata' alt="">
								<div class="upCont">
									<input
									type="file" id="headPortrait" name="files"
									placeholder="file" multiple
									@change="getFile"
									>
									<div class="upLoadinp">选择图片</div>
									<button class="submitImg" type="button" @click="getUploadVideo">上传文件</button>
								</div>

							</div>
						</el-form-item>
					</div>
					<div class="block">
						<el-form-item label="性别" prop="sex">
							<el-radio v-model="information.sex" label="BOY">男</el-radio>
  							<el-radio v-model="information.sex" label="GIRL">女</el-radio>
						</el-form-item>
					</div>
					<div class="block" id="regionChangemodule">
						<el-form-item label="地区" prop="region_full_name">
							<el-input
							v-model="information.region_full_name"
							maxlength="50"
							@focus="isShowregionFulldata = true"
							 ></el-input>
							<div class="treeCont" v-if="isShowregionFulldata">
								<el-tree
									:props="props1"
									:load="regionFulltree"
									lazy
									accordion
									v-if="isShowregionFulldata"
									@current-change="synchronouRegionsdata"
								>
								</el-tree>
							</div>
						</el-form-item>
					</div>
					<div class="block">
						<el-form-item label="工作单位" prop="departName">
							<el-input
							v-model="information.enterprise_depart.name"
							maxlength="50"
							@focus="showDepartdata"
							></el-input>
							<!-- 工作单位树结构 -->
							<div class="treeCont" 	v-if="isDepartdata">
								<el-tree
									:props="props1"
									:load="departTree"
									lazy
									@current-change="departTreechange"
									>
								</el-tree>
							</div>
						</el-form-item>
					</div>
					<div class="block">
						<el-form-item label="职务">
							<el-select v-model="enterpriseJobvalue" placeholder="请选择">
								<el-option
									v-for="item in enterpriseJob"
									:key="item.id"
									:label="item.name"
									:value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
					</div>
					<div class="block">
						<el-form-item label="管理员" prop="is_admin">
							<el-input v-if='information.is_admin' maxlength="50"  disabled value="是"></el-input>
							<el-input v-else maxlength="50"  disabled value="否"></el-input>
						</el-form-item>
					</div>
					<div class="block">
						<el-form-item label="添加原因" prop="add_reason">
							<el-input v-model="information.add_reason" maxlength="50" disabled ></el-input>
						</el-form-item>
					</div>
				</div>
				<div class="userBtn">
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="saveEditclick">保存</el-button>
						<el-button @click="closePersonalinformation">关闭</el-button>
					</span>
				</div>
			</el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

// listEnterprisedeparts 列出当前企业指定部门下的子部门
// getPersonalinfo  获取个人信息
// listEnterpriseJobtitles  所有职称
// getEnterpriseRootdepart  企业部门根路径
//  listEnterprisesubDeparts 查子企业
// getRegionsbyPid 获取下级区域 默认全国节点开始
// uploadAvatar 上传企业用户头像
// modifyPersonalinfo 修改个人信息
// getRegiondetail 查询地区详情
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
		issecond: 60,
		countdown: "获取验证码",
		isshowinstall: false,
		headPicUrl: "",
		Usemessage: localStorage.realname,
		parameter: {
		phone: "",
		code: "",
		Password1: "",
		Password2: ""
		},
		// 个人信息
		personalInformation : false,
		information : {
			realname : '',
			phonenum : '',
			sex : '',
			region_full_name : '所有地区参数',
			region_full_code : '地区',
			region_code : '地区',
			region_name : '地区',
			depart_code : '002',
			is_admin : false,
			add_reason : '原因',
			//  地区
			enterprise : {
				region_name : '',
			},
			// 部门
			enterprise_depart : {
				code: "",
				code_path: "",
				id: "",
				name: "",
				region_code: "",
				region_code_path: "",
			},
		},
		// 头像
		Initimgdata : '',
		// 职务列表
		enterpriseJob : [],
		enterpriseJobvalue : '',
		// 工作单位数据
		props1: {
          label: 'name',
          children: 'children',
		},
		// 工作单位初始化数据 数组列表
		InittdepartData : [],
		// 是否展示工作单位下拉数据
		isDepartdata : false,
		// 地区初始化数据 全国
		InitRegionfulldata : {
			"pid": "000000000000",
			"id": "000000000000",
			"timestamp": 0,
			"name" : '全国'
		},
		isShowregionFulldata : false,
		// 头像file
		filedata : '',
		// 编辑需要上传的图片参数
		avatar_file_temp_path : '',

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
		showPersonalinformation(){
			// 个人信息初始化
			this.getInitdata();
			// 职称初始化
			this.getlistEnterpriseJobtitles();
			// 部门初始化数据
			this.getInitdepartData();
		},
		/* 个人信息 */
		// 初始化个人信息
		getInitdata(){
			console.log(localStorage.userPhone);
			//  初始化数据接口
			let objData = {
					"account": localStorage.userPhone,
					"enterprise_id": localStorage.EnterpriseId
				}
			getPersonalinfo(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {


					console.log(res);

					// 初始化数据
					//this.information = res.data.data
					// realname name
					this.information.realname  = res.data.data.realname;
					this.information.sex  = res.data.data.sex;
					// 初始化职称 id 可能为空
					this.enterpriseJobvalue = res.data.data.enterprise_job_title ?  res.data.data.enterprise_job_title.id : '';

				 	// 原因
					this.information.add_reason = res.data.data.add_reason ? res.data.data.add_reason  : '';
					// 地区
					this.information.region_full_code =  res.data.data.region_full_code ? res.data.data.region_full_code : "";
					this.information.region_full_name = res.data.data.region_full_name ? res.data.data.region_full_name : "";

					this.information.region_name = res.data.data.region_name ? res.data.data.region_name  : '';
					this.information.region_code = res.data.data.region_code ? res.data.data.region_code : '';

					// 初始化 img 拼接图片信息
					this.Initimgdata = res.data.data.enterprise_user_image ?  window.ServerUrl + '/' + res.data.data.enterprise_user_image.image_small_path :  '';
					// 企业部门 信息
					this.information.enterprise_depart.code = res.data.data.enterprise_depart ? res.data.data.enterprise_depart.code  : '' ;
					this.information.enterprise_depart.id =  res.data.data.enterprise_depart ? res.data.data.enterprise_depart.id  : '' ;
					
					//this.personalInformation = true;
				}

			});
			this.personalInformation = true;
		},
		// 职称列表
		getlistEnterpriseJobtitles(){
			let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
			listEnterpriseJobtitles(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					this.enterpriseJob = res.data.data;
				}
			});
		},
		// 工作单位点击
		showDepartdata(){
			this.isDepartdata = true;
		},
		// 初始化 工作单位结构
		getInitdepartData(){
			let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
			getEnterpriseRootdepart(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					this.InittdepartData = res.data.data;
				}
			});
		},
		// 工作单位tree结构懒加载
		departTree(node, resolve) {
			if (node.level === 0) {
				return resolve(this.InittdepartData);
			}
			// ajax
			let objData = {
					"enterprise_id": localStorage.EnterpriseId,
					"parent_code": node.data.code,
				}
			listEnterprisesubDeparts(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					resolve(res.data.data)
				}
			});
		},
		// 节点选中 同步数据
		departTreechange(data){
			// 查询详细数据在赋值
			this.information.enterprise_depart.name = data.name;
			this.information.enterprise_depart.code = data.code;
		},
		// 地区 加载函数
		regionFulltree(node,resolve){
			if (node.level === 0) {
				return resolve([this.InitRegionfulldata ]);
			}
			// 全国节点 下拉数据
			let objData = {
					"pid": node.data.id
				}
			getRegionsbyPid(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					resolve(res.data.data.regions)
				}
			});
		},
		// 同步地区数据
		synchronouRegionsdata(data){
			console.log(data);
			// 查询详情接口 递归查询所有父节点
			// 全国除外
			if(data.id != "000000000000"){
				let objData = {
					 "id": data.id,
  					"timestamp": 0
				}
				// 获取地区详情
				getRegiondetail(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						// 当前点击的数据获取的数据
						this.information.region_full_name = res.data.data.region_details[0].names;
						this.information.region_full_code = res.data.data.region_details[0].ids;
						// 当前点击的数据
						this.information.region_code = data.id
						this.information.region_name = data.name

						console.log(this.information.region_full_name);
					}
				});
			}else{
				// 同步数据
				this.information.region_full_name = '全国';
				this.information.region_full_name_ids = '000000000000';
				// 当前点击的数据
				this.information.region_code = '000000000000'
				this.information.region_name ='全国'
			}

		},
		// 上传头像
		getFile(e) {
			let file = document.getElementById("headPortrait").files[0];
			this.filedata = file;
		},
		  // 点击上传
		getUploadVideo() {

			if (this.filedata == "") {
				this.$message({
					message: '文件不允许为空',
					type: 'warning',
				});
			} else {
				var fileAjaxdata = this.filedata
				var formData = new FormData();
				formData.append("avatar_file", fileAjaxdata);

				uploadAvatar(formData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						// 提示
						this.$message({
							message: '上传成功',
							type: "success"
						});
						this.avatar_file_temp_path = res.data.data.avatar_file_temp_path
					}
				});
			}
		},
		// 保存
		saveEditclick(){
			let objData = this.Parameters();

			console.log(objData)

			modifyPersonalinfo(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					// 提示
					this.$message({
						message: '保存成功',
						type: "success"
					});
					this.personalInformation = false;
					this.isDepartdata = false;
					this.isShowregionFulldata = false;
					// 清空 数据缓存
					this.filedata = '';
					this.avatar_file_temp_path = '';
					this.enterpriseJobvalue = '';
				}
			});

		},
		// 保存数据参数整理
		Parameters(){
			let objData = {
				"enterprise_job_title_id": this.enterpriseJobvalue,
				// 新增企业部门id
				"enterprise_depart_id" : this.information.enterprise_depart.id,
				"id": this.information.id,
				"realname": this.information.realname,
				"region_code": this.information.region_code,
				"region_full_code": this.information.region_full_code,
				"region_full_name": this.information.region_full_name,
				"region_name": this.information.region_name,
				"sex": this.information.sex
			}
			// 图片信息
			if(this.avatar_file_temp_path != ''){
				objData.avatar_file_temp_path = this.avatar_file_temp_path
			}
			return objData;
		},
		// 关闭
		closePersonalinformation(){
			this.personalInformation = false;
			// 清空 数据
			this.filedata = '';
			this.avatar_file_temp_path = '';
			this.isDepartdata = false;
			this.isShowregionFulldata = false;
			this.enterpriseJobvalue = '';
			this.isDepartdata = false;
			this.isShowregionFulldata = false;
		}
	},
	mounted() {
		//this.getInitdata()
	},
};
</script>
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

