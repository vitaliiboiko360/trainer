<script setup>
import * as appCss from '../../app.module.scss';
import { defineProps, computed } from 'vue';
import Translations from './Translations.vue';
import ReadyIcon from './ReadyIcon.vue';
import AudioControls from './AudioControls.vue';
const {
  text: textLine,
  index,
  translationAndOriginalLIne: trOrig,
} = defineProps(['text', 'index', 'translationAndOriginalLIne']);

const end = defineModel('end');
const start = defineModel('start');
const translations = defineModel('translations');

const to1Based = (index) => index + 1;

const isAudioReady = computed(() => {
  if (index == 0) {
    return end.value != 0;
  }
  return start.value != 0 && end.value != 0;
});
</script>

<template>
  <v-expansion-panel :key="index">
    <template v-slot:title>
      <ReadyIcon :isAudioReady />
      <div :class="[$style.titleLine, appCss.nunitoFont]">
        <p :class="[$style.titleHeaderNumber]">
          {{ to1Based(index) + '. ' }}
        </p>
        <span :class="$style.titleHeader">{{ textLine }}</span>
      </div>
    </template>
    <template v-slot:text>
      <AudioControls
        v-model:editStart="start"
        v-model:editEnd="end"
        :fieldId="index"
      />
      <div>
        <Translations
          v-if="trOrig"
          :translation="trOrig ? trOrig.translation : undefined"
          v-model:translations="translations"
        />
      </div>
    </template>
  </v-expansion-panel>
</template>

<style module>
.titleLine {
  display: grid;
  grid-template-columns: 2.4rem 1fr;
}
.titleHeader {
  font-size: 1.6rem;
  line-height: 1.8rem;
}
.titleHeaderNumber {
  font-size: 1.2rem;
  align-content: center;
}
</style>
