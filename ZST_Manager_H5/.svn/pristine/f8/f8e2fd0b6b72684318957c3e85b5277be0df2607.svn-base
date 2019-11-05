<template>
	<div id="resoure" class="mRight">
		<div class="resoureList">
			<div class="zForm">
				<!-- <span class="paddingLeft">查询方式：</span> -->
				<div class="zSelect" style="display:none;">
					<el-select v-model="queryValue" class="zgroup" placeholder="--请选择--">
						<el-option v-for="item in queryData" 
						:key="item.index"  :label="item.value" :value="item.index"></el-option>
					</el-select>
				</div>
				<span class="paddingLeft">名称： </span><input v-model="keyName" class="zInput" type="text" placeholder="" />
                <button class="buttonradius" @click="findData">查询</button>
                <button class="buttonradius" @click="clearData">清空</button>
			</div>
			<div class="showData">
				<!-- tree 选中展示数据 -->
				<div class="tree">
					<el-tree
						ref="treeRef"
						:props="defaultProps"
						:data="InitializeData"
						:load="loadNode"
						lazy
						@node-click="handleNodeClick"
						>
					</el-tree>
				</div>
				<!-- table -->
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="tableData"
						>
							<el-table-column prop="monitor_name" label="监控名称"></el-table-column>
							<el-table-column prop="inspection_level" label="可用度" width="50px">
								<template slot-scope="scope">
									<span v-if='scope.row.inspection_level == 1'>极好</span>
									<span v-else-if='scope.row.inspection_level == 2'>优</span>
									<span v-else-if='scope.row.inspection_level == 3'>良</span>
									<span v-else-if='scope.row.inspection_level == 4'>中</span>
									<span v-else-if='scope.row.inspection_level == 5'>差</span>
								</template>	
							</el-table-column>
							<el-table-column prop="image_path.small" label="监控图片">
								<template slot-scope="scope">
									<img v-if="scope.row.image_path != undefined " 
									:src=scope.row.image_path.small alt="缩略图" class="imgSamll"
									@click="showBigimg(scope.row.image_path)">
									<span v-else>无</span>
								</template>	
							</el-table-column>
							<el-table-column prop="inspection_time" label="刷新时间">
								<template slot-scope="scope">
									<span>{{ scope.row.inspection_time | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="监控状态" width="100px">
								<template slot-scope="scope">
									<span v-if='scope.row.monitor_status = 0'>不在线</span>
									<span v-else>在线</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="操作" width="50px">
								<template slot-scope="scope">
									<span class="spanBtn" @click="checkThedetails(scope.row)">详情</span>
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
		<!-- 弹窗图片 -->
		<div class="imgCont" v-show="centerDialogVisible" @click="closePopimg">
			<img :src=originalImage alt="大图">
		</div>
		 <!-- 详情弹窗 -->
		<el-dialog  title="监控详情" 
			:visible.sync="detailPop"
			id="zDialogtext"
		 	width="50%">
			<div class="block">
				<li>
					<span class="liL">监控名称:</span>
					<span class="liR">{{detailData.name ? detailData.name : '未设置' }}</span>
				</li>
				<li>
					<span class="liL">监控接入服务号:</span>
					<span class="liR">{{detailData.group_id ? detailData.group_id : '未设置' }}</span>
				</li>
				<li>
					<span class="liL">通道号:</span>
					<span class="liR">{{detailData.monitor_id ? detailData.monitor_id : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">组织机构</span>
					<span class="liR">{{detailData.area_name ? detailData.area_name : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">设备IP地址</span>
					<span class="liR">{{detailData.ip_address ? detailData.ip_address : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">设备编码</span>
					<span class="liR">{{detailData.device_id ? detailData.device_id : '未设置'}}</span>
				</li>
                <li> 
					<span class="liL">设备原名称:</span>
					<span class="liR">{{detailData.source_name ? detailData.source_name : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">行政区域</span>
					<span class="liR">{{detailData.civil_code ? detailData.civil_code : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">地州市级</span>
					<span class="liR">{{detailData.city_code ? detailData.city_code : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">县市区级</span>
					<span class="liR">{{detailData.county_code ? detailData.county_code : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">乡镇</span>
					<span class="liR">{{detailData.town_code ? detailData.town_code : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">村社区</span>
					<span class="liR">{{detailData.village_code ? detailData.village_code : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">小区</span>
					<span class="liR">{{detailData.community_code ? detailData.community_code : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">基层加入单位</span>
					<span class="liR">{{detailData.grassroots_code ? detailData.grassroots_code : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">录入时间</span>
					<span class="liR">{{detailData.entry_time ? detailData.entry_time : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">经度</span>
					<span class="liR">{{detailData.latitude ? detailData.latitude : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">维度</span>
					<span class="liR">{{detailData.longitude ? detailData.longitude : '未设置'}}</span>
				</li>
				<li>
					<span class="liL">村社区</span>
					<span class="liR">{{detailData.village_code ? detailData.village_code : '未设置'}}</span>
				</li>
				<li class="inline">
					<span class="liL">国际平台</span>
					<span class="liR">{{detailData.plat_name ? detailData.plat_name : '未设置'}}</span>
				</li>
				<li class="inline">	
					<span class="liL">是否第三方国际平台</span>
					<span class="liR">{{detailData.catalog_platform_id ?  '视联网国标平台' : '未知'}}</span>
				</li>
			</div>
			<div class="userBtn">
				<el-button size="small" @click="detailPop = false">关闭</el-button>
			</div>
		</el-dialog>
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
	//  getMonitorlist   右侧信息接口
	//  listRootorganizationPaths   初始化接口
	//  listSuborganizations   左侧树结构
	//  getMonitorsearch   搜索 监控接口
	//  getSearchorganizations   搜索 地区接口
	//  getMonitordetail   详情接口
	import {getMonitorlist,listRootorganizationPaths,
	listSuborganizations,getMonitorsearch,getSearchorganizations,
	getMonitordetail
	} from  '../../api/resoure'
	export default {
        data() {
			return {
				// 查询方式 接口切换
				queryData : [
					/* {
						value : '地区',
						index : '1',
					}, */
					{
						value : '监控',
						index : '2',
					}
				],
				// 查询方式 接口判断 参数
				queryValue : '2',
				keyName : '',
				// 企业id
				enterpriseId :  localStorage.EnterpriseId,
				// 初始化 tree 数据
				InitializeData: [],
				defaultProps: {
					children: 'children',
          			label: 'name'
				},
				initData :  {
					"area_code": "11",
					"name": "北京",
					"parent_code": "0",
					"platform_id": 1,
					"total_count": 34649,
					"online_count": 10279,
					"fault_count": 20333,
					"health_count": 10279,
					"secrecy_count": 0
				},
				tableData: [],
				// 图片弹窗
				centerDialogVisible: false,
				// 原图地址
				originalImage : '',
				// 查看详情数据
				detailData : {},
				// 详情
				detailPop : false,
				// 右侧监控数据缓存数据 分页使用
				monitoring : {},
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 0,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		methods:{
			// 初始化数据
			getInitdata(){
				console.log('初始化数据')
				let objData = {
					"enterprise_id": this.enterpriseId
				}
				// 初始化数据接口
				listRootorganizationPaths(objData).then(res => {
					// 数据处理
					let arrayAll = res.data.data;
					let newArry = [];
					arrayAll.map(function(item, index){
						let len = item.length;
						item.map(function(item,index){
							// 判断是否是最后一项
							if(len - 1 == index){
								newArry.push(item);
							}
						})
					})
					// 赋值数组
					this.InitializeData = newArry;
				});	

			},
			// 地区查询接口
			getTregiondata(){
				console.log('地区接口')
				let objData = {
					"enterprise_id": this.enterpriseId,
					"is_security": true,
					"search_text": this.keyName
				}
				// 派出所
				getSearchorganizations(objData).then(res => {
					this.InitializeData = res.data.data
				});	
			},
			// 监控查询接口
			getMonitordata(){

				let objData = {
					"enterprise_id": this.enterpriseId,
					"is_security": true,
					"search_text": this.keyName,
					"page_number": this.page_total_pages - 1,
  					"page_size": 10,
				}
				// 广场
				getMonitorsearch(objData).then(res => {
					console.log(res);
					this.tableData = res.data.data.list
					/* 总条数 */
					this.page_total_items = res.data.data.page_total_items; 
					this.page_total_pages = res.data.data.page_number - 0 + 1;
				});	
			},
			// 查询
			findData(){
				// 判断 输入框是否为空
				if(this.keyName == ''){
					this.$message.error('请输入名称');
				}

				// 判断调用接口
				if(this.queryValue == ''){
					this.getInitdata();
				}else if(this.queryValue == '1'){
					this.getTregiondata();
				}else if(this.queryValue == '2'){
					this.page_total_items = 0; 
					this.page_total_pages = 1;
					this.getMonitordata();
				}

			},
			clearData(){
				this.queryValue = '';
				this.keyName = '';
				// 初始化接口
				this.getInitdata();
				// 右侧信息清空
				this.tableData = [];
				this.page_total_items = 0; 
				this.page_total_pages = 1;

			},
			// tree 结构解析 点击下拉加载数据
			loadNode(node, resolve) {
				let nodeData = this.InitializeData;
				if (node.level === 0) {
				 	return resolve(nodeData);
				}
				let objData = {
					"area_code": node.data.area_code,
					"enterprise_id": this.enterpriseId,
					"is_root": false,
					"is_security": true,
					"platform_id": node.data.platform_id
				}
				// 异步函数加载 子节点
				listSuborganizations(objData).then(res => {
					resolve(res.data.data)
				});
			},
			// 节点点击的回调函数
			handleNodeClick(data){
				// 清空分页缓存
				this.page_total_items = 0; 
				this.page_total_pages = 1;
				// 缓存信息
				this.monitoring = data;
				this.monitoringInformationlist(data)
				
			},
			// 节点点击查询监控信息列表
			monitoringInformationlist(data){
				// 右侧信息更新函数
				let objData = {
					"area_code": data.area_code,
					"enterprise_id": this.enterpriseId,
					"is_security": true,
					"page_number": this.page_total_pages - 1,
					"page_size": 10,
					"platform_id": data.platform_id
				}
				let obj = {
					"area_code": 11010801,
					"enterprise_id": "1",
					"is_security": true,
					"page_number": this.page_total_pages - 1,
					"page_size": 10,
					"platform_id": 1
				}
				/* 右侧信息渲染 */
				getMonitorlist(objData).then(res => {
					this.tableData  = res.data.data.list;
					/* 总条数 */
					this.page_total_items = res.data.data.page_total_items; 
					this.page_total_pages = res.data.data.page_number - 0 + 1;
				});
			},
			// 查看图片原始大图
			showBigimg(src){
				console.log(src);
				this.centerDialogVisible = true;
				this.originalImage = src.original
			},
			// 关闭图片详情弹窗
			closePopimg(){
				this.centerDialogVisible = false;
			},
			// 查看详情弹窗
			checkThedetails(row){

				let obj = {
					"enterprise_id": this.enterpriseId,
					"group_id": row.group_id,
					"monitor_id": row.monitor_id
				}
				getMonitordetail(obj).then(res => {
					this.detailData = res.data.data
					this.detailPop = true;
				});
			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				// 判断 全局查询状态
				if(this.queryValue == ''){
					// 模拟左侧点击事件 分页渲染
					this.monitoringInformationlist(this.monitoring);
				}else if(this.queryValue == '2'){
					// 点击查询右侧信息接口
					this.getMonitordata();
				}
			},
		},
		mounted: function() {
			let row = '.resoureList'
			heightAuto(row)
			this.getInitdata();
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
.onlyLine{
    display: inline-block;
    margin-top: 20px;
}
.zPage{
	margin-top: 50px;
}
/* 内容展示 */
.showData{
	margin-top: 20px;
    overflow: hidden;
    border: 1px solid #4a567c;
}
.showData .tree{
	margin-right: 20px;
    padding-top: 20px;
	float: left;
	width: 40%;
	border-right: 1px solid #4a567c;
	height: 500px;
	overflow-y: auto;
}
.showData .elTable{
    padding-top: 20px;
	float: left;
	width: 55%;
}
.imgSamll{
	cursor: pointer;
	width: 30px;
	height: 30px;
}
.imgCont{
	position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
	left: 0;
	background: rgba(238,238,238,.5);
    overflow: auto;
}
.imgCont img{
	position: absolute;
    left: 50%;
    top: 50%;
	transform: translate(-50%, -50%);
}
#zDialogtext .block{
	width: 100%;
}
#zDialogtext .block li{
	width: 50%;
}
#zDialogtext .block .inline{
	width: 100%;
}
#zDialogtext .block .inline .liL{
	width: 20%;
}
#zDialogtext .block .inline .liR{
	width: 80%;
}
</style>


<style lang="scss">
	#resoure {
		.resoureList {
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
		#resoure {
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
		#resoure .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#resoure {
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
    
    /* 测试删除样式 */

	#userAddModel3 .el-form-item {
		margin: 0;
		padding: 0;
		width: 91%;
		float: left;
	}
	#userAddModel3 .block-line .el-form-item{
		width: 95.5%;
	}
	#userAddModel3 .el-input__inner{
		height: 36px;
		margin: 2px 0;
		line-height: 36px;
		border: 1px solid #3b4872;
	}
	#userAddModel3  .el-form-item__label{
		height: 36px;
		margin: 2px 0;
		line-height: 36px;
		background: #1b274c;
		border: 1px solid #3b4872;
	}
	#userAddModel3 .el-tag--info, #platClass .el-select .el-tag{
		background-color: #9093991a;
		border-color: #90939933;
	}
	#userAddModel3 .dialog-footer{
		padding: 10px 20px 20px;
		display: block;
		margin:10px 0;
		text-align: right;
	}
</style>    