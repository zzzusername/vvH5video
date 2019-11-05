<template>
	<div class="mLeft" id="lodid">
		<div class="navMenubox">
			<el-row class="tac">
				<el-col :span="24">
					<el-menu :default-active="$route.path" :router="true" unique-opened @open="handleOpen" @close="handleClose" class="el-icon-caret-top" background-color="#2d3859" text-color="#fff" active-text-color="#ffd04b">


						<el-submenu :index="item.index" v-for="(item,index1) in items" :key="index1">

							<template v-if="item.children">

								<template slot="title">
									<span>{{item.title}}</span>
								</template>

								<el-menu-item-group v-for="(it,index2) in item.children" :key="index2">
									<router-link :to="it.url" class="MyOption Myopen Mydefault" tag="a">
										<el-menu-item class="MyOptionli" :index="it.url"><span class="imgico"></span>{{it.title}}</el-menu-item>
									</router-link>
								</el-menu-item-group>
							</template>

						</el-submenu>


					</el-menu>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	import axios from 'axios'
	$(function() {

		var wid = document.documentElement.clientWidth,
			hei = document.documentElement.clientHeight;
		var fheight = $('.head').height();

		$('.mLeft').css('height', hei - fheight);
		$('.mrLeft').css('height', hei - fheight - 12);
		$('.mrCenter').css('height', hei - fheight - 12);;
		$('.navMenubox').css('height', hei - fheight);
		$('.centerBox').css('height', $(".centerBox").height() + 24);

	});
	export default {
		data: function() {
			return {
				items:{},
				activeIndex: '/Index',
				itemslist: {
	"data": {
		"items": [{
			"id": 0,
			"parentId": 0,
			"index": "1",
			"title": "企业管理",
			"url": "",
			"description": "",
			"actionIdList": [],
				"children": [{
				"id": 12,
				"parentId": 0,
				"index": "1-10",
				"title": "企业列表",
				"url": "/Home",
				"description": "企业列表",
				"actionIdList": [115],
				"children": []
			},

			]
		},{
			"id": 4,
			"parentId": 0,
			"index": "3",
			"title": "管理员管理",
			"url": "",
			"description": "",
			"actionIdList": [],
		"children": [{
				"id": 13,
				"parentId": 4,
				"index": "1-10",
				"title": "管理员列表",
				"url": "/Home/AdministratorsList",
				"description": "管理员列表",
				"actionIdList": [115],
				"children": []
			},

			]
		}, {
			"id": 7,
			"parentId": 0,
			"index": "4",
			"title": "APP管理",
			"url": " ",
			"description": "",
			"actionIdList": [],
				"children": [{
				"id": 14,
				"parentId": 7,
				"index": "1-10",
				"title": "应用升级",
				"url": "/Home/Management",
				"description": "应用升级",
				"actionIdList": [115],
				"children": []
			},
          {
            "id": 16,
            "parentId": 7,
            "index": "1-10",
            "title": "H5升级",
            "url": "/Home/Upgrade",
            "description": "H5升级",
            "actionIdList": [115],
            "children": []
          },
          {
            "id": 17,
            "parentId": 7,
            "index": "1-10",
            "title": "APP模块管理",
            "url": "/Home/APPModule",
            "description": "APP模块管理",
            "actionIdList": [115],
            "children": []
          },
//			{
//				"id": 15,
//				"parentId": 7,
//				"index": "1-10",
//				"title": "反馈管理",
//				"url": "/Home/Feedback",
//				"description": "反馈管理",
//				"actionIdList": [115],
//				"children": []
//			},

			]
		}, {
			"id": 8,
			"parentId": 0,
			"index": "5",
			"title": "资源管理",
			"url": "",
			"description": "",
			"actionIdList": [],
			"children": [{
				"id": 33,
				"parentId": 8,
				"index": "1-10",
				"title": "流媒体服务器",
				"url": "/Home/streamingmedia",
				"description": "/Home/流媒体服务器",
				"actionIdList": [115],
				"children": []
			}, {
				"id": 34,
				"parentId": 8,
				"index": "1-20",
				"title": "辅助服务器",
				"url": "/Home/ServerStatusDetail",
				"description": "辅助服务器",
				"actionIdList": [80, 152],
				"children": []
			},{
				"id": 35,
				"parentId": 8,
				"index": "1-20",
				"title": "SDK管理平台",
				"url": "/Home/SKDplatform",
				"description": "SDK管理平台",
				"actionIdList": [80, 152],
				"children": []
			}]
		},
		 {
			"id": 9,
			"parentId": 0,
			"index": "2",
			"title": "日志管理",
			"url": "",
			"description": "",
			"actionIdList": [],
				"children": [{
				"id": 51,
				"parentId": 9,
				"index": "1-10",
				"title": "管理员操作日志",
				"url": "/Home/AdministratorLog",
				"description": "管理员操作日志",
				"actionIdList": [115],
				"children": []
			},

			]
		},
		]
	},
	"getResultEntity": {
		"code": 0,
		"message": ""
	},
	"code": 0,
	"message": ""
}
			}
		},
		created: function() {
		},
		mounted() {
			this.itemis();
			//      localStorage.removeItem('Myitems')
			this.defaultIdex()
			// this.fetchData();
			// this.Refresh()
			$(window).resize(function () {
				var hei = $('.mLeft').height()
				$(".navMenubox").css("height", hei);
			})
		},
		methods: {
			itemis(){
				 		console.log(this.itemslist);
				this.items=this.itemslist.data.items
                   console.log(this.items);
			},
			log() {
				// //        window.location.reload()
				// // this.items = []
				// window.navigationbar = []
				// console.log("快快来调用我啊啊啊");
				// // var personparse = JSON.parse(localStorage.person)
				// let URL = ServerUrl;
				// let _this = this;
				// var psas = {
				// 	"ClientKey": localStorage.clientKey,
				// 	"Token": localStorage.token,
				// }
				// axios.put(URL + '/api/Provider/Logon', psas).then(function(res) {
				// 	_this.reLogin(res.data.code);//提示帐号登陆
				// 	var response = res.data;
				// 	console.log('我是Nav更新后的导航');
				// 	console.log(response.data.items);
				// 	console.log(psas);
				// 	var arr = response.data.items
				// 	window.navigationbar = response.data.items

				// 	// _this.items = arr
				// 	_this.Refresh()

				// }).catch(function(error) {
				// 	console.log(error);
				// });

			},
			Refresh() {

				console.log("刷新");
				//        var locd=JSON.parse(localStorage.Myitems);
				//        console.log(navigation);
				console.log("------分割线------");
				console.log(this.items);
				this.items = window.navigationbar;
			},

			// async fetchData(){
			//  	let _this = this;
			//  	let res=(await this.$http.get('/static/date/menu.json')).data;
			//  	_this.items=res;
			// },
			// fetchData() {
			// 	// var personparse = JSON.parse(localStorage.person)
			// 	let _this = this;
			// 	var resdate = {
			// 		"ClientKey": localStorage.clientKey,
			// 		"Token": localStorage.token,
			// 	}
			// 	this.myserver.getMenuModel(resdate).then(function(res) {
			// 		_this.reLogin(res.data.code);//提示帐号登陆
			// 		var response = res.data;

			// 		_this.items = response.data.items;
			// 		console.log(_this.items);

			// 	}).catch(function(error) {
			// 		console.log(error);
			// 	});

			// },
			handleOpen(key, keyPath) {
				// console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				// console.log(key, keyPath);
			},
			defaultIdex() {
				let path = this.$route.path;
				// console.log(this.$route.matched[1].path);
			}
		},
		beforeUpdate: function() {
			this.activeIndex = this.$route.matched[1].path
		},
		updated() {
			$(".MyOptionli span").each(function(i) {
				$(this).addClass("imgico" + i + "")
			});

		}
	}
