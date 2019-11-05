<template>
  <div class="mRight" id="menuBox">
    <div class="mRightTwo">
      <div class="zForm">
        <span>企业名称:</span><input class="zInput" type="text" placeholder=""/>
        <span>联系人或者手机号:</span><input class="contactsInput " type="text" placeholder=""/>
        <button @click="queryBoxStatusList">查询</button>
        <button @click="allBoxStatusList">全部</button>
        <span class="btnRight"><button @click="addregion_name">新增</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
          <vue-scroll :ops="ops" ref="vs">
            <div class="scrollbox">
              <el-table ref="multipleTable" @selection-change="changeFun" :data="BoxStatus" tooltip-effect="dark"
                        style="width: 100%">
                        <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="name" label="企业名称"></el-table-column>
                <el-table-column prop="region_name" label="地区"></el-table-column>
                <el-table-column prop="contacts_names" label="联系人"></el-table-column>
                <el-table-column prop="contacts_phonenums" label="联系人手机号"></el-table-column>
                <el-table-column prop="createtime" label="添加时间" width="180"></el-table-column>

                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <a href="javascript:;" class="ml5">
                      <!-- <span  @click="edit(scope.row)">编辑</span> -->
                      <img @click="editbut(scope.row)" src="../../assets/edit2.png" alt="">
                    </a>&nbsp;&nbsp;

                    <a href="javascript:;" @click="casualbut(scope.row)" class="ml5">
                      <span>临时账号</span>
                      <!-- <img @click="moveDown(scope.row)" class="moveIco" src="../../assets/up.png" alt=""> -->

                    </a>&nbsp;&nbsp;<a @click="unregister(scope.row)" href="javascript:;" class="ml5"  >
                    <span>注销</span>
                    <!-- <img @click="moveDown(scope.row)" class="moveIco" src="../../assets/up.png" alt=""> -->

                  </a>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </vue-scroll>
        </div>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="pagesize"
                       :current-page.sync="currentPage" layout="total, prev, pager, next, jumper"
                       :total="total"></el-pagination>
      </div>
    </div>
    <div id="menuAddModel">
      <el-dialog :close-on-click-modal="false" title="菜单 - 新增" :visible.sync="dialogTableVisibleadd">
        <el-form :model="addenterprise" ref="addenterprise" label-width="30%" class="demo-ruleForm">
          <div class="formTable">
            <div class="block ">
              <el-form-item label="企业名称：" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-input v-model="addenterprise.enterprise_name" maxlength="50" class="corporate_name"></el-input>
              </el-form-item>
            </div>

            <div class="block" id="activeCity_box1">
              <el-form-item label="地区：" :rules="[{ required: true, message: ' '}]" prop="url">
                <div class="checkboxBg" @click="closedButtonclick">
                  <div v-html="addressHtml2" class="framework" @change="aadCity"></div>
                </div>

              </el-form-item>

            </div>
            <div id="showtreebox1" v-show="closedButton">
              <div class="showtreeboxzTree" di="showtreeboxdisplaybox">

                  <el-tabs v-model="activeCity" type="card" @tab-click="handleClickCity" witth="300">
                    <el-tab-pane width="80" height="300" label="全国" name="Country">
                      <div>
                        <ul id="example-1">
                          <li v-for="item in CountryList" :key="item.index" @click="getid(item)">{{ item.name }}</li>
                        </ul>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane width="80" height="300" label="省" name="province">
                      <vue-scroll :ops="ops1" ref="vs">
                        <div class="TerminaLeft">
                          <ul id="exampl">
                            <li v-for="item in terminalList" :key="item.index" @click="getprovince(item)">{{ item.name }}
                            </li>
                          </ul>

                        </div>
                      </vue-scroll>
                    </el-tab-pane>

                    <el-tab-pane width="80" id="city" height="300" label="市" name="city" :disabled=iscity>
                      <vue-scroll :ops="ops1" ref="vs">
                        <div class="TerminaLeft">

                          <ul id="example">
                            <li v-for="item in cityList" :key="item.index" @click="getcity(item)">{{ item.name }}</li>
                          </ul>

                        </div>
                      </vue-scroll>
                    </el-tab-pane>
                    <el-tab-pane width="80" id="county" height="300" label="区" name="county" :disabled="icounty">

                      <vue-scroll :ops="ops1" ref="vs">
                        <div class="TerminaLeft">

                          <ul id="example-1">
                            <li v-for="item in countyList" :key="item.index" @click="getcounty(item)">{{ item.name }}</li>
                          </ul>

                        </div>
                      </vue-scroll>
                    </el-tab-pane>
                  </el-tabs>

              </div>

              <div class="closedbut" @click="closedButton=false">关闭</div>
            </div>
            <div class="block">
              <el-form-item label="联系人：" prop="parentname" :rules="[{ required: true, message: ' '}]">
                <el-input v-model="addenterprise.contacts_names" maxlength="120"></el-input>
                <!-- <el-select v-model="add.parentname" @change="getvalue" placeholder="--请选择--">
                                    <el-option v-for="item in options" :key="item.index" :label="item.value" :value="item"></el-option>
                                </el-select> -->
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="联系人手机号：" :rules="[{ required: true, message: ' '}]" prop="url">
                <el-input v-model="addenterprise.contacts_phonenums" maxlength="120"></el-input>
              </el-form-item>
            </div>
              <div class="block blockUrl">
              <el-form-item label="终端分布图地址"  prop="url">
                <el-input v-model="addenterprise.terminal_distribution_map_url" maxlength="120"  placeholder="如：http://10.1.24.33:3000/index?user={username}&pwd={password}&area_code={areaCode}&area_name={areaName}&xzjb={xzjb}&access_token=33333333333333333333333333333333"></el-input>
             
              </el-form-item>
            </div>
            <div class="power" @click="closedButton=false">

                <el-tabs v-model="activeName" @tab-click="tabClick">
                  <el-tab-pane :disabled="disabled" label="权限分配" name="first">

                      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                      </el-checkbox-group>

                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="流媒体服务器" name="second">
                    <div class="second">

                      <div class="serveradd"></div>
                      <div class="serveraddress"> 已添加服务器地址 <span class="empty" @click="serverEliminate('1')">清空</span></div>
                      <div id="mediatree">
                        <div class="scrolltree">
                          <vue-scroll :ops="ops1" ref="vs">
                            <el-tree :data="data" :props="props" :load="loadNode" node-key="id" lazy
                                     @check-change="handleCheckChangemedia" @node-expand="nodeclick"
                                     @node-click="handleNodeClick">
                               <span class="custom-tree-node" slot-scope="{ node, data}">
                                    <span>
                                        <i :class="node.icon"></i>{{ node.label }}
                                    </span>
                                </span>

                            </el-tree>
                          </vue-scroll>
                        </div>

                      </div>
                      <div id="medialist">

                        <ul>
                          <li v-for="(item, index) in medialist"
                              :key="index">{{item.server_name}}
                            <span class="closebox"><img src="../../assets/close.png" alt=""
                                                        @click="imgclicking(item,index)"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="辅助服务器" name="third">
                    <span class="SelectTitle">选择辅助服务器：</span>
                    <div class="zSelect">
                      <el-select v-model="value_Select" @change="getvalue" class="zgroup" placeholder="默认（本机">
                        <el-option v-for="item in options" :key="item.index" :label="item.name"
                                   :value="item"></el-option>
                      </el-select>
                    </div>

                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="监控资源分配" name="fourth">
                    <div class="monitor_left">
                      <span v-html="monitor_server_url"></span></div>
                    <div class="monitor_right">
                      <div><span class="monitor_right_span"></span></div>
                    </div>
                    <div id="mediatree" v-if="dialogtree_monitor">
                      <!-- 监控资源分配tree -->
                      <!--  :data="treeData" -->
                      <div class="scrolltree">
                        <vue-scroll :ops="ops1" ref="vs">

                          <el-tree ref="tree_monitor" :props="props1" @node-expand="nodeclick1" lazy
                                   @node-click="handleNodeClick1"
                                   @check-change="handleCheckChange1"
                                   :load="loadNode1"
                                   node-key="id" show-checkbox></el-tree>
                        </vue-scroll>
                      </div>

                    </div>
                    <div id="medialist">
                    </div>
                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="终端通讯录分配" name="fifth">
                    <div><span></span></div>
                      <!-- <button @click="addclcik">11</button> -->

                    <div id="mediatree_terminal" v-if="dialogtree_terminal">
                      <div class="scrolltree">
                        <vue-scroll :ops="ops2" ref="vs">
                          <el-tree ref="tree_monitor" :props="props2"
                                   @node-expand="nodeclick2" lazy
                                   @node-click="handleNodeClick2"
                                   @check-change="handleCheckChange2"
                                   @check="chechange"
                                   @current-change="changecurrent"
                                   :load="loadNode2"
                                   node-key="id" show-checkbox></el-tree>
                        </vue-scroll>
                      </div>
                     
                    </div>
                    <div id="medialist">
                    </div>
                  </el-tab-pane>
                </el-tabs>


            </div>
          </div>
          <div class="userBtn">
            <el-form-item>
              <el-button type="primary" :disabled="isaddbut" @click="addMenuInfoList">保存</el-button>
              <el-button @click="canceladdMenuInfoList">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>
    <!-- 编辑 -->
    <div id="enterpriseEditModel">
      <el-dialog :close-on-click-modal="false" title="菜单 - 编辑" :visible.sync="dialogTableVisibleedit">
        <el-form :model="editlist" ref="edit" label-width="30%" class="demo-ruleForm">
          <div class="formTable">
            <div class="block ">
              <el-form-item label="企业名称：" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-input v-model="editlist.enterprise_name" maxlength="50" calss="corporate_name"></el-input>
              </el-form-item>
            </div>

            <div class="block" id="activeCity_box">
              <el-form-item label="地区：" :rules="[{ required: true, message: ' '}]" prop="url">
                <div class="checkboxBg" @click="checkboxBgeditclick">
                  <div v-html="addressHtml2" class="framework" @change="aadCity"></div>
                </div>

              </el-form-item>

            </div>
            <div id="showtreebox2" v-show="closedButtonedit">
              <div class="showtreeboxzTree" di="showtreeboxdisplaybox">
                  <el-row  class="showtreeboxzTreerow"> <el-col :span="24">
                  <el-tabs v-model="activeCity" type="card" @tab-click="handleClickCity" witth="300">
                    <el-tab-pane width="80" height="300" label="全国" name="Country">
                      <div>
                        <ul id="activeCity1">
                          <li v-for="item in CountryList" :key="item.index" @click="getid(item)">{{ item.name }}</li>
                        </ul>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane width="80" height="300" label="省" name="province">
                      <vue-scroll :ops="ops1" ref="vs">
                        <div class="activeCity2">
                          <ul id="exampl">
                            <li v-for="item in terminalList" :key="item.index" @click="getprovince(item)">{{ item.name }}
                            </li>
                          </ul>

                        </div>
                      </vue-scroll>
                    </el-tab-pane>

                    <el-tab-pane width="80" id="city" height="300" label="市" name="city" :disabled=iscity>
                      <vue-scroll :ops="ops1" ref="vs">
                        <div class="TerminaLeft">

                          <ul id="example">
                            <li v-for="item in cityList" :key="item.index" @click="getcity(item)">{{ item.name }}</li>
                          </ul>

                        </div>
                      </vue-scroll>
                    </el-tab-pane>
                    <el-tab-pane width="80" id="county" height="300" label="区" name="county" :disabled="icounty">

                      <vue-scroll :ops="ops1" ref="vs">
                        <div class="TerminaLeft">

                          <ul id="example-1">
                            <li v-for="item in countyList" :key="item.index" @click="getcounty(item)">{{ item.name }}</li>
                          </ul>

                        </div>
                      </vue-scroll>
                    </el-tab-pane>
                  </el-tabs>
                </el-col> </el-row>



              </div>

              <div class="closedbut" @click="closedButtonedit=false">关闭</div>
            </div>
            <div class="block">
              <el-form-item label="联系人：" prop="parentname" :rules="[{ required: true, message: ' '}]">
                <el-input v-model="editlist.contacts_names" maxlength="120"></el-input>
                <!-- <el-select v-model="add.parentname" @change="getvalue" placeholder="--请选择--">
                                    <el-option v-for="item in options" :key="item.index" :label="item.value" :value="item"></el-option>
                                </el-select> -->
              </el-form-item>

            </div>
            <div class="block">
              <el-form-item label="联系人手机号：" :rules="[{ required: true, message: ' '}]" prop="url">
                <el-input v-model="editlist.contacts_phonenums" maxlength="120"></el-input>
              </el-form-item>
            </div>
            <div class="block blockUrl">
              <el-form-item label="终端分布图地址" prop="url">
                <el-input v-model="editlist.terminal_distribution_map_url" maxlength="120"  placeholder="如：http://10.1.24.33:3000/index?user={username}&pwd={password}&area_code={areaCode}&area_name={areaName}&xzjb={xzjb}&access_token=33333333333333333333333333333333"></el-input>
             
              </el-form-item>
            </div>
            <div class="power" @click="closedButtonedit=false">

                <el-tabs v-model="activeName" @tab-click="tabClick">
                  <el-tab-pane :disabled="disabled" label="权限分配" name="first">

                      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange2">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                      </el-checkbox-group>

                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="流媒体服务器" name="second">
                    <div class="second">

                      <div class="serveradd"></div>
                      <div class="serveraddress"> 已添加服务器地址 <span class="empty" @click="serverEliminate('2')">清空</span></div>
                      <div id="mediatree1">
                        <div class="scrolltree">
                          <vue-scroll :ops="ops1" ref="vs">
                            <el-tree :data="data" :props="props" :load="loadNode" node-key="id" lazy
                                     @check-change="handleCheckChangemedia" @node-expand="nodeclick5"
                                     @node-click="handleNodeClick5">
                              <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
                <i :class="node.icon"></i>{{ node.label }}
            </span>
        </span>
                            </el-tree>
                          </vue-scroll>
                        </div>

                      </div>
                      <div id="medialist1">

                        <ul>
                          <li v-for="(item, index) in medialistedit"
                              :key="index">{{item.server_name}}
                            <span class="closebox"><img src="../../assets/close.png" alt=""
                                                        @click="imgclickingedit(item,index)"></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="辅助服务器" name="third">
                    <span class="SelectTitle">选择辅助服务器：</span>
                    <div class="zSelect">
                      <el-select v-model="edit.assist_server.name" @change="getvalueedit" class="zgroup"
                                 placeholder="默认（本机">
                        <el-option v-for="item in options" :key="item.index" :label="item.name"
                                   :value="item"></el-option>
                      </el-select>
                    </div>

                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="监控资源分配" name="fourth">
                    <div class="monitor_left">
                      <span v-html="monitor_server_url"></span></div>
                    <div class="monitor_right">
                      <div><span class="monitor_right_span"></span></div>
                    </div>
                    <div id="mediatree2" v-if="dialogtree_monitor_edit">
                      <!-- 监控资源分配编辑时tree -->
                      <!--  :data="treeData" -->
                      <div class="scrolltree">
                        <vue-scroll :ops="ops1" ref="vs">

                          <el-tree ref="tree_monitoredit" :props="props1" @node-expand="nodeclick3" lazy
                                   @node-click="handleNodeClick3"
                                   @check-change="handleCheckChange3"
                                   :load="loadNode3"
                                   node-key="unique_code" show-checkbox></el-tree>
                        </vue-scroll>
                      </div>

                    </div>
                    <div id="medialist2">
                    </div>
                  </el-tab-pane>
                  <el-tab-pane :disabled="disabled" label="终端通讯录分配" name="fifth">
                    <!-- 终端通讯录分配编辑时tree -->
                    <div><span></span></div>
                    <div id="mediatree_terminal1" v-if="dialogtree_terminal_edit">
                      <div class="scrolltree">
                        <vue-scroll :ops="ops2" ref="vs">
                          <el-tree ref="tree_terminaledit" :props="props2"
                                   @node-expand="nodeclick4" lazy
                                   @node-click="handleNodeClick4"
                                   @check-change="handleCheckChange4"
                                   :load="loadNode4"
                                   node-key="unique_code" show-checkbox></el-tree>
                        </vue-scroll>
                      </div>

                    </div>
                    <div id="medialist3">
                    </div>
                  </el-tab-pane>
                </el-tabs>


            </div>
          </div>
          <div class="userBtn">
            <el-form-item>
              <el-button type="primary"  :disabled="iseditbut"  @click="editMenuInfoList">保存</el-button>
              <el-button @click="canceleditMenuInfoList">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>

    <div id="menucasualModel">
      <el-dialog :close-on-click-modal="false" title="企业 - 临时账号" :visible.sync="dialogcasual">
        <el-form :model="casuadata" ref="casuadata" label-width="38%" class="demo-ruleForm">
          <div class="formTable">
            <div class="block">
              <el-form-item label="用户名" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-input v-model="casuadata.account" maxlength="50"></el-input>
              </el-form-item>
            </div>
            <div class="block">
              <el-form-item label="有效期" :rules="[{ required: true, message: ' '}]" prop="url">
                <el-input v-model="casuadata.account_expiry" maxlength="120"></el-input>
              </el-form-item>
            </div>
            <div class="block">
              <el-form-item label="密码" :rules="[{ required: true, message: ' '}]" prop="url">
                <el-input v-model="casuadata.password" maxlength="120"></el-input>
              </el-form-item>
            </div>

          </div>
          <div class="userBtn">
            <el-form-item>
              <el-button type="primary" @click="postpone_casual(casuadata)">延期</el-button>
              <el-button @click="dialogcasual=false">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import $ from "jquery";
  import axios from 'axios'
  import Nav from '../Nav.vue'
  import Index from '../Index.vue'
  import {
    getenterpriseinfos,
    getall_assist_servers,
    getallenterprise_streamservers,
    get_terminal_regions_and_departs,
    get_terminal_region,
    getresource_organizations,
    getenterprise_all_functions,
    getresource_organization_paths,
    get_monitor_server,
    getregisterenterprise,
    get_unregister_enterprise,
    getpostpone_casual_admin,
    get_casual_admin_info,
    getenterprise_info,
    getmodify_enterprise,
    get_terminal_departs

  } from '@/components/interface/Private.js';
  import {getRegionsbyPid, getRegiondetail, getregion_paths} from '@/components/interface/common.js';

  var content = Nav //在这个地方赋值一下
  var contents = Index //在这个地方赋值一下
  var cityOptions = [];//流媒体服务器全部选项
  var treedata = [];


  var Valindex;
  var TreeDataId = "";
  var page = 1;

  export default {
    data() {
      return {
        iseditbut:false,
        isaddbut:false,
        casuadata: [],
        is_all: false,//监控资源分配是全国后下拉资源
        is_Children: false,//监控资源分配不是全国是再次下拉开关
        terminal_all: false,//终端通讯录分配是全国后下拉资源
        monitorCode: "",//监控资源分配的CODE
        closedButton: false,//是否显示地区选择TAD
        closedButtonedit: false,//是否显示地区选择TAD
        monitor_server_url: "",
        allmonitoreditId: [],//复现监控资源分配
        allterminalId: [],//复现终端通讯录分配
        all_functions: [],//所有功能权限
        region_full_code: "",
        region_full_name: "",
        editswitch: false,//编辑开关控制编辑监控终端的TERR显示
        dialogtree_monitor: false,
        dialogtree_monitor_edit: false,
        dialogtree_terminal: false,
        dialogtree_terminal_edit: false,
        dialogcasual: false,
        dialogTablepostpone: false,
        region_name: 0,
        value_Select: [],
        // CountryList: [
        //   "全国"
        // ],
       CountryList: [
         {
           "id": "110000000000",
           "pid": "000000000000",
           "name": "全国"
         }
       ],
       querybut:false,
        terminalList: [],//省集合
        cityList: [],//市集合
        countyList: [],//区集合
        iscity: false,//是不是显示市
        icounty: false,
        disabled: true,
        data: [],
        datareg: [],
        medialist: [],
        medialistedit: [],
        Fid: "",
        treeid: '',
        serverid: '',
        resolve: undefined,
        node: undefined,
        props: { //TERR筛选条件
          label: 'name',
          children: 'children'
        },
        props1: { //TERR筛选条件
          label: 'name',
          children: 'children'
        },
        props2: { //TERR筛选条件
          label: 'name',
          children: 'children'
        },
        casual_admin: [],
        treeData: [],
        dataId: "", //参数ID
        dataparentOrgName: '', //父级名字
        dataparentID: "", //父级ID
        addenterprise: {
          "allocated_enterprise_functions": [],
          "assist_server_id": "",
          "contacts_names": "",
          "contacts_phonenums": "",
          "enterprise_name": "",
          "enterprise_streamservers": [//流媒体选择

          ],
          "monitor_resource_organizations": [],
          "region_code": "",
          "region_full_code": "",
          "region_full_name": "",
          "region_name": "",
          "terminal_distribution_map_url":"",
          "terminal_regions": []
        },


        regions: [],
        checkAll: false,
        checkedCities: [],//流媒体服务器已选中选项
        addressHtml2: "请选择", //下拉组织结构
        cities: cityOptions,
        isIndeterminate: true,
        BoxStatus: [],
        activeCity: 'Country',
        activeName: 'first',
        ops: {
          vuescroll: {
            mode: 'native'
          },
          scrollPanel: {}
        },
        ops1: {
          vuescroll: {
            mode: 'native'
          },
          scrollPanel: {}
        },
        ops2: {
          vuescroll: {
            mode: 'native'
          },
          scrollPanel: {}
        },
        querybut:false,
        total: 1,
        Types: '',
        checked: false,
        multipleSelection: [],
        dialogTableVisibleadd: false,
        dialogTableVisibleedit: false,
        edit:

          {
            assist_server: {
              name: ""
            }


          },
        editlist: {
          "allocated_enterprise_functions": [],
          "assist_server_id": "",
          "contacts_names": "",
          "contacts_phonenums": "",
          "enterprise_name": "",
          "enterprise_streamservers": [//流媒体选择

          ],
          "monitor_resource_organizations": [],
          "region_code": "",
          "region_full_code": "",
          "region_full_name": "",
          "region_name": "",
          "terminal_distribution_map_url":"",
          "terminal_regions": []
        },
        options: [],
        MenuDate: [],
        currentPage: page,
        pagesize: scopes
      };
    },
    mounted: function () {
      var hei = document.documentElement.clientHeight;
      $(".mRightTwo").css("height", hei - 178);

      $(window).resize(function () {
        var wid = document.documentElement.clientWidth,
          hei = document.documentElement.clientHeight;
        $('.mRightTwo').css('height', hei - 178);
      })



      this.getBoxStatusList();
      this.servers();
//      this.servers()
//      var qse = this.toShort("1100000000000")
//      console.log(qse)


    },
    watch: {
      addressHtml2(val, oldVal) {
//        console.log(val, "+", oldVal)
        if (val != "请选择") {
          this.disabled = false;

        } else if (val == "请选择") {
          this.disabled = true;
        }

      },
      closedButton(val, oldVal){
  // console.log(val, "+", oldVal)
     if (val == false) {
          this.dialogtree_monitor = false
        this.dialogtree_terminal = false
               this.dialogtree_monitor_edit = false;
        this.dialogtree_terminal_edit = false;

        } else{
         
        }
      }
    },
    methods: {
      serverEliminate(e){
//          console.log("00")
        if(e==="1"){
//          console.log("1")
         this.medialist=[];
        }else{
//           console.log("2")
     this.medialistedit=[];
        }


      },
      //权限分配选中的值
      handleCheckedCitiesChange(val) {
        var _this = this
        let checkedCount = val.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        // console.log(this.checkedCities)
        // console.log(val)
        var ary = [];
        this.all_functions.forEach(function (value, i) {
          val.forEach(function (ele, i) {
            if (value.comment == ele) {

              ary.push(value.name)


            }
          })
        })
        //  console.log(ary)

        var vallist = this.removing(ary)
        this.addenterprise.allocated_enterprise_functions = vallist

      },
      //编辑时权限分配选中的值
      handleCheckedCitiesChange2(val) {
        var _this = this
        let checkedCount = val.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        // console.log(this.checkedCities)
        // console.log(val)
        var ary = [];
        this.all_functions.forEach(function (value, i) {
          val.forEach(function (ele, i) {
            if (value.comment == ele) {

              ary.push(value.name)


            }
          })
        })
        //  console.log(ary)

        var vallist = this.removing(ary)
        this.editlist.allocated_enterprise_functions = vallist
//        console.log(this.editlist.allocated_enterprise_functions)
      },
      //注销企业操作
      unregister(index) {
        // var cheklength = this.multipleSelection;
        var _this = this
        this.$confirm('是否执行注销企业操作?', '消息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var delDate = {
            "enterprise_id": index.id
          }

          _this.unregister_enterprise(delDate)

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注销企业'
          });
        });

      },
      //临时账号
      casualbut(e) {

        var lis = {
          "enterprise_id": e.id
        }
        var _this = this
        get_casual_admin_info(lis).then(function (res) {
//          console.log(res)


          if (res.status === 200 && res.data.result == "ok") {

            _this.casuadata = res.data.data
            _this.casuadata.account_expiry = _this.timestampToTime(_this.casuadata.account_expiry)
                _this.dialogcasual = true;


          }else{
                _this.$message({
                message: "系统错误：错误指令"+res.data.error_description,//后台没有message
                type: 'info'
              });
          }

        }).catch(function (error) {
            _this.$message({
              message: '系统错误',
              type: 'success'
            });
        });

      },
      unregister_enterprise(e) {

        var _this = this
        get_unregister_enterprise(e).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {

            _this.$message({
              message: '注销企业成功',
              type: 'success'
            });
            _this.getBoxStatusList();
          }
        }).catch(function (error) {
          console.log(error);
        });


      },
      //点击其他地方收起地方，选择树
      closedButtonclick() {

       console.log("点击地区")
        this.closedButton = true
        this.dialogtree_monitor = false
        this.dialogtree_terminal = false
               this.dialogtree_monitor_edit = false;
        this.dialogtree_terminal_edit = false;
         this.gettree()

      },
       checkboxBgeditclick() {

        this.closedButtonedit = true

      },
      //获取新疆唐古拉地址
      get_erver() {
        var serurl = {
          "assist_server_id": this.serverid
        }
        get_monitor_server(serurl).then(res => {
          if (res.status === 200 && res.data.result == "ok") {

            this.monitor_server_url = "唐古拉地址 :" + res.data.data.ip + ":" + res.data.data.port
          }


        }).catch(res => {
          console.log(error);
        });

      },
      //点击省TAB
      handleClickCity(tab, event) {

        if (tab.name == "province") {
          this.postprovince()
        }
      },
      //新增弹窗tab框五选一
      tabClick(tab, event) {
        this.is_Children = false;
        this.is_all = false;
        // this.dialogtree_terminal = false;
        this.terminal_all = false
        // this.dialogtree_monitor_edit = false;
        // this.dialogtree_terminal_edit = false;

        if (tab.name == "first") {
          // this.dialogtree_monitor = false;
          this.functions()
        } else if (tab.name == "second") {
          // this.dialogtree_monitor = false;
          if (this.addressHtml2 == "请选择") {
            this.activeName = "first"
            this.$message({
              message: "请先选择地区",
              type: 'warning'
            });

          } else {
            this.gettree()
          }


        } else if (tab.name == "third") {
          this.data = [];

          // this.dialogtree_monitor = false;


        } else if (tab.name == "fourth") {


          // this.getmonito()

          this.get_erver()
          if (this.editswitch) {
            this.dialogtree_monitor_edit = true;


          } else {
            this.dialogtree_monitor = true;
          }


        } else if (tab.name == "fifth") {
          // this.dialogtree_monitor = false;

          if (this.editswitch) {
            this.dialogtree_terminal_edit = true;
          } else {

            this.dialogtree_terminal = true;
          }

          // this.regionlist()

        }

      },
      //流媒体服务器 点选筛选
      addmedialist(val) {

        var isgo = true
        if (val.org_code) {
          // console.log("addmedialist" + this.medialist.length)
          if (parseInt(this.medialist.length) === 0) {

            this.medialist.push(val)
          } else {

            for (var i = 0; i < this.medialist.length; i++) {
              if (this.medialist[i].server_name === val.server_name) {
                isgo = false;
              }
            }
            if (isgo) {
              this.medialist.push(val)

            }

          }
          //当前流媒体服务器 选择数据去除多余项
          this.medialist.forEach(function (ele, i) {
            delete(ele.children);
            delete(ele.name)
            delete(ele.icon)

          })
//          console.log(this.medialist)

        }


      },
      //编辑时候流媒体服务器 点选筛选
      addmedialist5(val) {
//        console.log(val)
        var isgo = true
        if (val.org_code) {
          // console.log("addmedialist" + this.medialist.length)
          if (parseInt(this.medialistedit.length) === 0) {

            this.medialistedit.push(val)
          } else {

            for (var i = 0; i < this.medialistedit.length; i++) {
              if (this.medialistedit[i].server_name === val.server_name) {
                isgo = false;
              }
            }
            if (isgo) {
              this.medialistedit.push(val)

            }

          }
          //当前流媒体服务器 选择数据去除多余项
          this.medialistedit.forEach(function (ele, i) {
            delete(ele.children);
            delete(ele.name)
            delete(ele.icon)

          })


        }


      },
      //流媒体服务器tree勾选情况未使用

      handleCheckChangemedia(data, checked, indeterminate) {



      },


      //流媒体服务器tree动态加载树结构
      loadNode(node, resolve) {

        this.resolve = resolve;


        if (this.data == []) {
          return false;
        }
        if (this.data == []) {
          return false;
        }
        return true;
      },
      //流媒体服务器tree点选加载树结构
      handleNodeClick(val, row, a) {

        this.node = row;
        this.setValue(val, row.parent.data);
        this.addmedialist(val)


      },


