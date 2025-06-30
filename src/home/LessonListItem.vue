<script setup>
import { ref } from 'vue';
const { title, lessonNumber } = defineProps(['title', 'lessonNumber']);

const angle1 = ref(Math.random() * 360);
const angle2 = (angle1.value + 180) % 360;
const hueRotate = ref(Math.PI * Math.PI * lessonNumber);
</script>

<template>
  <p :class="$style.numberLine">
    <span :class="$style.iconRotate"
      ><img
        :class="$style.imageDiamond"
        height="14"
        width="14"
        src="/data/diamond.svg" /></span
    >&nbsp;{{ lessonNumber }}
  </p>
  <p :class="$style.titleLessonLine">{{ title }}</p>
</template>

<style module>
.imageDiamond {
  filter: hue-rotate(calc(v-bind(hueRotate) * 1rad));
}
.numberLine {
  text-align: right;
  margin-right: 1.2rem;
  margin-bottom: 1rem;
}
.titleLessonLine {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

@keyframes rotateKeyframes {
  0% {
    transform: rotate(calc(v-bind(angle1) * 1deg));
  }
  50% {
    transform: rotate(calc(v-bind(angle2) * 1deg));
  }
  100% {
    transform: rotate(calc(v-bind(angle1) * 1deg));
  }
}
.iconRotate {
  display: inline-block;
  animation: 25s linear infinite rotateKeyframes;
}
</style>
