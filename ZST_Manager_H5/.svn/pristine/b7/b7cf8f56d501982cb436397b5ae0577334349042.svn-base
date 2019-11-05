<template>
  <div class="mRight" id="ServerStatus">
    <div class="mRightTwo">
      <div class="zForm">
        <span>名称</span><input v-model="zInput" class="zInput" type="text" placeholder=""/>
        <button @click="queryVersionList(false)">查询</button>
        <button @click="getVersionList('','all')">全部</button>
        <span class="btnRight"> <button @click="addUp">新增</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
          <!-- <vue-scroll :ops="ops" ref="vs"> -->
          <div class="scrollbox">
            <el-table ref="multipleTable"
                      :data="tableData3" style="width: 100%">
                      <el-table-column type="index" label="序号"></el-table-column>
              <el-table-column prop="name" label="名称"></el-table-column>
              <el-table-column prop="api_url" label="URL"></el-table-column>
              <el-table-column prop="client_id" label="appKey"></el-table-column>
              <el-table-column prop="client_secret" label="appSecret"></el-table-column>


              <el-table-column label="操作">
                <template slot-scope="scope">
                  <a href="javascript:;" class="ml5">

                    <img @click="editpust(scope.row)" src="../../assets/edit2.png" alt="">
                  </a>
				   <a href="javascript:;" class="ml5" @click="getserver(scope.row)">
                    <span>监控和终端 </span>


                  </a>
                  <a href="javascript:;" class="ml5" @click="deletelist(scope.row)">
                    <span>删除</span>


                  </a>

                </template>
              </el-table-column>

            </el-table>

          </div>
          <!-- </vue-scroll> -->
        </div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page.sync="pagenumber" :page-size="pagesize" layout="total, prev, pager, next, jumper"
                       :total="total"></el-pagination>
      </div>
    </div>


    <div id="ServerStatusAddModel">
      <el-dialog :close-on-click-modal="false" title="辅助服务器 - 新增" :visible.sync="dialogserveradd">
        <el-form :model="serveradd" ref="serveradd" label-width="20%" class="demo-ruleForm">
          <div class="formTable">



            <div class="block">
              <el-form-item label="名称：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveradd.name" maxlength="50"></el-input>
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="URL：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveradd.api_url" maxlength="50"></el-input>
              </el-form-item>

            </div>

            <div class="block">
              <el-form-item label="appKey：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveradd.client_id" maxlength="50"></el-input>
              </el-form-item>

            </div>

            <div class="block">
              <el-form-item label="appSecret：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveradd.client_secret" maxlength="50"></el-input>
              </el-form-item>

            </div>





          </div>
          <div class="userBtn2">
            <el-form-item>
              <el-button type="primary" @click="addSubmit">保存</el-button>
              <el-button @click="addCancel">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>
    <div id="ServerStatusEditModel">
      <el-dialog :close-on-click-modal="false" title="辅助服务器 - 编辑" :visible.sync="dialogserverEdit">
        <el-form :model="serveredit" ref="adminedit" label-width="38%" class="demo-ruleForm">
          <div class="formTable">



            <div class="block">
              <el-form-item label="名称：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveredit.name" maxlength="50"></el-input>
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="URL：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveredit.api_url" maxlength="50"></el-input>
              </el-form-item>

            </div>

            <div class="block">
              <el-form-item label="appKey：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveredit.client_id" maxlength="50"></el-input>
              </el-form-item>

            </div>

            <div class="block">
              <el-form-item label="appSecret：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="serveredit.client_secret" maxlength="50"></el-input>
              </el-form-item>

            </div>
          </div>
          <div class="userBtn2">
            <el-form-item>
              <el-button type="primary" @click="editSubmit">保存</el-button>
              <el-button @click="editCancel('1')">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>
    <div id="ServerStatusbox">
      <el-dialog :close-on-click-modal="false" title="辅助服务器 - 监控和终端" :visible.sync="dialogserverbox">
        <el-form :model="Serverdata" ref="adminedit" label-width="25%" class="demo-ruleForm">
          <div class="formTable">



            <div class="block">
              <el-form-item label="监控平台URL：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="Serverdata.monitor_server" maxlength="50" disabled></el-input>
              </el-form-item>


              <el-tooltip class="item" effect="dark" :content="this.terminal_status" placement="right">
                <el-button class="tooltipbutton">
                  <img src="../../assets/Success.png"  v-if="this.terminal_server_status"    alt="服务器连接正常">
                  <img src="../../assets/fail.png"  v-if="this.terminal_server_all"    alt="服务器连接失败">
                </el-button>
              </el-tooltip>

            </div>
            <div class="block">
              <el-form-item label="会管服务器URL："  prop="VersionNum">
                <el-input v-model="Serverdata.terminal_server" maxlength="50" disabled ></el-input>
              </el-form-item>


              <el-tooltip class="item" effect="dark" :content="monitor_status" placement="right">
                <el-button class="tooltipbutton">

                  <img src="../../assets/Success.png"  v-if="this.monitor_server_status "   alt="服务器连接正常">
                  <img src="../../assets/fail.png"  v-if=" this.monitor_server_all"   alt="服务器连接失败">
                </el-button>
              </el-tooltip>


            </div>

            <div class="block">
              <el-form-item label="终端通讯录同步方式：：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-radio-group v-model="enabled" @change="enabledlick">


                  <el-radio label="0">手动</el-radio>
                  <el-radio label="1">自动</el-radio>
                </el-radio-group>


                <span class="butclick"     type="primary"
                      @click="openFullScreen"
                      v-loading.fullscreen.lock="fullscreenLoading">
             同步
           </span>
              </el-form-item>


            </div>


          </div>
          <div class="userBtn2">
            <el-form-item>
              <!--<el-button type="primary" @click="editSubmit">保存</el-button>-->
              <el-button @click="editCancel('2')">关闭</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>


  </div>

