<script setup>
import * as css from '../home.module.scss';
import { textBlock } from './refs';

const onClick = () => {
  textBlock.value++;
  console.log(`textBlock.value= ${textBlock.value}`);
};
</script>

<template>
  <div :class="[css.buttonHolderDiv]">
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
