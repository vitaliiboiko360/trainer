<script setup>
import {
  HEIGHT,
  WIDTH,
  HEIGHT_REM,
  WIDTH_REM,
  xmlnsSvg as xmlns,
  POINT_HAND_PATH_ID,
  POINT_HAND_PATH_ID_2,
} from './etc';
import { refSvgCanvas, REM_IN_PX, updateRemInPxValue } from './refs';

const remInPx = updateRemInPxValue();
</script>
// M214 138C222 134 225 135 229 129 237 112 220 109 212 108
<template>
  <svg
    :ref="(el) => (refSvgCanvas = el)"
    :width="`${WIDTH_REM}`"
    :height="`${HEIGHT_REM}`"
    :class="[$style.svgHolder]"
    :xmlns
    :viewBox="`0 0 ${WIDTH * (REM_IN_PX ?? remInPx)} ${
      HEIGHT * (REM_IN_PX ?? remInPx)
    }`"
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
      :d="`M212 108C220 109 237 112 238 132 238 139 237 149 209 148`"
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
