<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const refImg = ref();
onMounted(() => {
  gsap.to(refImg.value, {
    opacity: 1,
    duration: 0.8,
    // ease: ,
    left: '+=120',
  });
});
</script>

<template>
  <div :class="$style.container">
    <p :class="$style.text">Learn Spanish Online</p>
    <img
      :ref="(el) => (refImg = el)"
      :class="$style.image"
      style="opacity: 0"
      src="/data/hm/home-1.png"
    />
  </div>
</template>

<style module>
.container {
  position: relative;
}
.text {
  position: absolute;
}
.image {
  position: absolute;
  height: 100%;
  /* width: 100%; */
  object-fit: contain;
  left: 200px;
}
</style>
