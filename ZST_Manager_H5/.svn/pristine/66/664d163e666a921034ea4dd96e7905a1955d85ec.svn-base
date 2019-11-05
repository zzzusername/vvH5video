<template>
	<div id="userlog" class="mRight">
		<div class="userlogList">
			<div class="zForm">
				<span class="paddingLeft">选择日期： </span>
                <div class="timeBox">
					<el-date-picker v-model="startTime" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="开始日期"></el-date-picker>
				</div>
				<span class="paddingLeft">流媒体IP： </span><input class="zInput" type="text" placeholder="" />
				<span class="paddingLeft">流媒体端口： </span><input class="zInput" type="text" placeholder="" />
				<div class="onlyLine">
                    <span class="paddingLeft">操作类型：</span>
                    <div class="zSelect">
                        <el-select v-model="operateValue" class="zgroup" placeholder="--请选择--">
                            <el-option v-for="item in operateData" 
                            :key="item.index"  :label="item.value" :value="item.index"></el-option>
                        </el-select>
                    </div>
                    <button class="buttonradius">查询</button>
				    <button class="buttonradius">清空</button>
                </div>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="userlogData"
						>
							<el-table-column prop="name" label="用户姓名"></el-table-column>
							<el-table-column prop="loginaccount" label="登录账号"></el-table-column>
							<el-table-column prop="internetaccount" label="视联网账号"></el-table-column>
							<el-table-column prop="startTime" label="开始时间"></el-table-column>
							<el-table-column prop="endTime" label="结束时间"></el-table-column>
							<el-table-column prop="tiemLong" label="时长"></el-table-column>
							<el-table-column prop="state" label="操作类型"></el-table-column>
							<el-table-column prop="app" label="APP版本"></el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn" @click="detailClick(scope.row)">查看详情</span>
								</template>
							</el-table-column>
						</el-table>
					</div>
					<!-- page -->
					<el-pagination
						@size-change="handleSizeChange" 
						@current-change="handleCurrentChange" 
						:current-page.sync="currentPage" 
						:page-size="pagesize" 
						layout="total, prev, pager, next, jumper" 
						:total="total"
						class="zPage"
						>
					</el-pagination>
				</div>
			</div>
		</div>
		 <!-- 详情弹窗 -->
		<el-dialog  title="详情" 
			:visible.sync="detailPop"
			id="zDialogtext"
		 	width="50%">
			<div class="block block-inline" id="detailW2">
				<li>
					<span class="liL">接口类型</span>
					<span class="liR">双向手机视频童话-主叫</span>
				</li>
				<li>
					<span class="liL">主叫-用户姓名</span>
					<span class="liR">cs59</span>
				</li>
				<li>
					<span class="liL">主叫-登录账号</span>
					<span class="liR">15131231231</span>
				</li>
				<li>
					<span class="liL">主叫-视联网账号</span>
					<span class="liR">15131231231</span>
				</li>
				<li>
					<span class="liL">被叫-视联网账号</span>
					<span class="liR">15131231231</span>
				</li>
				<li>
					<span class="liL">开始时间</span>
					<span class="liR">2019/05/15 10:00:00</span>
				</li>
				<li>
					<span class="liL">结束时间</span>
					<span class="liR">2019/05/15 10:00:00</span>
				</li>
				<li>
					<span class="liL">时长</span>
					<span class="liR">2019/05/15 10:00:00</span>
				</li>
				
				
			</div>
			<div class="userBtn">
				<el-button size="small" @click="detailPop = false">关闭</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
  	/* 展示弹窗样式文件 */
    import '../../style/common.css' /*引入公共样式*/
	// js
	import {heightAuto} from '../../untils/heightAuto' //注意路径
	/*  api 文件引入 */
	import {getAllmoduleEntries} from '@/page/api/log'
	export default {
        data() {
			return {
				userlogData : [
					{
						name : '王达',
						loginaccount : '13800000000',
						internetaccount : '13800000000',
						startTime : '2019-01-21 11:22:11',
						endTime : '2019-01-21 11:22:11',
						tiemLong : '01:00:00',
						state : '收看直播',
						app : 'APP版本',
					}
				],
				operateData : [
					{
						value : '全部',
						index : '01',
					},
					{
						value : '发布直播',
						index : '02',
					},
					{
						value : '收看直播',
						index : '03',
					},
				],
				operateValue : '01',
                startTime: '',
				endTime: '',
				// 详情弹窗
				detailPop : false,
				/* 分页相关 */
				currentPage: 10,
				pagesize: 10,
				total : 0,
			}
		},
		methods:{
			// 详情
			detailClick(scope){
				console.log(scope)
				this.detailPop = true;
			},
			// page
			handleSizeChange(size) {
				this.pagesize = size;
			},
			handleCurrentChange(currentPage) {
				this.currentPage = currentPage;
				console.log("我是页码" + this.currentPage);
				Page = this.currentPage;
				console.log(Page);
			},
			// 初始化数据接口
			getInitializationdata(){
				console.log('初始化数据')
				//  初始化数据接口
				getAllmoduleEntries(objData).then(res => {
					console.log(res)
				});	

			}
		},
		mounted: function() {
			let row = '.userlogList'
			heightAuto(row)
			//this.getInitializationdata;
			console.log('111');
			let objData = {};
			getAllmoduleEntries(objData).then(res => {
					console.log(res)
			});	
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
	width: 100%;
    display: inline-block;
    margin-top: 20px;
}
.zPage{
	margin-top: 50px;
}
.timeBox {
	float: left;
	width: 198px;
	margin: 0 20px 0 3px;
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

<style lang="scss">
	#userlog {
		.userlogList {
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
				.zSelect {
                    float: left;
                    width: 206px;
                    margin-left: 10px;
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
		#userlog {
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
		#userlog .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#userlog {
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