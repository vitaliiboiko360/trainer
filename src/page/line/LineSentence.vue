<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import {
  playTime,
  activeAnimationSentenceNumber,
  detectClickEvent,
} from '../state/playTime';
import LineTextWordsArray from './LineTextWordsArray.vue';
import { useIndicatorIndexStore } from '../../store/indicatorIndex';
const indicatorIndexStore = useIndicatorIndexStore();

import { useAudioTimeStore } from '../../store/playTime';
const audioTimeStore = useAudioTimeStore();

import { useAudioPlayStore } from '../../store/audioPlay';
const audioPlayStore = useAudioPlayStore();

const { textLine: textLineInfo, lineNumber } = defineProps([
  'textLine',
  'lineNumber',
]);

const {
  text: textLine,
  start: startTime,
  end: endTime,
  endParagraph = false,
} = textLineInfo;

const refToSpan = ref();
const refToAnimation = ref();

const onClick = (event) => {
  playTime.updateTime(startTime, endTime);
  activeAnimationSentenceNumber.value = lineNumber;
  indicatorIndexStore.update(lineNumber);
  detectClickEvent.value = !detectClickEvent.value;
  audioTimeStore.updatePlayTime(startTime, endTime);
  audioPlayStore.setPlay();

  // let scopedEventTarget = event.currentTarget;

  // const onComplete = () => {
  //   gsap.set(scopedEventTarget, { backgroundSize: '0 100%' });
  // };

  // refToAnimation.value?.kill();
  // gsap.set(event.currentTarget, {
  //   backgroundSize: '0% 100%',
  // });
  // refToAnimation.value = gsap.to(event.currentTarget, {
  //   duration: endTime - startTime,
  //   backgroundSize: '100% 100%',
  //   ease: 'none',
  //   onComplete: () => setTimeout(onComplete, 150),
  // });
};

watch(indicatorIndexStore, () => {
  if (indicatorIndexStore.indicatorIndex == lineNumber) {
    audioTimeStore.updatePlayTime(startTime, endTime);
  }
});

// watch([activeAnimationSentenceNumber], () => {
//   if (refToAnimation.value && refToAnimation.value.isActive()) {
//     refToAnimation.value.kill();
//   }
//   if (refToSpan.value) {
//     gsap.set(refToSpan.value, {
//       backgroundSize: '0% 100%',
//     });
//   }
// });
</script>

<template>
  <span
    :ref="(el) => (refToSpan = el)"
    @click="onClick"
    :class="[$style.lineUnderlined]"
    ><LineTextWordsArray :textLine :duration="endTime - startTime" :lineNumber>
      <template v-slot:indicator>
        <slot name="indicator"></slot>
      </template> </LineTextWordsArray
  ></span>
  <p v-if="endParagraph" :class="$style.lineBreak" />
</template>

<style module>
.lineBreak {
  height: 0.9rem;
  content: '';
}
.lineUnderlined {
  background: linear-gradient(
    0deg,
    rgb(255 0 19 / 48%) 0%,
    rgba(255, 0, 255, 0) 16%,
    rgb(0 199 255) 16%,
    rgb(63 255 0 / 0%) 41%,
    rgba(255, 0, 255, 0) 41%
  );
  box-decoration-break: slice;
  -webkit-box-decoration-break: slice;
  border-radius: 0.4rem;
  background-size: 0 100%;
  background-repeat: no-repeat;
  background-position: 0 100%;
}
</style>

// padding: 0 0.5em 0 0.1em;
