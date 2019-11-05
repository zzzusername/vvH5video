<template>
  <div class="content" id="homeapp">
    <div class="tabCont">
		<ul class="guide">
			<li v-for='(item,index) in this.tabData' :key="index" :label='item.label'
				:class="{active:$store.state.tabIndex - 1 >= index}"
				@click="tabClick(item,index)"
				>{{item.text}}</li>
		</ul>
    </div>
    <Work v-if='this.$store.state.tabIndex == "1"'></Work>
    <Duty v-if='this.$store.state.tabIndex == "2"'></Duty>
    <Permission v-if='this.$store.state.tabIndex == "3"'></Permission>
    <Adm v-if='this.$store.state.tabIndex == "4"'></Adm>
    <Setapp v-if='this.$store.state.tabIndex == "5"'></Setapp>
    <Setcarousel v-if='this.$store.state.tabIndex == "6"'></Setcarousel>
    <Finish v-if='this.$store.state.tabIndex == "7"'></Finish>
  </div>
</template>
<script>
import Work from "./components/work.vue";
import Duty from "./components/duty.vue";
import Permission from "./components/permission";
import Adm from "./components/administrator";
import Setapp from "./components/setapp";
import Setcarousel from "./components/setcarousel";
import Finish from "./components/finish";

import $ from "jquery";

//import { demoApi} from '@/page/api/homeapi';

export default {
  data() {
    return {
        tabData : [
          {
            text : '工作单位',
            label : '1',
            isActive : true,
          },
          {
            text : '职务',
            label : '2',
            isActive : false,
          },
          {
            text : '权限组',
            label : '3',
            isActive : false,
          },
          {
            text : '管理员',
            label : '4',
            isActive : false,
          },
          {
            text : 'app设置',
            label : '5',
            isActive : false,
          },
            {
            text : 'app轮播图',
            label : '6',
            isActive : false,
          },
          {
            text : '完成',
            label : '7',
            isActive : false,
          },
        ],
        tabIndex : 0
        
    };
  },
  components: {
    Work,Duty,Permission,Adm,Finish,Setapp,Setcarousel
  },
  methods:{
		tabClick(item,index){

        // 对应组件 切换
        let val = index - 0 + 1
        this.$store.commit('skip',val);
		}
	},
  mounted: function() {

    // demo api

   /*   demoApi().then(res => {
        console.log(res);
      }) */


    /*   let URL = ServerUrl;
      var Select={}
      this.$http.post(URL + '/super/admin/api/v1/enterprise_management/list_all_assist_servers',{} ).then(function(res) {
        console.log(res);
      }) */
            
  },
  
};
</script>
<style>
#homeapp{
  padding: 20px;
}
#cont{
    width: 93%;
    padding: 30px;
    margin: 20px;
    background: #354166;
    -webkit-box-shadow: 0px 0px 26px #01060e;
    box-shadow: 0px 0px 26px #01060e;
}
#cont .hd{
  margin-bottom: 20px;
  line-height: 38px;
  padding-bottom: 20px;
  border-bottom: 2px solid #4a567c;
}
#cont .bd{
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid #4a567c;
}
#cont .table{
  padding: 0;
  border: none;
}
#cont .Zbtn{
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
#cont .btn-rt{
  float: right;
}
.tabCont{
  padding: 20px;
}
.guide{
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.guide li{
  flex: 1;
  margin-right: 10px;
  line-height: 35px;
  border: 1px solid #fff;
  border-radius: 5px;
  text-align: center;
}
.guide li:last-child{
  margin-right: 0;
}
.guide .active{
  background: #57e29b;
  border: 1px solid #57e29b;
}
#cont .tree .el-button span{
  color: #fff;
}
#cont .btnRight{
  margin-top: 10px;
  text-align: center;
}
/* 弹窗中   输入框 */
.Zdialog input{
  height: 36px;
  line-height: 36px;
}
/* 弹窗中 表单from  输入框 */
.Zdialog-form input{
  height: 40px;
  line-height: 40px;
}
.spanBtn{
  cursor: pointer
}
#upload #upload .el-upload{
  float: inherit;
}
.Zdialog-form .spanBtn{
  margin-left: 10px;
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 3px;
  background: -webkit-gradient(linear,left top, right top,from(#31f394), to(#31e4c1));
  background: linear-gradient(to right,#31f394, #31e4c1);
}
</style>


