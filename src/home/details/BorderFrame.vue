<script setup>
import { gsap } from 'gsap';
import { watch, ref, onMounted } from 'vue';
import { CENTER_X, CENTER_Y, HEIGHT_REM, HEIGHT, WIDTH_REM } from './etc';
import * as css from '../home.module.scss';
import { onCompleteStartTextInside, textBlock } from './refs';
import TextInside from './TextInside.vue';

const divElement = ref();

let animationDynamicParams = {
  left: HEIGHT_REM,
  top: HEIGHT_REM,
};

const paramsTo = {
  top: '-=10rem',
};

const onDrawUpdate = (target) => {
  target.style.top = `${animationDynamicParams.top}rem`;
};

const startAnimation = (target) => {
  gsap.set(target, { left: `${HEIGHT / 2}rem`, opacity: 1 });
  gsap.to(target, {
    duration: 1,
    top: paramsTo.top,
    onUpdate: () => onDrawUpdate(target),
    onComplete: onCompleteStartTextInside,
    ease: 'powerIn',
  });
};

watch(textBlock, () => {
  if (textBlock.value == 1) {
    startAnimation(divElement.value);
  }
});

onMounted(() => {
  gsap.set(divElement.value, {
    top: `${HEIGHT}rem`,
    left: `${HEIGHT / 2}rem`,
    opacity: 1,
  });
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
  top: '`${v-bind(HEIGHT)}rem`';
  width: 15rem;
  height: 45rem;
  opacity: 0;
}
</style>
