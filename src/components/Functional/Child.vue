<template functional>
  <div>
    <h3 v-for="item in props.list" :key="item">{{item}}</h3>
  </div>
</template>
<script>