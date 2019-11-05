<template>
	<div class="mRight">
		<div class="mRightTwo">
			<div class="zForm">
				<span>名称：</span><input class="zInput" type="text" placeholder="" /><button>查询</button><button>全部</button>
				<span class="btnRight"><button>新增</button><button>删除</button></span>
			</div>
			<div class="zTable">
				<div class="elTable">
					<el-table ref="multipleTable" :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)" tooltip-effect="dark" style="width: 100%">
						<el-table-column type="selection"></el-table-column>
						<!-- <el-table-column type="index" label="序号"></el-table-column> -->
						<el-table-column prop="userId" label="ID"></el-table-column>
						<el-table-column prop="name" label="名称"></el-table-column>
						<el-table-column prop="phone" label="key"></el-table-column>
						<el-table-column prop="userImg" label="密钥"></el-table-column>
						<el-table-column prop="edit" label="编辑">
							<template slot-scope="scope">
								<a href="javascript:;"><img src="../../assets/edit2.png" alt=""></a>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" layout="total, prev, pager, next, jumper" :total="400"></el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	export default {
		data() {
			return {
				value: "",
				options: [{
						value: "选项1",
						label: "黄金糕"
					},
					{
						value: "选项2",
						label: "双皮奶"
					},
					{
						value: "选项3",
						label: "蚵仔煎"
					},
					{
						value: "选项4",
						label: "龙须面"
					},
					{
						value: "选项5",
						label: "北京烤鸭"
					}
				],
				tableData3: [{
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}, {
					name: "05011",
					userId: "60F2EF025E83",
					phone: "2131",
					userImg: "",
					internet: "主消息",
					date: "2018/4/26 10:02:28",
					device: "147"
				}],
				currentPage: 1,
				pagesize: scopes,
			};
		},
		mounted: function() {
			var hei = document.documentElement.clientHeight;
			$(".mRightTwo").css("height", hei - 178);
			$(window).resize(function () {
				var wid = document.documentElement.clientWidth,
				hei = document.documentElement.clientHeight;
				$('.mRightTwo').css('height', hei - 178);
			})
		},
		methods: {
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSizeChange: function(size) {
				this.pagesize = size;
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
			}
		}
	};

  import Tools from '../media/Tools.js'
