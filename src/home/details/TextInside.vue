<script setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { watch, ref, onMounted } from 'vue';
import * as css from '../home.module.scss';
import {
  hihglightTextInside,
  incrementHiglightTextInside,
  textInside,
} from './refs';
import { TXT_LINES, shuffle } from './etc';
import { addPathLine } from './svg';

gsap.registerPlugin(TextPlugin);

const refDiv = ref();
const refSvg = ref();

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

onMounted(() => {
  const { left, top, height, width } = refDiv.value.getBoundingClientRect();
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${Math.ceil(width)} ${Math.ceil(height)}`);
  // svg.style.left = left;
  // svg.style.top = top;
  svg.style.position = 'absolute';
  refDiv.value.after(svg);
  refSvg.value = svg;
});

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

  let mapLinePosition = new Map();
  const {
    left: parentLeft,
    right: parentRight,
    bottom: parentBottom,
  } = refDiv.value.getBoundingClientRect();
  Array.from(firstLine.children).forEach((element) => {
    let { left, bottom: childBottom, right } = element.getBoundingClientRect();
    const bottom = Math.ceil(parentBottom - childBottom);
    let line = mapLinePosition.get(bottom);
    if (line) {
      mapLinePosition.set(bottom, {
        minLeftX: Math.min(parentLeft - left, line.minLeftX),
        maxRightX: Math.max(parentRight - right, line.maxRightX),
      });
    } else {
      mapLinePosition.set(bottom, {
        minLeftX: parentLeft - left,
        maxRightX: parentRight - right,
      });
    }
  });
  console.log(`console= ${[...mapLinePosition.entries()]}`);

  for (const [y, x] of mapLinePosition) {
    addPathLine(refSvg.value, x.minLeftX, y, x.maxRightX - x.minLeftX);
  }
});
</script>

<template>
  <div :ref="(el) => (refDiv = el)" :class="$style.divOuter">
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
.divOuter {
  position: absolute;
}
.spanInParagraph {
  span {
    color: grey;
  }
}
</style>
