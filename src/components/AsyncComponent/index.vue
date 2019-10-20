<template>
  <div>
    <div @click="handleChange">点击动态切换组件</div>
    <keep-alive>
      <component :is="NewComponent"></component>
    </keep-alive>
    <br />
    <div>全局注册，异步加载</div>
    <async-example />
    <div>局部注册，异步加载</div>
    <my-component />
  </div>
</template>
<script>
import Vue from "vue";
// 定义一个异步组件
Vue.component("async-example", function(resolve) {
  setTimeout(function() {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: "<div>I am async!</div>"
    });
  }, 2000);
});

export default {
  name: "AsyncComponent",
  Zhname: "动态和异步组件",
  info: [
    "keep-alive标签：tab切换时缓存组件实例，组件勾子均不会执行",
    "import，is属性：可实现动态加载组件",
    "理解动态加载组件：必须先注册才能使用。可以异步注册，但须在vue.config.js中设置 runtimeCompiler: true，最好用webpack分包配合"
  ],
  type: "async",
  data() {
    return {
      NewComponent: "NewComponent1",
      show: false
    };
  },
  components: {
    NewComponent1: () => import(`./NewComponent1`),
    NewComponent2: () => import(`./NewComponent2`),
    "my-component": () => {
      return new Promise(function(resolve) {
        setTimeout(function() {
          // 向 `resolve` 回调传递组件定义
          resolve(import(`./NewComponent3`));
        }, 2000);
      });
    }
  },
  created() {
    this.log("===AsyncComponent component is created===");
  },
  methods: {
    handleChange() {
      this.NewComponent =
        this.NewComponent === "NewComponent1"
          ? "NewComponent2"
          : "NewComponent1";
    },
    handleAdd() {
      this.show = true;
    }
  }
};
</script>