//点击下拉流媒体服务器tree动态加载树结构
      nodeclick(val) {

        this.addressHtml = val.name;
        this.addmedialist(val)


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


        this.deleteID = val.id;
        treedata = [];
        let _this = this;
        let URL = ServerUrl;

        if (val.pid >= 0) {
          this.getChildren(val, this.resolve);
        }
      },

      // 根据获取孩子节点获取终端通讯录子级地区目录和单位


      getChildren(parent, resolve, refresh = false) {
        // 根据获取孩子节点
        var _this = this;


        if (!refresh && parent.children.length > 0) {
          return;
        }
        var id = parent.id;
        var that = this;
        let URL = ServerUrl;
        let data;
        // var loglist

        var listpar = {
          "pid": this.treeid,
          "timestamp": 0
        }


        var par = {
          "org_code": this.treeid,
        }


        getallenterprise_streamservers(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {

            let response = res.data.data;

            var loglist = response
            for (var y = 0; y < loglist.length; y++) {
              loglist[y].name = loglist[y].server_name

            }


            getRegionsbyPid(listpar).then(function (res) {
              if (res.status === 200 && res.data.result == "ok") {

                _this.reLogin(res.data.code);

                let response = res.data.data;
                var list = response.regions;
                // list.push(loglist)
                for (var t = 0; t < loglist.length; t++) {
                  list.push(loglist[t])

                }

                if (list != []) {

                  list.forEach(element => {
                    if(element.pid!=undefined){
                      element["children"] = [];
                    }else {

                      element["icon"] = 'el-icon-info';
                    }

                  });
                }

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
            }).catch(function (error) {


            });
            ;
          }
          if (res.data.result == "error") {



            return setTimeout(() => {
              return _this.resolve && _this.resolve(parent.children);
            }, 1);
          }

        }).catch(function (error) {
          console.log(error);
        });


      },


      //编辑对话框流媒体服务器tree点选加载树结构
      handleNodeClick5(val, row, a) {
        this.node = row;
        this.setValue(val, row.parent.data);
        this.addmedialist5(val)


      },


