import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import elementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

let MyPlugin = {};
MyPlugin.install = function (Vue) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
    window.console.log('myGlobalMethod')
  }
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function () {
    // 逻辑...
    window.console.log('myMethod')
  }
  Vue.prototype.log = function (e) {
    window.console.log(e)
  }
  // 添加一个全局 alert方法
  const msgComponent = Vue.extend({
    template: `
      <div id="msg">
        <div>{{ text }}</div>
        <div @click="close">关闭 msg</div>
      </div>
    `,
    data: function () {
      return {
        text: "show msg"
      };
    },
    methods: {
      close() {
        document.getElementById("msg").remove()
      }
    },
  });
  Vue.prototype.$msg = function () {
    let component = new msgComponent().$mount();
    document.getElementById("app").appendChild(component.$el);
  }
}
Vue.use(MyPlugin)
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(elementUi);


// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")