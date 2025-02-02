<script setup>
import * as appCss from '../../app.module.scss';
import { defineProps } from 'vue';
import Translations from './Translations.vue';
import AdminEditField from '../AdminEditField.vue';
const {
  text: textLine,
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
</script>

<template>
  <v-expansion-panel :key="index">
    <template v-slot:title>
      <div :class="[$style.titleHeader, appCss.nunitoFont]">
        <p>{{ to1Based(index) + '.   ' + textLine }}</p>
      </div>
    </template>
    <template v-slot:text>
      <div style="width: 200px">
        <p style="display: inline; margin: 0 10px">Start:</p>
        <p style="display: inline; margin: 0 10px">End:</p>
      </div>
      <div style="width: 200px">
        <AdminEditField :editStart="start" :editEnd="end" :fieldId="index" />
      </div>
      <div>
        <Translations :translation="trOrig.translation" />
      </div>
    </template>
  </v-expansion-panel>
</template>

<style module>
.titleHeader {
  font-size: 1.5rem;
}
</style>
