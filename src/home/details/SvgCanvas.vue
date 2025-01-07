<script setup>
import {
  HEIGHT,
  WIDTH,
  HEIGHT_PX,
  WIDTH_PX,
  xmlnsSvg as xmlns,
  POINT_HAND_PATH_ID,
  POINT_HAND_PATH_ID_2,
} from './etc';
import { refSvgCanvas } from './refs';
</script>
// M214 138C222 134 225 135 229 129 237 112 220 109 212 108
<template>
  <svg
    :ref="(el) => (refSvgCanvas = el)"
    :height="HEIGHT_PX"
    :width="WIDTH_PX"
    :class="[$style.svgHolder]"
    :xmlns
    :viewBox="`0 0 ${WIDTH_PX} ${HEIGHT_PX}`"
  >
    <!-- <path
      :id="POINT_HAND_PATH_ID"
      :d="`M70 86C148 44 200 142 204 96`"
      :fill="`none`"
      :stroke="`red`"
      :stroke-width="`2px`"
    /> -->
    <path
      :id="POINT_HAND_PATH_ID"
      :d="`M70 86C140 120 149 118 166 111 178 105 189 106 212 108`"
      :fill="`none`"
      :stroke="`green`"
      :stroke-width="`2px`"
    />
    <path
      :id="POINT_HAND_PATH_ID_2"
      :d="`M208 146C237 149 239 141 238 132 237 112 220 109 212 108`"
      :fill="`none`"
      :stroke="`green`"
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
