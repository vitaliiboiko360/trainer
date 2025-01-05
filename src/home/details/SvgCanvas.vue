<script setup>
import { HEIGHT_REM, WIDTH_REM } from './etc';
</script>

<template>
  <svg
    :height="HEIGHT_REM"
    :width="WIDTH_REM"
    :class="[$style.svgHolder]"
  ></svg>
</template>

<style module>
.svgHolder {
  position: absolute;
  z-index: -1;
}
</style>
