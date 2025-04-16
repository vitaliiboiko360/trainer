<script setup lang="ts">
import { ref } from 'vue';
import {
  SPEECHPART as SP,
  SPEECHPARTNAME as SPN,
  NAMESPEECHPART as NSP,
} from '../etc';
import { mdiPencilPlus, mdiCheckBold } from '@mdi/js';
const wordInEnglish = defineModel('wordInEnglish');
const partOfSpeech = defineModel('partOfSpeech');

const isEditActive = ref(false);
const onClick = () => (isEditActive.value = !isEditActive.value);
</script>

<template>
  <div :class="$style.outerDiv">
    <div :class="$style.choosenTranslationBlock">
      <div>
        <v-btn :ripple="false" rounded="xl" @click="onClick"
          ><v-icon :icon="isEditActive ? mdiCheckBold : mdiPencilPlus"></v-icon
        ></v-btn>
      </div>
      <div :class="$style.choosenTranslation">
        <div>
          <v-divider :thickness="2" class="border-opacity-50"></v-divider>
          <div :class="[{ [$style.notAssigned]: wordInEnglish == '' }]">
            {{ wordInEnglish == '' ? '  no value  ' : wordInEnglish }}
          </div>
          <v-divider :thickness="2" class="border-opacity-50"></v-divider>
        </div>
        <v-divider
          :thickness="2"
          class="border-opacity-50"
          vertical
        ></v-divider>
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
  </div>
</template>

<style module>
.outerDiv {
  align-self: center;
  display: inline-block;
  margin-left: auto;
  margin-right: 1rem;
}
.choosenTranslationBlock {
  align-self: center;
  display: flex;
}
.notAssigned {
  white-space: pre;
  font-style: italic;
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
