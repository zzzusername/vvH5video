<template>
  <div class="mRight" id="AppModule">
    <div class="mRightTwo">
      <div class="zForm">

        <span class="btnRight"> <button @click="addUp">新增</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
          <!-- <vue-scroll :ops="ops" ref="vs"> -->
          <div class="scrollbox">
            <el-table ref="multipleTable"
                      :data="tableData3" style="width: 100%">
              <el-table-column  width="100" type="index" label="模块顺序"></el-table-column>
              <el-table-column prop="name" label="模块名称"></el-table-column>
              <el-table-column label="头像">
                <template slot-scope="scope">
                  <img :src="scope.row.icon_url" alt="" width="30" height="30"  @click="showimg">
                </template>
              </el-table-column>
              <el-table-column prop="description" label="功能描述"></el-table-column>
              <el-table-column prop="enabled" label="状态">
                <template slot-scope="scope">
                  <a href="javascript:;" @click="isenabled(scope.row)" class="ml5">
                  <span class="AppModul" v-if="scope.row.enabled == true">启用</span>
                  <span   class="AppModul" v-else>禁用</span>
                   </a>
                </template>
              </el-table-column>

              <el-table-column label="操作">

                <template slot-scope="scope">

                  <!--<a href="javascript:;">-->
                    <!--<img @click="moveUp(scope.row)" class="moveIco" src="../../assets/up.png" alt=""></a>-->
                  <!--<a href="javascript:;"><img @click="moveDown(scope.row)" class="moveIco" src="../../assets/down.png" alt=""></a>-->

                  <a href="javascript:;" class="ml5">

                    <img @click="admineditpust(scope.row)" src="../../assets/edit2.png" alt="">
                  </a>
                  <a   v-if ="scope.row.sys_default == false"  href="javascript:;" class="ml5" @click="deletelist(scope.row)">
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


    <div id="AppAddModel">
      <el-dialog :close-on-click-modal="false" title="APP模板管理 - 新增" :visible.sync="dialogTableVisibleadd">
        <el-form :model="AppModuleadd" ref="adminedit" label-width="30%" class="demo-ruleForm">
          <div class="formTable">
            <div class="upload upload2">
              <el-form-item label="模块图标： （168x168像素，png，jpg格：" :rules="[{ required: true, message: ' '}]" prop="name">
                <div class="uploadBg">
                  <div class="filegroup">
                    <form id="uploadForm" enctype="multipart/form-data" style="width:45%; margin-top: 0;">
                      <input type="file" id="files" name="files" @change="getFile" placeholder="file" multiple>
                      <span class="btn3">请选择文件</span>
                      <input type="text" id="file" name="file" readonly multiple>
                      <span class="sccess">√</span>
                    </form>
                    <button type="button" class="submit2" value="上传" @click="getUploadVideo">上传</button>
                    <!-- <el-progress :percentage="percentage" status="success"></el-progress> -->
                  </div>
                </div>
              </el-form-item>
            </div>

            <div class="block">
              <el-form-item label="模块名称：
       （5个字以内）：" prop="VersionNum" :rules="[{ required: true, message: ' '}]">
                <el-input v-model="AppModuleadd.name" maxlength="50"></el-input>
              </el-form-item>

            </div>
            <!--<div class="block">-->
              <!--<el-form-item label="模块图标：-->
       <!--（168x168像素，png，jpg格式）" :rules="[{ required: true, message: ' '}]" prop="VersionNum">-->
                <!--<el-input v-model="AppModuleadd.phonenum" maxlength="50" placeholder="手机号"></el-input>-->
              <!--</el-form-item>-->

            <!--</div>-->
            <div class="block">
              <el-form-item style="word-break:break-all" label="功能描述：         （支持网页链接）"  prop="VersionNum" :rules="[{ required: true, message: ' '}]">
                <el-input v-model="AppModuleadd.description" maxlength="50" placeholder=""></el-input>
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="状态" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-radio-group v-model="AppModuleenabled" @change="genderchange">

                  <el-radio label="启用">启用</el-radio>
                  <el-radio label="禁用">禁用</el-radio>
                </el-radio-group>

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
    <div id="AppEditModel">
      <el-dialog :close-on-click-modal="false" title="APP模板管理 - 编辑" :visible.sync="dialogTableVisibleEdit">
        <el-form :model="AppModuleedit" ref="adminedit" label-width="30%" class="demo-ruleForm">
          <div class="formTable">
            <div class="upload upload2">
              <el-form-item label="模块图标： （168x168像素，png，jpg格：" prop="name">
                <div class="uploadBg">
                  <div class="filegroup">
                    <form id="uploadForm1" enctype="multipart/form-data" style="width:45%; margin-top: 0;">
                      <input type="file" id="files1" name="files" @change="getFile1" placeholder="file" multiple>
                      <span class="btn3">请选择文件</span>
                      <input type="text" id="file1" name="file" readonly multiple>
                      <span class="sccess">√</span>
                    </form>
                    <button type="button" class="submit2" value="上传" @click="getUploadVideo1">上传</button>
                    <!-- <el-progress :percentage="percentage" status="success"></el-progress> -->
                  </div>
                </div>
              </el-form-item>
            </div>

            <div class="block">
              <el-form-item label="模块名称：
       （5个字以内）：" prop="VersionNum" :rules="[{ required: true, message: ' '}]">
                <el-input v-model="AppModuleedit.name" maxlength="50"></el-input>
              </el-form-item>

            </div>
            <!--<div class="block">-->
            <!--<el-form-item label="模块图标：-->
            <!--（168x168像素，png，jpg格式）" :rules="[{ required: true, message: ' '}]" prop="VersionNum">-->
            <!--<el-input v-model="AppModuleadd.phonenum" maxlength="50" placeholder="手机号"></el-input>-->
            <!--</el-form-item>-->

            <!--</div>-->
            <div class="block">
              <el-form-item style="word-break:break-all" label="功能描述：         （支持网页链接）"  prop="VersionNum" :rules="[{ required: true, message: ' '}]">
                <el-input v-model="AppModuleedit.description" maxlength="50" placeholder=""></el-input>
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="状态" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-radio-group v-model="EtidModuleenabled" @change="genderchange1">

                  <el-radio label="启用">启用</el-radio>
                  <el-radio label="禁用">禁用</el-radio>
                </el-radio-group>

              </el-form-item>
            </div>



          </div>
          <div class="userBtn2">
            <el-form-item>
              <el-button type="primary" @click="editSubmit">保存</el-button>
              <el-button @click="editCancel">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>

    <div id="imgModel">
      <el-dialog :close-on-click-modal="false" title="APP模板管理 - 编辑" :visible.sync="dialogTableimg">
       <q>我是图片</q>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import axios from 'axios'
  import {getRegionsbyPid, getRegiondetail} from '@/components/interface/common.js';
  import {
    add_app_upgrade_info,
    delete_app_fun_module_info,
    get_app_fun_module_info,
    list_app_fun_module_infos,
    modify_app_fun_module_info,
    set_app_fun_module_info_enabled,
    upload_fun_module_icon,

  } from '@/components/interface/AppManagement.js';

  import treeview from '../root/tree.vue'

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
        file:[],
        filedata: '',
        file1:[],
        filedata1: '',
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
        percentage:0,
        add: {

          icon_file_temp_path:"",//文件地址

          enabled:true,
          description: "",//更新说明
          fileName: '' ,//文件名字
        },
        edit: {

          icon_file_temp_path:"",//文件地址

          enabled:true,
          description: "",//更新说明
          fileName: '' ,//文件名字
        },
        zInput: "",
        data: [],
        onloadimgwidth:0,
        onloadimgheight:0,
        total: 1,
        checked: false,
        multipleSelection: [],
        dialogTableVisibleadd: false,
        dialogTableimg: false,
        dialogTableVisibleEdit: false,
        TerminaInformation: false,
        showtreebox: false,

        adminedit: {},
        AppModuleenabled:"启用",
        EtidModuleenabled:"禁用",
        AppModuleadd: {

          icon_file_temp_path:"",//文件地址

          enabled:true,
          description: "",//功能描述
          name: '' ,//模块名称

        },
        AppModuleedit: {

          icon_file_temp_path:"",//文件地址

          enabled:true,
          description: "",//功能描述
          name: '' ,//模块名称

        },

        delete: {

        },

     tions2: [],
        props: { //TERR筛选条件
          label: 'name',
          children: 'children'
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
    components: {
      treeview,
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

      //列表向上移动
      moveUp(rows) {
        console.log(rows)
        //上移
        var URL = window.ServerUrl;
//        let _this = this;
//        let param = {
//          userId: rows.userId,
//          orderType: 1,
//          ClientKey: localStorage.clientKey,
//          Token: localStorage.token
//        };
//        axios
//          .put(URL + "/api/Provider/UserManagement/UserOrder", param)
//          .then(function(res) {
//            _this.reLogin(res.data.code); //提示帐号登陆
//            _this.getUseList();
//            if (res.data.code === 0) {
//              _this.$message({
//                message: "下移成功",
//                type: "success"
//              });
//            } else {
//              if(res.data.code==window.code ) return;
//              _this.$message({
//                message: res.data.message,
//                type: "info"
//              });
//            }
//          })
//          .catch(function(error) {
//            console.log(error);
//          });
      },
      onback() {
        this.TerminaInformation = false;
        // this.getselect();
      },
      btnRightclick() {
        this.TerminaInformation = true;
        // this.getselect()
      },
      showimg(){
//        this.dialogTableimg=true
      },
      //状态启用禁用
      isenabled(e){
        console.log(e);
        //设置功能模块是否启用
       var req={
         "enabled": true,
         "id": e.id
       }
        req.enabled=e.enabled?false:true
        var _this=this

        set_app_fun_module_info_enabled(req).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {
            console.log(res);
            _this.getVersionList();
          }
          if (res.data.result == "error") {

            console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });

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

            console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });


      },


      //打开新增lkj
      addUp() {
        console.log(this.AppModuleadd)
        this.  AppModuleadd={

            icon_file_temp_path:"",//文件地址

            enabled:true,
            description: "",//功能描述
            name: '' ,//模块名称

        };
        this.percentage = 0
        count = 0


        $('#file').val('')
        $('#files').val('')
        upfile = false;
        custom = CancelToken.source();
        // this.getselect();

        this.dialogTableVisibleadd = true;
        $('#file').val('')
        this.FileType = ''

      },
      //取消新增lkj
      addCancel() {
        this.$message({
          message: '已取消新增',
          type: 'info'
        });
        this.AppModuleadd = {}
        this.dialogTableVisibleadd = false;
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
        this.AppModuleadd.icon_file_temp_path = this.add.icon_file_temp_path
        if (this.AppModuleadd.icon_file_temp_path == '') {
          this.$message({
            message: '请上传图标',
            type: 'warning'
          });
          flag = false;
        }
        if (this.AppModuleadd.name == '') {
          this.$message({
            message: '模块名称不允许为空',
            type: 'warning'
          });
          flag = false;
        }

        if (this.AppModuleadd.description == '') {
          this.$message({
            message: '功能描述不允许为空',
            type: 'warning'
          });
          flag= false;
        }



        var _this = this
        //新增功能模块信息
        if(flag){
          add_app_upgrade_info(this.AppModuleadd).then(function (res) {

            if (res.status === 200 && res.data.result == "ok") {

              var response = res
              _this.$message({
                message: "新增APP模板成功",
                type: "success"
              });
              _this.dialogTableVisibleadd = false;
              _this.getVersionList();


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
      getVersionList() {
        this.value = ""
        let _this = this;
        let URL = window.ServerUrl;
        var pageSize = this.pagesize-3,
          pagenumber = this.pagenumber - 1;
        var terminalType = '';
        var par = {
          "page_number": pagenumber,
          "page_size": pageSize,
        }

        list_app_fun_module_infos(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {
            console.log(res)
            let response = res.data.data.list;

            response.forEach(function(v,i){
              console.log(v.icon_url.substring(0,4));
              if(v.icon_url.substring(0,4)!="http"){                              v.icon_url=URL+"/"+ v.icon_url
              }

            });
            _this.tableData3 = response
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
         var reader=new FileReader();
        var _this=this
        reader.readAsDataURL(file);
        reader.onload=function (e) {
          var base64=this.result;
          var img = new Image();
          img.src=base64;
          console.log(img)
          img.onload = function() {
            _this.onloadimgwidth=img.width
            _this.onloadimgheight=img.height
            console.log("img upload");
            console.log(img.width + "---------" + img.height);

          };

        }
        this.percentage = 0
        count = 0
        $('.el-progress__text i').css('color', '#fff')
      },
      getUploadVideo() {

        console.log(this.onloadimgwidth);
        console.log(this.onloadimgheight);
        console.log(this.filedata)
        if(this.filedata=="" ){
          this.$message({
            message: '文件不允许为空',
            type: 'warning',

          });
          return false


        }else if( this.onloadimgwidth!= 168 &&  this.onloadimgheight != 168) {
          this.$message({
            showClose: true,
            message: "上传尺寸不对，168*168尺寸的图片",
            type: "error"
          });
          return;
        }else{
          upfile = true;
          const m =	this.$message({
            message: "上传开始",
            type: "info",
            duration:"0"
          });
          var _this=this;
          let URL = window.ServerUrl;
          console.log(this.filedata)


          var sar=this.filedata
          var formData = new FormData();
          formData.append("fun_module_icon_file", sar);
          console.log(formData)
          upload_fun_module_icon(formData).then(function(res) {


            if(res.status===200&&res.data.result=="ok"){



              _this.percentage=100
              _this.add.icon_file_temp_path=res.data.data.fun_module_icon_file_temp_path
              console.log(res )
              console.log(_this.add.icon_file_temp_path )



              _this.$message({
                message: "上传成功",
                type: "success"
              });
              // _this.tableData3=response

              m.close()
            }
            if(res.data.result=="error"){

              console.log(res);
              m.close()
            }

          }).catch(function(error) {
            console.log(error);
            m.close()
          });


        }

      },
      getFile1(e) {
//      this.onloadimgwidth=0
//       this.onloadimgheight=0
        console.log(e)
        this.file1 = e.target.files[0];
        var file = document.getElementById("files1").files[0];
        this.filedata1 = file;
        console.log(this.filedata1)
        document.getElementById("file1").value = file.name
        this.edit.fileName = file.name
        var reader=new FileReader();
        var _this=this
        reader.readAsDataURL(file);
        reader.onload=function (e) {
          var base64=this.result;
          var img = new Image();
          img.src=base64;
          console.log(img)
          img.onload = function() {
            _this.onloadimgwidth=img.width
            _this.onloadimgheight=img.height
            console.log("img upload");
            console.log(img.width + "---------" + img.height);

          };

        }
        this.percentage = 0
        count = 0
        $('.el-progress__text i').css('color', '#fff')
      },
      getUploadVideo1() {

        console.log(this.onloadimgwidth);
        console.log(this.onloadimgheight);
        console.log(this.filedata)
        if(this.filedata1=="" ){
          this.$message({
            message: '文件不允许为空',
            type: 'warning',

          });
          return false


        }else if( this.onloadimgwidth!= 168 &&  this.onloadimgheight != 168) {
          this.$message({
            showClose: true,
            message: "上传尺寸不对，168*168尺寸的图片",
            type: "error"
          });
          return;
        }else{
          upfile = true;
          const m =	this.$message({
            message: "上传开始",
            type: "info",
            duration:"0"
          });
          var _this=this;
          let URL = window.ServerUrl;
          console.log(this.filedata1)


          var sar=this.filedata1
          var formData = new FormData();
          formData.append("fun_module_icon_file", sar);
          console.log(formData)
          upload_fun_module_icon(formData).then(function(res) {


            if(res.status===200&&res.data.result=="ok"){



              _this.percentage=100
              _this.edit.icon_file_temp_path=res.data.data.fun_module_icon_file_temp_path
              console.log(res )
              console.log(_this.edit.icon_file_temp_path )



              _this.$message({
                message: "上传成功",
                type: "success"
              });
              // _this.tableData3=response

              m.close()
            }
            if(res.data.result=="error"){

              console.log(res);
              m.close()
            }

          }).catch(function(error) {
            console.log(error);
            m.close()
          });


        }

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
        this.getVersionList("", "");
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
          delete_app_fun_module_info(delDate).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              _this.$message({
                message: '删除成功',
                type: 'success'
              });
              _this.getVersionList("", "");
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


      //点击编辑按钮

      admineditpust(row) {
        this.file1=[];
        this.filedata="";


        console.log(row)

        var _this = this;

        var edit = {
          "id": row.id
        }
        console.log(edit);
        let URL = window.ServerUrl;

        get_app_fun_module_info(edit).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {

            _this.AppModuleedit=res.data.data
//            _this.edit.icon_file_temp_path=res.data.data.icon_url;

            _this.EtidModuleenabled=res.data.data.enabled?"启用":"禁用";
//            document.getElementById("file1").value= _this.EtidModuleenabled.name
            console.log( _this.AppModuleedit);
//            if( _this.AppModuleedit.icon_url.substring(0,4)!="http"){
//              _this.AppModuleedit.icon_url=URL+"/"+  _this.AppModuleedit.icon_url
//            }


          }
        }).catch(function (error) {
          console.log(error);
        });
        this.dialogTableVisibleEdit = true;


      },
      //编辑提交

      editSubmit() {
        var flag = true;
        if (this.AppModuleedit.name == '') {
          this.$message({
            message: '模块名称不允许为空',
            type: 'warning'
          });
          flag = false;
        }

        if (this.AppModuleedit.description == '') {
          this.$message({
            message: '功能描述不允许为空',
            type: 'warning'
          });
          flag= false;
        }

        console.log(this.adminedit)
        let _this = this;
        let URL = window.ServerUrl;

        console.log(_this.AppModuleedit);
       var par={
         "description":this.AppModuleedit.description,
         "enabled": this.AppModuleedit.enabled,
         "id": this.AppModuleedit.id,
         "name": this.AppModuleedit.name,
         "order": this.AppModuleedit.order
       };
       if(this.edit.icon_file_temp_path!=""){
         par.icon_file_temp_path=this.edit.icon_file_temp_path
       }
//        "icon_file_temp_path":this.edit.icon_file_temp_path,

        if(flag){

          modify_app_fun_module_info(par).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              _this.$message({
                message: "编辑成功",
                type: 'success'
              });
              _this.dialogTableVisibleEdit = false

              _this.getVersionList()
            }
            if (res.data.result == "error") {
              console.log(res);
            }

          }).catch(function (error) {
            console.log(error);
          });
        }
        //修改功能模块信息


      },
      //取消编辑
      editCancel() {
        this.dialogTableVisibleEdit=false;
        this.edit={}
      },
      //设置功能模块是否启用
      genderchange(a) {
        console.log(a)
        if(a=="启用"){
          this.AppModuleadd.enabled=true;

        }else {
          this.AppModuleadd.enabled=false;
        }


      },
      //设置功能模块是否启用
      genderchange1(a) {
        console.log(a)
        if(a=="启用"){
          this.AppModuleedit.enabled=true;

        }else {
          this.AppModuleedit.enabled=false;
        }


      },
      enabledlick(a) {
        console.log(a)

      },


    },
    beforeDestroy() {
      console.log("beforeDestroy")
      this.$store.commit('changtree', [])

    },
    updated() {
      var addmodHei = $('#AppAddModel .el-dialog').height();
      $('#AppAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
      $('#AppAddModel .el-dialog').css('marginBottom', 0);
      var addmodHei1 = $('#AppEditModel .el-dialog').height();
      $('#AppEditModel .el-dialog').css('marginTop', -(addmodHei1 / 2));
      $('#AppEditModel .el-dialog').css('marginBottom', 0);
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
    width: 100%;

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
  #file1 {
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

  #AppAddModel #files,#AppAddModel #files1 {
    width: 90px;
    height: 30px;
    position: absolute;
    opacity: 0;
    z-index: 20;
    top: 8px;
  }

  #AppEditModel #files,#AppEditModel #files1 {
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

  #AppAddModel .uploadBg {
    width: 100%;
    height: 80px;
    /*margin: 0px 0;*/
    text-align: left;
    line-height: 40px;
    padding-left: 10px;
    background: #2a3558;
    border: 1px #3b4872 solid;
  }
  #AppEditModel .uploadBg {
    width: 100%;
    height: 80px;
    /*margin: 0px 0;*/
    text-align: left;
    line-height: 40px;
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

    #AppModule .zTable {
      padding-top: 0;
    }

    #AppModule .elTable {
      height: 86%;
    }
  }

  /* 弹出层 */

  .formTable {
    overflow: hidden;
    padding: 2px 4px;
    background: #4a567c;
  }

  #AppAddModel .block, #AppEditModel .block{
    float: left;
    width: 100%;
    height: 80px;
    overflow: hidden;
    /* border:2px #4a567c solid; */
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
/* 使用足够大的纯色阴影来覆盖input输入框黄色背景颜色  */
/* 根据自己的输入框边框设置 */
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
  .elTable .AppModul{
    height: 91.7%;
    overflow: hidden;
    padding: 0px 10px;
    background: #1b274c;
    border: 1px #3b4872 solid;
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

  /*#AppAddModel .el-form-item__content, #AppEditModel .el-form-item__content{*/

    /*width: 100%;*/
    /*height: 80px;*/
    /*overflow: hidden;*/
    /*!* border:2px #4a567c solid; *!*/
  /*}*/

  element.style {
    display: block;
  }
   #AppAddModel .block .el-input, #AppEditModel .block .el-input{
     height: 80px;
     margin: 0px 0;
     line-height: 80px;
     border: 1px #3b4872 solid;
   }
  #AppModule #showtreebox {
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

  #AppModule #showtreebox .closedbut {
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

  #AppAddModel .submit2 {
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

  #AppEditModel .submit2 {
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
  .upload .uploadBg #uploadForm1 {
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

  #AppAddModel .el-dialog {
    width: 800px;
    top: 45%;
  }

  #AppAddModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #AppAddModel .el-checkbox {
    float: left;
  }

  #AppEditModel .el-dialog {
    width: 800px;
    top: 45%;
  }
  #imgModel .el-dialog {
    width: 168px;
  height: 168px;
    top: 45%;
  }

  #AppEditModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #AppEditModel .el-checkbox {
    float: left;
  }
  #AppAddModel,#AppEditModel{
    .textarealist .el-form-item__label,
    .textarealist .el-input__inner,
    .textarealist1 .el-form-item__label,
    .textarealist1 .el-input__inner,
    .textarea .el-input__inner,
    .block .el-form-item__label,
    .block .el-input__inner,
    .textarea .el-form-item__label,
    .upload .el-input__inner {
      height: 78px;
      margin: 1px 0;
      line-height: 78px;
      border: none;
    }

  }

 #AppAddModel .upload .el-form-item__label {
    width: 30% !important;
    height: 80px;
    margin: 1px 0;
    line-height: 40px;
    /* background: #2a3558; */
    border: 1px #3b4872 solid;
  }

  #AppAddModel .upload .el-form-item__content {
    width: 70%;
    margin-left: 30% !important
  }

  #AppAddModel .block .el-form-item__label {
    background: #1b274c;
    height: 80px ;
    line-height: 40px;
    /*word-break:break-all;*/
    /*text-indent:80px;*/
    text-align: center;
  }




  #AppEditModel .upload .el-form-item__label {
    width: 30% !important;
    height: 80px;
    margin: 1px 0;
    line-height: 40px;
    /* background: #2a3558; */
    border: 1px #3b4872 solid;
  }

  #AppEditModel .upload .el-form-item__content {
    width: 70%;
    margin-left: 30% !important
  }

  #AppEditModel .block .el-form-item__label {
    background: #1b274c;
    height: 80px ;
    line-height: 40px;
    /*word-break:break-all;*/
    /*text-indent:80px;*/
    text-align: center;
  }


  #AppAddModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #AppAddModel .upload .el-form-item {
    width:100%;
  }

  #AppAddModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 100%;
    float: left;
  }

  #AppAddModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #AppAddModel .el-textarea {
    width: 106.2%;
  }

  /*lkj7-4*/
  #AppEditModel .block .el-form-item__label {
    background: #1b274c;
  }

  #AppEditModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #AppEditModel .upload .el-form-item {
    width: 100%;
  }

  #AppEditModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 100%;
    float: left;
  }

  #AppEditModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #AppEditModel .el-textarea {
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

  #AppModule .el-progress {
    float: left;
    margin: 8px 0 0 102px;
    width: 257px;
  }

  #AppModule .el-progress-bar__outer {
    height: 10px !important;
  }
</style>
