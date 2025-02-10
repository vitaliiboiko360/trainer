<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import { playTime, activeAnimationSentenceNumber } from '../state/platTime';
import css from '../page.module.scss';

const { textLine: textLineInfo, lineNumber } = defineProps([
  'textLine',
  'lineNumber',
  'isLast',
]);

const {
  text: textLine,
  start: startTime,
  end: endTime,
  endParagraph = false,
} = textLineInfo;

const refToSpan = ref();

const onClick = (event) => {
  playTime.updateTime(startTime, endTime);
  activeAnimationSentenceNumber.value = lineNumber;

  let scopedEventTarget = event.currentTarget;

  const onComplete = () => {
    gsap.set(scopedEventTarget, { backgroundSize: '0 100%' });
  };

  gsap.to(event.currentTarget, {
    duration: endTime - startTime,
    backgroundSize: '100% 100%',
    ease: 'none',
    onComplete: () => setTimeout(onComplete, 150),
  });
};

watch(activeAnimationSentenceNumber, () => {
  if (
    activeAnimationSentenceNumber.value >= 0 &&
    activeAnimationSentenceNumber.value != lineNumber
  ) {
    if (refToSpan.value) {
      gsap.set(refToSpan.value, {
        backgroundSize: '0% 100%',
      });
    }
  }
});
</script>

<template>
  <span
    v-if="lineNumber == 1"
    ref="refToSpan"
    @click="onClick"
    :class="[$style.lineButtonPressed, css.lineUnderlined]"
    >{{ textLine }}</span
  >
  <span
    v-else
    ref="refToSpan"
    @click="onClick"
    :class="[$style.lineButtonPressed, css.lineUnderlined]"
    >{{ textLine }}</span
  >
  <p v-if="endParagraph" :class="$style.lineBreak" />
</template>

<style module>
.lineBreak {
  height: 0.9rem;
  content: '';
}
</style>
