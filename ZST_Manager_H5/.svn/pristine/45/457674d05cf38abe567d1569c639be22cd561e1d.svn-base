<template>
	<div id="UserList" class="mRight">
		<div class="childeList">
			<div class="zForm">
				<span class="paddingLeft">企业名称：</span><input v-model="enterprise_name" class="zInput" type="text" placeholder="" />
				<span>管理员姓名或手机号：</span><input v-model="contacts_name_or_phonenum" class="zInput" type="text" placeholder="" />
				<button class="buttonradius" @click="findTablelistData">查询</button>
				<button class="buttonradius" @click="clearTablelistData">清空</button>
				<button class="buttonradius" style="float:right;" @click="addDatalist(1)">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="tableListdata"
						>
							<el-table-column prop="fixedSort" label="序号" width="180"></el-table-column>
							<el-table-column prop="name" label="企业名称" width="180"></el-table-column>
							<el-table-column prop="region_name" label="地区"></el-table-column>
							<el-table-column prop="contacts_names" label="联系人"></el-table-column>
							<el-table-column prop="contacts_phonenums" label="联系人手机号"></el-table-column>
							<el-table-column prop="" label="添加时间">
								<template slot-scope="scope">
									<span>{{ scope.row.createtime | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="操作">
								<template slot-scope="scope">
								<!-- 	<a href="javascript:;"><img src="../../../assets/edit2.png" alt="" style="margin-top:1px;"></a> -->
									<span class="spanBtn" @click="addDatalist(0,scope.row)">编辑</span>
									<span class="spanBtn" @click="shortTime(scope.row)">临时账号</span>
									<span class="spanBtn" @click="logoutClick(scope.row)">注销</span> 
								</template>
							</el-table-column>
						</el-table>
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
		<!-- 临时账号弹窗 -->
		<el-dialog  title="临时账号" 
			:visible.sync="shortTimepop"
			id="zDialogtext"
		 	width="30%"
			 >
			<div class="block">
				<li>
					<span class="liL">用户名：</span>
					<span class="liR">{{shortTimedata.account}}</span>
				</li>
				<li>
					<span class="liL">密码：</span>
					<span class="liR">{{shortTimedata.password}}</span>
				</li>
				<li>
					<span class="liL">有效期：</span>
					<span class="liR">{{shortTimedata.account_expiry  | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
				</li>
			</div>
			<div class="userBtn">
				<el-button size="small" class="sure" @click="temporaryAccountclick">延期</el-button>
				<el-button size="small" class="close" @click="closeShowtimepop">关闭</el-button>
			</div>
		</el-dialog>
		<!-- 新增／编辑弹窗 -->
		<!-- 新增权限分组 -->
		<div id="commonPop">
			<el-dialog
					class="permissionForm"
					title="编辑"
					:visible.sync="editEnterprise"
					:before-close="closePermission"
					:close-on-click-modal='false'
					width="60%"
					>
					<el-form ref="enterpriseFormdata" :model="enterpriseFormdata" label-width="120px">
						<div class="formTable" style="margin:0;">
							<div class="block">
								<el-form-item label="企业名称："  prop="name">
									<el-input v-model="enterpriseFormdata.enterprise_name" maxlength="50"></el-input>
								</el-form-item>
							</div>
							<div id="areaSelectpopover" v-if='popoverButtonstatus'>
								<el-form-item label="地区："  prop="name">
									<el-input 
										v-model="enterpriseFormdata.region_full_name" 
										maxlength="50"
										@focus="isShowregionFulldata = true"
									></el-input>
									<div class="treeCont" v-if="isShowregionFulldata" style="height:240px;">
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
							<div class="block" v-else>
								<el-form-item label="地区："  prop="name">
									<el-input disabled="disabled" v-model="enterpriseFormdata.region_full_name" maxlength="50"></el-input>
								</el-form-item>
							</div>
							<div class="block block-line">
								<el-form-item label="联系人："  prop="name">
									<el-input v-model="enterpriseFormdata.contacts_names" maxlength="50"></el-input>
								</el-form-item>
							</div>
							<div class="block block-line">
								<el-form-item label="联系人手机号"  prop="name">
									<el-input v-model="enterpriseFormdata.contacts_phonenums" maxlength="50"></el-input>
								</el-form-item>
							</div>
						</div>
						<div class="span" style="height:20px;">
							<ul>
								<li v-for='item in monitorSubmitArray' :key="item.index">{{item.name}}</li>
							</ul>
						</div>
						<div id="tabChagecont">
								<el-tabs v-model="tabSwitchstateChange" type="border-card" @tab-click="tabHandleclick">
									<el-tab-pane :disabled="tabSwitchstate" label="权限分配" name="first" class="tabSelectpane">
										<el-checkbox-group v-model="permissionsListvalue">
											<el-checkbox 
											v-for="item in permissionsList" :key="item.index"
											:label="item.name"
											>{{item.comment}}</el-checkbox>
										</el-checkbox-group>
									</el-tab-pane> 
									<el-tab-pane :disabled="tabSwitchstate" label="流媒体服务器" name="second" class="tabSelectpane">
										<span>选择流媒体服务器：</span>
										<el-select v-model="enterpriseStreamserversValue"
										placeholder="请选择" class="tabSelect" 
										@change="enterpriseStreamserverchange" 
										 >
											<el-option
											v-for="item in enterpriseStreamserversarray"
											:key="item.id"
											:label="item.server_name"
											:value="item.id"
											>
											</el-option>
										</el-select>
									</el-tab-pane>
									<!-- <el-tab-pane :disabled="tabSwitchstate" label="辅助服务器" name="second" class="tabSelectpane">
										<span>选择辅助服务器：</span>
										<el-select v-model="assistServersvalue" placeholder="请选择" class="tabSelect">
											<el-option
											v-for="item in assistServerslist"
											:key="item.id"
											:label="item.name"
											:value="item.id">
											</el-option>
										</el-select>
									</el-tab-pane> -->
									<el-tab-pane :disabled="tabSwitchstate" label="监控资源分配" name="third" class="tabSelectpane">
										<!-- 
											@current-change="monitorResourcechange"
											@check-change='monitorCheckchangdata'
											:load="monitorResourcetree"
											lazy
											@check-change='monitorCheckchangdata'
											:default-checked-keys="this.monitorDefaultchecked"
										  选中事件 -->

										<el-tree
											class="tabTreecont"
											:props="props2"
											:data="monitorResourceallocationdata"
											node-key="unique_code"
											ref="monitorTree"
											@check-change='monitorCheckchangdata'
											:default-checked-keys="this.monitorDefaultchecked"
											:load="monitorResourcetree" 
											lazy
											accordion
											show-checkbox
										>
										</el-tree>
									</el-tab-pane> 
									<el-tab-pane :disabled="tabSwitchstate" label="终端通讯录分配" name="fourth" class="tabSelectpane">
										<!-- 		:load="terminalAddressbookTree" -->
										<el-tree
											class="tabTreecont"
											:props="props"
											:data = "terminalAddressbookTreedata"
											node-key="unique_code"
											ref="terminaTree"
											:render-content="renderContent"
											@check-change='termianCheckchangdata'
											:default-checked-keys="this.terminalDefaultchecked"
											:load="terminalAddressbookTree" 
											lazy
											accordion
											show-checkbox
										>
										</el-tree>
									</el-tab-pane>
								</el-tabs>
							</div>
						<div class="userBtn">
							<span slot="footer" class="dialog-footer">
								<el-button type="primary" @click="btnSavedata">保 存</el-button>
								<el-button @click="closePermission">取 消</el-button>
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
	import '../../style/common.css' /*引入公共样式*/
	// js
	import {heightAuto,toShort,splitCode} from '../../untils/heightAuto' //注意路径
	/* 操作api */
	// listSubenterpriseInfos  获取子企业列表
	// unregisterEnterprise 注销企业
	// getCasualadminInfo 临时账号信息
	// postponeCasualadmin 临时账号延期
	// registerSubenterprise 注册子企业
	// getSubenterpriseInfo 查询企业信息
	// modifyEnterprise 编辑企业信息
	// listEnterprisestreamServers 流媒体服务器
	import {listSubenterpriseInfos,
			unregisterEnterprise,
			getCasualadminInfo,
			postponeCasualadmin,
			registerSubenterprise,
			getSubenterpriseInfo,
			modifyEnterprise,
			listEnterprisestreamServers,
			} from '../../api/childenterprise'
	/* 初始化接口 */
	// listEnterprisefunctions  列出企业可分配的所有功能权限
	// listAllassistServers  列出所有辅助服务器
	// listParentmonitorResourceorganizationPaths  列出监控平台（唐古拉）中指定组织机构（区域）的下属组织机构（区域） 有条件
	// listSubmonitorResourceorganizations  列出监控平台（唐古拉）中指定组织机构（区域）的下属组织机构（区域） 有条件
	// getTerminalregionPath 	获取终端通讯录地区目录路径   /admin/api/v1/enterprise_management/get_terminal_region_path
	// getTerminalregionsAnddeparts 获取终端通讯录子级地区目录和单位 	 1 区分父级别
	// getTerminaldeparts 获取终端通讯录子级地区 单位   				2 区分父级别
	import {listEnterprisefunctions,
			listAllassistServers,
			listSubmonitorResourceorganizations,
			listParentmonitorResourceorganizationPaths,
			getTerminalregionPath,
			getTerminalregionsAnddeparts,
			getTerminaldeparts,
			} from '../../api/childenterprise'
	/* 公共接口 */
	//  getRegionsbyPid 获取子节点
	//  getRegiondetail 获取详情节点数据 提交使用
	import {
			getRegionsbyPid,
			getRegiondetail,
			} from '../../api/commonapi'

	export default {
        data() {
			return {
				// 查询数据
				contacts_name_or_phonenum : '',
				enterprise_name : '',
				/* 表格数据 */
				tableListdata : [],
				// 临时账号弹窗
				shortTimepop : false,
				// 临时账号数据
				shortTimedata : {},
				/* 新增／编辑弹窗 数据 */
				editEnterprise : false,	// 弹窗展示
				// enterpriseFormdata.
				enterpriseFormdata : {	//	提交数据集合
					enterprise_name: "",
					enterprise_id: "",
					contacts_names : '',
					contacts_phonenums : '',
					region_code: "",
					region_full_code: "",
					region_full_name: "",
					region_name: "",
				},
				// wantch 数据变化以来  资源和终端 初始化渲染时为 fasle
				dataVariationdependence : '',
				// tab 是否可切换
				tabSwitchstate : false,
				// 地区选择数据
				isShowregionFulldata : false,
				InitRegionfulldata : {		// 地区初始化数据
					"pid": "000000000000",
					"id": "000000000000",
					"timestamp": 0,
					"name" : '全国'
				},
				props: {
					label: 'name',
					children: 'children',
				},
				props2: {
					label: 'name',
					children: 'children',
				},
				// 地区下拉缓存的 数据
				cacheRegionchangeData : {},
				permissionsList : [],		// 所有权限
				permissionsListvalue: [],
				assistServerslist: [],		// 所有辅助服务器
				assistServersvalue: '',   	// 辅助服务器 id
				assistServersvalueId: 'local_embedded_assist_server',   	// 辅助服务器 固定id

				tabSwitchstateChange: 'first',
				// 监控资源  根节点数据 动态查询
				monitorResourceallocationdata: [], 
				// 监控  默认 勾选数组
				monitorDefaultchecked : [],
				// 缓存 监控 node信息
				monitorNode : {},
				monitorResolve : '',


				// 终端通讯录默认 根节点数据 []
				terminalAddressbookTreedata : [],	
				// 终端 编辑时 默认勾选数组
				terminalDefaultchecked : [],
 				// 缓存 终端 node信息
				terminalNode : {},
				terminalResolve : '',
				// 弹窗按钮 新增／编辑 状态  默认为新增状态
				popoverButtonstatus : true,

				// 流媒体服务器
				enterpriseStreamserversarray : [],
				enterpriseStreamserversValue : '',
				// 提交数组集合
				submitServerArray : [],
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数

				// 监控提交数据集合
				monitorSubmitArray : [],
			}
		},
		methods:{
			// 列表数据初始化
			getInitdata(){
				let objData = {
					"page_number": this.page_total_pages - 1,
					"page_size": this.page_size,
					"parent_enterprise_id": localStorage.EnterpriseId
				}
				if(this.contacts_name_or_phonenum != ''){
					objData.contacts_name_or_phonenum = this.contacts_name_or_phonenum;
				}
				if(this.enterprise_name != ''){
					objData.enterprise_name = this.enterprise_name;
				}
				// 查询接口
				listSubenterpriseInfos(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.tableListdata = res.data.data.list
						this.tableListdata.map(function(item,index){
							item.fixedSort = index - 0 + 1;
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
			// 初始化 列出企业可分配的所有功能权限
			getInitpermissionsdata(){
				// 查询接口
				listEnterprisefunctions({}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.permissionsList = res.data.data
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 初始化所有辅助服务器
			getInitassistServersdata(){
				let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
				// 查询接口
				listAllassistServers(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						let rD = res.data.data
						this.assistServersvalue = rD.api_url
						//this.assistServersvalue = 'local_embedded_assist_server';

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 根据条件 初始化 监控资源  
			getInitlistSubmonitorResourceorganizationsdata(){
				// 查询接口
				let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
				listParentmonitorResourceorganizationPaths(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						// 处理 data 输入 node 多个根节点处理

						// 数组遍历 取第一个添加到数据
						let array = res.data.data;
						let sortingArray = []
						array.map(function(item,index){
							item.map(function(t,i){
								if(i == 0){
									sortingArray.push(t);
								}
							})
						})
						// 赋值
						this.monitorResourceallocationdata = sortingArray;

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 监控 checke 
			monitorCheckchangdata(data, type, childState){

				// 选中的数组 默认勾选 直接添加
				let checkArray = [];
				checkArray.push(data);
				
				if(type){
					var newArray = [];
					this.monitorDefaultchecked.push(data);

				}else{
					// 减 遍历删除
					checkArray.forEach(itemData => {
						this.monitorDefaultchecked.forEach((itemArr, index) => {
							if (itemData.unique_code === itemArr.unique_code) {
								this.monitorDefaultchecked.splice(index, 1);
							}
						});
					});
				}
			},
			// 根据条件 初始化 终端通讯录
			getTerminaladdressBookinformation(){
				
				let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}

				getTerminalregionPath(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
						//this.terminalAddressbookTreedata = res.data.data;

						// 数组遍历 取第一个添加到数据
						let array = res.data.data;
						let sortingArray = []
						array.map(function(item,index){
							item.map(function(t,i){
								if(i == 0){
									sortingArray.push(t);
								}
								// name 转换
								t.name = t.region_name
								if(t.unit_id){
									t.name = t.unit_name
									t.isMerge = true;
									
								}
							})
						})

						console.log(sortingArray)
						this.terminalAddressbookTreedata = sortingArray


						// 成功之后调用 tree 懒加载 函数
						/* let node = this.terminalNode;
							node.childNodes = [];
						let resolve = this.terminalResolve;
						console.log(node);
						this.terminalAddressbookTree(node,resolve); */

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 查询
			findTablelistData(){
				this.getInitdata();
			},
			// 清空
			clearTablelistData(){
				this.contacts_name_or_phonenum = '';
				this.enterprise_name = '';
			},
			/* 临时账号 */
			shortTime(scope){
				// 查询 临时账号信息
				let objData = {
					"enterprise_id": scope.id,
				}
				getCasualadminInfo(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						
						this.shortTimedata = res.data.data;
						this.shortTimepop = true;

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	

			},
			// 临时账号延期
			temporaryAccountclick(){
				// 查询 临时账号信息
				let objData = {
					"casual_admin_id": this.shortTimedata.id,
				}
				postponeCasualadmin(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.$message.success('延期成功');

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 关闭临时账号
			closeShowtimepop(){
				this.shortTimepop = false;
			},
			/* 注销 */
			logoutClick(scope){

				let objData = {
						"enterprise_id": scope.id,
						"parent_enterprise_id": localStorage.EnterpriseId
					}

				this.$confirm('是否执行注销操作?', '消息', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					
					var _this = this;
										
					unregisterEnterprise(objData).then(function (res) {
						if (res.status === 200 && res.data.result == "ok") {

							_this.$message({
								message: '注销成功',
								type: 'success'
							});
							// 更新数据
							_this.getInitdata()
						}else{
							// 错误提示信息
							_this.$message.error(res.data.error_description);
						}
					}).catch(function (error) {
						console.log(error);
					});

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消注销'
					});
				});

			},
			/* 新增／编辑弹窗操作 */
			// 地区下拉选择
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
			// 地区点击选择  点击确认按钮 才可以查询 
			synchronouRegionsdata(data){
				// 缓存 data 数组 去 code 值
				this.cacheRegionchangeData = data;
				if(data.id != "000000000000"){
					let objData = {
						"id": data.id,
						"timestamp": 0
					}
					getRegiondetail(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 当前点击的数据获取的数据
							this.enterpriseFormdata.region_full_name = res.data.data.region_details[0].names;
							this.enterpriseFormdata.region_full_code = res.data.data.region_details[0].ids;
							// 当前点击的数据
							this.enterpriseFormdata.region_code = data.id
							this.enterpriseFormdata.region_name = data.name
							// 确定 改变 tab 状态
							this.tabSwitchstate = false;
							this.tabSwitchstateChange = 'first';
							// 监听数据变化
							//this.dataVariationdependence = res.data.data.region_details[0].names;
						}
					});	
				}else{
					// 同步数据
					this.enterpriseFormdata.region_full_name = '全国';
					this.enterpriseFormdata.region_full_code = '000000000000';
					// 当前点击的数据
					this.enterpriseFormdata.region_code = '000000000000'
					this.enterpriseFormdata.region_name ='全国'
				}
			},
			// 地区下拉 确认按钮 
			mackSurearea(){
				//console.log(this.cacheRegionchangeData)
				// 赋值 区域 
				// 确定 改变 tab 状态
				this.tabSwitchstate = false;
				this.tabSwitchstateChange = 'first';
				// 关闭下拉
				this.isShowregionFulldata = false;
				// 监听数据变化
				//this.dataVariationdependence = res.data.data.region_details[0].names;
			},
			// 地区下拉关闭按钮
			closeShowregionFulldata(){
				this.isShowregionFulldata = false;
			},
			/* 监控资源分配tree 接口  新增为懒加载   */
			monitorResourcetree(node,resolve,data){
				//console.log('监控 tree')
				// 缓存node 信息 首次调用 

				this.monitorNode = node;
				this.monitorResolve = resolve;

				if(node.level >= 1) { // 二级节点
					// 异步加载
					this.getMonitorchildrenNode(node,resolve)
				}

				//  默认 勾选
				if(this.monitorDefaultchecked.length != 0){
					// 处理数据 取 unique_code 为数组 纯数组 
					let disArray = this.monitorDefaultchecked;
					let setCheckedkeyArray = []
					for(let i = 0; i < disArray.length; i++){
						setCheckedkeyArray.push(disArray[i].unique_code);
					}
					this.$refs.monitorTree.setCheckedKeys(setCheckedkeyArray)
				}
			},
			// 监控资源下拉接口
			getMonitorchildrenNode(node, resolve){

				// 全国节点 下拉数据
				let objData = {
						// 区域 
						"area_code": node.data.area_code,
						"assist_server_id": this.assistServersvalueId,
						"is_root": false,
						"is_security": true,
						"platform_id": node.data.platform_id
					}
				// 监控资源子节点获取 api 
				listSubmonitorResourceorganizations(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						resolve(res.data.data)
						//  默认 勾选
						if(this.monitorDefaultchecked.length != 0){
							// 处理数据 取 unique_code 为数组 纯数组 
							let disArray = this.monitorDefaultchecked;
							let setCheckedkeyArray = []
							for(let i = 0; i < disArray.length; i++){
								setCheckedkeyArray.push(disArray[i].unique_code);
							}
							console.log(setCheckedkeyArray);
							this.$refs.monitorTree.setCheckedKeys(setCheckedkeyArray)
						}
					}
				});	
			},
			/* 终端通讯录分配 tree 接口 新增为懒加载  合并数组 动态渲染区分*/
			terminalAddressbookTree(node,resolve,data){
				//console.log('终端 tree')
				// 缓存node 信息 首次调用 
				let first = true;
				if(first){
					this.terminalNode = node;
					this.terminalResolve = resolve;
					first = false;
				}
				/* if (node.level === 0) {
					return resolve(this.terminalAddressbookTreedata);
				} */
				// 区分父级节点是否为区域
				if(node.data.unit_id){
					//  加载子单位
					if(node.data.unit_id != '-1'){
						let objData = {
							"assist_server_id": this.assistServersvalueId,
							"unit_pid": node.data.unit_id
						}
						// 异步函数加载 子节点   单位
						getTerminaldeparts(objData).then(res => {
							if (res.status === 200 && res.data.result == "ok") {
								let  childArray = res.data.data
								childArray.map(function(item,inde){
									item.isMerge = true;
								})
								resolve(childArray);
								// 渲染 子节点  默认 勾选
								if(this.terminalDefaultchecked.length != 0){
									// 处理数据 取 unique_code 为数组 纯数组 
									let disArray = this.terminalDefaultchecked;
									let setCheckedkeyArray = []
									for(let i = 0; i < disArray.length; i++){
										setCheckedkeyArray.push(disArray[i].unique_code);
									}
									this.$refs.terminaTree.setCheckedKeys(setCheckedkeyArray)
								}
							}
							
						});

					}else{
						resolve([]);
					}
				}else{
					// 区域
					let objData = {
						"assist_server_id": this.assistServersvalueId,
						"parent_region_code": node.data.region_code
					}
					// 终端通讯录区域子节点 包括 区域和单位
					getTerminalregionsAnddeparts(objData).then(res => {
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

							// 渲染 子节点  默认 勾选
							if(this.terminalDefaultchecked.length != 0){
								// 处理数据 取 unique_code 为数组 纯数组 
								let disArray = this.terminalDefaultchecked;
								let setCheckedkeyArray = []
								for(let i = 0; i < disArray.length; i++){
									setCheckedkeyArray.push(disArray[i].unique_code);
								}
								this.$refs.terminaTree.setCheckedKeys(setCheckedkeyArray)
							}
						}
					});	
				}					
			},
			// tree 终端通讯录节点渲染函数
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
			// 终端勾选 数据监听 
			termianCheckchangdata(data, type, childState){
				// terminalDefaultchecked
				// 选中的数组 默认勾选 直接添加
				let checkArray = [];
				checkArray.push(data);
				
				if(type){
					console.log('新增')
					var newArray = [];
					this.terminalDefaultchecked.push(data);

				}else{
					console.log("删除");
					// 减 遍历删除
					checkArray.forEach(itemData => {
						this.terminalDefaultchecked.forEach((itemArr, index) => {
							if (itemData.unique_code === itemArr.unique_code) {
								this.terminalDefaultchecked.splice(index, 1);
							}
						});
					});
				}
			},
			// 弹窗展示
			addDatalist(type,scope){
				// 1 新增   0 编辑
				if(type){
					// 新增
					// 按钮 状态 判断 地区 样式
					this.popoverButtonstatus = true;
					// 显示弹窗
					this.editEnterprise = true;
					// 清除 默认勾选数据
					this.terminalDefaultchecked = [];
					this.monitorDefaultchecked = [];
				}else{
					this.popoverButtonstatus = false;
					// tab 可以切换
					this.tabSwitchstate = false;
					this.tabSwitchstateChange = 'first';

					// 清除 默认勾选数据
					this.terminalDefaultchecked = [];
					this.monitorDefaultchecked = [];
						
					// 编辑
					let objData = {
						"enterprise_id": scope.id,
  						"parent_enterprise_id": localStorage.EnterpriseId
					}
					// 查询企业信息
					getSubenterpriseInfo(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							let rD = res.data.data
							console.log(rD);
							/* 基本信息 */
							// 企业名字
							this.enterpriseFormdata.enterprise_name = rD.enterprise_name
							this.enterpriseFormdata.enterprise_id = rD.enterprise_id
							// 地区 集合
							this.enterpriseFormdata.region_name = rD.region_name
							this.enterpriseFormdata.region_code = rD.region_code
							this.enterpriseFormdata.region_full_code = rD.region_full_code
							this.enterpriseFormdata.region_full_name = rD.region_full_name

							// 联系人
							this.enterpriseFormdata.contacts_names = rD.contacts_names
							// 手机号码
							this.enterpriseFormdata.contacts_phonenums = rD.contacts_phonenums
 
							// 权限分配
							this.permissionsListvalue = rD.allocated_enterprise_functions;
							// 辅助服务器
							this.assistServersvalue = rD.assist_server.id;

							// 监控资源 默认勾选数组  monitor_resource_organizations
							this.monitorDefaultchecked = rD.monitor_resource_organizations;

							// 终端默认 勾选数组
							this.terminalDefaultchecked = rD.terminal_regions;

							console.log(this.terminalDefaultchecked)

							// 显示弹窗
							this.editEnterprise = true;
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	

				}
			},
			// 弹窗 按钮 新增／编辑 保存    aaaaa
			btnSavedata(){

			
				let type = this.popoverButtonstatus;

				if(type){
					// 新增
					let objData = this.parametersNeaten();

					this.registeredSubenterprise(objData);
				}else{
					// 编辑
					let objData = this.parametersNeaten();
					this.submitEditorialinformation(objData);
				}
			},
			// 新增提交数据接口
			registeredSubenterprise(obj){
				let objData = obj;

				console.log(objData);

				// 新增接口
				registerSubenterprise(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res)
						this.$message.success('新增成功');
						// 清空缓存数据
						this.clearCachedata();
						// 更新列表
						this.getInitdata();
						
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	

			},
			// 编辑提交接口 modifyEnterprise
			submitEditorialinformation(obj){
				let objData = obj;
				console.log(objData);
				// enterprise_id
				objData.enterprise_id = this.enterpriseFormdata.enterprise_id;
				// 新增接口
				modifyEnterprise(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res)
						this.$message.success('编辑成功');
						// 清空缓存数据
						this.clearCachedata();
						// 更新列表
						this.getInitdata();
						
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 新增／编辑 参数整理
			parametersNeaten(){
				let objData = {
					//  基本信息
					"allocated_enterprise_functions": this.permissionsListvalue,	//  权限分配
					"assist_server_id": this.assistServersvalueId,	// 分配的辅助服务器ID
					"contacts_names": this.enterpriseFormdata.contacts_names,
					"contacts_phonenums": this.enterpriseFormdata.contacts_phonenums,
					"enterprise_name": this.enterpriseFormdata.enterprise_name,
					// 企业 相关
					"parent_enterprise_id": localStorage.EnterpriseId,
					"region_code": this.enterpriseFormdata.region_code,
					"region_full_code": this.enterpriseFormdata.region_full_code,
					"region_full_name":  this.enterpriseFormdata.region_full_name,
					"region_name": this.enterpriseFormdata.region_name,
				};



				// 流媒体服务器
				objData.enterprise_streamservers = this.submitServerArray;
				// 分配的监控资源目录  勾选的数据集合
				let monitorChangedata  = [];
				if(this.popoverButtonstatus){
					monitorChangedata = this.$refs.monitorTree.getCheckedNodes()
				}else{
					monitorChangedata = this.monitorDefaultchecked
				}
			
				

				// 遍历 过滤数据 修改为提交数据
				let monitorCachearray = [];
				monitorChangedata.map(function(item){
					let monitorCacheobj = {};
					monitorCacheobj.region_name = item.name ? item.name : item.region_name;
					monitorCacheobj.region_code = item.area_code ? item.area_code : item.region_code ;
					monitorCacheobj.platform_id = item.platform_id;
					monitorCacheobj.security = item.security;
					monitorCachearray.push(monitorCacheobj);
				}) 
				// 赋值
				objData.monitor_resource_organizations = monitorCachearray ? monitorCachearray : [] ;

				// 分配的 终端资源目录  勾选的数据集合
				let terminalRegions = [];
				if(this.popoverButtonstatus){
					terminalRegions = this.$refs.terminaTree.getCheckedNodes()	
				}else{
					terminalRegions = this.terminalDefaultchecked
				}


				let terminalCachearray = [];
				let terminalCacheobj = {}
				// 遍历 过滤数据  数据整理
				console.log(terminalRegions);

				terminalRegions.map(function(item){
					terminalCacheobj.region_name = item.name;
					terminalCacheobj.region_code = item.region_code;
					terminalCacheobj.unique_code = item.unique_code;
					terminalCacheobj.id = item.id;
					// 判断是否为单位 添加  unit_id 字端
					if(item.isMerge){
						terminalCacheobj.region_name = '';
						terminalCacheobj.unit_name = item.unit_name
						terminalCacheobj.unit_id = item.unit_id
						terminalCacheobj.unit_pid = item.unit_pid
					}
					terminalCachearray.push(terminalCacheobj);
					terminalCacheobj = {};
				})

				// 赋值
				objData.terminal_regions = terminalCachearray ? terminalCachearray : [] ;
				
				return objData;
			},
			// 关闭弹窗
			closePermission(){
				this.clearCachedata();
			},
			// 清空缓存数据 this.tabSwitchstate = false;
			clearCachedata(){

				this.editEnterprise = false;			// 弹窗状态
				this.tabSwitchstate = false;			// tab 切换状态  true 为不可切换
				this.tabSwitchstateChange = 'first';			// tab 默认选项
				// 提交 数据集合
				this.enterpriseFormdata = {
					enterprise_name: "",
					enterprise_id: "",
					contacts_names : '',
					contacts_phonenums : '',
					region_code: "",
					region_full_code: "",
					region_full_name: "",
					region_name: "",
				};
				// 权限数据
				this.permissionsListvalue = [];	
				// 辅助服务器	
				this.assistServersvalue = '';		
				// 缓存的 勾选数据集合 编辑时 会赋值
				this.terminalDefaultchecked = [];
				this.monitorDefaultchecked = [];
				// 清空 监控tree

			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitdata();
			},
			// tab 选中时候 
			tabHandleclick(tab){	
				// third  fourth

				console.log(tab.name);

				// 拉去 超管分配的 监控和终端数据
				if(tab.name == 'third'){
					this.monitorResourceallocationdata = [];
					this.getInitlistSubmonitorResourceorganizationsdata();
				}else if(tab.name == 'fourth'){
					//  清空 根数据
					this.terminalAddressbookTreedata = [];
					this.getTerminaladdressBookinformation();
				}
			},
			// 流媒体
			getInitserversdata(){
				// listEnterprisestreamServers
				let objData = {
					 "enterprise_id": localStorage.EnterpriseId
				}
				listEnterprisestreamServers(objData).then(res => {

					if (res.status === 200 && res.data.result == "ok") {
						this.enterpriseStreamserversarray = res.data.data

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});

			},
			// 流媒体 change
			enterpriseStreamserverchange(code){
				// 保留一个
				let newArray = []
				this.enterpriseStreamserversarray.map(function(item,index){
					if(item.id == code){
						newArray.push(item);
					}

				})
				this.submitServerArray = newArray;
			},
			// node
			monitorResourcechange(data,node){
				let _this = this;
				console.log(data)
				console.log(node)
			}
		},
		mounted: function() {
			let row = '.childeList'	
			heightAuto(row)
			this.getInitdata()
			this.getInitpermissionsdata();
			this.getInitassistServersdata(); 
			// 流媒体 
			this.getInitserversdata()
			/*  需要监听函数 */
			/* this.getInitlistSubmonitorResourceorganizationsdata();
			this.getTerminaladdressBookinformation(); */
		},
	}
	
</script>
<style scoped>
.spanBtn{
  cursor: pointer;
  margin-left: 5px;
}
.dialog-footer{
	float: right;
	margin: 20px;
}
.userBtn{
	overflow: hidden;
    padding-top: 24px;
    text-align: right;
}
/* 区域tab切换 */
#areaTab{
   	text-align: center;
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0px;
    z-index: 4;
    background: #2a3558;
}
#tabChagecont{
	width: 100%;
	height: 350px;
	background: #4a567c;
}
#tabChagecont .el-form-item__content{
	margin: 0;
}
#tabChagecont .tabSelect{
	width: 400px;
    float: left;
}
#tabChagecont .tabSelectpane {
	margin: 20px;
}
#tabChagecont .tabSelectpane>span{
	margin-right: 20px;
	float: left;
	font-size: 14px;
	height: 36px;
	line-height: 36px
	
}
#tabChagecont .tabTreecont{
	height: 250px;
	overflow-y: auto;
}

</style>

<style lang="scss">
	#UserList {
		.childeList {
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
					width: 120px;
					height: 36px;
					font-size: 14px;
					margin-left: 10px;
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
			#userEditModel .el-dialog{
				width: 1100px;
				top: 50%;
				.el-dialog__body {
					padding: 24px 24px 18px;
					.el-checkbox {
						float: left;
					}
					.textarea {
						clear: both;
						height: 70px;
						overflow: hidden;
						.el-form-item__label {
							height: 70;
							background: #1b274c;
							line-height:70px;
						}
						.el-form-item__label {
							margin: 2px 0;
							background: #1b274c;
							border: 1px #3b4872 solid;
						}
					}
					.textarea2 {
						clear: both;
						height: 44px;
						overflow: hidden;
						.el-form-item__label {
							float: left;
							height: 44px !important;
							line-height: 44px;
							background: #1b274c;
							border: 1px #3b4872 solid;
						}
					}
					.textareatree {
						height: 38px;
						position: relative;
						overflow: visible !important;
						.el-form-item__label {
							height: 36px;
							line-height: 36px;
						}
						.checkboxBg2 {
							width: 104.7%;
							height: 34px;
							margin: 2px 0;
							text-align: left;
							overflow: hidden;
							padding-left: 10px;
							background: #2a3558;
							border: 1px #3b4872 solid;
							.framework {
								height: 32px;
								line-height: 32px;
							}
						}
					}
					.el-form-item {
						margin: 0;
						padding: 0;
						width: 91%;
						float: left;
					}
					.el-textarea {
						width: 106.2%;
					}
					#uploadForm {
						margin-top: 18px;
						width: 8px;
					}
					.uploadbg {
						width: 804px;
						height: 66px;
						margin: 2px 0;
						padding-left: 10px;
						background: #2a3558;
						border: 1px #3b4872 solid;
					}
					.filegroup {
						height: 70px;
						overflow: hidden;
						position: relative;
						padding-top: 10px;
						text-align: left;
					}
					.iptvImg {
						float: left;
						width: 100px;
						height: 50px;
						overflow: hidden;
						margin-top: 6px;
						text-align: left;
					}
					.iptvImg img {
						max-height: 50px;
						max-width: 100px;
					}
					#uploadForm {
						float: left;
						width: 80%;
						height: 32px;
						margin-top: 16px;
						display: block;
						overflow: hidden;
					}
					.uploadbg .formLeft {
						float: left;
						width: 300px;
						height: 38px;
						overflow: hidden;
						margin-top: 16px;
						position: relative;
					}
					.uploadbg .formRight {
						float: left;
						overflow: hidden;
						margin-top: 16px;
					}
					.uploadbg .formRight .fileUpbtn {
						float: left;
						color: #fff;
						width: 80px;
						height: 36px;
						background: #4a567c;
						border-radius: 3px;
						line-height: 36px;
						text-align: center;
						cursor: pointer;
					}
					#file {
						float: left;
						width: 260px;
						color: #fff;
						height: 30px;
						border: none;
						overflow: hidden;
						line-height: 30px;
						margin-left: 120px;
						background: none;
					}
					span.filebtn {
						float: left;
						color: #fff;
						width: 90px;
						height: 30px;
						background: #4a567c !important;
						border-radius: 3px;
						position: absolute;
						z-index: 19;
						line-height: 30px;
						text-align: center;
						padding: 3px 10px;
						margin: 0;
						left: 0;
						top: 0;
					}
					#files {
						width: 110px;
						height: 30px;
						position: absolute;
						opacity: 0;
						z-index: 20;
						left: 0;
						top: 0;
						input {
							float: left;
						}
					}
					.uploadbg {
						width: 804px;
						height: 66px;
						margin: 2px 0;
						padding-left: 10px;
						background: #2a3558;
						border: 1px #3b4872 solid;
					}
					.block {
						float: left;
						width: 100%;
						height: 40px;
						overflow: hidden;
						/* border:2px #4a567c solid; */
						.el-input__inner {
							height: 36px;
							margin: 2px 0;
							line-height: 36px;
							border: 1px #3b4872 solid;
						}
						.el-form-item__label {
							height: 36px;
							margin: 2px 0;
							line-height: 36px;
							background: #1b274c;
						}
					}
					.blockTree {
						position: relative;
						overflow: visible !important;
					}
					.formTable {
						//   overflow: hidden;
						padding: 2px 4px;
						background: #4a567c;
					}
					.infoMsg {
						float: left;
						line-height: 36px;
						padding-left: 9px;
					}
					.checkboxBg {
						width: 96%;
						height: 34px;
						margin: 2px 0;
						text-align: left;
						line-height: 34px;
						padding-left: 10px;
						background: #2a3558;
						border: 1px #3b4872 solid;
					}
					.userBtn {
						overflow: hidden;
						padding-top: 24px;
						text-align: right;
						.el-form-item {
							width: 100%;
						}
					}
				}
			
			}
			// #userEditModel .el-dialog,
			#userLookModel .el-dialog,
			#userMoreAddModel .el-dialog,
			#userAddModel .el-dialog {
				width: 1100px;
				top: 50%;
				.el-dialog__body {
					padding: 24px 24px 18px;
					.el-checkbox {
						float: left;
					}
					.textarea {
						clear: both;
						height: 120px;
						overflow: hidden;
						.el-form-item__label {
							height: 120 important;
							background: #1b274c;
							line-height: 120px;
						}
						.el-form-item__label {
							margin: 2px 0;
							background: #1b274c;
							border: 1px #3b4872 solid;
						}
					}
					.textarea2 {
						clear: both;
						height: 44px;
						overflow: hidden;
						.el-form-item__label {
							float: left;
							height: 44px !important;
							line-height: 44px;
							background: #1b274c;
							border: 1px #3b4872 solid;
						}
					}
					.textareatree {
						height: 38px;
						position: relative;
						overflow: visible !important;
						.el-form-item__label {
							height: 36px;
							line-height: 36px;
						}
						.checkboxBg2 {
							width: 104.7%;
							height: 34px;
							margin: 2px 0;
							text-align: left;
							overflow: hidden;
							padding-left: 10px;
							background: #2a3558;
							border: 1px #3b4872 solid;
							.framework {
								height: 32px;
								line-height: 32px;
							}
						}
					}
					.el-form-item {
						margin: 0;
						padding: 0;
						width: 91%;
						float: left;
					}
					.el-textarea {
						width: 106.2%;
					}
					#uploadForm {
						margin-top: 18px;
						width: 8px;
					}
					.uploadbg {
						width: 804px;
						height: 66px;
						margin: 2px 0;
						padding-left: 10px;
						background: #2a3558;
						border: 1px #3b4872 solid;
					}
					.filegroup {
						height: 70px;
						overflow: hidden;
						position: relative;
						padding-top: 10px;
						text-align: left;
					}
					.iptvImg {
						float: left;
						width: 100px;
						height: 50px;
						overflow: hidden;
						margin-top: 6px;
						text-align: left;
					}
					.iptvImg img {
						max-height: 50px;
						max-width: 100px;
					}
					#uploadForm {
						float: left;
						width: 80%;
						height: 32px;
						margin-top: 16px;
						display: block;
						overflow: hidden;
					}
					.uploadbg .formLeft {
						float: left;
						width: 300px;
						height: 38px;
						overflow: hidden;
						margin-top: 16px;
						position: relative;
					}
					.uploadbg .formRight {
						float: left;
						overflow: hidden;
						margin-top: 16px;
					}
					.uploadbg .formRight .fileUpbtn {
						float: left;
						color: #fff;
						width: 80px;
						height: 36px;
						background: #4a567c;
						border-radius: 3px;
						line-height: 36px;
						text-align: center;
						cursor: pointer;
					}
					#file {
						float: left;
						width: 260px;
						color: #fff;
						height: 30px;
						border: none;
						overflow: hidden;
						line-height: 30px;
						margin-left: 120px;
						background: none;
					}
					span.filebtn {
						float: left;
						color: #fff;
						width: 90px;
						height: 30px;
						background: #4a567c !important;
						border-radius: 3px;
						position: absolute;
						z-index: 19;
						line-height: 30px;
						text-align: center;
						padding: 3px 10px;
						margin: 0;
						left: 0;
						top: 0;
					}
					#files {
						width: 110px;
						height: 30px;
						position: absolute;
						opacity: 0;
						z-index: 20;
						left: 0;
						top: 0;
						input {
							float: left;
						}
					}
					.uploadbg {
						width: 804px;
						height: 66px;
						margin: 2px 0;
						padding-left: 10px;
						background: #2a3558;
						border: 1px #3b4872 solid;
					}
					.block {
						float: left;
						width: 50%;
						height: 40px;
						overflow: hidden;
						/* border:2px #4a567c solid; */
						.el-input__inner {
							height: 36px;
							margin: 2px 0;
							line-height: 36px;
							border: 1px #3b4872 solid;
						}
						.el-form-item__label {
							height: 36px;
							margin: 2px 0;
							line-height: 36px;
							background: #1b274c;
						}
					}
					.blockTree {
						position: relative;
						overflow: visible !important;
					}
					.formTable {
						//   overflow: hidden;
						padding: 2px 4px;
						background: #4a567c;
					}
					.infoMsg {
						float: left;
						line-height: 36px;
						padding-left: 9px;
					}
					.checkboxBg {
						width: 96%;
						height: 34px;
						margin: 2px 0;
						text-align: left;
						line-height: 34px;
						padding-left: 10px;
						background: #2a3558;
						border: 1px #3b4872 solid;
					}
					.userBtn {
						overflow: hidden;
						padding-top: 24px;
						text-align: right;
						.el-form-item {
							width: 100%;
						}
					}
				}
			}
			#distributionModel .el-dialog {
				width: 730px;
				height: 594px;
				top: 50%;
				overflow: hidden;
				.el-dialog__body {
					height: 490px;
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
		/* .scrollbox {
			width: 1563px;
		} */
	}
	.vuescroll-horizontal-scrollbar {
		display: block !important;
	}
	 ::-webkit-scrollbar {
		width: 5px;
		/*滚动条宽度*/
		height: 1px;
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
	@media screen and (max-width: 1440px) {
		#UserList {
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
				.el-select-dropdown__item {
					font-size: 12px;
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
			/* .scrollbox {
				width: 1563px;
			} */
		}
	}
	@media screen and (max-width: 1366px) {
		#UserList .mRightTwo #userEditModel .el-dialog .el-dialog__body, #UserList .mRightTwo #userLookModel .el-dialog .el-dialog__body, #UserList .mRightTwo #userMoreAddModel .el-dialog .el-dialog__body, #UserList .mRightTwo #userAddModel .el-dialog .el-dialog__body {
			padding: 24px 24px 10px;
		}
		#UserList {
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
						/*margin-top: 10px;*/
					} // button {
					// 	float: left;
					// 	color: #eee;
					// 	height: 30px;
					// 	font-size: 11px;
					// 	margin-left: 8px;
					// 	text-align: center;
					// 	line-height: 30px;
					// 	padding: 0px 6px;
					// }
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
				.zTable {
					clear: both;
					height: 94%;
					overflow: hidden;
					padding-top: 0;
					.elTable {
						height: 87%;
						.el-table td {
							padding: 2px 0;
						}
					}
				}
				#userEditModel .el-dialog,
				#userLookModel .el-dialog,
				#userMoreAddModel .el-dialog,
				#userAddModel .el-dialog {
					.block .el-input__inner {
						height: 30px;
						margin: 2px 0;
						line-height: 36px;
						border: 1px #3b4872 solid;
					}
					.block {
						float: left;
						width: 50%;
						height: 32px !important;
						overflow: hidden;
						/* border: 2px #4a567c solid; */
						.el-form-item__label,
						.el-input__inner {
							float: left;
							height: 30px !important;
							line-height: 30px;
							border: 1px #3b4872 solid;
						}
					}
					.el-form-item__content {
						height: 30px;
					}
					.el-input {
						position: relative;
						font-size: 14px;
						display: inline-block;
						height: 30px !important;
						width: 100%;
					}
					.checkboxBg {
						width: 96%;
						height: 28px !important;
						margin: 2px 0;
						text-align: left;
						line-height: 34px;
						padding-left: 10px;
						background: #2a3558;
						border: 1px #3b4872 solid;
					}
					.userBtn {
						overflow: hidden;
						padding-top: 5px;
						text-align: right;
					}
					.el-form-item__content {
						line-height: 32px;
					}
				}
				#showtreebox,
				#showtreebox2,
				#showtreebox3 {
					display: none;
					top: 36px;
					left: 181px;
					position: absolute;
					width: 290px;
					height: 175px;
					z-index: 99;
					background-color: #354166;
					border: 2px #3b4872 solid;
				}
				#showtreebox4,
				#showtreebox5,
				#showtreebox6 {
					display: none;
					top: 37px;
					left: 181px;
					position: absolute;
					width: 290px;
					height: 110px;
					z-index: 999;
					background-color: #354166;
					border: 2px #3b4872 solid;
				}
				#showtreebox {
					height: 155px;
				}
			}
			/* .scrollbox {
				width: 1563px;
			} */
		}
	}
</style>