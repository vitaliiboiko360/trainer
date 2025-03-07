<script setup>
const { textLine } = defineProps(['textLine']);
</script>

<template>
  <span v-for="(word, index) of textLine.split(' ')" :key="index"
    >{{ `${word} ` }}
  </span>
</template>
