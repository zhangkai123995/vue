<template>
  <div>NewComponent 2</div>
</template>
<script>
export default {
  created() {
    this.log("NewComponent 2 is created");
  },
  mounted() {
    this.log("NewComponent 2 is mounted");
  },
  updated() {
    this.log("NewComponent 2 is updated");
  }
};
</script>