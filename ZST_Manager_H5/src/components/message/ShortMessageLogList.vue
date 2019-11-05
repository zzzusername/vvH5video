<template>
	<div class="mRight" id="messageListBox">
		<div class="mRightTwo">
			<div class="zForm">
				<span>短信类型：</span>
				<div class="zSelect">
					<el-select v-model="Types" class="zgroup" @change="getvalue" placeholder="--请选择--">
						<el-option v-for="item in options" :key="item.index" :label="item.value" :value="item.key"></el-option>
					</el-select>
				</div>
				<span>接收人手机号：</span><input class="zInput zphone" type="text" placeholder="" />
				<span>状态：</span>
				<div class="zSelect">
					<el-select v-model="Status" class="zgroup" @change="getstatuvalue" placeholder="--请选择--">
						<el-option v-for="statu in statuslist" :key="statu.index" :label="statu.value" :value="statu.key"></el-option>
					</el-select>
				</div>
				<button @click="queryMessageLog">查询</button><button @click="allMessageLog">全部</button>
			</div>
			<div class="zTable">
				<div class="elTable">
					<vue-scroll :ops="ops" ref="vs">
						<div class="scrollbox">
							<el-table id="out-table" ref="multipleTable" :data="MessageLogDate" tooltip-effect="dark" style="width: 100%">

								<el-table-column type="selection"></el-table-column>
								<el-table-column type="index" label="序号"></el-table-column>
								<el-table-column prop="smTempletTypeName" label="短信类型"></el-table-column>
								<el-table-column prop="smTempletName" label="短信模板"></el-table-column>
								<el-table-column prop="sendName" label="发送人姓名"></el-table-column>
								<el-table-column prop="receiveName" label="接收人姓名"></el-table-column>
								<el-table-column prop="receivePhones" label="接收人手机号"></el-table-column>
								<el-table-column prop="messageContent" label="短信内容" width="400"></el-table-column>
								<el-table-column prop="status" label="状态">
									<template slot-scope="scope">
										<span v-if="scope.row.status === 1">发送成功</span>
										<span v-else>发送失败</span>
									</template>
								</el-table-column>
								<el-table-column label="发送时间">
									<template slot-scope="scope">
										<span v-if="scope.row.createTime == '' || scope.row.createTime == null">{{ scope.row.createTime }}</span>
										<span v-else>{{ scope.row.createTime.split('T').join(' ') }}</span>
									</template>
								</el-table-column>
							</el-table>
						</div>
					</vue-scroll>
				</div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="total, prev, pager, next, jumper" :total="total"> </el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
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
				Types: "",
				Status: "",
				multipleSelection: [],
				options: [],
				statuslist: [{
						key: "1",
						value: "发送成功"
					},
					{
						key: "0",
						value: "发送失败"
					}
				],
				MessageLogDate: [],
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
			this.getMessageLog();
			this.getmsgType();
		},
		methods: {
			getvalue(value) { //获取选中短信类型的值zxj
				this.Types = value;
				console.log(this.Types)
			},
			getstatuvalue(value) { //获取选中状态的值zxj
				this.Status = value;
				console.log(this.Status)
			},
			//获取数据列表zxj
			getMessageLog() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				let _this = this;
				let serverPhone = $('.zInput').val();
				var URL = window.ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage;
				this.$http.get(URL + '/api/Provider/ShortMessageLog', {
					params: {
						ShortMsgTempType: this.Types,
						ReceivePhones: serverPhone,
						Status: this.Status,
						PageIndex: currentPage,
						PageSize: pageSize,
						ClientKey: localStorage.clientKey,
						Token: localStorage.token
					}
				}).then(function(res) {
					console.log(res)
					_this.reLogin(res.data.code);//提示帐号登陆
					
					if(res.data.code == 0) {
						loading.close();
						let response = res.data.data;
						_this.MessageLogDate = response.shortMessageLogList;
						let totalall = res.data.totalDataCount;
						_this.total = totalall;
						if(res.data.data.shortMessageLogList.length == 0 && _this.currentPage > 1){
							var pageSize2 = _this.pagesize,
								currentPage2 = _this.currentPage -1;
							axios.get(URL + '/api/Provider/ShortMessageLog?PageIndex=' + currentPage2 + '&PageSize=' + pageSize2 + '&ShortMsgTempType=' + this.Types + '&ReceivePhones=' + serverPhone + '&Status=' + this.Status + '&ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '').then(function(res2) {
								_this.reLogin(res2.data.code);//提示帐号登陆
								console.log(res2)
								if(res2.data.code == 0){
									let response = res2.data;
									_this.MessageLogDate = response.data.shortMessageLogList;
									_this.total = response.totalDataCount;
								}
								console.log(_this.MessageLogDate)

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
			allMessageLog() { //获取全部数据列表zxj
				page = 1;
				this.currentPage = 1;
				let _this = this;
				let serverPhone = $('.zInput').val();
				var URL = window.ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage;
				this.$http.get(URL + '/api/Provider/ShortMessageLog', {
					params: {
						ShortMsgTempType: '',
						ReceivePhones: '',
						Status: '',
						PageIndex: currentPage,
						PageSize: pageSize,
						ClientKey: localStorage.clientKey,
						Token: localStorage.token
					}
				}).then(function(res) {
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.MessageLogDate = response.shortMessageLogList;
					let totalall = res.data.totalDataCount;
					_this.total = totalall;
					console.log(res.data);
					
					if(res.data.code === 0) {
						_this.$message({
							message: '全部数据',
							type: 'success'
						});
						$('.zForm input').val('')
						_this.Types = ''
						_this.Status = ''
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
			queryMessageLog() { //查询数据列表zxj
				page = 1;
				this.currentPage = 1;
				if(this.Types === '' && $('.zInput').val() === '' && this.Status === '') {
					this.$message({
						message: '请填写查询项',
						type: 'warning'
					});
				} else {
					let _this = this;
					let serverPhone = $('.zInput').val();
					var URL = window.ServerUrl;
					var pageSize = this.pagesize,
						currentPage = this.currentPage;
					this.$http.get(URL + '/api/Provider/ShortMessageLog', {
						params: {
							ShortMsgTempType: this.Types,
							ReceivePhones: serverPhone,
							Status: this.Status,
							PageIndex: currentPage,
							PageSize: pageSize,
							ClientKey: localStorage.clientKey,
							Token: localStorage.token
						}
					}).then(function(res) {
						_this.reLogin(res.data.code);//提示帐号登陆
						let response = res.data.data;
						_this.MessageLogDate = response.shortMessageLogList;
						let totalall = res.data.totalDataCount;
						_this.total = totalall;
						console.log(res.data)
						
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
			getmsgType() { //获取短信类型列表zxj

				let _this = this;
				let selDate = {
					ClientKey: localStorage.clientKey,
					Token: localStorage.token,
					dataType: "SmsTemplate",
				}
				this.myserver.getSelect(selDate).then(function(res) {
					console.log(res)

					let response = res.data.data.items;
					_this.options = response;
					_this.options.unshift({
						value: "请选择",
						key: "-1"
					})

				}).catch(function(error) {
					console.log(error);
				});
			},
			handleSizeChange(val) {
				this.pagesize = val;
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				page = this.currentPage;
				this.getMessageLog();
			}
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
			width: 1400px;
		}
	}
	@media screen and (max-width: 1366px) {
		#messageListBox .zTable {
			padding-top: 0;
			overflow: hidden;
		}
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
		overflow-x: auto;
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
	@import url("../media/lkjmedia.css");
</style>