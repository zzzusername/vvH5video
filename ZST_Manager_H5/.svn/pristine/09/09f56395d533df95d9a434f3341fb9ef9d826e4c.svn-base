<template>
	<div id="policesort" class="mRight">
		<div class="policesortList">
			<div class="zForm">
                <button class="buttonradius" style="float:right;" @click="addPolicesortlData(true)">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="policesortData"
						>
							<el-table-column prop="sort" label="序号"></el-table-column>
							<el-table-column prop="type_name" label="报警类别"></el-table-column>
							<el-table-column prop="id" label="报警类别ID"></el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<!-- <span class="spanBtn" @click="addPolicesortlData(false,scope.row)">编辑</span> -->
									<span class="spanBtn" @click="deletListdata(scope.row)">删除</span>
								</template>
							</el-table-column>
						</el-table>
					</div>
                  	<!-- page -->
					<!-- <el-pagination
						@current-change="handleCurrentChange" 
						:current-page.sync="page_total_pages" 
						:page-size="page_size" 
						layout="total, prev, pager, next, jumper" 
						:total="page_total_items"
						class="zPage"
						>
					</el-pagination> -->
				</div>
			</div>
		</div>
		<!-- 新增-->
        <div id="commonPop">
            <el-dialog  :title='popTitle' 
                :visible.sync="addDatapop"
                :before-close="cancelNewdata"
				:close-on-click-modal='false'
                width="40%">
                <el-form  ref="edit" label-width="20%" class="demo-ruleForm">
                    <div class="formTable">
						<div class="block">
							<el-form-item label="报警类型："  prop="passworld" :rules="[{ required: true, message: ' '}]">
								<el-input v-model="addForm.type_name" maxlength="4"></el-input>
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
	import {heightAuto} from '../../untils/heightAuto' //注意路径
	/* api */
	// appOneclickAlarmtypeAdd 新增
	// appOneclickAlarmtypeDelete 删除
	// appOneclickAlarmtypeModify 修改
	// appOneclickAlarmtypeGet  获取一键报警类别信息
	// appOneclickAlarmtypeList  列表
	import {appOneclickAlarmtypeAdd,
			appOneclickAlarmtypeDelete,
			appOneclickAlarmtypeModify,
			appOneclickAlarmtypeGet,
			appOneclickAlarmtypeList,
			} from '../../api/appmanagement';

	export default {
        data() {
			return {
				addDatapop : false,
				popTitle : '编辑内容',
				policesortData : [],
				addForm : {
					type_name : '',
				},
				// 保存按钮状态   新增
				saveBtntype : true,
				// 编辑缓存数据
				editDatacache : {},
				/* 分页相关 */
				page_size : 5,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		mounted: function() {
			let row = '.policesortList'
			heightAuto(row)
			// 初始化信息
			this.getInitlistData();
		},
		methods:{
			// 初始化信息
			getInitlistData(){
				// getBannerlist
				let objData = {
					"enterprise_id":  localStorage.EnterpriseId,
					"page_number": this.page_total_pages - 1,
  					"page_size": 5
					
				}
				appOneclickAlarmtypeList(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.policesortData = res.data.data.list;
						// 序号
						this.policesortData.map(function(item,index){
							item.sort = index - 0 + 1;
						})
						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}else{
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 新增
			addPolicesortlData(type,scope){
				if(type){
					this.saveBtntype = true;
					// 如果 大于 5 返回
					let len = this.policesortData.length - 0 + 1;
					if(len > 5){
						this.$message.error('最多5个报警类型，请先删除已有报警类型再添加');
						return false;
					}
					this.addDatapop = true;
				}else{
					// 编辑
					this.saveBtntype = false;
					this.editDatacache = scope;
					// 赋值
					this.addForm.type_name = scope.type_name
					this.addDatapop = true;
				}
				
			},
			//保存
			saveNewdata(){
				// 新增   appOneclickAlarmtypeAdd
				if(this.saveBtntype){
					let objData = {
						"enterprise_id": localStorage.EnterpriseId,
						"type_name": this.addForm.type_name
					}
					if(this.addForm.type_name == ''){
						this.$message.error('请输入报警类型')
						return false;
					}
					appOneclickAlarmtypeAdd(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('新增成功');
							this.getInitlistData();
							this.addForm.type_name = '';
							this.addDatapop = false;
						}else{
							this.$message.error(res.data.error_description);
						}
					});	
				}else{
					let objData = {
						"id": this.editDatacache.id,
						"type_name": this.addForm.type_name
					}
					appOneclickAlarmtypeModify(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('编辑成功');
							this.getInitlistData();
							this.addForm.type_name = '';
							this.editDatacache = {};
							this.addDatapop = false;
						}else{
							this.$message.error(res.data.error_description);
						}
					});	
				}
				

			},
			// 删除 
			deletListdata(scope){
				let objData = {
					"id": scope.id
				}
				this.$confirm('是否删除?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',	
						type: 'warning'
				}).then(() => {	
					// deletListdata
					appOneclickAlarmtypeDelete(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('删除成功');
							// 刷新数据
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
			// 取消
			cancelNewdata(){
				this.addDatapop = false;
				this.addForm.type_name = '';
			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitallUserdata();
			},
        },
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
	#policesort {
		.policesortList {
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
		#policesort {
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
		#policesort .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#policesort {
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