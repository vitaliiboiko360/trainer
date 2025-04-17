<script setup lang="ts">
import { computed, defineProps, onMounted } from 'vue';
import { mdiOpenInNew, mdiCloseThick, mdiPencilPlus } from '@mdi/js';
import ChoosenWords from './TranslationTableChoosenWords.vue';
import {
  SPEECHPART as SP,
  SPEECHPARTNAME as SPN,
  NAMESPEECHPART as NSP,
} from '../etc';
const { wordTranslations } = defineProps(['wordTranslations']);
const translations = defineModel('translations');
const wordInEnglish = defineModel('wordInEnglish');
const partOfSpeech = defineModel('partOfSpeech');

function isSelected(partOfSpeechInput, wordInEnglishInput) {
  return (
    partOfSpeech.value == partOfSpeechInput &&
    wordInEnglish.value == wordInEnglishInput
  );
}

onMounted(() => {});
</script>

<!-- <th class="text-left">Frequency</th>
<th class="text-left">Other Words</th> -->
<template>
  <div :class="$style.wordAndChoosenTranslation">
    <div :class="$style.originalWord">{{ wordTranslations.originalWord }}</div>
    <div :class="$style.buttonDictionaryLink">
      <v-btn
        style="bottom: -38px; left: -10px"
        target="_blank"
        size="24"
        :href="`https://translate.google.com/details?sl=es&tl=en&text=${wordTranslations.originalWord}&op=translate`"
        ><v-icon size="22" color="#1a73e8" :icon="mdiOpenInNew"></v-icon
      ></v-btn>
    </div>
    <ChoosenWords
      v-model:wordInEnglish="wordInEnglish"
      v-model:partOfSpeech="partOfSpeech"
    />
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
      <v-radio-group
        :class="$style.buttonsGroup"
        v-model="wordInEnglish"
        direction="vertical"
        @update:modelValue="
          () => (partOfSpeech = SPN[wordInfo.partOfSpeech.toUpperCase()])
        "
        @click:prepend="
          () => {
            if (
              wordInfo.words.map((w) => w.englishWord).indexOf(wordInEnglish) ==
              -1
            )
              return;
            partOfSpeech = SP.NOT_ASSIGNED;
            wordInEnglish = '';
          }
        "
        :prepend-icon="mdiCloseThick"
      >
        <v-radio
          v-for="(word, index) in wordInfo.words"
          :class="$style.buttonIndividual"
          :value="word.englishWord"
          density="compact"
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
            <td
              :key="1"
              :class="[
                {
                  [$style.selectedEnglishWord]: isSelected(
                    wordInfo.partOfSpeech,
                    word.englishWord
                  ),
                },
              ]"
            >
              {{ word.englishWord }}
            </td>
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
.wordAndChoosenTranslation {
  display: flex;
}
.buttonDictionaryLink {
  display: inline-block;
}
.selectedEnglishWord {
  background-color: #dfe0fecb;
}
.buttonIndividual {
  top: 4px;
  height: 36px;
}
.buttonsGroup {
  grid-column-start: 1;
  grid-column-end: 1;
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;

  > div:nth-child(1) i svg {
    fill: #8d6e63;
  }

  div:nth-child(3) {
    margin-left: 0;
    align-self: center;
  }
  div:nth-child(1) {
    align-self: center;
  }
  div div div {
    margin-bottom: 0.22rem;
  }
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
  /* box-shadow: none; */
  box-sizing: border-box;
  box-shadow: inset 0 0 30px 10px #4f88f245;
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
  background-color: rgba(91, 147, 215, 0.076);
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
