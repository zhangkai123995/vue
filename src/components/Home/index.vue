<template>
  <div>
    <router-link to="/AsyncComponent">点击跳转AsyncComponent动态路由组件</router-link>
    <el-table :data="tableData" stripe height="250" border style="width: 100%">
      <el-table-column prop="name" label="组件名" width="180">
        <template slot-scope="scope">
          <router-link :to="'/'+scope.row.name">{{scope.row.Zhname}}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="info" label="功能描述">
        <template slot-scope="scope">{{scope.row.info.join(" ---- ")}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import AllComponents from "../index";
export default {
  name: "Home",
  info: ["info"],
  Zhname: "组件列表",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.log("===home component is created===");
    for (let key in AllComponents) {
      const theComponent = AllComponents[key];
      this.tableData.push({
        name: theComponent.name,
        info: theComponent.info,
        Zhname: theComponent.Zhname
      });
    }
  }
};
</script>