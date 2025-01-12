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

const POSITION_DIV = { x: 38, y: 55, width: `60px`, height: `40px` };
const ANGLE = 6.02139; // 345 degree in Rad
const ANGLE2 = 0.523599; // 30 degree in Rad
</script>

<template>
  <Svg :class="[$style.imgSvg]" :xmlns="xmlnsSvg">
    <foreignObject
      :xmlns="xmlnsXhtml"
      :width="PROPS.width"
      :height="PROPS.height"
    >
      <object :data="SVG_SRC" :type="`image/svg+xml`"></object>
    </foreignObject>
    <foreignObject
      :xmlns="xmlnsXhtml"
      :width="PROPS.width"
      :height="PROPS.height"
    >
      <object :data="SVG_SRC" :type="`image/svg+xml`"></object>
    </foreignObject>
    <foreignObject
      :xmlns="xmlnsXhtml"
      :x="POSITION_DIV.x"
      :y="POSITION_DIV.y"
      :width="POSITION_DIV.width"
      :height="POSITION_DIV.height"
      :transform="`matrix(${Math.cos(ANGLE)},${Math.sin(ANGLE)},${-Math.sin(
        ANGLE
      )},${Math.cos(ANGLE)},0,0)`"
    >
      <div></div>
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
