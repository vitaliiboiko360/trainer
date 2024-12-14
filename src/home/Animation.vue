<script setup>
import ButtonPlayPause from './details/ButtonPlayPause.vue';
import SvgCanvas from './details/SvgCanvas.vue';
import * as css from './home.module.scss';
</script>

<template>
  <div :class="css.animationOuterDiv">
    <ButtonPlayPause />
    <SvgCanvas />
  </div>
</template>
