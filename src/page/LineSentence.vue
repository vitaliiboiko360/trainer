<script setup lang="ts">
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import { playTime, activeAnimationSentenceNumber } from './state/platTime';
import css from './page.module.scss';
import { textView } from './state/textView';

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

// .concat(
<!-- textView == 0 && [
          $style.spanLineByLine,
          !(lineNumber == 1 || isLast) && $style.regularLine,
        ]
      ) -->

<template>
  <div v-if="lineNumber == 1" :class="css.titleLine">
    <span ref="refToSpan" @click="onClick" :class="css.lineUnderlined">{{
      textLine
    }}</span>
  </div>
  <span
    v-else
    ref="refToSpan"
    @click="onClick"
    :class="[
      css.lineUnderlined,
      { [$style.spanLineByLine]: textView == 0 },
      { [$style.regularLine]: textView == 0 && !isLast },
    ]"
  >
    {{ textLine }} </span
  ><span v-if="lineNumber > 1 && textView">&nbsp;</span>
  <p v-if="endParagraph" :class="$style.lineBreak" />
</template>

<style module>
.spanLineByLine {
  display: block;
  width: fit-content;
}
.regularLine {
  padding-bottom: 0.3rem;
  border-bottom: 1px dashed gainsboro;
}
.lineBreak {
  height: 0.9rem;
  content: '';
}
</style>
