<template>
	<div class="mRight" id="menuBox">
				<div class="scrolltree">
									<vue-scroll :ops="ops1" ref="vs">
									<el-tree :data="data" :props="props" :load="loadNode" node-key="id" lazy @check-change="handleCheckChangemedia" @node-expand="nodeclick" @node-click="handleNodeClick"></el-tree>
									</vue-scroll>
								</div>

	</div>
</template>
<script>
	import $ from "jquery";
	import axios from 'axios'

	var content = Nav //在这个地方赋值一下
	var contents = Index //在这个地方赋值一下
	var cityOptions = [];//流媒体服务器全部选项
    var treedata = [];

	var Valindex;
	var TreeDataId = "";
	var page = 1;
		$('#medialist li').on("click",function(){
					console.log(this)
			})
	export default {
		data() {
			return {
				value_Select:[],
				CountryList:["全国"],
				terminalList:[],//省集合
				cityList:[],//市集合
				countyList:[],//区集合
				iscity:false,//是不是显示市
				icounty:false,
				data:[],
				datareg:[],
				medialist:[],
				Fid:"000000000000",
				treeid:'',
				serverid :'',
				resolve: undefined,
				node: undefined,
				props: { //TERR筛选条件
					label: 'name',
					children: 'children'
				},
					dataId: "", //参数ID
				dataparentOrgName: '', //父级名字
				dataparentID: "", //父级ID



				regions:[],
				  checkAll: false,
		     checkedCities: [],//流媒体服务器已选中选项
			 addressHtml2: "请选择", //下拉组织结构
             cities: cityOptions,
             isIndeterminate: true,
					BoxStatus: [],
					activeCity:'Country',
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
				total: 1,
				Types: '',
				checked: false,
				multipleSelection: [],
				dialogTableVisibleadd: false,
				dialogTableVisibleedit: false,
				add: {
					name: '',
					url: '',
					parentId: 0,
					parentname: '',
					description: '',
				},
				edit: {
					id: '',
					name: '',
					url: '',
					parentId: '',
					lkjroleInput: '',
					description: '',
				},
				options: [],
				MenuDate: [],
				currentPage: page,
				pagesize: scopes
			};
		},
		mounted: function() {
			var hei = document.documentElement.clientHeight;
			$(".mRightTwo").css("height", hei - 178);

			$(window).resize(function () {
				var wid = document.documentElement.clientWidth,
				hei = document.documentElement.clientHeight;
				$('.mRightTwo').css('height', hei - 178);
			})
			// 	$('#medialist ul li').on('mouseover',function(){
			// 	console.log(this)

			// });

			// $("#medialist ul li").mouseover(function(){
			// 						console.log($(this))

			// 			}).mouseout(function(){
			// 			$(this).css({
			// 				"border-color":"",
			// 				"color": ""
			// 			    });
			// 			});


			//  this.getBoxStatusList();
      //  this.servers();
       		this.gettree()



		},
		methods: {

			 handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
		this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
		console.log(this.checkedCities)


	  },
	  //点击省TAB
	  handleClickCity(tab, event) {
		console.log(tab, event);
		if(tab.name=="province"){
			this.postprovince()

		}


	  },

	   tabClick(tab, event) {
		console.log(tab.name, event);
			if(tab.name=="first"){
				this.functions()
			}else if(tab.name=="second"){
				if(this.addressHtml2=="请选择"){
					this.activeName="first"
						this.$message({
						message: "请先选择地区",
						type: 'warning'
			});

				}else{
		
				}


			}else if(tab.name=="third"){
				this.data=[];
				this.servers()


			}else if(tab.name=="fourth"){
				this.organization_paths()


			}else if(tab.name=="fifth"){

                    this.regionlist()

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
				console.log(val, row)
				this.node = row;
				this.setValue(val, row.parent.data);
			},
			loadNode(node, resolve) {
					console.log(resolve)
				this.resolve = resolve;
				if(this.data == []) {
					return false;
				}
				return true;
			},
			setValue(val, parent) {
				// console.log("我这里" + val.id)

				TreeDataId = val.id;
				this.InputName = val.name;
				this.civilCode = val.civilCode;
				if(parent != undefined && parent.name != undefined && parent.name != "") {
					this.dataparentOrgName = parent.name;
					this.removeParent = parent;
				} else {
					this.dataparentOrgName = "";
				}
				this.currentParent = val;
				this.dataparentID = val.id; //添加时候的父ID=当前ID
			},


			nodeclick(val) {
					console.log(val)
				this.addressHtml = val.name;
				if(val.org_code){
					this.medialist.push({name:val.name
				})

				}

				console.log(
					this.medialist
				)


				// console.log("我详细ID" + val.id)
				if(val.id==undefined){

							return setTimeout(() => {
								return this.resolve && this.resolve([]);
							}, 1);


				}
				TreeDataId = val.id;

				this.treeid=val.id;

				//his.data = [];
				this.setValue(val);
				// console.log("我是需要删除ID" + val.id);

				this.deleteID = val.id;
				treedata = [];
				let _this = this;
				let URL = ServerUrl;

				if(val.pid >= 0) {
					this.getChildren(val, this.resolve);
				}
			},

			nodeclick_paths(val) {
					console.log(val)
				this.addressHtml = val.name;
				// console.log("我详细ID" + val.id)
				// if(val.id==undefined){

				// 			return setTimeout(() => {
				// 				return this.resolve && this.resolve([]);
				// 			}, 1);


				// }
				TreeDataId = val.id;

				this.treeid=val.id;


				this.setValue(val);


				this.deleteID = val.id;
				treedata = [];
				let _this = this;
				let URL = ServerUrl;


					this.getChildren_paths(val, this.resolve);

			},
	          getChildren_paths(parent, resolve, refresh = false) { // 根据获取孩子节点

				var _this = this;
				var id = parent.id;
				var area_code=parent.area_code
				var that = this;
				let URL = ServerUrl;
				let data;
				var par={
					"area_code": area_code,
					"assist_server_id": this.serverid,
					"is_root": false,
					"is_security": true,
					"platform_id": 1
					}
									this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_sub_monitor_resource_organizations',par ).then(function(res) {

					let response = res.data.data;
					console.log(response);
					var list = response;
					list.forEach(element => {
						element["children"] = [];
					});
					if(list.length == 0) {
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

						if(parent.id == list[0].list) {
							parent.children = list;
							return setTimeout(() => {
								return _this.resolve && _this.resolve(parent.children);
							}, 1);
						}

					}
					// that.updateD();
					console.log(list)

				}).catch(function(error) {
					console.log(error);
				});
			},
			nodeclick_reg(val) {
					console.log(val)
				this.addressHtml = val.name;
				// console.log("我详细ID" + val.id)
				// if(val.id==undefined){

				// 			return setTimeout(() => {
				// 				return this.resolve && this.resolve([]);
				// 			}, 1);


				// }
				TreeDataId = val.id;

				this.treeid=val.id;


				this.setValue(val);


				this.deleteID = val.id;
				treedata = [];
				let _this = this;
				let URL = ServerUrl;


					this.getChildren_reg(val, this.resolve);

			},
	          getChildren_reg(parent, resolve, refresh = false) { // 根据获取孩子节点

				var _this = this;
				var id = parent.id;
				var region_code=parent.region_code
				var that = this;
				let URL = ServerUrl;
				let data;
				var par={
					"parent_region_code": region_code,
					"assist_server_id": this.serverid,

					}
									this.$http.post(URL + '/super/admin/api/v1/enterprise_management/get_terminal_regions_and_departs',par ).then(function(res) {
					console.log("393993wwwwwwwwwwww");
					console.log(res);
					let response = res.data.data.direct_terminal_departs;


					var list = response;
					list.forEach(element => {
						element["children"] = [];
					});
					console.log(list);
					if(list.length == 0) {
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
						 console.log("1111111111112")
						 console.log(parent)
						 console.log(list)

						if(parent.region_code == list[0].region_code) {
							parent.children = list;
							return setTimeout(() => {
								return _this.resolve && _this.resolve(parent.children);
							}, 1);
						}

					}
					// that.updateD();
					console.log(list)

				}).catch(function(error) {
					console.log(error);
				});
			},



		     getChildren(parent, resolve, refresh = false) {
				// 根据获取孩子节点
				var _this = this;


				if(!refresh && parent.children.length > 0) {
					 console.log("1111")
					return;
				}
				var id = parent.id;
				var that = this;
				let URL = ServerUrl;
				let data;
				// var loglist

				var listpar={
						"pid": this.treeid,
						"timestamp": 0
						}




                  var par={
						"org_code": this.treeid,
						}



				this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_enterprise_streamservers_by_org_code_from_remote',par ).then(function(res) {
					console.log('从运维工作站获取指定区域下的流媒体拉流服务器111111')
					console.log(res)

			if(res.status===200&&res.data.result=="ok"){

					let response = res.data.data;

					var loglist = response
						for(var y=0;  y<loglist.length;y++){
							loglist[y].name=loglist[y].server_name

						}


						console.log('从运维工作站获取指定区域下的流媒体拉流服务器')
					console.log(loglist);
					_this.$http.post(URL + '/common/api/v1/region/get_regions_by_pid',listpar ).then(function(res) {
					if(res.status===200&&res.data.result=="ok"){

					_this.reLogin(res.data.code);//提示帐号登陆
				console.log('根据获取孩子节点qqqqqqq')
					console.log(res.data.data);

					let response = res.data.data;
					var list = response.regions;
					// list.push(loglist)
						console.log('根据获取孩子节点')
						for(var t=0;  t<loglist.length; t++){
							list.push(loglist[t])

						}

			console.log(list)
						list.forEach(element => {
						element["children"] = [];
					});
					if(list.length == 0) {
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


						if(parent.id == list[0].pid) {
							parent.children = list;
							return setTimeout(() => {
								return _this.resolve && _this.resolve(parent.children);
							}, 1);
						}

					}


				}

					// that.updateD();
					console.log(list)
				}).catch(function(error) {
					console.log(error);
				});
;
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
			//第一次获取树结构
			gettree() {
				treedata = []
				let _this = this;
				let URL = ServerUrl;

				var listpar={
						"pid":this.Fid,
						"timestamp": 0
						}


				this.$http.post(URL + '/common/api/v1/region/get_regions_by_pid',listpar ).then(function(res) {
					console.log(res)

			if(res.status===200&&res.data.result=="ok"){

					let response = res.data.data;
					var list = response.regions
;
					list.forEach(element => {
						element["children"] = [];
					});
					_this.data = list;
					console.log('我下面是第一次的数据')
					console.log(_this.data)
					console.log(treedata)
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




	 // 获取下级行政区域
	 postlist(list,type){
		 let _this = this;
				let URL = ServerUrl;

	                this.$http.post(URL + '/common/api/v1/region/get_regions_by_pid', list).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
					// debugger
						console.log(res)
						var list=res.data.data.regions
						_this.regions=list
							console.log(list)
							if(list[0].name=="市辖区"){
								 var listpar={
								"pid":list[0].id,
								"timestamp": 0
								}
								_this.postlist(listpar,1)
								return

							}
						var functionslist=[];
						for(var o in list ){
							functionslist.push(list[o].name)
						}
						if(type==1){
							_this.countyList=functionslist;

						}else if(type==2){
						_this.cityList=functionslist;
						}else{
						_this.terminalList=functionslist;
						}


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







	  postprovince(){
		  var par={
				"pid": "000000000000",
				"timestamp": 0
				}

		  this.postlist(par,0)



	  },
	//   getmenuselect() { //获取所属父级select列表zxj
	// 			let _this = this;
	// 			let selDate = {
	// 				ClientKey: localStorage.clientKey,
	// 				Token: localStorage.token,
	// 				dataType: "MenuRootList",
	// 			}
	// 			this.myserver.getSelect(selDate).then(function(res) {

	// 				console.log(" w我i要的")
	// 				console.log(res)
	// 				let response = res.data.data.items;
	// 				console.log(response)
	// 				_this.options = response;
	// 				_this.getBoxStatusList();
	// 				_this.options.unshift({
	// 					value: "请选择",
	// 					key: "0"
	// 				})
	// 				console.log(res)
	// 			}).catch(function(error) {
	// 				console.log(error);
	// 			});
	// 		},
	  ///列出全部的辅助服务器
	   servers(){
	console.log("third")
		let _this = this;
				let URL = ServerUrl;
				var Select={}
	this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_all_assist_servers',Select ).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
						var slist=res.data.data
						console.log(res)

					for (var i = 0; i < slist.length; i++) {

						slist[i].key=i
						// 					value: "请选择",
						// 					key: i
						// 				});
							console.log(slist[i])


						}
						_this.options=slist;
					// 	_this.options[1]={

					// "api_url":"http://localhost:8099/ucsys/assist",
					// "client_id":"hello",
					// "client_secret":"world",
					// "createtime":1558423148000,
					// "id":"local_embedded_assist_server",
					// "key":0,
					// "name":"默认（本机1）",
					// "updatetime":1561026398000,
					// 	}

						_this.serverid=slist[0].id;

							console.log(slist)
								console.log('初始化ID')







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
	  ///获取权限分配
	  functions(){
	console.log("first")
		let _this = this;
				let URL = ServerUrl;
	this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_enterprise_all_functions', ).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
						console.log(res)
						var list=res.data.data
							console.log(list)
						var functionslist=[];
						for(var o in list ){
							functionslist.push(list[o].comment)
						}
						_this.cities=functionslist;
							console.log(cityOptions)


							console.log(_this.cities)



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
			clicktd() {
				console.log("谢谢谢")
			},
			//点击新增需要加载
			addregion_name(){
				 this.functions();
				this.dialogTableVisibleadd = true

			},
			 //d点击全国
				getid(val) { //获取value和idzxj
				console.log(val);
				this.addressHtml2=val
				this.Fid="000000000000"


			},
			//点击省
			getprovince(value){
				console.log(value)
				this.addressHtml2=value;

				var type
				if(value=="北京市"||value=="天津市"||value=="上海市"||value=="重庆市"){

				  this.activeCity="county"
				  type=1
				  this.icounty=false
				}else{
					this.activeCity="city"
					 type=2
					this.iscity=false
				}

				let _this = this;
				let URL = ServerUrl;
				var nowid="0"

			   for(var k in _this.regions ){
				  if(_this.regions [k].name==value) {
					   nowid =_this.regions [k].id

				  }


			   }


				console.log(nowid)
				this.Fid=nowid



				var provinceparameter={
					"pid": nowid,
					"timestamp": 0
					}
					  this.postlist(provinceparameter,type)





			},
			//点击区
			getcounty(value){
					console.log(value)
					var nowid="0"

					   for(var k in this.regions ){
				  if(this.regions [k].name==value) {
					   nowid =this.regions [k].id

				  }

				}
				this.Fid=nowid
				this.addressHtml2=this.addressHtml2+"/"+value;


			},
			//点击市
			getcity(value){
					this.addressHtml2=this.addressHtml2+"/"+value;
					console.log(value)
				var type
					  this.activeCity="county"
					  	let _this = this;
				let URL = ServerUrl;
				var nowid="0"

					   for(var k in _this.regions ){
				  if(this.regions [k].name==value) {
					   nowid =this.regions [k].id

				  }

				}
				this.Fid=nowid
				var provinceparameter={
					"pid": nowid,
					"timestamp": 0
					}
					  this.postlist(provinceparameter,1)
			},
			//点击全国
			getCountry(value){
	console.log(value)
			},

			getParent(val){
				console.log(val)
				this.edit.parentId = val
			},
			getvalue(value) { //获取选中短信类型的值zxj
				this.add.parentId = value.key;
				this.edit.parentId = value.key;
				console.log(value.key)
			},
			changeFun(val) { //复选框
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},

			closedButton2() {
				$("#showtreebox1").css({
					display: "none"
				});
			},
			activeCityshow(){
				console.log("s输入地区")
					$("#showtreebox1").css({
					display: "block"
				});

			},
			getBoxStatusList() {//获取数据列表lkj

				let _this = this;
				let URL = ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage,
					serverName = $('.zInput').val();
				var userparameter={
					 "contacts_name_or_phonenum":localStorage.userName,
						"enterprise_name":serverName ,
						"page_number": currentPage-1,
						"page_size": pageSize
										}

			this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_enterprise_infos', userparameter).then(function(res) {
							// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){


						var list= res.data.data.list;
						console.log(list)
					let totalall = res.data.data.page_total_items;
						_this.total = totalall;
                    for(var i in list){
						list[i].createtime=_this.timestampToTime(list[i].createtime)


					}
						_this.BoxStatus =list

					  console.log(_this.timestampToTime (1559718654000))

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
			//全部数据LKJ
			allBoxStatusList() {
					$('.zForm input').val('')
			let _this = this;
				let URL = ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage,
					serverName = $('.zInput').val();
				var userparameter={
					 "contacts_name_or_phonenum":localStorage.userName,
  "enterprise_name":serverName ,
  "page_number": currentPage-1,
  "page_size": pageSize
				}

	this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_enterprise_infos', userparameter).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
							_this.$message({
								message: '全部数据',
								type: 'success'
							});

						var list= res.data.data.list;
						console.log(list)
					let totalall = res.data.data.page_total_items;
						_this.total = totalall;
                    for(var i in list){
						list[i].createtime=_this.timestampToTime(list[i].createtime)


					}
						_this.BoxStatus =list

					  console.log(_this.timestampToTime (1559718654000))

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
			//查询数据lkj
			queryBoxStatusList() {

				if($('.zInput').val() === '' && $('.contactsInput').val() === '') {
					this.$message({
						message: '请填写查询项',
						type: 'warning'
					});
				} else {
					page = 1;
				this.currentPage = 1;
				let _this = this;
				let URL = ServerUrl;
				var pageSize = this.pagesize,
					currentPage = this.currentPage,
					serverName=$('.zInput').val(),

					contactsInput = $('.contactsInput').val();
				var userparameter={
					 "contacts_name_or_phonenum":contactsInput,
                     "enterprise_name":serverName ,
                     "page_number": currentPage-1,
                    "page_size": pageSize
				}

	this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_enterprise_infos', userparameter).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
						_this.$message({
								message: '查询成功',
								type: 'success'
							});
				  console.log(res)
				        var list= res.data.data.list;
					let totalall = res.data.data.page_total_items;
						_this.total = totalall;
                    for(var i in list){
						list[i].createtime=_this.timestampToTime(list[i].createtime)


					}
						_this.BoxStatus =list



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

		}
			},
			addMenuInfoList() { //新增一条数据lkj
				var flag = true;
				if(this.add.name == '') {
					this.$message({
						message: '名称不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(this.add.name != '') {
					var reg = new RegExp("^[a-zA-Z0-9\u4E00-\u9FA5\……@\.\#\$\%\&\*]+$");
					var r = reg.test(this.add.name)
					if(r != true) {
						this.$message({
							message: '名称不符合要求',
							type: 'warning'
						});
						flag = false;
					}
				}
				if(this.add.url == '') {
					this.$message({
						message: '详情不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(flag == true){
					console.log(this.items)
					var _this = this;
					var addDate = {
						'name': this.add.name,
						'url': this.add.url,
						'parentId': parseInt(this.add.parentId),
						'description': this.add.description,
						'clientKey': localStorage.clientKey,
						'token': localStorage.token
					}
					console.log(addDate)
					this.userserver.addMenuInfo(addDate).then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						_this.getBoxStatusList();

						if(res.data.code === 0) {
							_this.navigation()
							content.methods.log(); //这个地方掉用一下
							contents.methods.loding(); //这个地方掉用一下
							_this.$message({
								message: '新增成功',
								type: 'success'
							});
							_this.dialogTableVisibleadd = false;
							_this.add = {
								name: '',
								url: '',
								parentId: 0,
								parentname: '请选择',
								description: '',
							}
							window.location.reload();
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
			///取消新增
			canceladdMenuInfoList() {
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

			navigation() {
				var personparse = JSON.parse(localStorage.person)
				let _this = this;
				var date = {
					"ClientKey": localStorage.clientKey,
					"Token": personparse.token,
				}
				this.myserver.getMenuModel(date).then(function(res) {
					_this.reLogin(res.data.code);//提示帐号登陆

					var response = res.data;
					console.log('登录时的导航');
					console.log(response.data.items);
					window.navigationbar = response.data.items
					//          localStorage.setItem("Myitems",JSON.stringify( response.data.items));
					_this.items = response.data.items;

				}).catch(function(error) {
					console.log(error);
				});
			},
			pushrow(index, row) { //获取当条数据写入edit组zxj
				this.dialogTableVisibleedit = true;

				var parentId = row.parentId; //所属父级当前

				console.log(this.options); //所属父级集合

				var roleInputs = this.options; //所属父集合

				var roleInput = ""; //所属父级

				//////所属父级
				for(var keys in roleInputs) {
					console.log(roleInputs[keys])
					console.log(parentId)
					if(roleInputs[keys].key === parentId.toString()) {
						this.edit.lkjroleInput = roleInputs[keys].value
						console.log("找到了 " + roleInput)

					};
				};

				this.edit.id = row.id;
				this.edit.name = row.name;
				this.edit.url = row.url;
				this.edit.parentId = row.parentId;
				this.edit.description = row.description;
				console.log(this.edit)
			},
			editMenuInfoList() { //编辑一条数据zxj
				var flag = true;
				if(this.edit.name == '') {
					this.$message({
						message: '名称不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(this.edit.name != '' && this.edit.name != null) {
					var reg = new RegExp("^[a-zA-Z0-9\u4E00-\u9FA5\……@\.\#\$\%\&\*]+$");
					var r = reg.test(this.edit.name)
					if(r != true) {
						this.$message({
							message: '名称不符合要求',
							type: 'warning'
						});
						flag = false;
					}
				}
				if(this.edit.url == '') {
					this.$message({
						message: '详情不允许为空',
						type: 'warning'
					});
					flag = false;
				}
				if(flag == true){
					var _this = this;
					var editDate = {
						id: this.edit.id,
						name: this.edit.name,
						url: this.edit.url,
						parentId: this.edit.parentId,
						description: this.edit.description,
						clientKey: localStorage.clientKey,
						token: localStorage.token
					}
					console.log(editDate)
					this.userserver.editMenuInfo(editDate).then(function(res) {
						console.log(res)
						_this.reLogin(res.data.code);//提示帐号登陆
						_this.getBoxStatusList();

						if(res.data.code === 0) {
							contents.methods.loding(); //这个地方掉用一下
							content.methods.log(); //这个地方掉用一下

							_this.navigation()
							_this.$message({
								message: '编辑成功',
								type: 'success'
							});
							_this.dialogTableVisibleedit = false;
							window.location.reload();
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

			//取消编辑
			canceleditMenuInfoList() {
				this.dialogTableVisibleedit = false
				this.$message({
					message: '取消编辑',
					type: 'info'
				});
			},
			handleSizeChange: function(size) {
				this.pagesize = size;
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				page = this.currentPage;
				console.log("我是页码" + this.currentPage)
				this.getBoxStatusList();
			},
			//监控资源分配
			organization_paths(){
					let _this = this;
				let URL = ServerUrl;

					 var stringlist1=this.toShort(this.Fid)
				   console.log(stringlist1)

					 console.log(this.serverid)
					 if(stringlist1=='00'){
						  console.log('是全国')



				var that = this;
				let URL = ServerUrl;

				var par={
					"area_code": 65,
					"assist_server_id": this.serverid,
					"is_root": true,
					"is_security": true,
					"platform_id": 1
					}
									this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_sub_monitor_resource_organizations',par ).then(function(res) {

					let response = res.data.data;
					console.log(response);
					var list = response;
					list.forEach(element => {
						element["children"] = [];
					});

						_this.data=list


					// that.updateD();
					console.log(list)

				}).catch(function(error) {
					console.log(error);
				});




					 }else{
						   console.log('雨做的云')
				var Select={
					"area_code": stringlist1,
					"assist_server_id": this.serverid
								}
				this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_parent_monitor_resource_organization_paths',Select ).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
						var slist=res.data.data
						  console.log(slist)

						var tootlist=[];
						for(var t=0;  t<slist.length; t++){
							tootlist[t]=slist[t].path[0]

						}

                           console.log(tootlist)
						_this.data=tootlist



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
					 }



			},
			organizations(){
					let _this = this;
				let URL = ServerUrl;
				var Select={}
	this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_all_assist_servers',Select ).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
						var slist=res.data.data
						console.log(res)

					for (var i = 0; i < slist.length; i++) {

						slist[i].key=i
						// 					value: "请选择",
						// 					key: i
						// 				});
							console.log(slist[i])


						}
						_this.options=slist

							console.log(slist)






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
//获取终端通讯录地区目录
             regionlist(){
				 	let _this = this;
				let URL = ServerUrl;
				var Select={
					"assist_server_id": this.serverid,
						 "region_code":this.Fid,

				}
	this.$http.post(URL + '/super/admin/api/v1/enterprise_management/get_terminal_region',Select ).then(function(res) {
					// _this.reLogin(res.data.code); //提示帐号登陆、
					if(res.status===200&&res.data.result=="ok"){
						var slist=res.data.data
						 console.log(res);
						 _this.datareg.push(slist)



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


			getvalue(value) { //获取选中短信类型的值zxj
				this.value = value;
				this.serverid=value.id
				console.log(this.value)
			},

			//移入事件
			loginglist(a,b){
					console.log(a,b)
						console.log(a.toElement.children[0])
						a.toElement.children[0].style.display="inline-block"

			},

//  * 0:L1:province:第1～2位，为省级代码;(2)
// 	 * 1:L2:district:第3～4 位，为地级代码；(2)
// 	 * 2:L3:county:第5～6位，为县级代码；(2)
// 	 * 3:L4:township:第7～9位，为乡级代码；(3)
// 	 * 4:L5:village:第10～12位，为村级代码。(3)
// 	截取有效非零有效数字 */

 splitCode(code) {
    var codes = ["00", "00", "00", "000", "000"];
    if(!code) {
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


 parentCode(code){
    var codes = this.splitCode(code);
    var pcode = "";
    for (var i = 0; i < codes.length - 1; i++) {
        if(codes[i+1] == "00" || codes[i+1] == "000") {
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
    if(!code) {
        return null;
    }
    var codes =  this.splitCode(code);
    var shortCode = "";
    for(var i = 0, len = codes.length; i < len; i++) {
        shortCode += codes[i];
        if(i + 1 < len && (codes[i + 1] == "00" || codes[i + 1] == "000")) {
            break;
        }
    }
    return shortCode;
},







		},
		updated() {
			var editmodHei = $('#menuEditModel .el-dialog').height();
			$('#menuEditModel .el-dialog').css('marginTop', -(editmodHei / 2));
			$('#menuEditModel .el-dialog').css('marginBottom', 0);
			var addmodHei = $('#menuAddModel .el-dialog').height();
			$('#menuAddModel .el-dialog').css('marginTop', -(addmodHei / 2));
			$('#menuAddModel .el-dialog').css('marginBottom', 0);
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
		#menuBox .zForm button{
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
	#activeCity_box{
	position:relative
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
	.power{
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

	.zInput,.contactsInput {
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
	#menuAddModel .SelectTitle{
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
#corporate_name{
	width: 100%;
}
#menuAddModel{
	    overflow: hidden;
}

#menuAddModel #activeCity{
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
	#menuAddModel .textarea .el-form-item__label,
	#menuEditModel .textarea .el-form-item__label {
		height: 160px;
		margin-top: 2px;
		background: #1b274c;
	}

	#menuAddModel .textarea .el-textarea__inner,
	#menuEditModel .textarea .el-textarea__inner {
		height: 160px;
	}
	@import url("../media/lkjmedia.css");
	#menuEditModel .el-dialog,
	#menuAddModel .el-dialog {
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
	#menuAddModel .block .el-form-item__label {
		background: #1b274c;
	}
	#menuAddModel .block .el-form-item__label,
	#menuAddModel .block .el-input__inner {
		height: 36px;
		margin: 2px 0;
		line-height: 36px;
		border: 1px #3b4872 solid;
	}

	#menuEditModel .el-dialog__body,
	#menuAddModel .el-dialog__body {
		padding: 24px 24px 18px;
	}

	#menuEditModel .el-checkbox,
	#menuAddModel .el-checkbox {
		float: left;
	}

	#menuEditModel .el-form-item,
	#menuAddModel .el-form-item {
		margin: 0;
		padding: 0;
		width: 91%;
		float: left;
	}

	#menuEditModel .userBtn .el-form-item,
	#menuAddModel .userBtn .el-form-item {
		width: 100%;
	}

	#menuEditModel .el-textarea,
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

	#menuAddModel .block .el-form-item__content,
	#menuEditModel .block .el-form-item__content {
		line-height: 32px;
	}
</style>
<style  lang="scss">

			#tab-Country,#tab-province,#tab-city,#tab-county{
				width: 78px;
			     text-align: center;
			}
#menuAddModel{
	.second{
		.serveraddress{
			height: 30px;
			line-height:30px;
			text-align: center;
			.empty{
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
			.empty:hover{
				   background: #57e29b !important;
				border: 1px #242f50 solid !important;
				color: #333;
			}
		}

	}
	.scrolltree{
		height: 300px;

	}
	#medialist .closebox{
		img{
			margin-top: 2px;
		}
		margin-left: 20px;
		display: -webkit-inline-box;
		display:inline-block;
		display: none;



	}
	#mediatree,#medialist{
			ul li{
			height: 24px;
			margin-top: 5px;
			font-size: 18px;
			line-height: 24px;
		}
		float: left;
		width: 50%;
		height: 100%;

	}
	#showtreebox1{
		#pane-province,#pane-city,#pane-county{
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
