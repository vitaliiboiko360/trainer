<script setup>
import Slideshow from './banner/Slideshow.vue';
</script>

<template>
  <div :class="$style.banner"><Slideshow /></div>
</template>

<style module>
.banner {
  --b-height: 15rem;
  --b-width: 40rem;
  height: var(--b-height);
  width: var(--b-width);
  & > div,
  svg {
    height: var(--b-height);
    width: var(--b-width);
  }
  background-color: #fff;
  margin-bottom: 2rem;
  position: relative;
  border-radius: 0.5rem;
}
</style>
