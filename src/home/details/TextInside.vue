<script setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { watch, ref, onMounted } from 'vue';
import * as css from '../home.module.scss';
import {
  hihglightTextInside,
  incrementHiglightTextInside,
  REM_IN_PX,
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

const addPathToSvg = (parentDiv, firstLine, svgBackground) => {
  let mapLinePosition = new Map();
  const { left: parentLeft, top: parentTop } =
    parentDiv.getBoundingClientRect();
  Array.from(firstLine.children).forEach((element) => {
    let { left, bottom: childBottom, right } = element.getBoundingClientRect();
    const bottom = Math.ceil(childBottom - parentTop);
    let line = mapLinePosition.get(bottom);
    const minLeft = Math.ceil(left - parentLeft);
    const maxRight = Math.ceil(right - parentLeft);
    if (line) {
      mapLinePosition.set(bottom, {
        minLeftX: Math.min(minLeft, line.minLeftX),
        maxRightX: Math.max(maxRight, line.maxRightX),
      });
    } else {
      mapLinePosition.set(bottom, {
        minLeftX: minLeft,
        maxRightX: maxRight,
      });
    }
  });
  for (const [y, x] of mapLinePosition) {
    addPathLine(svgBackground, x.minLeftX, y, x.maxRightX - x.minLeftX);
  }
};

onMounted(() => {
  const { left, top, height, width } = refDiv.value.getBoundingClientRect();
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', `${Math.ceil(width)}`);
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

watch([hihglightTextInside, REM_IN_PX], () => {
  if (hihglightTextInside.value < 1) return;
  refSvg.value.replaceChildren();

  const firstLine = refDiv.value.children.item(0);
  const words = firstLine.textContent.split(' ');
  const spans = words.map((word, index) => {
    let element = document.createElement('span');
    element.textContent = word + (index == words.length - 1 ? '' : ' ');
    return element;
  });
  firstLine.replaceChildren(...spans);

  addPathToSvg(refDiv.value, firstLine, refSvg.value);
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
