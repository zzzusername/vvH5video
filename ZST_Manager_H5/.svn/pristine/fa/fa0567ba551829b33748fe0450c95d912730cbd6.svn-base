<template>
	<div id="ststem" class="mRight">
		<div class="ststemList">
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
				<span class="paddingLeft">一级菜单：</span>
				<div class="zSelect">
					<el-select v-model="funDatavalue" class="zgroup" placeholder="--请选择--" @change="moduleUrlchange">
						<el-option v-for="item in funData" 
						:key="item.index" :label="item.module_name" :value="item.module_url"></el-option>
					</el-select>
				</div>
				<span class="paddingLeft">二级菜单：</span>
				<div class="zSelect">
					<el-select v-model="moduleUrlvalue" class="zgroup" placeholder="--请选择--">
						<el-option v-for="item in moduleUrl" 
						:key="item.index" :label="item.fun_name" :value="item.fun_url"></el-option>
					</el-select>
				</div>
				<div class="onlyLine">
                    <span class="paddingLeft">账号或姓名： </span><input v-model='accountName' class="zInput" type="text" placeholder="" />
                    <span class="paddingLeft">用户IP： </span><input v-model='userIp' class="zInput" type="text" placeholder="" />
                    <button class="buttonradius" @click="findDatalist">查询</button>
				    <button class="buttonradius" @click="clearDatalist">清空</button>
                </div>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="ststemData"
						>
							<el-table-column prop="fixedSort" label="序号"></el-table-column>
							<el-table-column prop="action_time" label="操作时间">
								<template slot-scope="scope">
									<span>{{ scope.row.action_time | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
								</template>
							</el-table-column>
							<el-table-column prop="module_name" label="功能模块名称"></el-table-column>
							<el-table-column prop="fun_name" label="操作详情"></el-table-column>
							<el-table-column prop="user_account" label="操作用户账号"></el-table-column>
							<el-table-column prop="user_name" label="操作用户姓名"></el-table-column>
							<el-table-column prop="user_ip" label="操作用户IP"></el-table-column>
						</el-table>
					</div>
					<!-- page -->
					<!-- 	@size-change="handleSizeChange"  -->
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
	// js
	import {heightAuto} from '../../untils/heightAuto' //注意路径
	// api
	// getAllmoduleEntries 初始化下拉 功能数据 接口
	//  getFunentriesModuleurl 获取log 接口
	// useractionList 获取指定模块下的全部功能条目（用于前端初始化下拉框）
	import {getFunentriesModuleurl, getAllmoduleEntries, useractionList} from '@/page/api/log'
	export default {
        data() {
			return {
				ststemData : [],
				funData : [],
				funDatavalue : '',
				moduleUrl : [
					{
						
					}
				],
				moduleUrlvalue : '',
                funValue : '',
                startTime: '',
				endTime: '',
				userIp : '',
				accountName : '',
				/* 分页相关 */
				page_size : 10,			//  请求多少条目
				page_total_items : 0,  // 总条数
				page_total_pages : 1,  //  当前条数
			}
		},
		methods:{
			// 初始化功能模块下拉数据
			getAllmoduleEntriesInit(){
				let objData = {};

				//  初始化数据接口
				getAllmoduleEntries(objData).then(res => {

					if (res.status === 200 && res.data.result == "ok") {
						this.funData = res.data.data
					}

				});	
			},
			// 动态改变 操作详情
			moduleUrlchange(){
				//  初始化操作详情数据
				let objData = {
					"module_url": this.funDatavalue
				}
				useractionList(objData).then(res => {
					
					if (res.status === 200 && res.data.result == "ok") {
						this.moduleUrl = res.data.data;
						this.moduleUrlvalue = '';
					}

				});	
			},
			// 初始化数据
			getInitializationdata(){

				let objData = {
					"account_or_user_name": this.accountName,
					"begin_action_time": this.startTime,
					"end_action_time": this.endTime,
					"enterprise_id": localStorage.EnterpriseId,
					"fun_url": this.funDatavalue,		
					"module_url": this.moduleUrlvalue,
					"page_number": this.page_total_pages,
					"page_size": this.page_size,
					"user_ip": this.userIp  
				};
				// 判断 开始日期是否为空
				if(objData.begin_action_time == ''){
					// 获取今天0点时间 为默认值
					let start = new Date(new Date(new Date().toLocaleDateString()).getTime() - 24*60*60*1000);

					objData.begin_action_time = start.getTime()
				}

				//  初始化数据接口
				getFunentriesModuleurl(objData).then(res => {

					if (res.status === 200 && res.data.result == "ok") {
						console.log(res.data.data)
						this.ststemData = res.data.data.list;
						this.ststemData.map(function(item,index){
							item.fixedSort = index - 0 + 1;
						})

						/* 总条数 */
						this.page_total_items = res.data.data.page_total_items; 
						this.page_total_pages = res.data.data.page_number;
					}
				});	

			},
			// 查询数据
			findDatalist(){
				this.getInitializationdata()
			},
			// 清空数据列表
			clearDatalist(){
				this.accountName = '';
				this.startTime = '';
				this.endTime = '';
				this.funDatavalue = '';
				this.moduleUrlvalue = '';
				this.userIp = '';
				this.getInitializationdata()
			},
			// page
			handleCurrentChange(currentPage) {
				this.page_total_pages = currentPage;
				this.getInitializationdata();
			},
		},
		mounted: function() {
			let row = '.ststemList'
			heightAuto(row)
			this.getInitializationdata();
			this.getAllmoduleEntriesInit();
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
</style>

<style lang="scss">
	#ststem {
		.ststemList {
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
		#ststem {
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
		#ststem .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#ststem {
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
    .timeBox {
		float: left;
		width: 198px;
		margin: 0 20px 0 3px;
	}
</style>