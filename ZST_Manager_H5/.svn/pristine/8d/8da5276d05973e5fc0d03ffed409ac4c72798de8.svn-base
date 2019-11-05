<template>
	<div id="platform" class="mRight">
		<div class="platformList">
			<div class="zForm">
				<span class="paddingLeft">GIS名称：</span><input v-model="gis_name" class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">GIS负责人： </span><input v-model="manager_name_or_phonenum" class="zInput" type="text" placeholder="" />
                <button class="buttonradius" @click="findData">查询</button>
                <button class="buttonradius" @click="clearData">清空</button>
                <button class="buttonradius" @click="addDatalist(1)" style="float:right;">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="platformData"
						>
							<el-table-column prop="fixedSort" label="序号"></el-table-column>
							<el-table-column prop="name" label="名称"></el-table-column>
							<el-table-column prop="manager_name" label="GIS负责人"></el-table-column>
							<el-table-column prop="manager_phonenum" label="负责人手机号"></el-table-column>
							<el-table-column prop="" label="掌上通用户">
								<template slot-scope="scope">
									<span v-if='scope.row.is_zst_user' class="spanBtn">是</span>
									<span v-else class="spanBtn">否</span>
								</template>
							</el-table-column>
							<el-table-column prop="stream_server.server_name" label="接入的流媒体"></el-table-column>
							<el-table-column prop="region_name" label="所属区域"></el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn" @click="addDatalist(0,scope.row)">编辑</span>
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
        <!-- 新增／ 编辑 -->
        <div id="commonPop" >
            <el-dialog  :title="popTit" 
                :visible.sync="editVisible"
				:before-close="cancelClick"
				:close-on-click-modal='false'
                width="40%"
				id="gisPlatformPop"
				>
                <el-form id="localeSelectioncomponent" :model="addForm" ref="edit" label-width="20%" class="demo-ruleForm">
                    <div class="formTable">
                        <div class="block">
							<el-form-item label="IP和端口："  prop="ip_and_port">
								<el-input v-model="addForm.ip_and_port" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block" id="areaSelectpopover">
							<el-form-item label="所属区域："  prop="region_full_name">
								<el-input 
								v-model="addForm.region_full_name" 
								maxlength="50"
								@focus="isShowregionFulldata = true"
								></el-input>
								<div class="treeCont" v-if="isShowregionFulldata">
									<el-tree
										:props="props"
										:load="regionFulltree"
										lazy
										accordion
										v-if="isShowregionFulldata"
										@current-change="synchronouRegionsdata" 
									>
									</el-tree>
								</div>
								<span class="close"  v-if="isShowregionFulldata" @click="closeShowregionFulldata">
									<img src="../../../assets/close.png" alt="close">
								</span>
							</el-form-item>
                        </div>
						<div class="block">
							<el-form-item label="GIS名称："  prop="name">
								<el-input v-model="addForm.name" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block">
							<el-form-item label="GIS负责人："  prop="manager_name">
								<el-input v-model="addForm.manager_name" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block">
							<el-form-item label="负责人手机号："  prop="manager_phonenum">
								<el-input v-model="addForm.manager_phonenum" maxlength="50"></el-input>
							</el-form-item>
                        </div>
                        <div class="block">
							<el-form-item label="接入的流媒体："  prop="stream_server_id">
								 <el-select v-model="addForm.stream_server_id" placeholder="请选择">
									<el-option
									v-for="item in addForm.stream_server_Data"
									:key="item.index"
									:label="item.server_name"
									:value="item.id">
									</el-option>
								</el-select>
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
    /* 展示弹窗样式文件 */
    import '../../style/common.css' /*引入公共样式*/
	// js
	import {heightAuto} from '../../untils/heightAuto' //注意路径
	/* api */
	// gisList 列表
	// gisAdd 新增
	// gisDelete 删除
	// listEnterprisestreamServers 列出分配的流媒体服务器
	// gisGet 编辑查询信息
	import {gisList,gisAdd,gisDelete,listEnterprisestreamServers,gisGet,gisModify} from '../../api/gis'
	// common 
	// getRegionsbyPid 查询子企业
	// getRegiondetail 查询详情
	import {
	getRegionsbyPid,
	getRegiondetail,
	} from '../../api/commonapi'

	export default {
        data() {
			return {
				// 查询条件
				gis_name : '',
				manager_name_or_phonenum : '',
				// 新增／编辑弹窗状态  默认为新增
				addEditpopState : true,
				// 表格数据
				platformData : [],

				// 地区初始化数据 全国
				InitRegionfulldata : {
					"pid": "000000000000",
					"id": "000000000000",
					"timestamp": 0,
					"name" : '全国'
				},
				isShowregionFulldata : false, 
				props: {
					label: 'name',
					children: 'children',
				},
				/* 新增／编辑 弹窗 */
				editVisible : false,
				addForm : {
					ip_and_port : '',
					name : '',
					manager_name : '',
					manager_phonenum : '',
					stream_server_Data : [
						{
							exclusive: false,
							id: "1e025341-87de-4896-912e-44ded5776fab",
							org_code: "110000000000",
							priority: 999,
							server_code: "11135436292046327808",
							server_name: "嘉诚测试(109)",
						}
					],
					stream_server_id : '',
					// 地区参数
					region_name : '',
					region_code : '',
					region_full_code : '',
					region_full_name : '',
				},
				popTit : '',
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		methods:{
			// 初始化git列表数据
			getInitdata(){
				let objData = {
					"enterprise_id": localStorage.EnterpriseId,
					"page_number": this.page_total_pages - 1,
					"page_size": this.page_size
				}
				// 查询数据
				if(this.gis_name != ''){
					objData.gis_name = this.gis_name;
				}
				if(this.manager_name_or_phonenum != ''){
					objData.manager_name_or_phonenum = this.manager_name_or_phonenum;
				}
				gisList(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.platformData = res.data.data.list;
						this.platformData.map(function(item,index){
							item.fixedSort = index - 0 + 1;
						})
						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}
				});	
			},
			// 初始化当前 流媒体列表
			getInitStreamservers(){
				let objData = {
					"enterprise_id": localStorage.EnterpriseId,
				}
				listEnterprisestreamServers(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
						this.addForm.stream_server_Data = res.data.data;
					}
				});	
			},
			findData(){
				this.getInitdata();
			},
			clearData(){
				this.gis_name = '';
				this.manager_name_or_phonenum = '';
			},
			// 弹窗显示
			addDatalist(isAdd,scope){
				// 每次点击更新全局 弹窗状态
				// isAdd 1 新增  0 编辑
				if(isAdd){
					this.addEditpopState = true;
					this.popTit = '新增'
				}else{
					this.addEditpopState = false;
					this.popTit = '编辑'
					// 编辑内容初始化信息 
					this.gis_id = scope.id;
					let objData = {
						'gis_id' : 	this.gis_id
					}
					gisGet(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
						let message = res.data.data;
						this.editAssignment(message)
					}
				});	

				}
				this.editVisible = true;
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
				// 查询详情接口 递归查询所有父节点
				// 全过除外面
				if(data.id != "000000000000"){
					let objData = {
						"id": data.id,
						"timestamp": 0
					}
					getRegiondetail(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							console.log(res);
							// 当前点击的数据获取的数据
							this.addForm.region_full_name = res.data.data.region_details[0].names;
							this.addForm.region_full_code = res.data.data.region_details[0].ids;
							// 当前点击的数据
							this.addForm.region_code = data.id
							this.addForm.region_name = data.name
						}
					});	
				}else{
					// 同步数据
					this.addForm.region_full_name = '全国';
					this.addForm.region_full_code = '000000000000';
					// 当前点击的数据
					this.addForm.region_code = '000000000000'
					this.addForm.region_name ='全国'
				}
				
			},
			// 数据删除
			deleteClick(scope){
				console.log(scope); gisDelete
				let objData = {
					"gis_id": scope.id,
				}
				this.$confirm('是否删除?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							gisDelete(objData).then(res => {
								if (res.status === 200 && res.data.result == "ok") {
									
									this.$message({
											type: 'success',
											message: '删除成功!'
									});
									// 更新数据
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
				this.clearCacheddata()
			},
			// 弹窗 保存按钮  整理 请求参数
			saveClick(){
				// this.addEditpopState 新增／保存 全局状态
				if(this.addEditpopState){
					let objData = {
						"enterprise_id": localStorage.EnterpriseId,
						"ip_and_port": this.addForm.ip_and_port,
						"manager_name": this.addForm.manager_name,
						"manager_phonenum": this.addForm.manager_phonenum,
						"name": this.addForm.name,
						"region_code": this.addForm.region_code,
						"region_full_code": this.addForm.region_full_code,
						"region_full_name": this.addForm.region_full_name,
						"region_name": this.addForm.region_name,
						"stream_server_id": this.addForm.stream_server_id
					}
					this.addEditapiCommit(objData,true);
				}else{
					// 初始化 编辑内容
					console.log('编辑');
					let objData = {
						"gis_id": this.gis_id,
						"ip_and_port": this.addForm.ip_and_port,
						"manager_name": this.addForm.manager_name,
						"manager_phonenum": this.addForm.manager_phonenum,
						"name": this.addForm.name,
						"region_code": this.addForm.region_code,
						"region_full_code": this.addForm.region_full_code,
						"region_full_name": this.addForm.region_full_name,
						"region_name": this.addForm.region_name,
						"stream_server_id": this.addForm.stream_server_id
					}
					this.addEditapiCommit(objData,false);
				}
			},
			// 新增／编辑接口
			addEditapiCommit(obj,type){
					let objData = obj;
					// api 
					if(type){
						gisAdd(objData).then(res => {
							if (res.status === 200 && res.data.result == "ok") {
									this.$message({
										type: 'success',
										message: '新增成功!'
									});
									this.editVisible  = false;
									// 更新数据
									this.getInitdata();
									// 清除缓存数据
									this.clearCacheddata();

							}else{
								// 错误提示信息
								this.$message.error(res.data.error_description);
							}
						});
					}else{
						gisModify(objData).then(res => {
							if (res.status === 200 && res.data.result == "ok") {
									this.$message({
										type: 'success',
										message: '编辑成功!'
									});
									this.editVisible  = false;
									// 更新数据
									this.getInitdata();
									// 清除缓存数据
									this.clearCacheddata();

							}else{
								// 错误提示信息
								this.$message.error(res.data.error_description);
							}
						});
					}
					
			},
			// 清空操作
			clearCacheddata(){
					this.addForm.ip_and_port = '';
					this.addForm.manager_name = '';
					this.addForm.manager_phonenum = '';
					this.addForm.name = '';
					this.addForm.region_code = '';
					this.addForm.region_full_code = '';
					this.addForm.region_full_name = '';
					this.addForm.region_name = '';
					this.addForm.stream_server_id = '';
					this.isShowregionFulldata = false;
					this.gis_id = '';
			},
			// 编辑赋值操作
			editAssignment(msg){
				this.addForm.ip_and_port = msg.ip_and_port;
				this.addForm.manager_name =  msg.manager_name;
				this.addForm.manager_phonenum = msg.manager_phonenum;
				this.addForm.name =  msg.name;
				this.addForm.region_code =  msg.region_code;
				this.addForm.region_full_code = msg.region_full_code;
				this.addForm.region_full_name = msg.region_full_name;
				this.addForm.region_name = msg.region_name;
				this.addForm.stream_server_id = msg.stream_server.id;
			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitdata();
			},
			closeShowregionFulldata(){
				this.isShowregionFulldata = false;
			},
		},
		mounted: function() {
			let row = '.platformList'
			heightAuto(row)
			this.getInitdata();
			this.getInitStreamservers();
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
.zPage{
	margin-top: 50px;
}
#gisPlatformPop .block{
	width: 100%;
}
#gisPlatformPop .el-form-item{
	width: 100%;
}
</style>

