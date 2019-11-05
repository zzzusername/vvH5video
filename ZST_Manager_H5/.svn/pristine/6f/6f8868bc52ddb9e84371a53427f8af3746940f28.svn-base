<template>
  <div class="mRight" id="menuBox">
    <div class="scrolltree">
      <vue-scroll :ops="ops1" ref="vs">
        <el-tree
          :data="data"
          ref="treeList"
          :props="props"
          :default-checked-keys="deArrList"
          show-checkbox
          :load="loadNode"
          node-key="id"
          lazy
          @check-change="handleCheckChangemedia"
          @node-expand="nodeclick"
          @node-click="handleNodeClick"
        ></el-tree>
      </vue-scroll>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";

var treedata = [];
var TreeDataId = "";
export default {
  data() {
    return {
      value_Select: [],
      CountryList: ["全国"],
      deArrList: [],

      icounty: false,
      data: [],
      datareg: [],
      medialist: [],
      Fid: "000000000000",
      treeid: "",
      serverid: "",
      resolve: undefined,
      node: undefined,
      props: {
        //TERR筛选条件
        label: "name",
        children: "children"
      },
      dataId: "", //参数ID
      dataparentOrgName: "", //父级名字
      dataparentID: "", //父级ID
      ops1: {
        vuescroll: {
          mode: "native"
        },
        scrollPanel: {}
      },

      regions: [],
      checkAll: false,
      checkedCities: [], //流媒体服务器已选中选项
      addressHtml: "" //下拉组织结构
    };
  },
  mounted: function() {
    this.gettree();

    this.$refs.treeList.setCheckedKeys([120101002002]);
  },
  methods: {
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
      console.log(this.checkedCities);
    },
    gogo() {
      console.log(this.$refs.treeList.getCheckedNodes());
    },
    //点击省TAB
    handleClickCity(tab, event) {
      console.log(tab, event);
      if (tab.name == "province") {
        this.postprovince();
      }
    },

    handleCheckChange(data, checked, indeterminate) {
      console.log(data, data.id, checked);
    },

    handleCheckChangemedia(data, checked, indeterminate) {
      console.log(data, data.id, checked);
    },
    //动态加载树结构
    handleNodeClick(val, row) {
      console.log(val, row);
      this.node = row;
      this.setValue(val, row.parent.data);
    },
    loadNode(node, resolve) {
      console.log(resolve);
      this.resolve = resolve;
      if (this.data == []) {
        return false;
      }
      return true;
    },
    setValue(val, parent) {
      // console.log("我这里" + val.id)

      TreeDataId = val.id;
      this.InputName = val.name;
      this.civilCode = val.civilCode;
      if (
        parent != undefined &&
        parent.name != undefined &&
        parent.name != ""
      ) {
        this.dataparentOrgName = parent.name;
        this.removeParent = parent;
      } else {
        this.dataparentOrgName = "";
      }
      this.currentParent = val;
      this.dataparentID = val.id; //添加时候的父ID=当前ID
    },

    nodeclick(val) {
      console.log("我需要的位置"), this.$store.commit("changtree", val);
      // if(this.addressHtml==""){
      this.addressHtml = val.name;
      // 				}else{
      // this.addressHtml = this.addressHtml+'/'+val.name;
      // 				}

      console.log(this.addressHtml);
      if (val.org_code) {
        this.medialist.push({ name: val.name });
      }

      console.log(this.medialist);

      // console.log("我详细ID" + val.id)
      if (val.id == undefined) {
        return setTimeout(() => {
          return this.resolve && this.resolve([]);
        }, 1);
      }
      TreeDataId = val.id;

      this.treeid = val.id;

      //his.data = [];
      this.setValue(val);
      // console.log("我是需要删除ID" + val.id);

      this.deleteID = val.id;
      treedata = [];
      let _this = this;
      let URL = ServerUrl;

      if (val.pid >= 0) {
        this.getChildren(val, this.resolve);
      }
    },

    nodeclick_paths(val) {
      console.log(val);
      this.addressHtml = val.name;
      // console.log("我详细ID" + val.id)
      // if(val.id==undefined){

      // 			return setTimeout(() => {
      // 				return this.resolve && this.resolve([]);
      // 			}, 1);

      // }
      TreeDataId = val.id;

      this.treeid = val.id;

      this.setValue(val);

      this.deleteID = val.id;
      treedata = [];
      let _this = this;
      let URL = ServerUrl;

      this.getChildren_paths(val, this.resolve);
    },
    getChildren_paths(parent, resolve, refresh = false) {
      // 根据获取孩子节点

      var _this = this;
      var id = parent.id;
      var area_code = parent.area_code;
      var that = this;
      let URL = ServerUrl;
      let data;
      var par = {
        area_code: area_code,
        assist_server_id: this.serverid,
        is_root: false,
        is_security: true,
        platform_id: 1
      };
      this.$http
        .post(
          URL +
            "/super/admin/api/v1/enterprise_management/list_sub_monitor_resource_organizations",
          par
        )
        .then(function(res) {
          let response = res.data.data;
          console.log(response);
          var list = response;
          list.forEach(element => {
            element["children"] = [];
          });
          if (list.length == 0) {
            // console.log("提示");
            // _this.$message({
            //   message: '没有子级结构了',
            //   type: 'warning'
            // });
            parent.children = [];
            return setTimeout(() => {
              return _this.resolve && _this.resolve(parent.children);
            }, 1);
          } else {
            console.log(parent);
            console.log(parent);

            if (parent.id == list[0].list) {
              parent.children = list;
              return setTimeout(() => {
                return _this.resolve && _this.resolve(parent.children);
              }, 1);
            }
          }
          // that.updateD();
          console.log(list);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    getChildren(parent, resolve, refresh = false) {
      // 根据获取孩子节点
      var _this = this;

      if (!refresh && parent.children.length > 0) {
        console.log("1111");
        return;
      }
      var id = parent.id;
      var that = this;
      let URL = ServerUrl;
      let data;
      // var loglist

      var listpar = {
        pid: this.treeid,
        timestamp: 0
      };

      _this.$http
        .post(URL + "/common/api/v1/region/get_regions_by_pid", listpar)
        .then(function(res) {
          if (res.status === 200 && res.data.result == "ok") {
            _this.reLogin(res.data.code); //提示帐号登陆
            console.log("根据获取孩子节点qqqqqqq");
            console.log(res.data.data);

            let response = res.data.data;
            var list = response.regions;

            list.forEach(element => {
              element["children"] = [];
            });
            if (list.length == 0) {
              // console.log("提示");
              // _this.$message({
              //   message: '没有子级结构了',
              //   type: 'warning'
              // });
              parent.children = [];
              return setTimeout(() => {
                return _this.resolve && _this.resolve(parent.children);
              }, 1);
            } else {
              if (parent.id == list[0].pid) {
                parent.children = list;
                return setTimeout(() => {
                  return _this.resolve && _this.resolve(parent.children);
                }, 1);
              }
            }
          }

          // that.updateD();
          console.log(list);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //第一次获取树结构
    gettree() {
      treedata = [];
      let _this = this;
      let URL = ServerUrl;

      var listpar = {
        pid: this.Fid,
        timestamp: 0
      };

      this.$http
        .post(URL + "/common/api/v1/region/get_regions_by_pid", listpar)
        .then(function(res) {
          console.log(res);

          if (res.status === 200 && res.data.result == "ok") {
            let response = res.data.data;
            var list = response.regions;
            list.forEach(element => {
              element["children"] = [];
            });
            _this.data = list;
            console.log("我下面是第一次的数据");
            console.log(_this.data);
            console.log(treedata);
          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: "warning"
            });
            console.log(res);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    // 获取下级行政区域
    postlist(list, type) {
      let _this = this;
      let URL = ServerUrl;

      this.$http
        .post(URL + "/common/api/v1/region/get_regions_by_pid", list)
        .then(function(res) {
          // _this.reLogin(res.data.code); //提示帐号登陆、
          if (res.status === 200 && res.data.result == "ok") {
            // debugger
            console.log(res);
            var list = res.data.data.regions;
            _this.regions = list;
            console.log(list);
            if (list[0].name == "市辖区") {
              var listpar = {
                pid: list[0].id,
                timestamp: 0
              };
              _this.postlist(listpar, 1);
              return;
            }
            var functionslist = [];
            for (var o in list) {
              functionslist.push(list[o].name);
            }
            if (type == 1) {
              _this.countyList = functionslist;
            } else if (type == 2) {
              _this.cityList = functionslist;
            } else {
              _this.terminalList = functionslist;
            }
          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: "warning"
            });
            console.log(res);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  updated() {
    var editmodHei = $("#menuEditModel .el-dialog").height();
    $("#menuEditModel .el-dialog").css("marginTop", -(editmodHei / 2));
    $("#menuEditModel .el-dialog").css("marginBottom", 0);
    var addmodHei = $("#AddModel .el-dialog").height();
    $("#AddModel .el-dialog").css("marginTop", -(addmodHei / 2));
    $("#AddModel .el-dialog").css("marginBottom", 0);
  }
};
import Tools from "../media/Tools.js";
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
  #menuBox .zTable {
    padding-top: 16px;
    height: 93%;
  }
  #menuBox .elTable {
    height: 86%;
  }
  #menuBox .zInput {
    height: 28px;
    line-height: 28px;
    width: 100px;
    padding-left: 0;
  }
  #menuBox.zForm {
    padding-bottom: 15px;
  }
  #menuBox .zForm button {
    float: left;
    color: #eee;
    height: 30px;
    font-size: 12px;
    margin-left: 8px;
    text-align: center;
    line-height: 30px;
    padding: 0px 10px;
    border: 1px #3b4872 solid;
  }
}
/* 弹出层 */
#activeCity_box {
  position: relative;
}
.formTable {
  position: relative;
  overflow: hidden;
  padding: 2px 4px;
  background: #4a567c;
}

.block {
  float: left;
  width: 50%;
  height: 40px;
  overflow: hidden;
  /* border:2px #4a567c solid; */
}
.block-row {
  float: left;
  width: 105%;
  height: 40px;
  overflow: hidden;
  /* border:2px #4a567c solid; */
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
  height: 164px;
  overflow: hidden;
}
.power {
  clear: both;
  height: 400px;
  overflow: hidden;
}

.userBtn {
  overflow: hidden;
  padding-top: 24px;
  text-align: right;
}
/* end */

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

.zInput,
.contactsInput {
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
  width: 400px;
}
#AddModel .SelectTitle {
  float: left;
  height: 36px;
  display: block;
  line-height: 36px;
}
.zForm span.btnRight {
  float: right;
  display: inline-block;
}

.block .el-form-item__label,
.block .el-input__inner,
.textarea .el-form-item__label {
  height: 36px;
  margin: 2px 0;
  line-height: 36px;
  border: 1px #3b4872 solid;
}
</style>
<style type="text/css">
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
#corporate_name {
  width: 100%;
}
#AddModel {
  overflow: hidden;
}

