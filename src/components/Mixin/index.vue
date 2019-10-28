<template>
  <div>111</div>
</template>
<script>
// 定义一个混入对象
var myMixin = {
  data() {
    return {
      color: "green"
    };
  },
  created: function() {
    window.console.log("mixin created works");
    window.console.log(this.color);
    this.showName();
  },
  mounted: function() {
    window.console.log("mixin mounted works");
  },
  methods: {
    showName: function() {
      window.console.log("this is gaosong");
    }
  }
};
export default {
  name: "Mixin",
  info: ["info"],
  Zhname: "混入",
  data() {
    return {
      color: "red"
    };
  },
  mixins: [myMixin],
  created() {
    window.console.log("main created works");
  },
  mounted() {
    window.console.log("main mounted works");
  },
  methods: {
    showName: function() {
      window.console.log("this is zhangkai");
      window.console.log(this.color);
    }
  }
};
</script>