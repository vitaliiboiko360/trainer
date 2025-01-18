<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import { playTime, activeAnimationSentenceNumber } from './state/platTime';
import css from './page.module.scss';
import { textView } from './state/textView';

const { textLine: textLineInfo, index } = defineProps(['textLine', 'index']);

const {
  text: textLine,
  start: startTime,
  end: endTime,
  endParagraph = false,
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
    <span ref="refToSpan" @click="onClick" :class="css.lineUnderlined"
      ><b>{{ textLine }}</b></span
    >
  </div>
  <span
    v-else
    ref="refToSpan"
    @click="onClick"
    :class="[css.lineUnderlined, !textView && $style.spanLineByLine]"
  >
    {{ textLine }} </span
  ><span v-if="index > 1 && textView">&nbsp;</span>
  <br v-if="endParagraph" :class="$style.lineBreak" />
</template>

<style module>
.spanLineByLine {
  display: block;
  width: fit-content;
}
.lineBreak {
  height: 0.5rem;
}
</style>
