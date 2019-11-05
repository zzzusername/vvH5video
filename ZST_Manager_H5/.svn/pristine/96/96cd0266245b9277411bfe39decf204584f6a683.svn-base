<template>
  <div class="mLeft" id="lodid">
    <div class="navMenubox">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            :default-active="this.activeIndex"
            :router="true"
            unique-opened
            class="el-icon-caret-top"
            background-color="#2d3859"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu :index="item.index" v-for="(item,index) in items" :key="index">
              <template v-if="item.children">
                <template slot="title">
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item-group v-for="(it,index) in item.children" :key="index">
                  <router-link :to="it.url" class="MyOption Myopen Mydefault">
                    <el-menu-item class="MyOptionli" :index="it.url">
                      <span class="imgico" :class="'imgico' + index"></span>
                      {{it.title}}
                    </el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </template>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
	$(function() {

		var wid = document.documentElement.clientWidth,
			hei = document.documentElement.clientHeight;
		var fheight = $('.head').height();

		$('.mLeft').css('height', hei - fheight);
		$('.mrLeft').css('height', hei - fheight - 12);
		$('.mrCenter').css('height', hei - fheight - 12);;
		$('.navMenubox').css('height', hei - fheight);
		$('.centerBox').css('height', $(".centerBox").height() + 24);

  });
export default {
  data: function() {
    return {
      items: {},
      activeIndex: "/Homemain/company",
      itemslist: {
        data: {
          items: [
            {
              id: 2,
              parentId: 2,
              index: "2",
              title: "企业管理",
              url: "",
              description: "",
              actionIdList: [],
              children: [
                {
                  id: 13,
                  parentId: 4,
                  index: "1-10",
                  title: "企业信息",
                  url: "/Homemain/company",
                  description: "",
                  actionIdList: [],
                  children: []
                },
               /*  {
                  id: 14,
                  parentId: 5,
                  index: "1-11",
                  title: "子企业列表",
                  url: "/Homemain/child",
                  description: "",
                  actionIdList: [],
                  children: []
                }, */
                {
                  id: 15,
                  parentId: 6,
                  index: "1-12",
                  title: "工作单位列表",
                  url: "/Homemain/units",
                  description: "",
                  actionIdList: [],
                  children: []
                },
                {
                  id: 16,
                  parentId: 7,
                  index: "1-13",
                  title: "职务列表",
                  url: "/Homemain/duty",
                  description: "",
                  actionIdList: [],
                  children: []
                },
              ]
            },
            {
              id: 3,
              parentId: 0,
              index: "3",
              title: "用户管理",
              url: "",
              description: "",
              actionIdList: [],
              children: [
                {
                  id: 31,
                  parentId: 4,
                  index: "3-1",
                  title: "用户审核",
                  url: "/Homemain/usercheck",
                  description: "",
                  actionIdList: [],
                  children: []
                },
                {
                  id: 32,
                  parentId: 5,
                  index: "3-2",
                  title: "用户列表",
                  url: "/Homemain/userlist",
                  description: "",
                  actionIdList: [],
                  children: []
                },
                {
                  id: 33,
                  parentId: 6,
                  index: "3-3",
                  title: "权限组列表",
                  url: "/Homemain/authoritylist",
                  description: "",
                  actionIdList: [],
                  children: []
                }
              ]
            },
            {
              id: 4,
              parentId: 0,
              index: "4",
              title: "App管理",
              url: "",
              description: "",
              actionIdList: [],
              children: [
                {
                  id: 41,
                  parentId: 1,
                  index: "4-1",
                  title: "App设置",
                  url: "/Homemain/setapp",
                  description: "",
                  actionIdList: [],
                  children: []
                },
                {
                  id: 42,
                  parentId: 2,
                  index: "4-2",
                  title: "轮播图列表",
                  url: "/Homemain/slideshowlist",
                  description: "",
                  actionIdList: [],
                  children: []
                },
               /*  {
                  id: 43,
                  parentId: 3,
                  index: "4-3",
                  title: "APP模块管理",
                  url: "/Homemain/appmodules",
                  description: "",
                  actionIdList: [],
                  children: []
                },
                {
                  id: 44,
                  parentId: 4,
                  index: "4-4",
                  title: "用户注册设置",
                  url: "/Homemain/setlogin",
                  description: "",
                  actionIdList: [],
                  children: []
                }, */
               /*  {
                  id: 45,
                  parentId: 5,
                  index: "4-5",
                  title: "一键报警类别",
                  url: "/Homemain/policesort",
                  description: "",
                  actionIdList: [],
                  children: []
                }, */
              ]
            },
           /*  {
              id: 5,
              parentId: 0,
              index: "5",
              title: "视频管理",
              url: "",
              description: "",
              actionIdList: [],
              children: [
                {
                  id: 51,
                  parentId: 1,
                  index: "5-1",
                  title: "视联分享",
                  url: "/Homemain/videoshare",
                  description: "",
                  actionIdList: [],
                  children: []
                },
              ]
            }, */
            {
              id: 6,
              parentId: 0,
              index: "6",
              title: "资源管理",
              url: "",
              description: "",
              actionIdList: [],
              children: [
                {
                  id: 63,
                  parentId: 3,
                  index: "6-3",
                  title: "GIS管理平台",
                  url: "/Homemain/gisplatform",
                  description: "",
                  actionIdList: [],
                  children: []
                },
                {
                  id: 61,
                  parentId: 1,
                  index: "6-1",
                  title: "监控资源列表",
                  url: "/Homemain/resourcelist",
                  description: "",
                  actionIdList: [],
                  children: []
                },
                {
                  id: 62,
                  parentId: 2,
                  index: "6-2",
                  title: "终端通讯录列表",
                  url: "/Homemain/addresslist",
                  description: "",
                  actionIdList: [],
                  children: []
                },
              ]
            },
            {
              id: 7,
              parentId: 0,
              index: "7",
              title: "日志管理",
              url: "",
              description: "",
              actionIdList: [],
              children: [
                {
                  id: 71,
                  parentId: 1,
                  index: "7-1",
                  title: "系统日志",
                  url: "/Homemain/system",
                  description: "",
                  actionIdList: [],
                  children: []
                },
               /*  {
                  id: 72,
                  parentId: 2,
                  index: "7-2",
                  title: "用户操作日志",
                  url: "/Homemain/userlog",
                  description: "",
                  actionIdList: [],
                  children: []
                }, */
              ]
            },
          ]
        }
      }
    };
  },
  created: function() {},
  mounted() {
    this.itemis();
    this.defaultIdex();
    $(window).resize(function() {
      var hei = $(".mLeft").height();
      $(".navMenubox").css("height", hei);
    });
  },
  methods: {
    itemis() {
      this.items = this.itemslist.data.items;
    },
    defaultIdex() {
      let path = this.$route.path;
    }
  },
  beforeUpdate: function() {
    this.activeIndex = this.$route.matched[1].path;
  },
};
</script>
<style>
@media screen and (max-width: 1681px) {
  .zForm .timeBox {
    width: 195px;
  }
  .zForm .zSelect {
    width: 100px;
  }
  .zForm .zInput {
    width: 100px;
    padding-left: 0;
  }
  .timeBox .el-date-editor.el-input {
    width: 195px;
  }
  .elTable {
    height: 90%;
    overflow: hidden;
  }
  .mRightTwo .zForm button {
    float: left;
    color: #eee;
    height: 38px;
    font-size: 14px;
    margin-left: 11px;
    text-align: center;
    line-height: 38px;
    padding: 0px 10px;
    background: #1b274c;
    border: 1px #3b4872 solid;
  }
  .zForm {
    padding-bottom: 58px;
  }
}

