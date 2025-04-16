<script setup lang="ts">
import {
  SPEECHPART as SP,
  SPEECHPARTNAME as SPN,
  NAMESPEECHPART as NSP,
} from '../etc';
const wordInEnglish = defineModel('wordInEnglish');
const partOfSpeech = defineModel('partOfSpeech');
</script>

<template>
  <div :class="$style.choosenTranslationBlock">
    <div :class="$style.choosenTranslation">
      <div>
        <v-divider :thickness="2" class="border-opacity-50"></v-divider>
        <div :class="[{ [$style.notAssigned]: wordInEnglish == '' }]">
          {{ wordInEnglish == '' ? '  no value  ' : wordInEnglish }}
        </div>
        <v-divider :thickness="2" class="border-opacity-50"></v-divider>
      </div>
      <v-divider :thickness="2" class="border-opacity-50" vertical></v-divider>
      <div>
        <v-divider :thickness="2" class="border-opacity-50"></v-divider>
        <div
          :class="[{ [$style.notAssigned]: partOfSpeech == SP.NOT_ASSIGNED }]"
        >
          {{
            partOfSpeech == SP.NOT_ASSIGNED
              ? '  no value  '
              : SPN[partOfSpeech as number]
          }}
        </div>
        <v-divider :thickness="2" class="border-opacity-50"></v-divider>
      </div>
    </div>
  </div>
</template>

<style module>
.notAssigned {
  white-space: pre;
  font-style: italic;
}
.choosenTranslationBlock {
  align-self: center;
}
.choosenTranslation {
  display: flex;
  height: fit-content;
  align-items: center;
  align-self: center;
  font-size: 1rem;
  gap: 1rem;
  margin-left: 3rem;
}
</style>
