<script setup>
const emit = defineEmits(['clickTextSentenceEvent']);
import * as css from './page.module.scss';
const { textLine: textLineInfo } = defineProps(['textLine']);
const {
  text: textLine,
  endParagraph = false,
  start: startTime,
  end: endTime,
} = textLineInfo;
const onClick = (event) => {
  console.log(`you've clicked on`, event.currentTarget);
  emit('clickTextSentenceEvent', { startTime: startTime, endTime: endTime });
};
</script>

<template>
  <span @click="onClick" :class="endParagraph ? css.lineUnderlined : ''">
    {{ textLine }} </span
  >&nbsp;
  <br v-if="endParagraph" />
</template>
