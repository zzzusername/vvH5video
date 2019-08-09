<template>
<div class="homepage" id="homepage">
  <div id="homecontent">
    <el-row class="header_Motif">


      <el-col :span="24" class="dataimg_height header_home_list" id="homePage_Vod">
        <div class="listBox" v-if="tokenNumber">
          <ul>
            <li class="fleft tll" v-for="(item, index) in listData" :key="index" @click="tolivepage(item.code)">

              <!--<router-link :to="'/Home/Details/'+101">-->


                <span class="img" >
                <div v-html="item.isplay" class="isplay"></div>
                  <img :src="item.image_url" alt>
                </span>
                <div class="fontBox">
                  <h3 class="f18"> 主讲人：{{ item.speaker }}</h3>
                  <h4 class="f18">直播时间：{{ item.Process_time }}</h4>
                  <h3 class="f18">{{ item.title }}</h3>

                </div>

              <!--</router-link>-->
            </li>
          </ul>
        </div>

        <div class="listBox" v-else>
          22334
          <ul>
            <li class="fleft tll" v-for="(item, index) in nolistData" :key="index">
              <span class="img">
                <img :src="item.thumUrl" alt>
              </span>
              <div class="fontBox">
                <h3 class="f18">{{ item.vodTitle }}</h3>
                <p class="c99 f16">{{ item.famousTeacherName }}</p>
              </div>
              <p class="count c99 f14">
                <span class="fright">{{ item.departmentName }}</span>
                {{ item.onDemandOfNumber }}
              </p>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>

</div>
</template>
<script>
  import $ from 'jquery'
  import axios from 'axios'
  import {
    videolivelist,


  } from "../interface/home";
   import {
    liveUrl,


  } from  "../interface/live"

  var page = 0;
  var scopes=8

  export default {
    data: function() {
      return {
        pagenumber: page,
        pagesize: scopes,
        total: 1,
        tokenNumber:true,
        listData:[],
        isplay:"未开始"



      }
    },
    created: function() {
    },
    mounted() {
      var hei = document.documentElement.clientHeight;

      var Pageheader =document.getElementsByClassName("Pageheader")[0];
    var numder=Pageheader.clientHeight
      var homepage =document.getElementById("homepage");
      homepage.style.height=hei-numder-40+"px";
      console.log(hei-numder)

      this.livelist()
      document
        .getElementById("homepage")
        .addEventListener("scroll", this.handleScroll);



    },
    methods: {
      handleScroll() {
        var onDemandLis = document.getElementById("homepage");
        var hei = onDemandLis.clientHeight;
        console.log("homepage" + hei);
        // let height = this.$refs.elememt.offsetHeight;
        // console.log(height);
        var mySlide = document.getElementById("homepage").scrollTop;
        if (mySlide / hei > 0.5) {

//          this.LoadgetUserRecordLog();
//          this.currentPage++;
        }
        // console.log(this.currentPage);
        console.log(mySlide / hei);
      },
      //验证是否直播中
      Verificationlive(e){

              liveUrl(regpar).then(function (res) {

          if (res.status === 200 && res.data.result == "ok") {

            var response = res
            _this.$message({
              message: "新增成功",
              type: "success"
            });
            _this.dialogTableVisibleadd = false;
            _this.getVersionList("", '');


          }
          if (res.data.result == "error") {
            _this.$message({
              message: res.data.error_description,
              type: 'warning'
            });
            // console.log(res);
          }


        }).catch(function (error) {
          console.log(error);
        });

      },

      // 区分机型｛｝｛｝
      tolivepage(e) {
        var userAgent = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1; //g
        var isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        console.log(userAgent)
        console.log(userAgent.indexOf("Safari") > -1)
        console.log(userAgent.indexOf("Chrome") > -1)

        if (isAndroid) {

          this.$router.push(
            {path: '/Home/Details/' + e}
          )

        } else if (isIOS) {
          this.$router.push(
            {path: '/Home/DetailsIos/' + e}
          )

        }else {
          this.$router.push(
            {path: '/Home/Details/' + e}
          )
        }
      },


      gtURL() {
        //拼接图片地址zxj
        let URL = ServerUrl;
        var res = this.listData;
        for (var key in res) {
          res[key].image_url = URL + "/" + res[key].image_url;
//          res[key].thumbnailUrl = URL + "/" + res[key].thumbnailUrl;
//          res[key].videoUrl = URL + "/" + res[key].videoUrl;
        }
        console.log(this.listData);
      },
      livelist() {
        let _this = this;
        var par = {
          "enterprise_user_id": localStorage.enterprise_user_id,
          "is_first": false,
          "page_num": 0,
          "page_size": 10,
          "timestamp": 0
        }
        console.log("直播列表");
        videolivelist(par)
          .then(res => {
            console.log(res);
            if (res.status === 200 && res.data.result == "ok") {
           var data=res.data.data.video_live_list;
//              var data = [{
//                "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                "title": "测试一下",
//                "start_time": 1564742100000,
//                "end_time": 1564754100000,
//                "status": "APPOINT",
//                "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                "speaker": "lkj",
//                "plan_amount": 5,
//                "order_count": 0,
//                "order_state": "CANCEL",
//                "owner": "owner"
//              },
//                {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }, {
//                  "id": "8c72fc7c-dfa4-4705-bcbf-f713a969fbc0",
//                  "title": "测试一下1",
//                  "start_time": 1564742100000,
//                  "end_time": 1564754100000,
//                  "status": "APPOINT",
//                  "image_url": "upload/folder/videoLiveImage/201908/2e8edf14-1180-4594-8f62-1c0f88d6daad@1564740318238.png",
//                  "speaker": "lkj1",
//                  "plan_amount": 5,
//                  "order_count": 0,
//                  "order_state": "CANCEL",
//                  "owner": "owner"
//                }
//              ]

              for (var i in data) {
                if(data[i].status=='PLAYING'){
                  data[i].isplay="正在直播"
                }else if(data[i].status=='APPOINT'){
                       data[i].isplay="未开始"
                }else if(data[i].status=='STOP'){
                       data[i].isplay="已暂停"
                }

//             data[i].start_time=_this.timestampToTime(data[i].start_time)
//             data[i].end_time=_this.timestampToTime(data[i].end_time)
                var timeary1 = _this.timestampToTime(data[i].start_time)
                var timeary2 = _this.timestampToTime(data[i].end_time)
                var arr = timeary2.split(" ")

                data[i].Process_time = timeary1 + "-" + arr[1]
              }
              _this.listData = data


              _this.gtURL();

            }
          })
          .catch(function (error) {
            console.log(error);
          });

      },

    }

  }
