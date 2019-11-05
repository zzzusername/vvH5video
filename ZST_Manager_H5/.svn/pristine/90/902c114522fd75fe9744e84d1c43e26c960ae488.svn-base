<template>
  <div class="content" id="cont">
    <div class="app-cent">
      <div class="hd">
        <span>新增职务</span>
        <span class="btnRight">
          <button class="Zbtn btn-rt" @click="addDuty(true)">新增职务</button>
        </span>
      </div>
      <div class="bd table" style="color:#fff;">
          <el-table 
          :data="tableData"
          header-align="left"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="职位名称">
          </el-table-column>
          <el-table-column prop="" label="操作" width="200">
            <template slot-scope="scope">
              <span class="spanBtn" @click="addDuty(false, scope.row)">编辑</span>
              <span class="spanBtn">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="btnRight">
        <button class="Zbtn btn-submit" @click="saveTreedata(false)">上一步</button>
        <button class="Zbtn btn-submit" @click="saveTreedata(true)">保存并继续</button>
      </div>
    </div>
    <!-- 新增职务 -->
    <el-dialog class="Zdialog" title="新增职务" :visible.sync="editVisible" :before-close="cancelClick" width="30%">
			<el-input v-model="editText" placeholder="请输入职务"></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="cancelClick">取 消</el-button>
				<el-button type="primary" @click="saveClick">保 存</el-button>
			</span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tableData: [{
          name: '测试经理',
        }, {
          name: '研发经理',
        }],
        activeIndex : '2',
        editVisible : false,
        editText : ''
        
    };
  },
  methods:{
    // 新增职务
    addDuty(isEdit,scope){
      this.editVisible = true;
      // isAdd  true 新增    false 修改 
      if(!isEdit){
        this.editText = scope.name
      }
    },
    // 取消
    cancelClick(){
      this.editVisible = false;
      this.editText = '';
    },
    saveClick(){
      alert(this.editText + 'ajax 替换数据')
    },
    saveTreedata(isNext){
      if(isNext){
        let val = '3'
        this.$store.commit('skip',val);
      }else{
        let val = '1'
        this.$store.commit('skip',val);
      }
    }
  }
};
</script>
<style scoped>
#Ztable button span{
  color: #fff!important;
}
</style>

