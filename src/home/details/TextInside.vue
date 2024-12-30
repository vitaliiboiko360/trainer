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
    duration: 2,
    text: 'This is the new text',
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