</script>
<style scoped>
	.mRightTwo {
		padding: 34px 42px;
		margin: 15px 27px 15px 15px;
		background: #354166;
		box-shadow: 0px 0px 26px #01060e;
	}

	.zForm span {
		float: left;
		color: #eee;
		display: block;
		font-size: 14px;
		overflow: hidden;
		line-height: 36px;
	}

	.zTable {
		clear: both;
		height: 94%;
		overflow: hidden;
		padding-top: 26px;
	}

	.elTable {
		height: 91.7%;
		overflow: hidden;
	}

	.zInput {
		float: left;
		width: 120px;
		height: 36px;
		font-size: 14px;
		margin-left: 3px;
		line-height: 36px;
		padding-left: 14px;
		margin-right: 20px;
		background: #2a3558;
		border: 1px #3b4872 solid;
	}

	.zForm button {
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

	.zSelect {
		float: left;
		width: 148px;
	}

	.zForm span.btnRight {
		float: right;
		display: inline-block;
	}

	@media screen and (max-width: 1440px){

		.mRight .el-table .cell,
		.mRight .el-table th div,
		.mRight .el-table--border td:first-child .cell,
		.mRight .el-table--border th:first-child .cell {
			padding-left: 5px
		}
		.mRight .el-table .cell,.mRight .el-table th div {
			padding-right: 5px;
			overflow: hidden;
			text-overflow: ellipsis
		}
		.mRight .el-table .cell,.mRight .el-table th div {
			padding-right: 5px;
			overflow: hidden;
			text-overflow: ellipsis
		}
		.mRightTwo[data-v-409c2d02] {
			padding: 34px 30px;
			margin: 15px 27px 15px 15px;
			background: #354166;
			-webkit-box-shadow: 0px 0px 26px #01060e;
			box-shadow: 0px 0px 26px #01060e;
		}
		.mRight {
			width: 89%;
			/* width: 1739px; */
			padding: 12px 0px 0px 12px;

		}


	}


	@media screen and (max-width: 1680px) and (max-height: 900px) {}
  @media screen and (max-width: 1440px)  {
    .zmainBox .systemtable {
      margin: 20px auto;
    }
    .mRightTree .zmainBox h3 {
      color: #fff;
      height: 40px;
      font-size: 16px;
      line-height: 40px;
      padding-left: 20px;
      font-weight: normal;
      padding-right: 36px;

    }
    .mRight .el-table .cell,
    .mRight .el-table th div,
    .mRight .el-table--border td:first-child .cell,
    .mRight .el-table--border th:first-child .cell {
      padding-left: 5px
    }
    .mRight .el-table .cell,.mRight .el-table th div {
      padding-right: 5px;
      overflow: hidden;
      text-overflow: ellipsis
    }
    .mRightTwo[data-v-409c2d02] {
      padding: 34px 30px;
      margin: 15px 27px 15px 15px;
      background: #354166;
      -webkit-box-shadow: 0px 0px 26px #01060e;
      box-shadow: 0px 0px 26px #01060e;
    }
    .mRight {
      width: 89%;
      /* 111 */
      padding: 12px 0px 0px 12px;
    }
    .timeBox .el-input__icon {
      line-height: 30px;
    }
    .mRight .zForm {
      padding-bottom: 30px;
    }
    .systemtable li {
      height: 25px;
      line-height: 25px;
    }
    .el-table td {
      padding: 4px 0;
    }
    .mRightTwo .elTable {
      height: 83%;
    }
    .mRightTwo .zTable {
      height: 89%;
    }
    .mRightTwo .zForm span {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
    .el-submenu__title {
      font-size: 12px;
    }
    .el-submenu__title {
      height: 30px;
      line-height: 30px
    }
    .el-table .cell {
      font-size: 12px;
    }
    .zForm .timeBox {
      width: 192px;
      height: 30px;
      line-height: 30px;
    }
    .zForm .zSelect {
      width: 100px;
      height: 30px;
      line-height: 30px;
    }
    .zForm .zInput {
      height: 28px;
      line-height: 28px;
      width: 100px;
      padding-left: 0;
    }
    .timeBox .el-date-editor.el-input {
      width: 192px
    }
    .elTable {
      height: 90%;
      overflow: hidden;
    }
    .mRightTwo .zForm button,
    .mRightThree .zForm button {
      float: left;
      color: #eee;
      height: 30px;
      font-size: 11px;
      margin-left: 8px;
      text-align: center;
      line-height: 30px;
      /*	padding: 0px 10px;*/
      background: #1b274c;
      border: 1px #3b4872 solid;
    }
    .zForm {
      padding-bottom: 58px;
    }
  }

  @media screen and (max-width: 1440px) and (max-height: 900px) {

  }
	@media screen and (max-width: 1366px) {
   .zmainBox .systemtable {
      margin: 20px auto;
    }
    .mRightTree .zmainBox h3 {
      color: #fff;
      height: 40px;
      font-size: 16px;
      line-height: 40px;
      padding-left: 20px;
      font-weight: normal;
      padding-right: 36px;

    }
		.mRight .el-table .cell,
		.mRight .el-table th div,
		.mRight .el-table--border td:first-child .cell,
		.mRight .el-table--border th:first-child .cell {
			padding-left: 5px
		}
		.mRight .el-table .cell,.mRight .el-table th div {
			padding-right: 0px;
			overflow: hidden;
			text-overflow: ellipsis
		}
		.mRightTwo[data-v-409c2d02] {
			padding: 34px 30px;
			margin: 15px 27px 15px 15px;
			background: #354166;
			-webkit-box-shadow: 0px 0px 26px #01060e;
			box-shadow: 0px 0px 26px #01060e;
		}
		.mRight {
			width: 89%;
			/* width: 1739px; */
			padding: 12px 0px 0px 12px;
		}
		.timeBox .el-input__icon {
			line-height: 30px;
		}
		.mRight .zForm {
			padding-bottom: 30px;
		}
		.systemtable li {
			height: 25px;
			line-height: 25px;
		}
		.el-table td {
			padding: 4px 0;
		}
		.mRightTwo .elTable {
			height: 83%;
		}
		.mRightTwo .zTable {
			height: 93%;
		}
		.mRightTwo .zForm span {
			height: 30px;
			line-height: 30px;
			font-size: 12px;
		}
		.el-submenu__title {
			font-size: 12px;
		}
		.el-submenu__title {
			height: 30px;
			line-height: 30px
		}
		.el-table .cell {
			font-size: 12px;
		}
		.zForm .timeBox {
			width: 192px;
			height: 30px;
			line-height: 30px;
		}
		.zForm .zSelect {
			width: 100px;
			height: 30px;
			line-height: 30px;
		}
		.zForm .zInput {
			height: 28px;
			line-height: 28px;
			width: 100px;
			padding-left: 0;
		}
		.timeBox .el-date-editor.el-input {
			width: 192px
		}
		.elTable {
			height: 90%;
			overflow: hidden;
		}
		.mRightTwo .zForm button,
		.mRightThree .zForm button {
			float: left;
			color: #eee;
			height: 30px;
			font-size: 11px;
			margin-left: 8px;
			text-align: center;
			line-height: 30px;
			/*	padding: 0px 10px;*/
			background: #1b274c;
			border: 1px #3b4872 solid;
		}
		.zForm {
			padding-bottom: 58px;
		}
	}

</style>
<style type="text/css">
	@import url("../media/lkjmedia.css");
</style>
