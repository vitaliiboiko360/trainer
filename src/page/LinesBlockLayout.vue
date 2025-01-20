<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
import LineSentence from './LineSentence.vue';
import SliderPages from './linesblocklayout/SliderPages.vue';
import { currentPageBlock } from './state/currentPageBlock';
import type { Ref } from 'vue';
import cloneDeep from 'lodash.clonedeep';

const CHARACTER_NUMBER_PER_BLOCK = 250;
const to1BasedIndex = (index) => index + 1;

const { lines } = defineProps(['lines']);

type TextLineInfo = {
  text: string;
  start: number;
  end: number;
  endParagraph: boolean | undefined;
};
type LineAndIndex = {
  textLineInfo: TextLineInfo;
  lineNumber: number;
};
let currentBlock: Array<LineAndIndex> = [];
let pageBlocks: Array<Array<LineAndIndex>> = [];

const putLinesInBlocks = (characterCountPerBlock) => {
  let characterCount = 0;
  currentBlock = [];
  return (lineElement, index) => {
    characterCount += lineElement.text.length;
    currentBlock.push({
      textLineInfo: lineElement,
      lineNumber:
        to1BasedIndex(index) /* LineSentence expects 1-based indexing */,
    });
    if (characterCount >= characterCountPerBlock) {
      // if we exceeded num per block threshold, we're flushing lines to block
      pageBlocks.push(cloneDeep(currentBlock));
      currentBlock = [];
      characterCount = 0;
    }
  };
};

const getAverageCharacterCount = (total, arrayOfLines, index) => {
  const characterCountInBlock = arrayOfLines.reduce(
    (total, line) => total + line.textLineInfo.text.length,
    0
  );
  return Math.ceil(total + characterCountInBlock / to1BasedIndex(index));
};

lines.forEach(putLinesInBlocks(CHARACTER_NUMBER_PER_BLOCK));

const getTotalCharacterCount = (total, line) => {
  return total + line.textLineInfo.text.length;
};

let totalCharacterCountInLastBlock = currentBlock.reduce(
  getTotalCharacterCount,
  0
);

if (totalCharacterCountInLastBlock > 0) {
  if (
    totalCharacterCountInLastBlock <
    0.5 * pageBlocks.reduce(getAverageCharacterCount, 0)
  ) {
    let stepToReduceCharacterLimitThreshold = 30;

    do {
      pageBlocks = [];

      lines.forEach(
        putLinesInBlocks(
          CHARACTER_NUMBER_PER_BLOCK - stepToReduceCharacterLimitThreshold
        )
      );

      totalCharacterCountInLastBlock = currentBlock.reduce(
        getTotalCharacterCount,
        0
      );

      stepToReduceCharacterLimitThreshold += 15;

      if (stepToReduceCharacterLimitThreshold > 50) {
        break;
      }
    } while (
      totalCharacterCountInLastBlock <
      0.5 * pageBlocks.reduce(getAverageCharacterCount, 0)
    );
  }

  if (currentBlock.reduce(getTotalCharacterCount, 0) > 0) {
    pageBlocks.push(cloneDeep(currentBlock));
  }
}

const totalNumberOfPages = pageBlocks.length - 1;

const displayedLines: Ref<Array<LineAndIndex>> = ref(
  pageBlocks[currentPageBlock.value]
);

watch(currentPageBlock, (newUserSelectedCurrentPageBlock) => {
  displayedLines.value = pageBlocks[newUserSelectedCurrentPageBlock];
});
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