</template>
<script>
  import $ from 'jquery'
  import axios from 'axios'
  import {getRegionsbyPid, getRegiondetail} from '@/components/interface/common.js';
  import {
	getassist_serverlist,
	getassist_serverdelete,
    getassist_serveradd,
    getassist_serverget,
    getassist_servermodify,
    get_monitor_server_status,
    get_terminal_server_status,
    get_monitor_server_and_terminal_server_config,
    get_set_terminal_sync_auto,
    get_sync_terminal_dev_data

  } from '@/components/interface/resource.js';

  import { Loading } from 'element-ui';

  var page = 0;
  var totalNum = false,
    count = 0;
  var indexCount = 0;
  var CancelToken = axios.CancelToken;
  var custom = CancelToken.source();
  var upfile = false,
    fileChange = false;
  var treedata = [];

  //  var Valindex;
  var TreeDataId = ""
  export default {
    data() {
      return {
        fullscreenLoading: false,
        enabled: "1",

        addressHtml: "",
        Fid: "",
        treeid: '',
        percentage: 0,
        addinputdata: "",
        ops: {
          vuescroll: {
            mode: 'native'
          },
          scrollPanel: {}
        },
        server_id:0,
        zInput: "",
        data: [],
        enabled:"0",
        total: 1,
        checked: false,
        querybut: false,
        multipleSelection: [],
        dialogserveradd: false,
        dialogserverEdit: false,
        dialogserverbox: false,
        TerminaInformation: false,
        showtreebox: false,
        filedata: '',
        terminal_server_status:false,//获取会管（终端通讯录）服务器的状态信息
        terminal_status:"服务器连接正常",//获取会管（终端通讯录）服务器
        monitor_server_status:false,//获取监控平台（唐古拉）服务器的状态信息
        monitor_server_all:false,//获取监控平台（唐古拉）服务器的状态信息
        terminal_server_all:false,//获取监控平台（唐古拉）服务器的状态信息
        monitor_status:"服务器连接失败",//获取监控平台（唐古拉）服务器


        serveradd: {
          "api_url": "",
          "client_id": "",
          "client_secret": "",
          "name": "",
          "parameters": "{}"
        },
        serveredit: {
          "api_url": "",
          "client_id": "",
          "client_secret": "",
          "name": "",
          "parameters": "{}"
        },
        Serverdata: {
          monitor_server:"",
          terminal_server:'',

        },

        delete: {
          idList: [],
          clientKey: localStorage.clientKey,
          token: localStorage.token
        },


        tableData3: [],
        pagenumber: page,
        pagesize: scopes,
        terminalList: [],
        terminalID: '',
        FileType: '',
        filezip: '',
        regions: {}
      }

    },


    mounted: function () {
      var hei = document.documentElement.clientHeight;
      $('.mRightTwo').css('height', hei - 178);
      $(window).resize(function () {
        var wid = document.documentElement.clientWidth,
          hei = document.documentElement.clientHeight;
        $('.mRightTwo').css('height', hei - 178);
      })
      this.getVersionList("", "");

      $('.UploadPath').css('display', 'none');
    },
    methods: {

      openFullScreen() {

 this.$confirm('同步时间较长大约需要一小时，是否继续?', '消息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
        this.fullscreenLoading = true;

        var _this =this ;
        var id={
          "assist_server_id":this.server_id
        }

        get_sync_terminal_dev_data(id).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {


            console.log(res);
            _this.fullscreenLoading = false;
            _this.$message({
              message: "同步成功",
              type: "success"
            });

          }
          if (res.data.result == "error") {
              //  _this.fullscreenLoading = false;
            _this.fullscreenLoading = false;
            _this.$message(
             "同步失败",
            );
            console.log(res);
          }


        }).catch(function (error) {
             this.fullscreenLoading = false;
          console.log(error);
        });

  

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });











      },
      //点击监控和终端
      getserver(row){
        console.log(row);
        this.Serverdata={};
        this.terminal_server_status=false
        this.monitor_server_status=false
        this.server_id=row.id
        var id={
          "assist_server_id": row.id
        }
        var _this =this ;
        _this.monitorstatus(id)//      获取监控平台（唐古拉）服务器的状态信息
        _this.terminalstatus(id)//      获取会管（终端通讯录）服务器的状态信息

        get_monitor_server_and_terminal_server_config(id).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {
            var list=res.data.data
                  console.log("点击监控和终端"); 
            console.log(list);





            if(list.terminal_sync_config.sync_auto){
              _this.enabled="1"

            }else {
              _this.enabled="0"
            }
            if(list.monitor_server.port_ssl===0){

              _this.Serverdata.monitor_server="http://"+list.monitor_server.ip +":"+list.monitor_server.port


            }else {
              _this.Serverdata.monitor_server="http://"+list.monitor_server.ip +":"+list.monitor_server.port_ssl


            }

            if(list.terminal_server.is_ssl===false){
              _this.Serverdata.terminal_server="http://"+list.terminal_server.ip +":"+list.terminal_server.port
            }else {
              _this.Serverdata.terminal_server="https://"+list.terminal_server.ip +":"+list.terminal_server.port
            }

            _this.dialogserverbox=true
               console.log("显示了");

          }
          if (res.data.result == "error") {
            _this.dialogserverbox=true
              _this.terminal_server_status=false
               _this.Serverdata.monitor_server="该辅助服务器地址无监控资源";
               _this.Serverdata.terminal_server="该辅助服务器地址无终端资源";
             
            console.log(res);
          }


        }).catch(function (error) {
          
          console.log(error);
        });


      },


