<script setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { watch, ref } from 'vue';
import * as css from '../home.module.scss';
import { textInside } from './refs';

gsap.registerPlugin(TextPlugin);

const pElement = ref();

const startAnimation = (target) => {
  gsap.to(target, {
    duration: 1.3,
    text: {
      value: 'This is the new text this is the new text',
      delimiter: ' ',
      speed: 1,
    },
    ease: 'none',
  });
};

watch(textInside, () => {
  if (textInside.value != 1) return;
  startAnimation(pElement.value);
});
</script>

<template>
  <div>
    <p :ref="(el) => (pElement = el)"></p>
  </div>
</template>

<style module></style>
