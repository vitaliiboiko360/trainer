<script setup>
defineProps(['line', 'selectedClass']);
const translations = defineModel('translations');
</script>

<template>
  <span v-for="(word, index) in line.split(' ')"
    ><span
      :class="[{ [selectedClass]: translations[index].wordInEnglish != '' }]"
      >{{ word }}</span
    >
    <span>{{ ` ` }}</span></span
  >
</template>
<style module></style>
