<script setup>
import { defineProps } from 'vue';
import TranslationTable from './TranslationTable.vue';
defineProps(['translation']);
</script>

<template>
  <div>
    <div>
      {{ translation.sentenceEnglishTranslation }}
    </div>
    <table></table>
    <div v-for="transItem in translation.translations">
      <TranslationTable :wordTranslations="transItem" />
    </div>
  </div>
</template>
