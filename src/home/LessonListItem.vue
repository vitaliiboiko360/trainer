<script setup>
const { title, lessonNumber } = defineProps(['title', 'lessonNumber']);
</script>

<template>
  <p :class="$style.numberLine">
    <span :class="$style.iconRotate">🔹</span>{{ lessonNumber }}
  </p>
  <p :class="$style.titleLessonLine">{{ title }}</p>
</template>

<style module>
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
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.iconRotate {
  display: inline-block;
  animation: 25s linear infinite rotateKeyframes;
}
</style>
