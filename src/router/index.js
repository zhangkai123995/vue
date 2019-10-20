import Vue from "vue";
import Router from "vue-router";
import AllComponents from "../components"
Vue.use(Router);

const theRouter = new Router();

// 动态添加路由
for (let key in AllComponents) {
  const Component = AllComponents[key];
  theRouter.addRoutes([
    {
      path: `/${key}`,
      name: Component.name,
      // component: Component
      // component: () => import(`@/components/${Component.name}`)
      component: () => import(`@/components/${Component.name}`)
    }
  ])
}
theRouter.addRoutes([
  {
    path: "/",
    name: "/",
    component: AllComponents.Home
  }
])
theRouter.addRoutes([
  {
    path: "/AsyncComponent",
    name: "AsyncComponent",
    component: () => import(/* webpackChunkName: "AsyncComponent" */"@/components/AsyncComponent")
  }
])

export default theRouter;

