<script setup>
import { gsap } from 'gsap';
import { watch, ref, onMounted } from 'vue';
import { CENTER_X, CENTER_Y, HEIGHT_REM, HEIGHT, WIDTH_REM } from './etc';
import * as css from '../home.module.scss';
import {
  incrementHiglightTextInside,
  onCompleteStartPointHand,
  onCompleteStartTextInside,
  textBlock,
  textInside,
} from './refs';
import TextInside from './TextInside.vue';
import Svg from '../Svg.vue';

const divElement = ref();

let animationDynamicParams = {
  left: HEIGHT_REM,
  top: HEIGHT_REM,
};

const paramsTo = {
  top: '-=12rem',
};

const onDrawUpdate = (target) => {
  target.style.top = `${animationDynamicParams.top}rem`;
};

const startAnimation = (target) => {
  const onComplete = () => {
    onCompleteStartPointHand();
    onCompleteStartTextInside();
  };

  if (textBlock.value == 1) {
    gsap.set(target, { left: `${HEIGHT / 2}rem`, opacity: 1 });
    gsap.to(target, {
      duration: 1,
      top: paramsTo.top,
      onUpdate: () => onDrawUpdate(target),
      ease: 'powerIn',
    });
    return;
  }

  gsap.to(target, {
    duration: 0.4,
    keyframes: { opacity: [1, 0.7, 0.5, 0.3, 0.1, 0.3, 0.5, 0.7, 1] },
    onComplete: () => onComplete(),
  });
};

watch(textBlock, () => {
  startAnimation(divElement.value);
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
  <div :ref="(el) => (divElement = el)" :class="$style.frameBorder">
    <Svg :class="$style.topSvgVentsAboveScreen" :viewBox="`0 0 60 5`">
      <circle cx="3" cy="3" r="2" fill="darkgrey"></circle>
      <line
        x1="11"
        y1="3"
        x2="50"
        y2="3"
        stroke="darkgrey"
        stroke-width="3px"
        stroke-linecap="round"
        fill="darkgrey"
      ></line>
    </Svg>
    <div :class="$style.screenInsideBorder"></div>
    <div :class="[$style.screenInsideBorder, $style.whiteBackground]">
      <TextInside />
    </div>
  </div>
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
  background-color: #f1e7e7;
}
.whiteBackground {
  background-color: #fff;
}
.screenInsideBorder {
  border: darkgray solid 1px;
  border-radius: 2px;
  position: absolute;
  width: 14.4rem;
  height: 40rem;
  top: 1rem;
  left: 0.2rem;
  background-color: #ffffffc4;
}
.topSvgVentsAboveScreen {
  position: absolute;
  height: 6px;
  width: 60px;
  top: 4.1px;
  left: 5.8rem;
}
</style>
