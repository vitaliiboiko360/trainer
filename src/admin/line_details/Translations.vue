<script setup>
import { defineProps } from 'vue';

defineProps(['translation']);
</script>

<template>
  <div>
    <div>
      {{ translation.sentenceEnglishTranslation }}
    </div>
    <table></table>
    <div v-for="transItem in translation.translations">
      {{ transItem }}
    </div>
  </div>
</template>
