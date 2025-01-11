<script setup>
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { watch, ref, onMounted } from 'vue';

import {
  hihglightTextInside,
  incrementHiglightTextInside,
  REM_IN_PX,
  textInside,
} from './refs';
import { TXT_LINES, shuffle } from './etc';
import { addPathLine } from './svg';

gsap.registerPlugin(TextPlugin, MotionPathPlugin);

const refDiv = ref();
const refSvg = ref();
const startTextAnimation = ref(0);

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const colors = [
  '#47D6FE',
  '#BAF3FF',
  '#FE7A01',
  '#FFC900',
  '#CF82FE',
  '#E4A359',
  '#FEBFE5',
  '#88E219',
  '#59CC03',
  '#FEC300',
  '#FEDF32',
  '#F49101',
  '#D2EAF6',
  '#1999D7',
  '#8FE001',
  '#FFD760',
  '#FAE46D',
  '#FED900',
  '#FEEE8F',
  '#F7C001',
  '#1CB0F6',
];

shuffle(TXT_LINES);

let previousFirstLine;

const addPathToSvg = (parentDiv, firstLine, svgBackground) => {
  let mapLinePosition = new Map();
  const { left: parentLeft, top: parentTop } =
    parentDiv.getBoundingClientRect();
  Array.from(firstLine.children).forEach((element) => {
    if (element.textContent == ' ') return;

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

const wrapWordsInSpans = (firstLine) => {
  const words = firstLine.textContent.split(' ');
  const spans = words.map((word, index) => {
    let spaceBarSpanElement = document.createElement('span');
    spaceBarSpanElement.textContent = ' ';
    let element = document.createElement('span');
    element.textContent = word;
    return index == words.length - 1 ? element : [element, spaceBarSpanElement];
  });
  firstLine.replaceChildren(...spans.flat());
};

const createSvgElement = () => {
  const { left, top, height, width } = refDiv.value.getBoundingClientRect();
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', `${Math.ceil(width)}`);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${Math.ceil(width)} ${Math.ceil(height)}`);
  // svg.style.left = left;
  // svg.style.top = top;
  svg.style.position = 'absolute';
  return svg;
};

const createCursorElement = () => {
  let cursorElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'rect'
  );
  cursorElement.setAttribute('width', '2');
  cursorElement.setAttribute('height', '20');
  cursorElement.setAttribute('ry', '1');
  cursorElement.setAttribute('stroke', '#0968DB');
  cursorElement.setAttribute('fill', '#0968DB');
  cursorElement.setAttribute('stroke-width', '1');
  cursorElement.setAttribute('stroke-linecap', 'round');
  cursorElement.setAttribute('fill-opacity', '0');
  return cursorElement;
};

onMounted(() => {
  if (refSvg.value) refSvg.value.remove();
  const svg = createSvgElement();
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
  if (firstLine.childElementCount == 0) {
    wrapWordsInSpans(firstLine);
  }

  addPathToSvg(refDiv.value, firstLine, refSvg.value);
  startTextAnimation.value = startTextAnimation.value + 1;
});

watch(startTextAnimation, () => {
  let mapLineDurations = new Map();
  const firstLine = refDiv.value.children.item(0);
  const { top: parentTop } = firstLine.parentNode.getBoundingClientRect();
  Array.from(firstLine.children).forEach((element) => {
    if (element.textContent == ' ') return;
    let { bottom: childBottom } = element.getBoundingClientRect();
    const bottom = Math.ceil(childBottom - parentTop);
    let lineLenghtAndElements = mapLineDurations.get(bottom);
    if (lineLenghtAndElements) {
      mapLineDurations.set(bottom, {
        length: lineLenghtAndElements.length + element.textContent.length,
        elements: [...lineLenghtAndElements.elements, element],
      });
    } else {
      mapLineDurations.set(bottom, {
        length: element.textContent.length,
        elements: [element],
      });
    }
  });

  const cursorElement = createCursorElement();
  refSvg.value.append(cursorElement);

  console.log(`mapLineDurations= ${[...mapLineDurations.entries()]}`);

  const durations = [...mapLineDurations.entries()].sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });
  durations.forEach((keyValue) => {
    keyValue[1].elements.sort((a, b) => {
      const { right: rightA } = a.getBoundingClientRect();
      const { right: rightB } = b.getBoundingClientRect();
      if (rightA < rightB) return -1;
      if (rightA > rightB) return 1;
      return 0;
    });
  });

  let animateCursorLine;

  let onComplete = (lineIndex) => {
    if (lineIndex + 1 >= Math.min(durations.length, 4)) return; // we limit animaiton to only first 4 lines
    animateCursorLine(++lineIndex);
  };

  gsap.to(cursorElement, {
    duration: 0.3,
    fillOpacity: 1,
  });

  animateCursorLine = (lineIndex) => {
    const pathElement = refSvg.value.children.item(lineIndex);
    console.log(`pathElement= ${pathElement.getAttribute('d')}`);

    let highlitedWords = durations[lineIndex][1].elements.map((element) => {
      const { right } = element.getBoundingClientRect();
      return {
        isHighlighted: false,
        element: element,
        right: Math.ceil(right),
      };
    });

    const onUpdate = () => {
      const { right: cursorRight } = cursorElement.getBoundingClientRect();

      let notYetHighlitedElement = highlitedWords.find((element) => {
        if (element.isHighlighted) return false;
        if (element.right < cursorRight) return true;
        return false;
      });
      if (notYetHighlitedElement) {
        notYetHighlitedElement.isHighlighted = true;
        const color = colors[Math.floor(Math.random() * colors.length)];
        notYetHighlitedElement.element.style.backgroundColor = color;
        notYetHighlitedElement.element.style.borderLeft = `0px solid ${color}`;
        notYetHighlitedElement.element.style.borderRight = `0px solid ${color}`;
        notYetHighlitedElement.element.style.borderRadius = '2px';
      }
    };

    gsap.to(cursorElement, {
      duration: durations[lineIndex][1].length * 0.13,
      motionPath: {
        path: pathElement,
        align: pathElement,
        alignOrigin: [0, 1],
        offsetY: -3,
      },
      ease: 'none',
      onUpdate: onUpdate,
      onComplete: () => onComplete(lineIndex),
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
    ::after {
      content: '';
    }
  }
}
</style>
