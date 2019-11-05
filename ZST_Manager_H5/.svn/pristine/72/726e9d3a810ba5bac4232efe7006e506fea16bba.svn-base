<template>
  <div class="content" id="cont">
    <div class="app-cent">
      <div class="hd">
        <span>App二维码</span>
      </div>
      <div class="bd">
         <img :src="src" alt="" class="ewm">
         <div>
          <input type="text" v-model="logoName" class="contactsInput">
         </div>
         <div id="upload">
           <!-- <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              >
              <el-button size="small" type="primary">
                <span style='color:#fff;'>更换logo</span>
              </el-button>
              <div slot="tip" class="el-upload__tip">256x256像素，jpg、png格式</div>
            </el-upload> -->
         </div>
      </div>
    </div>
    <div class="btnRight">
      <button class="Zbtn btn-submit">下载二维码</button>
      <button class="Zbtn btn-submit" @click="finishClick">完成</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src : 'http://img1.imgtn.bdimg.com/it/u=2586870947,764155106&fm=26&gp=0.jpg',
      logoName : '新疆掌上通',

    };
  },
  methods:{
    finishClick(){
      this.$router.push({
        path: "/Homemain/company",
        query:{

        }
      })
    }
  }
};
</script>
<style scoped>
.ewm{
  margin-bottom: 20px;
  padding: 0;
  width: 200px;
  height: 200px;
}
.contactsInput {
  margin-bottom: 20px;
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  padding-left: 14px;
  background: #2a3558;
  border: 1px #3b4872 solid;
}
.el-upload__tip{
  margin: 0;
  margin-top: 10px;
  display: inline-block;
  width: 100%;
  color: #fff;
  line-height: 23px;
}

</style>