//编辑对话框点击下拉流媒体服务器tree动态加载树结构
      nodeclick5(val) {
//        console.log(val)
        this.addressHtml = val.name;
        this.addmedialist5(val)


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

      setValue(val, parent) {
        // console.log("我这里" + val.id)

        TreeDataId = val.id;
        this.InputName = val.name;
        this.civilCode = val.civilCode;
        if (parent != undefined && parent.name != undefined && parent.name != "") {
          this.dataparentOrgName = parent.name;
          this.removeParent = parent;
        } else {
          this.dataparentOrgName = "";
        }
        this.currentParent = val;
        this.dataparentID = val.id; //添加时候的父ID=当前ID
      },



      //流媒体服务器获取树结构
      gettree() {
       console.log("getRegionsbyPid取树结构")
       console.log(this.Fid)
        treedata = []
        let _this = this;
        let URL = ServerUrl;

        var listpar = {
          "pid": this.Fid,
          "timestamp": 0
        }
          var par = {
          "org_code": this.Fid,
        }
        // 是不是全国
  // getallenterprise_streamservers(par).then(function (res) {


  //         if (res.status === 200 && res.data.result == "ok") {

  //           let response = res.data.data;

  //           var loglist = response
  //           for (var y = 0; y < loglist.length; y++) {
  //             loglist[y].name = loglist[y].server_name

  //           }
  //           console.log(loglist)


  //         }
     
  //       }).catch(function (error) {
  //         console.log(error);
  //       });

     
        getRegionsbyPid(listpar).then(function (res) {
//          console.log(res)

          if (res.status === 200 && res.data.result == "ok") {

            let response = res.data.data;
            var list = response.regions

            if (list != []) {


              list.forEach(element => {
                if(element.pid!=undefined){
                  element["children"] = [];
                }

              });
            }
               console.log(list)
            _this.data = list;

          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
//            console.log(res);
          }

        }).catch(function (error) {
          console.log(error);
        });
      },


      // 获取下级行政区域
      postlist(list, type) {
        let _this = this;
        let URL = ServerUrl;

        getRegionsbyPid(list).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {
            // debugger

            var list = res.data.data.regions
            _this.regions = list
//            console.log(list)
            if (list[0].name == "市辖区") {
              var listpar = {
                "pid": list[0].id,
                "timestamp": 0
              }
              _this.postlist(listpar, 1)
              return

            }
            var functionslist = [];
            for (var o in list) {
              functionslist.push(list[o])
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
              type: 'warning'
            });
//            console.log(res);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },


      postprovince() {
        var par = {
          "pid": "000000000000",
          "timestamp": 0
        }

        this.postlist(par, 0)


      },

      ///列出全部的辅助服务器
      servers() {
//        console.log("third")
        let _this = this;
        let URL = ServerUrl;
        var Select = {}
        getall_assist_servers(Select).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {
            var slist = res.data.data
//            console.log(res)

            for (var i = 0; i < slist.length; i++) {

              slist[i].key = i


            }
            _this.options = slist;


            _this.serverid = slist[0].id;

//            console.log(slist)
//            console.log('初始化ID')


          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
//            console.log(res);
          }
        }).catch(function (error) {
          console.log(error);
        });

      },
      ///获取权限分配列出企业可分配的所有功能权限
      functions() {
//        console.log("first")
        let _this = this;
        let URL = ServerUrl;
        getenterprise_all_functions().then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {
            var list = res.data.data
            _this.all_functions = list
//            console.log(list)
            var functionslist = [];
            for (var o in list) {
              functionslist.push(list[o].comment)
            }
            _this.cities = functionslist;
//            console.log(cityOptions)
//            console.log(_this.cities)
          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
//            console.log(res);
          }
        }).catch(function (error) {
//          console.log(error);
        });

      },
      clicktd() {
//        console.log("谢谢谢")
      },
      //新增  需要加载点击新弹出对话框
      addregion_name() {
        this.isaddbut=false;
        this.servers()
        this.activeName = 'first';
        this.addenterprise = {
          "allocated_enterprise_functions": [],
          "assist_server_id": "",
          "contacts_names": "",
          "contacts_phonenums": "",
          "enterprise_name": "",
          "enterprise_streamservers": [//流媒体选择

          ],
          "monitor_resource_organizations": [],
          "region_code": "",
          "region_full_code": "",
          "region_full_name": "",
          "region_name": "",
          "terminal_regions": []
        };

        this.Fid = "";
        this.editswitch = false;
        this.addressHtml2 = "请选择"
        this.checkedCities = []
        this.medialist = []
        this.is_all = false;
        this.disabled = true;
        this.dialogtree_monitor = false;
        this.dialogtree_terminal = false;
        this.functions();
        this.dialogTableVisibleadd = true
        this.addenterprise = {
          "allocated_enterprise_functions": [],
          "assist_server_id": "",
          "contacts_names": "",
          "contacts_phonenums": "",
          "enterprise_name": "",
          "enterprise_streamservers": [//流媒体选择

          ],
          "monitor_resource_organizations": [],
          "region_code": "",
          "region_full_code": "",
          "region_full_name": "",
          "region_name": "",
          "terminal_regions": []
        };

      },
      //d点击全国
      getid(val) { //获取value和idzxj
//        console.log(val);
        this.addressHtml2 = val.name
        this.Fid = "000000000000"
        this.region_name = val.name

      },
      //点击省
      getprovince(value) {
        this.region_name = value.name
//        console.log("我是点的" + this.region_name)
//        this.addressHtml2 = value;

        var type
        if (value.name == "北京市" || value.name == "天津市" || value.name == "上海市" || value.name == "重庆市") {

          this.activeCity = "county"
          type = 1
          this.icounty = false
        } else {
          this.activeCity = "city"
          type = 2
          this.iscity = false
        }

        let _this = this;
        let URL = ServerUrl;
        var nowid = value.id

        // for (var k in _this.regions) {
        //   if (_this.regions [k].name == value) {
        //     nowid = _this.regions [k].id

        //   }


        // }


//        console.log(nowid)
        this.Fid = nowid


        var provinceparameter = {
          "pid": nowid,
          "timestamp": 0
        }
        this.postlist(provinceparameter, type)
        this.Regiondetail()


      },
      //点击区
      getcounty(value) {
//        console.log(value)
        this.region_name = value.name
//        console.log("我是点的" + this.region_name)
        var nowid = value.id

        // for (var k in this.regions) {
        //   if (this.regions [k].name == value) {
        //     nowid = this.regions [k].id

        //   }

        // }
        this.Fid = nowid
//        this.addressHtml2 = this.addressHtml2 + "/" + value;
        this.closedButton=false;
        this.Regiondetail()


      },
      //点击市
      getcity(value) {
        this.region_name = value.name
//        this.addressHtml2 = this.addressHtml2 + "/" + value;
//        console.log("我是点的" + this.region_name)
        var type
        this.activeCity = "county"
        let _this = this;
        let URL = ServerUrl;
        var nowid = value.id

        // for (var k in _this.regions) {
        //   if (this.regions [k].name == value) {
        //     nowid = this.regions [k].id

        //   }

        // }


        this.Fid = nowid
        var provinceparameter = {
          "pid": nowid,
          "timestamp": 0
        }
        this.postlist(provinceparameter, 1)
        this.Regiondetail()
      },
      Regiondetail() {


        var _this = this
        var Regiondetaillist = {
          "id": this.Fid,
          "timestamp": 0
        }

        getRegiondetail(Regiondetaillist).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {
            _this.addenterprise.region_full_code = res.data.data.region_details[0].ids;
            _this.addenterprise.region_full_name = res.data.data.region_details[0].names;

            var ary=res.data.data.region_details[0].names;
            var str = ary.split('|');

            str.forEach(function (ele, i) {
              if(i==0){
                _this.addressHtml2=ele
              }else {
                _this.addressHtml2=_this.addressHtml2+"/"+ele
              }

            })

//            this.addressHtml2 = value;


          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });

          }


        }).catch(function (error) {
          console.log(error);
        });


      },

      //点击全国
      getCountry(value) {
//        console.log(value)
      },

      getParent(val) {
//        console.log(val)
        this.edit.parentId = val
      },
      getvalue(value) { //选择辅助服务器

//        console.log(value)
        this.serverid = value.id
        this.value_Select = value.name;
      },
      getvalueedit(value) { //编辑框选择辅助服务器

//        console.log(value)
        this.serverid = value.id
        this.edit.assist_server.name = value.name
//        edit.assist_server.name
      },
      changeFun(val) { //复选框
        this.multipleSelection = val;
//        console.log(this.multipleSelection)
      },


      aadCity() {
//        console.log(this.addressHtml2)

      },

      //获取数据列表列出企业信息lkj
      getBoxStatusList() {

        let _this = this;
        let URL = ServerUrl;
        var pageSize = this.pagesize,
          currentPage = this.currentPage,
          serverName = $('.zInput').val();
        var userparameter = {
//					 "contacts_name_or_phonenum":localStorage.userName,
//						"enterprise_name":serverName ,
          "page_number": currentPage - 1,
          "page_size": pageSize
        }

        getenterpriseinfos(userparameter).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {


            var list = res.data.data.list;
//            console.log(list)
            let totalall = res.data.data.page_total_items;
            _this.total = totalall;
            for (var i in list) {
              if( list[i].is_new_public === true){
                list[i].is_new_public_isshow="first"

              }else{
                 list[i].is_new_public_isshow="no"
              }

              list[i].createtime = _this.timestampToTime(list[i].createtime)

            }
            _this.BoxStatus = list
          }
          if (res.data.result == "error") {
            _this.$message({
              message: "系统错误:错误指令"+res.data.error_description,
              type: 'warning'
            });

//            console.log(res);

          }


        }).catch(function (error) {
          console.log(error);
        });

      },
      //全部列出企业信息LKJ


      allBoxStatusList() {
           this.querybut=false; 
        $('.zForm input').val('')
        let _this = this;
        let URL = ServerUrl;
        var pageSize = this.pagesize,
          currentPage = this.currentPage,
          serverName = $('.zInput').val();
        var userparameter = {
          "contacts_name_or_phonenum": "",
          "enterprise_name": "",
          "page_number": currentPage - 1,
          "page_size": pageSize
        }

        getenterpriseinfos(userparameter).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {
            _this.$message({
              message: '全部数据',
              type: 'success'
            });

            var list = res.data.data.list;
//            console.log(list)
            let totalall = res.data.data.page_total_items;
            _this.total = totalall;
            for (var i in list) {
              list[i].createtime = _this.timestampToTime(list[i].createtime)


            }
            _this.BoxStatus = list

//            console.log(_this.timestampToTime(1559718654000))

          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });

