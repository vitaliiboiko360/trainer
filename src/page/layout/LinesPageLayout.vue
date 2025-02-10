<script setup>
import LineSentence from '../line/LineSentence.vue';
import SliderPages from './SliderPages.vue';
import { defineProps } from 'vue';
const { totalNumberOfPages, displayedLines } = defineProps([
  'totalNumberOfPages',
  'displayedLines',
]);
</script>

<template>
  <SliderPages :lastIndex="totalNumberOfPages" />
  <LineSentence
    v-for="({ textLineInfo: textLine, lineNumber }, index) in displayedLines"
    :textLine
    :lineNumber
    :key="lineNumber"
    :isLast="index == displayedLines.length - 1"
  />
</template>
