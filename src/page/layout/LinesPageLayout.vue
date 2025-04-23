<script setup>
import { defineProps } from 'vue';
import LineSentence from '../line/LineSentence.vue';
import LinePlayIndicator from '../line/LinePlayIndicator.vue';
import { useIndicatorIndexStore } from '../../store/indicatorIndex';

const lineIndicatorStore = useIndicatorIndexStore();
const { displayedLines } = defineProps(['displayedLines']);
import css from '../page.module.scss';
</script>

<template>
  <div
    v-for="({ textLineInfo: textLine, lineNumber }, index) in displayedLines"
    :class="[
      $style.linePageLayoutContainer,
      $style.spanLineByLine,
      { [$style.containerAsLine]: lineNumber != 1 },
      { [$style.topLine]: index == 0 },
      { [css.titleLine]: lineNumber == 1 },
    ]"
  >
    <LinePlayIndicator v-if="lineNumber == lineIndicatorStore.indicatorIndex" />
    <LineSentence :textLine :lineNumber :key="lineNumber" />
    <span v-if="lineNumber > 1">&nbsp;</span>
  </div>
</template>

<style module>
.linePageLayoutContainer {
  position: relative;
}
.lineCursorPointer {
  cursor: pointer;
}
.containerAsLine {
  display: inline;
}
.topLine {
  margin-top: 1rem;
}
</style>