//            console.log(res);

          }


        }).catch(function (error) {
          console.log(error);
        });

      },

      // 查询企业信息数据lkj
      queryBoxStatusList() {

        if ($('.zInput').val() === '' && $('.contactsInput').val() === '') {
          this.$message({
            message: '请填写查询项',
            type: 'warning'
          });
        } else {
          this.querybut=true; 
          page = 1;
          this.currentPage = 1;
          let _this = this;
          let URL = ServerUrl;
          var pageSize = this.pagesize,
            currentPage = this.currentPage,
            serverName = $('.zInput').val(),

            contactsInput = $('.contactsInput').val();
          var userparameter = {
            "contacts_name_or_phonenum": contactsInput,
            "enterprise_name": serverName,
            "page_number": currentPage - 1,
            "page_size": pageSize
          }

          getenterpriseinfos(userparameter).then(function (res) {

            if (res.status === 200 && res.data.result == "ok") {
              _this.$message({
                message: '查询成功',
                type: 'success'
              });
//              console.log(res)
              var list = res.data.data.list;
              let totalall = res.data.data.page_total_items;
              _this.total = totalall;
              for (var i in list) {
                list[i].createtime = _this.timestampToTime(list[i].createtime)


              }
              _this.BoxStatus = list


            }
            else if (res.data.result == "error") {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });

//              console.log(res);

            }


          }).catch(function (error) {
            console.log(error);
          });

        }
      },
      // addclcik(){
      //     var treelis={
      //           devnum: 165,
      //           id:"859a09a3-3ff5-469e-ad04-9caa05059c95",
      //           name:"福建省",
      //           parent_region_code:"000000000000",
      //           region_code:"350000000000",
      //           unique_code:"350000000000",
      //             }
      //  console.log(this.$refs.tree_monitor.getHalfCheckedNodes(treelis))
      // this.$refs.tree_monitor.getHalfCheckedNodes(treelis)
      // },
      //新增一条数据lkj 保存
      addMenuInfoList() {
      



        this.checkedCities = []
        this.is_all = false;
        this.dialogtree_monitor = false;

        var flag = true;
        if (this.addenterprise.enterprise_name == '') {
          this.$message({
            message: '名企业名称不允许为空',
            type: 'warning'
          });
          flag = false;
        }else

        if (this.addressHtml2 == '请选择') {
          this.$message({
            message: '地区不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.addenterprise.contacts_names == '') {
          this.$message({
            message: '联系人不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.addenterprise.allocated_enterprise_functions.length === 0) {
          this.$message({
            message: '功能权限不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.medialist.length === 0) {
          this.$message({
            message: '流媒体服务器不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.addenterprise.contacts_phonenums == '') {
          this.$message({
            message: '联系人手机号不允许为空',
            type: 'warning'
          });
          flag = false;
        }else if(this.addenterprise.contacts_phonenums!= ''){
           	var reg = new RegExp(window.phone);
           	var r = reg.test(this.addenterprise.contacts_phonenums);
           	if (r != true) {
           		this.$message({
           			message: "手机不符合要求",
           			type: "warning"
           		});
           		flag = false;
           	}

        }


        this.addenterprise.region_code = this.Fid
        // 地区是全的话。新增存值,表格
        if (this.Fid == "000000000000") {
          this.addenterprise.region_code = "000000000000";
          this.addenterprise.region_full_code = "000000000000";
          this.addenterprise.region_full_name = "全国";
          this.addenterprise.region_name = "全国";


        } else {
          this.addenterprise.region_name = this.region_name;
          this.addenterprise.region_code = this.Fid;


        }
        // 地区不是全国全的话。新增存值未处理
        this.addenterprise.assist_server_id = this.serverid;
        //辅助服务器
        this.addenterprise.enterprise_streamservers = this.medialist//当前流媒体服务器

        console.log(this.medialist)

        // 监控资源和终端通讯录未处理
        if (flag == true) {
          this.isaddbut=true;

          var _this = this;

          getregisterenterprise(this.addenterprise)
            .then(function (res) {


              _this.dialogTableVisibleadd = false
              if (res.status === 200 && res.data.result == "ok") {
                  _this.isaddbut=false;
                _this.$message({
                  message: "新增完成",
                  type: "success"
                });
              }else{
                   _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });
              }


              _this.getBoxStatusList();
            })
            .catch(res => {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });
            });
        }
//        console.log(this.addenterprise)

      },
      ///取消新增
      canceladdMenuInfoList() {
        this.is_all = false
        this.dialogtree_monitor = false;

        this.dialogTableVisibleadd = false
        this.$message({
          message: '取消新增',
          type: 'info'
        });
        this.add = {
          name: '',
          url: '',
          parentId: 0,
          parentname: '请选择',
          description: '',
        }
      },
      //获取当条数据写入edit组zxj
      pushrow(index, row) {

        this.dialogTableVisibleedit = true;

        var parentId = row.parentId; //所属父级当前

//        console.log(this.options); //所属父级集合

        var roleInputs = this.options; //所属父集合

        var roleInput = ""; //所属父级

        //////所属父级
        for (var keys in roleInputs) {
//          console.log(roleInputs[keys])
//          console.log(parentId)
          if (roleInputs[keys].key === parentId.toString()) {
            this.edit.lkjroleInput = roleInputs[keys].value
//            console.log("找到了 " + roleInput)

          }
          ;
        }
        ;

        this.edit.id = row.id;
        this.edit.name = row.name;
        this.edit.url = row.url;
        this.edit.parentId = row.parentId;
        this.edit.description = row.description;
//        console.log(this.edit)
      },
      //编辑企业信息

      editbut(row) {
        this.iseditbut=false;

        this. dialogtree_monitor_edit =false;
        this. dialogtree_terminal_edit = false;

        this.activeName = 'first';
        this.allmonitoreditId = []
        this.activeName = 'first';
        this.allterminalId = []

        this.edit = {
          assist_server: {
            name: ""
          }


        };
        var _this = this

//        console.log(row);
        var enterprise_id = {
          "enterprise_id": row.id
        }
        this.functions()
        getenterprise_info(enterprise_id).then(res => {

          if (res.status === 200 && res.data.result == "ok") {
//            _this.edit = res.data.data
            // console.log(res);
            this.editlist = {
              allocated_enterprise_functions: res.data.data.allocated_enterprise_functions,
              assist_server_id: res.data.data.assist_server.id,
              contacts_names: res.data.data.contacts_names,
              enterprise_id: res.data.data.enterprise_id,
              contacts_phonenums: res.data.data.contacts_phonenums,
              enterprise_name: res.data.data.enterprise_name,
              enterprise_streamservers: res.data.data.enterprise_streamservers, //处理流媒体服务器
              monitor_resource_organizations: res.data.data.monitor_resource_organizations,//终端通讯录分配
              region_code: res.data.data.region_code,
              region_full_code: res.data.data.region_full_code,
              region_full_name: res.data.data.region_full_name,
              region_name: res.data.data.region_name,
              terminal_distribution_map_url: res.data.data.terminal_distribution_map_url,
              terminal_regions: res.data.data.terminal_regions
            },
//              console.log("我需要的数据");
//            console.log(this.editlist);
            this.editswitch = true
            //处理复现地方-全国的ID
            _this.Fid = res.data.data.region_code


//            console.log(_this.edit)
            _this.addressHtml2 = res.data.data.region_name

            // 处理功能权限部分
            var functions = res.data.data.allocated_enterprise_functions
            var ary = [];

            functions.forEach(function (ele, i) {

              _this.all_functions.forEach(function (value, i) {

                if (value.name == ele) {

                  ary.push(value.comment)
                }
              })
            })
            _this.checkedCities = ary;


            //处理流媒体服务器
            _this.medialistedit = res.data.data.enterprise_streamservers


            // console.log("我是编辑流媒体服务器" ,_this.medialistedit)
            //处理辅助服务器
            _this.serverid = res.data.data.assist_server.id


            //处理数据中存在的监控资源

            var monitorlist = res.data.data.monitor_resource_organizations
//            console.log(monitorlist)
            monitorlist.forEach(function (value, i) {
              var arys = {unique_code: value.unique_code}

              _this.allmonitoreditId.push(arys)

            })

            _this.allmonitoreditId = this.removing(_this.allmonitoreditId)
//            console.log(_this.allmonitoreditId)
            //处理数据中存在的终端通讯录分配
            var terminal_regionslist = res.data.data.terminal_regions
//            console.log(terminal_regionslist)
            terminal_regionslist.forEach(function (value, i) {
              var arylist = {unique_code: value.unique_code}

              _this.allterminalId.push(arylist)

            })
            // console.log( _this.allterminalId)

            _this.allterminalId = this.removing(_this.allterminalId)
            // console.log(_this.allterminalId)


            _this.dialogTableVisibleedit = true
          }
           else {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
          }
        });


      },
      //编辑一条数据zxj
      editMenuInfoList() {
        var flag = true;
        if (this.editlist.enterprise_name == '') {
          this.$message({
            message: '名企业名称不允许为空',
            type: 'warning'
          });
          flag = false;
        }else

        if (this.editlist == '请选择') {
          this.$message({
            message: '地区不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.editlist.contacts_names == '') {
          this.$message({
            message: '联系人不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.editlist.allocated_enterprise_functions.length === 0) {
          this.$message({
            message: '功能权限不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.medialistedit.length === 0) {
          this.$message({
            message: '流媒体服务器不允许为空',
            type: 'warning'
          });
          flag = false;
        }else
        if (this.editlist.contacts_phonenums == '') {
          this.$message({
            message: '联系人手机号不允许为空',
            type: 'warning'
          });
          flag = false;
        }else if(this.editlist.contacts_phonenums!= ''){
          var reg = new RegExp(window.phone);
          var r = reg.test(this.editlist.contacts_phonenums);
          if (r != true) {
            this.$message({
              message: "手机不符合要求",
              type: "warning"
            });
            flag = false;
          }

        }else

        if (this.medialistedit == []) {
          this.$message({
            message: '流媒体服务器不允许为空',
            type: 'warning'
          });
          flag = false;
        }
        this.editlist.region_code = this.Fid
        // 地区是全的话。新增存值,表格
        if (this.Fid == "000000000000") {
          this.editlist.region_code = "000000000000";
          this.editlist.region_full_code = "000000000000";
          this.editlist.region_full_name = "全国";
          this.editlist.region_name = "全国";


        } else {
          this.editlist.region_name = this.region_name;
          this.editlist.region_code = this.Fid;


        }
        // 地区不是全国全的话。新增存值未处理
        this.editlist.assist_server_id = this.serverid;

        this.editlist.enterprise_streamservers = this.medialistedit//当前流媒体服务器

        // console.log( "我是编辑要提交的数据",this.editlist)

        // 监控资源和终端通讯录未处理

        if (flag == true) {
          // console.log("我编辑")
        //  console.log(this.editlist)
          var _this = this;
          this.iseditbut=true;


          getmodify_enterprise(this.editlist)
            .then(function (res) {


              _this.dialogTableVisibleedit = false
              if (res.status === 200 && res.data.result == "ok") {
                   _this.iseditbut=false;
                _this.$message({
                  message: "编辑成功",
                  type: "success"
                });

              }else{
                 _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
              }


              _this.getBoxStatusList();
            })
            .catch(res => {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });
            });
        }
//        console.log(this.editlist)

      },

// 给企业临时管理员账号延期
      postpone_casual(e) {
        var _this = this
//        console.log(e)

        var casual_admin_id = {
          "casual_admin_id": e.id
        }
        getpostpone_casual_admin(casual_admin_id).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {

            _this.$message({
              message: "延期成功",
              type: 'success'
            });
          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });

          }


        })

      },
      //取消临时账号
      canceleditMenuInfoList() {
        this.dialogTableVisibleedit = false
        // this.$message({
        //   message: '取消编辑',
        //   type: 'info'
        // });
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
          console.log("我是" + size)
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        page = this.currentPage;
       console.log("我是页码" + this.currentPage)
        this.StatusList();
      },
       StatusList(){
    
        // i('.zInput').val()
        // ('.contactsInput').val()
       

          let _this = this;
          let URL = ServerUrl;
          var pageSize = this.pagesize,
            currentPage = this.currentPage,
            serverName = $('.zInput').val(),

            contactsInput = $('.contactsInput').val();

     if(this.querybut!=true){
           serverName="";
           contactsInput="";
         }





          var userparameter = {
            "contacts_name_or_phonenum": contactsInput,
            "enterprise_name": serverName,
            "page_number": currentPage - 1,
            "page_size": pageSize
          }

          getenterpriseinfos(userparameter).then(function (res) {

            if (res.status === 200 && res.data.result == "ok") {
              console.log("SSSSS" )
              var list = res.data.data.list;
              let totalall = res.data.data.page_total_items;
              _this.total = totalall;
              for (var i in list) {
                list[i].createtime = _this.timestampToTime(list[i].createtime)


              }
              _this.BoxStatus = list


            }
            else if (res.data.result == "error") {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });

//              console.log(res);

            }


          }).catch(function (error) {
            console.log(error);
          });

        
      },

      imgclicking(a, i) {

        this.medialist.splice(i, 1)


      },
      imgclickingedit(a, i) {

        this.medialistedit.splice(i, 1)


      },


      //移入事件
      loginglist(a, b) {

        if (a.toElement.children.length == 0) {
          return false

        } else {
          a.toElement.children[0].style.display = "inline-block"
        }


      },
      liimgshow(a, b) {

        if (a.target.children.length == 0) {
          return false

        } else {
          a.target.children[0].style.display = "none"
        }


      },


///监控资源分配新增开始19/7/11lkj

      nodeclick1(val) {
//        console.log("我是函数nodeclick1")

        this.monitorCode = val.area_code
//        console.log(this.monitorCode)

      },

      loadNode1(node, resolve) {
//         console.log(node, resolve)
        var param = {
          "area_code": 6501,
          "assist_server_id": this.serverid,
          "is_root": true,
          "is_security": true,
          "platform_id": 1
        }
//        console.log("loadNode1")
        var _this = this;
        var stringlist1 = this.toShort(this.Fid)
        //          console.log('是全国')
        if (stringlist1 == '00' && this.is_all == false) {

          this.is_all = true


          getresource_organizations(param)
            .then(function (res) {


              if (res.status == 200) {
//                console.log(11111111111)
                var list = res.data.data;


                if (list == undefined) {
                  _this.$message.error('此辅助服务器下无监控资源');

                }
                //  debugger
//                console.log(list)
                resolve(list);


                // console.log(_this.$refs.tree_monitor.$el.childNodes[0].innerText)
              }
            })
            .catch(res => {
              _this.$refs.tree_monitor.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
              // console.log(res)


              resolve([]);
            });
        } else if (stringlist1 == '00' && this.is_all == true) {
//          console.log('是全国后点击下面')
          param.area_code = node.data.area_code;
          param.platform_id = node.data.platform_id;
          param.is_root = false

          getresource_organizations(param)
            .then(function (res) {
//              console.log(res)

              if (res.status == 200) {
//                console.log(22222222)
                var list = res.data.data;
                //  debugger
//                console.log(list)
                resolve(list);
              }
            })
            .catch(res => {
              _this.$refs.tree_monitor.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
              resolve([]);
            });

        } else if(stringlist1 != '00' && this.is_all != true) {
          // console.log("不是全国的时候")
         ///监控资源分配不是全国是再次下拉

          var params = {
            "area_code": this.toShort(this.Fid),
            "assist_server_id": this.serverid,
//            "is_root": false,
//            "is_security": true,
//            "platform_id": 1
          }

          if (this.is_Children) {
            // console.log("监控资源分配不是全国是再次下拉")

            var code = this.toShort(this.Fid)
            param.area_code = node.data.area_code;
            param.platform_id = node.data.platform_id;
            param.is_root = false
            param.is_security = true


          }
          if(this.is_Children!=true){
            getresource_organization_paths(params)
              .then(function (res) {
                // console.log(res)
                _this.is_Children=true

                if (res.status == 200) {
                  // console.log(22222222)
//                var datalis={
//                  "result": "ok",
//                  "data": [
//                    {
//                      "platform_id": 1,
//                      "path": [
//                        {
//                          "area_code": "13",
//                          "name": "河北",
//                          "parent_code": "0",
//                          "platform_id": 1,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        },
//                        {
//                          "area_code": "1301",
//                          "name": "石家庄",
//                          "parent_code": "0",
//                          "platform_id": 1,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        }
//                      ]
//                    },
//                    {
//                      "platform_id": 2,
//                      "path": [
//                        {
//                          "area_code": "13",
//                          "name": "河北2",
//                          "parent_code": "0",
//                          "platform_id": 2,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        },
//                        {
//                          "area_code": "1301",
//                          "name": "石家庄",
//                          "parent_code": "0",
//                          "platform_id": 1,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        }
//                      ]
//                    }
//                  ]
//                }

                var list=[];
                  var ele=res.data.data

                  for (var t = 0; t < ele.length; t++) {
                    var lis=ele[t].path
                    console.log(lis)
                    console.log(lis.length)
                    console.log(lis[lis.length-1])
                    var par=lis[lis.length-1]
                     console.log(par)
                    list.push(par)
                    

                  }



                  // console.log(list)
                  resolve(list);
                }else{
                    _this.$refs.tree_monitoredit.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
                       resolve(list);
                }
              })
              .catch(res => {
                resolve([]);
                  _this.$refs.tree_monitoredit.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
              });
          }else {
            // console.log(111111111)
            getresource_organizations(param)
              .then(function (res) {
//              console.log(res)

                if (res.status == 200) {

                  var list = res.data.data;

                  resolve(list);
                }
              })
              .catch(res => {
                _this.$refs.tree_monitor.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
                resolve([]);
              });
          }


        }
      },
      //2019.7.11修改
      handleNodeClick1(data) {
//        console.log("我是函数handleNodeClick2")
//        console.log(data)
        this.clickTree = data;
      },
      //2019.7.11修改

      handleCheckChange1(data, checked) {
        console.log(data, checked)

        var regionlist = this.addenterprise.monitor_resource_organizations;
        var serverlist = {
          "region_name": data.name,
          "region_code": data.area_code,
          "region_full_code": "11|1101|110102",
          "region_full_name": "北京市|北京市|西城区",
          "platform_id": 1,
          "security": false
        }
//        var param = {
//          "ids": data.area_code,
//          "is_short_code": true,
//          "timestamp": 0
//
//        }
        var param = {
          "area_code": data.area_code,
          "assist_server_id": this.serverid,


        }
        var _this = this
        if (checked === true) {
          //拼取地址监控平台（唐古拉）中指定组织机构（区域）的父级组织机构（区域）路径
          getresource_organization_paths(param).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

//              console.log(res)
              var  serverpath=[]
              var  server=res.data.data
              server.forEach(element => {
                if(element.platform_id==data.platform_id){
                  serverpath=element.path
                }

              });
//              console.log(serverpath)
              var ids="";
              var names="";
              serverpath.forEach(function (ele, i) {

                if(i==0){
                  ids=ele.area_code
                  names=ele.name
                }else {
                  ids=ids+"|"+ele.area_code
                  names=names+"|"+ele.name
                }
              })
//              console.log(ids,names)
              serverlist.region_full_code = ids
              serverlist.region_full_name =names
              regionlist.push(serverlist)


            }


          }).catch(function (error) {

          });



        } else {

          regionlist.forEach(function (value, i) {
//            console.log(value);

            if (value.region_code === data.area_code)

              regionlist.splice(i, 1)
//            console.log("删除后");
//            console.log(regionlist);
//
          })

        }
        this.addenterprise.monitor_resource_organizations = regionlist;         console.log("终端");
        console.log(this.addenterprise.monitor_resource_organizations);


      },


