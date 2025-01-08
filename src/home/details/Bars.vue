<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
import Svg from '../Svg.vue';
import { SVG_SRC_BARS, xmlnsXhtml as xmlns } from './etc';
import { onMounted } from 'vue';

const refSvgBars = ref();
const PROPS = {
  height: '16px',
  width: '16px',
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
