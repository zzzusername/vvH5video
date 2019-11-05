<template>
	<div class="mRight">
		<div class="mRightTwo">
			<div class="zForm">

				<span>所属流媒体：</span><input class="zInput" type="text" placeholder="" /><span>状态：</span>
				<div class="zSelect">
					<el-select v-model="value" class="zgroup" @change="getvalue" placeholder="--请选择--">
						<el-option v-for="item in options" :key="item.index" :label="item.value" :value="item.key"></el-option>
					</el-select>
				</div>
				<button @click="queryBoxStatusList">查询</button><button @click="allBoxStatusList">全部</button>
			</div>
			<div class="zTable">
				<div class="elTable">
					<el-table ref="multipleTable" :data="BoxStatus" tooltip-effect="dark" style="width: 100%">
						<el-table-column type="index" label="序号"></el-table-column>
						<el-table-column prop="serverName" label="所属流媒体"></el-table-column>
						<el-table-column prop="userAccount" label="用户账号"></el-table-column>
						<el-table-column prop="deviceBox" label="盒子号"></el-table-column>
						<el-table-column prop="businessStatus" label="业务状态"></el-table-column>
						<el-table-column prop="description" label="业务描述"></el-table-column>
						<el-table-column prop="deviceStatus" label="状态"></el-table-column>
						<el-table-column prop="isLock" label="是否锁定"></el-table-column>
					</el-table>
				</div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="total, prev, pager, next, jumper" :total="total"> </el-pagination>
			</div>
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
				value: '',
				total: 0,
				BoxStatus: [],
				options: [],
				currentPage: page,
				pagesize: scopes
			}

		},
		mounted: function() {
			var hei = document.documentElement.clientHeight;
			$('.mRightTwo').css('height', hei - 178);
			this.getBoxStatusList();
			this.getSelect();
			$(window).resize(function () {
				var wid = document.documentElement.clientWidth,
				hei = document.documentElement.clientHeight;
				$('.mRightTwo').css('height', hei - 178);
			})
		},
		methods: {
			getvalue(value) { //获取选中短信类型的值zxj
				this.value = value;
				console.log(this.value)
			},
			getSelect() { //状态select框zxj
				let _this = this;
				let selDate = {
					ClientKey: localStorage.clientKey,
					Token: localStorage.token,
					dataType: "BoxStatus",
				}
				this.myserver.getSelect(selDate).then(function(res) {
					let response = res.data.data.items;
					_this.options = response;
					console.log(_this.options)
					_this.options.unshift({
						value: "请选择",
						key: ""
					})
				}).catch(function(error) {
					console.log(error);
				});
			},
			getBoxStatusList() {
				let _this = this;
				let URL = ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage,
					serverName = $('.zInput').val();
				this.$http.get(URL + '/api/Provider/BoxStatusDetial?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ServerName=' + serverName + '&DeviceStatus=' + _this.value + '&PageIndex=' + currentPage + '&PageSize=' + pageSize + '').then(function(res) {
					// debugger
					console.log(res)
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.BoxStatus = response.userControllogList;
					let totalall = res.data.totalDataCount;
					_this.total = totalall;
				}).catch(function(error) {
					console.log(error);
				});
			},
			//全部数据LKJ
			allBoxStatusList() {
				page = 1;
				this.currentPage = 1;
				let _this = this;
				let URL = ServerUrl;
				let serverName = $('.zInput').val();
				var pageSize = this.pagesize,
					currentPage = this.currentPage;
				this.$http.get(URL + '/api/Provider/BoxStatusDetial?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ServerName=&DeviceStatus=&PageIndex=' + currentPage + '&PageSize=' + pageSize + '').then(function(res) {
					console.log(res)
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.BoxStatus = response.userControllogList;
					let totalall = res.data.totalDataCount;
					_this.total = totalall;
					if(res.data.code === 0) {
						_this.$message({
							message: '全部数据',
							type: 'success'
						});
						$('.zForm input').val('')
						_this.value = ''
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
			},
			//查询数据zxj
			queryBoxStatusList() {
				page = 1;
				this.currentPage = 1;
				if($('.zInput').val() === '' && this.value === '') {
					this.$message({
						message: '请填写查询项',
						type: 'warning'
					});
				} else {
					let _this = this;
					let URL = ServerUrl;
					let serverName = $('.zInput').val();
					var pageSize = this.pagesize,
						currentPage = this.currentPage;

					this.$http.get(URL + '/api/Provider/BoxStatusDetial?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ServerName=' + serverName + '&DeviceStatus=' + _this.value + '&PageIndex=' + currentPage + '&PageSize=' + pageSize + '').then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						let response = res.data.data;
						_this.BoxStatus = response.userControllogList;
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
			handleSizeChange: function(size) {
				this.pagesize = size;
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				page = this.currentPage;
				this.getBoxStatusListPage = 1;
				this.getBoxStatusList()
			},
		}
	}
	import Tools from '../media/Tools.js'
</script>
<style scoped>
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
	@import url("../media/lkjmedia.css");
</style>