//      获取监控平台（唐古拉）服务器的状态信息
      monitorstatus(ID){
        var _this =this ;
        get_monitor_server_status(ID).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {

            var response = res.data.data
            _this.terminal_server_status=response.available

            if( _this.terminal_server_status){
              _this.terminal_status="服务器连接正常"
            }else {
              _this.terminal_status="服务器连接失败"
            }


            console.log(response);


          }
          if (res.data.result == "error") {
              _this.terminal_server_status=false;
               _this.terminal_server_all=true
                 _this.terminal_status="服务器连接失败"

            console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });
      },





//      获取会管（终端通讯录）服务器的状态信息

      terminalstatus(ID){
        var _this =this ;

        get_terminal_server_status(ID).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {

            var response = res.data.data.available
            _this.monitor_server_status=response
            console.log(  _this.monitor_server_status)

            if(response){
              _this.monitor_status="服务器连接正常"
            }else {
              _this.monitor_status="服务器连接失败"
            }
            console.log(response);


          }
          if (res.data.result == "error") {
             _this.monitor_server_status=false
             _this.monitor_server_all=true;
               _this.monitor_status="服务器连接失败"

            console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });
      },

      onback() {
        this.TerminaInformation = false;
        // this.getselect();
      },
      btnRightclick() {
        this.TerminaInformation = true;
        // this.getselect()
      },

      closedButton() {
        this.showtreebox = false
        var par = {
          "id": this.$store.state.treeDatas.id,
          "timestamp": 0
        }
        var _this = this
        //获取行政区域详情
        getRegiondetail(par).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {

            var response = res.data.data.region_details[0];

            _this.regions = response
            console.log(_this.regions);


          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
            console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });


      },
        //新增时流媒体服务器清空
      serverEliminate(){

      },

      //打开新增lkj
      addUp() {
        console.log(this.serveradd)
        this.serveradd
        this.percentage = 0
        count = 0


        $('#file').val('')
        $('#files').val('')
        upfile = false;
        custom = CancelToken.source();
        // this.getselect();
                this.serveradd= {
          "api_url": "",
          "client_id": "",
          "client_secret": "",
          "name": "",
          "parameters": "{}"
        };


        this.dialogserveradd = true;
        $('#file').val('')
        this.FileType = ''

      },
      //取消新增lkj
      addCancel() {
        this.$message({
          message: '已取消新增',
          type: 'info'
        });
          this.serveradd= {
          "api_url": "",
          "client_id": "",
          "client_secret": "",
          "name": "",
          "parameters": "{}"
        },
            this.dialogserveradd = false;
        custom.cancel()


        this.$store.commit('changtree', [])

      },
      getval(val) {
        console.log(val);
        this.FileType = val;
        if (val == '1') {
          $('.UploadPath').css('display', 'none');
          $('.upload').css('display', 'block');
          $('.filePath').css('display', 'block');
        } else {
          $('.UploadPath').css('display', 'block');
          $('.upload').css('display', 'none');
          $('.filePath').css('display', 'none');
        }
      },
      geterminalType(val) {
        this.add.TerminalType = val.value;
        this.add.TerminalTypeName = val.value;
        console.log(this.add.TerminalType)
      },
      //新增开始
      addSubmit() {
  
        var flag = true;

          if(this.serveradd.name == ''&&this.serveradd.api_url == ''&&this.serveradd.client_id == ''&&this.serveradd.client_secret == ''){
             this.$message({
            message: '数据不允许为空',
            type: 'warning'
          });
          flag = false;
          return false;

          }
      else if (this.serveradd.name == '') {
          this.$message({
            message: '名称不允许为空',
            type: 'warning'
          });
          flag = false;
          return false;
        }else
        if (this.serveradd.api_url == '') {
          this.$message({
            message: 'URL不允许为空',
            type: 'warning'
          });
          flag = false;
            return false;
        }else if (this.serveradd.client_id == '') {
          this.$message({
            message: 'appKey不允许为空',
            type: 'warning'
          });
          flag = false;
            return false;
        }else
        if (this.serveradd.client_secret == '') {
          this.$message({
            message: 'appSecret不允许为空',
            type: 'warning'
          });
          flag = false;
            return false;
        }


        var _this = this
        //新增辅助服务器
        if(flag){
          getassist_serveradd(this.serveradd).then(function (res) {

            if (res.status === 200 && res.data.result == "ok") {

              var response = res
              _this.$message({
                message: "新增成功",
                type: "success"
              });
              _this.dialogserveradd = false;
              _this.getVersionList("", '');


            }
            if (res.data.result == "error") {

              console.log(res);
            }


          }).catch(function (error) {
            console.log(error);
          });
        }


      },

      //获取列表数据
      getVersionList(isall, all) {
      
        let _this = this;
        let URL = window.ServerUrl;
        var pageSize = this.pagesize,
          pagenumber = this.pagenumber - 1;
        var terminalType = '';
        var par = {
          "page_number": pagenumber,
          "page_size": pageSize,
          "server_name": isall
        }

        getassist_serverlist(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {
            if (isall === '') {
              if (all == "all") {
                  _this.value = ""
                      _this.querybut=false; 
                _this.$message({
                  message: "全部数据",
                  type: "success"
                });

              }
            } else {
                  _this.querybut=true; 
              _this.$message({
                message: "查询完成",
                type: "success"
              });

            }


            let response = res.data.data.list;

            _this.tableData3 = response

            console.log(_this.tableData3)
            _this.total=res.data.data.page_total_items
          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
            console.log(res);
          }

        }).catch(function (error) {
          console.log(error);
        });
      },
      //查询列表数据
      queryVersionList(isall) {
        if (this.zInput === "") {
          this.$message({
            message: '请选择查询项',
            type: 'warning'
          });
        } else {
          this.getVersionList(this.zInput)
        }
      },

      //上传文件框
      getFile(e) {
        console.log(e)
        this.file = e.target.files[0];
        var file = document.getElementById("files").files[0];
        this.filedata = file;
        console.log(this.filedata)
        document.getElementById("file").value = file.name
        this.add.fileName = file.name

        this.percentage = 0
        count = 0
        $('.el-progress__text i').css('color', '#fff')
      },


      // 文件上传结束
      changeFun(val) { //复选框
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
      handleSizeChange: function (size) {
        this.pagesize = size;

      },
      handleCurrentChange: function (pagenumber) {
        this.pagenumber = pagenumber;
        page = this.pagenumber;
        //this.getMenuInfoList();  //获取列表的函数
        // console.log("search:"+this.value);
        this.pageChange();
      },
        pageChange() {
      
        let _this = this;
        let URL = window.ServerUrl;
        var pageSize = this.pagesize,
          pagenumber = this.pagenumber - 1;
        var terminalType = '';
        var par = {
          "page_number": pagenumber,
          "page_size": pageSize,
          "server_name": ""
        }
        if(this.querybut){
          par.server_name=this.zInput
        }

        getassist_serverlist(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {
           

            let response = res.data.data.list;

            _this.tableData3 = response

            console.log(_this.tableData3)
            _this.total=res.data.data.page_total_items
          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
            console.log(res);
          }

        }).catch(function (error) {
          console.log(error);
        });
      },
      //删除
      deletelist(index) {
        console.log(index)


        this.$confirm('是否执行删除操作?', '消息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var str = [];
          var _this = this;


          var delDate = {
            "id": index.id
          }
          console.log(delDate);
          getassist_serverdelete(delDate).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              _this.$message({
                message: '删除成功',
                type: 'success'
              });
              _this.getVersionList("", "");
            } else {
              _this.$message({
                message: '删除失败',
                type: 'success'
              });
              console.log(error);
            }
          }).catch(function (error) {
            console.log(error);
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },

      //同步
//
      //点击编辑按钮

      editpust(row) {
        console.log(row)
        var id={
          "assist_server_id":row.id
        }
         var _this=this;
        //获取指定ID的辅助服务器
        getassist_serverget(id).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {
            console.log(res);
            _this.serveredit=res.data.data

          }
          if (res.data.result == "error") {

            console.log(res);
          }

        }).catch(function (error) {
          console.log(error);
        });



        this.dialogserverEdit = true;


      },
      //编辑提交
      editSubmit() {
        var flag = true;

        if (this.serveredit.name == '') {
          this.$message({
            message: '名称不允许为空',
            type: 'warning'
          });
          flag = false;
        }
        if (this.serveredit.api_url == '') {
          this.$message({
            message: 'URL不允许为空',
            type: 'warning'
          });
          flag = false;
        }

        if (this.serveredit.client_id == '') {
          this.$message({
            message: 'appKey不允许为空',
            type: 'warning'
          });
          flag = false;
        }
        if (this.serveredit.client_secret == '') {
          this.$message({
            message: 'appSecret不允许为空',
            type: 'warning'
          });
          flag = false;

        }

        console.log(this.serveredit);
        var _this = this
       if(flag){

          var par ={
            "api_url":this.serveredit.api_url,
            "client_id": this.serveredit.client_id,
            "client_secret":this.serveredit.client_secret,
            "id": this.serveredit.id,
            "name": this.serveredit.name,
            "parameters": "{}"
          }
         //编辑辅助服务器
         getassist_servermodify(par).then(function (res) {

           if (res.status === 200 && res.data.result == "ok") {

             var response = res
             _this.$message({
               message: "编辑成功",
               type: "success"
             });
             _this.dialogserverEdit = false;
             _this.getVersionList("", '');


           }
           if (res.data.result == "error") {

             console.log(res);
           }


         }).catch(function (error) {
           console.log(error);
         });


       }


      },
      editCancel(e) {
        if(e==="1"){
          this.dialogserverEdit=false
        }else{
 this.dialogserverbox=false
        }
       

      },
      //终端通讯录同步方式切换

      enabledlick(a) {
        var req={
          "assist_server_id": this.server_id,
          "sync_auto": false
        }
        if(a==="1"){
          req.sync_auto=true
          console.log(a)
        }

        var _this =this ;
        get_set_terminal_sync_auto(req).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {

          }
          if (res.data.result == "error") {

            console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });





      },


    },
