<script setup>
import * as css from './page.module.scss';
const { textLine: textLineInfo } = defineProps(['textLine']);
const { text: textLine, endParagraph = false } = textLineInfo;
</script>

<template>
  <span :class="endParagraph ? css.lineUnderlined : ''"> {{ textLine }} </span
  >&nbsp;
  <br v-if="endParagraph" />
</template>
