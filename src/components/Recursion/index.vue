<template>
  <div>
    <div v-for="(item,index) in treeArr" :key="item">
      子组件，当前层级值： {{index}}
      <br />
      <!-- 递归调用自身, 后台判断是否不存在改值 -->
      <tree :item="item.arr" v-if="item.flag"></tree>
    </div>
  </div>
</template>
<script>
export default {
  // 必须定义name，组件内部才能递归调用
  name: "Recursion",
  info: ["info"],
  Zhname: "递归组件",
  data() {
    return {
      treeArr: [
        {
          name: "黄焖鸡米饭111111111",
          cList: [
            { name: "二级黄焖鸡" },
            {
              name: "one chicken",
              cList: [
                { name: "三级黄焖鸡3333", cList: [{ name: "四级黄焖鸡" }] }
              ]
            }
          ]
        },
        { name: "2222222222" },
        {
          name: "黄焖鸡米饭33333333",
          cList: [{ name: "二级黄焖鸡" }, { name: "one chicken" }]
        }
      ]
    };
  }
};
</script>