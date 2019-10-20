<template>
  <div>
    <img
      v-lazy
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554306591265&di=6dec3049bb0a2c189560ef07685579f5&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F5243fbf2b2119313772751b566380cd791238d4b.jpg"
    />
    <br />
    <img
      v-lazy
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554306575480&di=cec5adc9a2b9ed685e244a8b9808da49&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F203fb80e7bec54e7c3e4aa74bf389b504fc26a54.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "Lazy",
  info: ["info"],
  Zhname: "图片懒加载",
  data() {
    return {};
  },
  directives: {
    lazy: {
      bind: function() {},
      inserted: function(el) {
        const img = new Image();
        el.style.backgroundColor = "green";
        img.onload = function() {};
      }
    }
  }
};
</script>
<style>
.ppp {
  border: 1px solid red;
}
</style>