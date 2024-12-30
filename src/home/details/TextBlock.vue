<script setup>
import { gsap } from 'gsap';
import { watch, ref } from 'vue';
import { CENTER_X, CENTER_Y } from './etc';
import * as css from '../home.module.scss';
import { onCompleteStartTextInside, textBlock } from './refs';
import TextInside from './TextInside.vue';

const divElement = ref();

let animationDynamicParams = {
  height: 0,
  width: 0,
  left: CENTER_X,
  top: CENTER_Y,
};

let paramsTo = {
  height: 5,
  width: 20,
  left: '-=10',
  top: '-=5',
};

const onDrawUpdate = (target) => {
  target.style.height = `${animationDynamicParams.height}rem`;
  target.style.width = `${animationDynamicParams.width}rem`;
  target.style.left = `${animationDynamicParams.left}rem`;
  target.style.right = `${animationDynamicParams.right}rem`;
};

const startAnimation = (target) => {
  gsap.to(animationDynamicParams, {
    duration: 1,
    height: paramsTo.height,
    width: paramsTo.width,
    left: paramsTo.left,
    top: paramsTo.top,
    onUpdate: () => onDrawUpdate(target),
    onComplete: onCompleteStartTextInside,
  });
};

watch(textBlock, () => {
  if (textBlock.value != 1) return;
  startAnimation(divElement.value);
});
</script>

<template>
  <div
    :ref="(el) => (divElement = el)"
    :class="[css.textBlockOuterDiv, $style.localTextBlock]"
  >
    <TextInside />
  </div>
</template>

<style module>
.localTextBlock {
  left: calc(v-bind('CENTER_X') * 1rem);
  top: calc(v-bind('CENTER_Y') * 1rem);
}
</style>