#AddModel #activeCity {
  z-index: 888;
  width: 400px;
  background-color: #354166;
  border: 2px solid #3b4872;
  height: 300px;
}
#showtreebox1,
#showtreebox2,
#showtreebox3 {
  top: 36px;
  right: 60px;
  position: absolute;
  width: 380px;
  height: 300px;
  z-index: 99;
  background-color: #354166;
  border: 2px #3b4872 solid;
}
#AddModel .textarea .el-form-item__label,
#menuEditModel .textarea .el-form-item__label {
  height: 160px;
  margin-top: 2px;
  background: #1b274c;
}

#AddModel .textarea .el-textarea__inner,
#menuEditModel .textarea .el-textarea__inner {
  height: 160px;
}
@import url("../media/lkjmedia.css");
#menuEditModel .el-dialog,
#AddModel .el-dialog {
  width: 1100px;
  top: 50%;
}

#menuEditModel .block .el-form-item__label,
#menuEditModel .block .el-input__inner {
  height: 36px;
  margin: 2px 0;
  line-height: 36px;
  border: 1px #3b4872 solid;
}
#menuEditModel .block .el-form-item__label,
#AddModel .block .el-form-item__label {
  background: #1b274c;
}
#AddModel .block .el-form-item__label,
#AddModel .block .el-input__inner {
  height: 36px;
  margin: 2px 0;
  line-height: 36px;
  border: 1px #3b4872 solid;
}

