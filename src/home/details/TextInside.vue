<script setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { watch, ref } from 'vue';
import * as css from '../home.module.scss';
import {
  hihglightTextInside,
  incrementHiglightTextInside,
  textInside,
} from './refs';
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
  let children = [...refDiv.value.children];
  shuffle(children);
  refDiv.value.replaceChildren(...children);
  startAnimation(refDiv.value);
  incrementHiglightTextInside();
});

watch(hihglightTextInside, () => {
  if (hihglightTextInside.value < 1) return;

  const firstLine = refDiv.value.children.item(0);
  const words = firstLine.textContent.split(' ');
  const spans = words.map((word, index) => {
    let element = document.createElement('span');
    element.textContent = word + (index == words.length - 1 ? '' : ' ');
    return element;
  });
  firstLine.replaceChildren(...spans);
});
</script>

<template>
  <div :ref="(el) => (refDiv = el)">
    <p
      v-for="(line, index) in TXT_LINES"
      :key="index"
      :class="[$style.spanInParagraph]"
    >
      {{ line }}
    </p>
  </div>
</template>

<style module>
.spanInParagraph {
  span {
    color: grey;
  }
}
</style>