@media screen and (max-width: 1366px) {
  .navMenubox .el-menu-item {
    font-size: 12px;
  }
  .el-table td {
    padding: 4px 0;
  }
  .mRightTwo .elTable {
    height: 80%;
  }
  .mRightTwo .zTable {
    height: 93%;
  }
  .mRightTwo .zForm span {
    font-size: 12px;
  }
  .el-submenu__title {
    font-size: 12px;
  }
  .el-submenu__title {
    height: 30px;
    line-height: 30px;
  }
  .el-table .cell {
    font-size: 12px;
  }
  .zForm .timeBox {
    width: 195px;
  }
  .zForm .zSelect {
    width: 100px;
  }
  .zForm .zInput {
    width: 100px;
    padding-left: 0;
  }
  .timeBox .el-date-editor.el-input {
    width: 195px;
  }
  .elTable {
    height: 90%;
    overflow: hidden;
  }
  .mRightTwo .zForm button {
    float: left;
    color: #eee;
    height: 38px;
    font-size: 14px;
    margin-left: 11px;
    text-align: center;
    line-height: 38px;
    padding: 0px 10px;
    background: #1b274c;
    border: 1px #3b4872 solid;
  }
  .zForm {
    padding-bottom: 58px;
  }
}
</style>
<style>
	.is-opened .el-submenu__title {
		background:#161d33 !important;
	}
	.el-col-24 {
		/* margin-left: 10%; */
	}
	
	.el-menu {
		width: 100%;
	}
	
	.el-menu-item {
		padding-left: 10px !important;
	}
	
	.mLeft {
		float: left;
		width: 8.8%;
		/*width: 169px;*/
		overflow: hidden;
		background: #2e3859;
	}
	
	.navMenubox {
    min-height: 1000px;
		overflow: hidden;
		overflow-y: auto;
	}
	
	.navMenu>li {
		display: block;
		margin: 0;
		padding: 0;
		border: 0px;
	}
	
	.box-log {
		width: 15px;
		height: 15px;
	}
	
	.Myopen li {
		color: #FFF;
		background: #161d33 !important;
		border-left: 2px solid #57e29b;
	}
	
	.MyOption span {
		display: inline-block;
		width: 10px;
		height: 10px;
	}
	
	.Mydefault li {
		color: #FFF;
		background: #161d33 !important;
		border-left: 2px solid #57e29b;
	}
	
	.MyOption li:focus {
		color: #FFF;
		background: #222942 !important;
		border-left: 2px solid #57e29b;
	}
	
	.MyOption li {
		color: #FFF;
		background: transparent !important;
		border-left: 2px solid transparent;
	}
	/* .is-opened{
     background: #161d33
    } */
	
	.MyOption span.imgico {
		float: left;
		width: 15px;
		height: 15px;
		display: block;
		overflow: hidden;
		margin: 10px 3px 0 8px;
	}
	
	.imgico0 {
		background: url('../../assets/ico1.png') no-repeat;
	}
	
	.imgico1 {
		background: url('../../assets/ico2.png') no-repeat;
	}
	
	.imgico2 {
		background: url('../../assets/ico3.png') no-repeat;
	}
	
	.imgico3 {
		background: url('../../assets/ico4.png') no-repeat;
	}
	
	.imgico4 {
		background: url('../../assets/ico5.png') no-repeat;
	}
	
	.imgico5 {
		background: url('../../assets/ico6.png') no-repeat;
	}
	
	.imgico6 {
		background: url('../../assets/ico7.png') no-repeat;
	}
	
	.imgico7 {
		background: url('../../assets/ico8.png') no-repeat;
	}
	
	.imgico8 {
		background: url('../../assets/ico9.png') no-repeat;
	}
	
	.imgico9 {
		background: url('../../assets/ico10.png') no-repeat;
	}
	
	.imgico10 {
		background: url('../../assets/ico11.png') no-repeat;
	}
	
	.imgico11 {
		background: url('../../assets/ico12.png') no-repeat;
	}
	
	.imgico12 {
		background: url('../../assets/ico13.png') no-repeat;
	}
	
	.imgico13 {
		background: url('../../assets/ico14.png') no-repeat;
	}
	
	.imgico14 {
		background: url('../../assets/ico15.png') no-repeat;
	}
	
	.imgico15 {
		background: url('../../assets/ico16.png') no-repeat;
	}
	
	.imgico16 {
		background: url('../../assets/ico17.png') no-repeat;
	}
	
	.imgico17 {
		background: url('../../assets/ico18.png') no-repeat;
	}
	
	.imgico18 {
		background: url('../../assets/ico19.png') no-repeat;
	}
	
	.imgico19 {
		background: url('../../assets/ico20.png') no-repeat;
	}
	
	.imgico20 {
		background: url('../../assets/ico21.png') no-repeat;
	}
	
	.imgico21 {
		background: url('../../assets/ico22.png') no-repeat;
	}
	
	.imgico22 {
		background: url('../../assets/ico23.png') no-repeat;
	}
	
	.imgico23 {
		background: url('../../assets/ico24.png') no-repeat;
	}
	
	.imgico24 {
		background: url('../../assets/ico25.png') no-repeat;
	}
	
	.imgico25 {
		background: url('../../assets/ico26.png') no-repeat;
	}
	
	.imgico26 {
		background: url('../../assets/ico27.png') no-repeat;
	}
	
	.imgico27 {
		background: url('../../assets/ico28.png') no-repeat;
	}
	
	.imgico28 {
		background: url('../../assets/ico29.png') no-repeat;
	}
	
	.imgico29 {
		background: url('../../assets/ico30.png') no-repeat;
	}
	
	.imgico30 {
		background: url('../../assets/ico31.png') no-repeat;
	}
	
	@media screen and (max-width: 1366px) {
		.mLeft {
			width: 10%;
		}
	}
	
	@media screen and (max-width: 1440px) {
		.mLeft {
			width: 10%;
		}
	}
</style>