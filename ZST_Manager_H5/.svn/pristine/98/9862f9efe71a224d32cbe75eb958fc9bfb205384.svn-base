<template>
	<div id="addmoduls" class="mRight">
		<div class="addmodulsList">
			<div class="zForm">
                <button class="buttonradius" style="float:right;" @click="addDatalist(true)">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="addmodulsData"
						>
							<el-table-column prop="sort" label="顺序"></el-table-column>
							<el-table-column prop="name" label="模块名称"></el-table-column>
							<el-table-column prop="" label="预览图片">
                                <template slot-scope="scope">
                                    <img class="tableImg" :src="scope.row.icon_url" alt="">
								</template>
                            </el-table-column>
                            <el-table-column prop="description" label="功能描述"></el-table-column>
							<el-table-column prop="" label="状态">
								<template slot-scope="scope">
									 <div id="changeState">
										<span class="spanBtn" v-if='!scope.row.enabled' @click="stateCnageclidk(true,scope.row)">禁用</span>
										<span class="spanBtn qiyong" v-else @click="stateCnageclidk(false,scope.row)">启用</span>
									 </div>
								</template>
							</el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn" @click="addDatalist(false,scope.row)">编辑</span>
									<span v-if='!scope.row.sys_default' class="spanBtn" @click="bannersDeleteclick(scope.row)">删除</span>
								</template>
							</el-table-column>
						</el-table>
					</div>
                    <!-- page -->
					<el-pagination
						@current-change="handleCurrentChange" 
						:current-page.sync="page_total_pages" 
						:page-size="page_size" 
						layout="total, prev, pager, next, jumper" 
						:total="page_total_items"
						class="zPage"
						>
					</el-pagination>
				</div>
			</div>
		</div>
		<!-- 新增-->
        <div id="commonPop">
            <el-dialog  title="编辑内容" 
                :visible.sync="addUserpop"
                :before-close="cancelNewdata"
				:close-on-click-modal='false'
                width="40%">
                <el-form  ref="edit" label-width="35%" class="demo-ruleForm">
                    <div class="formTable">
						<div class="block">
							<el-form-item label="模块名称："  prop="passworld" :rules="[{ required: true, message: ' '}]">
								<el-input v-model="addForm.name" maxlength="5"></el-input>
							</el-form-item>
                        </div>
						<!-- 头像上传 -->
						<div class="block upLoad"  id="personal">
							<el-form-item label="模块图标：" prop="img"  id='personalFormitem' :rules="[{ required: true, message: ' '}]">
							<span id="upImgspan">（168x168像素，png，jpg格式）</span>
								<div class="Inf-img">
									<div class="imgCont">
										<img v-if='Initimgdata' :src='Initimgdata' alt="">
										<span v-else>{{fileName}}</span>
									</div>
									<div class="upCont">
										<input 
											type="file" id="headPortrait" name="files" 
											placeholder="file" multiple
											@change="getFile"	
										>
										<div class="upLoadinp">选择图片</div>
										<button class="submitImg" type="button" @click="getUploadVideo">上传图片</button>
									</div>
								
								</div>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="功能描述:（支持网页链接）"  prop="resetpassworld" :rules="[{ required: true, message: ' '}]">
								<el-input v-model="addForm.description" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block">
                            <el-form-item label="状态：" prop="name" :rules="[{ required: true, message: ' '}]">
								<div class="checkboxBg">
                                    <el-radio v-model="addForm.enabled" label="1">启用</el-radio>
  									<el-radio v-model="addForm.enabled" label="0">禁用</el-radio>
                                </div>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="userBtn">
                        <el-form-item>
                            <el-button type="primary" @click="saveNewdata">保存</el-button>
                            <el-button @click="cancelNewdata()">取消</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </el-dialog>
        </div>
	</div>
