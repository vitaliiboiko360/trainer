<script setup>
import { ref, defineProps } from 'vue';
import * as css from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';

const { lastIndex } = defineProps(['lastIndex']);

const onClickPrev = () => {
  currentPageBlock.value = Math.max(currentPageBlock.value - 1, 0);
};

const onClickNext = () => {
  currentPageBlock.value = Math.min(currentPageBlock.value + 1, lastIndex);
};
</script>

<template>
  <div :class="css.divTopBarOuter">
    <div :class="css.divTopBarButtonColumn1">
      <button @click="onClickPrev">previous</button>
    </div>
    <div :class="css.divTopBarButtonColumn3">
      <span :innerText="`current page is ${currentPageBlock ?? ''}`"></span>
    </div>
    <div :class="css.divTopBarButtonColumn5">
      <button @click="onClickNext">next</button>
    </div>
  </div>
</template>
