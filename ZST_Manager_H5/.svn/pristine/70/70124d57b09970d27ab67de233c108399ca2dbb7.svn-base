<template>
  <div class="mRight" id="versionBox">
    <div class="mRightTwo">
      <div class="zForm">
        <span>版本名称</span><input v-model="zInput" class="zInput" type="text" placeholder=""/>
        <span>操作系统</span>
        <div class="zSelect">
          <el-select @change="clickSelect" v-model="value" class="zgroup" placeholder="--请选择--">
            <el-option v-for="item in options_system" :key="item.key" :label="item.value"
                       :value="item.value"></el-option>
          </el-select>
        </div>
        <span class="Selectfont">强制升级</span>
        <div class="zSelect">
          <el-select @change="clickSelect2" v-model="value2" class="zgroup" placeholder="--请选择--">
            <el-option v-for="item in options_enabled" :key="item.key" :label="item.value"
                       :value="item.value"></el-option>
          </el-select>
        </div>
        <span class="Selectfont">版本类型</span>
        <div class="zSelect">
          <el-select @change="clickSelect3" v-model="value3" class="zgroup" placeholder="--请选择--">
            <el-option v-for="item in options_version" :key="item.key" :label="item.value"
                       :value="item.value"></el-option>
          </el-select>
        </div>
        <button @click="queryVersionList(false)">查询</button>
        <button @click="getVersionList(true)">全部</button>
        <span class="btnRight"> <button @click="addUp">新增</button></span>
      </div>
      <div class="zTable">
        <div class="elTable">
          <vue-scroll :ops="ops" ref="vs">
            <div class="scrollbox">
              <el-table ref="multipleTable"
                        :data="tableData3" style="width: 100%">
                <el-table-column type="selection" ></el-table-column>
                                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="version_name" label="版本名称"></el-table-column>
                <el-table-column prop="operating_system" label="操作系统"></el-table-column>

                <el-table-column prop="createtime" label="强制升级">
                  <template slot-scope="scope">
                    <span v-if="scope.row.enabled === true">是</span>
                    <span v-else>否</span>
                  </template>
                </el-table-column>
                <el-table-column prop="force_upgrade_time" label="强制时间">

                </el-table-column>

                <el-table-column prop="usable_range" label="版本类型">
                  <template slot-scope="scope">
                    <span v-if="scope.row.usable_range === 'PUBLIC'">公共</span>
                    <span v-else>个人</span>
                  </template>
                </el-table-column>
                <el-table-column prop="createtime" label="上传时间">

                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <a href="javascript:;" class="ml5"  v-if="scope.row.is_new_public == true">
                      <!-- <span  @click="edit(scope.row)">编辑</span> -->
                      <img @click="appedit(scope.row)" src="../../assets/edit2.png" alt="">
                    </a>
                     <a href="javascript:;" class="ml5" @click="appdetails(scope.row)"   v-else>
                       <span >详情</span>
                      <!-- <span  @click="edit(scope.row)">编辑</span> -->
                      <img src="" alt="">
                    </a>
                    <a href="javascript:;" class="ml5" @click="butclick(scope.row)"  v-if="scope.row.is_new_public == true">

                      <button :disabled=isbutton  class="butclick" v-if="scope.row.enabled == true">启用</button>
                      <button :disabled=isbutton  class="butclick" v-else>禁用</button>
                      <!-- <img @click="moveDown(scope.row)" class="moveIco" src="../../assets/up.png" alt=""> -->

                    </a>

                    <a href="javascript:;" class="ml5" @click="deletelist(scope.row)">
                      <span >删除</span>
                      <!-- <img @click="moveDown(scope.row)" class="moveIco" src="../../assets/up.png" alt=""> -->

                    </a>
                  </template>
                </el-table-column>

              </el-table>

            </div>
          </vue-scroll>
        </div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page.sync="pagenumber" :page-size="pagesize" layout="total, prev, pager, next, jumper"
                       :total="total"></el-pagination>
      </div>
    </div>


    <div id="userAddModel">
      <el-dialog :close-on-click-modal="false" title="应用升级 - 新增" :visible.sync="dialogTableVisibleadd">
        <el-form :model="add" ref="add" label-width="38%" class="demo-ruleForm">
          <div class="formTable">
            <div class="block">
              <el-form-item label="上传方式：" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-select v-model="add.uploadType" @change="getval" >
                  <el-option v-for="item in options" :key="item.index" :label="item.value"
                             :value="item.key"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!-- <div class="block filePath">
                            <el-form-item label="上传目录：" :rules="[{ required: true, message: ' '}]" prop="name">
                                <el-input v-model="add.UploadPath" maxlength="250" readonly></el-input>
                            </el-form-item>
                        </div> -->
            <div class="block UploadPath" v-show="UploadPathtype">
              <el-form-item label="文件地址" :rules="[{ required: true, message: ' '}]" prop="filePath">
                <el-input v-model="add.FilePath" maxlength="250"></el-input>
              </el-form-item>
            </div>
            <div class="upload upload2">
              <el-form-item label="上传文件：" :rules="[{ required: true, message: ' '}]" prop="name">
                <div class="uploadBg">
                  <div class="filegroup">
                    <form id="uploadForm" enctype="multipart/form-data" style="width:45%; margin-top: 0;">
                      <input type="file" id="files" name="files" @change="getFile" placeholder="file" multiple   accept=".apk,.ipa ">
                      <span class="btn3">请选择文件</span>
                      <input type="text" id="file" name="file" readonly multiple  accept=".apk,.ipa ">
                      <span class="sccess">√</span>
                    </form>
                    <button type="button" class="submit2" value="上传" @click="getUploadVideo">上传</button>
                    <!-- <el-progress :percentage="percentage" status="success"></el-progress> -->
                  </div>
                </div>
              </el-form-item>
            </div>
            <div class="block">
              <el-form-item label="版本名称" :rules="[{ required: true, message: ' '}]" prop="version_name" >
                <el-input v-model="add.version_name" maxlength="50"  placeholder="--请输入版本名称--"></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../as  sets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
            </div>
             <div class="block">
              <el-form-item label="版本号：" :rules="[{ required: true, message: ' '}]" prop="version_code" >
                <el-input v-model="add.version_code" maxlength="50"  placeholder="--请输入版本号--"></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../assets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
            </div>
            <div class="block">
              <el-form-item label="操作系统" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-select v-model="add.operating_system" @change="geoperating_system" placeholder="--请选择--">
                  <el-option v-for="item in options_system" :key="item.index" :label="item.value"
                             :value="item"></el-option>
                </el-select>
              </el-form-item>
            </div>


            <div class="block">
              <el-form-item label="强制升级" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-radio-group v-model="enabled" @change="enabledlick">


                  <el-radio label="0">是</el-radio>
                  <el-radio label="1">否</el-radio>
                </el-radio-group>


              </el-form-item>
            </div>
            <div class="textarealist " v-show="istimeshow">
              <div class="formbox">

                <el-form-item label="强制时间" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="name">
                  <div class="formbox timetab">
                    <el-radio-group v-model="ptime" @change="timeclick">


                      <el-radio label="promptly">立即</el-radio>
                      <el-radio label="time">截至日期</el-radio>
                    </el-radio-group>
                    <div class="timeBox">

                      <el-date-picker :disabled=disabled v-model="startTime" type="date" @change="newtimeClick"
                                      format="yyyy/MM/dd" @onPick="newtimeClick1" value-format="timestamp"
                                      placeholder="开始日期"></el-date-picker>


                    </div>
                  </div>


                </el-form-item>

              </div>
            </div>

            <div class="textarealist1">
              <div class="formbox">

                <el-form-item label="版本类型" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="name">
                  <div class="formbox">
                    <el-radio-group v-model="usable" @change="usableclick">


                      <el-radio label="INDIVIDUAL">个人</el-radio>
                      <el-radio label="PUBLIC">公共</el-radio>
                    </el-radio-group>
                  </div>

                </el-form-item>

              </div>
            </div>
            <div class="textarea" v-show="isusers">
              <div class="formbox">


                <el-form-item label="预览用户" label-width="19%" :rules="[{ required: true, message: ' '}]">
                  <el-input type="textarea" v-model="add.associated_users" resize="none" maxlength="1000"
                            placeholder="请输入预览用户手机号，使用 ；隔开"></el-input>
                </el-form-item>

              </div>
            </div>
            <div class="textarea">
              <div class="formbox">


                <el-form-item label="版本更新说明" label-width="19%" :rules="[{ required: true, message: ' '}]">
                  <el-input type="textarea" v-model="add.Remark" resize="none" maxlength="1000"></el-input>
                </el-form-item>

              </div>
            </div>
          </div>
          <div class="userBtn2">
            <el-form-item>
              <el-button type="primary" :disabled="isbutton"  @click="addSubmit">保存</el-button>
              <el-button @click="addCancel">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>
    <div id="userEditModel">
      <el-dialog :close-on-click-modal="false" title="应用升级 - 编辑" :visible.sync="dialogTableVisibleedit">
        <el-form :model="edit" ref="add" label-width="38%" class="demo-ruleForm">
          <div class="formTable">
            <div class="block">
              <el-form-item label="版本名称" :rules="[{ required: true, message: ' '}]" prop="version_name">
                <el-input v-model="edit.version_name" maxlength="50"  :disabled=isdisabled></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../assets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
            </div>
            <div class="block">
              <el-form-item label="版本号：" :rules="[{ required: true, message: ' '}]" prop="version_code">
                <el-input v-model="edit.version_code" maxlength="50"  :disabled=isdisabled></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../assets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
            </div>
            <div class="block">
              <el-form-item label="操作系统" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-select v-model="edit.operating_system"  :disabled=isdisabled  @change="geoperating_system" placeholder="--请选择--">
                  <el-option v-for="item in options_system" :key="item.index" :label="item.value"
                             :value="item"></el-option>
                </el-select>
              </el-form-item>
            </div>

            <div class="block">
              <el-form-item label="上传方式：" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-select v-model="edit.uploadType" :disabled=isdisabled  @change="getval" placeholder="--请选择--">
                  <el-option  v-for="item in options" :key="item.index" :label="item.value"
                              :value="item.key"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!-- <div class="block filePath">
                            <el-form-item label="上传目录：" :rules="[{ required: true, message: ' '}]" prop="name">
                                <el-input v-model="add.UploadPath" maxlength="250" readonly></el-input>
                            </el-form-item>
                        </div> -->

            <div class="textarealist1">
              <div class="formbox UploadPath">

                <el-form-item label="文件地址" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="filePath">
                  <el-input :disabled=isdisabled v-model="edit.FilePath" maxlength="250"></el-input>
                </el-form-item>
              </div>
            </div>

            <div class="block">
              <el-form-item label="强制升级" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-radio-group v-model="enabled_edit" @change="enabledlick_edit">


                  <el-radio label="0">是</el-radio>
                  <el-radio label="1">否</el-radio>
                </el-radio-group>


              </el-form-item>
            </div>
            <div class="textarealist " v-show="istimeshow_edit">
              <div class="formbox">

                <el-form-item label="强制时间" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="name">
                  <div class="formbox">
                    <el-radio-group v-model="ptime_edit" @change="timeclick_edit">


                      <el-radio label="promptly">立即</el-radio>
                      <el-radio label="time">截至日期</el-radio>
                    </el-radio-group>
                    <div class="timeBox">

                      <el-date-picker :disabled=disabled v-model="startTime_edit" type="date" @change="newtimeClick"
                                      format="yyyy/MM/dd" @onPick="newtimeClick1" value-format="timestamp"
                                      placeholder="开始日期"></el-date-picker>


                    </div>
                  </div>


                </el-form-item>

              </div>
            </div>

            <div class="textarealist1">
              <div class="formbox">

                <el-form-item label="版本类型" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="name">
                  <div class="formbox">
                    <el-radio-group v-model="edit.usable_range" @change="usableclick_edit">


                      <el-radio label="INDIVIDUAL">个人</el-radio>
                      <el-radio label="PUBLIC">公共</el-radio>
                    </el-radio-group>
                  </div>

                </el-form-item>

              </div>
            </div>
            <div class="textarea" v-show="isusers_edit">
              <div class="formbox">


                <el-form-item label="预览用户" label-width="19%" :rules="[{ required: true, message: ' '}]">
                  <el-input type="textarea" v-model="edit.associated_users" resize="none" maxlength="1000"
                            placeholder="请输入预览用户手机号，使用 ；隔开"></el-input>
                </el-form-item>

              </div>
            </div>
            <div class="textarea">
              <div class="formbox">


                <el-form-item label="版本更新说明" label-width="19%" :rules="[{ required: true, message: ' '}]">
                  <el-input type="textarea" v-model="edit.upgrade_instructions" resize="none" maxlength="1000"></el-input>
                </el-form-item>

              </div>
            </div>
          </div>
          <div class="userBtn2">
            <el-form-item>
              <el-button type="primary" @click="appeditbut">保存</el-button>
              <el-button @click="appeditCancel">取消</el-button>
            </el-form-item>
          </div>
        </el-form>
      </el-dialog>
    </div>

    <div id="userdetailsModel">
      <el-dialog :close-on-click-modal="false" title="应用升级 - 详情" :visible.sync="dialogTabledetails">
        <el-form :model="edit" ref="add" label-width="38%" class="demo-ruleForm">
          <div class="formTable">
            <div class="block">
              <el-form-item label="版本名称" :rules="[{ required: true, message: ' '}]" prop="version_name">
                <el-input v-model="edit.version_name" maxlength="50"  :disabled=isdisabled></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../assets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
            </div>
            <div class="block">
              <el-form-item label="版本号：" :rules="[{ required: true, message: ' '}]" prop="version_code">
                <el-input v-model="edit.version_code" maxlength="50"  :disabled=isdisabled></el-input>
              </el-form-item>
              <!-- <div class="infoMsg">
                                <img src="../../assets/info.png"> -->
              <!-- <span>根据需要修改密码，留空不修改密码</span> -->
              <!-- </div> -->
            </div>
            <div class="block">
              <el-form-item label="操作系统" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-select v-model="edit.operating_system"  :disabled=isdisabled  @change="geoperating_system" placeholder="--请选择--">
                  <el-option v-for="item in options_system" :key="item.index" :label="item.value"
                             :value="item"></el-option>
                </el-select>
              </el-form-item>
            </div>

            <div class="block">
              <el-form-item label="上传方式：" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-select v-model="edit.uploadType" :disabled=isdisabled  @change="getval" placeholder="--请选择--">
                  <el-option  v-for="item in options" :key="item.index" :label="item.value"
                              :value="item.key"></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!-- <div class="block filePath">
                            <el-form-item label="上传目录：" :rules="[{ required: true, message: ' '}]" prop="name">
                                <el-input v-model="add.UploadPath" maxlength="250" readonly></el-input>
                            </el-form-item>
                        </div> -->

            <div class="textarealist1">
              <div class="formbox UploadPath">

                <el-form-item label="文件地址" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="filePath">
                  <el-input :disabled=isdisabled v-model="edit.FilePath" maxlength="250"></el-input>
                </el-form-item>
              </div>
            </div>

            <div class="block">
              <el-form-item label="强制升级" :rules="[{ required: true, message: ' '}]" prop="name">
                <el-radio-group v-model="enabled_edit" @change="enabledlick_edit"  :disabled=isdisabled>


                  <el-radio label="0">是</el-radio>
                  <el-radio label="1">否</el-radio>
                </el-radio-group>


              </el-form-item>
            </div>
            <div class="textarealist " v-show="istimeshow_edit">
              <div class="formbox">

                <el-form-item label="强制时间" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="name">
                  <div class="formbox">
                    <el-radio-group v-model="ptime_edit" @change="timeclick_edit" :disabled=isdisabled>


                      <el-radio label="promptly">立即</el-radio>
                      <el-radio label="time">截至日期</el-radio>
                    </el-radio-group>
                    <div class="timeBox">

                      <el-date-picker :disabled=disabled v-model="startTime_edit" type="date" @change="newtimeClick"
                                      format="yyyy/MM/dd" @onPick="newtimeClick1" value-format="timestamp"
                                      placeholder="开始日期"></el-date-picker>


                    </div>
                  </div>


                </el-form-item>

              </div>
            </div>

            <div class="textarealist1">
              <div class="formbox">

                <el-form-item label="版本类型" label-width="19%" :rules="[{ required: true, message: ' '}]" prop="name">
                  <div class="formbox">
                    <el-radio-group v-model="edit.usable_range" @change="usableclick_edit"  :disabled=isdisabled>


                      <el-radio label="INDIVIDUAL">个人</el-radio>
                      <el-radio label="PUBLIC">公共</el-radio>
                    </el-radio-group>
                  </div>

                </el-form-item>

              </div>
            </div>
            <div class="textarea" v-show="isusers_edit">
              <div class="formbox">


                <el-form-item label="预览用户" label-width="19%" :rules="[{ required: true, message: ' '}]">
                  <el-input type="textarea" v-model="edit.associated_users" resize="none" maxlength="1000"
                            placeholder="请输入预览用户手机号，使用 ；隔开" readonly="readonly"></el-input>
                </el-form-item>

              </div>
            </div>
            <div class="textarea">
              <div class="formbox">


                <el-form-item label="版本更新说明" label-width="19%" :rules="[{ required: true, message: ' '}]">
                  <el-input type="textarea" v-model="edit.upgrade_instructions" resize="none" maxlength="1000"    readonly="readonly"></el-input>
                </el-form-item>

              </div>
            </div>
          </div>
          <div class="userBtn2">
            <el-form-item>
            
              <el-button @click="dialogTabledetails=false">关闭</el-button>
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
  import {getRegionsbyPid,getRegiondetail} from '@/components/interface/common.js';
   import {Managementadd_app_upgrade,
          Managementdelete_app_upgrade,
          Managementget_app_upgrade,
          Managementlist_app_upgrade_infos,
          Managementmodify_app_upgrade_info,
          Managementset_app_upgrade_info_enabled,
          Managementupload_installation_package,
          Managementset_get_app_upgrade_info
          } from '@/components/interface/AppManagement.js';

  var page = 0;
  var totalNum = false,
    count = 0;
  var indexCount = 0;
  var CancelToken = axios.CancelToken;
  var custom = CancelToken.source();
  var upfile = false,
    fileChange = false;
  export default {
    data() {
      return {
        isbutton:false,//是否禁用按钮
        enabled: "1",
        enabled_edit: "",
        usable: "PUBLIC",
        edit_usable: "",
        ptime: "promptly",
        ptime_edit: "promptly",
        startTime: "",
        startTime_edit: "",
        isbutton:false,//是否禁用保存
        value1: '',//选择的时间
        disabled: true,//选择时间是否显示
        isdisabled:true,
        installation_package_temp_path: "",
        isuploadType: true,
        istimeshow: false,
        istimeshow_edit: false,
        butval:"",
        querybut: false,

        percentage: 0,
        addinputdata: "",
        ops: {
          vuescroll: {
            mode: 'native'
          },
          scrollPanel: {}
        },
        value: "",
        value2: "",
        value3: "",
        zInput: "",

        total: 1,
        checked: false,
        multipleSelection: [],
        dialogTableVisibleadd: false,
        dialogTableVisibleedit:false,
        dialogTabledetails:false,
        TerminaInformation: false,
        UploadPathtype:false,
        filedata: '',
        add: {
          version_name: '',//版本名称
          operating_systemName: '请选择',//操作系统
          uploadType: '"文件上传"',//上传方式：
          // FilePath: '',//文件地址
          force_upgrade_time: '',//升级时间
          usable_range: '',//版本使用范围（INDIVIDUAL、PUBLIC二选一）
          associated_users: "",//浏览用户
          FilePath: "",//文件地址
          version_code:"",//版本号


          Remark: "",//更新说明
          fileName: '',//文件名字
        },
        edit: {

          version_name: '',//版本名称
          operating_systemName: '请选择',//操作系统
          uploadType: '',//上传方式：
          // FilePath: '',//文件地址
          force_upgrade_time: '',//升级时间
          usable_range: '0',//版本使用范围（INDIVIDUAL、PUBLIC二选一）
          associated_users: "",//浏览用户
          FilePath: "",//文件地址


          Remark: "",//更新说明
          fileName: '',//文件名字
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
        isusers: false,
        isusers_edit: false,

        tableData3: [],
        pagenumber: page,
        pagesize: scopes,
        terminalList: [],
        terminalID: '',
        FileType: '',
        filezip: '',
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
      this.getVersionList(false);

      // this.getselect();
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
      clickSelect(val) {

      },
      clickSelect2(val) {

      },
      clickSelect3(val) {

      },
      addUp() { //打开新增lkj

        this.percentage = 0
        count = 0
        this.startTime = new Date().getTime();

        $('.el-progress__text i').css('color', '#fff')

        $('#file').val('')
        $('#files').val('')
        upfile = false;
        custom = CancelToken.source();
        this.add = {
         version_name: '',//版本名称
          operating_systemName: '请选择',//操作系统
          uploadType: '文件上传',//上传方式：
          // FilePath: '',//文件地址
          force_upgrade_time: '',//升级时间
          usable_range: '',//版本使用范围（INDIVIDUAL、PUBLIC二选一）
          associated_users: "",//浏览用户
          FilePath: "",//文件地址
          version_code:"",//版本号


          Remark: "",//更新说明
          fileName: '',//文件名字
        }
        // this.getselect();
        $('.UploadPath').css('display', 'none');
        $('.upload').css('display', 'block');
        $('.filePath').css('display', 'block');
          $('.UploadPath').css('display', 'none');
//        console.log(this.add)
        this.dialogTableVisibleadd = true;
        $('#file').val('')
        this.FileType = ''

        this.isdis = false
      },
      addCancel() { //取消新增lkj
        this.$message({
          message: '已取消新增',
          type: 'info'
        });
        custom.cancel()
        this.isbutton=false;
        this.dialogTableVisibleadd = false;
        this.add = {
           version_name: '',//版本名称
          operating_systemName: '请选择',//操作系统
          uploadType: '文件上传',//上传方式：
          // FilePath: '',//文件地址
          force_upgrade_time: '',//升级时间
          usable_range: '',//版本使用范围（INDIVIDUAL、PUBLIC二选一）
          associated_users: "",//浏览用户
          FilePath: "",//文件地址
          version_code:"",//版本号


          Remark: "",//更新说明
          fileName: '',//文件名字
        }
      },
      getval(val) {

        this.FileType = val;
        if (val == '1') {
          $('.UploadPath').css('display', 'none');
          $('.upload').css('display', 'block');
          $('.filePath').css('display', 'block');

          this.isuploadType = true;
        } else {
          $('.UploadPath').css('display', 'block');
          $('.upload').css('display', 'none');
          $('.filePath').css('display', 'none');
          this.isuploadType = false;
        }
      },
      geoperating_system(val) {
        this.add.operating_system = val.value;
        this.add.operating_systemName = val.value;

      },
      addSubmit() { //新增
      console.log(this.add)

        var flag = true;
        if (this.add.version_name == '') {
          this.$message({
            message: '版本名称不允许为空',
            type: 'warning'
          });
          flag = false;
          return
        }else if (this.add.version_code == '') {
          this.$message({
            message: '版本号不允许为空',
            type: 'warning'
          });
          flag = false;
           return
        }else if (this.add.uploadType == '') {
          this.$message({
            message: '上传方式不允许为空',
            type: 'warning'
          });
          flag = false;
           return
        }else if(this.add.Remark == ''){
            this.$message({
            message: '版本更新说明不允许为空',
            type: 'warning'
          });
          flag = false;
           return
        } else{
           var reg =  /^[1-9]\d*$/;
         if(reg.test(this.add.version_code)!=true) {



                this.$message({
            message: '版本号请输入正整数',
            type: 'warning'
          });
       flag = false;
               }
        }


        var par = {



          "operating_system": this.add.operating_system,
          "upgrade_instructions": this.add.Remark,
          "usable_range": this.usable,
          "version_name": this.add.version_name,
           "version_code":this.add.version_code,
           "package_name":this.add.package_name,

        }


        if (this.enabled == "0") {
          par.force_upgrade_time = this.startTime

        } else {


        }
        if (this.isuploadType) {
          if (this.filedata == "") {
            this.$message({
              message: '文件不允许为空',
              type: 'warning',

            });
            flag = false;
          }


          par.installation_package_temp_path = this.installation_package_temp_path

        } else {
          if (this.add.FilePath == '') {
            this.$message({
              message: '文件地址不允许为空',
              type: 'warning'
            });
            flag = false;
          }

          par.installation_package_url = this.add.FilePath
        }

        if (this.isusers) {

          if (this.add.uploadType == '') {
            this.$message({
              message: '预览用户不允许为空',
              type: 'warning'
            });
            flag = false;
          }
          par.associated_users = this.add.associated_users
        }
        if (flag) {


          let _this = this;
          let URL = ServerUrl;
          this.isbutton=true;

//新增应用升级信息
         Managementadd_app_upgrade(par).then(function (res) {



            if (res.status === 200 && res.data.result == "ok") {
               _this.isbutton=false;
              _this.$message({
                message: "新增成功",
                type: 'success'
              });

              _this.getVersionList();
              _this.dialogTableVisibleadd = false




            }
            if (res.data.result == "error") {
              _this.$message({
                message: res.data.error_description,
                type: 'warning'
              });

    _this.isbutton=false;

            }

          }).catch(function (error) {
            console.log(error);
              
                _this.isbutton=false;
          });


        }


      },

     //列出应用升级信息
      getVersionList(isall) {
          this.querybut=false; 
        this.value = ""
        this.zInput="";
        this.value2 = ""
        this.value3 = ""
        let _this = this;
        let URL = window.ServerUrl;
        var pageSize = this.pagesize,
          pagenumber = this.pagenumber - 1;
        var operating_system = '';
        var par = {
          // "is_force_upgrade": true,
          // "operating_system": "ANDROID",
          "page_number": pagenumber,
          "page_size": pageSize,
          // "usable_range": "PUBLIC",
          // "version": "1.1.2"
        }

       Managementlist_app_upgrade_infos(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {


            var response = res.data.data.list;

            for (var i = 0; i < response.length; i++) {
              response[i].createtime = _this.timestampToTime(response[i].createtime)
              if (response[i].force_upgrade_time) {
                response[i].isupgrade = true
                response[i].force_upgrade_time = _this.timestampToTime(response[i].force_upgrade_time)


              } else {
                response[i].isupgrade = false
              }
              // console.log(response[i].createtime)
            }

            _this.tableData3 = response
            _this.total=res.data.data.page_total_items

            // console.log(_this.tableData3)
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
      },
      queryVersionList(isall) {
          this.querybut=false; 
        if (this.value === '' && this.zInput === "" && this.value2 === '' && this.value3 === '') {
          this.$message({
            message: '请选择查询项',
            type: 'warning'
          });
        } else {
          let _this = this;
          let URL = window.ServerUrl;
          var pageSize = this.pagesize,
            pagenumber = this.pagenumber - 1;
          var operating_system = '';
          // var upgrade
          // var range

          var par = {
            // "is_force_upgrade": upgrade,
            // "operating_system": this.value,
            "page_number": pagenumber,
            "page_size": pageSize,
            // "usable_range": range,
            // "version": this.zInput
          }
          // if(!isall) {
          // 	operating_system = this.value;
          // }

          if (this.zInput == "") {

          } else {
            par.version_name = this.zInput
          }
          if (this.value != "") {
            par.operating_system = this.value

          }

          if (this.value2 === "") {

          } else if (this.value2 == '是') {
            par.is_force_upgrade = true

          } else {
            par.is_force_upgrade = false
          }

          if (this.value3 == "") {

          } else if (this.value3 == "公共") {
            par.usable_range = "PUBLIC"


          } else {
            par.usable_range = "INDIVIDUAL"
          }

          Managementlist_app_upgrade_infos(par).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              let response = res.data.data.list;
              for (var i = 0; i < response.length; i++) {
                response[i].createtime = _this.timestampToTime(response[i].createtime)
                if (response[i].force_upgrade_time) {
                  response[i].isupgrade = true
                  response[i].force_upgrade_time = _this.timestampToTime(response[i].force_upgrade_time)


                } else {
                  response[i].isupgrade = false
                }
                // console.log(response[i].createtime)
              }

              _this.tableData3 = response
              _this.$message({
                message: "查询完成",
                type: 'success'
              });

            }
            if (res.data.result == "error") {
//              _this.$message({
//                message: res.data.error_description,
//                type: 'warning'
//              });
              console.log(res);
            }

          }).catch(function (error) {
            console.log(error);
          });
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
      //文件长传开始
      // getUploadVideo() {
      // 	var flag = true;
      // 	if(this.FileType == 1){
      // 		console.log(this.filezip)
      // 		if(this.add.fileName == '') {
      // 			this.$message({
      // 				message: '文件不允许为空',
      // 				type: 'warning'
      // 			});
      // 			flag = false;
      // 		}

      // 	}
      // 	if(flag){
      // 		let _this = this;
      // 		var files;
      // 		files = document.getElementById("files").files[0]
      // 		_this.UploadFile(files);
      // 	}

      // },

      getUploadVideo() {


        // console.log(this.filedata)
        if (this.filedata == "") {
          this.$message({
            message: '文件不允许为空',
            type: 'warning',

          });
          return false


        } else {
          upfile = true;
          const m = this.$message({
            message: "上传开始",
            type: "info",
            duration: "0"
          });
          var _this = this;
          let URL = window.ServerUrl;
          // console.log(this.filedata)


          var sar = this.filedata
          var formData = new FormData();
          formData.append("installation_package_file", sar);
          // console.log(formData)
          Managementupload_installation_package(formData
          ).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {



              // console.log(res)
              _this.installation_package_temp_path = res.data.data.installation_package_temp_path;
              _this.add.operating_system=res.data.data.operating_system_type
              _this.add.version_code=res.data.data.version_code
              _this.add.version_name=res.data.data.version_name
              if(res.data.data.package_name!=undefined){
                  _this.add.package_name=res.data.data.package_name
              }


              _this.percentage = 100


              _this.$message({
                message: "上传成功",
                type: "success"
              });
              // _this.tableData3=response

              m.close()
            }
            if (res.data.result == "error") {
              m.close()
              // console.log(res);
            }

          }).catch(function (error) {
            console.log(error);
            m.close()
          });


        }

      },

      //最终上传

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
        // console.log("search:"+this.value);
        this.pageChange(false);
      },
      pageChange(){
        let _this = this;
          let URL = window.ServerUrl;
          var pageSize = this.pagesize,
            pagenumber = this.pagenumber - 1;
          var operating_system = '';
          // var upgrade
          // var range

          var par = {
            // "is_force_upgrade": upgrade,
            // "operating_system": this.value,
            "page_number": pagenumber,
            "page_size": pageSize,
            // "usable_range": range,
            // "version": this.zInput
          }
          // if(!isall) {
          // 	operating_system = this.value;
          // }

          if (this.zInput == "") {

          } else {
            par.version_name = this.zInput
          }
          if (this.value != "") {
            par.operating_system = this.value

          }

          if (this.value2 === "") {

          } else if (this.value2 == '是') {
            par.is_force_upgrade = true

          } else {
            par.is_force_upgrade = false
          }

          if (this.value3 == "") {

          } else if (this.value3 == "公共") {
            par.usable_range = "PUBLIC"


          } else {
            par.usable_range = "INDIVIDUAL"
          }
          if(this.querybut!=true){
                par = {
            // "is_force_upgrade": upgrade,
            // "operating_system": this.value,
            "page_number": pagenumber,
            "page_size": pageSize,
            // "usable_range": range,
            // "version": this.zInput
          
          },

          Managementlist_app_upgrade_infos(par).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              let response = res.data.data.list;
              for (var i = 0; i < response.length; i++) {
                response[i].createtime = _this.timestampToTime(response[i].createtime)
                if (response[i].force_upgrade_time) {
                  response[i].isupgrade = true
                  response[i].force_upgrade_time = _this.timestampToTime(response[i].force_upgrade_time)


                } else {
                  response[i].isupgrade = false
                }
                // console.log(response[i].createtime)
              }

              _this.tableData3 = response
            

            }
            if (res.data.result == "error") {
//              _this.$message({
//                message: res.data.error_description,
//                type: 'warning'
//              });
              console.log(res);
            }

          }).catch(function (error) {
            console.log(error);
          });
        }

      },





      
      deletelist(index) { //删除
        // console.log(index)
        // var cheklength = this.multipleSelection;

        this.$confirm('是否执行删除操作?', '消息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var str = [];
          var _this = this;
          let URL = window.ServerUrl;
          // let cheklist = [];
          // for(let i = 0; i < cheklength.length; i++) {
          // 	cheklist.push(cheklength[i].versionID)
          // 	console.log(cheklist)
          // 	var strlist = cheklist.toString();
          // }
          var delDate = {
            "id": index.id
          }
          console.log(delDate);
         Managementdelete_app_upgrade(delDate).then(function (res) {


            if (res.status === 200 && res.data.result == "ok") {

              _this.$message({
                message: '删除成功',
                type: 'success'
              });
              _this.getVersionList();
            } else {
              if (res.data.code == window.code) return;
              _this.$message({
                message: res.data.getResultEntity.message,
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
      enabledlick(a) {//新增选择强制升级
        // console.log(a)
        if (a == "0") {
          this.istimeshow = true

        } else if (a == "1") {
          this.istimeshow = false

        }


      },
      enabledlick_edit(a) {//新增选择强制升级
        // console.log(a)
        if (a == "0") {
          this.istimeshow_edit = true

        } else if (a == "1") {
          this.istimeshow_edit = false

        }


      },
      usableclick(a) {//增选择版本类型lkj
        // console.log(a)
        if (a == "INDIVIDUAL") {
          this.isusers = true


        } else if (a == "PUBLIC") {
          this.isusers = false
        }


      },
      usableclick_edit(a){
        // consoleconsole.log(a)
        if (a == "INDIVIDUAL") {
          this.isusers_edit = true


        } else if (a == "PUBLIC") {
          this.isusers_edit = false
        }


      },
      timeclick(a) {
        if (a == "promptly") {
          this.disabled = true
          this.startTime = new Date().getTime();
          // console.log(this.startTime)


        } else if (a == "time") {
          this.disabled = false
        }


      },
      timeclick_edit(a) {
        if (a == "promptly") {
          this.disabled = true
          this.startTime_edit = new Date().getTime();
          // console.log(this.startTime_edit)


        } else if (a == "time") {
          this.disabled = false
        }


      },
      newtimeClick(a) {
        // console.log(a)

      },
      newtimeClick1(a) {
        // console.log(a)

      },

      //点击编辑时
      appedit(row) {
        this.isbutton=false;
        var paredit={
          "id":row.id
        }
        var _this=this
         Managementset_get_app_upgrade_info(paredit).then(function (res) {
          // console.log(res)

          if (res.status === 200 && res.data.result == "ok") {
           console.log(res);

        _this.edit=res.data.data;
        if(row.installation_package_url){
          _this.edit.uploadType="文件上传"
          _this.edit.FilePath=row.installation_package_url


        }else if( _this.edit.installation_package_temp_path){
          _this.edit.uploadType="手动输入"
          _this.edit.FilePath=row.installation_package_temp_path

        }
        if ( _this.edit.usable_range ==="INDIVIDUAL") {
          _this.isusers_edit = true


        } else if ( _this.edit.usable_range  ==="PUBLIC") {
          _this.isusers_edit = false

        }
        if( _this.edit.enabled){
          _this.enabled_edit="0"
          _this.istimeshow_edit=true


        }else {
          _this.enabled_edit="1"
          _this.istimeshow_edit=false
        }

        // console.log(this.edit);

        _this.dialogTableVisibleedit = true;

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



        // console.log("编辑");

      },
      //编辑升级信息确认
      appeditbut(){



        let _this = this;
        let URL = ServerUrl;
        // console.log(this.edit)
        var paredit = {

          "id":this.edit.id,
          "operating_system": this.edit.operating_system,
          "upgrade_instructions": this.edit.upgrade_instructions,
          "usable_range": this.edit.usable_range,
          "version_name": this.edit.version_name,
          "version_code":this.edit.version_code,
          "package_name":this.edit.package_name
        }

        console.log(this.istimeshow_edit)
        if(this.istimeshow_edit){

          paredit.force_upgrade_time = this.startTime_edit

        }
        if(this.edit.usable_range=="INDIVIDUAL"){
          paredit.associated_users=this.edit.associated_users



        }
        if(this.edit.installation_package_url){

          paredit.installation_package_url=this.edit.installation_package_url
        }else {
          paredit.installation_package_temp_path=this.edit.installation_package_temp_path
        }



        Managementmodify_app_upgrade_info(paredit).then(function (res) {
          // console.log(res)

          if (res.status === 200 && res.data.result == "ok") {
            _this.$message({
              message: "编辑成功",
              type: 'success'
            });

            _this.getVersionList();
            _this.dialogTableVisibleedit = false


            // console.log(res)
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




      },
      //取消编辑升级信息
      appeditCancel(){

        this.dialogTableVisibleedit = false

      },
      //点击详情
      appdetails(row) {
        var paredit={
          "id":row.id
        }
        var _this=this
        Managementset_get_app_upgrade_info(paredit).then(function (res) {
          // console.log(res)

          if (res.status === 200 && res.data.result == "ok") {
//            console.log(res);

            _this.edit=res.data.data;
            if(row.installation_package_url){
              _this.edit.uploadType="文件上传"
              _this.edit.FilePath=row.installation_package_url


            }else if( _this.edit.installation_package_temp_path){
              _this.edit.uploadType="手动输入"
              _this.edit.FilePath=row.installation_package_temp_path

            }
            if ( _this.edit.usable_range ==="INDIVIDUAL") {
              _this.isusers_edit = true


            } else if ( _this.edit.usable_range  ==="PUBLIC") {
              _this.isusers_edit = false

            }
            if( _this.edit.enabled){
              _this.enabled_edit="0"
              _this.istimeshow_edit=true


            }else {
              _this.enabled_edit="1"
              _this.istimeshow_edit=false
            }

            // console.log(this.edit);

            _this.dialogTabledetails=true;


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



      },







      //获取value和idlkj
      getid(val) {
        // console.log(val);
        this.addinputdata = val.itemValue;
        this.terminalID = val.id;
      },
      //点启用禁用
      butclick(al){
        // console.log(al)

        let _this = this;
        let URL = ServerUrl;
        var ray=""

        var enabled={

          "id": al.id
        }
        if(al.enabled==true){
          enabled.enabled=false
          ray="禁用"


        }else {
          enabled.enabled=true
          ray="启用"

        }
        this.isbutton=true



        Managementset_app_upgrade_info_enabled(enabled).then(function (res) {
          // console.log(res)

          if (res.status === 200 && res.data.result == "ok") {
            _this.$message({
              message:ray+"成功",
              type: 'success'
            });
            _this.isbutton=false

            _this.getVersionList();



            // console.log(res)
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


      },

    },
    updated() {
      var addmodHei = $('#userAddModel .el-dialog').height();
      $('#userAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
      $('#userAddModel .el-dialog').css('marginBottom', 0);
      var addmodHei = $('#userEditModel .el-dialog').height();
      $('#userEditModel .el-dialog').css('marginTop', -(addmodHei / 2));
      $('#userEditModel .el-dialog').css('marginBottom', 0);
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
  /*7-3刘凯杰加*/
  .elTable .butclick{
    padding: 0px 10px;
    background: #1b274c;
    border: 1px #3b4872 solid;

  }

  #userEditModel #files, #userdetailsModel #files  {
    width: 90px;
    height: 30px;
    position: absolute;
    opacity: 0;
    z-index: 20;
    top: 8px;
  }



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

  #userAddModel #files {
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
    #versionBox .zTable {
      padding-top: 0;
    }
    #versionBox .elTable {
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
    height: 40px;
    overflow: hidden;
    /* border:2px #4a567c solid; */
  }
  .block .formbox{
    height: 36px;
    margin: 2px 0;
    line-height: 36px;
    border: 1px #3b4872 solid;

  }
  .block .blockleft{
    margin-left: 30%
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
  .textarealist{
    height: 36px;
  }
  .textarealist1{
    height: 36px;
    margin-top: 2px;

  }
 #versionBox .formbox .timeBox {
    width: 200px;
    display: inline-block;
    margin-left: 30px;

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
<style type="text/css" lang='scss'>
  #userdetailsModel{
    .submit2{
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

    .el-dialog {
      width: 1100px;
      /*top: 50%;*/
    }


    .el-dialog__body {
      padding: 24px 24px 18px;
    }

    .el-checkbox {
      float: left;
    }
    .block .el-form-item__label {
      background: #1b274c;
    }
    .el-dialog .textarea .el-form-item__label {
      height: 120px;
      background: #1b274c;
    }
    .upload .el-form-item {
      width: 95.5%;
    }

    .el-form-item {
      margin: 0;
      padding: 0;
      width: 91%;
      float: left;
    }

    .userBtn2 .el-form-item {
      width: 100%;
    }

    .el-textarea {
      width: 106.2%;
    }

  }

//

  #userEditModel .submit2{
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

  #userEditModel .upload .uploadBg #uploadForm {
    width: 45%;
    margin-top: 0;
  }

  #userEditModel .el-dialog {
    width: 1100px;
    top: 40%;
  }


  #userEditModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #userEditModel .el-checkbox {
    float: left;
  }

  #userEditModel .block .el-form-item__label {
    background: #1b274c;
  }

  #userEditModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }

  #userEditModel .upload .el-form-item {
    width: 95.5%;
  }

  #userEditModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #userEditModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #userEditModel .el-textarea {
    width: 106.2%;
  }


  /*7-3刘凯杰加以上*/
  #userAddModel .submit2 {
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
    margin-top:0;
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

  #userAddModel .el-dialog {
    width: 1100px;
    top: 40%;
  }

  #userAddModel .el-dialog__body {
    padding: 24px 24px 18px;
  }

  #userAddModel .el-checkbox {
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
  #userAddModel .block .el-form-item__label {
    background: #1b274c;
  }

  #userAddModel .el-dialog .textarea .el-form-item__label {
    height: 120px;
    background: #1b274c;
  }
  #userAddModel .upload .el-form-item {
    width: 95.5%;
  }

  #userAddModel .el-form-item {
    margin: 0;
    padding: 0;
    width: 91%;
    float: left;
  }

  #userAddModel .userBtn2 .el-form-item {
    width: 100%;
  }

  #userAddModel .el-textarea {
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
  #versionBox .el-progress {
    float: left;
    margin: 8px 0 0 102px;
    width: 257px;
  }
  #versionBox .el-progress-bar__outer {
    height: 10px !important;
  }

</style>