<style lang="scss">
	#platform {
		.platformList {
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
		#platform {
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
		#platform .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#platform {
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
	.block-inline{
		width: 100%;
	}
	.block .el-input__inner{
		height: 36px;
		margin: 2px 0;
		line-height: 36px;
		border: 1px solid #3b4872;
	}
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
    .infoMsg{
        padding-left: 9px;
        display: inline-block;
        margin-top: 10px;
    }
    .checkboxBg{
        width: 94%;
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
	/* 弹窗 上传文件 */
	#upLoadpop .el-form-item__label{
		width: 19%!important;
		margin: 2px 0;
		line-height: 80px;
		background: #1b274c;
		border: 1px solid #3b4872;
	}
	#upLoadpop .filebtn{
		float: left;
		color: #fff;
		width: 90px;
		height: 36px;
		background: #4a567c;
		border-radius: 3px;
		position: absolute;
		z-index: 19;
		line-height: 36px;
		text-align: center;
		left: 0;
		top: 0;
	}
	#upLoadpop .el-form-item__content{
		width: 84%;
    	margin-left: 19%!important;
	}
	#upLoadpop .uploadBg{
		width: 100%;
    	height: 80px;
		margin: 2px 0;
		text-align: left;
		line-height: 44px;
		padding-left: 10px;
		background: #2a3558;
		border: 1px solid #3b4872;
	}
	#upLoadpop .filegroup{
		overflow: hidden;
	}
	#upLoadpop .iptvImg{
		margin-right: 10px;
		margin-top: 15px;
		float: left;
		width: 100px;
		height: 60px;
		overflow: hidden;
	}
	#uploadForm{
		float: left;
		width: 60%;
		margin-top: 7px;
		display: block;
		overflow: hidden;
	}
	#uploadForm .formLeft{
		float: left;
		width: 60%;
		height: 36px;
		overflow: hidden;
		margin-top: 16px;
		position: relative;
	}
	#uploadForm .formRight{
		float: left;
		overflow: hidden;
		margin-top: 16px;
	}
	#upLoadpop .fileUpbtn{
		float: left;
		color: #fff;
		width: 80px;
		height: 36px;
		cursor: pointer;
		background: #4a567c;
		border-radius: 3px;
		line-height: 36px;	
		text-align: center;
	}
	#files{
		position: relative;
		top: -4px;
		left: 29px;
	}
	#reason{
		height: 60px;
		overflow: hidden;
		padding: 0;
	}
	#reason .el-form-item{
		width: 100%;
		height: 60px;
		line-height: 60px;
	}
	#reason .el-form-item__label{
		height: 100%;
		margin: 2px 0;
	}
	/* 弹窗详情 左右 */
	#zDialogtex #detailW2{
		overflow: hidden;
	}
	#detailW2 li{
		width: 47%!important;
		margin: 0;
	}
	#detailW2 li:nth-child(2n){
		margin-left: 6%;
	}
</style>