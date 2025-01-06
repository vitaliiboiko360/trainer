<script setup>
import {
  SVG_SRC,
  CENTER_X_REM,
  CENTER_Y_REM,
  SVG_DIMS,
  xmlnsSvg,
  xmlnsXhtml,
} from './etc';
import Svg from '../Svg.vue';
const PROPS = {
  top: '-1.5rem',
  left: '23rem',
  width: '13rem',
  height: '14rem',
};
</script>

<template>
  <Svg :class="[$style.imgSvg]" :xmlns="xmlnsSvg">
    <foreignObject
      :xmlns="xmlnsXhtml"
      :height="PROPS.height"
      :width="PROPS.width"
    >
      <object :data="SVG_SRC" :type="`image/svg+xml`"></object>
    </foreignObject>
    <foreignObject
      :xmlns="xmlnsXhtml"
      :height="PROPS.height"
      :width="PROPS.width"
    >
      <object :data="SVG_SRC" :type="`image/svg+xml`"></object>
    </foreignObject>
  </Svg>
</template>

<style module>
.imgSvg {
  position: absolute;
  opacity: 0.1;
  width: v-bind(PROPS.width);
  height: v-bind(PROPS.height);
  top: v-bind(PROPS.top);
  left: v-bind(PROPS.left);
}
.objectInside {
  width: v-bind(PROPS.width);
  height: v-bind(PROPS.height);
}
</style>
