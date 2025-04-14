<script setup>
import { defineProps } from 'vue';
import TranslationTable from './TranslationTable.vue';
import TranslationsEnglishSentence from './TranslationsEnglishSentence.vue';
const { translation } = defineProps(['translation']);
const translations = defineModel('translations');
</script>

<template>
  <div>
    <div :class="$style.translationContainer">
      <TranslationsEnglishSentence
        :sentence="translation.sentenceEnglishTranslation"
      />
    </div>
    <div v-for="(transItem, index) in translation.translations">
      <TranslationTable
        :wordTranslations="transItem"
        v-model:translations="translations"
        v-model:wordInEnglish="translations[index].wordInEnglish"
        v-model:partOfSpeech="translations[index].partOfSpeech"
      />
    </div>
  </div>
</template>

<style module>
.translationContainer {
  min-height: 78px;
}
</style>
