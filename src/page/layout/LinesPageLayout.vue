<script setup>
import { defineProps } from 'vue';
import LineSentence from '../line/LineSentence.vue';
import LinePlayIndicator from '../line/LinePlayIndicator.vue';
import { useIndicatorIndexStore } from '../../store/indicatorIndex';

const indicatorIndexStore = useIndicatorIndexStore();
const { displayedLines } = defineProps(['displayedLines']);
import css from '../page.module.scss';
</script>

<template>
  <div :class="$style.pageLayoutContainer">
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
      <LineSentence :textLine :lineNumber :key="lineNumber">
        <template v-slot:indicator>
          <LinePlayIndicator
            v-if="lineNumber == indicatorIndexStore.indicatorIndex"
          />
        </template>
      </LineSentence>
    </div>
  </div>
</template>

<style module>
.pageLayoutContainer {
  padding: 0 0.1rem 0 1.8rem;
}
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
