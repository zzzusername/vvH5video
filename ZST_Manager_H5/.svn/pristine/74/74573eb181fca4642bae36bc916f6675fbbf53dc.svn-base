<template>
  <div class="content" id="cont">
    <div class="app-cent">
      <div class="hd">
        <span>管理员列表</span>
        <span class="btnRight">
          <button class="Zbtn btn-rt" @click="addAdmin">新增管理员</button>
        </span>
      </div>
      <div class="bd">
         <div class="bd table">
          <el-table
          :data="tableData"
          header-align="left"
          style="width: 100%">
          <el-table-column prop="username" label="用户姓名"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="img" label="头像"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>

          <el-table-column prop="region" label="地区"></el-table-column>
          <el-table-column prop="branch" label="部门"></el-table-column>
          <el-table-column prop="duty" label="职务"></el-table-column>
          <el-table-column prop="role" label="角色"></el-table-column>
          <el-table-column prop="mode" label="注册方式"></el-table-column>

          <el-table-column prop="state" label="用户状态">
            <template slot-scope="scope">
              <span class="spanBtn" v-if='scope.row.state == 0'>离线</span>
            </template>
          </el-table-column>

          <el-table-column prop="" label="操作" width="200">
            <template>
              <span class="spanBtn">详情信息</span>
              <span class="spanBtn" @click="addAdmin">编辑</span>
              <span class="spanBtn">删除</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="btnRight">
          <button class="Zbtn btn-submit" @click="saveTreedata(false)">上一步</button>
          <button class="Zbtn btn-submit" @click="saveTreedata(true)">保存并继续</button>
        </div>
      </div>
      </div>
    </div>
    <!-- 新增管理员 -->
    <el-dialog class="Zdialog-form" title="新增管理员" :visible.sync="editVisible" :before-close="cancelClick" width="50%">
			<el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号:">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="头像:">
          <el-input v-model="form.img" style="width:50%;"></el-input>
          <span class="spanBtn">上传</span>
        </el-form-item>
        <el-form-item label="设置密码:">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="原始密码:">
          <el-input v-model="form.oldpassword"></el-input>
        </el-form-item>
         <el-form-item label="性别:">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="地区:">
          <el-input v-model="form.oldpassword"></el-input>
        </el-form-item>
        <!-- <el-form-item label="工作单位:">
          <el-input v-model="form.oldpassword"></el-input>
        </el-form-item>
        <el-form-item label="职务:">
          <el-input v-model="form.oldpassword"></el-input>
        </el-form-item>
        <el-form-item label="管理员:">
          <el-input v-model="form.oldpassword"></el-input>
        </el-form-item>
        <el-form-item label="权限分组">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="测试组" value="1"></el-option>
            <el-option label="研发组" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加原因">
          <el-input class="textarea" v-model="form.desc" style='height:50px;'></el-input>
        </el-form-item> -->
      </el-form>
    </el-dialog>
    
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
          username: '张焕',
          phone: '手机号',
          img: '头像',
          sex: '性别',
          region: '地区',
          branch: '部门',
          duty: '职务',
          role: '角色',
          mode: '注册方式',
          state: 0,
        }],
        editVisible : false,
        editText : '',
        // form
        form: {
          name: '',
          phone: '15116965192',
          img: '',
          password: '123',
          oldpassword: '321',
          region : '1',
        }
    };
  },
  methods:{
    // 提交数据
    onSubmit() {
        console.log('submit!');
    },
    // 新增管理员
    addAdmin(isEdit,scope){
      this.editVisible = true;
      // isAdd  true 新增    false 修改 
      
    },
    // 取消
    cancelClick(){
      this.editVisible = false;
    },
    // 弹窗保存
    saveClick(){
      alert(this.editText + 'ajax 替换数据')
    },
    // store
    saveTreedata(isNext){
      if(isNext){
        let val = '5'
        this.$store.commit('skip',val);
      }else{
        let val = '3'
        this.$store.commit('skip',val);
      }
    }
  }
};
</script>
<style scoped>

</style>


