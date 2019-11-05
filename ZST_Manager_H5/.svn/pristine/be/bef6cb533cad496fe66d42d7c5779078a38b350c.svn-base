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
          <div class="title">
            <span>工作单位名称</span>
            <span class="tit-rt">操作</span>
          </div>
          <div class="tree">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent"
          ></el-tree>
        </div>
      </div>
    </div>
    <div class="btnRight">
      <button class="Zbtn btn-submit"  @click="saveTreedata">保存并继续</button>
    </div>
    <el-dialog class="Zdialog" title="编辑内容" :visible.sync="editVisible" :before-close="cancelClick" width="30%">
			<el-input v-model="editText" placeholder="请输入内容"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="cancelClick">取 消</el-button>
				<el-button type="primary" @click="saveClick">保 存</el-button>
			</span>
    </el-dialog>
    <el-dialog class="Zdialog" title="编辑内容" :visible.sync="rootVisible" :before-close="rootCancelclick" width="30%">
			<el-input v-model="rootText" placeholder="请输入内容"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="rootCancelclick">取 消</el-button>
				<el-button type="primary" @click="rootSaveclick">保 存</el-button>
			</span>
    </el-dialog>
  </div>
</template>
<script>
// 总条数
let id = 10;
export default {
  data() {
    return {
      tabIndex : '1',
      treeData: [
        {
          id: 1,
          label: "北京",
          children: [
            {
              id: 2,
              label: "北京1"
            }
          ]
				},
				{
          id: 3,
          label: "上海"
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
			},
			// 修改弹窗
			editVisible: false,
			editText : '',
			editNode : {},
			editData : {},
      isEdit : true,  //  编辑
      // root 
      rootVisible : false,
      rootText : '',
    };
  },
  methods: {
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
      this.rootVisible = true;
    },
    rootCancelclick(){
      this.rootVisible = false;
      this.rootText = '';
    },
    rootSaveclick(){
      let text = this.rootText;
      const newChild = { id: id++, label: text, children: [] };
      this.treeData.push(newChild)
      this.rootVisible = false;
    },
    // 跳转下一级
		saveTreedata(){
      // 保存数据
      console.log(this.treeData);
      // 修改 vuex 数据
      let val = '2'
      this.$store.commit('skip',val);
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

