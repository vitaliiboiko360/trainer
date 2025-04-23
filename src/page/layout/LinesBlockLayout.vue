<script setup>
import LinePlayIndicator from '../line/LinePlayIndicator.vue';
import LineSentence from '../line/LineSentence.vue';
import css from '../page.module.scss';
import { defineProps } from 'vue';
import { useIndicatorIndexStore } from '../../store/indicatorIndex';
const indicatorIndexStore = useIndicatorIndexStore();
const { displayedLines } = defineProps(['displayedLines']);
</script>

<template>
  <div :class="$style.linesBlock">
    <div :class="$style.linesOuterContainer">
      <div
        v-for="(
          { textLineInfo: textLine, lineNumber }, index
        ) in displayedLines"
        :class="[
          $style.spanLineByLine,
          {
            [$style.lineBottomUnderline]:
              lineNumber != 1 && index != displayedLines.length - 1,
          },
          { [$style.topLine]: index == 0 },
          { [css.titleLine]: lineNumber == 1 },
        ]"
      >
        <LinePlayIndicator
          v-if="lineNumber == indicatorIndexStore.indicatorIndex"
        />
        <LineSentence :textLine :lineNumber :key="lineNumber" />
      </div>
    </div>
  </div>
</template>

<style module>
.lineBottomUnderline {
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed gainsboro;
}
/* .lineContainerFlex {
  display: flex;
} */
.spanLineByLine {
  width: fit-content;
  /* display: inline-block; */
  position: relative;
}
.topLine {
  margin-top: 3rem;
}
.linesOuterContainer {
  margin-left: 2rem;
  margin-right: 1rem;
}
.linesBlock {
  display: flex;
}
</style>
