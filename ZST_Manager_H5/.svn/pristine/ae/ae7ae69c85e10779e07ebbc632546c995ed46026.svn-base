<template>
	<div id="usercheck" class="mRight">
		<div class="usercheckList">
			<div class="zForm">
				<span class="paddingLeft">姓名或手机号： </span>
				<input v-model="enterprise_user_name_or_phonenum" class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">地区： </span>
				<input v-model="region_name"  class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">工作单位： </span>
				<input v-model="depart_name"  class="zInput" type="text" placeholder="" />
                <div class="onlyLine">
                    <span class="paddingLeft">审核类型：</span>
                    <div class="zSelect">
                        <el-select v-model="userChecktypevalue" class="zgroup" placeholder="--请选择--">
                            <el-option v-for="item in userChecktype" 
                            :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </div>
                    <span class="paddingLeft">审核状态：</span>
                    <div class="zSelect">
                        <el-select v-model="userCheckstatevalue" class="zgroup" placeholder="--请选择--">
                            <el-option v-for="item in userCheckstate" 
                            :key="item.id" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </div>
                    <button class="buttonradius" @click="findDatalist">查询</button>
				    <button class="buttonradius" @click="clearDatalist">清空</button>
                </div>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="usercheckData"
						>
							<el-table-column prop="fixedSort" label="序号"></el-table-column>
							<el-table-column prop="realname" label="用户姓名"></el-table-column>
							<el-table-column prop="phonenum" label="手机号"></el-table-column>
							<el-table-column prop="" label="头像">
								<template slot-scope="scope">
									<img :src="imgUrl + '/' + scope.row.avatar_url" alt="" style="width: 30px;height: 30px">
								</template>
							</el-table-column>
							<el-table-column prop="sex" label="性别"></el-table-column>
							<el-table-column prop="region_name" label="地区"></el-table-column>
							<el-table-column prop="depart_name" label="工作单位"></el-table-column>
							<el-table-column prop="job_title_name" label="职务"></el-table-column>
							<el-table-column prop="event_type_description" label="审核类型"></el-table-column>
							<el-table-column prop="" label="申请时间">
								<template slot-scope="scope">
									<span>{{scope.row.apply_time | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="event_status_description" label="审核状态"></el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope" v-if='scope.row.event_status_description == "待审核"'>
									<span class="spanBtn" @click="passClick(scope.row,true)">通过</span>
									<span class="spanBtn" @click="passClick(scope.row,false)">驳回</span>
									<span class="spanBtn" @click="detailClick(scope.row)">详情</span>
								</template>
								<template slot-scope="scope" v-if='scope.row.event_status_description == "驳回"'>
									<span class="spanBtn" @click="detailClick(scope.row)">详情</span>
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
		<el-dialog  title="申请详情" 
			:visible.sync="detailPop"
			id="zDialogtext"
		 	width="30%">
			<div class="block">
				<li>
					<span class="liL">用户姓名</span>
					<span class="liR">{{this.detailPopdata.realname}}</span>
				</li>
				<li>
					<span class="liL">手机号</span>
					<span class="liR">{{this.detailPopdata.phonenum}}</span>
				</li>
				<li>
					<span class="liL imgCont">头像</span>
					<span class="liR imgCont" >
					<img :src="imgUrl + '/' + this.detailPopdata.avatar_url" alt="">
					</span>
				</li>
                <li>
					<span class="liL">性别</span>
					<span class="liR">{{this.detailPopdata.sex}}</span>
				</li>
                <li>
					<span class="liL">审核类型</span>
					<span class="liR">{{this.detailPopdata.event_type_description}}</span>
				</li>
				<li>
					<span class="liL">审核状态</span>
					<span class="liR">{{this.detailPopdata.event_status_description}}</span>
				</li>
				<li class="reason">
					<span class="liL">驳回原因</span>
					<span class="liR">{{this.detailPopdata.event_reject_reason}}</span>
				</li>
                
			</div>
			<div class="userBtn">
				<el-button size="small" @click="detailPop = false">关闭</el-button>
			</div>
		</el-dialog>
        <!-- 通过弹窗 -->
        <div id="commonPop">
            <el-dialog  :title="popTitle" 
                :visible.sync="passPop"
                :close-on-click-modal="false"
                width="40%">
                <el-form :model="passForm" ref="edit" label-width="38%" class="demo-ruleForm">
                    <div class="formTable">
                        <div class="block" v-if='!isRejected'>
                            <el-form-item label="设置为管理员" prop="">
                                 <div class="checkboxBg">
                                    <el-radio v-model="isAdmin" label="1">是</el-radio>
  									<el-radio v-model="isAdmin" label="0">否</el-radio>
                                </div>
                            </el-form-item>
                        </div>
                        <div class="block" v-if='!isRejected'>
                            <el-form-item label="权限分组" prop="" :rules="[{ required: true, message: ' '}]">
                                <el-select v-model="listEnterprisegroupsvalue"  placeholder="--请选择--">
                                    <el-option 
									v-for="item in listEnterprisegroupsdata" 
									:key="item.id" :label="item.name" :value="item.id"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
						<div class="block" style="margin-top: 20px;" v-if='isRejected'>
							<textarea style="padding:0;" v-model='event_reject_reason'
							 class="textarea" placeholder="请输入驳回原因"></textarea>
						</div>
                    </div>
                    <div class="userBtn">
                        <el-form-item>
                            <el-button type="primary" @click="submittingBy">保存</el-button>
                            <el-button @click="clearSbumittingby">取消</el-button>
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
	// applyEventlist 获取所有数据
	// userCheckapplyEventreject  驳回企业用户申请事件
	// applyEventapprove  通过企业用户注册申请事件
	// applyEventlistEnterprisegroups  列出企业权限组

	import {
		applyEventlist,applyEventlistType,applyEventlistState,
		userCheckapplyEventreject,applyEventapprove,applyEventlistEnterprisegroups
		} from '../../api/usercheck'

	export default {
        data() {
			return {
				imgUrl : window.ServerUrl,
				depart_name : '',	// 单位名称
				enterprise_user_name_or_phonenum : '',	// 姓名／手机号
				region_name : '',	//地区
				usercheckData : [],
				// 状态数组
				userCheckstate : [],
				userCheckstatevalue : '',
				// 状态
				userChecktype : [],
				userChecktypevalue : '',
				// 通过缓存数据
				passPopdetail : '',
				// 通过弹窗数据
				bySubmittingdata : {},
				listEnterprisegroupsdata : [],
				listEnterprisegroupsvalue : '',
				isAdmin : '1',
				// 驳回原因
				event_reject_reason : '',
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
				/* 详情 */
                detailPop : false,
                /* 通过 */
				passPop : false,
				passForm : {
                    mediaServerName: "请选择",
                    radio : false,
				},
				// 弹窗显示内容 判断	默认驳回
				isRejected : true,
				popTitle : '驳回',
				// 详情数据
				detailPopdata : {},
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 10,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		methods:{
			// 数据初始化
			getInitlistData(){
				let  objData = this.sortingData();
				applyEventlist(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.usercheckData = res.data.data.list;
						// 
						this.usercheckData.map(function(item,index){
							item.fixedSort = index - 0 + 1;
						})
						
						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number - 0 + 1;
					}
				});	
			},	
			// 整理 查询数据
			sortingData(){
				let  objData = {
					"enterprise_id": localStorage.EnterpriseId,
					"page_number": this.page_total_pages - 1,
					"page_size": 10
				}
				if(this.depart_name != ''){
					objData.depart_name = this.depart_name;
				}
				if(this.enterprise_user_name_or_phonenum != ''){
					objData.enterprise_user_name_or_phonenum = this.enterprise_user_name_or_phonenum;
				}
				if(this.region_name != ''){
					objData.region_name = this.region_name;
				}
				if(this.userCheckstatevalue != ''){
					objData.event_status = this.userCheckstatevalue;
				}
				if(this.userChecktypevalue != ''){
					objData.event_type = this.userChecktypevalue;
				}
				return objData;

			},
			// 状态
			getInitdataState(){
				// applyEventlistState
				applyEventlistState({}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.userCheckstate = res.data.data
					}
				});	
			},
			// 类型
			getInitdataType(){
				//  applyEventlistType
				applyEventlistType({}).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						console.log(res);
						this.userChecktype = res.data.data
					}
				});	
			},
			// 查询
			findDatalist(){
				this.getInitlistData();
			},
			// 清空
			clearDatalist(){
				this.depart_name = '';
				this.enterprise_user_name_or_phonenum = '';
				this.region_name = '';
				this.userCheckstatevalue = '';
				this.userChecktypevalue = '';
				// 清空查询
				this.getInitlistData();
			},
			// 列表 通过按钮
			passClick(scope,type){
				if(type){
					// 通过
					this.isRejected = false;
					this.popTitle = '通过'
				}else{
					// 驳回
					this.isRejected = true;
					this.popTitle = '驳回原因'
				}
				this.passPop = true;
				// 缓存数据
				this.passPopdetail = scope

				// ajax 初始化 弹窗 权限列表
				// enterprise_apply_event_id 事件id
				let objData = {
					"enterprise_apply_event_id" : scope.enterprise_apply_event_id
				}
				applyEventlistEnterprisegroups(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						this.listEnterprisegroupsdata = res.data.data
					}
				});	
			},
			// 通过/ 驳回弹窗 提交按钮
			submittingBy(){
				if(this.isRejected){
					// 驳回 userCheckapplyEventreject
					let objData = {
						"enterprise_apply_event_id": this.passPopdetail.enterprise_apply_event_id,
						"event_reject_reason": this.event_reject_reason,
						"processor_id": localStorage.userId
					}
					
					userCheckapplyEventreject(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('驳回成功')

							this.getInitlistData();
							// 清空通过数据
							this.clearPassdata();
						}
					});	

				}else{
					// 通过
					// ajax  applyEventapprove

					if(this.listEnterprisegroupsvalue == ''){
						this.$message.error('请选择权限分组');
						return false;
					}
					let objData = {
						"enterprise_apply_event_id": this.passPopdetail.enterprise_apply_event_id,
						"enterprise_group_ids": [this.listEnterprisegroupsvalue],
						"is_admin": this.isAdmin == '1' ? true : false,
						"processor_id": localStorage.userId
					}
					
					applyEventapprove(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							this.$message.success('提交成功')
							// 清空通过数据
							this.clearPassdata();
						}
					});	

				}
			},
			clearSbumittingby(){
				this.clearPassdata();
			},
			clearPassdata(){
				this.passPop = false;
				this.listEnterprisegroupsvalue = '';
				this.isAdmin = '1';
				this.event_reject_reason = '';
			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitlistData();
			},
			// 详情
            detailClick(scope){
				console.log(scope);
				this.detailPop = true;
				this.detailPopdata = scope;
            },
		},
		mounted: function() {
			let row = '.usercheckList'
			heightAuto(row)
			// 初始化
			this.getInitlistData();
			this.getInitdataState();
			this.getInitdataType();
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