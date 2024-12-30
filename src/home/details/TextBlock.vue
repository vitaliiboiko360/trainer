<script setup>
import { gsap } from 'gsap';
import { watch, ref, useTemplateRef } from 'vue';
import { CENTER_X, CENTER_Y } from './etc';
import * as css from '../home.module.scss';
import { textBlock } from './refs';

const divElement = ref();

let paramsInit = {
  height: 0,
  width: 0,
  left: CENTER_X,
  top: CENTER_Y,
};

let paramsTo = {
  height: 5,
  width: 20,
  left: -10,
  top: -5,
};

let isPrinted;
const onDrawUpdate = (target) => {
  if (!isPrinted) {
    isPrinted = true;
    console.log(`target=${target}`);
  }
  // if (!target) {
  //   console.log('onDrawUpdate target = null');
  //   return;
  // }
  target.height &&= `${paramsInit.height}rem`;
  target.width &&= `${paramsInit.width}rem`;
};

const startAnimation = (target) => {
  gsap.to(paramsInit, {
    duration: 1.5,
    height: paramsTo.height,
    width: paramsTo.width,
    // left: paramsTo.left,
    // top: paramsTo.top,
    onUpdate: () => onDrawUpdate(target),
  });
};

watch(textBlock, () => {
  console.log(`==${textBlock.value}`);
  if (textBlock.value != 1) return;
  startAnimation(divElement);
  console.log(`divElement.value=${divElement?.value}`);
});
</script>

<template>
  <div
    :ref="divElement"
    :class="[css.textBlockOuterDiv, $style.localTextBlock]"
  ></div>
</template>

<style module>
.localTextBlock {
  left: calc(v-bind('CENTER_X') * 1rem);
  top: calc(v-bind('CENTER_Y') * 1rem);
}
</style>
