<template>
  <div class="content" id="cont">
    <div class="app-cent">
      <div class="hd">
        <span>app设置</span>
      </div>
      <div class="bd">
        <div class="setAppcont">
          <p>设置启动图</p>
          <p>预览位置</p>
          <p>启动APP后，出现的闪屏画面</p>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p>设置H5版本</p>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/">
            <el-button size="small" type="primary">
              <span style='color:#fff;'>点击上传</span>
            </el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </div>
      <div class="btnRight">
        <button class="Zbtn btn-submit" @click="saveTreedata(false)">上一步</button>
        <button class="Zbtn btn-submit" @click="saveTreedata(true)">保存并继续</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: '',
    };
  },
  methods:{
    // 图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    saveTreedata(isNext){
      if(isNext){
        let val = '6'
        this.$store.commit('skip',val);
      }else{
        let val = '4'
        this.$store.commit('skip',val);
      }
    }
  }
};
</script>
<style>
  .avatar-uploader{
    margin-bottom: 10px;
    overflow: hidden;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload__tip{
    display: inline-block;
    width: 100%;
    color: #fff;
  }
</style>
<style scoped>
  .setAppcont{
    overflow: hidden;
  }
  .setAppcont p{
    margin-bottom: 10px;
  }
</style>


