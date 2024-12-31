<script setup>
import ButtonPlayPause from './details/ButtonPlayPause.vue';
import TextBlock from './details/TextBlock.vue';
import SvgCanvas from './details/SvgCanvas.vue';
import * as css from './home.module.scss';
import BorderFrame from './details/BorderFrame.vue';
</script>

<template>
  <div :class="[css.animationOuterDiv, $style.animationOuterDiv]">
    <ButtonPlayPause />
    <TextBlock />
    <BorderFrame />
    <SvgCanvas />
  </div>
</template>

<style module>
.animationOuterDiv {
  overflow: hidden;
}
</style>
