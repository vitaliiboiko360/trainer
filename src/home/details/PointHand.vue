<script setup>
import { onMounted, ref, watch } from 'vue';
import { IMG_POINT_HAND_SRC, POINT_HAND_PATH_ID } from './etc';
import MotionPathPlugin, { gsap } from 'gsap';
import { pointHand, refSvgCanvas } from './refs';

gsap.registerPlugin(MotionPathPlugin);

const refImg = ref();
onMounted(() => {
  // gsap.set(refImg.value, {
  //   opacity: 0,
  // });
});
watch(pointHand, () => {
  if (pointHand.value < 1) return;
  gsap.to(refImg.value, {
    duration: 0.6,
    opacity: 1,
  });
  gsap.to(refImg.value, {
    duration: 1.2,
    motionPath: {
      path: refSvgCanvas?.value?.getElementById('#' + POINT_HAND_PATH_ID),
      align: refSvgCanvas?.value?.getElementById('#' + POINT_HAND_PATH_ID),
      alignOrigin: [0.5, 0.5],
    },
  });
});
</script>

<template>
  <img
    :ref="(el) => (refImg = el)"
    :class="[$style.imgHand]"
    :src="`${IMG_POINT_HAND_SRC}`"
  />
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
  opacity: 0;
}
</style>
