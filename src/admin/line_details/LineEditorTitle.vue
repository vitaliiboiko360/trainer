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
    <span :class="$style.spaceSpan">&emsp13;</span></span
  >
</template>
<style module>
.spaceSpan {
  margin: 0 -0.11rem;
  white-space: pre;
}
</style>
