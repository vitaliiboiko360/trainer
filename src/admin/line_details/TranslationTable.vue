<script setup>
import { defineProps } from 'vue';

const { wordTranslations } = defineProps(['wordTranslations']);
console.log(wordTranslations);
</script>

<!-- <th class="text-left">Frequency</th>
<th class="text-left">Other Words</th> -->
<template>
  <div>
    <p>{{ wordTranslations.originalWord }}</p>
  </div>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">PartOfSpeech</th>
        <th class="text-left">English Word | Frequency | Other Words</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(wordInfo, index) in wordTranslations" :key="index">
        <td>{{ wordInfo.partOfSpeech }}</td>
        <td v-for="(word, index) in wordInfo.words" :key="index">
          <tbody>
            <tr>
              <td :key="1">{{ word.englishWord }}</td>
              <td :key="2">{{ word.frequency }}</td>
              <td :key="3">{{ word.spanishWords }}</td>
            </tr>
          </tbody>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
