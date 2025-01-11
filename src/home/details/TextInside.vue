<script setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { watch, ref, onMounted } from 'vue';
import * as css from '../home.module.scss';
import {
  hihglightTextInside,
  incrementHiglightTextInside,
  onCompleteStartPointHand,
  REM_IN_PX,
  textInside,
} from './refs';
import { TXT_LINES, countSyllables, shuffle } from './etc';
import { addPathLine } from './svg';

gsap.registerPlugin(TextPlugin, MotionPathPlugin);

const refDiv = ref();
const refSvg = ref();

const startTextAnimation = ref(0);

shuffle(TXT_LINES);

let previousFirstLine;

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
  incrementHiglightTextInside();
});

watch([hihglightTextInside, REM_IN_PX], () => {
  if (hihglightTextInside.value < 1) return;
  refSvg.value.replaceChildren();

  const firstLine = refDiv.value.children.item(0);
  firstLine.style.color = 'grey';
  if (previousFirstLine) {
    previousFirstLine.style.color = '';
  }
  previousFirstLine = firstLine;
  const words = firstLine.textContent.split(' ');
  const spans = words.map((word, index) => {
    let element = document.createElement('span');
    element.textContent = word + (index == words.length - 1 ? '' : ' ');
    return element;
  });
  firstLine.replaceChildren(...spans);

  addPathToSvg(refDiv.value, firstLine, refSvg.value);
  startTextAnimation.value = startTextAnimation.value + 1;
});

watch(startTextAnimation, () => {
  let mapLineDurations = new Map();
  const firstLine = refDiv.value.children.item(0);
  const { top: parentTop } = firstLine.parentNode.getBoundingClientRect();
  Array.from(firstLine.children).forEach((element) => {
    let { bottom: childBottom } = element.getBoundingClientRect();
    const bottom = Math.ceil(childBottom - parentTop);
    let lineSyllableCount = mapLineDurations.get(bottom);
    if (lineSyllableCount) {
      mapLineDurations.set(
        bottom,
        lineSyllableCount + countSyllables(element.textContent)
      );
    } else {
      mapLineDurations.set(bottom, countSyllables(element.textContent));
    }
  });

  let cursorElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  cursorElement.setAttribute('width', '2px');
  cursorElement.setAttribute('height', '14px');
  cursorElement.setAttribute('ry', '1px');
  cursorElement.setAttribute('stroke', '#0968DB');
  cursorElement.setAttribute('fill', '#0968DB');
  cursorElement.setAttribute('stroke-width', '1px');
  cursorElement.setAttribute('stroke-linecap', 'round');
  cursorElement.setAttribute('fill-opacity', '0');
  refSvg.value.append(cursorElement);

  let isRun = false;
  const runOnce = () => {
    if (isRun) return;
    gsap.to(cursorElement, {
      duration: 0.3,
      fillOpacity: 1,
    });
    isRun = true;
  };

  console.log(`mapLineDurations= ${[...mapLineDurations.entries()]}`);

  const durations = [...mapLineDurations.entries()]
    .sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    })
    .map((lineDuration) => {
      return lineDuration[1];
    });

  let animateCursorLine;

  let onComplete = (index) => {
    if (index + 1 >= durations.length) return; // exhausted input
    animateCursorLine(++index);
  };

  animateCursorLine = (index) => {
    const pathElement = refSvg.value.children.item(index);
    console.log(`pathElement= ${pathElement.getAttribute('d')}`);
    gsap.to(cursorElement, {
      duration: durations[index] * 0.4,
      motionPath: {
        path: pathElement,
        align: pathElement,
        alignOrigin: [0, 1],
      },
      ease: 'none',
      onComplete: () => onComplete(index),
    });
  };

  animateCursorLine(0);
});
</script>

<template>
  <div :ref="(el) => (refDiv = el)" :class="$style.divOuter">
    <p v-for="(line, index) in TXT_LINES" :key="index">
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
