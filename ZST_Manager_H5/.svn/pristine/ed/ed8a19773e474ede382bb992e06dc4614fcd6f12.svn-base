<template>
    <div class="mRight">
       <div class="appTabcont">
            <div class="appTab">
            <el-tabs v-model="activeName"  id="appTab"   type="border-card">
                <el-tab-pane label="启动图" name="first"  class="tabSelectpane">
                    <div class="start">
                        <p>预览位置：</p>
                        <p>启动APP后，出现的闪屏画面：</p>
                    </div>
                    <div id="upload">
                        <input 
                            class="uploadCls"
                            type="file" id="headPortrait" name="files" 
                            placeholder="file" multiple
                            @change="getAppfileapp"	
                            style="opacity: 0;"
                        >
                        <div class="upLoadcon" v-if='Initimgdata == ""'>
                            <i class="el-icon-plus avatar-uploader-icon"></i>
                        </div>
                        <img v-else :src='Initimgdata' alt="" id="upImgc">
                        <span>{{fileDataname}}</span>
                       <!--  <div id="preview">
                            <img src="http://dev.uvq.cc/ucsys/upload/temp/8b380a8c-8f48-4416-9ae3-a435d13805a7@%E5%9B%BE%E4%B9%A6%E9%A6%86.jpg" alt="">
                        </div> -->
                        <el-button type="primary" @click="getUploadVideoapp">点击 上传</el-button>
                        <span>1080x1920像素，jpg、png格式</span>
                    </div>
                    <div class="setFooter">
                        <el-button type="primary" @click="addNewappImgclick">保 存</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="登录页名称" name="second2"  class="tabSelectpane">
                    <div id="bdCont">
                        <div class="logoName">
                            <img class="img" src="../../../assets/appIndelogin.jpg" alt="logn">
                            <span>{{indexName}}</span>
                            <input type="text" placeholder="请输入登录名称" v-model="indexName" maxlength="10">
                        </div>
                    </div>
                    <div class="setFooter">
                        <el-button type="primary" @click="saveAppnameClick">保 存</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="H5版本" name="second"  class="tabSelectpane">
                    <div class="h5">
                        <p>设置H5版本</p>
                    </div>
                    <div id="upload">
                        <input 
                            class="uploadCls"
                            type="file" id="headPortraith5" name="files" 
                            placeholder="file" multiple
                            @change="getH5file"	
                            style="opacity: 0;"
                        >
                        <el-button style="margin-bottom:10px;">选择 文件</el-button>
                        <div class="fileName">{{fileDatanameh5}}</div>
                        <el-button style="margin-bottom:20px;" type="primary" @click="getUploadVideoh5">点击 上传</el-button>
                    </div>
                    <div class="reminder">请上传您的H5压缩包文件</div>
                    <div class="explain">
                        <p>版本更新说明</p>
                        <textarea placeholder="请输入版本更新说明" v-model="upgrade_instructions"></textarea>
                    </div>
                    <div class="setFooter">
                        <el-button type="primary" @click="saveH5click">保 存</el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="APP二维码" name="third"  class="tabSelectpane">
                    <div class="appLogo">
                        <div id="qrcode" ref="qrcode"></div>
                        <div>
                        <input disabled class="appLogoinp" type="text" value="掌上通APP安装二维码">
                        </div>
                    </div>
                    <div class="setFooter">
                        <el-button type="primary" @click="downloadEwm">下载二维码</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div> 
       </div>
    </div>
     
</template>
<script>

</script>

<script>
import QRCode from '../../untils/qrcode'
import { heightAuto,getCaption } from "../../untils/heightAuto"; //注意路径'