//获取终端通讯录地区目录/7/11lkj

      nodeclick2(val) {


        this.monitorCode = val.area_code


      },

      loadNode2(node, resolve) {


//        console.log("loadNode2")
        var _this = this;
        var stringlist1 = this.toShort(this.Fid)

        var params = {}
        var flag=true


        if (this.terminal_all) {
//            console.log(node.data.area_code)

          params =
            {
              "assist_server_id": this.serverid,
              "parent_region_code": node.data.region_code
            }
//          console.log(params)
          if(node.data.unit_id!=undefined&&node.data.unit_id!="-1"){

            flag=false;
            var par={
              "assist_server_id": this.serverid,
              "unit_pid": node.data.unit_id
            }
            get_terminal_departs(par)
              .then(function (res) {


                if (res.status == 200) {
//              console.log(11111111111)
                  var list = res.data.data;

                  resolve(list);


                }
              })
              .catch(res => {
                resolve([]);
              });


          }else if(node.data.unit_id!=undefined&&node.data.unit_id=="-1") {

            flag=false;
             resolve([]);


          }else {
            flag=true
          }

        } else {
          // console.log('是第一次加载终端通讯录')
          this.terminal_all = true
          params =
            {
              "assist_server_id": this.serverid,
              "parent_region_code": this.Fid
            }




        }

    if(flag){
      get_terminal_regions_and_departs(params)
        .then(function (res) {
//            console.log(res)

          if (res.status == 200) {
//              console.log(11111111111)
            var list = res.data.data;
            var datalist = []
            var terminal1 = list.direct_terminal_departs
            var terminal2 = list.sub_terminal_regions
//              console.log(terminal1)
//              console.log(terminal2)
            if (terminal1.length == 0) {

              datalist = terminal2

            } else if (terminal2.length == 0) {

              datalist = terminal1

            } else if (terminal2.length != 0 && terminal1.length != 0) {

              datalist = terminal1
              //遍历
              terminal2.forEach(function (value, i) {

                datalist.push(value)

              })
//                console.log(datalist)


            } else if (terminal2 === [] && terminal1 === []) {
//                console.log("第4层")
              var datalist = []
            }
          //    datalist.forEach(function (value, i) {

          //  datalist[i].class="is-indeterminate"

          //     })
            
            resolve(datalist);


          }
        })
        .catch(res => {
          resolve([]);
        });

    }

      },
      //2019.7.11修改
      handleNodeClick2(data) {
//        console.log("我是函数handleNodeClick2")
//        console.log(data)
        this.clickTree = data;
      },
      changecurrent(data,data2){
      //  console.log(data,data2)
      },
     chechange(data,data2){
      //  console.log(data,data2)
      },
      handleCheckChange2(data, checked,data1) {

      // console.log(arr)

        console.log(data, checked,data1)
      //   console.log(data.$treeNodeId)


      
        var _this = this

        var terminallist =this.addenterprise.terminal_regions;

        var list=data.unit_name;
        console.log(list);
         var terminal_regions = {}

        if(list===undefined){
            //  console.log("地区")
          terminal_regions={
            
          "region_name": data.name,
        
          "region_code": data.region_code,
          "region_full_code": "",
          "region_full_name": "",
          "unique_code": data.unique_code,
         
          "id": data.id,
          }



        }else{
          //  console.log("单位")
            terminal_regions={
            
          "region_code": data.region_code,
          "region_full_code": "",
          "region_full_name": "",
          "unique_code": data.unique_code,
          "unit_pid": data.unit_pid,
          "unit_id": data.unit_id,
          "unit_name": data.unit_name,
          "id": data.id,
          }

        }
        
        var llist = {
          "id": data.region_code,
          "timestamp": 0
        }
        //如果是个勾选操作的话
        if (checked) {
          getRegiondetail(llist).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {
              terminal_regions.region_full_code = res.data.data.region_details[0].ids;
              terminal_regions.region_full_name = res.data.data.region_details[0].names;

//              _this.addenterprise.terminal_regions.push(terminal_regions)


           
              terminallist.push(terminal_regions);
           
                    console.log(terminallist);



              //  console.log(terminallist)
              _this.addenterprise.terminal_regions = terminallist
            }
            if (res.data.result == "error") {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });

            }


          }).catch(function (error) {
            // console.log(error);
          });

        } else {
          terminallist.forEach(function (value, i) {
//            console.log(value);
            if (value.region_code === data.region_code){
              terminallist.splice( i,1)
//              console.log("删除后");
//              console.log(terminallist);

            }


          })


        }



      },
      //2019.7.11修改

