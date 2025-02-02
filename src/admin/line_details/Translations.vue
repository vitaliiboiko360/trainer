<script setup>
import { defineProps } from 'vue';
import TranslationTable from './TranslationTable.vue';
const { translation } = defineProps(['translation']);
</script>

<template>
  <div>
    <div>
      {{ translation.sentenceEnglishTranslation }}
    </div>
    <div v-for="transItem in translation.translations">
      <TranslationTable :wordTranslations="transItem" />
    </div>
  </div>
</template>
