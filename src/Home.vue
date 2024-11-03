<script setup>
import HomeTitle from './home/HomeTitle.vue';
import * as css from './home/home.module.scss';
console.log(css);
</script>

<template>
  <div :class="css.homeDivOuter"><HomeTitle /></div>
</template>

<!-- <style lang="scss" module="css">
@use './home/home.scss';
</style> -->
