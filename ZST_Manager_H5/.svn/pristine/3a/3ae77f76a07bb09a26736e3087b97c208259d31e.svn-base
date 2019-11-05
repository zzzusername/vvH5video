<template>
	<div id="duty" class="mRight">
		<div class="dutyList">
			<div class="zForm">
				<span class="paddingLeft">职位名称： </span>
				<input class="zInput" v-model="name" type="text" placeholder="" />
				<button class="buttonradius" @click="findData">查询</button>
				<button class="buttonradius" @click="clearData">清空</button>
				<button class="buttonradius" style="float:right;" @click="addDatalist(true)">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="dutyData"
						>
							<el-table-column prop="fixedSort" label="序号"></el-table-column>
							<el-table-column prop="name" label="职位名称"></el-table-column>
							<el-table-column prop="comments" label="备注信息"></el-table-column>
							<el-table-column prop="" label="操作">
								<template slot-scope="scope">
									<span class="spanBtn" @click="addDatalist(false,scope.row)">编辑</span>
									<span class="spanBtn" @click="deleteClick(scope.row)">删除</span>
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
		<!-- 编辑弹窗 -->
		<div id="userAddModel2" >
			<el-dialog  :title="Titpop" 
				:visible.sync="editVisible"
				:before-close="cancelClick"
				:close-on-click-modal='false'
				width="40%"
				id="commonPop"
				>
				<el-form ref="edit" label-width="20%" class="demo-ruleForm">
					<div class="formTable">
						<div class="block">
							<el-form-item label="职位名称："  prop="" :rules="[{ required: true, message: ' '}]">
								<el-input v-model="editName" maxlength="50"></el-input>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="备注信息："  prop="" :rules="[{ required: true, message: ' '}]">
								<el-input v-model="editComments" maxlength="50"></el-input>
							</el-form-item>
						</div>
					</div>
					<div class="userBtn">
						<el-form-item>
							<el-button type="primary" @click="saveClick">保存</el-button>
							<el-button @click="cancelClick">取消</el-button>
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
	// js
	import {heightAuto} from '../../untils/heightAuto' //注意路径

	/* api */
	// jobTitlelist 查询列表
	import {jobTitleadd, jobTitledelete, jobTitleget, jobTitlelist, jobTitlemodify} from '../../api/duty'

	export default {
        data() {
			return {
				// 查询数据
				name : '',
				dutyData : [],
				/* 编辑 pop */
				editVisible : false,
				/* 编辑数据 */
				editName : '',
				editComments : '',
				enterprise_job_title_id : '',
				// 弹窗保存按钮全局状态  1 新增  0 保存
				popButtonstate : true,
				Titpop : '',
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 0,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		mounted: function() {
			let row = '.dutyList'
			heightAuto(row);
			this.getInitdata();
		},
		methods:{
			// 初始化列表数据
			getInitdata(){
				// ajax
				let objData = {
					"enterprise_id": localStorage.EnterpriseId,
					"page_number": this.page_total_pages - 1,
					"page_size": 10
				}
				if(this.name != ''){
					objData.name = this.name;
				}

				jobTitlelist(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.dutyData = res.data.data.list;

						this.dutyData.map(function(item,index){
							item.fixedSort = index - 0 + 1;
						})

						// 添加 序号 
						console.log(this.dutyData);
						
						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}
				});	
			},	
			// 查询
			findData(){
				this.getInitdata();
			},
			clearData(){
				this.name = '';
			},
			// 弹窗显示 编辑／新增
			addDatalist(isAdd,scope){
				this.editVisible = true;
				if(isAdd){
					this.Titpop = '新增'
					this.popButtonstate = true;
				}else{
					this.Titpop = '编辑';
					let objData = {
						"enterprise_job_title_id": scope.id
					}
					jobTitleget(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.editName = res.data.data.name;
							this.editComments = res.data.data.comments;
							this.enterprise_job_title_id = res.data.data.id;
							this.popButtonstate = false;
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	
				}
			},
			// 数据删除
			deleteClick(scope){
				console.log(scope)
				// 删除
				let objData = {
					"enterprise_job_title_id": scope.id
				}
				this.$confirm('是否删除', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
							jobTitledelete(objData).then(res => {
								if (res.status === 200 && res.data.result == "ok") {
									this.$message.success('删除成功');
									this.getInitdata();
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
			// 关闭弹窗 清空数据
			cancelClick(){
				this.editVisible = false;
				this.clearCacheddata();
			},
			// 弹窗保存
			saveClick(){
				if(this.popButtonstate){
					// 新增
					let objData = {
						"enterprise_id": localStorage.EnterpriseId,
						"comments": this.editComments,
						"name": this.editName
					}
					jobTitleadd(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('新增成功');
							this.cancelClick();
							this.getInitdata();
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	
				}else{
					// 保存编辑数据
					let objData = {
						"comments": this.editComments,	
						"enterprise_job_title_id": this.enterprise_job_title_id,
						"name": this.editName,
					}
					jobTitlemodify(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('编辑成功');
							this.cancelClick();
							this.getInitdata();
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	

				
				}
			},
			// 清空缓存数据
			clearCacheddata(){
				this.editName = '';
				this.editComments = '';
				this.enterprise_job_title_id = '';
			},	
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitdata();
			},
		}
	}
	
</script>
<style scoped>
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
</style>

<style lang="scss">
	#duty {
		.dutyList {
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
					height: 36px;
					font-size: 14px;
					margin-left:10px;
					line-height: 36px;
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
				padding-top: 26px;
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
		#duty {
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
		#duty .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#duty {
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
</style>