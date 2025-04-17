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
const partOfSpeechName = defineModel('partOfSpeechName', {
  default: NSP[0],
});

const isEditActive = ref(false);
const onClick = () => {
  isEditActive.value = !isEditActive.value;
  if (isEditActive.value == true) {
    partOfSpeechName.value = NSP[partOfSpeech.value as number];
  } else {
    partOfSpeech.value = SPN[partOfSpeechName.value];
  }
};

const refInput = ref();

watch(refInput, () => {
  if (refInput.value) {
    const input = refInput.value.querySelector('input');
    input.focus();
    input.addEventListener('focusout', () => {
      wordInEnglish.value = input.value;
    });
    input.addEventListener('input', () => {
      wordInEnglish.value = input.value;
    });
  }
});
</script>

<template>
  <div :class="$style.outerDiv">
    <div :class="$style.choosenTranslationBlock">
      <div>
        <v-btn :ripple="false" rounded="xl" @click="onClick"
          ><v-icon
            :icon="isEditActive ? mdiCheckBold : mdiPencilPlus"
            :color="isEditActive ? 'warning' : 'info'"
          ></v-icon
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
            ><input :defaultValue="wordInEnglish" type="text" autofocus
          /></span>
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
            v-if="!isEditActive"
            :class="[{ [$style.notAssigned]: partOfSpeech == SP.NOT_ASSIGNED }]"
          >
            {{
              partOfSpeech == SP.NOT_ASSIGNED
                ? '  no value  '
                : SPN[partOfSpeech as number]
            }}
          </div>
          <v-select
            v-if="isEditActive"
            v-model="partOfSpeechName"
            menu
            :class="$style.selectPartOfSpeech"
            :items="NSP"
            @update:modelValue="
              () => {
                console.log(partOfSpeech);
                console.log(partOfSpeechName);
                partOfSpeech = SPN[partOfSpeechName];
              }
            "
            density="compact"
          ></v-select>
          <v-divider
            v-if="!isEditActive"
            :thickness="2"
            class="border-opacity-50"
          ></v-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.selectPartOfSpeech {
  div:nth-child(2) {
    display: none;
  }
}
.editField {
  width: 100%;
  position: relative;
  display: inline-block;
  input {
    position: absolute;
    padding: 0 1rem;
    width: 100%;
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
  background-color: rgba(224, 181, 181, 0.225);
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
