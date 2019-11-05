<template>
  <div class="content" id="cont">
    <div class="app-cent">
      <div class="hd">
        <span>新增工作单位</span>
        <span class="btnRight">
          <button class="Zbtn btn-rt" @click="addRoordata">新增工作单位</button>
        </span>
      </div>
      <div class="bd">
          <div class="tree">
            <div class="title">
              <span>工作单位名称</span>
              <span class="tit-rt">操作</span>
            </div>
            <el-tree
              :data="treeData"
              :props="defaultProps"
              node-key="id"
              :expand-on-click-node="false"
              :render-content="renderContent"
            ></el-tree>
          </div>
      </div>
    </div>
    <div class="btnRight">
      <button class="Zbtn btn-submit"  @click="saveTreedata">保存并继续</button>
    </div>
    <!-- 新增／编辑 -->
    <div id="commonPop">
      <el-dialog
          class="permissionForm"
          :title="editEnterpriseTit"
          :visible.sync="editEnterprise"
          :before-close="closePermission"
          :close-on-click-modal='false'
          width="40%"
          >
          <el-form ref="workUnitdata" :model="workUnitdata" label-width="120px">
            <div class="formTable" style="margin:0; overflow:initial;">
              <div class="block">
                <el-select v-model="WorkunitTypevalue" placeholder="请选择">
                  <el-option
                  v-for="item in WorkunitType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="block">
                <el-form-item label="单位名称：" :rules="[{ required: true, message: ' '}]"  prop="">
                  <el-input v-model="workUnitdata.name" maxlength="50"></el-input>
                </el-form-item>
              </div>
              <div id="areaSelectpopover" v-show="this.WorkunitTypevalue == '1'">
                <el-form-item label="地区：" :rules="[{ required: true, message: ' '}]"  prop="">
                  <el-input 
                    v-model="workUnitdata.region_full_name" 
                    maxlength="50"
                    @focus="isShowregionFulldata = true"
                  ></el-input>
                  <div class="treeCont" v-if="isShowregionFulldata">
                    <el-tree
                      :props="props"
                      :load="regionFulltree"
                      lazy
                      accordion
                      v-if="isShowregionFulldata"
                      @current-change="synchronouRegionsdata" 
                    >
                    </el-tree>
                  </div>
                  <span class="close"  v-if="isShowregionFulldata" @click="closeShowregionFulldata">
                    <img src="../../../assets/close.png" alt="close">
                  </span>
                </el-form-item>
              </div>
            </div>
            <div class="userBtn">
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="btnSavedata">保 存</el-button>
                <el-button @click="closePermission">取 消</el-button>
              </span>
            </div>
          </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// 总条数
let id = 10;
import '../../style/common.css' /*引入公共样式*/
/* api */
// 数据列表  getListtreesdata
// 新增数据 departAdd
// 编辑 departModify
// 删除 departDelete
// 查询 departGet
// 导出 departExportexcel
import {getListtreesdata,
		departAdd,
		departDelete,
		departModify,
		departExportexcel,
		departGet} from '../../api/unitslist'
/* 公共接口 */
//  getRegionsbyPid 获取子节点
//  getRegiondetail 获取详情节点数据 提交使用
import {
		getRegionsbyPid,
		getRegiondetail,
		} from '../../api/commonapi'
