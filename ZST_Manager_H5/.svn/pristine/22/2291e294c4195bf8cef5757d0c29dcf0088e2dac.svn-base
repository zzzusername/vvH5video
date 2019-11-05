<template>
	<div class="mRight" id="messageBox">
		<div class="mRightTwo">
			<div class="zForm">
				<span>模板名称：</span><input class="zInput inputname" type="text" placeholder="" /><span>模板内容：</span><input class="zInput inputcontent" type="text" placeholder="" />
				<button @click="queryMessageTemplet">查询</button><button @click="allMessageTemplet">全部</button>
				<span class="btnRight"><button @click="addOpen">新增</button><button @click="removeDate3">删除</button><button @click="Enable">启用</button><button @click="Disable">禁用</button></span>
			</div>
			<div class="zTable">
				<div class="elTable">
					<vue-scroll :ops="ops" ref="vs">
						<div class="scrollbox">
							<el-table ref="multipleTable" @selection-change="changeFun" :data="SmsTemplatedate" tooltip-effect="dark" style="width: 100%">
								<el-table-column type="selection" @selection-change="changeFun"></el-table-column>
								<el-table-column type="index" label="序号"></el-table-column>
								<el-table-column prop="smTempletName" label="模板名称"></el-table-column>
								<el-table-column prop="smTempletContent" label="模板内容"></el-table-column>
								<el-table-column prop="isEnable" label="是否启用">
									<template slot-scope="scope">
										<span v-if="scope.row.isEnable === true">启用</span>
										<span v-else>禁用</span>
									</template>
								</el-table-column>
								<el-table-column prop="remark" label="备注"></el-table-column>
								<el-table-column prop="look" label="查看">
									<template slot-scope="scope">
										<a href="javascript:;" @click="pushrowlook(scope.$index, scope.row)"><img src="../../assets/look.png" alt=""></a>
									</template>
								</el-table-column>
								<el-table-column prop="edit" label="编辑">
									<template slot-scope="scope">
										<a href="javascript:;" @click="pushrow(scope.$index, scope.row)"><img src="../../assets/edit2.png" alt=""></a>
									</template>
								</el-table-column>
								<!-- <div class="aa" style="display:none;">
							<el-table-column prop="smparentid" label="模板主类型" width="0"></el-table-column>
							<el-table-column prop="smTempletTypeID" label="模板类型" width="0"></el-table-column>
						</div> -->

							</el-table>
						</div>
					</vue-scroll>
				</div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
			</div>
		</div>
		<div id="shortMsgAddModel">
			<el-dialog :close-on-click-modal="false" title="短信模板 - 新增" :visible.sync="dialogTableVisibleadd">
				<el-form :model="add" ref="edit" label-width="38%" class="demo-ruleForm">
					<div class="formTable">
						<div class="block">
							<el-form-item label="模板名称：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-input v-model="add.smTempletName" maxlength='200'></el-input>
							</el-form-item>
							<div class="infoMsg">
								<img src="../../assets/info.png">
								<!-- <span>根据需要修改密码，留空不修改密码</span> -->
							</div>
						</div>
						<div class="block">
							<el-form-item label="是否启用：" prop="name">
								<div class="checkboxBg">
									<el-checkbox v-model="add.isEnable" name="type"></el-checkbox>&nbsp;<span>{{ add.isEnable ? "启用" : "禁用" }}</span>
								</div>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="模板主类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-select v-model="add.smparentid" @change="getChild" placeholder="--请选择--">
									<el-option v-for="item in selectParent" :key="item.index" :label="item.value" :value="item.key"></el-option>
								</el-select>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="模板类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-select v-model="add.smTempletTypeID" @change="getchildval" placeholder="--请选择--">
									<el-option v-for="item in selectChild" :key="item.index" :label="item.value" :value="item.key"></el-option>
								</el-select>
							</el-form-item>
						</div>
						<div class="textarea">
							<el-form-item label="模板内容：" :rules="[{ required: true, message: ' '}]" label-width="19%">
								<el-input type="textarea" v-model="add.smTempletContent" resize="none" maxlength="200"></el-input>
							</el-form-item>
						</div>
						<div class="textarea">
							<el-form-item label="备注：" label-width="19%">
								<el-input type="textarea" v-model="add.remark" resize="none" maxlength="500"></el-input>
							</el-form-item>
						</div>
					</div>
					<div class="userBtn">
						<el-form-item>
							<el-button type="primary" @click="addMessageTemplet">保存</el-button>
							<el-button @click="addCancel">取消</el-button>
						</el-form-item>
					</div>
				</el-form>
			</el-dialog>
		</div>
		<div id="shortMsgEditModel">
			<el-dialog :close-on-click-modal="false" title="短信模板 - 编辑" :visible.sync="dialogTableVisibleedit">
				<el-form :model="edit" ref="edit" label-width="38%" class="demo-ruleForm">
					<div class="formTable">
						<div class="block">
							<el-form-item label="模板名称：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-input v-model="edit.smTempletName" maxlength="200"></el-input>
							</el-form-item>
							<div class="infoMsg">
								<img src="../../assets/info.png">
								<!-- <span>根据需要修改密码，留空不修改密码</span> -->
							</div>
						</div>
						<div class="block">
							<el-form-item label="是否启用：" prop="name">
								<div class="checkboxBg">
									<el-checkbox v-model="edit.isEnable" name="type"></el-checkbox>
								</div>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="模板主类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-select v-model="edit.smTempletTypeDicName" @change="getChild2" placeholder="--请选择--">
									<el-option v-for="item in selectParent" :key="item.index" :label="item.value" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="模板类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-select v-model="edit.smTempletTypeID==2 ? '互联网' : '视联网'" @change="getchildval2" placeholder="--请选择--">
									<el-option v-for="item in selectChild" :key="item.index" :label="item.value" :value="item"></el-option>
								</el-select>
							</el-form-item>
						</div>
						<div class="textarea">
							<el-form-item label="模板内容：" :rules="[{ required: true, message: ' '}]" label-width="19%">
								<el-input type="textarea" v-model="edit.smTempletContent" resize="none" maxlength="200"></el-input>
							</el-form-item>
						</div>
						<div class="textarea">
							<el-form-item label="备注：" label-width="19%">
								<el-input type="textarea" v-model="edit.remark" resize="none" maxlength="500"></el-input>
							</el-form-item>
						</div>
					</div>
					<div class="userBtn">
						<el-form-item>
							<el-button type="primary" @click="editUp">保存</el-button>
							<el-button @click="editCancel">取消</el-button>
						</el-form-item>
					</div>
				</el-form>
			</el-dialog>
		</div>
		<div id="shortMsgLookModel">
			<el-dialog :close-on-click-modal="false" title="短信模板 - 查看" :visible.sync="dialogTableVisiblelook">
				<el-form :model="edit" ref="edit" label-width="38%" class="demo-ruleForm">
					<div class="formTable">
						<div class="block">
							<el-form-item label="模板名称：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-input v-model="edit.smTempletName" readonly></el-input>
							</el-form-item>
							<div class="infoMsg">
								<img src="../../assets/info.png">
								<!-- <span>根据需要修改密码，留空不修改密码</span> -->
							</div>
						</div>
						<div class="block">
							<el-form-item label="是否启用：" prop="name">
								<div class="checkboxBg">
									<el-checkbox v-model="edit.isEnable" name="type" disabled></el-checkbox>
								</div>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="模板主类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-input v-model="edit.smTempletTypeDicID==1 ? '运维' : ''" readonly></el-input>
							</el-form-item>
						</div>
						<div class="block">
							<el-form-item label="模板类型：" :rules="[{ required: true, message: ' '}]" prop="name">
								<el-input v-model="edit.smTempletTypeID==2 ? '互联网' : '视联网'" readonly></el-input>
							</el-form-item>
						</div>
						<div class="textarea">
							<el-form-item label="模板内容：" :rules="[{ required: true, message: ' '}]" label-width="19%">
								<el-input type="textarea" v-model="edit.smTempletContent" resize="none" readonly></el-input>
							</el-form-item>
						</div>
						<div class="textarea">
							<el-form-item label="备注：" label-width="19%">
								<el-input type="textarea" v-model="edit.remark" resize="none" readonly></el-input>
							</el-form-item>
						</div>
					</div>
					<div class="userBtn">
						<el-form-item>
							<el-button @click="dialogTableVisiblelook = false">取消</el-button>
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
	var page = 1;
	export default {
		data() {
			return {
				ops: {
					vuescroll: {
						mode: 'native'
					},
					scrollPanel: {}
				},
				total: 1,
				value: "",
				checked: false,
				multipleSelection: [],
				dialogTableVisibleadd: false,
				dialogTableVisibleedit: false,
				dialogTableVisiblelook: false,
				add: {
					id: '',
					smTempletName: '',
					smTempletContent: '',
					isEnable: true,
					remark: '',
					createTime: '',
					updateTime: '',
					smTempletTypeID: '',
					smparentid: ''
				},
				edit: {
					id: '',
					smTempletName: '',
					smTempletContent: '',
					isEnable: true,
					remark: '',
					createTime: '',
					updateTime: '',
					smTempletTypeID: '',
					smparentid: '',
					smTempletTypeDicID: 0,
					smTempletTypeDicName: '请选择'
				},
				selectParent: '',
				ParentVal: '',
				selectChild: '',
				ChildVal: '',
				SmsTemplatedate: [],
				currentPage: page,
				pagesize: scopes,
			};
		},
		mounted: function() {
			let hei = document.documentElement.clientHeight;
			$(".mRightTwo").css("height", hei - 178);
			$(window).resize(function () {
				var wid = document.documentElement.clientWidth,
				hei = document.documentElement.clientHeight;
				$('.mRightTwo').css('height', hei - 178);
			})
			this.getMessageTemplet();
			this.getTemplateParent();
		},
		methods: {
			addOpen(){
				this.add = {
					id: '',
					smTempletName: '',
					smTempletContent: '',
					isEnable: true,
					remark: '',
					createTime: '',
					updateTime: '',
					smTempletTypeID: '',
					smparentid: ''
				}
				this.dialogTableVisibleadd = true;
			},
			addCancel() { //取消新增
				this.$message({
					message: '已取消新增',
					type: 'info'
				});
				this.dialogTableVisibleadd = false;
				$('#shortMsgAddModel input').val('');
				$('#shortMsgAddModel textarea').val('');
				this.add.smparentid = ''
				this.add.smTempletTypeID = ''
			},
			editCancel() { //取消编辑
				this.$message({
					message: '已取消编辑',
					type: 'info'
				});
				this.dialogTableVisibleedit = false;
			},
			getMessageTemplet() { //获取数据列表zxj

				let _this = this;
				var URL = window.ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage,
					smtName = $('.inputname').val(),
					smtContent = $('.inputcontent').val();
				this.$http.get(URL + '/api/Provider/ShortMessageTemplet', {
					params: {
						SMTempletName: smtName,
						SMTempletContent: smtContent,
						PageIndex: currentPage,
						PageSize: pageSize,
						ClientKey: localStorage.clientKey,
						Token: localStorage.token
					}
				}).then(function(res) {
					console.log(res);
					_this.reLogin(res.data.code);//提示帐号登陆
					
					if(res.data.code == 0){
						let response = res.data.data;
						_this.SmsTemplatedate = response.shortMsgTempList;
						let totalall = res.data.totalDataCount;
						_this.total = totalall;
						if(res.data.data.shortMsgTempList.length == 0 && _this.currentPage > 1){
							var pageSize2 = _this.pagesize,
								currentPage2 = _this.currentPage -1;
							axios.get(URL + '/api/Provider/ShortMessageLog?PageIndex=' + currentPage2 + '&PageSize=' + pageSize2 + '&SMTempletName=' + smtName + '&SMTempletContent=' + smtContent + '&ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '').then(function(res2) {
								_this.reLogin(res2.data.code);//提示帐号登陆
								console.log(res2)
								if(res2.data.code == 0){
									let response = res2.data;
									_this.SmsTemplatedate = response.data.shortMsgTempList;
									_this.total = response.totalDataCount;
								}
								console.log(_this.SmsTemplatedate)

							}).catch(function(error) {
								console.log(error);
							});
						}
						if(_this.currentPage < 1){
							return false;
						}
					}
					
				}).catch(function(error) {
					console.log(error);
				});

			},
			allMessageTemplet() { //获取数据列表zxj
				page = 1;
				this.currentPage = 1;
				let _this = this;
				var URL = window.ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage;
				this.$http.get(URL + '/api/Provider/ShortMessageTemplet', {
					params: {
						SMTempletName: '',
						SMTempletContent: '',
						PageIndex: currentPage,
						PageSize: pageSize,
						ClientKey: localStorage.clientKey,
						Token: localStorage.token
					}
				}).then(function(res) {
					console.log(res);
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.SmsTemplatedate = response.shortMsgTempList;
					let totalall = res.data.totalDataCount;
					_this.total = totalall;
					
					if(res.data.code === 0) {
						_this.$message({
							message: '全部数据',
							type: 'success'
						});
						$('.zForm input').val('')
					} else {
							if(res.data.code==window.code ) return;
						_this.$message({
							message: '查询失败',
							type: 'info'
						});
					}
				}).catch(function(error) {
					console.log(error);
				});

			},
			queryMessageTemplet() { //查询数据列表zxj
				page = 1;
				this.currentPage = 1;
				if($('.inputname').val() === '' && $('.inputcontent').val() === '') {
					this.$message({
						message: '请填写查询项',
						type: 'warning'
					});
				} else {
					let _this = this;
					var URL = window.ServerUrl;
					var pageSize = this.pagesize,
						currentPage = this.currentPage,
						smtName = $('.inputname').val(),
						smtContent = $('.inputcontent').val();
					this.$http.get(URL + '/api/Provider/ShortMessageTemplet', {
						params: {
							SMTempletName: smtName,
							SMTempletContent: smtContent,
							PageIndex: currentPage,
							PageSize: pageSize,
							ClientKey: localStorage.clientKey,
							Token: localStorage.token
						}
					}).then(function(res) {
						console.log(res);
						_this.reLogin(res.data.code);//提示帐号登陆
						let response = res.data.data;
						_this.SmsTemplatedate = response.shortMsgTempList;
						let totalall = res.data.totalDataCount;
						_this.total = totalall;
						
						if(res.data.code === 0) {
							_this.$message({
								message: '查询成功',
								type: 'success'
							});
						} else {
								if(res.data.code==window.code ) return;
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
			getTemplateParent() { //获取短信模板主类型Select列表zxj
				let _this = this;
				let selDate = {
					ClientKey: localStorage.clientKey,
					Token: localStorage.token,
					dataType: "SmsTemplateDicParent",
				}
				this.myserver.getSelect(selDate).then(function(res) {
					console.log(res)
					let response = res.data.data.items;
					_this.selectParent = response;
					// console.log(_this.selectParent)
				}).catch(function(error) {
					console.log(error);
				});
			},
			getChild(val) { //获取短信模板子类型Select列表zxj

				console.log(val)
				let _this = this;
				var URL = window.ServerUrl;
				var ParentId = val;
				axios.get(URL + '/api/Provider/ShortMessageTemplet/GetTempChildType?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ParentId=' + ParentId + '').then(function(res) {
					console.log(res)
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.selectChild = response.items;
					
				}).catch(function(error) {
					console.log(error);
				});
			},
			getChild2(val) { //获取短信模板子类型Select列表zxj
				console.log(val)
				let _this = this;
				var URL = window.ServerUrl;
				var ParentId = val.key;
				axios.get(URL + '/api/Provider/ShortMessageTemplet/GetTempChildType?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ParentId=' + ParentId + '').then(function(res) {
					console.log(res)
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.selectChild = response.items;
					
				}).catch(function(error) {
					console.log(error);
				});
			},
			getchildval(val) { //获取选中的模板类型的值zxj
				this.ChildVal = val.key;
				console.log(val)
			},
			getchildval2(val) { //获取选中的模板类型的值zxj
				this.edit.smTempletTypeID = val.key
				this.edit.smTempletTypeName = val.value
			},
			changeFun(val) { //复选框
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			//新增短信模板zxj
			addMessageTemplet() {
				var flag = true;
				if(this.add.smTempletName == '') {
					this.$message({
						message: '模板名称不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(this.add.smTempletContent == '') {
					this.$message({
						message: '模板内容不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(this.add.smTempletTypeDicName == '请选择'){
					this.$message({
						message: '请选择模板主类型',
						type: 'warning'
					});
					flag = false;
				} 
				if(this.add.smTempletTypeID <= 0){
					this.$message({
						message: '请选择模板类型',
						type: 'warning'
					});
					flag = false;
				} 
				if(flag == true){
					let _this = this;
					let addDate = {
						shortMessageTemplet: {
							smTempletName: this.add.smTempletName,
							smTempletContent: this.add.smTempletContent,
							isEnable: this.add.isEnable,
							remark: this.add.remark,
							smTempletTypeID: this.add.smTempletTypeID
						},
						ClientKey: localStorage.clientKey,
						Token: localStorage.token
					}

					console.log(addDate)

					this.msgserver.addMessageTemplet(addDate).then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						_this.getMessageTemplet();
						
						if(res.data.code === 0) {
							_this.$message({
								message: '新增成功',
								type: 'success'
							});
							_this.add.smTempletName = ''
							_this.add.smTempletContent = ""
							_this.add.remark = ""
							$('#shortMsgAddModel inpput').val('');
							$('#shortMsgAddModel textarea').val('');
							_this.add.smparentid = '';
							_this.add.smTempletTypeID = '';
							_this.dialogTableVisibleadd = false;
							_this.getMessageTemplet();
						} else {
								if(res.data.code==window.code ) return;
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
			pushrowlook(index, row) { //查看
				console.log(row)
				this.dialogTableVisiblelook = true;

				this.edit.id = row.id;
				this.edit.smTempletName = row.smTempletName;
				this.edit.smTempletContent = row.smTempletContent;
				this.edit.isEnable = true,
				this.edit.remark = row.remark;
				this.edit.createTime = row.createTime;
				this.edit.updateTime = row.updateTime;
				this.edit.smTempletTypeID = row.smTempletTypeID;
				this.edit.smTempletTypeDicID = row.smTempletTypeDicID;
				this.edit.smparentid = row.smparentid;
				console.log(this.edit)
			},
			pushrow(index, row) { //编辑
				console.log(row)
				this.dialogTableVisibleedit = true;

				this.edit.id = row.id;
				this.edit.smTempletName = row.smTempletName;
				this.edit.smTempletContent = row.smTempletContent;
				this.edit.isEnable = row.isEnable,
				this.edit.remark = row.remark;
				this.edit.createTime = row.createTime;
				this.edit.updateTime = row.updateTime;
				this.edit.smTempletTypeID = row.smTempletTypeID;
				this.edit.smTempletTypeDicID = row.smTempletTypeDicID;
				this.edit.smparentid = row.smparentid;

				var smTempletTypeDicID = this.edit.smTempletTypeDicID; //类别当前
				var smTempletTypeDic = this.selectParent; //类别总
				// var programCategory = ''; //类别
				// 类别
				for(var key in smTempletTypeDic) {
					if(smTempletTypeDic[key].key === smTempletTypeDicID.toString()) {
						this.edit.smTempletTypeDicName = smTempletTypeDic[key].value

					};
				};
				console.log(this.edit)
			},
			editUp(row) { //编辑短信模板zxj
				var flag = true;
				if(this.edit.smTempletName == '') {
					this.$message({
						message: '模板名称不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(this.edit.smTempletContent == '') {
					this.$message({
						message: '模板内容不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				
				if(this.edit.smparentid <= 0){
					this.$message({
						message: '请选择模板主类型',
						type: 'warning'
					});
					flag = false;
				} 
				if(this.edit.smTempletTypeID <= 0){
					this.$message({
						message: '请选择模板类型',
						type: 'warning'
					});
					flag = false;
				} 
				if(flag == true){
					this.dialogTableVisibleedit = true;
					let _this = this;
					let editDate = {
						OperationType: 1,
						ClientKey: localStorage.clientKey,
						Token: localStorage.token,
						shortMessageTempletList: [{
							id: this.edit.id,
							smTempletName: this.edit.smTempletName,
							smTempletContent: this.edit.smTempletContent,
							isEnable: this.edit.isEnable,
							remark: this.edit.remark,
							smTempletTypeID: this.edit.smTempletTypeID
						}]
					}

					this.msgserver.editMessageTemplet(editDate).then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						if(res.data.code === 0) {
							_this.$message({
								message: '编辑成功',
								type: 'success'
							});
						} else {
								if(res.data.code==window.code ) return;
							_this.$message({
								message: res.data.message,
								type: 'info'
							});
						}

						_this.dialogTableVisibleedit = false;
						_this.getMessageTemplet();

					}).catch(function(error) {
						console.log(error);
					});
				}
			},
			removeDate3() { //删除数据zxj
				var cheklength = this.multipleSelection;
				if(cheklength.length === 0) {
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
						let cheklist = [];
						for(let i = 0; i < cheklength.length; i++) {
							cheklist.push(cheklength[i].id)
							console.log(cheklist)
							var strlist = cheklist.toString();
						}
						var delDate = {
							clientKey: localStorage.clientKey,
							token: localStorage.token,
							shortMsgTempIds: strlist
						}
						console.log(delDate)
						axios.delete(URL + '/api/Provider/ShortMessageTemplet', {
							data: delDate
						}).then(function(response) {
							console.log(response)
							_this.getMessageTemplet()
							_this.reLogin(response.data.code);//提示帐号登陆
							if(response.data.code === 0) {
								_this.$message({
									message: '删除成功',
									type: 'success'
								});
							} else {
									if(response.data.code==window.code ) return;
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

			},
			Enable() { //启用zxj
				var cheklength = this.multipleSelection;
				if(cheklength.length === 0) {
					this.$message({
						message: '请选择一项数据',
						type: 'warning'
					});
				} else {
					this.$confirm('是否执行启用操作?', '消息', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let cheklist = [];
						for(let i = 0; i < cheklength.length; i++) {
							cheklist.push(cheklength[i])
						}
						let _this = this;
						let editDate = {
							OperationType: 2,
							ClientKey: localStorage.clientKey,
							Token: localStorage.token,
							shortMessageTempletList: cheklist
						}
						this.msgserver.editMessageTemplet(editDate).then(function(res) {
							console.log(res)
							_this.getMessageTemplet();
							_this.reLogin(res.data.code);//提示帐号登陆
						}).catch(function(error) {
							console.log(error);
						});

						this.$message({
							type: 'success',
							message: '启用成功',
						});
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消启用'
						});
					});
				}
			},
			Disable() { //禁用zxj
				var cheklength = this.multipleSelection;
				if(cheklength.length === 0) {
					this.$message({
						message: '请选择一项数据',
						type: 'warning'
					});
				} else {
					this.$confirm('是否执行禁用操作?', '消息', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						let cheklist = [];
						for(let i = 0; i < cheklength.length; i++) {
							cheklist.push(cheklength[i])
						}
						let _this = this;
						let editDate = {
							OperationType: 3,
							ClientKey: localStorage.clientKey,
							Token: localStorage.token,
							shortMessageTempletList: cheklist
						}
						console.log(editDate)
						this.msgserver.editMessageTemplet(editDate).then(function(res) {
							console.log(res)
							_this.getMessageTemplet();
							_this.reLogin(res.data.code);//提示帐号登陆
						}).catch(function(error) {
							console.log(error);
						});

						this.$message({
							type: 'success',
							message: '禁用成功',
						});
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消禁用'
						});
					});
				}
			},
			handleSizeChange: function(size) {
				this.pagesize = size;
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				page = this.currentPage;
				this.getMessageTemplet()
			},
		},
		updated() {
			let editmodHei = $('#shortMsgEditModel .el-dialog').height();
			$('#shortMsgEditModel .el-dialog').css('marginTop', -(editmodHei / 2));
			$('#shortMsgEditModel .el-dialog').css('marginBottom', 0);
			let addmodHei = $('#shortMsgAddModel .el-dialog').height();
			$('#shortMsgAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
			$('#shortMsgAddModel .el-dialog').css('marginBottom', 0);
			let lookmodHei = $('#shortMsgLookModel .el-dialog').height();
			$('#shortMsgLookModel .el-dialog').css('marginTop', -(lookmodHei / 2));
			$('#shortMsgLookModel .el-dialog').css('marginBottom', 0);

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
		#messageBox .elTable {
			height: 86%;
		}
		#messageBox .zTable {
			padding-top: 0;
			height: 93%;
		}
		#messageBox .zInput {
			height: 28px;
			line-height: 28px;
			width: 100px;
			padding-left: 0;
		}
		#messageBox.zForm {
			padding-bottom: 15px;
		}
		#messageBox .zForm button{
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
		text-align: left;
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
	#shortMsgAddModel .blockbox .el-form-item__label,
	#shortMsgEditModel .blockbox .el-input__inner,
	#shortMsgLookModel .textarea .el-form-item__label {
		height: 36px;
		margin: 2px 0;
		line-height: 36px;
		border: 1px #3b4872 solid;
	}
	#shortMsgAddModel .textarea .el-form-item__label,
	#shortMsgEditModel .textarea .el-form-item__label,
	#shortMsgLookModel .textarea .el-form-item__label {
		height: 162px;
	}

	@import url("../media/lkjmedia.css");
	#shortMsgEditModel .el-dialog,
	#shortMsgAddModel .el-dialog,
	#shortMsgLookModel .el-dialog {
		width: 1100px;
		top: 50%;
	}
	
	#shortMsgEditModel .el-dialog__body,
	#shortMsgAddModel .el-dialog__body,
	#shortMsgLookModel .el-dialog__body {
		padding: 24px 24px 18px;
	}
	
	#shortMsgEditModel .el-checkbox,
	#shortMsgAddModel .el-checkbox,
	#shortMsgLookModel .el-checkbox {
		float: left;
	}
	
	.block .el-form-item__label,
	.block .el-input__inner,
	.textarea .el-form-item__label {
		height: 36px;
		margin: 2px 0;
		line-height: 36px;
		border: 1px #3b4872 solid;
	}
	
	.textarea .el-form-item__label {
		height: 160px;
	}
	#shortMsgEditModel .block .el-form-item__label,
	#shortMsgAddModel .block .el-form-item__label,
	#shortMsgLookModel .block .el-form-item__label {
		background: #1b274c;
	}
	#shortMsgEditModel .textarea .el-form-item__label,
	#shortMsgAddModel .textarea .el-form-item__label,
	#shortMsgLookModel .textarea .el-form-item__label {
		background: #1b274c;
	}
	#shortMsgEditModel .el-form-item,
	#shortMsgAddModel .el-form-item,
	#shortMsgLookModel .el-form-item {
		margin: 0;
		padding: 0;
		width: 91%;
		float: left;
	}
	
	#shortMsgEditModel .userBtn .el-form-item,
	#shortMsgAddModel .userBtn .el-form-item,
	#shortMsgLookModel .userBtn .el-form-item {
		width: 100%;
	}
	
	#shortMsgEditModel .el-textarea,
	#shortMsgAddModel .el-textarea,
	#shortMsgLookModel .el-textarea {
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
</style>