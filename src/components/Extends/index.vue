<template>
  <div>
    <testComponent name="zk" title="hahaha" />
  </div>
</template>
<script>
import Vue from "vue";
const testComponent = Vue.extend({
  template: "<div>{{ text }}</div>",
  data: function() {
    return {
      text: "extend test"
    };
  },
  created() {
    this.log(this.$attrs);
  }
});
export default {
  name: "Extends",
  info: ["extends 扩展方式"],
  Zhname: "extends 添加一个全局组件",
  components: {
    testComponent
  },
  data() {
    return {
      name: "zk"
    };
  },
  mounted() {}
};
</script>