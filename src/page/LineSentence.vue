<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import {
  activePlayTime,
  activeAnimationSentenceNumber,
} from './activePlayTime';
import * as css from './page.module.scss';

const { textLine: textLineInfo, index } = defineProps(['textLine', 'index']);

const {
  text: textLine,
  endParagraph = false,
  start: startTime,
  end: endTime,
} = textLineInfo;

const refToSpan = ref();

const onClick = (event) => {
  activePlayTime.updateTime(startTime, endTime);
  activeAnimationSentenceNumber.value = index;

  console.log(`event.currentTarget== ${event.currentTarget}`);

  let scopedEventTarget = event.currentTarget;

  const onComplete = () => {
    gsap.set(scopedEventTarget, { backgroundSize: '0 100%' });
  };

  gsap.to(event.currentTarget, {
    backgroundSize: '100% 100%',
    duration: 2,
    onComplete: onComplete,
  });
};

watch(activeAnimationSentenceNumber, () => {
  if (
    activeAnimationSentenceNumber.value >= 0 &&
    activeAnimationSentenceNumber.value != index
  ) {
    console.log(
      `WATCH== ${activeAnimationSentenceNumber.value}\n${refToSpan.value}`
    );
    if (refToSpan.value) {
      gsap.set(refToSpan.value, {
        backgroundSize: '0% 100%',
      });
      refToSpan.value.setAttribute('background-size', '0% 100%');
    }
  }
});
</script>

<template>
  <span ref="refToSpan" @click="onClick" :class="css.lineUnderlined">
    {{ textLine }} </span
  >&nbsp;
  <br v-if="endParagraph" />
</template>