/* api */
// getLatestappWelcomeinfo 获取
// addAppwelcomeInfo 新增APP欢迎页信息
// uploadAppwelcomeImage 上传
// getLatesth5Upgradeinfo  获取h5   
// uploadH5package  上传h5   
// addH5upgradeInfo  新增
// settingsGetappName  获取
// settingsUpdateappName  修改app名称
import {
        getLatestappWelcomeinfo,
        addAppwelcomeInfo,
        uploadAppwelcomeImage,
        getLatesth5Upgradeinfo,
        uploadH5package,
        addH5upgradeInfo,
        getAppdownloadPageurl,
        settingsUpdateappName,
        settingsGetappName,

        } from '../../api/appmanagement'

  export default {
    data() {
        return {
            // app 上传接口
            appuploadAppwelcomeImage :  window.ServerUrl + '/admin/api/v1/app_management/settings/upload_app_welcome_image',
            appImageurl :'',
            appfiledata : '',
            // app 临时文件地址
            avatar_file_temp_path : '',
            fileDataname : '',
            Initimgdata : '',
            // h5
            h5fileDataname : '',
            fileDatanameh5 : '',
            filedataH5 : '',
            h5_package_file_temp_path : '',
            activeName: 'first',
            upgrade_instructions : '',
            // ewm 
            app_download_page_url : '',
            /* 分割 */
            imageUrl: '',
            // 二维码 地址
            appEwm : '',
            // indexName
            indexName : '',
        };
    },
    methods: {
        // 二维码 函数
        qrcode () {
            let qrcode = new QRCode('qrcode',{
                width: 200, // 设置宽度，单位像素
                height: 200, // 设置高度，单位像素
                border:2,
                text: this.appEwm,   // 设置二维码内容或跳转地址
                colorDark : "#000000", // 生成的二维码的深色部分
                colorLight : "#ffffff", //生成二维码的浅色部分
                correctLevel : QRCode.CorrectLevel.L   // 容错值
            })

        },
        // 获取二维码url
        getInitermurl(){
             // 二维码 生成调用
            // getAppdownloadPageurl
            let objData = {
                  "enterprise_id": localStorage.EnterpriseId,
            }
            getAppdownloadPageurl(objData).then(res => {
                if (res.status === 200 && res.data.result == "ok") {
                    this.appEwm  = res.data.data.app_download_page_url

                    // 二维码 生成调用
                    this.$nextTick(() => {
                        this.qrcode()
                    })

                }
            });	
        },
        // 下载二维码
        downloadEwm(){
             var imgs = document.getElementById("qrcode").getElementsByTagName("img")
                var a = document.createElement('a')
                a.download = '企业二维码'
                a.href = imgs[0].src
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
        },
        // 获取二维码url
        getInitAppname(){
            // getAppdownloadPageurl
            let objData = {
                  "enterprise_id": localStorage.EnterpriseId,
            }
            settingsGetappName(objData).then(res => {
                if (res.status === 200 && res.data.result == "ok") {
                    this.indexName  = res.data.data.app_name

                }
            });	
        },
        // 获取app欢迎页信息
        getInitimgData(){

            // getLatestappWelcomeinfo
            let objData  = {
                 "enterprise_id": localStorage.EnterpriseId,
                }
            getLatestappWelcomeinfo(objData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						//console.log(res);
					}
				});	
        },
        // 上传头像
		getAppfileapp(e) {
           
            let file = document.getElementById("headPortrait").files[0];
            this.filedata = file;
            this.fileDataname = file.name;
        },
        // 点击上传图片
		getUploadVideoapp() {

			if (this.filedata == "") {
				this.$message({
					message: '文件不允许为空',
					type: 'warning',
				});
			} else {
				var fileAjaxdata = this.filedata
				var formData = new FormData();
				formData.append("app_welcome_image_file", fileAjaxdata);

				uploadAppwelcomeImage(formData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						// 提示
						this.$message({
							message: '上传成功',
							type: "success"
                        });
                        this.avatar_file_temp_path = res.data.data.app_welcome_image_file_temp_path
                        this.fileDataname = '';
                        // 预览图片 截取 /opt/ucsys/s
                        // 预览图片
                        let obj = res.data.data.app_welcome_image_file_temp_path;
                        let str = '/upload';
                        let url = getCaption(obj,str)
                        this.Initimgdata = window.ServerUrl + '/' + url


					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			}
        },
        // app 新增
        addNewappImgclick(){
            // 新增
            let objData = {
                "app_welcome_image_file_temp_path": this.avatar_file_temp_path,
                "description": "视联动力圣诞节专辑",
                "enterprise_id": localStorage.EnterpriseId
            }   
            addAppwelcomeInfo(objData).then(res => {
                if (res.status === 200 && res.data.result == "ok") {
                    this.$message({
                        message: '保存成功',
                        type: "success"
                    });
                    this.Initimgdata = '';
                }
            });	
        },  
        /* h5 板块 */
        // 初始化
        getInith5Informant(){
            // getLatesth5Upgradeinfo

            let objData  = {
                 "enterprise_id": localStorage.EnterpriseId,
                }
            getLatesth5Upgradeinfo(objData).then(res => {
                if (res.status === 200 && res.data.result == "ok") {
                    console.log(res);
                }
            });	

        },
        // 获取
        getH5file(){
            // 获取 h5_package_file
            let file = document.getElementById("headPortraith5").files[0];
            this.filedataH5 = file;
            this.fileDatanameh5 = file.name;
        },
        // 上传
        getUploadVideoh5(){
            // 上传文件
            if (this.filedataH5 == "") {
				this.$message({
					message: '文件不允许为空',
					type: 'warning',
				});
			} else {
				var fileAjaxdata = this.filedataH5
				var formData = new FormData();
				formData.append("h5_package_file", fileAjaxdata);

				uploadH5package(formData).then(res => {
					if (res.status === 200 && res.data.result == "ok") {
						 // 提示
                        this.$message({
                            message: '上传成功',
                            type: "success"
                        });
                        this.h5_package_file_temp_path = res.data.data.h5_package_file_temp_path
                        this.fileDatanameh5 = '';

					}else{
						// 错误提示信息
						this.$message.error(res.data.error_description);
					}
				});	
			}

        },
        // 保存
        saveH5click(){
            // addH5upgradeInfo
            let objData = {
                "enterprise_id": localStorage.EnterpriseId,
                "h5_package_file_temp_path":  this.h5_package_file_temp_path,
                "upgrade_instructions": this.upgrade_instructions
            }
            if(objData.h5_package_file_temp_path == ''){
                this.$message.error('请上传您的H5压缩包文件')
                return false;
            }
            if(objData.upgrade_instructions == ''){
                this.$message.error('请填写原因')
                return false;
            }
            addH5upgradeInfo(objData).then(res => {
                if (res.status === 200 && res.data.result == "ok") {
                        // 提示
                    this.$message({
                        message: '保存成功',
                        type: "success"
                    });
                    this.h5_package_file_temp_path = ''
                    this.upgrade_instructions = '';

                }else{
                    // 错误提示信息
                    this.$message.error(res.data.error_description);
                }
            });	
        },
        //  保存 app name
        saveAppnameClick(){
            // 
            let objData = {
                "enterprise_id": localStorage.EnterpriseId,
                "new_app_name": this.indexName
            }
            settingsUpdateappName(objData).then(res => {
                if (res.status === 200 && res.data.result == "ok") {
                        // 提示
                    this.$message({
                        message: '保存成功',
                        type: "success"
                    });
                    // 更新name
                    this.getInitAppname();

                }else{
                    // 错误提示信息
                    this.$message.error(res.data.error_description);
                }
            });	

        }
    },
    mounted: function() {
		let row = ".appTabcont";
        heightAuto(row);
        // 获取信息
        this.getInitimgData();
        // h5 信息
        this.getInith5Informant();
        // 二维码  url
        this.getInitermurl();
        // appName
        this.getInitAppname();

    }
  };
