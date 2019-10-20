<template>
  <div>
    <Child :list="list" />
  </div>
</template>
<script>
import Child from "./Child";
export default {
  name: "Functional",
  info: ["info"],
  Zhname: "函数式组件",
  components: {
    Child
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  }
};
</script>