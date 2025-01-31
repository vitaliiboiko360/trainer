<script setup>
import { defineProps } from 'vue';
const { text: textLine, index } = defineProps([
  'text',
  'start',
  'end',
  'index',
]);

const to1Based = (index) => index + 1;
</script>

text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat."
<template>
  <v-expansion-panel :key="index">
    <template v-slot:title>
      <div>
        <p>{{ to1Based(index) + '.   ' + textLine }}</p>
      </div>
    </template>
  </v-expansion-panel>
</template>
