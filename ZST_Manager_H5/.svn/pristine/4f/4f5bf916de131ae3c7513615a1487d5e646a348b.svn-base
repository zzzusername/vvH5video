<template>
	<div id="usercheck" class="mRight">
		<div class="usercheckList">
			<div class="zForm">
				<span class="paddingLeft">姓名或手机号： </span><input v-model='user_name_or_phonenum' class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">地区： </span><input v-model='region_name'  class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">工作单位： </span><input v-model='depart_name'  class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">职务：</span>
                    <div class="zSelect">
                        <el-select v-model="enterpriseJobtitlesvalue" class="zgroup" placeholder="--请选择--">
                            <el-option v-for="item in enterpriseJobtitles" 
                            :key="item.index" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </div>
				<div class="onlyLine">
                    <span class="paddingLeft">用户角色：</span>
                    <div class="zSelect">
                        <el-select v-model="userRolesvalue" class="zgroup" placeholder="--请选择--">
                            <el-option v-for="item in userRolesdata" 
                            :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </div>
                    <span class="paddingLeft">用户状态：</span>
                    <div class="zSelect">
                        <el-select v-model="userStatevalue" class="zgroup" placeholder="--请选择--">
                            <el-option v-for="item in userStatedata" 
                            :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </div>
                    <button class="buttonradius" @click="findDatalist">查询</button>
				    <button class="buttonradius" @click="clearDatalist">清空</button>
				  <!--   <button class="buttonradius">导出</button> -->
				    <button class="buttonradius" @click="addUserpop = true;" style="float: right;">新增</button>
                </div>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="userTabledata"
						>
							<el-table-column prop="fixedSort" label="序号"></el-table-column>
							<el-table-column prop="realname" label="用户姓名"></el-table-column>
							<el-table-column prop="phonenum" label="手机号"></el-table-column>
							<el-table-column prop="name" label="头像"></el-table-column>
							<el-table-column prop="" label="性别">
								<template slot-scope="scope">
									<span v-if="scope.row.sex == 'GIRL'">女</span>
									<span v-else>男</span>
								</template>
							</el-table-column>
							<el-table-column prop="enterprise.region_name" label="地区"></el-table-column>
							<el-table-column prop="enterprise_depart.name" label="部门"></el-table-column>
							<el-table-column prop="enterprise_job_title.name" label="职务"></el-table-column>
							<el-table-column prop="" label="角色">
								<template slot-scope="scope">
									<span v-if="scope.row.is_casual_admin ? text='临时管理员' : scope.row.is_admin ? text='管理员' : text='普通用户'  ">{{text}}</span>
								</template>
							</el-table-column>
							<el-table-column prop="name" label="注册方式">
								<!-- is_admin: false '管理员'
									is_admin_add: true '管理员添加'
									is_casual_admin: '临时账号' 
								-->
								<template slot-scope="scope">
									<span v-if="scope.row.is_casual_admin ? text='注册企业时自动创建' : scope.row.is_admin_add ? text='管理员添加' : text='自主注册'  ">{{text}}</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="用户状态">
								<template slot-scope="scope">
									<span v-if="scope.row.status == 'OFFLINE'">离线</span>
									<span v-else>在线</span>
								</template>
							</el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn" @click="editUserdata(scope.row)">编辑</span>
									<span class="spanBtn" @click="getUserdetail(scope.row)">详情</span>
									<span class="spanBtn" @click="deleteUserdata(scope.row)">删除</span>
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
        <!-- 详情弹窗 -->
		<el-dialog  title="详情" 
			:visible.sync="userDeatilpop"
			id="zDialogtext"
		 	width="50%">
			<div class="block block-inline" id="detailW2">
				<li>
					<span class="liL">用户姓名</span>
					<span class="liR">{{userDeatiledata.realname ? userDeatiledata.realname  : '暂无数据'}}</span>
				</li>
				<li>
					<span class="liL">手机号</span>
					<span class="liR">{{userDeatiledata.phonenum ? userDeatiledata.phonenum  : '暂无数据'}}</span>
				</li>
				<li>
					<span class="liL">证件号码</span>
					<span class="liR">{{userDeatiledata.realname ? userDeatiledata.realname  : '暂无数据'}}</span>
				</li>
		 		<li>
					<span class="liL">地区</span>
					<span class="liR">{{userDeatiledata.region_full_name ? userDeatiledata.region_full_name  : '暂无数据'}}</span>
				</li>
			<!-- 	<li>
					<span class="liL">工作单位</span>
					<span class="liR">{{enterprise_groups.name  ? enterprise_groups.name  : '暂无数据'}}</span>
				</li> -->
				<!-- <li>
					<span class="liL">职务</span>
					<span class="liR">{{userDeatiledataJob.enterprise_job_title ? userDeatiledataJob.enterprise_job_title.name : '暂无数据'}}</span>
				</li> -->
				<li>
					<span class="liL">角色</span>
					<span class="liR">{{userDeatiledata.is_casual_admin ? '临时管理员' : userDeatiledata.is_admin ? '管理员' : '普通用户' }}</span>
				</li>
				<li>
					<span class="liL">流媒体账号</span>
					<span class="liR">{{userDeatiledata.phonenum ? userDeatiledata.phonenum  : '暂无数据' }}</span>
				</li>
			<li>
					<span class="liL">状态</span>
					<span class="liR">{{userDeatiledata.status == 'OFFLINE' ? '离线' : '在线'}}</span>
				</li>
				<li>
					<span class="liL">注册时间</span>
					<span class="liR">{{userDeatiledata.createtime | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
					<!-- <span class="liR">{{userDeatiledata.createtime | FormatDate('yyyy-MM-dd hh:mm:ss')}}</span> -->
				</li>
			<!-- 	<li>
					<span class="liL">注册方式</span>
					<span class="liR">{{userDeatiledata.phonenum}}</span>
				</li> -->
				<li>
					<span class="liL">添加原因</span>
					<span class="liR">{{userDeatiledata.add_reason ? userDeatiledata.add_reason : '暂无数据'}}</span>
				</li>
			<!-- 	<li>
					<span class="liL">审核时间</span>
					<span class="liR">{{userDeatiledata.createtime  | FormatDate('yyyy-MM-dd hh:mm:ss')}}</span>
				</li> -->
				<!-- <li>
					<span class="liL">审核人</span>
					<span class="liR">{{userDeatiledata.checker ? userDeatiledata.checker : '暂无'}}</span>
				</li>
				<li>
					<span class="liL">APP版本</span>
					<span class="liR">{{userDeatiledata.phonenum}}</span>
				</li>
				<li>
					<span class="liL">手机品牌</span>
					<span class="liR">{{userDeatiledata.phonenum}}</span>
				</li>
				<li>
					<span class="liL">手机型号</span>
					<span class="liR">{{userDeatiledata.phonenum}}</span>
				</li>
				<li>
					<span class="liL">手机系统</span>
					<span class="liR">{{userDeatiledata.phonenum}}</span>
				</li>
				<li>
					<span class="liL">分辨率</span>
					<span class="liR">{{userDeatiledata.phonenum}}</span>
				</li>
				<li>
					<span class="liL">IMEI</span>
					<span class="liR">{{userDeatiledata.phonenum}}</span>
				</li> -->
			</div>
			<div class="userBtn">
				<el-button @click="userDeatilpop = false">关闭</el-button>
			</div>
		</el-dialog>
        <!-- 新增-->
        <div id="commonPop">
            <el-dialog  title="新增" 
                :visible.sync="addUserpop"
                :before-close="cancelNewdata"
				:close-on-click-modal='false'
                width="50%">
                <el-form  ref="edit" label-width="30%" class="demo-ruleForm">
                    <div class="formTable">
						<div class="block block-line">
							<el-form-item label="姓名："  prop="name">
								<el-input v-model="addForm.realname" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block block-line">
							<el-form-item label="手机号："  prop="phone">
								<el-input v-model="addForm.phonenum" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block block-line">
							<el-form-item label="密码："  prop="passworld">
								<el-input v-model="addForm.password" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block block-line">
							<el-form-item label="确认密码："  prop="resetpassworld">
								<el-input v-model="addForm.affirmPassword" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<!-- 头像上传 -->
						<div class="block upLoad"  id="personal">
							<el-form-item label="头像：" prop="img" label-width="15%" id='personalFormitem'>
								<div class="Inf-img">
									<img :src='Initimgdata' alt="">
									<div class="upCont">
										<input 
										type="file" id="headPortrait" name="files" 
										placeholder="file" multiple
										@change="getFile"	
										>
										<div class="upLoadinp">选择图片</div>

										<button class="submitImg" type="button"  @click="getUploadVideo">上传文件</button>
									</div>
								
								</div>
							</el-form-item>
						</div>
						<div class="block block-line">
                            <el-form-item label="性别：" prop="name">
                                <div class="checkboxBg">
                                    <el-radio v-model="addForm.sex" label="BOY">男</el-radio>
  									<el-radio v-model="addForm.sex" label="GIRL">女</el-radio>
                                </div>
                            </el-form-item>
                        </div>
						<div class="block block-line">
                            <el-form-item label="管理员：" prop="name">
                                <div class="checkboxBg">
                                    <el-radio v-model="addForm.is_admin" label="true">是</el-radio>
  									<el-radio v-model="addForm.is_admin" label="false">否</el-radio>
                                </div>
                            </el-form-item>
                        </div>
						<div class="block" id="areaSelectpopover">
							<el-form-item label="地区：" prop="region_full_name" label-width="15%">
								<el-input 
								v-model="information.region_full_name" 	
								maxlength="50"
								@focus="isShowregionFulldata = true,workUnitspullstate = false"
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
						<div class="block" id="areaSelectpopover">
							<!-- <el-form-item label="工作单位："  prop="name" label-width="15%">
								 <el-select v-model="enterPrisepartsvalue" class="zgroup" placeholder="--请选择--">
									<el-option v-for="item in enterPrisepartsdata" 
									:key="item.index" :label="item.name" :value="item.id"></el-option>
								</el-select>
								@current-change="synchronouRegionsdata" 
							</el-form-item> -->
							<el-form-item label="工作单位：" prop="region_full_name" label-width="15%">
								<el-input 
								v-model="enterPrisepartsRenddata" 	
								maxlength="50"
								@focus="workUnitspullstate = true,isShowregionFulldata = false"
								></el-input>
								<div class="treeCont" v-if="workUnitspullstate">
									<el-tree
										:props="props"
										:data='enterPrisepartsdata'
										:load="departmentLazyloaddata"
										lazy
										accordion
										v-if="workUnitspullstate"
										@current-change="synchronizeDepartmentdata" 
									>
									</el-tree>
								</div>
								<span class="close"  v-if="workUnitspullstate" @click="closeDepartmentdropdown">
									<img src="../../../assets/close.png" alt="close">
								</span>
							</el-form-item>
                        </div>
						<div class="block">
                            <el-form-item label="职务：" prop="name" label-width="15%">
                                <el-select v-model="addForm.job_title_id" class="zgroup" placeholder="--请选择--">
									<el-option v-for="item in enterpriseJobtitles" 
									:key="item.index" :label="item.name" :value="item.id"></el-option>
								</el-select>
                            </el-form-item>
                        </div>
                        <div class="block">
                            <el-form-item label="权限分组：" prop="name" label-width="15%">
                                <el-select v-model="prisegRoupsvalue"  placeholder="--请选择--">
                                    <el-option v-for="item in prisegRoupsdata" 
									:key="item.index" :label="item.name" :value="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
						<div class="textarea" id='reason'>
							<el-form-item label="添加原因：" label-width="15%">
								<el-input style="width:720px;" type="textarea" v-model="addForm.add_reason" resize="none" maxlength="300"></el-input>
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
		<!-- 编辑 -->
		 <div id="commonPop">
            <el-dialog  title="编辑内容" 
                :visible.sync="editUserpop"
                :close-on-click-modal="false"
                width="50%">
                <el-form  ref="edit" label-width="30%" class="demo-ruleForm">
                    <div class="formTable">
						<div class="block block-line">
							<el-form-item label="姓名："  prop="realname">
								<el-input disabled="disabled" v-model="editForm.realname" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block block-line">
							<el-form-item label="手机号："  prop="phone">
								<el-input v-model="editForm.phonenum" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block block-line">
                            <el-form-item label="性别：" prop="sex">
								<el-input v-if='editForm.sex == "BOY"' disabled="disabled"  maxlength="50" value="男"></el-input>
								<el-input v-else disabled="disabled"  maxlength="50" value="女"></el-input>
                            </el-form-item>
                        </div>
						<div class="block block-line">
                            <el-form-item label="管理员：" prop="is_admin">
                                <div class="checkboxBg">
                                    <el-radio  v-model="editForm.is_admin" label="1">是</el-radio>
  									<el-radio  v-model="editForm.is_admin" label="0">否</el-radio>
                                </div>
                            </el-form-item>
                        </div>
						<div class="block">
							<el-form-item label="地区："  prop="region_code" label-width="15%">
								<el-input disabled="disabled" v-model="editForm.region_code" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block">
							<el-form-item label="职务："  prop="job_title_id" label-width="15%">
								<el-input disabled="disabled" v-model="editForm.job_title_id" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block">
                            <el-form-item label="工作单位：" prop="depart_id" label-width="15%">
								<el-input disabled="disabled" v-model="editForm.depart_id" maxlength="50"></el-input>
                            </el-form-item>
                        </div>
                        <div class="block">
                            <el-form-item label="权限分组：" prop="group_ids" label-width="15%">
                                <el-select v-model="editForm.group_ids"  placeholder="--请选择--">
                                    <el-option v-for="item in prisegRoupsdata" 
									:key="item.index" :label="item.name" :value="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="userBtn">
                        <el-form-item>
                            <el-button type="primary" @click="seditUserdata">保存</el-button>
                            <el-button  @click="editUserpop = false">取消</el-button>
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

	/* api*/
	// listRnterprisejobTitles  列出当前企业下的所有职称
	// userListroles  列出用户角色
	// userListstatuses  列出用户状态
	// getEnterpriseuserManagementlist  列出所有用户
	// addEnterpriseuserInformation  新增企业用户
	// getUserlistDetail  获取用户详情
	// listEnterprisegroups  获取权限
	// listEnterprisedeparts  获取 所有部门  tree
	// userListdelete  删除
	// userListmodify  编辑
	// userUploadavatar  上传用户头像
	import {
		listRnterprisejobTitles,
		userListroles,
		userListstatuses,
		getEnterpriseuserManagementlist,
		addEnterpriseuserInformation,
		getUserlistDetail,
		listEnterprisegroups,
		listEnterprisedeparts,
		userListdelete,
		userListmodify,
		userUploadavatar,
	} from '../../api/userlist'
	// getRegiondetail  获取行政区域详情
	// getRegionsbyPid  下级行政区域
	import {getRegiondetail,getRegionsbyPid} from '../../api/commonapi'

	export default {
        data() {
			return {
				// 表格渲染数据
				userTabledata:[],
				//  企业用户名称或手机号码
				user_name_or_phonenum : '',
				// 所在地区名称
				region_name : '',
				// 所在部门名称（可选）
				depart_name : '',
				// 职务数据
				enterpriseJobtitles : [],
				enterpriseJobtitlesvalue : '',
				// 用户角色
				userRolesdata : [],
				userRolesvalue : '',
				// 用户状态
				userStatedata : [],
				userStatevalue : '',
				// sexRadio
				sexRadio : 1,
				// 头像
				Initimgdata : '',
				// 新增弹窗 提交数据
				addForm : {
					add_reason : '',								// 添加原因
					avatar_file_temp_path : '',						// 图片路径
					checker_id : '',								// 用户id
					depart_id : '',									// 部门id
					enterprise_id : '',								// 企业id
					group_ids : [],									// 权限组id
					is_admin : "true",								// 是否管理员
					job_title_id : '',								// 职务 id
					password : '',									// 登录密码
					affirmPassword : '',							// 确认密码
					phonenum : '',									// 电话
					realname : '',									// 用户名称
					region_code : '',								// 地区编码
					sex : 'BOY',										// 性别
				},
				// 编辑弹窗 初始化数据
				editForm : {
					add_reason : '',								// 添加原因
					avatar_file_temp_path : '',						// 图片路径
					checker_id : '',								// 用户id
					depart_id : '',									// 部门id
					enterprise_id : '',								// 企业id
					group_ids : [],									// 权限组id
					is_admin : 0,									// 是否管理员
					job_title_id : '',								// 职务 id
					password : '',									// 登录密码
					phonenum : '',									// 电话
					realname : '',									// 用户名称
					region_code : '',								// 地区编码
					sex : '',										// 性别
				},
				// 权限数据列表
				prisegRoupsdata : [],
				prisegRoupsvalue : '',
				// 部门列表  tree 根节点数据
				enterPrisepartsdata : [], 
				// 提交数据
				enterPrisepartsvalue : '',
				// 渲染数据
				enterPrisepartsRenddata : '',
				// 编辑弹窗
				editUserpop : false,
				userInformationdetails : '',
				// 详情
				userDeatilpop : false,
				userDeatiledata : {},
				userDeatiledataJob : {},
				userDeatiledataGroups : {},
				userDeatiledataDepart : {},
				enterprise_groups : '',

				/* 新增弹窗 */
				addUserpop : false,
				/* 地区相关 */
				information : {
					region_full_name : '',
					region_full_code : '',
					region_code : '',
					region_name : '',
				},
				props: {
					label: 'name',
					children: 'children',
				},
				// 工作单位初始化数据 数组列表
				InittdepartData : [],
				// 是否展示工作单位下拉数据
				isDepartdata : false,

				// 工作单位下拉框状态
				workUnitspullstate : false,



				// 地区初始化数据 全国
				InitRegionfulldata : {
					"pid": "000000000000",
					"id": "000000000000",
					"timestamp": 0,
					"name" : '全国'
				},
				isShowregionFulldata : false, 
				// 头像file
				filedata : '',
				// 头像路径 上传时 需要
				avatarFiletempPath : '',
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		methods:{
			// 初始化获取所有用户
			getInitallUserdata(){
				// getEnterpriseuserManagementlist
				let objData = this.parameterSort();
				getEnterpriseuserManagementlist(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.userTabledata = res.data.data.list
						this.userTabledata.map(function(item,index){
							// fixedSort
							item.fixedSort = index - 0 + 1;
						})
						
						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}
				});
			},
			parameterSort(){
				let objData = {
					"enterprise_id": localStorage.EnterpriseId,
					"page_number": this.page_total_pages - 1,
  					"page_size": 10
				}
				if(this.user_name_or_phonenum != ''){
					objData.user_name_or_phonenum = this.user_name_or_phonenum
				}
				if(this.region_name != ''){
					objData.region_name = this.region_name
				}
				if(this.depart_name != ''){
					objData.depart_name = this.depart_name
				}
				// 职务id
				if(this.enterpriseJobtitlesvalue != ''){
					objData.job_title_id = this.enterpriseJobtitlesvalue
				}
				// 用户角色
				if(this.userRolesvalue != ''){
					objData.user_role_id = this.userRolesvalue
				}
				// 用户状态
				if(this.userStatevalue != ''){
					objData.user_status_id = this.userStatevalue
				}
				return objData;
			},
			// 初始化 企业下 所有职称
			getInitjobTitledata(){
				//  listRnterprisejobTitles
				let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
				listRnterprisejobTitles(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.enterpriseJobtitles = res.data.data
					}
				});
			}, 
			// 初始化 所有部门  listEnterprisedeparts
			getInitenterprisedEpartsdata(){
				let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
				listEnterprisedeparts(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.enterPrisepartsdata = res.data.data
					}
				});
			},
			// 部门 tree 懒加载 下来   aaaa
			departmentLazyloaddata(node,resolve){
				let objData = {
					"enterprise_id": localStorage.EnterpriseId,
					"parent_code": node.data.code
				}

				listEnterprisedeparts(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						//this.enterPrisepartsdata = res.data.data
							resolve(res.data.data)
					}
				});
			},
			// 部门下拉关闭按钮
			closeDepartmentdropdown(){
				this.workUnitspullstate = false;
			},
			// 同步 部门数据
			synchronizeDepartmentdata(data){
				this.enterPrisepartsvalue = data.id;
				this.enterPrisepartsRenddata = data.name;

			},
			// 部门渲染函数

			//  用户角色
			getInituserRolesdata(){
				// userListroles
				userListroles( {}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.userRolesdata = res.data.data
					}
				});
			},
			//  用户状态
			getInituserStatus(){
				// userListstatuses
				userListstatuses({}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.userStatedata = res.data.data
					}
				});
			},
			// 所有 权限分组 listEnterprisegroups
			getInitenterperisedata(){
				// userListstatuses
				let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
				listEnterprisegroups(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
						this.prisegRoupsdata = res.data.data;
					}
				});
			},
			// 查询
			findDatalist(){
				this.getInitallUserdata();
			},
			// 清空
			clearDatalist(){
				this.page_total_pages = 1;
				this.user_name_or_phonenum = '';
				this.region_name = '';
				this.depart_name = '';
				this.enterpriseJobtitlesvalue = '';
				this.userRolesvalue = '';
				this.userStatevalue = '';
			},
			// 保存 新增数据
			saveNewdata(){
				let objData = {
					"add_reason": this.addForm.add_reason,
					"avatar_file_temp_path":this.avatarFiletempPath,
					"checker_id":  localStorage.userId,
					// 部门 id
					"depart_id":  this.enterPrisepartsvalue,
					"enterprise_id": localStorage.EnterpriseId,
					// 权限组 id 
					"group_ids": [this.prisegRoupsvalue],
					"is_admin": this.addForm.is_admin,
					"job_title_id": this.addForm.job_title_id,
					"password": this.addForm.password,
					"phonenum": this.addForm.phonenum,
					"realname": this.addForm.realname,
					"region_code": this.information.region_code,
					"sex": this.addForm.sex
				}
				if(this.prisegRoupsvalue != ''){
					objData.group_ids = [this.prisegRoupsvalue]
				}else{
					objData.group_ids = [];
				}
				// 验证密码
				if(this.addForm.password != this.addForm.affirmPassword){
					this.$message.error('两次密码输入不一致');
					return false;
				}
				// 简介 addForm.add_reason
				if(this.addForm.add_reason == '' ){
					this.$message.error('请输入添加原因');
					return false;
				}
				console.log(objData);
				addEnterpriseuserInformation(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
						this.addUserpop = false;
						this.getInitallUserdata();
						this.clearNewaddData();

					}else{
						this.$message.error(res.data.error_description);
					}
				});
			},
			// 新增弹窗 取消按钮
			cancelNewdata(){
				this.addUserpop = false;
				this.clearNewaddData();
			},
			// 清空新增数据
			clearNewaddData(){
				this.addForm.add_reason = '';
				this.addForm.avatar_file_temp_path = '';
				this.addForm.checker_id = '';
				this.addForm.depart_id = '';
				this.addForm.group_ids = [];
				this.addForm.is_admin =  "false";
				this.addForm.job_title_id =  "";
				this.addForm.password =  "";
				this.addForm.affirmPassword =  "";
				this.addForm.phonenum =  "";
				this.addForm.realname =  "";
				this.addForm.realname =  "";
				this.addForm.region_code =  "";
				this.addForm.sex =  "BOY";
				this.enterPrisepartsvalue = '';
				this.enterPrisepartsRenddata = '';
				this.prisegRoupsvalue = '';
				// 地区
				this.information.region_code = '';
				this.information.region_full_name = ''
				// 头像参数
				this.avatarFiletempPath = '';
			},
			// 查看详情
			getUserdetail(scope){
				//console.log('获取用户详情')
				let objData = {
					"id" : scope.id
				}
				// ajax
				getUserlistDetail(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						
						this.userDeatiledata = res.data.data

						console.log(this.userDeatiledata );
						console.log(this.userDeatiledata.createtime);
						// 职务
						this.userDeatiledataJob = res.data.data.enterprise_job_title
						this.userDeatiledataGroups= res.data.data.enterprise_groups
						this.userDeatiledataDepart = res.data.data.enterprise_depart
						this.enterprise_groups = res.data.data.enterprise_groups[0];

						
						this.userDeatilpop = true;

					}else{
						this.$message.error(res.data.error_description);
					}
				});
			},
			// 删除 数据
			deleteUserdata(scope){
				// userListdelete
				this.$confirm('是否删除?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',	
					type: 'warning'
				}).then(() => {
					let objData = {
						"id": scope.id
					}
					userListdelete(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('删除成功');
							this.getInitallUserdata();
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
			// 编辑
			editUserdata(scope){
				this.editUserpop = true;
				let objData = {
					"id" : scope.id
				}
				// ajax
				getUserlistDetail(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.userInformationdetails = res.data.data
						let resData = res.data.data
						// 编辑字端赋值
						this.editForm.realname = resData.realname
						this.editForm.phonenum = resData.phonenum
						this.editForm.region_code = resData.region_full_name ? resData.region_full_name : '暂无数据'
						this.editForm.sex = resData.sex
						this.editForm.is_admin = resData.is_admin ? '1' : '0';
						let departName = res.data.data.enterprise_depart
						this.editForm.depart_id = departName ? departName.name : '';
						let jobName = resData.enterprise_job_title;
						this.editForm.job_title_id = jobName? jobName.name : '';
						this.editForm.group_ids = resData.enterprise_groups.length == 0 ? '' : resData.enterprise_groups[0].id;

					}else{
						this.$message.error(res.data.error_description);
					}
				});
			},
			// 编辑保存按钮
			seditUserdata(){
				let objData = {
					"group_ids": [
						this.editForm.group_ids
					],
					"id": this.userInformationdetails.id,
					"is_admin": this.editForm.is_admin == '1' ? true : false,
					"phonenum": this.editForm.phonenum
				}
				//  userListmodify
				userListmodify(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.$message.success('编辑成功')
						this.editUserpop = false;
						this.getInitallUserdata();
					}else{
						this.$message.error(res.data.error_description);
					}
				});
			},
			getFile(){
				let file = document.getElementById("headPortrait").files[0];
				this.filedata = file;
			},
			// 点击上传
			getUploadVideo() {

				if (this.filedata == "") {
					this.$message({
						message: '文件不允许为空',
						type: 'warning',
					});
				} else {
					var fileAjaxdata = this.filedata
					var formData = new FormData();
					formData.append("avatar_file", fileAjaxdata);

					userUploadavatar(formData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 提示
							this.$message({
								message: '上传成功',
								type: "success"
							});
							this.avatarFiletempPath = res.data.data.avatar_file_temp_path
							// 预览图片
							let obj = res.data.data.avatar_file_temp_path;
							let str = '/upload';
							let url = getCaption(obj,str)
							console.log(url);
							this.Initimgdata = window.ServerUrl + '/' + url
						}
					});	
				}
			},
			/* 地区选中相关函数 */
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
				console.log(data);
				// 查询详情接口 递归查询所有父节点
				// 全国除外
				if(data.id != "000000000000"){
					let objData = {
						"id": data.id,
						"timestamp": 0
					}
					// 获取地区详情
					getRegiondetail(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 当前点击的数据获取的数据
							this.information.region_full_name = res.data.data.region_details[0].names;
							this.information.region_full_code = res.data.data.region_details[0].ids;
							// 当前点击的数据
							this.information.region_code = data.id
							this.information.region_name = data.name

							console.log(this.information.region_full_name);
						}
					});	
				}else{
					// 同步数据
					this.information.region_full_name = '全国';
					this.information.region_full_name_ids = '000000000000';
					// 当前点击的数据
					this.information.region_code = '000000000000'
					this.information.region_name ='全国'
				}
				
			},
			// 地区下拉关闭按钮
			closeShowregionFulldata(){
				this.isShowregionFulldata = false;
			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitallUserdata();
			},
		},
		mounted: function() {
			let row = '.usercheckList'
			heightAuto(row)
			// 获取所有用户信息
			this.getInitallUserdata();
			// 初始化 企业职称
			this.getInitjobTitledata();
			// 初始化 所有 用户角色
			this.getInituserRolesdata();
			// userListstatuses 用户状态
			this.getInituserStatus();
			// 权限
			this.getInitenterperisedata();
			// 初始化部门信息  tree 结构 根节点
			this.getInitenterprisedEpartsdata();

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

.onlyLine{
	width: 100%;
    display: inline-block;
    margin-top: 20px;
}
.zPage{
	margin-top: 50px;
}
</style>

<style lang="scss">
	#usercheck {
		.usercheckList {
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
		#usercheck {
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
		#usercheck .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#usercheck {
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
	.block .el-input__inner{
		-webkit-appearance: none;
		background-color: #2a3558;
		background-image: none;
		box-sizing: border-box;
		color: #eee;
		display: inline-block;
		font-size: inherit;
		outline: 0;
		padding: 0 15px;
		transition: border-color .2s cubic-bezier(.645,.045,.355,1);
		width: 100%;
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
        height: 34px;
        margin: 2px 0;
        line-height: 34px;
        padding-left: 12px;
        background: #2a3558;
        border: 1px solid #3b4872;
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
	/* 弹窗详情 左右 */
	#zDialogtex #detailW2{
		overflow: hidden;
	}
	#detailW2 li{
		width: 50%!important;
		margin: 0;
	}
</style>