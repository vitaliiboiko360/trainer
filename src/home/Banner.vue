<script setup>
import Slideshow from './banner/Slideshow.vue';
</script>

<template>
  <div :class="$style.banner"><Slideshow /></div>
</template>

<style module>
.banner {
  height: 15rem;
  width: 40rem;
  background-color: #e5e5e530;
  margin-bottom: 2rem;
  position: relative;
}
</style>