///监控资源编辑开始19/7/11lkj

      nodeclick3(val) {

//        console.log("我是函数nodeclick1")

        this.monitorCode = val.area_code
//        console.log(this.monitorCode)

      },

      loadNode3(node, resolve) {
//        console.log(node, resolve)
        var param = {
          "area_code": 6501,
          "assist_server_id": this.serverid,
          "is_root": true,
          "is_security": true,
          "platform_id": 1
        }
//        console.log("编辑loadNode3")

        var _this = this;

        var stringlist1 = this.toShort(this.Fid)
//        console.log(this.Fid)
        if (stringlist1 == '00' && this.is_all == false) {
          // console.log('是全国')
          this.is_all = true


          getresource_organizations(param)
            .then(function (res) {
//              console.log(res)
              if (res.status == 200) {
//                console.log(11111111111)
                var list = res.data.data;
             console.log(_this.allmonitoreditId)    
                _this.$nextTick(() => {
                  _this.$refs.tree_monitoredit.setCheckedNodes(_this.allmonitoreditId);
                });
                resolve(list);
              }
            })
            .catch(res => {
              resolve([]);
            });
        } else if (stringlist1 == '00' && this.is_all == true) {
          // console.log('是全国后点击下面')
          param.area_code = node.data.area_code;
          param.is_root = false

          getresource_organizations(param)
            .then(function (res) {
//              console.log(res)
              if (res.status == 200) {
//
                var list = res.data.data;
                //  debugger
                // console.log(_this.allmonitoreditId)
                _this.$nextTick(() => {
                  _this.$refs.tree_monitoredit.setCheckedNodes(_this.allmonitoreditId);
                });
                resolve(list);
              }
            })
            .catch(res => {
              _this.$refs.tree_monitoredit.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
              resolve([]);
            });

        }else if(stringlist1 != '00' && this.is_all != true) {
          // console.log("不是全国的时候")
          ///监控资源分配不是全国是再次下拉

          var params = {
            "area_code": this.toShort(this.Fid),
            "assist_server_id": this.serverid,
//            "is_root": false,
//            "is_security": true,
//            "platform_id": 1
          }

          if (this.is_Children) {
            // console.log("监控资源分配不是全国是再次下拉")

            var code = this.toShort(this.Fid)
            param.area_code = node.data.area_code;
            param.platform_id = node.data.platform_id;
            param.is_root = false
            param.is_security = true


          }
          if(this.is_Children!=true){
            getresource_organization_paths(params)
              .then(function (res) {
                // console.log(res)
                _this.is_Children=true

                if (res.status == 200) {
                  // console.log(22222222)
//                var datalis={
//                  "result": "ok",
//                  "data": [
//                    {
//                      "platform_id": 1,
//                      "path": [
//                        {
//                          "area_code": "13",
//                          "name": "河北",
//                          "parent_code": "0",
//                          "platform_id": 1,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        },
//                        {
//                          "area_code": "1301",
//                          "name": "石家庄",
//                          "parent_code": "0",
//                          "platform_id": 1,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        }
//                      ]
//                    },
//                    {
//                      "platform_id": 2,
//                      "path": [
//                        {
//                          "area_code": "13",
//                          "name": "河北2",
//                          "parent_code": "0",
//                          "platform_id": 2,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        },
//                        {
//                          "area_code": "1301",
//                          "name": "石家庄",
//                          "parent_code": "0",
//                          "platform_id": 1,
//                          "total_count": 5,
//                          "online_count": 4,
//                          "fault_count": 0,
//                          "health_count": 4,
//                          "secrecy_count": 0
//                        }
//                      ]
//                    }
//                  ]
//                }

                  var list = [];
                  var ele=res.data.data

                  for (var t = 0; t < ele.length; t++) {
                    // console.log(ele[t])
                    var par=ele[t].path[ele[t].path.length - 1]

                    list.push(par)

                  }



                  // console.log(list)
                  // console.log(_this.allmonitoreditId)
                  _this.$nextTick(() => {
                    _this.$refs.tree_monitoredit.setCheckedNodes(_this.allmonitoreditId);
                  });
                  resolve(list);
                }else{
                      _this.$refs.tree_monitoredit.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
                       resolve(list);
                }
              })
              .catch(res => {
                resolve([]);
                _this.$refs.tree_monitoredit.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
              });
          }else {
            // console.log(111111111)
            getresource_organizations(param)
              .then(function (res) {
//              console.log(res)

                if (res.status == 200) {

                  var list = res.data.data;
                  // console.log(_this.allmonitoreditId)
                  _this.$nextTick(() => {
                    _this.$refs.tree_monitoredit.setCheckedNodes(_this.allmonitoreditId);
                  });
                  resolve(list);
                }
              })
              .catch(res => {
                resolve([]);
                _this.$refs.tree_monitoredit.$el.childNodes[0].innerText="监控资源系统维护中，暂不能分配资源，请稍后再试。";
              });
          }


        }
      },
      //2019.7.11修改
      handleNodeClick3(data) {
        this.clickTree = data;
      },
      //2019.7.11修改
      handleCheckChange3(data, checked, indeterminate) {

         console.log(data,checked)
        var regionlist3 = this.editlist.monitor_resource_organizations
        var serverlist= {
          "region_name": data.name,
          "region_code": data.area_code,
          "region_full_code": "11|1101|110102",
          "region_full_name": "北京市|北京市|西城区",
          "platform_id": 1,
          "security": false
        }
        var param = {
          "area_code": data.area_code,
          "assist_server_id": this.serverid,

        }
        var _this = this
        if (checked === true) {

          getresource_organization_paths(param).then(function (res) {
            // console.log(res.data.data)

            if (res.status === 200 && res.data.result == "ok") {
              var  serverpath=[]
              var  server=res.data.data
              server.forEach(element => {
                if(element.platform_id==data.platform_id){
                  serverpath=element.path
                }

              });
//              console.log(serverpath)
              var ids="";
              var names="";
              serverpath.forEach(function (ele, i) {

                if(i==0){
                  ids=ele.area_code
                  names=ele.name
                }else {
                  ids=ids+"|"+ele.area_code
                  names=names+"|"+ele.name
                }
              })
              serverlist.region_full_code =ids
              serverlist.region_full_name = names
              regionlist3.push(serverlist)

            }
            if (res.data.result == "error") {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });

            }


          }).catch(function (error) {
            console.log(error);
          });


        } else {

          regionlist3.forEach(function (value, i) {

            if (value.region_code === data.area_code){
              regionlist3.splice( i,1)
            }


//
          })

        }
        this.editlist.monitor_resource_organizations = regionlist3


      },


