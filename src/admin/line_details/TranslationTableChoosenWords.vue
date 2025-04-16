<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
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

const refInput = ref();

watch(refInput, () => {
  if (refInput.value) {
    refInput.value.querySelector('input').focus();
  }
});
</script>
// ref="(el) => (refInputOuterDiv = el)"

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
          <div
            v-if="!isEditActive"
            :class="[{ [$style.notAssigned]: wordInEnglish == '' }]"
          >
            {{ wordInEnglish == '' ? '  no value  ' : wordInEnglish }}
          </div>
          <span
            v-if="isEditActive"
            :ref="(el) => (refInput = el)"
            role="textbox"
            contenteditable
            ><input :defaultValue="wordInEnglish" type="text" autofocus></input></span
          >
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
.editField {
  width: 100%;
  div div div {
    position: relative;
    display: inline-block;
    input {
      /* position: absolute; */
      padding: 0 1rem;
      width: 100%;
    }
  }
}
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
