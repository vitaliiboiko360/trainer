<script setup>
import { ref, defineProps } from 'vue';
import css from './linesblocklayout.module.scss';
import cssPage from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';
import clsx from 'clsx';

const { lastIndex } = defineProps(['lastIndex']);

const onClickPrev = () => {
  currentPageBlock.value = Math.max(currentPageBlock.value - 1, 0);
};

const onClickNext = () => {
  currentPageBlock.value = Math.min(currentPageBlock.value + 1, lastIndex);
};
</script>

<template>
  <div
    :class="
      clsx(
        cssPage.divTopBarOuter,
        cssPage.marginTopBottom,
        cssPage.divPageSlider
      )
    "
  >
    <div :class="cssPage.divGridColumn2">
      <button
        @click="onClickPrev"
        :class="css.buttonPageSliderLeftPrevious"
      ></button>
    </div>
    <div
      :class="clsx(cssPage.divTopBarButtonColumn3, cssPage.whiteSpaceNoWrap)"
    >
      <span :innerText="`current page is ${currentPageBlock ?? ''}`"></span>
    </div>
    <div :class="cssPage.divGridColumn4">
      <button
        @click="onClickNext"
        :class="css.buttonPageSliderRightNext"
      ></button>
    </div>
  </div>
</template>