</script>
<style lang="scss">
  #homecontent{
    width: 90%;
    margin-left: 5%;
    /*height: 90%;*/
    background-color: #ffffff;
  }
  .homepage{
    padding-top: 40px;
    background-color: #c3c3c3;
    overflow-y:auto;
    .listBox {
      width: 100%;
      overflow: hidden;

      ul {
        width: 100%;
        li {
          float: left;
          width: 22.5%;
          height: 307px;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          display: block;
          overflow: hidden;
          background: #fff;
          margin: 0px 0px 30px 2%;
          border-radius: 4px;
          span.img {
             .isplay{
                position:absolute;
                color: rgb(95, 223, 133);
             }
            width: 100%;
            height: 178px;
            display: block;
            overflow: hidden;
            position: relative;
          
            img {
              width: 100%;
              height: 178px;
              display: inline-block;
              transition: all 0.6s;
              -webkit-transition: all 0.6s;
              -o-transition: all 0.6s;
              -moz-transition: all 0.6s;
              -ms-transition: all 0.6s;
            }
            img:hover {
              transform: scale(1.15);
              -webkit-transform: scale(1.15);
              -o-transform: scale(1.15);
              -moz-transform: scale(1.15);
              -ms-transform: scale(1.15);
            }
          }
          .fontBox {
            height: 120px;
            padding: 0 12px;
            overflow: hidden;
            h3 {
              height: 20px;
              margin: 17px 0;
              display: block;
              overflow: hidden;
              line-height: 20px;
              font-weight: normal;
            }
          }
          p.count {
            height: 40px;
            padding: 0 12px;
            line-height: 40px;
            border-top: 1px #e8e8e8 solid;
          }
        }
        li:hover {
          box-shadow: 0px 0px 24px #c2c2c2;
        }
      }

    }
  }

</style>

