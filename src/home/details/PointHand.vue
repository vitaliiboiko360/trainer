<script setup>
import { onMounted, ref, watch } from 'vue';
import { IMG_POINT_HAND_SRC } from './etc';
import { gsap } from 'gsap';
import { pointHand } from './refs';

const refImg = ref();
onMounted(() => {
  gsap.set(refImg.value, {
    opacity: 0,
  });
});
watch(pointHand, () => {
  if (pointHand.value != 1) return;
  console.log(`pointHand= ${pointHand}`);
});
</script>

<template>
  <img :ref="refImg" :class="[$style.imgHand]" :src="`${IMG_POINT_HAND_SRC}`" />
</template>

<style module>
.displayNone {
  display: none;
}
.imgHand {
  height: 3rem;
  width: 3rem;
  position: absolute;
  top: 1rem;
  left: 5rem;
}
</style>