</script>
<style>
	@media screen and (max-width: 1681px) {
		.zForm .timeBox {
			width: 195px
		}
		.zForm .zSelect {
			width: 100px
		}
		.zForm .zInput {
			width: 100px;
			padding-left: 0;
		}
		.timeBox .el-date-editor.el-input {
			width: 195px
		}
		.elTable {
			height: 90%;
			overflow: hidden;
		}
		.mRightTwo .zForm button {
			float: left;
			color: #eee;
			height: 38px;
			font-size: 14px;
			margin-left: 11px;
			text-align: center;
			line-height: 38px;
			padding: 0px 10px;
			background: #1b274c;
			border: 1px #3b4872 solid;
		}
		.zForm {
			padding-bottom: 58px;
		}
	}

	@media screen and (max-width: 1366px) {
		.navMenubox .el-menu-item {
			font-size: 12px;
		}
		.el-table td {
			padding: 4px 0;
		}
		.mRightTwo .elTable {
			height: 80%;
		}
		.mRightTwo .zTable {
			height: 93%;
		}
		.mRightTwo .zForm span {
			font-size: 12px;
		}
		.el-submenu__title {
			font-size: 12px;
		}
		.el-submenu__title {
			height: 30px;
			line-height: 30px
		}
		.el-table .cell {
			font-size: 12px;
		}
		.zForm .timeBox {
			width: 195px
		}
		.zForm .zSelect {
			width: 100px
		}
		.zForm .zInput {
			width: 100px;
			padding-left: 0;
		}
		.timeBox .el-date-editor.el-input {
			width: 195px
		}
		.elTable {
			height: 90%;
			overflow: hidden;
		}
		.mRightTwo .zForm button {
			float: left;
			color: #eee;
			height: 38px;
			font-size: 14px;
			margin-left: 11px;
			text-align: center;
			line-height: 38px;
			padding: 0px 10px;
			background: #1b274c;
			border: 1px #3b4872 solid;
		}
		.zForm {
			padding-bottom: 58px;
		}
	}