//
    beforeDestroy() {
      console.log("beforeDestroy")
      this.$store.commit('changtree', [])

    },
    updated() {
      var addmodHei = $('#ServerStatusAddModel .el-dialog').height();
      $('#ServerStatusAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
      $('#ServerStatusAddModel .el-dialog').css('marginBottom', 0);
      var addmodHei1 = $('#ServerStatusEditModel .el-dialog').height();
      $('#ServerStatusEditModel .el-dialog').css('marginTop', -(addmodHei1 / 2));
      $('#ServerStatusEditModel .el-dialog').css('marginBottom', 0);
      var addmodHei2 = $('#ServerStatusbox .el-dialog').height();
      $('#ServerStatusbox .el-dialog').css('marginTop', -(addmodHei2 / 2));
      $('#ServerStatusbox .el-dialog').css('marginBottom', 0);
      // $('.TerminaLeft li')
      $(".TerminaLeft li").click(function () {
        $(".TerminaLeft li").css('background', '')
        $(this).css('background', '#57e29b')
      })
    }
  }
  import Tools from '../media/Tools.js'
</script>
<style scoped>
  .filegroup {
    height: 30px;
    overflow: hidden;
    position: relative;
    padding-top: 8px;
    text-align: left;
  }

  #file {
    float: left;
    width: 260px;
    color: #fff;
    height: 30px;
    border: none;
    line-height: 30px;
    margin-left: 100px;
    background: none;
  }

  .btn3 {
    float: left;
    color: #fff;
    width: 90px;
    height: 30px;
    background: #4a567c;
    border-radius: 3px;
    position: absolute;
    z-index: 19;
    line-height: 30px;
    text-align: center;

  }

  #ServerStatusAddModel #files {
    width: 90px;
    height: 30px;
    position: absolute;
    opacity: 0;
    z-index: 20;
    top: 8px;
  }

  #ServerStatusEditModel #files,#ServerStatusbox #files {
    width: 90px;
    height: 30px;
    position: absolute;
    opacity: 0;
    z-index: 20;
    top: 8px;
  }

  .sccess {
    color: #fff;
    float: left;
    width: 16px;
    height: 16px;
    display: none;
    overflow: hidden;
    line-height: 16px;
    background: #61cd97;
    border-radius: 50%;
    margin-top: 7px;
    text-align: center;
  }

  .scrollbox {
    width: 1564px;
  }

  .upload {
    clear: both;
    width: 100%;
    overflow: hidden;
  }

  .uploadBg {
    width: 96%;
    height: 44px;
    margin: 2px 0;
    text-align: left;
    line-height: 44px;
    padding-left: 10px;
    background: #2a3558;
    border: 1px #3b4872 solid;
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

    #ServerStatus .zTable {
      padding-top: 0;
    }

    #ServerStatus .elTable {
      height: 86%;
    }
  }

  /* 弹出层 */

  .formTable {
    overflow: hidden;
    padding: 2px 4px;
    background: #4a567c;
  }

  .block {
    float: left;
    width: 100%;
    height: 40px;
    overflow: hidden;
    /* border:2px #4a567c solid; */
  }
  #ServerStatusbox .block img{
    width: 20px;
    height: 20px;
    margin: 0 auto;
    position: absolute;
    top:30%;
  }
  #ServerStatusbox .block {

    position: relative;

  }
  #ServerStatusbox .block .tooltipbutton{

    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    color: #333;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;

    padding: 0px 0px;
    width: 50px;

  }
  .block .formbox {
    height: 36px;
    margin: 2px 0;
    line-height: 36px;
    border: 1px #3b4872 solid;

  }

  .block .blockleft {
    margin-left: 30%
  }
