<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import { playTime, activeAnimationSentenceNumber } from '../state/playTime';
import css from '../page.module.scss';

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

  let scopedEventTarget = event.currentTarget;

  const onComplete = () => {
    gsap.set(scopedEventTarget, { backgroundSize: '0 100%' });
  };

  refToAnimation.value?.kill();
  gsap.set(event.currentTarget, {
    backgroundSize: '0% 100%',
  });
  refToAnimation.value = gsap.to(event.currentTarget, {
    duration: endTime - startTime,
    backgroundSize: '100% 100%',
    ease: 'none',
    onComplete: () => setTimeout(onComplete, 150),
  });
};

watch([activeAnimationSentenceNumber], () => {
  if (refToAnimation.value && refToAnimation.value.isActive()) {
    refToAnimation.value.kill();
  }
  if (refToSpan.value) {
    gsap.set(refToSpan.value, {
      backgroundSize: '0% 100%',
    });
  }
});
</script>

<template>
  <span
    v-if="lineNumber == 1"
    :ref="(el) => (refToSpan = el)"
    @click="onClick"
    :class="[$style.lineButtonPressed, css.lineUnderlined]"
    >{{ textLine }}</span
  >
  <span
    v-else
    :ref="(el) => (refToSpan = el)"
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
