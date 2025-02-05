<script setup>
const { title, lessonNumber } = defineProps(['title', 'lessonNumber']);
</script>

<template>
  <p :class="$style.numberLine">🔹{{ lessonNumber }}</p>
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
</style>