/*  使用足够大的纯色阴影来覆盖input输入框黄色背景颜色 */
/*  根据自己的输入框边框设置 =  */
  .passwordinput input {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    border: 1 px solid #666 !important;
    -webkit-box-shadow: 0 0 0 px 1000 px white inset;

  }

  .infoMsg {
    float: left;
    line-height: 36px;
    padding-left: 9px;
  }

  .checkboxBg {
    width: 96%;
    height: 34px;
    margin: 2px 0;
    line-height: 34px;
    padding-left: 10px;
    background: #2a3558;
    border: 1px #3b4872 solid;
  }

  .textarea {
    clear: both;
    height: 120px;
    overflow: hidden;
  }

  .textarealist {
    height: 36px;
  }

  .textarealist1 {
    height: 36px;
    margin-top: 2px;

  }

  .userBtn2 {
    overflow: hidden;
    text-align: right;
  }

  .userBtn2 p {
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    padding: 10px 0 4px;
  }

  .userBtn2 p span {
    color: red;
  }

  /* end */

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
  }

  .zForm span.btnRight {
    float: right;
    display: inline-block;
  }
</style>
<style type="text/css"  lang="scss">
  .el-tooltip__popper.is-dark {
    width: 100px;
    background: #303133;
    color: #fff;
  }

  #ServerStatusbox .butclick {
    padding: 0px 10px;
    background: #1b274c;
    border: 1px #3b4872 solid;
    margin-left: 100px;
  }
  element.style {
    display: block;
  }

  #ServerStatus #showtreebox {
    /*display: none;*/
    top: 116px;
    left: 19%;
    position: absolute;
    width: 290px;
    height: 175px;
    z-index: 99;
    background-color: #354166;
    border: 2px #3b4872 solid;
  }

  #ServerStatus #showtreebox .closedbut {
    position: absolute;
    bottom: 0;
    right: 20px;
    width: 50px;
    height: 30px;
    padding: 0 10px;
    border-radius: 10px;
    background: #1b274c;
    border: 1px solid #3b4872;
    text-align: center;
    z-index: 999;
    cursor: pointer;

  }

