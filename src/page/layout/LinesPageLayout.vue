<script setup>
import LineSentence from '../line/LineSentence.vue';
import { defineProps } from 'vue';
const { displayedLines } = defineProps(['displayedLines']);
import css from '../page.module.scss';
</script>

<template>
  <div
    v-for="({ textLineInfo: textLine, lineNumber }, index) in displayedLines"
    :class="[
      $style.lineContainerFlex,
      $style.spanLineByLine,
      { [$style.containerAsLine]: lineNumber > 1 },
      { [css.titleLine]: lineNumber == 1 },
    ]"
  >
    <LineSentence
      :textLine
      :lineNumber
      :key="lineNumber"
      :isLast="index == displayedLines.length - 1"
    >
      <span v-if="lineNumber > 1">&nbsp;</span></LineSentence
    >
  </div>
</template>

<style module>
.lineCursorPointer {
  cursor: pointer;
}
.containerAsLine {
  display: inline;
}
</style>
