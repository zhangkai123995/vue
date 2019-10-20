<template>
  <div>NewComponent 3</div>
</template>
<script>
export default {
  created() {
    this.log("NewComponent 3 is created");
  },
  mounted() {
    this.log("NewComponent 3 is mounted");
  },
  updated() {
    this.log("NewComponent 3 is updated");
  }
};
</script>