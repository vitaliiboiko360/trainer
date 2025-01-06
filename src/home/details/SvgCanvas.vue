<script setup>
import {
  HEIGHT,
  WIDTH,
  HEIGHT_PX,
  WIDTH_PX,
  xmlnsSvg as xmlns,
  POINT_HAND_PATH_ID,
} from './etc';
import { refSvgCanvas } from './refs';
</script>

<template>
  <svg
    :ref="(el) => (refSvgCanvas = el)"
    :height="HEIGHT_PX"
    :width="WIDTH_PX"
    :class="[$style.svgHolder]"
    :xmlns
    :viewBox="`0 0 ${WIDTH_PX} ${HEIGHT_PX}`"
  >
    <path
      :id="POINT_HAND_PATH_ID"
      :d="`M70 86C148 44 200 142 204 96`"
      :fill="`none`"
      :stroke="`red`"
      :stroke-width="`2px`"
    />
  </svg>
</template>

<style module>
.svgHolder {
  position: absolute;
  z-index: -1;
}
</style>
