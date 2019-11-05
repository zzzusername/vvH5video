<template>
	<div class="mRight" id="serverBoxZ">
		<div class="mRightTwo">
			<div class="zForm">
			<span>服务器名称：</span>
			<input class="zInput" type="text" v-model="serverName" placeholder />
			<button class="buttonradius" @click="findData">查询</button>
			<button class="buttonradius" @click="clearData">清空</button>
			<button class="buttonradius" style="float:right;" @click="addDatalist">新增</button>
			</div>
			<div class="zTable">
			<div class="elTable">
				<vue-scroll :ops="ops" ref="vs">
				<div class="scrollbox">
					<el-table
					id="showsholl"
					ref="multipleTable"
					:data="registerData"
					tooltip-effect="dark"
					>
					<el-table-column prop="name" label="序号"></el-table-column>
					<el-table-column prop="api_url" label="URL"></el-table-column>
					<el-table-column prop="client_id" label="appKey"></el-table-column>
					<el-table-column prop="client_secret" label="appSecret"></el-table-column>
					<el-table-column label="操作" width="150">
						<template slot-scope="scope">
						<span class="spanBtn" @click="editData(scope.row)">跳转</span>
						<span class="spanBtn">监控和终端</span>
						<span class="spanBtn">删除</span>
						</template>
					</el-table-column>
					</el-table>
				</div>
				</vue-scroll>
			</div>
			<el-pagination
				@current-change="handleCurrentChange" 
				:current-page.sync="page_total_pages" 
				:page-size="page_size" 
				layout="total, prev, pager, next, jumper" 
				:total="page_total_items"
				class="zPage"
				style="margin-top:20px;"
				>
			</el-pagination>
			</div>
		</div>
		<!-- 新增弹窗 -->
	</div>
</template>
<script>
import $ from "jquery";
import axios from "axios";

/* api */
//  assistServerlist  查询所有辅助服务器列表数据
//  assistServer  新增辅助服务器
import {assistServerlist,assistServer} from '../interface/resource'
var page = 1;
export default {
  data() {
    return {
		serverName : '',
		registerData: [],
		total: 0,
		ops: {
		vuescroll: {
			mode: "native"
		},
		scrollPanel: {}
		},
		// 新增弹窗
		determinePop : false,
		addForm : {
			name : '1'
		},
		/* 分页相关 */
        page_size : 10,			//  请求多少条目
        page_total_items : 0,  // 总条数 
        page_total_pages : 1,  //  当前条数
    };
  },
  mounted: function() {
    var wid = document.documentElement.clientWidth,
      hei = document.documentElement.clientHeight;
    $(".mRightTwo").css("height", hei - 178);
    this.getregister();
    $(window).resize(function() {
      var wid = document.documentElement.clientWidth,
        hei = document.documentElement.clientHeight;
      $(".mRightTwo").css("height", hei - 178);
    });
  },
  methods: {
    // 初始化数据
    getregister() {
	   let objData = {
			"server_name": this.serverName,
			"page_number": 0,
  			"page_size": this.page_size,
		}
		assistServerlist(objData).then(res => {
			if (res.status === 200 && res.data.result == "ok") {
				this.registerData = res.data.data.list;
				/* 总条数 */
				this.page_total_items = res.data.data.page_total_items; 
				this.page_total_pages = res.data.data.page_number;
			}
		});	
	},
	// 查询
	findData(){
		this.getregister();	
	},
	// 清除
	clearData(){
		this.serverName = '';
	},
	// 新增
	addDatalist(){
		this.determinePop = true;
	},
	// 新增弹窗点击
	popDetermineclick(){
		// ajax
		let objData = {
				"api_url": "http://localhost:8080/ucsys/assist",
				"client_id": "7b8d2d11-d84c-4f26-8c08-04f5584ff5c3",
				"client_secret": "7b8d2d11-d84c-4f26-8c08-04f5584ff5c3",
				"name": "北京测试辅助服务器",
				"parameters": "{}"
			}
		assistServer(objData).then(res => {
			if (res.status === 200 && res.data.result == "ok") {
				console.log(res.data.result);
			}
		});	
	},
	// 编辑 跳转
	editData(scope){
		console.log(scope)
	},		
	// page
    handleCurrentChange: function(currentPage) {
		console.log(currentPage)
    }
  },
	updated() {
		var addmodHei = $('#menuAddModel .el-dialog').height();
		$('#menuAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
		$('#menuAddModel .el-dialog').css('marginBottom', 0);
	}
};
</script>
<style scoped>
.spanBtn{
	cursor: pointer;
}
.formTable{
	padding: 2px 4px;
    background: #4a567c;
    margin-bottom: 24px;
	overflow: hidden;
}
.mRightTwo {
  padding: 34px 42px;
  margin: 15px 27px 15px 15px;
  background: #354166;
  box-shadow: 0px 0px 26px #01060e;
}
.el-form-item{
	margin-block: 0;
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

.zTable .el-table .cell2 {
  color: #f00;
}

.elTable {
  height: 91.7%;
  overflow-y: auto;
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
</style>
<style lang="scss">
@import url("../media/lkjmedia.css");
#showsholl {
  overflow: auto;
  overflow-y: hidden;
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
@media screen and (max-width: 1366px) {
  #serverBoxZ {
    .zTable {
      height: 89%;
    }
    .scrollbox {
      width: 1160px;
    }
  }
}
 #menuAddModel {
    .TerminaLeft, .TerminaRight {
      background-color: #1b274c;

      /*float: left;*/
      width: 300px;
      height: 380px;
      overflow-y: auto;
    }
    .second {
      .serveraddress {
        height: 30px;
        line-height: 30px;
        text-align: center;
        .empty {
          float: right;
          color: #eee;
          height: 28px;
          font-size: 12px;
          margin-left: 11px;
          text-align: center;
          line-height: 28px;
          padding: 0px 8px;
          background: #1b274c;
          border: 1px #3b4872 solid;

        }
        .empty:hover {
          background: #57e29b !important;
          border: 1px #242f50 solid !important;
          color: #333;
        }
      }

    }
    .scrolltree {
      height: 300px;

    }
    #medialist .closebox {
      img {
        margin-top: 2px;
      }
      margin-left: 20px;
      display: -webkit-inline-box;
      display: inline-block;
      display: none;

    }
    #mediatree, #medialist {
      ul li {
        height: 34px;
        padding-top: 5px;
        font-size: 18px;
        line-height: 34px;
        width: 300px;
      }
      float: left;
      width: 50%;
      height: 100%;

    }

    #showtreebox1 {
      #showtreeboxdisplaybox {
        /*width: 380px;*/
        height: 440px;
      }
      #pane-province, #pane-city, #pane-county {
        height: 380px;
      }
      display: none;
      .closedbut {
        position: absolute;
        bottom: 0;
        right: 20px;
        width: 50px;
        height: 30px;
        padding: 0px 10px;
        border-radius: 10px;
        background: #1b274c;
        border: 1px #3b4872 solid;
        text-align: center;
        z-index: 999;
        cursor: pointer;
      }
    }

  }

</style>