<template>
  <div>NewComponent 1</div>
</template>
<script>
export default {
  created() {
    this.log("NewComponent 1 is created");
  },
  mounted() {
    this.log("NewComponent 1 is mounted");
  },
  updated() {
    this.log("NewComponent 1 is updated");
  }
};
</script>