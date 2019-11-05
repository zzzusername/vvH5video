<template>
  <div class="content" id="cont">
    <div class="app-cent">
      <div class="hd">
        <span>app轮播图设置</span>
        <span class="btnRight">
          <button class="Zbtn btn-rt" @click="addCarousel">新增轮播图</button>
        </span>
      </div>
      <div class="bd">
        <div class="bd table">
          <el-table :data="tableData" header-align="left" style="width: 100%">
            <el-table-column prop="order" label="顺序"></el-table-column>
            <el-table-column prop="name" label="轮播图名称"></el-table-column>
            <el-table-column prop="img" label="预览图"></el-table-column>
            <el-table-column prop="state" label="状态">
              <template slot-scope="scope">
                <span class="spanBtn" v-if="scope.row.state == 0">关闭</span>
              </template>
            </el-table-column>
            <el-table-column prop label="操作" width="200">
              <template>
                <span class="spanBtn">编辑</span>
                <span class="spanBtn">删除</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!-- 新增轮播图 -->
    <el-dialog
      class="Zdialog-form"
      title="新增轮播图"
      :visible.sync="carouselPop"
      :before-close="cancelClick"
      width="30%"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="顺序:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="轮播图名称:">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="图片:">
          <el-input v-model="form.img" style="width:50%;"></el-input>
          <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              style="float:right;"
              >
              <el-button size="small" type="primary">
                <span style='color:#fff;'>更换logo</span>
              </el-button>
            </el-upload> 
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="form.img" style="width:50%;"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          order: "1",
          name: "数据",
          img: "img",
          state: 0
        }
      ],
      carouselPop: false,
      editText: "",
      // 弹窗数据
      form: {
        name: "",
        phone: "15116965192",
        img: "",
      }
    };
  },
  methods: {
    addCarousel() {
      this.carouselPop = true;
    },
    cancelClick() {
      this.carouselPop = false;
    }
  }
};
</script>
<style scoped>
</style>


