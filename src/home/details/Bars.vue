<script setup>
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import Svg from '../Svg.vue';
import { SVG_SRC_BARS, xmlnsXhtml as xmlns } from './etc';
import { onMounted } from 'vue';
import { endTextAnimation, startTextAnimation } from './refs';

const refSvgBars = ref();
const PROPS = {
  height: '26px',
  width: '28px',
};

onMounted(() => {
  if (refSvgBars.value)
    gsap.set(refSvgBars.value, {
      opacity: 0,
    });
});

watch(startTextAnimation, () => {
  if (refSvgBars.value && startTextAnimation.value > 0)
    gsap.to(refSvgBars.value, {
      opacity: 0.6,
      duration: 0.5,
    });
});

watch(endTextAnimation, () => {
  if (refSvgBars.value && endTextAnimation.value > 0)
    gsap.to(refSvgBars.value, {
      opacity: 0,
      duration: 0.3,
    });
});
</script>

<template>
  <Svg :width="PROPS.width" :height="PROPS.height" :class="$style.svgBars">
    <foreignObject
      :ref="(el) => (refSvgBars = el)"
      :xmlns
      :width="PROPS.width"
      :height="PROPS.height"
    >
      <object
        :data="SVG_SRC_BARS"
        :type="`image/svg+xml`"
        :width="PROPS.width"
        :height="PROPS.height"
      ></object>
    </foreignObject>
  </Svg>
</template>

<style module>
.svgBars {
  position: absolute;
  top: 1.4rem;
  left: 14.5rem;
  z-index: 1;
}
</style>
