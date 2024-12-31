<script setup>
import { gsap } from 'gsap';
import { watch, ref } from 'vue';
import { CENTER_X, CENTER_Y, HEIGHT_REM, WIDTH_REM } from './etc';
import * as css from '../home.module.scss';
import { onCompleteStartTextInside, textBlock } from './refs';
import TextInside from './TextInside.vue';

const divElement = ref();

let animationDynamicParams = {
  left: HEIGHT_REM,
  top: HEIGHT_REM,
};

let paramsTo = {
  top: '-=15',
};

const onDrawUpdate = (target) => {
  target.style.top = `${animationDynamicParams.top}rem`;
};

const startAnimation = (target) => {
  gsap.set(target, { top: HEIGHT_REM, left: HEIGHT_REM, opacity: 1 });
  gsap.to(animationDynamicParams, {
    duration: 1,
    top: paramsTo.top,
    onUpdate: () => onDrawUpdate(target),
    onComplete: onCompleteStartTextInside,
  });
};

watch(textBlock, () => {
  if (textBlock.value == 1 && divElement.value) {
    startAnimation(divElement.value);
  } else {
    console.log(`divElement.value = ${divElement.value}`);
  }
});
</script>

<template>
  <div :ref="(el) => (divElement = el)" :class="$style.frameBorder"></div>
</template>

<style module>
.frameBorder {
  position: absolute;
  border-radius: 1rem;
  border: grey solid 2px;
  width: 15rem;
  height: 45rem;
  opacity: 0;
}
</style>
