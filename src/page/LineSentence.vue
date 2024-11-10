<script setup lang="ts">
import { activePlayTime } from './activePlayTime';
import * as css from './page.module.scss';
const { textLine: textLineInfo } = defineProps(['textLine']);
const {
  text: textLine,
  endParagraph = false,
  start: startTime,
  end: endTime,
} = textLineInfo;

const onClick = (event) => {
  activePlayTime.updateTime(startTime, endTime);
};
</script>

<template>
  <span @click="onClick" :class="endParagraph ? css.lineUnderlined : ''">
    {{ textLine }} </span
  >&nbsp;
  <br v-if="endParagraph" />
</template>
