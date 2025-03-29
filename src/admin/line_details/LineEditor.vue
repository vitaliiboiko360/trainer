<script setup>
import * as appCss from '../../app.module.scss';
import { defineProps } from 'vue';
import Translations from './Translations.vue';
import AdminEditField from '../AdminEditField.vue';
import { mdiPlayCircleOutline } from '@mdi/js';
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
      <div :class="$style.timePlayPanel">
        <AdminEditField :editStart="start" :editEnd="end" :fieldId="index" />
        <v-btn size="46"
          ><v-icon size="42" :icon="mdiPlayCircleOutline"></v-icon
        ></v-btn>
      </div>
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
.timePlayPanel {
  width: 200px;
  display: flex;
}
</style>
