<template>
  <div id="msg"></div>
</template>
<script>
import Vue from "vue";
// 创建构造器
const testComponent = Vue.extend({
  template: "<div>{{ text }}</div>",
  data: function() {
    return {
      text: "extend test"
    };
  }
});

export default {
  name: "Extend",
  info: ["info"],
  Zhname: "Vue.extend 全局 API",
  mounted() {
    // 创建 Profile 实例，并挂载到一个元素上。
    new testComponent().$mount("#msg");
  }
};
</script>