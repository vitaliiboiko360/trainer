<script setup>
import { textView, TEXTVIEW_BUTTONS } from './state/textView';
import LinesBlockLayout from './layout/LinesBlockLayout.vue';
import LinesPageLayout from './layout/LinesPageLayout.vue';

const { lines } = defineProps(['lines']);
</script>

<template>
  <LinesBlockLayout v-if="textView == TEXTVIEW_BUTTONS.LineMode" :lines />
  <LinesPageLayout v-if="textView == TEXTVIEW_BUTTONS.ParagraphMode" :lines />
</template>
