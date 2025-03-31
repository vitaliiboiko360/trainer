<script setup>
import * as appCss from '../../app.module.scss';
import { defineProps, computed } from 'vue';
import Translations from './Translations.vue';
import ReadyIcon from './ReadyIcon.vue';
import AudioControls from './AudioControls.vue';
const {
  text: textLine,
  start,
  end,
  index,
  translationAndOriginalLIne: trOrig,
} = defineProps([
  'text',
  'start',
  'end',
  'index',
  'translationAndOriginalLIne',
]);

const to1Based = (index) => index + 1;

const isAudioReady = computed(() => {
  if (index == 0) {
    return end != 0;
  }
  return start != 0 && end != 0;
});
</script>

<template>
  <v-expansion-panel :key="index">
    <template v-slot:title>
      <ReadyIcon :isAudioReady />
      <div :class="[$style.titleHeader, appCss.nunitoFont]">
        <p>{{ to1Based(index) + '.   ' + textLine }}</p>
      </div>
    </template>
    <template v-slot:text>
      <div style="width: 200px">
        <p style="display: inline; margin: 0 10px">Start:</p>
        <p style="display: inline; margin: 0 10px">End:</p>
      </div>
      <AudioControls :editStart="start" :editEnd="end" :fieldId="index" />
      <div>
        <Translations
          v-if="trOrig"
          :translation="trOrig ? trOrig.translation : undefined"
        />
      </div>
    </template>
  </v-expansion-panel>
</template>

<style module>
.titleHeader {
  font-size: 1.5rem;
}
</style>
