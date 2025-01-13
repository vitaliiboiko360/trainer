<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
import LineSentence from './LineSentence.vue';
import { textView } from './state/textView';
import SliderPages from './linesblocklayout/SliderPages.vue';
import { currentPageBlock } from './state/currentPageBlock';
import type { Ref } from 'vue';
import cloneDeep from 'lodash.clonedeep';

const to1BasedIndex = (index) => index + 1;

const { lines } = defineProps(['lines']);
type TextLineInfo = {
  text: string;
  start: number;
  end: number;
  endParagraph: boolean | undefined;
};
type LineAndIndex = { textLineInfo: TextLineInfo; index: number };
let currentBlock: Array<LineAndIndex> = [];
let pageBlocks: Array<Array<LineAndIndex>> = [];

lines.forEach((lineElement, index) => {
  currentBlock.push({
    textLineInfo: lineElement,
    index: to1BasedIndex(index) /* LineSentence expects 1-based indexing */,
  });
  if (lineElement.endParagraph) {
    pageBlocks.push(cloneDeep(currentBlock));
    currentBlock = [];
  }
});
pageBlocks.push(cloneDeep(currentBlock));

const totalNumberOfPages = pageBlocks.length - 1;

const displayedLines: Ref<Array<LineAndIndex>> = ref(
  pageBlocks[currentPageBlock.value]
);

watch(currentPageBlock, (updatedCurrentPageBlock) => {
  displayedLines.value = pageBlocks[updatedCurrentPageBlock];
});
</script>

<template>
  <SliderPages :lastIndex="totalNumberOfPages" />
  <LineSentence
    v-for="{ textLineInfo: textLine, index } in displayedLines"
    :textLine
    :index
    :key="index"
  />
</template>
