<template>
	<div class="mRight">
		<div class="mRightTwo">
			<div class="zForm">
                <span>版本号</span><input class="zInput" type="text" placeholder="" />
				<span>操作系统</span>
				<div class="zSelect">
					<el-select @visible-change="clickSelect" v-model="value" class="zgroup" placeholder="--请选择--">
						<el-option v-for="item in options2" :key="item.key" :label="item.value" :value="item.value"></el-option>
					</el-select>
				</div>
                <span class="Selectfont">强制升级</span>
				<div class="zSelect">
					<el-select @visible-change="clickSelect" v-model="value" class="zgroup" placeholder="--请选择--">
						<el-option v-for="item in options2" :key="item.key" :label="item.value" :value="item.value"></el-option>
					</el-select>
				</div>
                <span class="Selectfont">版本类型</span>
				<div class="zSelect">
					<el-select @visible-change="clickSelect" v-model="value" class="zgroup" placeholder="--请选择--">
						<el-option v-for="item in options2" :key="item.key" :label="item.value" :value="item.value"></el-option>
					</el-select>
				</div>
				<button @click="queryVersionList(false)">查询</button><button @click="getVersionList(true)">全部</button>
				<span class="btnRight"> <button @click="addUp">新增</button></span>
			</div>
			<div class="zTable">
				<div class="elTable">
					<vue-scroll :ops="ops" ref="vs">
						<div class="scrollbox">
							<el-table ref="multipleTable" @selection-change="changeFun" :data="tableData3"  style="width: 100%">
								<!-- <el-table-column type="selection" @selection-change="changeFun"></el-table-column> -->
								<!-- <el-table-column type="index" label="序号"></el-table-column> -->
								<el-table-column prop="terminalType" label="版本号"></el-table-column>
								<el-table-column prop="fileName" label="操作系统"></el-table-column>
								<el-table-column prop="filePath" label="强制升级"></el-table-column>
								<el-table-column prop="phone" label="强制时间"></el-table-column>
								<el-table-column prop="versionNum" label="版本类型"></el-table-column>
								<el-table-column prop="isCurrentUse" label="上传时间">
									<template slot-scope="scope">
										<span v-if="scope.row.isCurrentUse == 1">是</span>
										<span v-else>否</span>
									</template>
								</el-table-column>
								<el-table-column label="上传日期" width="180">
									<template slot-scope="scope">
										<span v-if="scope.row.submitTime == '' || scope.row.submitTime == null">{{ scope.row.submitTime }}</span>
										<span v-else>{{ scope.row.submitTime.split('T').join(' ') }}</span>
									</template>
								</el-table-column>
							</el-table>
                            		<el-table-column label="操作">
							<template slot-scope="scope">
								<a href="javascript:;" class="ml5">
		                       <!-- <span  @click="edit(scope.row)">编辑</span> -->
		                        <img @click="edit(scope.row)"  src="../../assets/edit2.png" alt="">
		                         </a>

	                             <a href="javascript:;"  class="ml5">
			                      <span >删除</span>
		                          <!-- <img @click="moveDown(scope.row)" class="moveIco" src="../../assets/up.png" alt=""> -->

		                        </a>
                             </template>
						</el-table-column>
						</div>
					</vue-scroll>
				</div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
			</div>
		</div>
		<div id="TerminaInformationPopup">
			<el-dialog :close-on-click-modal="false" title="终端信息" :visible.sync="TerminaInformation">
				<el-form label-width="28%" class="demo-ruleForm">
					<div class="formTable">
						<div class="TerminaLeft">
							<ul id="example-1">
								<li v-for="item in terminalList" :key="item.index" @click="getid(item)">{{ item.itemValue }}</li>
							</ul>
						</div>
						<div class="TerminaRight">
							<el-form-item label="终端类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-input v-model="addinputdata" maxlength="50"></el-input>
							</el-form-item>
						</div>

					</div>
					<div class="userBtn">
						<el-form-item>
							<el-button type="primary" @click="addTerminalType">新增</el-button>
							<el-button type="primary" @click="editTerminalType">修改</el-button>
							<el-button type="primary" @click="removeTerminalType">删除</el-button>
							<el-button @click="onback">返回</el-button>
						</el-form-item>
					</div>
				</el-form>
			</el-dialog>
		</div>
		<div id="userAddModel">
			<el-dialog :close-on-click-modal="false" title="版本管理 - 新增" :visible.sync="dialogTableVisibleadd">
				<el-form :model="add" ref="add" label-width="38%" class="demo-ruleForm">
					<div class="formTable">
						<div class="block">
							<el-form-item label="终端类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-select v-model="add.TerminalTypeName"  @change="geterminalType" placeholder="--请选择--">
									<el-option v-for="item in options2" :key="item.index" :label="item.value" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="版本号：" :rules="[{ required: true, message: ' '}]" prop="VersionNum">
								<el-input v-model="add.VersionNum" maxlength="50"></el-input>
							</el-form-item>
							<div class="infoMsg">
								<img src="../../assets/info.png">
								<!-- <span>根据需要修改密码，留空不修改密码</span> -->
							</div>
						</div>
						<div class="block">
							<el-form-item label="上传方式：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-select v-model="add.uploadType" @change="getval" placeholder="--请选择--">
									<el-option v-for="item in options" :key="item.index" :label="item.value" :value="item.key"></el-option>
								</el-select>
							</el-form-item>
						</div>
						<div class="block filePath">
							<el-form-item label="上传目录：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-input v-model="add.UploadPath" maxlength="250" readonly></el-input>
							</el-form-item>
						</div>
						<div class="block UploadPath">
							<el-form-item label="文件位置：" :rules="[{ required: true, message: ' '}]" prop="filePath">
								<el-input v-model="add.FilePath" maxlength="250"></el-input>
							</el-form-item>
						</div>
						<div class="upload">
							<el-form-item label="上传文件：" :rules="[{ required: true, message: ' '}]" prop="name">
								<div class="uploadBg">
									<div class="filegroup">
										<form id="uploadForm" enctype="multipart/form-data">
											<input type="file" id="files" name="files" @change="getFile" placeholder="file" multiple>
											<span class="btn3">请选择文件</span>
											<input type="text" id="file" name="file" multiple>
											<span class="sccess">√</span>
										</form>
									</div>
								</div>
							</el-form-item>
						</div>
						<div class="textarea">
							<el-form-item label="简介" label-width="19%">
								<el-input type="textarea" v-model="add.Remark" resize="none" maxlength="1000"></el-input>
							</el-form-item>
						</div>
					</div>
					<div class="userBtn">
						<el-form-item>
							<el-button type="primary" @click="addSubmit">保存</el-button>
							<el-button @click="addCancel">取消</el-button>
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
	var page = 1;
	export default {
		data() {
			return {
				addinputdata: "",
				ops: {
					vuescroll: {
						mode: 'native'
					},
					scrollPanel: {}
				},
				value: "",
				total: 1,
				checked: false,
				multipleSelection: [],
				dialogTableVisibleadd: false,
				TerminaInformation: false,
				filedata: '',
				add: {
					VersionNum: '',
					FilePath: '',
					UploadPath: 'Upload',
					TerminalType: '0',
					TerminalTypeName: '请选择',
					UploadType: '',
					Remark: ""
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
				options2: [],
				tableData3: [],
				currentPage: page,
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
			this.getVersionList(true);
			// this.getTerminalType();
			// this.getselect();
			$('#files').val(' ')
		},
		methods: {
			onback(){
				this.TerminaInformation = false;
				this.getselect();
			},
			// btnRightclick() {
			// 	this.TerminaInformation = true;
			// 	this.getselect()
			// },
			clickSelect(val) {
				if(val) {
					this.getselect()
				}
				console.log(val);
			},
			addUp() { //打开新增zxj
				this.getselect();
				$('.UploadPath').css('display', 'block');
				$('.upload').css('display', 'block');
				$('.filePath').css('display', 'block');
				this.dialogTableVisibleadd = true;
				$('#files').val(' ')
			},
			addCancel() { //取消新增zxj
				this.$message({
					message: '已取消新增',
					type: 'info'
				});
				this.dialogTableVisibleadd = false;
				$('#userAddModel input').val('');
				$('#userAddModel textarea').val('');
				this.add.terminalType = ''
				this.add.uploadType = ''
				this.add = {
					VersionNum: '',
					FilePath: '',
					UploadPath: 'Upload',
					TerminalType: '0',
					TerminalTypeName: '请选择',
					UploadType: '',
					Remark: ""
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
				var flag = true;
				if(this.add.VersionNum == '') {
					this.$message({
						message: '版本号不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(this.FileType == 1){
					console.log(this.filezip)
					if(this.filezip == '') {
						this.$message({
							message: '文件不允许为空',
							type: 'warning'
						});
						flag = false;
					}else{
						if(this.filezip != 'application/x-zip-compressed'){
							this.$message({
								message: '文件只允许为zip格式',
								type: 'warning'
							});
							flag = false;
						}
					}

				}
				if(this.add.TerminalTypeName == '请选择'){
					this.$message({
						message: '请选择终端类型',
						type: 'warning'
					});
					flag = false;
				}
				if(this.FileType <= 0){
					this.$message({
						message: '请选择上传方式',
						type: 'warning'
					});
					flag = false;
				}
				if(flag == true){
					let _this = this;
					let URL = ServerUrl;

					var Form = new FormData();
					Form.append("clientKey", localStorage.clientKey)
					Form.append("token", localStorage.token)
					Form.append("TerminalType", this.add.TerminalType);
					Form.append("VersionNum", this.add.VersionNum);
					Form.append("UploadType", this.FileType);
					Form.append("FilePath", this.add.FilePath);
					Form.append("UploadPath", this.add.UploadPath);
					Form.append("Remark", this.add.Remark);
					Form.append("FileData", this.filedata);

					axios.post(URL+'/api/Provider/SystemVersion', Form).then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						if(res.data.code == 0){
							_this.$message({
								message: '新增成功',
								type: 'success'
							});

							_this.dialogTableVisibleadd = false;
							_this.add = {
								VersionNum: '',
								FilePath: '',
								UploadPath: 'Upload',
								TerminalType: '0',
								TerminalTypeName: '请选择',
								UploadType: '',
								Remark: ""
							}
							_this.getVersionList();
						}else{
							_this.$message({
								message: res.data.message,
								type: 'info'
							});
						}

					}).catch(function(error) {
						console.log(error);
					});
				}
			},
			getTerminalType() { //终端类型列表zxj
				let _this = this;
				let URL = ServerUrl;
				this.$http.get(URL + '/api/Provider/TerminalType?PageIndex=1&PageSize=100&SearchKey=&ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '').then(function(res) {
					console.log(res.data)
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.terminalList = response.terminalTypeList;
					console.log(11111111111111111)
					console.log(_this.terminalList)

				}).catch(function(error) {
					console.log(error);
				});
			},
			getselect() { //终端类型下拉框zxj
				this.options2 = [];
				var URL = window.ServerUrl;
				let _this = this;
				let selDate = {
					ClientKey: localStorage.clientKey,
					Token: localStorage.token,
					dataType: "TerminalType",
				}

				axios.post(URL + '/api/Provider/DropDown', selDate).then(function(res) {
					_this.options2 = []
					console.log(res.data.data.items)
					let response = res.data.data.items;
					_this.options2 = response;

					console.log(_this.options2)
				}).catch(function(error) {
					console.log(error);
				});
			},
			getVersionList(isall) {
				this.value = ""
				let _this = this;
				let URL = ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage;
                var terminalType = '';
                 var par={
                        "is_force_upgrade": true,
                        "operating_system": "ANDROID",
                        "page_number": pageSize,
                        "page_size": this.currentPage,
                        "usable_range": "PUBLIC",
                        "version": "1.1.2"
                        }
				if(!isall) {
					terminalType = this.value;
                }
                	this.$http.post(URL + '/super/admin/api/v1/app_upgrade_management/list_app_upgrade_infos',par ).then(function(res) {
					console.log(res)

			if(res.status===200&&res.data.result=="ok"){

					let response = res.data.data;
					var list = response.regions
;

					console.log(response)
					}
					if(res.data.result=="error"){
						_this.$message({
				message: res.data.error_description,
				type: 'warning'
			});
						 console.log(res);
					}

				}).catch(function(error) {
					console.log(error);
				});


			},
			queryVersionList(isall) {
				if(this.value === '') {
					this.$message({
						message: '请选择查询项',
						type: 'warning'
					});
				} else {
					let _this = this;
					let URL = ServerUrl;
					var pageSize = this.pagesize,
						currentPage = this.currentPage;
					var terminalType = '';
					if(!isall) {
						terminalType = this.value;
					}
					this.$http.get(URL + '/api/Provider/SystemVersion?TerminalTypeName=' + terminalType + '&PageIndex=' + currentPage + '&PageSize=' + pageSize + '&SearchKey=&ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '').then(function(res) {
						console.log(res.data)
						_this.reLogin(res.data.code);//提示帐号登陆
						let response = res.data.data;
						_this.tableData3 = response.versionList;
						let totalall = res.data.totalDataCount;
						_this.total = totalall;

						if(res.data.code === 0) {
							_this.$message({
								message: '查询成功',
								type: 'success'
							});
						} else {
							_this.$message({
								message: res.data.message,
								type: 'info'
							});
						}
					}).catch(function(error) {
						console.log(error);
					});
				}
			},
			getFile(e) {
				console.log(e)
				// document.getElementById("file").value = document.getElementById("files").value;
				this.file = e.target.files[0];
				//debugger;
				var file = document.getElementById("files").files[0];
				this.filedata = file;
				console.log(e)
				this.filezip = this.file.type
				document.getElementById("file").value = file.name
			},
			changeFun(val) { //复选框
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			handleSizeChange: function(size) {
				this.pagesize = size;

			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				page = this.currentPage;
				//this.getMenuInfoList();  //获取列表的函数
				// console.log("search:"+this.value);
				this.getVersionList(false);
			},
			// removeDate3(index) { //删除
			// 	var cheklength = this.multipleSelection;
			// 	if(cheklength.length === 0) {
			// 		this.$message({
			// 			message: '请选择一项数据',
			// 			type: 'warning'
			// 		});
			// 	} else {
			// 		this.$confirm('是否执行删除操作?', '消息', {
			// 			confirmButtonText: '确定',
			// 			cancelButtonText: '取消',
			// 			type: 'warning'
			// 		}).then(() => {
			// 			var str = [];
			// 			var _this = this;
			// 			let URL = ServerUrl;
			// 			let cheklist = [];
			// 			//debugger;
			// 			for(let i = 0; i < cheklength.length; i++) {
			// 				cheklist.push(cheklength[i].versionID)
			// 				console.log(cheklist)
			// 				var strlist = cheklist.toString();
			// 			}
			// 			var delDate = {
			// 				clientKey: localStorage.clientKey,
			// 				token: localStorage.token,
			// 				idList: cheklist
			// 			}
			// 			console.log(delDate);
			// 			axios.delete(URL + '/api/Provider/SystemVersion', {data: delDate}).then(function(res) {
			// 				console.log(res);

			// 				_this.reLogin(res.data.getResultEntity.code);//提示帐号登陆
			// 				if(res.data.getResultEntity.code === 0) {
			// 					_this.$message({
			// 						message: '删除成功',
			// 						type: 'success'
			// 					});
			// 					_this.getVersionList();
			// 				} else {
			// 					_this.$message({
			// 						message: res.data.getResultEntity.message,
			// 						type: 'info'
			// 					});
			// 				}
			// 			}).catch(function(error) {
			// 				console.log(error);
			// 			});

			// 		}).catch(() => {
			// 			this.$message({
			// 				type: 'info',
			// 				message: '已取消删除'
			// 			});
			// 		});
			// 	}
			// },
			getTerminalType() { //终端类型列表zxj
				let _this = this;
				let URL = ServerUrl;
				this.$http.get(URL + '/api/Provider/TerminalType?PageIndex=1&PageSize=100&SearchKey=&ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '').then(function(res) {
					console.log(res.data)
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.terminalList = response.terminalTypeList;


				}).catch(function(error) {
					console.log(error);
				});
			},
			addTerminalType() { //新增终端类型列表zxj
				var flag = true;
				if(this.addinputdata == '') {
					this.$message({
						message: '终端类型不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(flag == true) {
					let _this = this;
					var name = this.addinputdata;
					let addDate = {
						terminalTypeModel: {
							groupName: "终端类型",
							itemName: name,
							itemValue: name,
							itemType: "System.String"
						},
						ClientKey: localStorage.clientKey,
						Token: localStorage.token
					}
					console.log(addDate)
					this.sysserver.addTerminalType(addDate).then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						if(res.data.code === 0) {
							_this.$message({
								message: '新增成功',
								type: 'success'
							});
							_this.dialogTableVisibleadd = false;
							_this.addinputdata = '';
							_this.getTerminalType();
						} else {
							_this.$message({
								message: res.data.message,
								type: 'info'
							});
						}
					}).catch(function(error) {
						console.log(error);
					});
				}

			},
			getid(val) { //获取value和idzxj
				console.log(val);
				this.addinputdata = val.itemValue;
				this.terminalID = val.id;
			},
			editTerminalType() { //编辑终端类型列表zxjvar flag = true;
				var flag = true;
				if(this.addinputdata == '') {
					this.$message({
						message: '终端类型不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(flag == true) {
					let _this = this;
					var name = this.addinputdata;
					let editDate = {
						terminalTypeModel: {
							id: this.terminalID,
							groupName: "终端类型",
							itemName: name,
							itemValue: name,
							itemType: "System.String"
						},
						ClientKey: localStorage.clientKey,
						Token: localStorage.token
					}
					console.log(editDate)
					this.sysserver.editTerminalType(editDate).then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						if(res.data.code === 0) {
							_this.$message({
								message: '编辑成功',
								type: 'success'
							});
							_this.dialogTableVisibleadd = false;
							_this.getTerminalType();
							_this.addinputdata = ''
						} else {
							_this.$message({
								message: res.data.message,
								type: 'info'
							});
						}
					}).catch(function(error) {
						console.log(error);
					});
				}
			},
			removeTerminalType() { //删除终端类型列表zxj
				if(this.terminalID === '') {
					this.$message({
						message: '请选择一项数据',
						type: 'warning'
					});
				} else {
					this.$confirm('是否执行删除操作?', '消息', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let _this = this;
						let URL = ServerUrl;
						var delDate = {
							clientKey: localStorage.clientKey,
							token: localStorage.token,
							id: this.terminalID
						}
						console.log(delDate)
						axios.delete(URL + '/api/Provider/TerminalType', {
							data: delDate
						}).then(function(response) {
							console.log(response)
							_this.reLogin(response.data.code);//提示帐号登陆
							if(response.data.code === 0) {
								_this.$message({
									message: '删除成功',
									type: 'success'
								});
								_this.addinputdata = '';
								_this.getTerminalType()
							} else {
								_this.$message({
									message: response.data.message,
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
				}
			}
		},
		updated() {
			var addmodHei = $('#userAddModel .el-dialog').height();
			$('#userAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
			$('#userAddModel .el-dialog').css('marginBottom', 0);
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
		color: #000;
		width: 90px;
		height: 30px;
		background: #e7eff9;
		border-radius: 3px;
		position: absolute;
		z-index: 19;
		line-height: 30px;
		text-align: center;
	}

	#files {
		width: 90px;
		height: 30px;
		position: absolute;
		opacity: 0;
		z-index: 20;
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

	.userBtn {
		overflow: hidden;
		padding-top: 24px;
		text-align: right;
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
    .Selectfont{
        margin-left: 20px
    }

	.zForm span.btnRight {
		float: right;
		display: inline-block;
	}
</style>
<style type="text/css">
	#uploadForm {
		margin-top:0;
	}
	@import url("../media/lkjmedia.css");
	.TerminaLeft li {
		margin-top: 4px;
		font-size: 14px;
		text-indent: 16px;
	}

	.TerminaLeft li:hover,
	.TerminaLeft li:hover {
		/*background-color: #409EFF;*/
		background: #57e29b;
		color: #333;
	}

	.TerminaLeft li:focus,
	.TerminaLeft li:focus {
		/*background-color: #409EFF;*/
		background: #57e29b;
		color: #333;
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
		height: 360px;
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

  #userAddModel #files {
    width: 90px;
    height: 30px;
    position: absolute;
    opacity: 0;
    z-index: 20;
    top: 8px;
  }

  #userAddModel .el-dialog {
		width: 1100px;
		top: 50%;
	}

	#userAddModel .el-dialog__body {
		padding: 24px 24px 18px;
	}

	#userAddModel .el-checkbox {
		float: left;
	}

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
		height: 162px;
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

	#userAddModel .userBtn .el-form-item {
		width: 100%;
	}

	#userAddModel .el-textarea {
		width: 106.2%;
	}

	.textarea .el-textarea__inner {
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
</style>