export default {
  data() {
    return {
      tabIndex : '1',
			searchDepartmentname : '',
			// 弹窗数据集合
			workUnitdata : {
				name : '',
				region_full_name : '',
				region_full_code : '',
				region_code : '',
				region_name : '',
				/* 子列表点击数据 */
				id : '',
				code : '',
				type : '',
			},
			// 列表 单位编辑数据集合
			listUnitseditData : {
				"code": '',
				"enterprise_depart_id": "",
				"name": "",
				"parent_code": '',
				"region_code": '',
			},
			// 子列表点击操作缓存数据
			cacheDdata : {},
			WorkunitType: [
				{
					value: '1',
					label: '区域'
				}, {
					value: '2',
					label: '单位'
				}
			],
			WorkunitTypevalue : '2',
			isShowregionFulldata : false,		// 地区下拉框状态
			props: {
				label: 'name',
				children: 'children',
			},
			// 地区初始化 省级单位数据
			InitRegionfulldata : [],
			// 弹窗状态
			editEnterprise: false,
			editEnterpriseTit : '新增',
			// 弹窗按钮 提交状态  1 新增根节点 2 添加子节点 3 编辑子节点
			popoverButtonstatus : '1',
			// tree data
			treeData: [],
			defaultProps: {
				children: "children",
				label: "name"
			},

			editText : '',
			cacheNode : {},
			isEdit : true,  //  编辑
			editVisible : false,
    };
  },
  methods: {
    // 初始化数据 可以为空
		getInitlistData(){
			let objData = {
					"enterprise_id": localStorage.EnterpriseId
				}
			if(this.searchDepartmentname != ''){
				objData.name = this.searchDepartmentname;
			}
			getListtreesdata(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					this.treeData = res.data.data;
				}
			});	
		},
		// 初始化 tree 渲染函数
		// 渲染函数
		renderContent(h, { node, data, store }) {
			return (
				<span style="flex: 1; display: 
				flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
				<span>
					<span style = {{color: (data.type == '2') ? "#f7e59a" : "#fff"}}>{node.label}</span>
				</span>
				<span>
					<el-button
					style="font-size: 12px;"
					type="text"
					on-click={() => this.workListappend(node,data)}
					>
					<span style="color:#fff;">添加</span>
					</el-button>
					<el-button
					style="font-size: 12px;"
					type="text"
					on-click={() => this.workListremove(node, data)}
					>
					<span style="color:#fff;">删除</span>
					</el-button>
					<el-button
					type="text"
					on-click={() => this.workListedit(node, data)}
					style="font-size: 12px;"
					>
					<span style =  {{display: (data.type == '1') ? "none" : "block"}}> 
					<span style="color:#fff;" >编辑</span>
					</span>
					</el-button>
				</span>
				</span>
			);
    },
    // 初始化获取 所有省级单位
		getInitprovincialUnits(){
			let objData = {
					"pid": '000000000000'
				}
			getRegionsbyPid(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					console.log(res);
					this.InitRegionfulldata = res.data.data.regions
				}
			});
		},

		// 查询
		searckClick() {
			this.getInitlistData();
		},
		clearSearch() {
			this.searchDepartmentname = "";
			this.getInitlistData();
		},
    /* 新增／编辑弹窗操作 */
		// 地区下拉选择 懒加载
		regionFulltree(node,resolve){
			if (node.level === 0) {
				return resolve(this.InitRegionfulldata);
			}
			// 全国节点 下拉数据
			let objData = {
					"pid": node.data.id
				}
			getRegionsbyPid(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					resolve(res.data.data.regions)
				}
			});	
		},
    // 地区点击选择
		synchronouRegionsdata(data,node){
			// 查询详情接口 递归查询所有父节点
			// 全过除外面
			if(data.id != "000000000000"){
				let objData = {
					"id": data.id,
					"timestamp": 0
				}
				getRegiondetail(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						// 当前点击的数据获取的数据
						this.workUnitdata.region_full_name = res.data.data.region_details[0].names;
						this.workUnitdata.region_full_code = res.data.data.region_details[0].ids;
						// 当前点击的数据
						this.workUnitdata.region_code = data.id
						this.workUnitdata.region_name = data.name
					}
				});	
			}else{
				// 同步数据
				this.workUnitdata.region_full_name = '全国';
				this.workUnitdata.region_full_code = '000000000000';
				// 当前点击的数据
				this.workUnitdata.region_code = '000000000000'
				this.workUnitdata.region_name ='全国'
			}
		},
		// 地区下拉关闭按钮
		closeShowregionFulldata(){
			this.isShowregionFulldata = false;
		},
    closePermission(){
			this.editEnterprise = false;
			this.clearCacheddata()
    },
    // 弹窗按钮保存
		btnSavedata(){
			// 弹窗统一  按钮为3个状态  1 新增根  2 新增子节点 3编辑当前节点
			if(this.popoverButtonstatus == '1'){
				console.log('根节点新增操作')
				// 选择区域还是 单位
				if(this.WorkunitTypevalue == '1'){
					
					// 根节点 新增 区域和单位
					let objData = this.parametersNeaten('2');
					this.departAddinterfacet(objData)
				}else if(this.WorkunitTypevalue == '2'){
					// 根节点 新增 单位
					let objData = this.parametersNeaten('1');
					this.departAddinterfacet(objData)
				}
			}else if(this.popoverButtonstatus == '2'){
					// 选择区域还是 单位
					if(this.WorkunitTypevalue == '1'){
						console.log('子列表添加操作  区域和单位')
						// 子节点 新增 区域和单位
						let objData = this.parametersNeaten('3');
						this.departAddinterfacet(objData)
					}else if(this.WorkunitTypevalue == '2'){
						console.log('子列表添加操作')
						// 子节点 新增 单位
						let objData = this.parametersNeaten('4');
						this.departAddinterfacet(objData)
					}

			}else if(this.popoverButtonstatus == '3'){
				console.log('子列表编辑操作')
				// 子节点 编辑单位 需要判断是否为根单位？

				let objData = {	
					"code": this.listUnitseditData.code,
					"enterprise_depart_id": this.listUnitseditData.id,
					"name":  this.workUnitdata.name,
					"region_code": this.listUnitseditData.region_code,
				}
				// 编辑 API
				departModify(objData).then(res => {
						if (res.status === 200 && res.data.result == "ok") {
							// 更新数据
							this.getInitlistData()
							// 清除数据
							this.clearCacheddata();
						}else{
							// 错误提示信息
							this.$message.error(res.data.error_description);
						}
					});	
			}
    },
    
		// 参数整理
		parametersNeaten(type){
			/* 
				let obj = {
					"code": 1000,
					"enterprise_id": localStorage.EnterpriseId,
					"name": this.workUnitdata.name,
					"parent_code": 1000,
					"region_code": '000000000000'
				}
			 */
			let obj = {
				"enterprise_id": localStorage.EnterpriseId, 
			};
			//  新增参数整理／  1 根节点单位参数  2 根节点 区域新增  3 子节点单位新增区域    4 子节点新增单位
			if(type == '1'){
				obj.name = this.workUnitdata.name
			}else if(type == '2'){
				obj.name = this.workUnitdata.name
				obj.region_code = this.workUnitdata.region_code;
			}else if(type == '3'){
				// 3 子节点单位新增 区域  区域 code 
				obj.name = this.workUnitdata.name
				obj.region_code = this.workUnitdata.region_code;
			}else if(type == '4'){
					console.log('根节点单位 新增')
				// 新增单位 父节点 code
				obj.name = this.workUnitdata.name
				//  判断 单位来源 区域还是部门  如果是部门需要携带 父部分 code 区域需要携带父节 区域 code
				if(this.cacheDdata.type == '2'){
					
					console.log('根节点单位添加 子节点2')
				
					// 判断是否为 根节点 是否有 父级区域
					if(this.cacheDdata.region_code != undefined){
						obj.region_code = this.cacheDdata.region_code;
						obj.parent_code = this.cacheDdata.code;
					}else{
						obj.parent_code = this.cacheDdata.code;
					}
				}else if(this.cacheDdata.type == '1'){
					
					obj.region_code = this.cacheDdata.region_code;
				}
				// 如果是根部门
			
			}
			return obj;
		},
		// ajax 新增接口
		departAddinterfacet(obj){
			let objData = obj;
			departAdd(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
					console.log(res);
					// 更新数据
					this.getInitlistData()
					// 清除数据
					this.clearCacheddata();

				}else{
					// 错误提示信息
					this.$message.error(res.data.error_description);
				}
			});	
		},
		// 清除缓存数据
		clearCacheddata(){
			// 弹窗消失
			this.editEnterprise = false;
			// workUnitdata 数据重置
			this.workUnitdata.name = '';
			this.workUnitdata.region_full_name = '';
			this.workUnitdata.region_full_code = '';
			this.workUnitdata.region_code = '';
			this.workUnitdata.region_name = '';
			// 子节点缓存数据
			this.cacheDdata = {};
			// 默认弹窗下拉框为单位
			this.WorkunitType = [
				{
					value: '2',
					label: '单位'
				},
				{
					value: '1',
					label: '区域'
				}
			]
			this.WorkunitTypevalue = '2';
			this.isShowregionFulldata = false;
		},
		// 新增根节点 地区选择为全国
		addDatalist() {
			// 初始化 区域下拉选项
			this.getInitprovincialUnits();
			this.editEnterprise = true;
			this.popoverButtonstatus = '1'
			
		},
		// tree 列表 添加操作
		workListappend(node, data) {     
			// 重置区域初始化下拉数据
			// 去找到父节点 区域 信息
			// type = 1 为区域  
			if(data.type == '1'){
				this.InitRegionfulldata = [{
					"code": node.data.code,
					"id": node.data.region_code,
					"name" : node.data.name,
					"type" : node.data.type,
				}]
			}else if(data.type == '2'){
				// 单位添加操作不可选择区域
				this.WorkunitType = [
					{
						value: '2',
						label: '单位'
					}
				]
			}

			// 是否为区域节点子节点			
			this.editEnterprise = true
			this.editEnterpriseTit = '新增';
			// 保存按钮状态  为 2
			this.popoverButtonstatus = '2';
			// 子列表缓存数据
			this.cacheDdata = data;

		},
		// 编辑
		workListedit(node, data) {
			this.editEnterprise = true;
			this.popoverButtonstatus = '3';;
			this.editEnterpriseTit = '编辑';
			// 存下数据
			this.cacheNode = node;
			// 编辑辅助操作
			this.workUnitdata.code = data.code;
			this.workUnitdata.id = data.id;
			this.workUnitdata.type = data.type;
			this.workUnitdata.name = data.name;
			this.workUnitdata.region_code = data.region_code;
			//  单位编辑 不展示区域选项
			if(data.type == '2'){
				this.WorkunitType = [
					{
						value: '2',
						label: '单位'
					}
				]
			}
			// 获取提交信息
			// departGet	
			let objData = {
				'enterprise_depart_id' : data.id
			}
			departGet(objData).then(res => {
				if (res.status === 200 && res.data.result == "ok") {
						// 编辑辅助操作
						this.listUnitseditData = res.data.data
				}else{
					// 错误提示信息
					this.$message.error(res.data.error_description);
				}
			});	
			

		},
		// 删除
		workListremove(node, data) {
			// 判断区域还是部门
			let objData = {
				"enterprise_id": localStorage.EnterpriseId
				
			}
			if(data.type == '2'){
				// 区域  不需要 code
				objData.code = data.code
				// 判断区域编码是否存在
				if(data.region_code){
					objData.region_code = data.region_code;
				}
			}else if(data.type == '1'){
				// 删除区域
				objData.region_code = data.region_code;
			}


			this.$confirm('是否执行删除操作?', '消息', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {

				var _this = this;

				departDelete(objData).then(function (res) {
					if (res.status === 200 && res.data.result == "ok") {

						_this.$message({
							message: '删除成功',
							type: 'success'
						});
						// 更新数据
						_this.getInitlistData()
					}else{
						// 错误提示信息
						_this.$message.error(res.data.error_description);
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
    /* 分割 */
    // 添加
    append(data) {
			// 弹窗
			this.editVisible = true;
			this.isEdit = false;
			// 存下数据
			this.editData = data;
     
    },
    // 删除
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    // 编辑
    edit(node, data) {
			this.editVisible = true;
			this.isEdit = true;
			// 存下数据
			this.editNode = node;
			// 修改内容
      this.editText = node.data.label;
		},
		// 弹窗确认保存  编辑／修改 实时保存  ajax
		saveClick(){

			this.editVisible = false;

			if(this.isEdit){
				// 编辑
				this.editNode.data.label = this.editText
			}else{
				// 添加
				const newChild = { id: id++, label: this.editText, children: [] };

				if (!this.editData.children) {
					this.$set(this.editData, "children", []);
				}
				this.editData.children.push(newChild);
			}

			// 清空记录
			this.editText = '';
			this.editNode = null;
			this.editData = null;
		},	
		// 弹窗 取消
		cancelClick(){
			this.editVisible = false;
			// 清空记录
			this.editText = '';
			this.editNode = null;
		},
		// 渲染函数
    renderContent(h, { node, data, store }) {
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
            <span>{node.label}</span>
          </span>
          <span>
            <el-button
              class="btn"
              style="font-size: 12px;"
              type="text"
              on-click={() => this.append(data)}
            >
            <span style='color:#fff;'>添加</span>
            </el-button>
            <el-button
              class="btn"
              style="font-size: 12px;"
              type="text"
              on-click={() => this.remove(node, data)}
            >
            <span style='color:#fff;'>删除</span>
            </el-button>
            <el-button
              class="btn"
              style="font-size: 12px;"
              type="text"
              on-click={() => this.edit(node, data)}
            >
            <span style='color:#fff;'>编辑</span>
            </el-button>
          </span>
        </span>
      );
    },
    // root 操作
    addRoordata(){
      this.editEnterprise = true;
    },
    // 跳转下一级
		saveTreedata(){
      // 获取当前节点
      // 获取最高节点
      // 跳转节点
      let val = this.$store.state.skipIndex;
      let tabIndex = this.$store.state.tabIndex;
      if(val <= tabIndex){
        this.$store.commit('skip',val - 0 + 1);
        this.$store.commit('moduleSkip',val - 0 + 1);
      }else{
        this.$store.commit('moduleSkip',val - 0 + 1);
      }
    },
  }
};
</script>
<style scoped>
#cont{
    width: 93%;
    padding: 30px;
    margin: 20px;
    background: #354166;
    -webkit-box-shadow: 0px 0px 26px #01060e;
    box-shadow: 0px 0px 26px #01060e;
}
#cont .btn span {
  color: #fff !important;
}
.el-button span{
  color: #fff!important;
}
.title{
  font-size: 16px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #4a567c;
  overflow: hidden;
}
.title .tit-rt{
  float: right;
  margin-right: 45px;
}

</style>