</script>
<style scoped>
    #imageWrapper{
        width: 200px;
        height: 200px;
    }
    #bdCont img{
        width: 200px;
        height: 355px;
        display: block;
    }
    #bdCont span{
        width: 200px;
        height: 36px;
        position: absolute;
        top: 133px;
        left: 5px;
        color: #fff;
        text-align: center;
        line-height: 36px;
    }
    #bdCont input{
        margin-top: 20px;
        width: 160px;
        height: 34px;
        font-size: 14px;
        line-height: 35px;
        padding: 0 20px;
        background: #2a3558;
        border: 1px #3b4872 solid;
    }
    #qrcode{
        margin: 10px 0;
        width: 200px;
    }
    #upImgc{
        width: 200px;
        height: 355px;
        overflow: hidden;
        display: block;
        margin-bottom: 20px;
    }
    #upload #headPortraith5{
        position: absolute;
        top: 0;
        left: 0;
        width: 120px;
        height: 36px;
        z-index: 2;
    }
    #upload{
        position: relative;
    }
    #upload .fileName{
        margin-bottom: 10px;
    }
    .uploadCls{
        position: absolute;
        top: 155px;
        left: 75px;
        width: 50px;
        height: 50px;
    }
   .upLoadcon{
        border: 1px dashed #d9d9d9;
        width: 192px;
        margin-bottom: 20px;
   }
    #preview img{
        width: 178px;
        height: 178px;
    }
    .appTabcont{
        background: #354166;
        box-shadow: 0 0 26px #01060e;
        padding: 34px 42px;
        margin: 15px 27px 15px 15px;
    }
    .appTab {
        width: 500px;
        margin:  0 auto;
        font-size: 14px;
    }
    #appTab .el-tabs__nav{
        margin-bottom: 20px;
        width: 400px;
        display: flex;
        justify-content: space-between;
    }
    .start, .reminder{
        margin-bottom: 20px;
    }
    .h5{
        margin-bottom: 50px;
    }
    .explain p{
        margin-bottom: 10px;
    }
    .explain textarea{
        width: 500px;
        height: 150px;
        display: block;
        resize: vertical;
        padding: 5px 15px;
        line-height: 1.5;
        box-sizing: border-box;
        font-size: inherit;
        color: #eee;
        background-color: #2a3558;
        background-image: none;
        border: 1px solid #3b4872;
        border-radius: 4px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
    /* app 二维码 */
    .upload-app{
        margin-bottom: 20px;
        overflow: hidden;
    }
    .appLogoimg{
        margin-bottom: 20px;
        width: 200px;
        height: 200px;
    }
    .appLogoinp{
        margin-bottom: 20px;
        width: 180px;
        height: 36px;
        font-size: 14px;
        line-height: 36px;
        padding-left: 20px;
        background: #2a3558;
        border: 1px solid #3b4872;
    }
    .downEwm:hover{
        background: #57e29b;
    }
    .setFooter{
        margin-top: 20px;
        width: 100%;
        float: left;
    }
    .avatar-uploader, .upload-h5{
        margin-bottom: 20px;
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
        width: 200px;
        height: 355px!important;
        line-height: 355px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>