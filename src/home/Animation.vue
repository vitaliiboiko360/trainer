<script setup>
import ButtonPlayPause from './details/ButtonPlayPause.vue';
import TextBlock from './details/TextBlock.vue';
import SvgCanvas from './details/SvgCanvas.vue';
import * as css from './home.module.scss';
import BorderFrame from './details/BorderFrame.vue';
import PointHand from './details/PointHand.vue';
import ListenginHead from './details/ListenginHead.vue';

import { updateRemInPxValue } from './details/refs';
import { onUnmounted } from 'vue';
updateRemInPxValue();

const onResize = () => {
  updateRemInPxValue();
};

const resize = 'resize';
window.addEventListener(resize, onResize);

onUnmounted(() => {
  window.removeEventListener(resize, onResize);
});
</script>

<template>
  <div :class="[css.animationOuterDiv, $style.animationOuterDiv]">
    <SvgCanvas />
    <ButtonPlayPause />
    <!-- <TextBlock /> -->
    <BorderFrame />
    <ListenginHead />
    <PointHand />
  </div>
</template>

<style module>
.animationOuterDiv {
  overflow: hidden;
}
</style>
