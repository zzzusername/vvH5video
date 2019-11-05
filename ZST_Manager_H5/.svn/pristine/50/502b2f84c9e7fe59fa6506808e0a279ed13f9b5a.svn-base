<template>


<div class="mRight" id="Upgradeview">
    <div class="mRightTwo">
      <div class="zForm">
        <span>姓名或手机号</span><input v-model="zInput" class="zInput" type="text" placeholder=""/>
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
              <el-table-column prop="phonenum" label="登录账号"></el-table-column>
              <el-table-column prop="realname" label="管理员姓名">
              </el-table-column>
              <el-table-column prop="gender" label="性别">
                <template slot-scope="scope">
                  <span v-if="scope.row.gender == 'MALE'">男</span>
                  <span v-else-if="scope.row.gender == 'FEMALE'">女</span>
                  <span v-else>未知</span>
                </template>

              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <a href="javascript:;" class="ml5">

                    <img @click="admineditpust(scope.row)" src="../../assets/edit2.png" alt="">
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


    <div id="adminAddModel">
      <el-dialog :close-on-click-modal="false" title="管理员列表 - 新增" :visible.sync="dialogTableVisibleadd" :before-close="handleClose">
        <el-form :model="admineadd" ref="admineadd" label-width="38%" class="demo-ruleForm">
          <div class="formTable">

            <div class="block">
              <el-form-item label="地区：" :rules="[{ required: true, message: ' '}]" prop="region ">
                <div class="checkboxBg" @click="showtreebox = true">
                  <div v-html="this.$store.state.treeDatas.name" class="framework"></div>
                </div>


                <!--<el-input v-model="admineadd.realname" maxlength="50"></el-input>-->
              </el-form-item>
              <div id="showtreebox" v-show="showtreebox">
                <vue-scroll :ops="ops" ref="vs">
                  <treeview></treeview>
                </vue-scroll>
                <div class="closedbut" @click="closedButton">确定</div>
              </div>

            </div>

            <div class="block">
              <el-form-item label="姓名：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="admineadd.realname" maxlength="50"></el-input>
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="用户：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="admineadd.phonenum" maxlength="50" placeholder="手机号"></el-input>
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="性别" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-radio-group v-model="admineadd.gender" @change="genderchange">

                  <el-radio label="MALE">男</el-radio>
                  <el-radio label="FEMALE">女</el-radio>
                </el-radio-group>

              </el-form-item>
            </div>

            <div class="block passwordinput">
              <el-form-item label="密码：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="admineadd.passwordA" autocomplete="off" placeholder="密码"
                          maxlength="50"></el-input>
              </el-form-item>

            </div>
            <div class="block passwordinput" style="margin-bottom: 30px">
              <el-form-item label="确认密码：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
                <el-input v-model="admineadd.passwordB" autocomplete="off" placeholder="密码"
                          maxlength="50"></el-input>
              </el-form-item>

            </div>
            <p>密码长度至少是8位，数字、大写英文字母、小写英文字母、特殊字符至少包含三种，不能含有中文和其他全角字符！</p>


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
    <div id="adminEditModel">
      <el-dialog :close-on-click-modal="false" title="管理员列表 - 编辑" :visible.sync="dialogTableVisibleEdit">
        <el-form :model="adminedit" ref="adminedit" label-width="38%" class="demo-ruleForm">
          <div class="formTable">
            <div class="block">
              <el-form-item label="管理员姓名：" :rules="[{ required: true, message: ' '}]" prop="realname">
                <el-input v-model="adminedit.realname" maxlength="50"></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../assets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
            </div>
            <div class="block">
              <el-form-item label="性别" :rules="[{ required: true, message: ' '}]" prop="gender">
                <el-radio-group v-model="adminedit.gender" @change="enabledlick">

                  <el-radio label="MALE">男</el-radio>
                  <el-radio label="FEMALE">女</el-radio>
                </el-radio-group>


              </el-form-item>
            </div>
            <div class="block">
              <el-form-item label="手机号：" :rules="[{ required: true, message: ' '}]" prop="phonenum">
                <el-input v-model="adminedit.phonenum" maxlength="50"></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../assets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
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
  </div>

