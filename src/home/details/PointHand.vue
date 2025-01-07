<script setup>
import { onMounted, ref, watch } from 'vue';
import {
  IMG_POINT_HAND_SRC,
  POINT_HAND_PATH_ID,
  POINT_HAND_PATH_ID_2,
} from './etc';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
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
  console.log(refSvgCanvas.value);
  let tl = gsap.timeline();
  tl.to(refImg.value, {
    duration: 1.2,
    motionPath: {
      path: refSvgCanvas.value.getElementById(POINT_HAND_PATH_ID),
      align: refSvgCanvas.value.getElementById(POINT_HAND_PATH_ID),
      alignOrigin: [0.5, 0.5],
    },
    keyframes: {
      opacity: [0.5, 0.8, 0.9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
  })
    .to(refImg.value, {
      duration: 0.3,
      keyframes: {
        scale: [1, 0.9, 0.8, 0.9, 1],
      },
    })
    .to(refImg.value, {
      duration: 0.6,
      motionPath: {
        path: refSvgCanvas.value.getElementById(POINT_HAND_PATH_ID_2),
        align: refSvgCanvas.value.getElementById(POINT_HAND_PATH_ID_2),
        alignOrigin: [0.5, 0.5],
      },
      keyframes: {
        opacity: [1, 1, 0.9, 0.8, 0.5, 0],
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
