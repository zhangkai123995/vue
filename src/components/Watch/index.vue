<template>
  <div>
    <div>{{fullName}}</div>
    <br />
    <button @click="handleChange1">点击改变 obj.fullName.firstName</button>
    <br />
    <button @click="handleChange2">点击改变 obj.fullName.lastName</button>
  </div>
</template>
<script>
let num1 = 1;
let num2 = 1;
export default {
  name: "Watch",
  info: ["实例的监听功能"],
  Zhname: "实例 watch",
  data() {
    return {
      obj: {
        fullName: {
          firstName: "zhang",
          lastName: "kai"
        }
      }
    };
  },
  computed: {
    fullName: function() {
      return this.obj.fullName.firstName + this.obj.fullName.lastName;
    }
  },
  watch: {
    obj: {
      handler(n, o) {
        console.log("deep watch");
      },
      deep: true
    }
  },
  methods: {
    handleChange1() {
      num1++;
      this.obj.fullName.firstName = "gao" + num1;
    },
    handleChange2() {
      num2++;
      this.obj.fullName.lastName = "song" + num2;
    }
  },
  created() {
    this.$watch("obj.fullName.firstName", function(newVal, oldVal) {
      this.log("firstName changed");
    });
    this.$watch("obj.fullName.lastName", function(newVal, oldVal) {
      this.log("lastName changed");
    });
    // this.$watch("obj.fullName", function(newVal, oldVal) {
    //   this.log("fullName changed");
    // });
  }
};
</script>