input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
      border: 1px solid #ffffff !important;
      background-color: #ffffff;
    }

  #ServerStatusAddModel .submit2 {
    float: left;
    color: #fff;
    width: 80px;
    height: 30px;
    background: #4a567c;
    border-radius: 3px;
    position: absolute;
    z-index: 19;
    line-height: 30px;
    text-align: center;
    margin-top: 0px;
  }

  #ServerStatusEditModel .submit2, #ServerStatusbox .submit2{
    float: left;
    color: #fff;
    width: 80px;
    height: 30px;
    background: #4a567c;
    border-radius: 3px;
    position: absolute;
    z-index: 19;
    line-height: 30px;
    text-align: center;
    margin-top: 0px;
  }

  .upload .uploadBg #uploadForm {
    width: 45%;
    margin-top: 0;
  }

  @import url("../media/lkjmedia.css");
  .TerminaLeft li {
    margin-top: 4px;
    font-size: 14px;
    text-indent: 16px;
  }

  .TerminaLeft li:hover {
    /*background-color: #409EFF;*/
    background: #57e29b;
    color: #fff;
  }

  .TerminaLeft li:focus {
    background-color: #57e29b;
    /* background: #57e29b; */
    color: #fff;
  }

  .TerminaRight .el-input .el-input__inner {
    height: 28px;
    width: 200px;
  }

  .TerminaLeft,
  .TerminaRight {
    background-color: #1b274c;
    width: 200px;
    float: left;
    height: 340px;
    overflow-y: auto;
  }

  .TerminaRight {
    width: 410px;
    border-left: 2px #4a567c solid;
  }

  #TerminaInformationPopup .el-dialog {
    width: 660px;
    height: 500px;
    /*top: 50%;*/
  }

  #ServerStatusAddModel .el-dialog {
    width: 1100px;
    top: 40%;
  }

  #ServerStatusAddModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #ServerStatusAddModel .el-checkbox {
    float: left;
  }

  #ServerStatusEditModel .el-dialog {
    width: 1100px;
    top: 40%;
  }
  #ServerStatusbox .el-dialog {
    width: 1100px;
    top: 40%;
  }
  #ServerStatusEditModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #ServerStatusEditModel .el-checkbox {
    float: left;
  }
  #ServerStatusbox .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #ServerStatusbox .el-checkbox {
    float: left;
  }
  .textarealist .el-form-item__label,
  .textarealist .el-input__inner,
  .textarealist1 .el-form-item__label,
  .textarealist1 .el-input__inner,
  .textarea .el-input__inner,
  .block .el-form-item__label,
  .block .el-input__inner,
  .textarea .el-form-item__label,
  .upload .el-input__inner {
    height: 36px;
    margin: 2px 0;
    line-height: 36px;
    border: 1px #3b4872 solid;
  }

  .upload .el-form-item__label {
    width: 18.2% !important;
    height: 46px;
    margin: 2px 0;
    line-height: 46px;
    /* background: #2a3558; */
    border: 1px #3b4872 solid;
  }

  .upload .el-form-item__content {
    width: 84%;
    margin-left: 18.2% !important
  }

  #ServerStatusAddModel .block .el-form-item__label {
    background: #1b274c;
  }

  #ServerStatusAddModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #ServerStatusAddModel .upload .el-form-item {
    width: 95.5%;
  }

  #ServerStatusAddModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #ServerStatusAddModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #ServerStatusAddModel .el-textarea {
    width: 106.2%;
  }

  /*lkj7-4*/
  #ServerStatusEditModel .block .el-form-item__label {
    background: #1b274c;
  }

  #ServerStatusEditModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #ServerStatusEditModel .upload .el-form-item {
    width: 95.5%;
  }

  #ServerStatusEditModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #ServerStatusEditModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #ServerStatusEditModel .el-textarea {
    width: 106.2%;
  }
  /*lkj7-4*/
  #ServerStatusbox .block .el-form-item__label {
    background: #1b274c;
  }

  #ServerStatusbox .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #ServerStatusbox .upload .el-form-item {
    width: 95.5%;
  }

  #ServerStatusbox .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #ServerStatusbox .userBtn2 .el-form-item {
    width: 100%;
  }

  #ServerStatusbox .el-textarea {
    width: 106.2%;
  }

  .textarea .el-textarea__inner {
    height: 120px;
    margin: 2px 0;
    line-height: 22px;
    background: #2a3558;
    border: 1px #3b4872 solid;
    border-radius: 0;
  }

  .el-date-editor.el-input {
    width: 100%;
  }

  .el-select {
    width: 100%;
  }

  .el-textarea {
    float: left;
    width: 92.2%;
  }

  .el-dialog__header span {
    padding-left: 38px;
    height: 38px;
    display: inline-block;
    background: url(../../assets/modeIco.png) no-repeat;
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

  #ServerStatus .el-progress {
    float: left;
    margin: 8px 0 0 102px;
    width: 257px;
  }

  #ServerStatus .el-progress-bar__outer {
    height: 10px !important;
  }
</style>
