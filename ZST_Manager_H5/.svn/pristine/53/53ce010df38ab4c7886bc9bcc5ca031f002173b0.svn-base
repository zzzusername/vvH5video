<template>
	<div class="mRight" id="Upgradeview">
		<div class="mRightTwo">
			<div class="zForm">
				 <span>版本号</span><input v-model="zInput" class="zInput" type="text" placeholder="" />



				<button @click="queryVersionList(false)">查询</button><button @click="getVersionList('','all')">全部</button>
				<span class="btnRight"> <button @click="addUp">新增</button></span>
			</div>
			<div class="zTable">
				<div class="elTable">
					<vue-scroll :ops="ops" ref="vs">
						<div class="scrollbox">
							<el-table ref="multipleTable"
                            :data="tableData3" style="width: 100%">

									<el-table-column prop="version" label="版本号"></el-table-column>
                <el-table-column prop="upload_time" label="上传时间">
                </el-table-column>
                <el-table-column prop="release_time" label="发布时间">

                </el-table-column>

								<el-table-column prop="createtime" label="是否发布">
                                    <template slot-scope="scope">
										<span v-if="scope.row.released == true">是</span>
										<span v-else>否</span>
									</template>
                                </el-table-column>

								 <el-table-column label="操作">
							<template slot-scope="scope">

                <a href="javascript:;"  class="ml5" @click="detailsclick(scope.row)" ><span >详情</span></a>
                <a href="javascript:;"  class="ml5"  v-show="!scope.row.released&&scope.row.is_new" @click="release_h5_upgrade(scope.row)"><span >发布</span></a>
                <!--&&scope.row.is_new-->
                <a :href="scope.row.file_url" download="" class="ml5"  ><span >下载</span></a>

	                             <a href="javascript:;"  class="ml5" @click="deletelist(scope.row)" >
			                      <span >删除</span></a>
                             </template>
						</el-table-column>

							</el-table>

						</div>
					</vue-scroll>
				</div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pagenumber" :page-size="pagesize" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
			</div>
		</div>

		<div id="UpgradeAddModel">
			<el-dialog :close-on-click-modal="false" title="H5升级 - 新增" :visible.sync="dialogTableVisibleadd">
				<el-form :model="add" ref="add" label-width="38%" class="demo-ruleForm">
					<div class="formTable">

						<div class="upload upload2">
							<el-form-item label="上传H5文件：" :rules="[{ required: true, message: ' '}]" prop="name">
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
							<el-form-item label="是否发布" :rules="[{ required: true, message: ' '}]" prop="name">
								  <el-radio-group v-model="enabled" @change="enabledlick" >


								  <el-radio  label= "0">是</el-radio>
									<el-radio  label="1">否</el-radio>
								 </el-radio-group>


							</el-form-item>
					 </div>

            <div class="textarea">
							<div  class="formbox">


							<el-form-item label="版本更新说明" label-width="19%" :rules="[{ required: true, message: ' '}]">
								<el-input type="textarea" v-model="add.Remark" resize="none" maxlength="1000"></el-input>
							</el-form-item>

								</div>
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
         <div id="UpgradeEditModel">
		<el-dialog :close-on-click-modal="false" title="H5升级 - 详情" :visible.sync="dialogTableVisibledetails">
			<el-form :model="details" ref="add" label-width="38%" class="demo-ruleForm">
			<div class="formTable">

				<div class="upload upload2">
				<el-form-item label="上传H5文件：" :rules="[{ required: true, message: ' '}]" prop="name">
					<div class="uploadBg">
					<div class="filegroup" v-html="details.file_url">

						<!--<input  class="zInput" type="text" placeholder="" />-->

					</div>
					</div>
				</el-form-item>
				</div>

				<div class="upload upload2">
				<el-form-item label="是否发布：" :rules="[{ required: true, message: ' '}]" prop="name">
					<div class="uploadBg">
					<span v-if="details.released == true">&nbsp;&nbsp;发布</span>
					<span v-else>&nbsp;&nbsp;未发布</span>
					</div>
				</el-form-item>
				</div>
				<div class="upload upgrade Upgradelist " style="height: 150px">
				<el-form-item   height=150  label="版本更新说明：" :rules="[{ required: true, message: ' '}]" prop="name">
					<div class="uploadBg" style="height: 150px">
					<div class="filegroup" v-html="details.upgrade_instructions">


					</div>
					</div>
				</el-form-item>
				</div>

          </div>
          <div class="userBtn2">
            <el-form-item>

              <el-button @click="dialogTableVisibledetails=false">关闭</el-button>
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
	 import {
		  Upgradeadd_h5_upgrade_info,
		  Upgradeget_h5_upgrade_info,
          Upgradelist_h5_upgrade_infos,
          Upgradedelete_h5_upgrade_info,
          Upgraderelease_h5_upgrade_info,
          Upgradeupload_h5_package
          } from '@/components/interface/AppManagement.js';
	var page = 0;
	var totalNum = false,
		count = 0;
	var indexCount=0;
	var CancelToken = axios.CancelToken;
	var custom = CancelToken.source();
	var upfile = false,
		fileChange = false;
	export default {
		data() {
			return {

				enabled:"0",
				usable:"PUBLIC",
				ptime:"promptly",
				FilePath:'',

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
				zInput:"",

				total: 1,
				checked: false,
				querybut: false,
				multipleSelection: [],
				dialogTableVisibleadd: false,
        dialogTableVisibledetails: false,
				TerminaInformation: false,
				filedata: '',
        details:{

        },
				add: {

					FilePath:"",//文件地址


				    Remark: "",//更新说明
					fileName: '' ,//文件名字
				},
				delete: {
					idList: [],
					clientKey: localStorage.clientKey,
					token: localStorage.token
				},



			    options2:[
				],

				tableData3: [],
				pagenumber: page,
				pagesize: scopes,
				terminalList: [],
				terminalID: '',
				FileType: '',
				filezip: '',
			}
		},

		mounted: function() {
			var hei = document.documentElement.clientHeight;
			$('.mRightTwo').css('height', hei - 178);
			$(window).resize(function () {
				var wid = document.documentElement.clientWidth,
				hei = document.documentElement.clientHeight;
				$('.mRightTwo').css('height', hei - 178);
			})
			this.getVersionList("","");

			$('.UploadPath').css('display', 'none');
		},
		methods: {
			onback(){
				this.TerminaInformation = false;
				// this.getselect();
			},
			btnRightclick() {
				this.TerminaInformation = true;
				// this.getselect()
			},
      detailsclick(row){
			  this.dialogTableVisibledetails=true;
			  this.details=row


      },

			addUp() { //打开新增lkj

				this.percentage = 0
				count = 0
				$('.el-progress__text i').css('color', '#fff')

				$('#file').val('')
				$('#files').val('')
				upfile = false;
				custom = CancelToken.source();
				// this.getselect();
				$('.UploadPath').css('display', 'block');
				$('.upload').css('display', 'block');
				$('.filePath').css('display', 'block');
				this.dialogTableVisibleadd = true;
				$('#file').val('')
				this.FileType = ''
				this.add = {
					VersionNum: '',
					FilePath: '',
					UploadPath: 'Upload',
					TerminalType: '0',
					TerminalTypeName: '请选择',
					UploadType: '',
					Remark: "",
					fileName: ''
				}
			},
			addCancel() { //取消新增lkj
				this.$message({
					message: '已取消新增',
					type: 'info'
				});
				custom.cancel()
				this.dialogTableVisibleadd = false;
				this.add = {
					VersionNum: '',
					FilePath: '',
					UploadPath: 'Upload',
					TerminalType: '0',
					TerminalTypeName: '请选择',
					UploadType: '',
					Remark: "",
					fileName: ''
				}
			},
			getval(val) {
				console.log(val);
				this.FileType = val;
				if(val == '1') {
					$('.UploadPath').css('display', 'none');
					$('.upload').css('display', 'block');
					$('.filePath').css('display', 'block');
				} else {
					$('.UploadPath').css('display', 'block');
					$('.upload').css('display', 'none');
					$('.filePath').css('display', 'none');
				}
			},
			geterminalType(val){
				this.add.TerminalType = val.value;
				this.add.TerminalTypeName = val.value;
				console.log(this.add.TerminalType)
			},
			addSubmit() { //新增
			     console.log(this.add)
				var flag = true;
					if (this.FilePath==""&&this.add.Remark == ''){
						this.$message({
						message: '新增数据不允许为空',
						type: 'warning'
					});
					flag = false;
					return false

				}else
				if (this.FilePath==""){
					this.$message({
						message: '文件不允许为空',
						type: 'warning'
					});
					flag = false;
					return false

				}else if(this.add.Remark == '') {
					this.$message({
						message: '版本更新说明不允许为空',
						type: 'warning'
					});
					flag = false;
					return false

				}


				if(flag){
					var _this=this;
					var add_h5={
							"h5_package_file_temp_path":_this.FilePath,
							"released": (this.enabled=="0")?true:false,
							"upgrade_instructions":_this.add.Remark
							}

                    Upgradeadd_h5_upgrade_info(add_h5).then(function (res) {

							if (res.status === 200 && res.data.result == "ok") {

								var response = res
								_this.$message({
								message: "新增成功",
								type: "success"
								});
								_this.dialogTableVisibleadd=false;
								_this.getVersionList("",'');




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


				}



			},



      //获取列表数据
      getVersionList(isall,all) {
     
        let _this = this;
        let URL = window.ServerUrl;
        var pageSize = this.pagesize,
          pagenumber = this.pagenumber - 1;
        var terminalType = '';
        var par = {
          "page_number": pagenumber,
          "page_size": pageSize,
          "version": isall
        }

       Upgradelist_h5_upgrade_infos(par).then(function (res) {


          if (res.status === 200 && res.data.result == "ok") {
            if(isall===''){
              if(all=="all"){
				     _this.zInput = ""
				     _this.querybut=false; 
                _this.$message({
                  message: "全部数据",
                  type: "success"
                });

              }
            }else{
				  _this.querybut=true; 
              _this.$message({
                message: "查询完成",
                type: "success"
              });

            }

			let response = res.data.data.list;
            console.log(response)

			 for (var i in response) {
				  response[i].upload_time = _this.timestampToTime(response[i].upload_time)

         if(response[i].file_url.substring(0,4)!="http"){                             response[i].file_url=URL+"/"+ response[i].file_url
         }
			  if(response[i].release_time!=undefined)


                 response[i].release_time = _this.timestampToTime(response[i].release_time)
            }

            _this.tableData3 = response

            _this.total=res.data.data.page_total_items

            console.log(_this.tableData3)
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
			queryVersionList(isall) {
        if (this.zInput === "" ) {
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


			  console.log(this.filedata)
	        	if(this.filedata=="" ){
					this.$message({
							message: '文件不允许为空',
							type: 'warning',

						});
						return false


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
			formData.append("h5_package_file", sar);
			  console.log(formData)
				  Upgradeupload_h5_package(formData).then(function(res) {


			if(res.status===200&&res.data.result=="ok"){



						_this.percentage=100
						_this.FilePath=res.data.data.h5_package_file_temp_path
						console.log(_this.FilePath )



						_this.$message({
					message: "上传成功",
					type: "success"
				});
                    // _this.tableData3=response

				       m.close()
					}
					if(res.data.result=="error"){
						_this.$message({
				message: res.data.error_description,
				type: 'warning'
			});
						 console.log(res);
						    m.close()
					}

				}).catch(function(error) {
					console.log(error);
				});


			  }

			},

            // //最终上传
			// UploadFileChunk(Chunk, FileName,totalParts,newFileName) {
			// 	fileChange = true;

			// 	this.$message({
			// 		message: "上传开始",
			// 		type: "info"
			// 	});
			// 	var _this = this;
			// 	let URL = ServerUrl;
			// 	var fd = new FormData();
			// 	fd.append("file", Chunk, FileName);
			// 	axios.post(URL + "/super/admin/api/v1/app_upgrade_management/upload_installation_package", fd, {cancelToken:custom.token}).then(function(res) {
			// 		console.log(res.data)
			// 		// _this.reLogin(res.data.code); //提示帐号登陆
			// 		var totalnumber = parseInt(_this.TotalParts);
			// 			var tatalNum = 100/totalnumber
			// 			count++;
			// 		if(res.data.code === 0) {
			// 			indexCount++;
			// 			if(indexCount===totalParts){

			// 			}

			// 			_this.percentage = tatalNum*count

			// 			console.log('我是进度条'+indexCount)
			// 			console.log(tatalNum)
			// 			if(_this.percentage > 100){
			// 				_this.percentage=100
			// 			}
			// 			console.log(_this.percentage)
			// 		}
			// 	}).catch(function(error) {
			// 		console.log(error);
			// 	});
			// },
			// 文件上传结束
			changeFun(val) { //复选框
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			handleSizeChange: function(size) {
				this.pagesize = size;

			},
			handleCurrentChange: function(pagenumber) {
				this.pagenumber = pagenumber;
				page = this.pagenumber;
				//this.getMenuInfoList();  //获取列表的函数
				// console.log("search:"+this.value);
			 this.pageChange();
			},

			pageChange() {
				this.zInput = ""
				let _this = this;
				let URL = window.ServerUrl;
				var pageSize = this.pagesize,
				pagenumber = this.pagenumber - 1;
				var terminalType = '';
				var par = {
				"page_number": pagenumber,
				"page_size": pageSize,
				"version": ""
				}
				if(this.querybut){
					par.version=this.zInput
				}

			Upgradelist_h5_upgrade_infos(par).then(function (res) {


				if (res.status === 200 && res.data.result == "ok") {
			

					let response = res.data.data.list;
					console.log(response)

					for (var i in response) {
						response[i].upload_time = _this.timestampToTime(response[i].upload_time)

				if(response[i].file_url.substring(0,4)!="http"){                             response[i].file_url=URL+"/"+ response[i].file_url
				}
					if(response[i].release_time!=undefined)


						response[i].release_time = _this.timestampToTime(response[i].release_time)
					}

					_this.tableData3 = response

					_this.total=res.data.data.page_total_items

					console.log(_this.tableData3)
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







		//发布H5升级信息
				release_h5_upgrade(index) {
			 console.log(index)
				// var cheklength = this.multipleSelection;

					this.$confirm('是否执行发布H5升级操作?', '消息', {
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
							"version":index.version
						}
						console.log(delDate);

						Upgraderelease_h5_upgrade_info(delDate ).then(function(res) {


			         if(res.status===200&&res.data.result=="ok"){

								_this.$message({
									message: '发布H5升级成功',
									type: 'success'
								});
								_this.getVersionList("","");
							} else {
								 if (res.data.result == "error") {
										_this.$message({
										message: res.data.error_description,
										type: 'warning'
										});
										console.log(res);
									}



							}
						}).catch(function(error) {
							console.log(error);
						});

					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消发布H5升级'
						});
					});

			},
			deletelist(index) { //删除
			 console.log(index)
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
							"version":index.version
						}
						console.log(delDate);
						Upgradedelete_h5_upgrade_info(delDate ).then(function(res) {


			         if(res.status===200&&res.data.result=="ok"){

								_this.$message({
									message: '删除成功',
									type: 'success'
								});
								_this.getVersionList("","delete");
							} else {
								if(res.data.code==window.code ) return;
								_this.$message({
									message: res.data.getResultEntity.message,
									type: 'info'
								});
							}
						}).catch(function(error) {
							console.log(error);
						});

					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除'
						});
					});

			},
			enabledlick(a){//新增选择强制升级
			console.log(a)


			},
			usableclick(a){//增选择版本类型lkj
			console.log(a)

			},




		},
		updated() {
			var addmodHei = $('#UpgradeAddModel .el-dialog').height();
			$('#UpgradeAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
			$('#UpgradeAddModel .el-dialog').css('marginBottom', 0);
      var addmodHeiedit = $('#UpgradeEditModel .el-dialog').height();
      $('#UpgradeEditModel .el-dialog').css('marginTop', -(addmodHeiedit / 2));
      $('#UpgradeEditModel .el-dialog').css('marginBottom', 0);
			// $('.TerminaLeft li')
			$(".TerminaLeft li").click(function(){
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

	#UpgradeAddModel #files,#UpgradeEditModel #files {
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

    #UpgradeEditMode .Upgradelist .el-form-item__label {
		width: 18.2% !important;
		height: 150px !important;;
		margin: 2px 0;
		line-height: 46px;
		/* background: #2a3558; */
		border: 1px #3b4872 solid;
	}
#Upgradeview .upgrade .el-form-item__label {
  width: 18.2% !important;
  height: 150px;
  margin: 2px 0;
  line-height: 46px;
  /* background: #2a3558; */
  border: 1px #3b4872 solid;
}
#Upgradeview .Upgradelist .el-form-item__label {
  width: 18.2% !important;
  height: 150px;
  margin: 2px 0;
  line-height: 46px;
  /* background: #2a3558; */
  border: 1px #3b4872 solid;
}
	.upload .el-form-item__content {
		width: 84%;
		margin-left: 18.2% !important
	}
	#UpgradeAddModel .block .el-form-item__label,#UpgradeEditModel .block .el-form-item__label {
		background: #1b274c;
	}

	#UpgradeAddModel .el-dialog .textarea .el-form-item__label,	#UpgradeEditModel .el-dialog .textarea .el-form-item__label {
		height: 120px;
		background: #1b274c;
	}
	#UpgradeAddModel .upload .el-form-item ,#UpgradeEditModel .upload .el-form-item {
		width: 95.5%;
	}

	#UpgradeAddModel .el-form-item,	#UpgradeEditModel .el-form-item  {
		margin: 0;
		padding: 0;
		width: 91%;
		float: left;
	}

	#UpgradeAddModel .userBtn2 .el-form-item,
  #UpgradeEditModel .userBtn2 .el-form-item{
		width: 100%;
	}

	#UpgradeAddModel .el-textarea,#UpgradeAddModel .el-textarea  {
		width: 106.2%;
	}
  #UpgradeAddModel .submit2,#UpgradeEditModel .submit2 {
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

#UpgradeAddModel .el-dialog,#UpgradeEditModel .el-dialog {
  width: 1100px;
  top: 50%;
}

#UpgradeAddModel .el-dialog__body,
#UpgradeEditModel .el-dialog__body{
  padding: 24px 24px 18px;
}

#UpgradeAddModel .el-checkbox,#UpgradeEditModel .el-checkbox{
  float: left;
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
	#UpgradeEditModel.el-textarea {
		float: left;
		width: 96%;
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
