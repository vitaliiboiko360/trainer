<script setup>
import * as css from '../home.module.scss';
import { textBlock } from './refs';

const onClick = (event) => {
  if (event.detail == 2) {
    textBlock.value = 1;
  } else {
    textBlock.value = 0;
  }
};
</script>

<template>
  <div :class="css.buttonHolderDiv">
    <button :class="css.buttonPlayPause" @click="onClick"></button>
  </div>
</template>
