<script setup>
const { title, lessonNumber } = defineProps(['title', 'lessonNumber']);
</script>

<template>
  <p :class="$style.numberLine">🔹{{ lessonNumber }}</p>
  <p>{{ title }}</p>
</template>

<style module>
.numberLine {
  text-align: right;
  margin-right: 1.2rem;
  margin-bottom: 1rem;
}
</style>
