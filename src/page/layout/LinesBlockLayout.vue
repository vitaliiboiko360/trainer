<script setup>
import LineSentence from '../line/LineSentence.vue';
import css from '../page.module.scss';
import { defineProps } from 'vue';
const { displayedLines } = defineProps(['displayedLines']);
</script>

<template>
  <div
    v-for="({ textLineInfo: textLine, lineNumber }, index) in displayedLines"
    :class="[
      $style.lineContainerFlex,
      $style.spanLineByLine,
      {
        [$style.lineBottomUnderline]:
          lineNumber != 1 && index != displayedLines.length - 1,
      },
      { [css.titleLine]: lineNumber == 1 },
    ]"
  >
    <LineSentence :textLine :lineNumber :key="lineNumber" />
  </div>
</template>

<style module>
.lineBottomUnderline {
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed gainsboro;
}
.lineContainerFlex {
  display: flex;
}
.spanLineByLine {
  display: block;
  width: fit-content;
}
</style>
