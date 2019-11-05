<template>
  <div class="mRight" id="controlBox">
    <div class="mRightTwo">

      <div class="zForm ">
        <span class="paddingLeft">起始时间</span>
        <div class="timeBox">
          <el-date-picker v-model="startTime"
                          type="date"
                          format="yyyy-MM-dd"
                          value-format="timestamp"
                          :placeholder="placeholdertime"></el-date-picker>
        </div>
        <span>终止时间</span>
        <div class="timeBox">
          <el-date-picker v-model="endTime"
                          type="date"
                          format="yyyy-MM-dd"
                          value-format="timestamp"
                          placeholder="终止日期"></el-date-picker>
        </div>
        <span class="Selectfont">一级菜单</span>
        <div class="zSelect">
          <el-select v-model="Moduledatavalue" @change="selcetChange" class="zgroup" placeholder="--请选择--">
            <el-option
              v-for="item in Moduledata"
              :key="item.key"
              :label="item.module_name"
              :value="item.module_url"
            ></el-option>
          </el-select>
        </div>
        <span class="Selectfont">二级级菜单</span>
        <div class="zSelect">
          <el-select v-model="Fundatavalue" class="zgroup" placeholder="--请选择--">
            <el-option
              v-for="item in Fundata"
              :key="item.key"
              :label="item.fun_name"
              :value="item.fun_url"
            ></el-option>
          </el-select>
        </div>
        <div id="inline">
          <span>操作账号或姓名：</span>
          <input v-model="logName" class="zInput" type="text" placeholder />
          <span>用户IP：</span>
          <input v-model="logIp" class="zInput" type="text" placeholder />
          <button @click="findData">查询</button>
          <button @click="clearData">全部</button>
        </div>
      </div>
      <div class="zTable">
        <div class="elTable">
          <vue-scroll :ops="ops" ref="vs">
            <div class="scrollbox">
           
              <el-table ref="multipleTable" :data="logListdata" style="width: 100%">
                   <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="action_time" label="操作时间">
                  <template slot-scope="scope">
                    <span>{{ scope.row.action_time | FormatDate('yyyy-MM-dd hh:mm:ss') }}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="type" label="企业名称"></el-table-column>
                <el-table-column prop="module_name" label="功能模块名称"></el-table-column>
                <el-table-column prop="fun_name" label="操作详情"></el-table-column>
                <el-table-column prop="user_account" label="操作用户账号"></el-table-column>
                <el-table-column prop="user_name" label="操作用户姓名"></el-table-column>
                <el-table-column prop="user_ip" label="操作用户IP"></el-table-column>
              </el-table>
            </div>
          </vue-scroll>
        </div>
        <el-pagination @size-change="" @current-change="handleCurrentChange" :current-page.sync="pagenumber" :page-size="pagesize" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from "jquery";
  import axios from "axios";

  /* api */
  /* getFunentriesBymoduleUrl 管理员日志列表 */
  /* getAllmoduleEntries 获取全部的模块条目 */
  /* specifyListof 获取指定的模块列表 */
  import {getFunentriesModuleurl, getAllmoduleEntries, specifyListof} from '../interface/log'
  var page = 0;

  export default {
    data() {


      return {
        placeholdertime:"",
        querybut:false,
        pagenumber: page,
        pagesize: scopes,
        total: 1,
        ops: {
          vuescroll: {
            mode: 'native'
          },
          scrollPanel: {}
        },
        startTime : '',
        endTime : '',
        logName : '',
        logIp : '',
        Fundata : [],
        Fundatavalue : '',
        Moduledata : [],
        Moduledatavalue : '',
        logListdata : [],
        /* 分页相关 */
        page_size : 10,			//  请求多少条目
        page_total_items : 0,  // 总条数
        page_total_pages : 1,  //  当前条数
      };
    },
    methods: {
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function (pagenumber) {
        this.pagenumber = pagenumber;
        page = this.pagenumber;
        //this.getMenuInfoList();  //获取列表的函数
        // console.log("search:"+this.value);
        this.getDatalist();
      },
      // 初始化下拉数据
      getInitdropDowndata(){
        let objData = {}
        getAllmoduleEntries(objData).then(res => {
          if (res.status === 200 && res.data.result == "ok") {
            this.Moduledata = res.data.data;
          }
        });
      },
      // 动态加载下拉
      selcetChange(){
        let url = this.Moduledatavalue;
        this.getSecondarydata(url);
      },
      // 二级下拉数据获取
      getSecondarydata(url){
        let objData = {
          "module_url": url
        }
        specifyListof(objData).then(res => {
          if (res.status === 200 && res.data.result == "ok") {
            this.Fundata = res.data.data;
          }
        });
      },
      // 初始化数据列表
      getDatalist(){
        var pageSize = this.pagesize,
          pagenumber = this.pagenumber - 1;
        let objData ={
          "account_or_user_name": this.logName,
          "begin_action_time": this.startTime,
          "end_action_time": this.endTime,
          "fun_url": this.Fundatavalue,
          "module_url":  this.Moduledatavalue,
          "user_ip": this.logIp,
          "page_number": pagenumber,
          "page_size": pageSize,
        }
        // 判断 开始日期是否为空
        if(objData.begin_action_time == ''){
          // 获取今天0点时间 为默认值
          let start = new Date(new Date(new Date().toLocaleDateString()).getTime() - 24*60*60*1000);

          objData.begin_action_time = start.getTime()

          var timelist=this.timestampToTime(objData.begin_action_time).split(" ")
        }
        console.log(timelist)
        this.placeholdertime=timelist[0];
        getFunentriesModuleurl(objData).then(res => {
          if (res.status === 200 && res.data.result == "ok") {
            console.log(res)
            this.logListdata = res.data.data.list;
            this.total=  res.data.data.page_total_items

            /* 总条数 */
//            this.page_total_items = res.data.data.page_total_items;
//            this.page_total_pages = res.data.data.page_number;
          }
        });

      },
      // 查询
      findData(){
        if(this.logName==""&&this.startTime===""&&this.endTime===""&&this.Fundatavalue==""&&this.Moduledatavalue==""&&this.logIp==""){
          this.$message({
            message:"请选择查询项",
            type: 'warning'
          });
        }else {
          this.querybut=true

          this.getDatalist();
        }



      },
      // 清空
      clearData(){
        this.startTime = ''
        this.endTime = ''
        this.logName = ''
        this.logIp = ''
        this.Fundatavalue = ''
        this.Moduledatavalue = ''
         this.querybut=false
        this.getDatalist();
      },

    },
    mounted: function() {
      var hei = document.documentElement.clientHeight;
      $(".mRightTwo").css("height", hei - 178);
      $(window).resize(function() {
        var wid = document.documentElement.clientWidth,
          hei = document.documentElement.clientHeight;
        $(".mRightTwo").css("height", hei - 178);
      });
      // this.getselect();
      $(".UploadPath").css("display", "none");
      // 初始化接口
      this.getDatalist();
      this.getInitdropDowndata();
    },
    updated() {

    }
  };
  import Tools from '../media/Tools.js'
</script>
<style scoped>
  .scrollbox {
    width: 1564px;
  }

  @media screen and (max-width: 1440px) {
    .scrollbox {
      width: 1156px;
    }
  }

  @media screen and (max-width: 1366px) {
    .scrollbox {
      width: 1090px;
    }
    #controlBox .zTable {
      padding-top: 0;
    }
  }

  .paddingLeft {
    padding-left: 20px;
  }

  input.el-input__inner:hover {
    border: 1px #3b4872 solid;
  }

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
    margin: 0 20px 0 3px;
  }

  .zForm span.btnRight {
    float: right;
    display: inline-block;
  }

  .timeBox {
    float: left;
    width: 198px;
    margin: 0 20px 0 3px;
  }

  .nullMargin {
    margin: 0 0 0 3px;
  }
</style>
<style type="text/css">
  @import url("../media/lkjmedia.css");
</style>
