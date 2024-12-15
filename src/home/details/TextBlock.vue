<script setup>
import { CENTER_X, CENTER_Y } from './etc';
import * as css from '../home.module.scss';
</script>

<template>
  <div :class="[css.textBlockOuterDiv, $style.localTextBlock]"></div>
</template>

<style module>
.localTextBlock {
  left: calc(v-bind('CENTER_X') * 1rem);
  top: calc(v-bind('CENTER_Y') * 1rem);
}
</style>
