<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import { playTime, activeAnimationSentenceNumber } from '../state/playTime';
import css from './page.module.scss';

const { textLine: textLineInfo, index } = defineProps(['textLine', 'index']);

const {
  text: textLine,
  endParagraph = false,
  start: startTime,
  end: endTime,
} = textLineInfo;

const refToSpan = ref();

const onClick = (event) => {
  playTime.updateTime(startTime, endTime);
  activeAnimationSentenceNumber.value = index;

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
    activeAnimationSentenceNumber.value != index
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
  <div v-if="index == 1" :class="css.titleLine">
    <span ref="refToSpan" @click="onClick" :class="$style.lineUnderlined">{{
      textLine
    }}</span>
  </div>
  <span v-else ref="refToSpan" @click="onClick" :class="$style.lineUnderlined">
    {{ textLine }} </span
  ><span v-if="index > 1">&nbsp;</span>
  <br v-if="endParagraph" />
</template>

<style module>
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
