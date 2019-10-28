<template>
  <div>
    <CompB />
  </div>
</template>
<script>
// 第二种方式，使用 extends 方式扩展单文件组件
var CompA = {
  template: `<h1>use extends</h1>`
};

var CompB = {
  extends: CompA
};
export default {
  name: "Extend",
  info: ["extend 扩展方式"],
  Zhname: "extend 扩展vue单组件",
  components: {
    CompB
  },
  data() {
    return {};
  }
};
</script>