//编辑时候获取终端通讯录地区目录/7/11lkj

      nodeclick4(val) {


        this.monitorCode = val.area_code


      },

      loadNode4(node, resolve) {

        var _this = this;
        var stringlist1 = this.toShort(this.Fid)

        var params = {}
        var flag=true

        if (this.terminal_all) {
//                  console.log(node.data.area_code)
                  console.log('加载下一级终端通讯录')
                  params =
                    {
                      "assist_server_id": this.serverid,
                      "parent_region_code": node.data.region_code
                    }
        //          console.log(params)
              if(node.data.unit_id!=undefined&&node.data.unit_id!="-1"){
                    // console.log("unit_id")
                    flag=false;
                    var par={
                      "assist_server_id": this.serverid,
                      "unit_pid": node.data.unit_id
                    }
                    get_terminal_departs(par)
                      .then(function (res) {
        //            console.log(res)

                        if (res.status == 200) {
                    console.log(11111111111)
                      console.log(_this.allterminalId)
                          var list = res.data.data;
          _this.$nextTick(() => {
                          _this.$refs.tree_terminaledit.setCheckedNodes(_this.allterminalId);
                        });
                          resolve(list);


                        }
                      })
                      .catch(res => {
                        resolve([]);
                      });


                }else if(node.data.unit_id!=undefined&&node.data.unit_id=="-1") {
                    // console.log(node.data.unit_id)
                    flag=false;
                    resolve([]);


                  }else {
                    flag=true
                  }

        } else {
          console.log('是第一次加载终端通讯录')
          this.terminal_all = true
          params =
            {
              "assist_server_id": this.serverid,
              "parent_region_code": this.Fid
            }




        }
        if(flag){
          get_terminal_regions_and_departs(params)
            .then(function (res) {


              if (res.status == 200) {

                var list = res.data.data;
                var datalist = []
                var terminal1 = list.direct_terminal_departs
                var terminal2 = list.sub_terminal_regions

                if (terminal1.length == 0) {

                  datalist = terminal2

                } else if (terminal2.length == 0) {

                  datalist = terminal1

                } else if (terminal2.length != 0 && terminal1.length != 0) {

                  datalist = terminal1
                  //遍历
                  terminal2.forEach(function (value, i) {

                    datalist.push(value)

                  })



                } else if (terminal2 === [] && terminal1 === []) {

                  var datalist = []
                }
                    console.log( '这里')
                    console.log(_this.allterminalId)
                _this.$nextTick(() => {
                  _this.$refs.tree_terminaledit.setCheckedNodes(_this.allterminalId);
                });
                resolve(datalist);


              }
            })
            .catch(res => {
              resolve([]);
            });
          }

      },
      //2019.7.11修改
      handleNodeClick4(data) {

        this.clickTree = data;
      },
      handleCheckChange4(data, checked) {
         console.log(data, checked);
        var _this = this
        var terminallist4 = this.editlist.terminal_regions

        var list=data.unit_name;
        console.log(list);
         var terminal_regions = {}

        if(list===undefined){
          // console.log("地区")
          terminal_regions={
            
          "region_name": data.name,
          // "parent_region_code": data.parent_region_code,
          "region_code": data.region_code,
          "region_full_code": "",
          "region_full_name": "",
          "unique_code": data.unique_code,
          // "unit_pid": data.unit_pid,
          // "unit_name": data.unit_name,
          "id": data.id,
          }



        }else{
              // console.log("单位")
            terminal_regions={
            
          // "region_name": data.name,
          // "parent_region_code": data.parent_region_code,
          "region_code": data.region_code,
          "region_full_code": "",
          "region_full_name": "",
          "unique_code": data.unique_code,
          "unit_pid": data.unit_pid,
           "unit_id": data.unit_id,
          "unit_name": data.unit_name,
          "id": data.id,
          }

        }
        var llist = {
          "id": data.region_code,
          "timestamp": 0
        }
        //如果是个勾选操作的话
        if (checked) {
          getRegiondetail(llist).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {
              terminal_regions.region_full_code = res.data.data.region_details[0].ids;
              terminal_regions.region_full_name = res.data.data.region_details[0].names;

//              _this.addenterprise.terminal_regions.push(terminal_regions)
              terminallist4.push(terminal_regions)



            }
            if (res.data.result == "error") {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });

            }


          }).catch(function (error) {
            console.log(error);
          });

        } else {
          terminallist4.forEach(function (value, i) {

            if (value.region_code === data.region_code){
              terminallist4.splice(i, 1)



            }


          })


        }
        this.editlist.terminal_regions = terminallist4



      },
      removing(idlist) {
        var obj = {};

        for (var i = 0; i < idlist.length; i++) {
          var cur = idlist[i]; // 100 100 900.....
          if (obj[cur] === cur) {
            idlist[i] = idlist[idlist.length - 1];//对
            //ary[i]是对象的属性名
            //=ary[ary.length-1]
            /*ary[1]=2;  改变数组中索引为1的值
            cur=2; 将变量的值重新定义
            */
            //cur=ary[ary.length-1];//错
            //cur和ary[i]是什么关系？
            //cur代表的是数组中的属性值，是一个确定的值，而我们此时是需要将数组的末尾项给到数组的当前项
            //替换当前项
            idlist.length--;
            i--;
          }
          obj[cur] = cur;
        }
        return idlist

      },
      removallist(idlist) {
        var obj = {};

        for (var i = 0; i < idlist.length; i++) {
          var cur = idlist[i].region_name; // 100 100 900.....
          if (obj[cur].region_name === cur) {
            idlist[i] = idlist[idlist.length - 1];//对
            //ary[i]是对象的属性名
            //=ary[ary.length-1]
            /*ary[1]=2;  改变数组中索引为1的值
            cur=2; 将变量的值重新定义
            */
            //cur=ary[ary.length-1];//错
            //cur和ary[i]是什么关系？
            //cur代表的是数组中的属性值，是一个确定的值，而我们此时是需要将数组的末尾项给到数组的当前项
            //替换当前项
            idlist.length--;
            i--;
          }
          obj[cur] = cur;
        }
        return idlist

      },


