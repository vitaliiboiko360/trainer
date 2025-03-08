<script setup>
import { watch, ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import {
  activeAnimationSentenceNumber,
  detectClickEvent,
} from '../state/playTime';
const { textLine, duration, lineNumber } = defineProps([
  'textLine',
  'duration',
  'lineNumber',
]);

const totalWidth = ref(0);
const refToUnderlineDivs = ref([]);
const currentAnimation = ref();

onMounted(() => {
  refToUnderlineDivs.value.forEach((uDiv) => {
    const { width } = uDiv.getBoundingClientRect();
    totalWidth.value = totalWidth.value + width;
  });
});

watch([activeAnimationSentenceNumber, detectClickEvent], () => {
  if (
    activeAnimationSentenceNumber.value < 0 ||
    activeAnimationSentenceNumber.value != lineNumber ||
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

  let index = 0;
  const startAnimateUnderline = (i) => {
    let animatedValue = { w: 0 };

    if (i > refToUnderlineDivs.value.length - 1) return;

    const underlineDiv = refToUnderlineDivs.value[i];

    const { width } = underlineDiv.getBoundingClientRect();

    gsap.set(underlineDiv, { backgroundColor: '#0178d5' });

    currentAnimation.value = gsap.to(animatedValue, {
      w: width,
      duration: duration * (width / totalWidth.value),
      ease: 'none',
      onUpdate: () => {
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
          }, 150);
        } else {
          startAnimateUnderline(++index);
        }
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
  clip-path: path(
    'M0 1.5a1.5 1.5 90 011.5-1.5h0a1 1 90 010 3h-0A1.5 1.5 90 010 1.5z'
  );
}
</style>
