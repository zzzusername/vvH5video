<template>
	<div id="slideShow" class="mRight">
		<div class="slideShowList">
			<div class="zForm">
                <button class="buttonradius" style="float:right;" @click="addBannerclick(true)">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="slideShowData"
						>
							<el-table-column prop="order" label="顺序"></el-table-column>
							<el-table-column prop="name" label="轮播图名称"></el-table-column>
							<el-table-column prop="" label="预览图片">
                                <template slot-scope="scope">
                                    <img class="tableImg" :src="scope.row.image_url" alt="" style="width:30px;height:30px;">
								</template>
                            </el-table-column>
							<el-table-column prop="state" label="状态">
								 <template slot-scope="scope">
									 <div id="changeState">
										<span class="spanBtn" v-if='scope.row.enabled' @click="stateCnageclidk(true,scope.row)">禁用</span>
										<span class="spanBtn qiyong" v-else @click="stateCnageclidk(false,scope.row)">启用</span>
									 </div>
								</template> 
							</el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn" @click="addBannerclick(false,scope.row)">编辑</span>
									<span class="spanBtn"  @click="bannersDeleteclick(scope.row)">删除</span>
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
                <el-form  ref="edit" label-width="30%" class="demo-ruleForm">
                    <div class="formTable">
						<div class="block">
							<el-form-item label="顺序："  prop="passworld">
								<el-input v-model="addForm.order" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block">
							<el-form-item label="轮播图名称："  prop="resetpassworld">
								<el-input v-model="addForm.name" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<!-- 头像上传 -->
						<div class="block upLoad"  id="personal">
							<el-form-item label="轮播图片：" prop="img"  id='personalFormitem'>
							<span id="upImgspan">（700x1080像素，png，jpg格式）</span>
								<div class="Inf-img">
									<img :src='Initimgdata' alt="">
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
                            <el-form-item label="状态：" prop="name">
                                <div class="checkboxBg">
                                    <el-radio v-model="addForm.state" label="1">启用</el-radio>
  									<el-radio v-model="addForm.state" label="0">禁用</el-radio>
                                </div>
                            </el-form-item>
                        </div>
						<div class="block">
							<el-form-item label="跳转链接："  prop="passworld">
								<el-input v-model="addForm.content" maxlength="50"></el-input>
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
	// getBannerlist 获取列表
	//  addBannerlist 添加
	// 上传图片 bannersUploadimage
	// 删除 getBannerlistDelete
	// 启用 bannersSetenabled
	// 修改 bannersModify
	// 信息详情 bannersGetdata
	import {getBannerlist,addBannerlist,
			bannersUploadimage,
			getBannerlistDelete,
			bannersSetenabled,
			bannersModify,
			bannersGetdata,
			} from '../../api/appmanagement';

	export default {
        data() {
			return {
				// 新增／编辑弹窗状态
				addUserpop : false,
				popoverSavebuttonState : true, // 默认为新增
				/* 图片相关 */
				// 头像file
				filedata : '',
				fileName : '',
				// 编辑需要上传的图片参数
				app_banner_image_file_temp_path : '',
				// 预览图片地址
				Initimgdata : '',
				// 详细信息
				bannerListinformation : '',
				// 提交数据集合
				addForm : {  
					// 状态   1 启用  2 禁用
					state : '1',
					// 内容
					content : '',
					// 姓名
					name : '',
					//  顺序
					order : '',
					// 
					content : ''
				},
				// 表格数据
				slideShowData : [],

				/* 分页相关 */
				page_size : 8,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		mounted: function() {
			let row = '.slideShowList'
			heightAuto(row)
			// 初始化数据
			this.getInitlistData();


			let str = '/opt/ucsys/upload/temp/051157e9-cd3d-4f43-940a-102ba5caedc6@332211.jpg'

		},
		methods:{
			// 初始化信息
			getInitlistData(){
				// getBannerlist
				let objData = {
					"enterprise_id":  localStorage.EnterpriseId,
					"page_number": this.page_total_pages - 1,
  					"page_size": this.page_size
					
				}
				getBannerlist(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.slideShowData = res.data.data.list;

						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}
				});	
			},
			//  新增／编辑按钮
			addBannerclick(type,scope){
				// 弹窗保存按钮状态
				if(type){
					this.popoverSavebuttonState = true;
					this.addUserpop = true;
					this.Initimgdata = '';
				}else{
					// 查询详情信息
					// bannersGetdata
					let objData = {
						"id" : scope.id,
					}
					bannersGetdata(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							let rD = res.data.data
							this.bannerListinformation = res.data.data;
							// 信息赋值
							this.addForm.state = rD.enabled ? "1" : '0';
							this.addForm.name = rD.name;
							this.addForm.order = rD.order;
							// 按钮状态
							this.popoverSavebuttonState = false;
							// 预览图片
							this.Initimgdata = rD.image_url;
							// 弹窗显示
							this.addUserpop = true;
							// 链接 内容
							this.addForm.content = rD.content
						}else{
							this.$message.error(res.data.error_description);
						}
					});	

				}
				

			},
			// 弹窗 保存按钮 提交数据
			saveNewdata(){
				if(this.popoverSavebuttonState){
						let objData = {
							"app_banner_image_file_temp_path": this.app_banner_image_file_temp_path,
							"content": this.addForm.content,
							"enabled": this.addForm.state = '1' ? true : false,
							"enterprise_id": localStorage.EnterpriseId,
							"event": this.addForm.content == '' ? "NULL" : "WEB",
							"name": this.addForm.name,
							"order": this.addForm.order 
						}
					// 新增
					addBannerlist(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							console.log(res);
							this.$message.success('新增成功');
							// 关闭弹窗
							this.addUserpop = false;
							// 清除缓存
							this.clearThecache();
							// 刷新 列表
							this.getInitlistData();
						}else{
							this.$message.error(res.data.error_description);
						}
					});	
				}else{
					let objData = {
						"app_banner_image_file_temp_path": this.app_banner_image_file_temp_path,
						"content": this.addForm.content,
						"enabled": this.addForm.state == '1' ? true : false,
						"event": this.addForm.content == '' ? "NULL" : "WEB",
						"id": this.bannerListinformation.id,
						"name": this.addForm.name,
						"order": this.addForm.order,
					}
					// 编辑  bannersModify
					bannersModify(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('编辑成功');
							// 关闭弹窗
							this.addUserpop = false;
							// 清除缓存
							this.clearThecache();
							// 刷新 列表
							this.getInitlistData();
						}else{
							this.$message.error(res.data.error_description);
						}
					});	
				}
				
				
			},
			// 取消
			cancelNewdata(){
				this.addUserpop = false;
				this.clearThecache();
			},
			// 清空
			clearThecache(){
				this.app_banner_image_file_temp_path = '';
				this.addForm.state = '1';
				this.addForm.name = '';
				this.addForm.order = '';
			},
			// 上传头像
			getFile(e) {
				let file = document.getElementById("headPortrait").files[0];
				this.filedata = file;
				this.fileName = file.name;
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

					bannersUploadimage(formData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 提示
							this.$message({
								message: '上传成功',
								type: "success"
							});
							this.app_banner_image_file_temp_path = res.data.data.app_banner_image_file_temp_path
							// 预览图片
							let obj = res.data.data.app_banner_image_file_temp_path;
							let str = '/upload';
							let url = getCaption(obj,str)
							console.log(url);
							this.Initimgdata = window.ServerUrl + '/' + url
							
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	
				}
			},
			// 删除 getBannerlistDelete
			bannersDeleteclick(scope){
				let objData = {
					"id": scope.id
				}
				this.$confirm('是否删除?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',	
						type: 'warning'
				}).then(() => {

					getBannerlistDelete(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('删除成功');
							// 刷新 列表
							this.getInitlistData();

						}else{
							this.$message.error(res.data.error_description);
						}
					});	

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});          
				});
			},
			// 状态切换
			stateCnageclidk(type,scope){
				let objData = {
  					"id": scope.id
				}
				if(type){
					// 禁用
					objData.enabled = false;
				}else{
					// 启用
					objData.enabled = true;
				}
				// ajax bannersSetenabled
				bannersSetenabled(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						if(!type){
							this.$message.success('启用成功');
						}else{
							this.$message.success('禁用成功');
						}
						// 刷新 列表
						this.getInitlistData();

					}else{
						this.$message.error(res.data.error_description);
					}
				});	

			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitlistData();
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
    width: 100px;
    height: 100px;
}
</style>

<style lang="scss">
	#slideShow {
		.slideShowList {
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
		#slideShow {
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
		#slideShow .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#slideShow {
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