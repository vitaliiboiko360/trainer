<script setup>
import { watch, ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import {
  activeAnimationSentenceNumber,
  detectClickEvent,
  isPlay,
} from '../state/playTime';
import { useIndicatorIndexStore } from '../../store/indicatorIndex';
const indicatorIndexStore = useIndicatorIndexStore();

import { useAudioPlayStore } from '../../store/audioPlay';
const audioPlayStore = useAudioPlayStore();

const { textLine, duration, lineNumber } = defineProps([
  'textLine',
  'duration',
  'lineNumber',
]);

const colorHexes = [
  'b1ecff',
  'c1dbd4',
  'd1e4df',
  'edeae1',
  'e4e1ed',
  'f2f1f7',
  'f1f7f2',
  'e1eee3',
  'eceee1',
  'e1ecee',
  'f6f7f1',
];

const totalWidth = ref(0);

const refToUnderlineDivs = ref([]);
const refToWordSpans = ref([]);

const currentAnimation = ref();
const currentAnimation2 = ref();
const currentAnimationProgress = ref();
const currentAnimationProgress2 = ref();

onMounted(() => {
  refToUnderlineDivs.value.forEach((uDiv) => {
    const { width } = uDiv.getBoundingClientRect();
    totalWidth.value = totalWidth.value + width;
  });
});

watch([audioPlayStore, indicatorIndexStore], () => {
  // if (
  //   isPlay.value == true &&
  //   !currentAnimation.value &&
  //   !currentAnimation2.value
  // ) {
  //   return;
  // }
  if (
    indicatorIndexStore.indicatorIndex < 0 ||
    indicatorIndexStore.indicatorIndex != lineNumber ||
    refToUnderlineDivs.value.length == 0
  ) {
    // console.log(`we don't play for indicatorIndexStore.indicatorIndex= ${indicatorIndexStore.indicatorIndex} `);
    return;
  }
  if (audioPlayStore.isPlay == true) {
    currentAnimation.value && currentAnimation.value.play();
    currentAnimation2.value && currentAnimation2.value.play();
  } else {
    if (currentAnimation.value) {
      currentAnimation.value.pause();
      currentAnimationProgress.value = currentAnimation.value.progress();
    }
    if (currentAnimation2.value) {
      currentAnimation2.value.pause();
      currentAnimationProgress2.value = currentAnimation2.value.progress();
    }
  }
});

watch(
  [indicatorIndexStore],
  () => {
    const clearAnimation2 = () => {
      refToWordSpans.value.forEach((span) => {
        gsap.set(span, { boxShadow: 'unset', background: 'unset' });
      });
    };

    if (
      indicatorIndexStore.indicatorIndex < 0 ||
      indicatorIndexStore.indicatorIndex != lineNumber ||
      refToUnderlineDivs.value.length == 0
    ) {
      if (currentAnimation.value) {
        currentAnimation.value.kill();
        currentAnimation.value = undefined;
      }
      refToUnderlineDivs.value.forEach((div) => {
        gsap.set(div, { backgroundColor: 'unset' });
        gsap.set(div, {
          clipPath: `path('M0 1.5a1.5 1.5 90 011.5-1.5h${0}a1 1 90 010 3h-${0}A1.5 1.5 90 010 1.5z')`,
        });
      });

      clearAnimation2();
      return;
    }

    if (currentAnimation.value) {
      currentAnimation.value.kill();
      currentAnimation.value = undefined;
    }
    refToUnderlineDivs.value.forEach((div) => {
      gsap.set(div, { backgroundColor: 'unset' });
      gsap.set(div, {
        clipPath: `path('M0 1.5a1.5 1.5 90 011.5-1.5h${0}a1 1 90 010 3h-${0}A1.5 1.5 90 010 1.5z')`,
      });
    });

    clearAnimation2();

    let index = 0;
    const startAnimateUnderline = (i) => {
      let animatedValue = { w: 0 };

      if (i > refToUnderlineDivs.value.length - 1) return;

      const underlineDiv = refToUnderlineDivs.value[i];

      const { width, y } = underlineDiv.getBoundingClientRect();

      let isLastOnLine = false;
      if (i + 1 < refToUnderlineDivs.value.length) {
        const { y: nextY } =
          refToUnderlineDivs.value[i + 1].getBoundingClientRect();
        const round = (v) => Math.round(parseFloat(v));
        if (round(y) != round(nextY)) {
          isLastOnLine = true;
        }
      }

      //
      // if (currentAnimation2.value) {
      //   currentAnimation2.value.kill();
      //   currentAnimation2.value = undefined;
      // }
      const randomColor = `#${
        colorHexes[~~(Math.random() * colorHexes.length)]
      }`;
      const updatedObject = {
        key: 0,
      };
      const keyframes = [1, 3, 5, 2];
      const word = refToWordSpans.value[i];

      currentAnimation2.value = gsap.to(updatedObject, {
        paused: index > 0 ? false : true,
        keyframes: {
          key: keyframes,
        },
        ease:'none',
        onUpdate: () => {
          gsap.set(word, {
            background: randomColor,
          });
          gsap.set(word, {
            boxShadow: `0px 0px 0 ${updatedObject.key}px ${randomColor}`, //, 0px 0px 0 ${updatedObject.key + 3}px #c1d5db
          });
        },
        duration: Math.max(0.8, duration * (width / totalWidth.value)),
        onComplete: () => {
          if (index + 1 >= refToWordSpans.value.length) {
            // console.log(`onComplete = ${i}`);
            setTimeout(() => {
              clearAnimation2();

              // indicatorIndexStore.update(lineNumber + 1);
            }, 150);
          }
        },
      });
      //

      currentAnimation.value = gsap.to(animatedValue, {
        paused: index > 0 ? false : true,
        w:
          i == refToUnderlineDivs.value.length - 1 || isLastOnLine
            ? width - 10
            : width,
        duration: duration * (width / totalWidth.value),
        ease: 'none',
        onUpdate: () => {
          gsap.set(underlineDiv, { backgroundColor: '#0178d5' });
          gsap.set(underlineDiv, {
            clipPath: `path('M0 1.5a1.5 1.5 90 011.5-1.5h${animatedValue.w}a1 1 90 010 3h-${animatedValue.w}A1.5 1.5 90 010 1.5z')`,
          });
        },
        onComplete: () => {
          if (index + 1 >= refToUnderlineDivs.value.length) {
            setTimeout(() => {
              currentAnimation.value = undefined;
              refToUnderlineDivs.value.forEach((div) => {
                gsap.set(div, { backgroundColor: 'unset' });
                gsap.set(div, {
                  clipPath: `path('M0 1.5a1.5 1.5 90 011.5-1.5h${0}a1 1 90 010 3h-${0}A1.5 1.5 90 010 1.5z')`,
                });
              });
            }, 250);
          } else {
            startAnimateUnderline(++index);
          }
        },
      });
    };
    indicatorIndexStore.update(lineNumber);
    startAnimateUnderline(index);
  }
);
</script>

<template>
  <span :class="$style.lineWrapOuter">
    <div
      v-for="(word, index) of textLine.split(' ')"
      :key="index"
      :class="$style.lineWrap"
    >
      <div v-if="index == 0">
        <slot name="indicator"></slot>
      </div>
      <span :ref="(el) => refToWordSpans.push(el)" :class="$style.word">{{
        `${word}`
      }}</span
      ><span v-if="index != textLine.split(' ').length - 1">{{ ` ` }}</span>
      <div
        :ref="(el) => refToUnderlineDivs.push(el)"
        :class="$style.underLine"
      ></div>
    </div>
  </span>
  <span v-if="lineNumber > 1">{{ ` ` }}</span>
</template>

<style module>
.lineWrapOuter {
  position: relative;
  margin-right: 0.5rem;
}
.lineWrap {
  display: inline-block;
  white-space: pre;
}
.underLine {
  height: 4px;
  box-sizing: border-box;
  margin: 0px -1px;
  clip-path: path(
    'M0 1.5a1.5 1.5 90 011.5-1.5h0a1 1 90 010 3h-0A1.5 1.5 90 010 1.5z'
  );
  /* filter: drop-shadow(16px 16px 20px rgb(88, 140, 177)) invert(75%); */
}
.word {
  border-radius: 10px;
  text-shadow: #ffffff 0 0 10px;
}
</style>
