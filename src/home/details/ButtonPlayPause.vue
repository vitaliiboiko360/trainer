<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import * as css from '../home.module.scss';
import { textBlock } from './refs';
import { WIDTH } from './etc';

const refDivOuter = ref();

const onClick = () => {
  textBlock.value++;
  console.log(`textBlock.value= ${textBlock.value}`);
};
const resize = 'resize';
const onResize = () => {
  const width = Math.ceil(
    parseFloat(window.getComputedStyle(document.documentElement).fontSize) *
      WIDTH
  );
  if (window.innerWidth < width) {
    const { left } = refDivOuter.value?.getBoundingClientRect();
    refDivOuter.value.style.left = `${Math.ceil(
      (width - window.innerWidth) / 2
    )}px`;
  }
};
onMounted(() => {
  window.addEventListener(resize, onResize);
});
onUnmounted(() => {
  window.removeEventListener(resize, onResize);
});
</script>

<template>
  <div :ref="(el) => (refDivOuter = el)" :class="[css.buttonHolderDiv]">
    <button
      :class="[css.buttonPlayPause, $style.buttonPlayPause]"
      @click="onClick"
    ></button>
  </div>
</template>

<style module>
.buttonPlayPause {
  z-index: 1;
}
</style>
