<template>
	<div id="authority" class="mRight">
		<div class="authorityList">
			<div class="zForm">
                <span class="paddingLeft">权限组名称： </span><input v-model="enterprise_group_name" class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">姓名或手机号： </span><input v-model="creator_name_or_phonenum" class="zInput" type="text" placeholder="" />
                <button class="buttonradius" @click="findDatalist">查询</button>
                <button class="buttonradius" @click="clearDatalist">清空</button>
                <button class="buttonradius" style="float:right;" @click="addPermissiondata(true)">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="authorityData"
						>
							<el-table-column prop="fixedSort" label="序号"></el-table-column>
							<el-table-column prop="name" label="权限组名称"></el-table-column>
							<el-table-column prop="creator.realname" label="创建人"></el-table-column>
							<el-table-column prop="creator.phonenum" label="创建人手机号"></el-table-column>
							<el-table-column prop="" label="时间">
								<template slot-scope="scope">
									<span>{{scope.row.createtime  | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn" @click="addPermissiondata(false,scope.row)">编辑</span>
									<span class="spanBtn" @click="managementMembersclick(scope.row)">管理成员</span>
									<span class="spanBtn" @click="deleteListdata(scope.row)">删除</span>
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
        <!-- 管理成员弹窗 -->
        <el-dialog
            title="测试组权限成员"
            :visible.sync="administrationPop"
            width="50%"
            :before-close="adminhandleClose"
			:close-on-click-modal='false'
            id="adminPop"
            >
            <div class="adminContpop">
                <div class="adminInp">
                    <el-input v-model="adminInpcont"  placeholder="请输入内容"></el-input>
					<button class="popSearchbtn" @click="adminFinddata">查询</button>
					<button class="popSearchbtn" @click="adminClearData">清空</button>
                </div>
                <div class="adminTable">
                    <el-table
                        :data="adminTabledata"
						tooltip-effect="dark"
						@selection-change="handleSelectionChange"
                        style="width: 100%">
						<el-table-column
							type="selection"
							width="55">
						</el-table-column>
                        <el-table-column
                            prop="realname"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="phonenum"
                            label="手机号码"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="is_admin"
                            label="职务">
                        </el-table-column>
                        <el-table-column prop="" label="操作">
                            <template slot-scope="scope">
                                <span class="spanBtn" @click="removeUserclick(scope.row)">删除</span>
                            </template>
                        </el-table-column>
                    </el-table>
					<div style="margin-top:10px;">
						<span class="popSearchbtn" @click="batchRemoveUserclick">批量删除</span>
					</div>
					<!-- page -->
                   	<el-pagination
						@current-change="adminhandleCurrentChange" 
						:current-page.sync="adminpage_total_pages" 
						:page-size="adminpage_size" 
						layout="total, prev, pager, next" 
						:total="adminpage_total_items"
						class="zPage"
						>
					</el-pagination>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
				<el-button @click="adminhandleClose">关 闭</el-button>
            </span>
        </el-dialog>
		<!-- 新增/编辑 权限分组 -->
		<div id="commonPop">
			<el-dialog
					class="permissionForm"
					title="新增权限分组"
					:visible.sync="editPermission"
					:before-close="closePermission"
					:close-on-click-modal='false'
					width="50%"
					>
					<el-form ref="perForm" :model="perForm" label-width="140px">
						<div class="formTable" style="margin: 0px;">
							<div class="block">
								<el-form-item label="新增权限组名称："  prop="name" :rules="[{ required: true, message: ' '}]">
									<el-input v-model="perForm.name" maxlength="15"></el-input>
								</el-form-item>
							</div>
						</div>
						<div id="tabChagecont">
							<!-- 监控 ／ 终端 tab切换-->
							<el-tabs v-model="activeName" type="border-card" style="padding:0 10px;">
								<el-tab-pane label="功能分配：" name="first"  class="tabSelectpane">
									<el-checkbox-group v-model="permissionsListvalue">
										<el-checkbox 
										v-for="item in permissionsList" :key="item.index"
										:label="item.name"
										>{{item.comment}}</el-checkbox>
									</el-checkbox-group>
								</el-tab-pane>
								<el-tab-pane label="监控资源分配：" name="second"  class="tabSelectpane">
									<div class="tabCont">
										<div class="hd">
											<span>已添加监控资源目录</span>
											<el-button size="small" class="clear" @click="clearMonitortree">清空</el-button>
										</div>
										<div class="bd">
											<div class="hd-l">
												<el-tree
												:props="props"
												:data="monitor_resource_organizations"
												:load="monitorTherootDirectoryLoadnode"
												ref="monitorTree"
												node-key="unique_code"
												@check-change='monitorCheckchangdata'
												:default-checked-keys="this.monitorDefaultchecked"
												:default-expand-all=false
												lazy=''
												show-checkbox>
												</el-tree>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="终端通讯录分配：" name="three"  class="tabSelectpane">
									<div class="tabCont">
										<div class="hd">
											<span>终端通讯录分配目录</span>
											<el-button size="small" class="clear" @click="clearTerminatree">清空</el-button>
										</div>
										<div class="bd">
											<div class="hd-l">
												<el-tree
												:props="props"
												:data="terminal_regions"
												:load="terminaLoadnode"
												:render-content="renderContent"
												ref="terminaTree"
												node-key="unique_code"
												@check-change='termianCheckchangdata'
												:default-checked-keys="this.terminalDefaultchecked"
												lazy=''
												show-checkbox>
												</el-tree>
											</div>
										</div>
									</div>
								</el-tab-pane>
							</el-tabs>
						</div>
						<div class="userBtn">
							<span slot="footer" class="dialog-footer">
								<el-button type="primary" @click="saveSubmitteddata">保 存</el-button>
								<el-button @click="closePermission">取 消</el-button>
							</span>
						</div>
					</el-form>
			</el-dialog>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	// js
	import {heightAuto,arrayObjdeweighting} from '../../untils/heightAuto' //注意路径
	/* api */
	// enterpriseUsermanagementGrouplist 列出满足条件的企业权限组信息
	// listEnterpriseusers   列出当前企业下的用户
	// listAllocablefunctions   列出当前企业 可分配权限
	// groupAdd   新增企业权限租
	// getEnterpriseuserManagementgroup  获取企业权限信息
	// enterpriseUsermanagementgroupmodify  编辑
	// userManagementremoveFromgroup  将企业用户从权限组移除
	import {
			enterpriseUsermanagementGrouplist,
			listEnterpriseusers,
			listAllocablefunctions,
			groupAdd,
			groupDelete,
			getEnterpriseuserManagementgroup,
			enterpriseUsermanagementgroupmodify,
			userManagementremoveFromgroup,
			} from '../../api/authority'
	import {
			listRootorganizationPaths,
			listSuborganizations,
			listRootterminalRegionpath,
			listSubterminalRegionsandDeparts,
			listTerminaldeparts
			} from '../../api/authority'


	export default {
        data() {
			return {
				// 查询数据
				enterprise_group_name : '',
				creator_name_or_phonenum : '',
				// 编辑时 获取的 企业权限组数据
				enterpriseRightsgroupInformation : '',
                /* table 数据 */
				authorityData : [],
                /* 管理成员弹窗 */
                administrationPop : false,
                adminInpcont : '',
				adminTabledata: [],
				managementMenbersScope : {}, // 缓存数据
				batchRemoveUserarray : [],	 // 批量选中的数组
				/* 分页相关 */
				adminpage_size : 10,			//  请求多少条目
				adminpage_total_items : 10,  // 总条数
				adminpage_total_pages : 1,  //  当前条数
				/* 权限分组弹窗 */
				editPermission : false,
				// 按钮状态
				saveSubmittype : true, 	// 默认为 新增
				perForm : {
					name: "",
					creator_id : localStorage.userId,  					// 用户id
					enterprise_id : localStorage.EnterpriseId, 			// 企业 id
					allocated_functions : [],							// 分配权限
					gis_ids : [],										// 分配的报警平台id
					monitor_resource_organizations : [], 				//分配的监控资源目录
					terminal_regions : []								//	分配的终端通讯录区域目录
				},
				// tab 切换
				activeName: "first",
				// tab  权限分配
				permissionsList : [],
				permissionsListvalue : [],
				// tab 监控资源根目录 初始化信息
				monitor_resource_organizations  : [],	
				monitorNode : {},
				monitorResolve : '',
				// tab 监控资源 默认勾选 
				monitorDefaultchecked : [],		
				// tab 终端 根目录 初始化信息
				terminal_regions : [],
				// tab 终端 默认勾选 通过 key 设置
				terminalDefaultchecked : [],	
				// copy 数据
				terminalDefaultcheckedCopy   : [],
				props: {
					label: 'name',
					children: 'children',
				},
				// 缓存 终端 懒加载信息
				termainNode : {},
				termainResolve : '',
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		methods:{
			// 初始化信息
			getInitdata(){
				let  objData = {
					"enterprise_id": localStorage.EnterpriseId,
					"page_number": this.page_total_pages - 1,
					"page_size": 10
				}
				// 查询条件
				if(this.enterprise_group_name != ''){
					objData.enterprise_group_name = this.enterprise_group_name;
				}
				if(this.creator_name_or_phonenum != ''){
					objData.creator_name_or_phonenum = this.creator_name_or_phonenum;
				}
				enterpriseUsermanagementGrouplist(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.authorityData = res.data.data.list;
						this.authorityData.map(function(item,index){
							item.fixedSort = index - 0 + 1;
						})
						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}
				});	
			},
			// 初始化权限弹窗 权限分配数据／新增
			getInitpermissionsdata(){
				// 查询接口
				listAllocablefunctions({  "enterprise_id": localStorage.EnterpriseId}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.permissionsList = res.data.data;
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 初始化 监控根目录
			getMonitortherootDirectory(){
				
				// listRootorganizationPaths
				listRootorganizationPaths({  "enterprise_id": localStorage.EnterpriseId}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						// 嵌套数组遍历 取值
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

						this.monitor_resource_organizations = sortingArray;

						// 默认勾选 监控
						if(this.monitorDefaultchecked.length != 0){
							// 处理数据 取 unique_code 为数组 纯数组 
							let disArray = this.monitorDefaultchecked;
							let setCheckedkeyArray = []
							for(let i = 0; i < disArray.length; i++){
								setCheckedkeyArray.push(disArray[i].unique_code);
							}
							this.$refs.monitorTree.setCheckedKeys(setCheckedkeyArray)
						}

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 监控根目录懒加载
			monitorTherootDirectoryLoadnode(node, resolve,data){
				// 缓存
				let first = true;
				if(first){
					this.monitorNode = node;
					this.monitorResolve = resolve;
					first = false;
				}

				/* if (node.level === 0) {
					return resolve(this.monitor_resource_organizations);
				} */
				if (node.level >= 1) {
					// 异步加载
					this.getMonitorchildrenNode(node,resolve)
				}
				
				// 勾选
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
			//  监控  获取二级节点数据
			getMonitorchildrenNode(node,resolve){
				// listSuborganizations
				let objData = {
					"area_code": node.data.area_code,
					"enterprise_id": localStorage.EnterpriseId,
					"is_root": false,
					"is_security": true,
					"platform_id": node.data.platform_id
				}
				listSuborganizations(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						resolve(res.data.data);

						// 默认勾选
						if(this.monitorDefaultchecked.length != 0){
							// 处理数据 取 unique_code 为数组 纯数组 
							let disArray = this.monitorDefaultchecked;
							let setCheckedkeyArray = []
							for(let i = 0; i < disArray.length; i++){
								setCheckedkeyArray.push(disArray[i].unique_code);
							}
							this.$refs.monitorTree.setCheckedKeys(setCheckedkeyArray)
						}
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 监控 勾选 数据监听
			monitorCheckchangdata(data, type, childState){
				//console.log(this.monitorDefaultchecked);
				// monitorDefaultchecked
				// 选中的数组 默认勾选 直接添加

				// 编辑的时候监听   新增不用 
				if(!this.saveSubmittype){
					let checkArray = [];
					checkArray.push(data);
					
					if(type){
						//console.log('新增')
						var newArray = [];
						this.monitorDefaultchecked.push(data);

					}else{
						//console.log("删除");
						// 减 遍历删除
						checkArray.forEach(itemData => {
							this.monitorDefaultchecked.forEach((itemArr, index) => {
								if (itemData.unique_code == itemArr.unique_code) {
									this.monitorDefaultchecked.splice(index, 1);
								}
							});
						});
					}
				}
				
				
			},
			// 终端  初始化 根节点 数据
			getTerminalrootNodedirectory(){
				listRootterminalRegionpath({  "enterprise_id": localStorage.EnterpriseId}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
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
						this.terminal_regions = sortingArray;
						

						// 勾选默认数据 终端
						if(this.terminalDefaultchecked.length != 0){
							// 处理数据 取 unique_code 为数组 纯数组 
							let disArray = this.terminalDefaultchecked;
							let setCheckedkeyArray = []
							for(let i = 0; i < disArray.length; i++){
								setCheckedkeyArray.push(disArray[i].unique_code);
							}
							this.$refs.terminaTree.setCheckedKeys(setCheckedkeyArray)
						}
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	

				// 获取 根节点数据 
				// 获取 默认勾选数据
			},
			// 终端 懒加载
			terminaLoadnode(node, resolve){

				/* this.termainNode = node;
				this.termainResolve = resolve; */

				// 缓存
				let first = true;
				if(first){
					this.termainNode = node;
					this.termainResolve = resolve;
					first = false;
				}
/* 
				if (node.level === 0) {
					return resolve(this.terminal_regions);
				} */

				if(node.level >= 1) { // 二级节点
					// 异步加载
					this.getTermianloadNode(node,resolve)
				}
				// 勾选默认数据
				if(this.terminalDefaultchecked.length != 0){
					// 处理数据 取 unique_code 为数组 纯数组 
					let disArray = this.terminalDefaultchecked;
					let setCheckedkeyArray = []
					for(let i = 0; i < disArray.length; i++){
						setCheckedkeyArray.push(disArray[i].unique_code);
					}
					this.$refs.terminaTree.setCheckedKeys(setCheckedkeyArray)
				}
			},
			getTermianloadNode(node,resolve){
				let _this = this;
				let _node = node

				let resolveArray = [];
				// 区分父级节点是否为区域
				if(node.data.unit_id){
					//  加载子单位
					if(node.data.unit_id != '-1'){
						let objData = {
							"enterprise_id": localStorage.EnterpriseId,
							"unit_pid": node.data.unit_id
						}
						// 异步函数加载 子节点   单位
						listTerminaldeparts(objData).then(res => {
							if (res.status === 200 && res.data.result == "ok") {
								let  childArray = res.data.data
								childArray.map(function(item,inde){	
									item.isMerge = true;
								})

								if(_node.checked){
									childArray.map(function(item,index){
										_this.terminalDefaultchecked.push(item);
									});
								}
								resolve(childArray);
								// 勾选默认数据
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
						"enterprise_id": localStorage.EnterpriseId,
						"parent_region_code": node.data.region_code,
					}
					// 终端通讯录区域子节点 包括 区域和单位
					listSubterminalRegionsandDeparts(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							let directArray = [];
							let subTerminalarray = [];
							let newArry = [];
							if(res.data.data.direct_terminal_departs.length != 0){
								directArray = res.data.data.direct_terminal_departs;
							}else{
								directArray = [];
							}
							if(res.data.data.sub_terminal_regions.length != 0){
								subTerminalarray = res.data.data.sub_terminal_regions;
							}else{
								subTerminalarray = []
							}
							// 遍历添加标记 单位
							directArray.map(function(item,index){
								item.isMerge = true;
							})
							//	 合并数组
							newArry = subTerminalarray.concat(directArray)
							// 渲染数组集合
							// 如果 父节点为勾选 则需要将获取的所有子节点 添加到缓存数组中
							if(_node.checked){
								newArry.map(function(item,index){
									_this.terminalDefaultchecked.push(item);
								});
							}
							// 合并渲染tree	
							resolve(newArry);

							// 反选 
							let arrayFx = this.setHalfselectedArray(this.terminalDefaultcheckedCopy,newArry);
							this.$nextTick(() => {
								this.setHalfselected(arrayFx);
							})

							// 勾选默认数据
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
			// 终端渲染
			renderContent(h, { node, data, store }) {
				return (
					<span 
					style="flex: 1; display: flex; align-items: center; justify-content: 
					space-between; font-size: 14px; padding-right: 8px;">
					<span>
						<span class={data.unique_code} style={{color: (data.isMerge) ? "#57e29b" : "#fff"}}>{node.label}</span>
					</span>
					<span>
						</span>
					</span>
				)
				
			},
			// 终端勾选 数据监听 
			termianCheckchangdata(data, type, childState){
				console.log(this.terminalDefaultchecked);
				// terminalDefaultchecked
				// 选中的数组 默认勾选 直接添加
				let checkArray = [];
				let _data = data;
				checkArray.push(data);
				

				if(type){
					//console.log('新增')
					let clearChildarray = this.terminalDefaultchecked;

					console.log(clearChildarray);
					// 清除子节点数据 当前节点都为父节点  区域方法

					let currentCode = _data.region_code // 当前节点的 区域 code 字符串 

					clearChildarray.map(function(item,index){
						if(item.region_full_code){
							item.region_full_code
							let splitArray =  item.region_full_code.split('|');
							if(splitArray.indexOf(currentCode) != -1){
								clearChildarray.splice(index, 1);
							}
						}
					})

					// 添加当前选中的数据 去重
					this.terminalDefaultchecked = arrayObjdeweighting(this.terminalDefaultchecked,checkArray,'unique_code')

					console.log(this.terminalDefaultchecked);

				}else{
					//console.log("删除");
					// 减 遍历删除
					checkArray.forEach(itemData => {
						this.terminalDefaultchecked.forEach((itemArr, index) => {
							if (itemData.unique_code === itemArr.unique_code) {
								this.terminalDefaultchecked.splice(index, 1);
							}
						});
					});
				}
				/* console.log('勾选数据');
				console.log(this.terminalDefaultchecked); */
			},
			// 查询
			findDatalist(){
				this.getInitdata()
			},
			// 清空 查询选项
			clearDatalist(){
				this.enterprise_group_name = '';
				this.creator_name_or_phonenum = '';
				this.getInitdata()
			},
			// 管理成员 获取数据展示弹窗
			managementMembersclick(scope){
				// 缓存数据
				this.managementMenbersScope = scope;
				//获取 管理成员数据  listEnterpriseusers
				let objData = {
					"enterprise_group_id" : scope.id, 	// 企业权限组ID（可选）
					"enterprise_id" : localStorage.EnterpriseId,
					"page_number": this.adminpage_total_pages - 1,
					"page_size": 10
				}
				if(this.adminInpcont != ''){
					objData.enterprise_user_name_or_phonenum = this.adminInpcont;
				}
				this.getEnterpriseusersdata(objData);
				
			},
			// 测试权限组成员列表 ajax
			getEnterpriseusersdata(objData){

				let obj = objData

				console.log(obj);
				
				listEnterpriseusers(obj).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.adminTabledata = res.data.data.list;
						/* 总条数 */
						this.adminpage_total_items = res.data.data.page_total_items; 
						this.adminpage_total_pages = res.data.data.page_number - 0 + 1;
						this.administrationPop = true;
					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
			// 测试权限组成员 查询
			adminFinddata(){
				let scope = this.managementMenbersScope
				this.managementMembersclick(scope)
			},
			// 测试权限组成员 清空
			adminClearData(){
				this.adminInpcont = '';
			},
			// 测试管理员 关闭弹窗
            adminhandleClose(){
				this.administrationPop = false;
				this.adminTabledata = [];
			},
			// 新增 true ／ 编辑 false
			addPermissiondata(type,scope){
				// 拉去 数据 监控 和终端
				// 初始化 监控资源根目录
				this.getMonitortherootDirectory();
				// 初始化  终端 根节点
				this.getTerminalrootNodedirectory();
				if(type){
					this.saveSubmittype = true;
					// 清除默认勾选数据
					this.terminalDefaultchecked = [];
					this.monitorDefaultchecked = [];
				}else{
					// 清除默认勾选数据 先清空 在获取
					// 获取 企业权限信息赋值弹窗
					// getEnterpriseuserManagementgroup
					let objData = {
						"enterprise_group_id" : scope.id
					}
					// 获取详情函数
					getEnterpriseuserManagementgroup(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							
							// 编辑时获取的数据
							this.enterpriseRightsgroupInformation = res.data.data

							// 弹窗赋值操作
							this.perForm.name = res.data.data.name;
							this.permissionsListvalue = res.data.data.allocated_functions;
							/* 终端 */
							// 获取 终端默认选项 没有数据处理
							// 赋值
							this.terminalDefaultchecked = res.data.data.terminal_regions;
							this.terminalDefaultcheckedCopy = res.data.data.terminal_regions;


							/*  监控 */
							// 赋值   编辑  监控资源 已经选择的数据
							this.monitorDefaultchecked = res.data.data.monitor_resource_organizations

							// 终端 根结状态修改
							if(this.terminalDefaultchecked.length != 0){
								// 处理数据 取 unique_code 为数组 纯数组 
								let disArray = this.terminalDefaultchecked;
								let setCheckedkeyArray = []
								for(let i = 0; i < disArray.length; i++){
									setCheckedkeyArray.push(disArray[i].unique_code);
								}
								this.$refs.terminaTree.setCheckedKeys(setCheckedkeyArray)
							}
							// 监控 根结点状态修改
							if(this.monitorDefaultchecked.length != 0){
								// 处理数据 取 unique_code 为数组 纯数组 
								let disArray = this.monitorDefaultchecked;
								let setCheckedkeyArray = []
								for(let i = 0; i < disArray.length; i++){
									setCheckedkeyArray.push(disArray[i].unique_code);
								}
								this.$refs.monitorTree.setCheckedKeys(setCheckedkeyArray)
							}


							// 获取 初始化数据
							let defaultArray = this.terminal_regions;
							// 获取未处理的数据
							let defaultCheckedarray = res.data.data.terminal_regions;
							// 半勾选数组
							let halfSelectedarray = this.setHalfselectedArray(defaultCheckedarray,defaultArray);

							/* defaultArray.map(function(item,index){
								let regionCode = item.region_code;
								defaultCheckedarray.map(function(item2,index2){
									let splitArray = item2.region_full_code.split('|');
									if(splitArray.indexOf(regionCode) != -1){
										halfSelectedarray.push(item)
									}
								})
							}) */
							//this.setHalfselected(halfSelectedarray)

							this.$nextTick(() => {
								this.setHalfselected(halfSelectedarray)
							})
						 
						}else{
							this.$message.error(res.data.error_description);
						}
					});	
					// 保存按钮状态
					this.saveSubmittype = false;
				}
				this.editPermission = true;
			},
			// 关闭权限弹窗
			closePermission(){
				this.editPermission = false;
				this.clearCachedata();
			},
			// 新增权限 弹窗 保存按钮
			saveSubmitteddata(){
				// 参数处理
				let objData = this.parametersFinishing();
				// 区分编辑 ／ 提新增 默认新增
				if(this.saveSubmittype){
					// 参数处理 新增 为 企业id
					objData.creator_id = localStorage.userId; 
					objData.enterprise_id = localStorage.EnterpriseId; 
					// ajax
					groupAdd(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('新增成功');
							this.clearCachedata();
							this.getInitdata()
						}else{
							this.$message.error(res.data.error_description);
						}
					});	
				}else{
					// 参数处理 编辑 为 企业权限组ID
					objData.id = this.enterpriseRightsgroupInformation.id; 
					
					// 编辑 enterpriseUsermanagementgroupmodify
					enterpriseUsermanagementgroupmodify(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('编辑成功');
							this.clearCachedata();
							this.getInitdata()
						}else{
							this.$message.error(res.data.error_description);
						}
					});	
				}
			

			},
			// 整理数据
			parametersFinishing(){

				
				let objData = {
					"name": this.perForm.name,
					"terminal_regions" : [],
				};


				// 权限分配数据
				objData.allocated_functions = this.permissionsListvalue;

				// 获取 监控选择的区域  勾选和下发数据集合
				let monitorChangedata  = [];
				if(this.saveSubmittype){
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




				// 终端
				let terminalRegions = [];
				if(this.saveSubmittype){
					terminalRegions = this.$refs.terminaTree.getCheckedNodes()	
				}else{
					terminalRegions = this.terminalDefaultchecked
				}

				let terminalCachearray = [];
				let terminalCacheobj = {}

				
				// 遍历 过滤数据  终端
				terminalRegions.map(function(item){
					terminalCacheobj.region_name = item.name ? item.name : item.region_name;
					terminalCacheobj.region_code = item.area_code ? item.area_code : item.region_code ;
					terminalCacheobj.unique_code = item.unique_code;
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

				// 去重复 有效
				terminalCachearray = arrayObjdeweighting([],terminalCachearray,'unique_code');

				console.log(terminalCachearray);
				// 赋值
				objData.terminal_regions = terminalCachearray ? terminalCachearray : [] ;

				return objData;
			},
			// 清空缓存数据 
			clearCachedata(){
				this.editPermission = false;
				this.activeName = "first";					// tab 切换为1
				this.perForm.name = "";						// 企业名称
				this.permissionsListvalue = [];				// 权限
				/* this.$refs.monitorTree.setCheckedKeys([]);	// 监控资源
				this.$refs.terminaTree.setCheckedKeys([]);	// 终端选择 */

				//this.$refs.monitorTree.root.childNodes = []

				//console.log(this.$refs.monitorTree.root.childNodes)
			},
			// 清空已选择的监控数据
			clearMonitortree(){
				this.$refs.monitorTree.setCheckedKeys([]);	// 监控资源
			},
			clearTerminatree(){
				this.$refs.terminaTree.setCheckedKeys([]);	// 监控资源
			},
			// 列表删除数据
			deleteListdata(scope){
				let _this = this;

				 this.$confirm('是否删除?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',	
						type: 'warning'
					}).then(() => {
						let objData = {
							"id": scope.id
						}
						groupDelete(objData).then(res => {
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
			// 批量操作
			handleSelectionChange(val){
				this.batchRemoveUserarray = val.map( (item) => item.id);
			},
			// 批量删除
			batchRemoveUserclick(){
				if(this.batchRemoveUserarray.length > 0){
					let objData = {
						"enterprise_group_id": this.managementMenbersScope.id,
						"enterprise_user_ids": this.batchRemoveUserarray
					}
					// 调用接口
					this.removeUsermanagementApi(objData);
				}else{
					this.$message.error('请选中人员');
				}
			},
			// 移除 权限用户
			removeUserclick(scope){
				let _this = this;
				 this.$confirm('是否删除?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',	
						type: 'warning'
					}).then(() => {
						let objData = {
							"enterprise_group_id": this.managementMenbersScope.id,
							"enterprise_user_ids": [scope.id]
						}
						// 调用接口
						this.removeUsermanagementApi(objData);
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});          
					});

			},
			// 移除 权限用户 api
			removeUsermanagementApi(obj){
				let objData = obj;
				userManagementremoveFromgroup(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.$message.success('删除成功');
						// 刷新列表数据
						let scope = this.managementMenbersScope
						//获取 管理成员数据  listEnterpriseusers
						let objListdata = {
							"enterprise_group_id" : scope.id, 	// 企业权限组ID（可选）
							"enterprise_id" : localStorage.EnterpriseId,
							"page_number": this.adminpage_total_pages - 1,
							"page_size": 10
						}
						this.getEnterpriseusersdata(objListdata);

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			},
            // page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitdata();
			},
			// 弹窗 page
			adminhandleCurrentChange(page){
				this.adminpage_total_pages = page;
				let scope = this.managementMenbersScope;
				this.managementMembersclick(scope)
			},
			// 返回 半勾选数组  cacheArray  缓存     loadArray 加载
			setHalfselectedArray(cacheArray,loadArray){
				// 然后 半勾选数组
				// 调用 半勾选方法
				// 获取 初始化数据
				let defaultArray = loadArray;
				// 获取 缓存勾选的数组
				let defaultCheckedarray = cacheArray;
				// 半勾选数组
				let halfSelectedarray = [];

				defaultArray.map(function(item,index){
					let regionCode = item.region_code;
					defaultCheckedarray.map(function(item2,index2){
						// 拆分数组 
						if(item2.region_full_code != undefined){
							let splitArray =  item2.region_full_code.split('|')
							// 过滤掉 单位
							if(!item.isMerge){
								if(splitArray.indexOf(regionCode) != -1){
									halfSelectedarray.push(item)
								}
							}
						}else{
							return false;
						}
					
						
					})
				})
				return halfSelectedarray;
			},
			// 半勾选方法 jquery
			setHalfselected(array){
				// 去重  
				let newArray = arrayObjdeweighting([],array,'unique_code');
				// 遍历添加 class 虚拟 class
				newArray.map(function(item,index){
					let $checkBosinput = $('#commonPop').find('.'+item.unique_code).parents('.el-tree-node__content').find('.el-checkbox').find('.el-checkbox__input');
						
						if($checkBosinput.hasClass('is-checked')){
							return false;
						}else{
							$checkBosinput.addClass("is-indeterminate")
						}
				})
			}
		},
		mounted: function() {
			let row = '.authorityList'
			heightAuto(row)
			// 获取 tree 数据
			//this.getTreedata();
			// 循环获取tree 数据
			//this.cyclicLoadingdata();
			this.getInitdata();
			// 初始化 企业可分配权限
			this.getInitpermissionsdata()	
		},
	}

</script>
<style scoped>
.popSearchbtn{
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
	cursor: pointer;
}
.popSearchbtn:hover{
	background: linear-gradient(to right,#31f394, #31e4c1);
}
.spanBtn{
	cursor: pointer;
	margin: 0 5px;
}
/* zPage */
.zPage{
    margin-top: 50px;
}
.formTable{
	padding: 2px 4px;
	background: #4a567c;
	margin-bottom: 20px;
}
.formTable .block-line{
	width: 100%;
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
#tabCard{
	height: 350px;
}
.tabCont .hd-l, .tabCont .hd-r{
	height: 240px;
	max-height: 240px;
	overflow-y: auto
}
.tabCont .hd-r{
	width: 30%;
}
</style>

<style lang="scss">
	#authority {
		.authorityList {
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
	/* tab 切换 tree */
	#tabCard .el-tabs__item {
		color: #fff;
	}
	#tabCard .is-active {
		color: #409eff;
	}
	#tabCard .tabCont .bd{
		padding: 0;
		width: 100%;
	}
	.tabCont .clear {
		float: right;
	}
	.tabCont .bd {
		overflow: hidden;
	}
	.tabCont .hd-l {
		float: left;
		width: 55%;
		border-right: 1px solid #1b274c;
	}
	.tabCont .hd-r {
		padding: 20px;
		float: left;
		text-align: center;
	}
	.tabCont .hd-r li{
		font-size: 14px;
	}
	.tabCont .hd-r li span{
		margin-left: 10px;
	}

	@media screen and (max-width: 1440px) {
		#authority {
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
		#authority .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#authority {
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

	/* 弹窗重置样式 搜素 + table */
	#adminPop .el-dialog__header{
		padding: 11px 15px 3px;
		background: linear-gradient(#283357,#414d74);
	}
	#adminPop .adminInp{
		margin-bottom: 20px;
		overflow: hidden;
	}
	#adminPop .el-input{
		float: left;
		width: 80%;
	}
	#adminPop .adminInp .el-input__inner{
		width: 80%;
		height: 34px;
		font-size: 14px;
		margin-left: 10px;
		line-height: 35px;
		padding-left: 4px !important;
		margin-right: 20px;
		background: #2a3558;
		border: 1px #3b4872 solid;
		text-indent: 1em;
	}
	#adminPop .adminInp .el-button--small{
		float: left;
		height: 34px;
		padding: 0 15px;
	}
	#adminPop .adminTable{
		margin: 0 10px;
	}
	#adminPop .adminTable{
		color: #000;
	}
	/* 权限弹窗 */
	#adminPop .adminInp .el-input__inner{
		height: 34px;
		font-size: 14px;
		margin-left: 10px;
		line-height: 35px;
		padding-left: 4px !important;
		margin-right: 20px;
		background: #2a3558;
		border: 1px #3b4872 solid;
		text-indent: 1em;
	}
	#userAddModel3 .el-form-item {
		margin: 0;
		padding: 0;
		width: 100%;
		float: left;
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
