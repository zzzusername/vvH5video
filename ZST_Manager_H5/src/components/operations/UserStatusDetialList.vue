<template>
	<div class="mRight">
		<div class="mRightTwo">
			<div class="zForm">
				<span>服务器：</span><input class="zInput" type="text" placeholder="" />
				<button class="buttonradius" @click="querUserStatus">查询</button><button class="buttonradius" @click="allUserStatus">全部</button>
			</div>
			<div class="zTable">
				<div class="elTable">
					<el-table ref="multipleTable" :data="userData" tooltip-effect="dark" style="width: 100%">

						<el-table-column type="index" label="序号"></el-table-column>
						<el-table-column prop="userName" label="姓名"></el-table-column>
						<el-table-column label="头像">
							<template slot-scope="scope">
								<img :src="scope.row.headPicUrl" alt="" width="20" height="20">
							</template>
						</el-table-column>
						<el-table-column prop="userAccount" label="帐号"></el-table-column>
						<el-table-column prop="deviceBox" label="虚拟终端"></el-table-column>
						<el-table-column prop="clientType" label="终端类型"></el-table-column>
						<el-table-column label="GIS" width="200">
							<template slot-scope="scope">
								<span>{{ scope.row.longitude }}</span>&nbsp;,
								<span>{{ scope.row.latitude }}</span>
							</template>
						</el-table-column>
						<el-table-column prop="connectionNetType" label="联网方式"></el-table-column>
						<el-table-column prop="businessStatus" label="业务状态"></el-table-column>
						<el-table-column prop="description" label="业务描述"></el-table-column>
						<el-table-column prop="serverName" label="服务器"></el-table-column>
						<el-table-column prop="clientVersion" label="版本"></el-table-column>
					</el-table>
				</div>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="total, prev, pager, next, jumper" :total="total"></el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	import axios from 'axios'
	var page = 0;
	export default {
		data() {
			return {
				value: '',
				total: 0,
				userData: [],
				currentPage: page,
				pagesize: scopes
			}

		},
		mounted: function() {
			var hei = document.documentElement.clientHeight;
			$('.mRightTwo').css('height', hei - 178);
			this.getUserStatus();
			$(window).resize(function () {
				var wid = document.documentElement.clientWidth,
				hei = document.documentElement.clientHeight;
				$('.mRightTwo').css('height', hei - 178);
			})
		},
		methods: {
			gtt() { //拼接图片地址
				let URL = ServerUrl;
				var res = this.userData
				for(var key in res) {
					res[key].headPicUrl = URL + '/' + res[key].headPicUrl
				}
			},
			getUserStatus() { //获取数据列表zxj
				let _this = this;
				let URL = ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage;
				this.$http.get(URL + '/api/Provider/UserStatusDetial?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ServerName=' + $('.zInput').val() + '&PageIndex=' + currentPage + '&PageSize=' + pageSize + '').then(function(res) {
					console.log(res);
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.userData = response.userControllogList;
					let totalall = res.data.totalDataCount
					_this.total = totalall;

					_this.srcUrl = res.data.headPicUrl;
					_this.gtt();
				}).catch(function(error) {
					console.log(error);
				});
			},
			allUserStatus() { //获取全部数据列表zxj
				$('.zInput').val("")
				page = 1;
				this.currentPage = 1;
				let _this = this;
				let URL = ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage;
				this.$http.get(URL + '/api/Provider/UserStatusDetial?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ServerName=&PageIndex=' + currentPage + '&PageSize=' + pageSize + '').then(function(res) {
					console.log(res.data.data);
					_this.reLogin(res.data.code);//提示帐号登陆
					let response = res.data.data;
					_this.userData = response.userControllogList;
					let totalall = res.data.totalDataCount
					_this.total = totalall;

					_this.srcUrl = res.data.headPicUrl;
					_this.gtt();
					console.log(res);
					if(res.data.code === 0) {
						_this.$message({
							message: '全部数据',
							type: 'success'
						});
						$('.zForm input').val('')
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
			querUserStatus() { //查询数据列表zxj
				page = 1;
				this.currentPage = 1;
				if($('.zInput').val() === '') {
					this.$message({
						message: '请填写查询项',
						type: 'warning'
					});
				} else {
					let _this = this;
					let URL = ServerUrl;
					var pageSize = this.pagesize,
						currentPage = this.currentPage;
					var name = $('.zInput').val();
					this.$http.get(URL + '/api/Provider/UserStatusDetial?ClientKey=' + localStorage.clientKey + '&Token=' + localStorage.token + '&ServerName=' + name + '&PageIndex=' + currentPage + '&PageSize=' + pageSize + '').then(function(res) {
						console.log(res.data.data);
						_this.reLogin(res.data.code);//提示帐号登陆
						let response = res.data.data;
						_this.userData = response.userControllogList;
						let totalall = res.data.totalDataCount
						_this.total = totalall;

						_this.srcUrl = res.data.headPicUrl;
						_this.gtt();
						console.log(res);
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
				this.getUserStatus();
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