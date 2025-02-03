<script setup>
import { defineProps } from 'vue';

const { wordTranslations } = defineProps(['wordTranslations']);
</script>

<!-- <th class="text-left">Frequency</th>
<th class="text-left">Other Words</th> -->
<template>
  <div>
    <p>{{ wordTranslations.originalWord }}</p>
  </div>
  <div v-for="(wordInfo, index) in wordTranslations.translations" :key="index">
    <div>PartOfSpeech: {{ wordInfo.partOfSpeech }}</div>
    <v-table
      density="compact"
      v-for="(word, index) in wordInfo.words"
      :key="index"
    >
      <thead>
        <tr>
          <th>Usage Frequency</th>
          <th>English Word</th>
          <th>Similar Spanish Words</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td :key="1">
            {{ word.frequency }}
          </td>
          <td :key="2">
            {{ word.englishWord }}
          </td>
          <td :key="3">
            {{ word.spanishWords }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
