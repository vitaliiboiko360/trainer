<script setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { watch, ref } from 'vue';
import * as css from '../home.module.scss';
import { textInside } from './refs';
import { TXT_LINES, shuffle } from './etc';

gsap.registerPlugin(TextPlugin);

const refDiv = ref();

const startAnimation = (target) => {
  // gsap.to(target, {
  //   duration: 1.3,
  //   text: {
  //     value: 'This is the new text this is the new text',
  //     delimiter: ' ',
  //     speed: 1,
  //   },
  //   ease: 'none',
  // });
};

shuffle(TXT_LINES);
const txtLines = ref(TXT_LINES);

watch(textInside, () => {
  if (textInside.value < 1) return;
  console.log(`SHUFFLE textInside=${textInside.value}`);
  let children = [...refDiv.value.children];
  shuffle(children);
  refDiv.value.replaceChildren(...children);
  startAnimation(refDiv.value);
});
</script>

<template>
  <div :ref="(el) => (refDiv = el)">
    <p v-for="(line, index) in TXT_LINES" :key="index">{{ line }}</p>
  </div>
</template>

<style module></style>