</template>
<script>
	import $ from "jquery";
    import axios from "axios";
    /* 展示弹窗样式文件 */
	import '../../style/common.css' /*引入公共样式*/
	// js
	import {heightAuto,getCaption} from '../../untils/heightAuto' //注意路径
	/* api */
	import {appFunmodulesAdd,
			appFunmodulesDelete,
			appFunmodulesGet,
			appFunmodulesList,
			appFunmodulesModify,
			appFunmodulesMove, // 移动
			getIconuploadProperties,   // 获取图片上传参数
			appFunmodulesSetenabled, // 启用 禁用
			appFunmodulesUploadicon} from '../../api/appmanagement'

	export default {
        data() {
			return {
				addmodulsData : [],
				// 提交数据集合
				addForm : {  
					// 状态   1 启用  2 禁用
					enabled : '1',
					// 描述
					description : '',
					// 名称
					name : '',
				},
				// 详细信息
				appListinformation : '',
				/* 图片相关 */
				// 头像file
				filedata : '',
				fileName : '',
				// 编辑需要上传的图片参数
				fun_module_icon_file_temp_path : '',
				// 预览图片地址
				Initimgdata : '',
				// 弹窗
				addUserpop : false,
				saveBtnstate : true, // 保存按钮状态 默认 新增
				/* 分页相关 */
				page_size : 8,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		mounted: function() {
			let row = '.addmodulsList'
			heightAuto(row)
			// 初始化列表
			this.getInitlistdata();
			// 获取 图片上传参数
			this.getInitimgparameter();
		},
		methods:{
			//  初始化获取列表数据
			getInitlistdata(){
				let objData = {
					"enterprise_id" : localStorage.EnterpriseId,
					//"sys_default" : true,
					"page_number": this.page_total_pages - 1,
  					"page_size": this.page_size
				}
				appFunmodulesList(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.addmodulsData = res.data.data.list

						// 序号
						this.addmodulsData.map(function(item,index){
							item.sort = index - 0 + 1;
						})
						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// getInitimgparameter
			getInitimgparameter(){

				getIconuploadProperties({}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						/* 

						accepted_mime_types: Array(3)
						0: "image/jpg"
						1: "image/jpeg"
						2: "image/png"

						icon_height: 168
						icon_width: 168
						
						*/
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 新增按钮
			addDatalist(type,scope){
				if(type){
					// 新增
					this.saveBtnstate = true;
					this.addUserpop = true;
				}else{
					// 查询详情信息
					let objData = {
						"id" : scope.id,
					}
					appFunmodulesGet(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							let rD = res.data.data
							this.appListinformation = res.data.data;
							// 信息赋值
							this.addForm.enabled = rD.enabled ? "1" : '0';
							this.addForm.name = rD.name;
							// 链接 内容
							this.addForm.description = rD.description
							// 预览图片
							this.Initimgdata = rD.icon_url;
							
							// 弹窗显示
							this.addUserpop = true;
							// 按钮状态
							this.saveBtnstate = false;
						}else{
							this.$message.error(res.data.error_description);
						}
					});
				}
			
				
			},
			// 上传头像
			getFile(e) {
				let file = document.getElementById("headPortrait").files[0];
				this.filedata = file;
				this.fileName = file.name;
				this.Initimgdata = '';
			},
			// 点击上传 bannersUploadimage
			getUploadVideo(){
				if (this.filedata == "") {
					this.$message({
						message: '文件不允许为空',
						type: 'warning',
					});
				} else {
					var fileAjaxdata = this.filedata
					var formData = new FormData();
					formData.append("file", fileAjaxdata);

					appFunmodulesUploadicon(formData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 提示
							this.$message({
								message: '上传成功',
								type: "success"
							});
							this.fun_module_icon_file_temp_path = res.data.data.fun_module_icon_file_temp_path
							// 预览图片
							let obj = res.data.data.fun_module_icon_file_temp_path;
							let str = '/upload';
							let url = getCaption(obj,str)
							this.Initimgdata = window.ServerUrl + '/' + url
							
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	
				}
			},
			// 弹窗保存
			saveNewdata(){

				let objData = {
					"description" : this.addForm.description,
					"enabled" : this.addForm.enabled == '1' ? true : false,
					"icon_file_temp_path" : this.fun_module_icon_file_temp_path,
					"name" : this.addForm.name,
				};
				if(this.saveBtnstate){
					// 新增
					// api  appFunmodulesAdd
					objData.enterprise_id = localStorage.EnterpriseId;
					appFunmodulesAdd(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 关闭弹窗 清空数据 刷新页面
							this.clearCachedata();
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	

				}else{
					//编辑
					objData.order = this.appListinformation.order;
					objData.id = this.appListinformation.id;

					// appFunmodulesModify
					appFunmodulesModify(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 关闭弹窗 清空数据 刷新页面
							this.clearCachedata();
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	


				}
			},
			// 清空缓存
			clearCachedata(){
				this.addUserpop = false;
				this.getInitlistdata();
				/* 清空数据 */
				this.addForm.name = '';
				this.addForm.description = '';
				this.addForm.enabled = '1';
				this.fun_module_icon_file_temp_path = '';
				this.Initimgdata = '';
				this.fileName = '';

			},
			// 弹窗取消
			cancelNewdata(){
				this.clearCachedata();
			},
			// 启用禁用
			stateCnageclidk(type,scope){
				let objData = {
  					"id": scope.id
				}
				if(!type){
					// 禁用
					objData.enabled = false;
				}else{
					// 启用
					objData.enabled = true;
				}
				// ajax appFunmodulesSetenabled
				appFunmodulesSetenabled(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						if(type){
							this.$message.success('启用成功');
						}else{
							this.$message.success('禁用成功');
						}
						// 刷新 列表
						this.getInitlistdata();

					}else{
						this.$message.error(res.data.error_description);
					}
				});	

			},
			// 删除
			bannersDeleteclick(scope){
				let _this = this;
				let objData = {
					"id": scope.id
				}
				this.$confirm('是否删除?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',	
						type: 'warning'
				}).then(() => {

					appFunmodulesDelete(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							_this.$message.success('删除成功');
							// 刷新 列表
							_this.getInitlistdata();

						}else{
							_this.$message.error(res.data.error_description);
						}
					});	

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});          
				});
			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitlistdata();
			},
        },
        updated() {
			/* var addmodHei = $("#userAddModel2 .el-dialog").height();
			$("#userAddModel2 .el-dialog").css("marginTop", -(addmodHei / 2));
			$("#userAddModel2 .el-dialog").css("marginBottom", 0);
			$("#distributionModel2 .el-dialog").css("marginTop", "-297px"); */
		}
	}
	