</template>
<script>
  import $ from 'jquery'
  import axios from 'axios'
  import {getRegionsbyPid, getRegiondetail} from '@/components/interface/common.js';
  import {
    getadd_personal_info,
    adminagetlist_personal_infos,
    adminagetlistdelete,
    adminagetlistmodify,
    adminaget_personal_info

  } from '@/components/interface/administrators.js';

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

        zInput: "",
        data: [],

        total: 1,
        checked: false,
        querybut: false,
        multipleSelection: [],
        dialogTableVisibleadd: false,
        dialogTableVisibleEdit: false,
        TerminaInformation: false,
        showtreebox: false,
        filedata: '',
        adminedit: {},
        admineadd: {


          "gender": "MALE",//性别
          "passwordA": "",//密码
          "passwordB": "",//密码
          "phonenum": "",//电话
          "realname": "",//名字
          "region_code": "",
          "region_full_code": "",
          "region_full_name": "",
          "region_name": "",
          "region": ""

        },

        delete: {
          idList: [],
          clientKey: localStorage.clientKey,
          token: localStorage.token
        },
        options: [{
          key: "1",
          value: "文件上传"
        },
          {
            key: "2",
            value: "手动输入"
          }
        ],
        options_system: [{
          key: "1",
          value: "ANDROID"
        },
          {
            key: "2",
            value: "IOS"
          }
        ],
        options_enabled: [{
          key: "1",
          value: "是",
          name: true
        },
          {
            key: "2",
            value: "否",
            name: false
          }
        ],
        options_version: [{
          key: "1",
          value: "公共",
          name: "PUBLIC"
        },
          {
            key: "2",
            value: "个人",
            name: "INDIVIDUAL"
          }
        ],
        options2: [],
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
            // console.log(_this.regions);


          }
          if (res.data.result == "error") {
            // _this.$message({
            //   message: res.data.error_description,
            //   type: 'warning'
            // });
            // console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });


      },


      //打开新增lkj
      addUp() {
        // console.log(this.admineadd)

        this.percentage = 0
        count = 0
        this.admineadd = {

          "gender": "MALE",//性别
          "passwordA": "",//密码
          "passwordB": "",//密码
          "phonenum": "",//电话
          "realname": "",//名字
          "region_code": "",
          "region_full_code": "",
          "region_full_name": "",
          "region_name": "",
          "region": ""
        }

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
          this.admineadd = {}
            this.dialogTableVisibleadd = false;
        custom.cancel()


        this.$store.commit('changtree', [])

      },
      handleClose(){
           this.admineadd = {}
            this.dialogTableVisibleadd = false;
        custom.cancel()


        this.$store.commit('changtree', [])

      },
      getval(val) {
        // console.log(val);
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
        // console.log(this.add.TerminalType)
      },
      //新增开始
      addSubmit() {
        console.log(this.admineadd.phonenum.length)

        var flag = true;
        this.admineadd.region = this.$store.state.treeDatas.name
        if (this.admineadd.region == '') {
          this.$message({
            message: '地区不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.admineadd.realname == '') {
          this.$message({
            message: '姓名不允许为空',
            type: 'warning'
          });
          flag = false;
        }else

        if (this.admineadd.phonenum == ''||this.admineadd.phonenum.length!=11) {
          this.$message({
            message: '请输入11位手机号',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.admineadd.passwordA == '') {
          this.$message({
            message: '密码不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.admineadd.passwordB == '') {
          this.$message({
            message: '请确认密码',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.admineadd.passwordB != this.admineadd.passwordA) {
          this.$message({
            message: '两次输入密码不相同',
            type: 'warning'
          });
          flag = false;
        }
        else if(this.admineadd.phonenum!= ''&&this.admineadd.phonenum.length==11){
//          console.log("6666")
          var reg = new RegExp("^((1[0-9]{1})+\\d{9})$");
          var r = reg.test(this.admineadd.phonenum);
//          console.log(r)
          if (r != true) {
            this.$message({
              message: "手机不符合要求",
              type: "warning"
            });
            flag = false;
          }

        }
        this.admineadd.region_code = this.$store.state.treeDatas.id
        this.admineadd.region_name = this.$store.state.treeDatas.name
        this.admineadd.region_full_code = this.regions.ids;
        this.admineadd.region_full_name = this.regions.names
        var regpar = {
          "gender": this.admineadd.gender,
          "password": this.admineadd.passwordA,
          "phonenum": this.admineadd.phonenum,
          "realname": this.admineadd.realname,
          "region_code": this.admineadd.region_code,
          "region_full_code": this.admineadd.region_full_code,
          "region_full_name": this.admineadd.region_full_name,
          "region_name": this.admineadd.region_name
        }


        var _this = this
        //新增用户个人信息
      if(flag){
        getadd_personal_info(regpar).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {

            var response = res
            _this.$message({
              message: "新增成功",
              type: "success"
            });
            _this.dialogTableVisibleadd = false;
            _this.getVersionList("", '');


          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
            // console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });

        }
      },

      //获取列表数据
      getVersionList(isall, all) {
       
        this.value = ""
        let _this = this;
        let URL = window.ServerUrl;
        var pageSize = this.pagesize,
          pagenumber = this.pagenumber - 1;
        var terminalType = '';
        var par = {
          "page_number": pagenumber,
          "page_size": pageSize,
          "search_key": isall
        }
      
        adminagetlist_personal_infos(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {
            if (isall === '') {
              if (all == "all") {
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

            _this.total=res.data.data.page_total_items


            // console.log(res)
          }
          if (res.data.result == "error") {

            // console.log(res);
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
        // console.log(e)
        this.file = e.target.files[0];
        var file = document.getElementById("files").files[0];
        this.filedata = file;
        // console.log(this.filedata)
        document.getElementById("file").value = file.name
        this.add.fileName = file.name

        this.percentage = 0
        count = 0
        $('.el-progress__text i').css('color', '#fff')
      },


      // 文件上传结束
      changeFun(val) { //复选框
        this.multipleSelection = val;
        // console.log(this.multipleSelection)
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function (pagenumber) {
        this.pagenumber = pagenumber;
        page = this.pagenumber;
        //this.getMenuInfoList();  //获取列表的函数
        console.log("search:"+pagenumber);
        this.pageChange();
      },
      pageChange(){
       
        let _this = this;
        let URL = window.ServerUrl;
        var pageSize = this.pagesize,
          pagenumber = this.pagenumber - 1;
          if(this.querybut!=true){
            
            this.zInput=""
          }
      
        var par = {
          "page_number": pagenumber,
          "page_size": pageSize,
          "search_key": this.zInput
        }

        adminagetlist_personal_infos(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {
          

            let response = res.data.data.list;

            _this.tableData3 = response

            _this.total=res.data.data.page_total_items


            // console.log(res)
          }
          if (res.data.result == "error") {

            // console.log(res);
          }

        }).catch(function (error) {
          console.log(error);
        });
      },
      //删除
      deletelist(index) {
        // console.log(index)

        this.$confirm('是否执行删除操作?', '消息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var str = [];
          var _this = this;

          var delDate = {
            "super_admin_id": index.id
          }
          // console.log(delDate);
          adminagetlistdelete(delDate).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              _this.$message({
                message: '删除成功',
                type: 'success'
              });
              _this.getVersionList("", "");
            } else {

              _this.$message({
                message: res.data.error_description,//后台没有message
                type: 'info'
              });
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
         let _this = this;
          //修改用户个人信息
       var  par=  {
              "account":row.phonenum
            }


        adminaget_personal_info(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {


                 _this.adminedit = res.data.data


          }
          if (res.data.result == "error") {

           _this.$message({
                message: "系统错误：错误指令"+res.data.error_description,//后台没有message
                type: 'info'
              });
          }

        }).catch(function (error) {

        });


        this.dialogTableVisibleEdit = true;


      },
      //编辑提交
      editSubmit() {
        // console.log(this.adminedit)
        let _this = this;
        var flag = true;
        let URL = window.ServerUrl;


        var par = {
          "realname": this.adminedit.realname,
          "super_admin_id": this.adminedit.id,
          "phonenum": this.adminedit.phonenum,
          "gender": this.adminedit.gender

        }
        if (this.adminedit.realname == '') {
          this.$message({
            message: '地区不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.adminedit.phonenum == '') {
          this.$message({
            message: '姓名不允许为空',
            type: 'warning'
          });
          flag = false;
        }else

        if (this.adminedit.phonenum == ''||this.admineadd.phonenum.length!=11) {
          this.$message({
            message: '请输入11位手机号',
            type: 'warning'
          });
          flag = false;
        }
        else if(this.adminedit.phonenum!= ''&&this.adminedit.phonenum.length==11){
//          console.log("6666")
          var reg = new RegExp("^((1[0-9]{1})+\\d{9})$");
          var r = reg.test(this.admineadd.phonenum);
//          console.log(r)
          if (r != true) {
            this.$message({
              message: "手机不符合要求",
              type: "warning"
            });
            flag = false;
          }

        }

        //修改用户个人信息
        if(flag ){
          adminagetlistmodify(par).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              _this.$message({
                message: "编辑成功",
                type: 'success'
              });
              _this.dialogTableVisibleEdit = false

              _this.getVersionList("", "")
            }
            if (res.data.result == "error") {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });
              // console.log(res);
            }

          }).catch(function (error) {
            console.log(error);
          });


        }

      },
      editCancel() {
  this.dialogTableVisibleEdit=false;
  this.adminedit={}
      },
      //性别
      genderchange(a) {
        // console.log(a)


      },
      enabledlick(a) {
        // console.log(a)

      },


    },
    beforeDestroy() {
      // console.log("beforeDestroy")
      this.$store.commit('changtree', [])

    },
    updated() {
      var addmodHei = $('#adminAddModel .el-dialog').height();
      $('#adminAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
      $('#adminAddModel .el-dialog').css('marginBottom', 0);
      var addmodHei1 = $('#adminEditModel .el-dialog').height();
      $('#adminEditModel .el-dialog').css('marginTop', -(addmodHei1 / 2));
      $('#adminEditModel .el-dialog').css('marginBottom', 0);
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

  #adminAddModel #files {
    width: 90px;
    height: 30px;
    position: absolute;
    opacity: 0;
    z-index: 20;
    top: 8px;
  }

  #adminEditModel #files {
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

    #Upgradeview .zTable {
      padding-top: 0;
    }

    #Upgradeview .elTable {
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
    width: 50%;
    height: 50px;
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
  /* 根据自己的输入框边框设置 =  */
  /* 使用足够大的纯色阴影来覆盖input输入框黄色背景颜色  */
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
<style type="text/css">


  element.style {
    display: block;
  }

  #Upgradeview #showtreebox {
    /*display: none;*/
    top: 116px;
    left: 19%;
    position: absolute;
    width: 300px;
    height: 250px;
    z-index: 99;
    background-color: #354166;
    border: 2px #3b4872 solid;
  }

  #Upgradeview #showtreebox .closedbut {
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

  #adminAddModel .submit2 {
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

  #adminEditModel .submit2 {
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

  #adminAddModel .el-dialog {
    width: 1100px;

    top: 50%;
  }

  #adminAddModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #adminAddModel .el-checkbox {
    float: left;
  }

  #adminEditModel .el-dialog {
    width: 1100px;
    top: 50%;
  }

  #adminEditModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #adminEditModel .el-checkbox {
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

  #adminAddModel .block .el-form-item__label {
    background: #1b274c;
  }

  #adminAddModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #adminAddModel .upload .el-form-item {
    width: 95.5%;
  }

  #adminAddModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #adminAddModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #adminAddModel .el-textarea {
    width: 106.2%;
  }

  /*lkj7-4*/
  #adminEditModel .block .el-form-item__label {
    background: #1b274c;
  }

  #adminEditModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #adminEditModel .upload .el-form-item {
    width: 95.5%;
  }

  #adminEditModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #adminEditModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #adminEditModel .el-textarea {
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

  #Upgradeview .el-progress {
    float: left;
    margin: 8px 0 0 102px;
    width: 257px;
  }

  #Upgradeview .el-progress-bar__outer {
    height: 10px !important;
  }
</style>
