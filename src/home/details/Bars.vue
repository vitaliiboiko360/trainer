<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
import Svg from '../Svg.vue';
import { SVG_SRC_BARS, xmlnsXhtml as xmlns } from './etc';
import { onMounted } from 'vue';

const refSvgBars = ref();
const PROPS = {
  height: '32px',
  width: '32px',
};

onMounted(() => {
  gsap.set(refSvgBars.value, {
    opacity: 0.5,
  });
});
</script>

<template>
  <Svg
    :ref="(el) => (refSvgBars = el)"
    :height="PROPS.height"
    :width="PROPS.width"
    :class="$style.svgBars"
  >
    <foreignObject :xmlns :height="PROPS.height" :width="PROPS.width">
      <object
        :data="SVG_SRC_BARS"
        :type="`image/svg+xml`"
        :height="PROPS.height"
        :width="PROPS.width"
      ></object>
    </foreignObject>
  </Svg>
</template>

<style module>
.svgBars {
  position: absolute;
  top: 1rem;
  left: 14.5rem;
  z-index: 1;
}
</style>
