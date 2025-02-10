<script setup>
import { watch } from 'vue';
import { textView } from './state/textView';
import LinesBlockLayout from './layout/LinesBlockLayout.vue';

const { lines } = defineProps(['lines']);

watch(textView, () => {
  // console.log(`textView= ${textView.value}`);
});
</script>

<template>
  <LinesBlockLayout :lines />
</template>
