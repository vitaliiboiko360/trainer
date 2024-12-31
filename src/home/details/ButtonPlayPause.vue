<script setup>
import * as css from '../home.module.scss';
import { textBlock } from './refs';

const onClick = () => {
  textBlock.value = textBlock.value == 1 ? 0 : 1;
  console.log(`textBlock.value= ${textBlock.value}`);
};
</script>

<template>
  <div :class="[css.buttonHolderDiv, $style.buttonPlayPause]">
    <button :class="css.buttonPlayPause" @click="onClick"></button>
  </div>
</template>

<style module>
.buttonPlayPause {
  z-index: 1;
}
</style>
