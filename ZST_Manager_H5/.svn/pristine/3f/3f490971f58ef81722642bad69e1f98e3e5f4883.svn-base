<template>
  <div class="content" id="cont">
    <div class="app-cent">
      <div class="hd">
        <span>权限分组</span>
        <span class="btnRight">
          <button class="Zbtn btn-rt" @click="addPermission">新增权限分组</button>
        </span>
      </div>
      <div class="bd table">
        <el-table :data="tableData" header-align="left" style="width: 100%">
          <el-table-column prop="name" label="权限组名称"></el-table-column>
          <el-table-column prop="people" label="创建人"></el-table-column>
          <el-table-column prop="phone" label="创建人手机号"></el-table-column>
          <el-table-column prop="time" label="创建时间"></el-table-column>
          <el-table-column prop label="操作" width="200">
            <template slot-scope="scope">
              <span class="spanBtn">编辑</span>
              <span class="spanBtn" @click="managementMembers(scope.row)">管理成员</span>
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
    <!-- 新增权限分组 -->
    <el-dialog
      class="Zdialog-form"
      title="新增权限分组"
      :visible.sync="editPermission"
      :before-close="cancelClick"
      width="50%"
    >
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="权限组名称:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="一键报警:">
          <el-radio-group v-model="form.Cpolice">
            <el-radio label="开启"></el-radio>
            <el-radio label="关闭"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 平台多选 -->
        <el-form-item id="platClass" label="报警接收平台:">
          <el-select
            v-model="platValue"
            multiple
            collapse-tags
            style="height: 40px;"
            placeholder="请选择"
          >
            <el-option
              v-for="item in platformData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 监控 ／ 终端 tab切换-->
        <el-tabs v-model="activeName" @tab-click="handleClick" id="tabCard" style="padding:0 10px;">
          <el-tab-pane label="监控资源分配：" name="first">
            <div class="tabCont">
              <div class="hd">
                <span>已添加资源目录</span>
                <el-button size="small" class="clear">清空</el-button>
              </div>
              <div class="bd">
                <div class="hd-l">
                  列表
                  <el-tree
                    :data="monitoringData"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick"
                  ></el-tree>
                </div>
                <div class="hd-r">
                  <li>上海 <span>close</span></li>
                  <li>上海 <span>close</span></li>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="终端通讯录分配：" name="second">终端通讯录分配：</el-tab-pane>
        </el-tabs>
        <div class="btnRight">
          <button class="Zbtn btn-submit">取消</button>
          <button class="Zbtn btn-submit">保存</button>
        </div>
      </el-form>
    </el-dialog>
    <!-- 测试权限成员 -->
    <el-dialog class="Zdialog-form" title="测试权限组成员" :visible.sync="editMembers" width="50%">
      <div class="hd">
        <el-input placeholder="请输入内容" v-model="searchMembers" clearable></el-input>
      </div>
      <div class="bd table">
        <el-table :data="tableData" header-align="left" style="width: 100%">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="创建人手机号"></el-table-column>
          <el-table-column prop="people" label="职务"></el-table-column>
          <el-table-column prop label="操作" width="200">
            <template>
              <span class="spanBtn">删除</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="btnRight">
          <button class="Zbtn btn-submit">取消</button>
          <button class="Zbtn btn-submit">保存</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "研发部",
          people: "创建人",
          phone: "手机号",
          time: "创建时间"
        },
        {
          name: "研发部",
          people: "王娜",
          phone: "13800003333",
          time: "2019-12-12 12:30:10"
        }
      ],
      editPermission: false,
      // 权限分组弹窗 form
      form: {
        name: "",
        phone: "15116965192",
        img: "",
        password: "123",
        oldpassword: "321",
        region: "1"
      },
      // 管理成员 managementMembers
      editMembers: false,
      searchMembers: "搜索手机号？",
      // 报警平台需选择
      platformData: [
        {
          value: "1",
          label: "海淀GIS平台（负责人：张珊，13811112222）"
        },
        {
          value: "2",
          label: "东城GIS平台（负责人：张珊，13811112222）"
        }
      ],
      platValue: "",
      // tab 切换
      activeName: "first",
      // 监控数据
      monitoringData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    // 新增权限分组
    addPermission() {
      this.editPermission = true;
    },
    // 关闭弹窗
    cancelClick() {
      this.editPermission = false;
    },
    // 管理成员
    managementMembers(scope) {
      console.log(scope);
      this.editMembers = true;
    },
    // 修改 store
    saveTreedata(isNext) {
      if (isNext) {
        let val = "4";
        this.$store.commit("skip", val);
      } else {
        let val = "2";
        this.$store.commit("skip", val);
      }
    },
    // tab 切换
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 监控数据点击
    handleNodeClick(data){
      console.log(data)
    }
  }
};
</script>
<style>
#platClass .el-input--suffix .el-input__inner {
  height: 40px !important;
  line-height: 40px !important;
}
#platClass .el-tag--info,
#platClass .el-select .el-tag {
  background-color: #9093991a;
  border-color: #90939933;
}
#tabCard .el-tabs__item {
  color: #fff;
}
#tabCard .is-active {
  color: #409eff;
}
#tabCard .tabCont .bd{
  padding: 0;
}
.tabCont .clear {
  float: right;
}
.tabCont .bd {
  overflow: hidden;
}
.tabCont .hd-l {
  padding: 20px;
  float: left;
  width: 60%;
  border-right: 1px solid #4a567c;
}
.tabCont .hd-r {
  padding: 20px;
  float: left;
  text-align: center;
}
.tabCont .hd-r li span{
  margin-left: 10px;
}
</style>

