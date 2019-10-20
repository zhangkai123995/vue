<template>
  <div>
    <h1>111</h1>
    <child v-for="item in list" :key="item" :text="item">12345</child>
  </div>
</template>
<script>
import Vue from "vue";
Vue.component("child", {
  render(h) {
    const arr = this.$slots.default.map(item => {
      return (item.text += this.text);
    });
    return h("h3", arr);
  },
  props: {
    text: {
      type: String,
      required: true
    }
  }
});
export default {
  name: "Render",
  info: ["info"],
  Zhname: "使用render函数",
  data() {
    return {
      list: ["aaa", "bbb", "ccc"]
    };
  }
};
</script>