<script setup>
import { HEIGHT, WIDTH, HEIGHT_REM, WIDTH_REM, xmlnsSvg as xmlns } from './etc';
</script>

<template>
  <svg
    :height="HEIGHT_REM"
    :width="WIDTH_REM"
    :class="[$style.svgHolder]"
    :xmlns
    :viewBox="`0 0 ${WIDTH} ${HEIGHT}`"
  >
    <path :d="`M10 10C15 17 26 21 33 19`" :stroke="`red`" />
  </svg>
</template>

<style module>
.svgHolder {
  position: absolute;
  z-index: -1;
}
</style>
