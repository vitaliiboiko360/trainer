<script setup>
const { textLine, endParagraph = false } = defineProps([
  'textLine',
  'endParagraph',
]);
</script>

<template>
  <span> {{ textLine }}{{ ' ' }} </span>
  <br v-if="endParagraph" />
</template>