</style>
<style>
	.is-opened .el-submenu__title {
		background:#161d33 !important;
	}
	.el-col-24 {
		/* margin-left: 10%; */
	}

	.el-menu {
		width: 100%;
	}

	.el-menu-item {
		padding-left: 10px !important;
	}

	.mLeft {
		float: left;
		width: 8.8%;
		/*width: 169px;*/
		overflow: hidden;
		background: #2e3859;
	}

	.navMenubox {
		overflow: hidden;
		overflow-y: auto;
	}

	.navMenu>li {
		display: block;
		margin: 0;
		padding: 0;
		border: 0px;
	}

	.box-log {
		width: 15px;
		height: 15px;
	}

	.Myopen li {
		color: #FFF;
		background: #161d33 !important;
		border-left: 2px solid #57e29b;
	}

	.MyOption span {
		display: inline-block;
		width: 10px;
		height: 10px;
	}

	.Mydefault li {
		color: #FFF;
		background: #161d33 !important;
		border-left: 2px solid #57e29b;
	}

	.MyOption li:focus {
		color: #FFF;
		background: #222942 !important;
		border-left: 2px solid #57e29b;
	}

	.MyOption li {
		color: #FFF;
		background: transparent !important;
		border-left: 2px solid transparent;
	}
	/* .is-opened{
     background: #161d33
    } */

	.MyOption span.imgico {
		float: left;
		width: 15px;
		height: 15px;
		display: block;
		overflow: hidden;
		margin: 10px 3px 0 8px;
	}

	.imgico0 {
		background: url('../assets/ico1.png') no-repeat;
	}

	.imgico1 {
		background: url('../assets/ico2.png') no-repeat;
	}

	.imgico2 {
		background: url('../assets/ico3.png') no-repeat;
	}

	.imgico3 {
		background: url('../assets/ico4.png') no-repeat;
	}

	.imgico4 {
		background: url('../assets/ico5.png') no-repeat;
	}

	.imgico5 {
		background: url('../assets/ico6.png') no-repeat;
	}

	.imgico6 {
		background: url('../assets/ico7.png') no-repeat;
	}

	.imgico7 {
		background: url('../assets/ico8.png') no-repeat;
	}

	.imgico8 {
		background: url('../assets/ico9.png') no-repeat;
	}

	.imgico9 {
		background: url('../assets/ico10.png') no-repeat;
	}

	.imgico10 {
		background: url('../assets/ico11.png') no-repeat;
	}

	.imgico11 {
		background: url('../assets/ico12.png') no-repeat;
	}

	.imgico12 {
		background: url('../assets/ico13.png') no-repeat;
	}

	.imgico13 {
		background: url('../assets/ico14.png') no-repeat;
	}

	.imgico14 {
		background: url('../assets/ico15.png') no-repeat;
	}

	.imgico15 {
		background: url('../assets/ico16.png') no-repeat;
	}

	.imgico16 {
		background: url('../assets/ico17.png') no-repeat;
	}

	.imgico17 {
		background: url('../assets/ico18.png') no-repeat;
	}

	.imgico18 {
		background: url('../assets/ico19.png') no-repeat;
	}

	.imgico19 {
		background: url('../assets/ico20.png') no-repeat;
	}

	.imgico20 {
		background: url('../assets/ico21.png') no-repeat;
	}

	.imgico21 {
		background: url('../assets/ico22.png') no-repeat;
	}

	.imgico22 {
		background: url('../assets/ico23.png') no-repeat;
	}

	.imgico23 {
		background: url('../assets/ico24.png') no-repeat;
	}

	.imgico24 {
		background: url('../assets/ico25.png') no-repeat;
	}

	.imgico25 {
		background: url('../assets/ico26.png') no-repeat;
	}

	.imgico26 {
		background: url('../assets/ico27.png') no-repeat;
	}

	.imgico27 {
		background: url('../assets/ico28.png') no-repeat;
	}

	.imgico28 {
		background: url('../assets/ico29.png') no-repeat;
	}

	.imgico29 {
		background: url('../assets/ico30.png') no-repeat;
	}

	.imgico30 {
		background: url('../assets/ico31.png') no-repeat;
	}

	@media screen and (max-width: 1366px) {
		.mLeft {
			width: 10%;
		}
	}

	@media screen and (max-width: 1440px) {
		.mLeft {
			width: 10%;
		}
	}
</style>
