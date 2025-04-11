<script setup>
import { defineProps } from 'vue';
import { mdiOpenInNew } from '@mdi/js';
const { wordTranslations } = defineProps(['wordTranslations']);
</script>

<!-- <th class="text-left">Frequency</th>
<th class="text-left">Other Words</th> -->
<template>
  <div>
    <div :class="$style.originalWord">{{ wordTranslations.originalWord }}</div>
    <v-btn
      style="bottom: -38px; left: -10px"
      target="_blank"
      size="24"
      :href="`https://translate.google.com/details?sl=es&tl=en&text=${wordTranslations.originalWord}&op=translate`"
      ><v-icon size="22" color="#1a73e8" :icon="mdiOpenInNew"></v-icon
    ></v-btn>
  </div>
  <div
    :class="$style.table"
    v-for="(wordInfo, index) in wordTranslations.translations"
    :key="index"
  >
    <div :class="$style.partOfSpeech">
      <span>PartOfSpeech:</span>
      {{ wordInfo.partOfSpeech }}
    </div>
    <div :class="$style.tabelWithButtons">
      <v-radio-group :class="$style.buttonsGroup">
        <v-radio
          v-for="(word, index) in wordInfo.words"
          :value="word.englishWord"
          density="compact"
          style="top: 0.5rem"
        ></v-radio>
      </v-radio-group>
      <v-table density="compact" style="overflow: visible">
        <thead>
          <tr>
            <th>English Word</th>
            <th>Usage Frequency</th>
            <th>Similar Spanish Words</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(word, index) in wordInfo.words" :key="index">
            <td :key="1">{{ word.englishWord }}</td>
            <td :key="2">
              {{ word.frequency }}
            </td>
            <td :key="3">
              {{ word.spanishWords }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<style module>
.buttonsGroup {
  grid-column-start: 0;
  grid-column-end: 0;
}
.tabelWithButtons {
  display: grid;
  grid-template-columns: 30px 1fr;
}
.table {
  margin-bottom: 15px;
}
.originalWord {
  margin: 10px 20px;
  align-items: center;
  appearance: none;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 0.375em;
  box-shadow: none;
  box-sizing: border-box;
  color: #363636;
  display: inline-flex;
  height: 2.5em;
  justify-content: center;
  line-height: 1.5;
  padding: calc(0.3em - 1px) 0.7em;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}
.partOfSpeech {
  span {
    font-size: 1rem;
    color: #1d1e2e;
  }
  margin: 0px 20px 25px;
  background-color: rgb(91 147 215 / 16%);
  border-radius: 8px;
  border-width: 0;
  color: #5965ff;
  display: inline-block;
  font-size: 1.3rem;
  line-height: 20px;
  list-style: none;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>