</script>
<style scoped>
#upImgspan{
    display: inline-block;
	position: absolute;
    top: 20px;
    font-size: 12px;
    left: -196px;
}
.popInput{
	width: 100%;
    height: 36px;
    font-size: 14px;
    margin-left: 10px;
    line-height: 36px;
    padding-left: 4px !important;
    margin-right: 20px;
    background: #2a3558;
    border: 1px #3b4872 solid;
	text-indent: 1em;
}
.spanBtn{
	cursor: pointer;
	margin: 0 5px;
}
.onlyLine{
    display: inline-block;
    margin-top: 20px;
}
.block{
	width: 100%;
}
.tableImg{
    width: 30px;
    height: 30px;
}
</style>

<style lang="scss">
	#addmoduls {
		.addmodulsList {
			padding: 34px 42px;
			margin: 15px 27px 15px 15px;
			background: #354166;
			box-shadow: 0 0 26px #01060e;
			.zForm {
				span {
					float: left;
					color: #eee;
					display: block;
					font-size: 14px;
					overflow: hidden;
					line-height: 36px;
				}
				button {
					float: left;
					color: #eee;
					height: 38px;
					font-size: 14px;
					margin-left: 11px;
					text-align: center;
					line-height: 38px;
					padding: 0px 15px;
					background: #1b274c;
					border: 1px #3b4872 solid;
				}
				button:hover {
					background: #57e29b;
				}
				span.btnRight {
					float: right;
					display: inline-block;
				}
				.zSelect {
					float: left;
					width: 148px;
				}
				.paddingLeft {
					padding-left: 20px;
				}
				.zInput {
					float: left;
					width: 200px;
					height: 34px;
					font-size: 14px;
					margin-left:10px;
					line-height: 35px;
					padding-left: 4px !important;
					margin-right: 20px;
					background: #2a3558;
					border: 1px #3b4872 solid;
				}
			}
			.zTable {
				clear: both;
				height: 94%;
				overflow: hidden;
				padding-top: 30px;
				.elTable {
					height: 91.7%;
					overflow: hidden;
					.el-table .warning-row td {
						color: oldlace;
						background-color: transparent;
					}
					.el-table .warning-row {
						background: -webkit-linear-gradient(#3f7984, #485b7d, #3f7984);
						background: -o-linear-gradient(#3f7984, #485b7d, #3f7984);
						background: -moz-linear-gradient(#3f7984, #485b7d, #3f7984);
						background: linear-gradient(#3f7984, #485b7d, #3f7984);
						filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3f7984', endColorstr='#485b7d', GradientType=0);
						border-top: 2px #57e29b solid;
						border-bottom: 2px #57e29b solid;
					}
					.el-table .success-row {
						background-color: #6ee2c1;
						color: #f0f9eb;
					}
					.el-table .warning-row td {
						color: oldlace;
					}
					.el-table .success-row td {
						color: #f0f9eb;
					}
					.el-table .warning-row td div {
						color: oldlace;
					}
					.el-table .success-row td div {
						color: #f0f9eb;
					}
				}
			}
		}
		input.el-input__inner:hover {
			border: 1px #3b4872 solid;
		}
		.el-input__icon {
			width: 37px;
		}
		.el-input--prefix .el-input__inner {
			padding-left: 38px;
		}
	}
	@media screen and (max-width: 1440px) {
		#addmoduls {
			.mRightTwo {
				.paddingLeft {
					padding-left: 10px;
				}
				.zForm {
					button {
						height: 30px;
						font-size: 12px !important;
						line-height: 30px;
						padding-left: 8px;
						padding-right: 8px;
					}
					span {
						font-size: 12px !important;
					}
					span.btnRight {
						float: left;
						/*margin-top: 10px;*/
					}
					.zInput {
						width: 100px !important;
						height: 28px;
						line-height: 28px;
					}
					.zgroup {
						height: 30px;
					}
					.zSelect {
						float: left;
						width: 106px;
					}
				}
				.zTable {
					clear: both;
					height: 94%;
					overflow: hidden;
					padding-top: 26px;
					.elTable {
						height: 82%;
						.el-table td {
							padding: 4px 0;
						}
					}
				}
			}
		}
	}
	@media screen and (max-width: 1366px) {
		#addmoduls .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#addmoduls {
			.mRightTwo {
				.paddingLeft {
					padding-left: 10px;
				}
				.zForm {
					button {
						height: 30px;
						font-size: 12px !important;
						line-height: 30px;
						padding-left: 5px;
						padding-right: 5px;
					}
					span {
						font-size: 12px !important;
					}
					span.btnRight {
						float: left;
					}
					.zInput {
						width: 80px !important;
						height: 28px;
						line-height: 28px;
					}
					.zgroup {
						height: 30px;
					}
					.zSelect {
						float: left;
						width: 104px;
					}
				}
				.el-select-dropdown__item {
					font-size: 12px;
				}
			}
		}
    }
    /* 弹窗样式重置 */
    .formTable{
        padding: 2px 4px;
        background: #4a567c;
        margin-bottom: 20px;
    }
    .block .el-form-item__label{
        height: 36px;
        margin: 2px 0;
        line-height: 36px;
        border: 1px solid #3b4872;
    }
    #userAddModel2 .el-form-item {
		margin: 0;
		padding: 0;
		float: left;
    }
    .infoMsg{
        padding-left: 9px;
        display: inline-block;
        margin-top: 10px;
    }
    .checkboxBg{
        width: 96%;
        height: 34px;
        margin: 2px 0;
        line-height: 34px;
        padding-left: 12px;
        background: #2a3558;
        border: 1px solid #3b4872;
        text-align: left;
    }
    .el-dialog .textarea .el-form-item__label{
        height: 160px;
    }
    .textarea{
        clear: both;   
        width: 100%;
        height: 70px;
        background: #4a567c;
        font-size: 14px;
        padding: 10px;
    }
</style>