<template>
	<div id="resoure" class="mRight">
		<div class="resoureList">
			<div class="zForm">
			<!-- 	<span class="paddingLeft">查询方式：</span> -->
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
				<!-- :render-content="renderContent" 指定渲染函数 -->
				<div class="tree" id="treeDatacont">
					<el-tree
						ref="treeRef"
						:props="defaultProps"
						:data="InitializeData"
						:load="loadNode"
						lazy
						@node-click="handleNodeClick"
						:render-content="renderContent"
						>
					</el-tree>
				</div>
				<!-- table -->
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="tableData"
						>
							<el-table-column prop="name" label="终端名称"></el-table-column>
							<el-table-column prop="devno" label="终端号"></el-table-column>
							<el-table-column prop="" label="终端状态" width="100px">
								<template >
									<span>空闲</span>
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
	// getTerminallist  列出指定单位下的终端设备信息
	// listRootterminalRegionpath  列出当前企业分配的终端通讯录地区目录路径
	// listRootterminalRegions  列出当前企业分配的终端通讯录地区目录
	// listSubterminalRegionsdeparts  列出终端通讯录子级地区目录和单位
	// listTerminaldeparts  列出终端通讯录子级单位
	// getTerminalsearch  搜索终端设备信息
	// getSearchterminalRegions  搜索终端通讯录地区目录
	import {
		getTerminallist,
		listRootterminalRegionpath,
		listRootterminalRegions,
		listSubterminalRegionsdeparts,
		listTerminaldeparts,
		getTerminalsearch,
		getSearchterminalRegions,
		} from '../../api/addressbook'
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
						value : '终端号码或终端名称',
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
				let objData = {
					"enterprise_id": this.enterpriseId,
				}
				// 初始化数据接口
				listRootterminalRegionpath(objData).then(res => {
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
					// 赋值数组  后续需要 反查根目录
					this.InitializeData = newArry;
				});	
				
				console.log(this.InitializeData);

			},
			// 地区查询接口
			getTregiondata(){
				let objData = {
					"enterprise_id": this.enterpriseId,
					"is_security": true,
					"search_text": this.keyName
				}
			},
			// 终端查询接口
			getMonitordata(){

				let objData = {
					"enterprise_id": this.enterpriseId,
					"search_text": this.keyName,
					"page_number": this.page_total_pages - 1,
  					"page_size": 10,
				}
				// 搜索终端设备信息
				getTerminalsearch(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.tableData = res.data.data.list
						//  总条数
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
					
				});	
			},
			// 查询
			findData(){
				// 判断 输入框是否为空
				if(this.keyName == ''){
					this.$message.error('请输入名称')
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
				// 判断是否存在 unit_pid  
				// 存在 则为单位查询  不存在则为终端通讯录查询
				if(node.data.unit_id){
					//  加载子单位
					if(node.data.unit_id != '-1'){
						console.log(node.data.unit_id)
						console.log('单位存在子节点 查询')
						let objData = {
							"enterprise_id": this.enterpriseId,
							"unit_pid": node.data.unit_id
						}
						// 异步函数加载 子节点   单位
						listTerminaldeparts(objData).then(res => {
							if (res.status === 200 && res.data.result == "ok") {
								let  childArray = res.data.data
								childArray.map(function(item,inde){
									item.isMerge = true;
								})
								resolve(childArray);
							}
							
						});

					}else{
						resolve([]);
					}
				}else{
					// 加载子地区
					let objData = {
						"enterprise_id": this.enterpriseId,
						"parent_region_code": node.data.region_code
					}
					// 异步函数加载 子节点 地区
					listSubterminalRegionsdeparts(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							let directArray = [];
							let subTerminalarray = [];
							let newArry = [];
							if(res.data.data.direct_terminal_departs){
								directArray = res.data.data.direct_terminal_departs;
							}
							if(res.data.data.sub_terminal_regions){
								subTerminalarray = res.data.data.sub_terminal_regions;
							}
							// 遍历添加标记
							directArray.map(function(item,inde){
								item.isMerge = true;
							})
							//	 合并数组
							newArry = subTerminalarray.concat(directArray)
							// 合并渲染tree
							resolve(newArry);
						}
					});
				}
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

				console.log(data);
				// 参数
				let objData = {
					"enterprise_id": this.enterpriseId,
					"page_number":this.page_total_pages - 1,
					"page_size": 10,
					"unit_id" : data.unit_id
				}
				// 是否存在
				if(data.unit_id){
					// 查询
					if(data.unit_id == '-1'){
						objData.region_code = data.region_code
					}
					/* 右侧信息渲染 */
					getTerminallist(objData).then(res => {
						this.tableData  = res.data.data.list;
						// 总条数 
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					});
				}
				
			},
			// tree 节点渲染函数
			renderContent(h, { node, data, store }) {
				return (
					<span 
					style="flex: 1; display: flex; align-items: center; justify-content: 
					space-between; font-size: 14px; padding-right: 8px;">
					<span>
						<span style = {{color: (data.isMerge) ? "#57e29b" : "#fff"}}>{node.label}</span>
					</span>
					<span>
						</span>
					</span>
				)
				
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
		},
		computed: {
			
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
	border: 1px solid #4a567c;
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
					width: 200px;
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
</style>
