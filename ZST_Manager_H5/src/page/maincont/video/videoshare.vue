<template>
	<div id="videoshare" class="mRight">
		<div class="videoshareList">
			<div class="zForm">
				<span class="paddingLeft">发布人姓名或手机号： </span><input class="zInput" type="text" placeholder="" />
                <span class="paddingLeft">直播方式：</span>
                <div class="zSelect">
                    <el-select v-model="checkValue" class="zgroup" placeholder="--请选择--">
                        <el-option v-for="item1 in checkData" 
                        :key="item1.index" :label="item1.value" :value="item1.key"></el-option>
                    </el-select>
                </div>
                <span class="paddingLeft">状态：</span>
                <div class="zSelect">
                    <el-select v-model="checkValue" class="zgroup" placeholder="--请选择--">
                        <el-option v-for="item1 in checkData" 
                        :key="item1.index" :label="item1.value" :value="item1.key"></el-option>
                    </el-select>
                </div>
                <button class="buttonradius">查询</button>
                <button class="buttonradius">清空</button>
                <button class="buttonradius" style="float:right;" @click="publishClick">发布</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="videoshareData"
						>
							<el-table-column prop="name" label="内容"></el-table-column>
							<el-table-column prop="name" label="图片／视频"></el-table-column>
							<el-table-column prop="name" label="可视范围"></el-table-column>
							<el-table-column prop="name" label="发布时间"></el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn" @click="detailClick(scope.row)">详情</span>
									<span class="spanBtn">删除</span>
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
                        class="zPage">
                    </el-pagination>
				</div>
			</div>
		</div>
		<!-- 发布弹窗 -->
        <div id="userAddModel2">
            <el-dialog  title="编辑" 
                :visible.sync="publishPop"
                :close-on-click-modal="false"
                width="50%">
                <el-form :model="publishForm" ref="edit" label-width="19%" class="demo-ruleForm">
                    <div class="formTable">
						<div class="block">
							<el-form-item label="内容："  prop="cont">
								<el-input v-model="publishForm.cont" maxlength="50"></el-input>
							</el-form-item>
                        </div>
						<div class="block">
                            <el-form-item label="可见范围：" prop="">
                                <el-select v-model="publishForm.rangeValue"  placeholder="--请选择--">
                                    <el-option v-for="item in publishForm.rangeData" :key="item.index" :label="item.value" :value="item"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
						<!-- 头像上传 -->
						<div class="upload" id="upLoadpop">
							<el-form-item label="头像：" prop="headportrait">
								<div class="uploadBg">
									<div class="filegroup">
										<div class="iptvImg"><img src="" alt=""></div>
										<form id="uploadForm" class="uploadForm4" enctype="multipart/form-data">
											<div class="formLeft">
												<input type="file" accept="image/*" id="files" 
												name="files" @change="getFile" placeholder="file" multiple>
												<span class="filebtn">请选择文件</span>
												<input type="text" id="file" name="file" readonly multiple>
											</div>
											<div class="formRight">
												<span class="fileUpbtn">上传</span>
											</div>
										</form>
									</div>
								</div>
							</el-form-item>
						</div>
                    </div>
                    <div class="userBtn" style="width:85%; text-align:center;">
                        <el-form-item>
                            <el-button type="primary">保存</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </el-dialog>
        </div>
        <!-- 详情弹窗 -->
		<el-dialog  title="查看详情" 
			:visible.sync="detailPop"
			id="zDialogtext"
		 	width="30%">
			<div class="block">
				<li>
					<span class="liL">内容</span>
					<span class="liR">张焕</span>
				</li>
				<li>
					<span class="liL">图片</span>
					<span class="liR">13800003333</span>
				</li>
				<li>
					<span class="liL">可视范围</span>
					<span class="liR">头像</span>
				</li>
                <li>
					<span class="liL">发布时间</span>
					<span class="liR">男</span>
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

	export default {
        data() {
			return {
                /* 审核搜索数据 */
                checkValue : '1',
                checkData : [
                    {
                        index : '1',
                        value : 'value',
                    }
                ],

				videoshareData : [
					{
						name : '测试经理',
					},
					{
						name : '研发经理',
					}
                ],
                /* 详情 */
				detailPop : false,
				/* 发布 */
				publishPop : false,
				publishForm : {
					cont : '内功',
					headportrait : '头像',
					rangeData: [
						{
							index : '1',
							value : '所有人可见',
						},
						{
							index : '2',
							value : '指定人可见',
						}
					],
					rangeVlaue : '1',
				},
				/* 分页相关 */
				currentPage: 10,
				pagesize: 10,
				total : 0,
			}
		},
		mounted: function() {
			let row = '.videoshareList'
			heightAuto(row)
		},
		methods:{
			// 发布
			publishClick(){
				this.publishPop = true;
			},
			// 发布 上传
			getFile(){
				console.log('上传')
			},
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
        },
        updated() {
			/* var addmodHei = $("#userAddModel2 .el-dialog").height();
			$("#userAddModel2 .el-dialog").css("marginTop", -(addmodHei / 2));
			$("#userAddModel2 .el-dialog").css("marginBottom", 0);
			$("#distributionModel2 .el-dialog").css("marginTop", "-297px"); */
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
.block{
	width: 100%;
}
</style>

<style lang="scss">
	#videoshare {
		.videoshareList {
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
		#videoshare {
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
		#videoshare .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#videoshare {
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
	/* 弹窗样式重置 */
	#userAddModel2 .el-form-item{
		width: 100%;
	}
</style>