//  * 0:L1:province:第1～2位，为省级代码;(2)
// 	 * 1:L2:district:第3～4 位，为地级代码；(2)
// 	 * 2:L3:county:第5～6位，为县级代码；(2)
// 	 * 3:L4:township:第7～9位，为乡级代码；(3)
// 	 * 4:L5:village:第10～12位，为村级代码。(3)
// 	截取有效非零有效数字 */
    
      splitCode(code) {
        var codes = ["00", "00", "00", "000", "000"];
        if (!code) {
          return codes;
        }

        if (code.length < 12) {
          code += "000000000000";
          code = code.substring(0, 12);
        }
        var pos = 0;
        for (var i = 0, l = codes.length; i < l; i++) {
          var len = codes[i].length;
          codes[i] = code.substring(pos, pos + len);
          pos += len;
        }
        return codes;
      },
      //  
      parentCode(code) {
        var codes = this.splitCode(code);
        var pcode = "";
        for (var i = 0; i < codes.length - 1; i++) {
          if (codes[i + 1] == "00" || codes[i + 1] == "000") {
            break;
          }
          pcode += codes[i];
        }
        pcode += "000000000000";
        return pcode.substring(0, code.length);
      },
      isSub(pcode, subcode) {
        var _pcode = this.toShort(pcode);
        return _pcode == subcode.substring(0, _pcode.length);
      },
      toShort(code) {
        if (!code) {
          return null;
        }
        var codes = this.splitCode(code);
        var shortCode = "";
        for (var i = 0, len = codes.length; i < len; i++) {
          shortCode += codes[i];
          if (i + 1 < len && (codes[i + 1] == "00" || codes[i + 1] == "000")) {
            break;
          }
        }
        return shortCode;
      },


    },
    updated() {
      var editmodHei = $('#enterpriseEditModel .el-dialog').height();
      $('#enterpriseEditModel .el-dialog').css('marginTop', -(editmodHei / 2));
      $('#enterpriseEditModel .el-dialog').css('marginBottom', 0);
      var addmodHei1 = $('#menuAddModel .el-dialog').height();
      $('#menuAddModel .el-dialog').css('marginTop', -(addmodHei1 / 2));
      $('#menuAddModel .el-dialog').css('marginBottom', 0);

      var addmodHei2 = $('#menucasualModel .el-dialog').height();
      $('#menucasualModel .el-dialog').css('marginTop', -(addmodHei2 / 2));
      $('#menucasualModel .el-dialog').css('marginBottom', 0);
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
  #activeCity_box, #activeCity_box1 {
    position: relative
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
  .blockUrl{
      width: 105% ;
  }
.blockUrl label{
   width: 15% !important;
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

  .zInput, .contactsInput {
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

  #menuAddModel .SelectTitle,#enterpriseEditModel .SelectTitle {
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

  .corporate_name {
    width: 100%;
  }

  #menuAddModel {
    overflow: hidden;
  }

  #menuAddModel #activeCity {
    z-index: 888;
    width: 400px;
    background-color: #354166;
    border: 2px solid #3b4872;
    height: 300px;

  }

  #menuAddModel #showtreebox1,
  #menuAddModel #showtreebox2,
  #menuAddModel #showtreebox3 {

    top: 36px;
    right: 60px;
    position: absolute;
    width: 380px;
    height: 440px;
    z-index: 99;
    background-color: #354166;
    border: 2px #3b4872 solid;
  }
  #enterpriseEditModel .showtreeboxzTreerow{

    top: 36px;
    right: 60px;
    position: absolute;
    width: 380px;
    height: 440px;
    z-index: 99;
    background-color: #354166;
    border: 2px #3b4872 solid;
  }

  #menuAddModel .textarea .el-form-item__label,
  #menucasualModel .textarea .el-form-item__label,
  #enterpriseEditModel .textarea .el-form-item__label {
    height: 160px;
    margin-top: 2px;
    background: #1b274c;
  }

  #menuAddModel .textarea .el-textarea__inner,
  #menucasualModel .textarea .el-textarea__inner,
  #enterpriseEditModel .textarea .el-textarea__inner {
    height: 160px;
  }

  @import url("../media/lkjmedia.css");
  #menucasualModel .el-dialog,
  #enterpriseEditModel .el-dialog,
  #menuAddModel .el-dialog {
    width: 1100px;
    top: 50%;
  }

  #enterpriseEditModel .block .el-form-item__label,
  #menucasualModel .block .el-form-item__label,
  #menucasualModel .block .el-input__inner,
  #enterpriseEditModel .block .el-input__inner {
    height: 36px;
    margin: 2px 0;
    line-height: 36px;
    border: 1px #3b4872 solid;
  }

  #enterpriseEditModel .block .el-form-item__label,
  #menucasualModel .block .el-form-item__label,
  #menuAddModel .block .el-form-item__label {
    background: #1b274c;
  }

  #menuAddModel .block .el-form-item__label,
  #enterpriseEditModel .block .el-form-item__label,
  #enterpriseEditModel .block .el-input__inner,
  #menuAddModel .block .el-input__inner {
    height: 36px;
    margin: 2px 0;
    line-height: 36px;
    border: 1px #3b4872 solid;
  }

  #menuAddModel .blockUrl .el-form-item__label,
  #enterpriseEditModel .blockUrl .el-form-item__label
  /* #enterpriseEditModel .blockUrl .el-input__inner, */
  {
      width: 14% !important;
    height: 36px;
    margin: 2px 0;
    line-height: 36px;
    border: 1px #3b4872 solid;
  }

  #menucasualModel .el-dialog__body,
  #enterpriseEditModel .el-dialog__body,
  #menuAddModel .el-dialog__body {
    padding: 24px 24px 18px;
  }


  #enterpriseEditModel #pane-first .el-checkbox,
  #menuAddModel #pane-first .el-checkbox {
    float: left;
    width: 20%;
    margin-left: 0px;
  }

  #menucasualModel .el-form-item,
  #enterpriseEditModel .el-form-item,
  #enterpriseEditModel .el-form-item,
  #menuAddModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #menucasualModel .userBtn .el-form-item,
  #enterpriseEditModel .userBtn .el-form-item,
  #menuAddModel .userBtn .el-form-item {
    width: 100%;
  }

  #enterpriseEditModel .el-textarea,
  #menucasualModel .el-textarea,
  #menuAddModel .el-textarea {
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

  #menuAddModel .blockUrl .el-form-item__content,
  #enterpriseEditModel .blockUrl .el-form-item__content {
      margin-left: 14% !important;
    line-height: 32px;
  }
  #menucasualModel .block .el-form-item__content,
  #menuAddModel .block .el-form-item__content,
  #enterpriseEditModel .block .el-form-item__content {
    line-height: 32px;
  }
</style>
<style lang="scss">

  #tab-Country, #tab-province, #tab-city, #tab-county {
    width: 78px;
    text-align: center;
  }

  #menuAddModel, #enterpriseEditModel {
    .monitor_left, .monitor_right {
      width: 50%;
      float: left;
      height: 30px;

    }
    .monitor_right_span {
      float: right;
    }

    .TerminaLeft, .TerminaRight {
      background-color: #1b274c;

      /*float: left;*/
      width: 300px;
      height: 380px;
      overflow-y: auto;
    }
    .second {
      .serveradd {
        float: left;
        width: 50%;
        height: 30px;
      }
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
      display: block;
      img {
        margin-top: 2px;
      }
      margin-left: 20px;
      display: -webkit-inline-box;
      display: inline-block;

    }
    #mediatree, #medialist {
      ul li {
        z-index: 88;
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
    #mediatree1, #mediatree2, #medialist1, #medialist2, #medialist3 {
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

    #showtreebox1, #showtreebox2 {
      #showtreeboxdisplaybox {
        /*width: 380px;*/
        height: 440px;
      }
      #pane-province, #pane-city, #pane-county {
        height: 380px;
      }

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
