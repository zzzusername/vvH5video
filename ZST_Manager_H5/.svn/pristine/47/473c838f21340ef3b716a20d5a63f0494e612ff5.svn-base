<template>
	<div id="addmoduls" class="mRight">
		<div class="addmodulsList">
			<div class="zForm">
                <button class="buttonradius" style="float:right;" @click="addDatalist">新增</button>
			</div>
			<!-- table  -->
			<div class="zTable">
				<div class="elTable">
					<div class="scrollbox">
						<el-table
						:data="addmodulsData"
						>
							<el-table-column prop="sort" label="顺序"></el-table-column>
							<el-table-column prop="name" label="模块名称"></el-table-column>
							<el-table-column prop="" label="预览图片">
                                <template slot-scope="scope">
                                    <img class="tableImg" :src="scope.row.img" alt="">
								</template>
                            </el-table-column>
                            <el-table-column prop="describe" label="功能描述"></el-table-column>
							<el-table-column prop="state" label="状态"></el-table-column>
							<el-table-column prop="" label="操作" >
								<template slot-scope="scope">
									<span class="spanBtn">编辑</span>
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
				addmodulsData : [
					{
						sort : '1',
						name : '数据',
                        img : 'http://img0.imgtn.bdimg.com/it/u=1133601823,1317112877&fm=26&gp=0.jpg',
                        describe : '描述',
						state : 1,
                    },
                    {
						sort : '2',
						name : '监控',
                        img : 'http://img0.imgtn.bdimg.com/it/u=1133601823,1317112877&fm=26&gp=0.jpg',
                        describe : '描述',
						state : 1,
					},
                ],
				/* 分页相关 */
				currentPage: 10,
				pagesize: 10,
				total : 0,
			}
		},
		mounted: function() {
			let row = '.addmodulsList'
			heightAuto(row)
		},
		methods:{
			// 新增按钮
			addDatalist(){
				console.log('新增')
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
.tableImg{
    width: 100px;
    height: 100px;
}
</style>

<style lang="scss">
	#addmoduls {
		.addmodulsList {
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
		#addmoduls {
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
		#addmoduls .mRightTwo .el-dialog .el-dialog__body{
			padding: 24px 24px 10px;
		}
		#addmoduls {
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