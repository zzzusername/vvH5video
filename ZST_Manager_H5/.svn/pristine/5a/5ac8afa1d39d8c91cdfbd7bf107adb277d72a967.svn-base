<template>
	<div id="setlogin" class="mRight">
		<div class="setloginList">
			<div class="zForm">
				<span class="paddingLeft">起始时间：</span>
				<div class="timeBox">
					<el-date-picker v-model="startTime" 
					type="date" 
					format="yyyy-MM-dd" 
					value-format="timestamp" 
					placeholder="开始日期"></el-date-picker>
				</div>
				<span class="paddingLeft">终止时间</span>
				<div class="timeBox">
					<el-date-picker v-model="endTime" 
					type="date" 
					format="yyyy-MM-dd"
					value-format="timestamp" 
					placeholder="终止时间："></el-date-picker>
				</div>
				<button class="buttonradius" @click="findDatalist">查询</button>
				<button class="buttonradius" @click="clearDatalist">清空</button>
				<button class="buttonradius" style="float:right;" @click="addListdata">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="shairListdata"
						>
							<el-table-column prop="sort" label="排序"></el-table-column>
							<el-table-column prop="content" label="内容"></el-table-column>
							<el-table-column prop="" label="图片">
								<template slot-scope="scope">
									<img v-if='scope.row.imgUrl' class="tableImg" :src="scope.row.imgUrl" alt="">
								</template>
							</el-table-column>
							<el-table-column prop="" label="可见范围">
								<template slot-scope="scope">
									<span v-if='scope.row.visibility == "SELF_ONLY"'>仅自己</span>
									<span v-if='scope.row.visibility == "EVERYONE_IN_ENTERPRISE"'>企业内所有人</span>
									<span v-if='scope.row.visibility == "DEPART_OR_CIRCLE"'>圈子</span>
									<span v-if='scope.row.visibility == "EVERYONE"'>所有人</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="发布时间">
								<template slot-scope="scope">
									<span>{{ scope.row.createtime | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn">详情</span>
									<span class="spanBtn" @click="deleteShareclick(scope.row)">删除</span>
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
                width="50%">
                <el-form  ref="edit" label-width="40%" class="demo-ruleForm">
                    <div class="formTable">
						<div class="block">
							<el-form-item label="内容："  prop="" :rules="[{ required: true, message: ' '}]">
								<el-input v-model="addForm.content" maxlength="5"></el-input>
							</el-form-item>
                        </div>
						<!-- 头像上传 shareImglist -->
						<div class="block upLoad"  id="sharingcircleUpload">
							<el-form-item label="图片/视频（最多上传4张图片）：" prop="img"  id='shareImglist' :rules="[{ required: true, message: ' '}]">
								<div class="Inf-img">
									<el-upload
                                        class="upload-demo"
										:headers = "headers"
                                        :action='upLoadapi'
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :before-remove="beforeRemove"
										:on-success="handleAvatarSuccess"
                                        multiple
                                        :limit="2"
                                        :on-exceed="handleExceed"
                                        :file-list="fileList">
                                        <el-button size="small" type="primary">点击上传</el-button>
                                        <div slot="tip" class="el-upload__tip">最多上传4张jpg/png图片或1个视频</div>
                                    </el-upload>
								</div>
							</el-form-item>
						</div>
						<div class="block">
                            <el-form-item label="可见范围：" prop="" :rules="[{ required: true, message: ' '}]">
								<div class="checkboxBg">
                                    <el-radio v-model="addForm.visibilityvalue" :label='item.type' v-for='item in addForm.visibilityArray' :key="item.index">{{item.name}}</el-radio>
                                </div>
                            </el-form-item>
                        </div>
						<!-- v-if='addForm.visibilityvalue == "DEPART_OR_CIRCLE"' -->
						<div class="block" id="visibleFriends"  v-if='this.addForm.visibilityvalue == "DEPART_OR_CIRCLE"'>
                            <el-form-item label="可见好友：" prop="" :rules="[{ required: true, message: ' '}]">
								<div class="checkboxBg">
                                    <el-checkbox v-for='item in addForm.visibleFriends' :key="item.index" v-model="addForm.visibleFriendsvalue" :label='item.id'>{{item.name}}</el-checkbox>
                                </div>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="userBtn">
                        <el-form-item>
                            <el-button type="primary" @click="publishShare">保存</el-button>
                            <el-button>取消</el-button>
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
	import {heightAuto} from '../../untils/heightAuto' //注意路径
	/* api */
	// sharePublish  发布分享
	// shareDelete  删除
	// shareUploadresource  上传图片／video
	// shareGetvisibilityMap   可见人映射
	// circleList   分组信息
	import {sharePublish,
			shareGetvisibilityMap,
			shareListvisible,
			shareDelete,
			shareUploadresource,
			circleList,
			} from '../../api/sharingcircle'
	export default {
        data() {
			return {
                // 起终时间
                startTime : '',
                endTime : '',
				shairListdata : [],
                addForm : {
					content : '',
					visibilityArray : [
						{
							name : '所有人',
							type : 'EVERYONE',
						},	
						{
							name : '企业内所有人',
							type : 'EVERYONE_IN_ENTERPRISE',
						},
						{
							name : '圈子',
							type : 'DEPART_OR_CIRCLE',
						},
						{
							name : '仅自己',
							type : 'SELF_ONLY',
						},	
					],
					visibilityvalue : 'EVERYONE',
					visibleFriends : [],
					visibleFriendsvalue : []
				},  
				// 上传数据集合
                fileList: [],
				addUserpop : false,
				/* 上传 原生 */
				urlApi  : window.ServerUrl,
				upLoadapi : window.ServerUrl + '/admin/api/v1/share_circle_management/share/upload_resource',
				headers : {
					Authorization: 'Bearer ' + localStorage.Accesstoken
				},
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 0,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		mounted: function() {
			let row = '.setloginList'
			heightAuto(row)
			// 可见人分组
			//this.getInitVisiblemapping();
			this.getInitvisibleShare();
			this.getInitcircle();
		},
		methods:{
			// 初始化分组信息
			getInitcircle(){
				let objData = {
					"creator_id": localStorage.userId
				}
				// circleList
				circleList(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.addForm.visibleFriends = res.data.data
					}else{
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 初始化用户可见分享
			getInitvisibleShare(){
				// shareListvisible
				let objData = {
					"enterprise_user_id":  localStorage.userId,
					"page_number": 0,
					"page_size": 15
				}
				if(this.startTime != ''){
					objData.begin_time = this.startTime 
				}
				if(this.startTime != ''){
					objData.end_time = this.endTime 
				}
				shareListvisible(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.shairListdata = res.data.data.list;
						//  sort
						this.shairListdata.map(function(item,index){
							item.sort = index - 0 + 1;
							if(item.share_resources.length != 0){
								item.imgUrl = item.share_resources[0].small_image_url
							}
						})
					}else{
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 初始化可见人 映射  
			getInitVisiblemapping(){
				// shareGetvisibilityMap
				shareGetvisibilityMap({}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						// 转为  name type 数组
					}else{
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 弹窗保存按钮
			publishShare(){
				
				let objData = {
					"content": this.addForm.content,
					"creator_id": localStorage.userId,
					"enterprise_depart_ids": [],	// 部门为空
					"resource_file_temp_paths": [],	// 图片地址
					"share_circle_ids": this.addForm.visibleFriendsvalue,		// 圈子分组
					"visibility": this.addForm.visibilityvalue	// 可见范围
				}
				if(this.fileList.length != 0){
					this.fileList.map(function(item,index){
						objData.resource_file_temp_paths.push(item.url)
					})
					objData.resource_type = "IMAGE"
				}
				console.log(objData);
				// 发布分享
				sharePublish(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
						this.emptyData();

					}else{
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 清空数据 更新列表
			emptyData(){
				this.addForm.content = '';
				this.addUserpop = false;
				this.addForm.visibleFriendsvalue = [];
				this.addForm.visibilityvalue = "EVERYONE";
				this.getInitvisibleShare();
			},
			// 查询
            findDatalist(){
				this.getInitvisibleShare();
			},
			// 清空
            clearDatalist(){
				 this.startTime = '';
				 this.endTime = '';
			},
			// 删除
			deleteShareclick(scope){
				// shareDelete
				let objData = {
					id : scope.id
				}
				this.$confirm('是否删除?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',	
					type: 'warning'
				}).then(() => {
					let objData = {
						"id": scope.id
					}
					shareDelete(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('删除成功');
							this.getInitvisibleShare();
						}else{
							// 错误提示信息
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
			// 上传成功
			handleAvatarSuccess(res, file){
				console.log(file.name);
				console.log(res.data.resource_file_temp_path);
				let uploadData = {
					name : file.name,
					url : res.data.resource_file_temp_path,
				}
				// 添加到 缓存列表
				this.fileList.push(uploadData)
			},
			/* 分割 */
            addListdata(){
				this.addUserpop = true;
            },
            // 关闭弹窗
            cancelNewdata(){
                this.addUserpop = false;
            },
            // 图片上传
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 4 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
			// page
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage;
				console.log("我是页码" + this.currentPage);
				Page = this.currentPage;
				console.log(Page);
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
.timeBox{
    float: left;
    width: 198px;
    margin: 0 20px 0 3px;

}
.tableImg{
    width: 30px;
    height: 30px;
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
</style>

<style lang="scss">
	#setlogin {
		.setloginList {
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
		#setlogin {
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
		#setlogin .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#setlogin {
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
		width: 100%;
		float: left;
    }
    .infoMsg{
        padding-left: 9px;
        display: inline-block;
        margin-top: 10px;
    }
    .checkboxBg{
        width: 100%;
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