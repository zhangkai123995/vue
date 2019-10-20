
<style>
.ppp {
  border: 1px solid red;
}
</style>

<template>
  <div>
    <button @click="changeName">点击更新name</button>
    <h1>name is {{name}}</h1>
    <br />
    <input id="ppp" class="ppp" type="text" v-focus.kkk="{a:1,b:2}" />
  </div>
</template>

<script>
export default {
  name: "Directives",
  info: ["info"],
  Zhname: "自定义指令",
  data() {
    return {
      name: "zk"
    };
  },
  methods: {
    changeName() {
      this.name = "gs";
    }
  },
  directives: {
    focus: {
      bind: function(el, binding, ccc) {
        window.console.log("bind");
        window.console.log(binding);
        el.style.backgroundColor = "green";
        window.console.log(ccc);
      },
      inserted: function(el) {
        window.console.log("inserted");
        el.style.backgroundColor = "orange";
      },
      componentUpdated: function() {
        window.console.log("componentUpdated");
      },
      update: function() {
        window.console.log("update");
      },
      unbind: function() {
        window.console.log("unbind");
      }
    }
  }
};
</script>