#menuEditModel .el-dialog__body,
#AddModel .el-dialog__body {
  padding: 24px 24px 18px;
}

#menuEditModel .el-checkbox,
#AddModel .el-checkbox {
  float: left;
}

#menuEditModel .el-form-item,
#AddModel .el-form-item {
  margin: 0;
  padding: 0;
  width: 91%;
  float: left;
}

#menuEditModel .userBtn .el-form-item,
#AddModel .userBtn .el-form-item {
  width: 100%;
}

#menuEditModel .el-textarea,
#AddModel .el-textarea {
  width: 106.2%;
}

.el-textarea__inner {
  height: 160px;
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
/*img:hover{*/
/*background-color: #1b274c;*/
/*}*/

#AddModel .block .el-form-item__content,
#menuEditModel .block .el-form-item__content {
  line-height: 32px;
}
</style>
<style  lang="scss">
#tab-Country,
#tab-province,
#tab-city,
#tab-county {
  width: 78px;
  text-align: center;
}
#AddModel {
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
  #mediatree,
  #medialist {
    ul li {
      height: 24px;
      margin-top: 5px;
      font-size: 18px;
      line-height: 24px;
    }
    float: left;
    width: 50%;
    height: 100%;
  }
  #showtreebox1 {
    #pane-province,
    #pane-city,
    #pane-county {
      height: 300px;
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
