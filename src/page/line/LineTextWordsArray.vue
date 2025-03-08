<script setup>
import { watch, ref } from 'vue';
import { gsap } from 'gsap';
import { activeAnimationSentenceNumber } from '../state/playTime';
const { textLine, duration, lineNumber } = defineProps([
  'textLine',
  'duration',
  'lineNumber',
]);

let total = 0;
const durationArray = textLine.split(' ').map((w) => {
  total += w.length;
  return w.length;
});

const refToUnderlineDivs = ref([]);
watch([activeAnimationSentenceNumber], () => {
  if (
    activeAnimationSentenceNumber.value < 0 ||
    activeAnimationSentenceNumber.value != lineNumber ||
    refToUnderlineDivs.value.length == 0
  ) {
    return;
  }
  let index = 0;
  const startAnimateUnderline = (i) => {
    console.log(
      `i == ${i} refToUnderlineDivs.value.length=${
        refToUnderlineDivs.value.length
      } \ntotal=${total} durationArray.at(i)/total=${
        durationArray.at(i) / total
      }`
    );
    let animatedValue = { w: 0 };
    if (i > refToUnderlineDivs.value.length - 1) return;
    const underlineDiv = refToUnderlineDivs.value[i];
    const { width } = underlineDiv.getBoundingClientRect();
    gsap.set(underlineDiv, { display: 'block' });
    gsap.to(animatedValue, {
      w: width,
      duration: duration * (durationArray.at(i) / total),
      onUpdate: () => {
        gsap.set(underlineDiv, {
          clipPath: `path(
            'M0 1.5a1.5 1.5 90 011.5-1.5h${animatedValue.w}a1 1 90 010 3h-${animatedValue.w}A1.5 1.5 90 010 1.5z'
          )`,
        });
      },
      onComplete: () => {
        startAnimateUnderline(++index);
      },
    });
  };
  startAnimateUnderline(index);
});
</script>

<template>
  <span>
    <div
      v-for="(word, index) of textLine.split(' ')"
      :key="index"
      :class="$style.lineWrap"
    >
      <span>{{ `${word} ` }} </span>
      <div
        :ref="(el) => refToUnderlineDivs.push(el)"
        :class="$style.underLine"
        :dur="1"
      ></div>
    </div>
  </span>
</template>

<style module>
.lineWrap {
  display: inline-block;
  white-space: pre;
}
.underLine {
  height: 4px;
  box-sizing: border-box;
  background-color: #0178d5;
  clip-path: path(
    'M0 1.5a1.5 1.5 90 011.5-1.5h0a1 1 90 010 3h-0A1.5 1.5 90 010 1.5z'
  );
  display: none;
}
</style>
