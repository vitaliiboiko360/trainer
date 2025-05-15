<script setup>
import css from './layout.module.scss';
const { index, isActive, color1, color2, color3 } = defineProps([
  'index',
  'isActive',
  'color1',
  'color2',
  'color3',
]);
import { currentPageBlock } from '../state/currentPageBlock';

import {
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
} from './pageNumberPaths.ts';

const onClick = (setNewIndex) => {
  currentPageBlock.value = setNewIndex;
};
</script>

<template>
  <v-btn
    v-if="index == 1"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <span :class="$style.spanInner"></span>
    <span :class="$style.spanCover"></span>
    <span
      :class="[
        { [$style.tonal]: isActive },
        { [$style.regular]: !isActive },
        $style.spanCover2,
      ]"
    ></span>
    <v-icon :icon="page1"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 2"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page2"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 3"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page3"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 4"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page4"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 5"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page5"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 6"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page6"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 7"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page7"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 8"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page8"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 9"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    elevation="0"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page9"></v-icon>
  </v-btn>
</template>

<style module>
.buttonPageNumberBase {
  display: inline;
  /* box-shadow: 1px 2px 7px 3px v-bind(color1), 0px 4px 5px 2px v-bind(color2),
    0px 1px 10px 1px v-bind(color3) !important; */
  box-shadow: none !important;
}
.unused {
  margin: 0;
  padding: 0rem 1rem 0rem;
  cursor: pointer;
  border: 0;
}

@layer base {
  .tonal {
    background-color: #e9eae9;
  }
  .regular {
    background-color: #fff;
  }
}
@keyframes spanInnerAnimation {
  50% {
    background-position: 100% 50%;
    transform: skew(-2deg);
  }
}
.spanInner {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  background: inherit;
  border-radius: 20px;
  background: linear-gradient(
    -90deg,
    #f000a0,
    #35acfc,
    #00d0df,
    #4b00fa,
    #9cf000
  );
  background-size: 400% 100%;
  border: none;
  padding: 0;
  margin: 0;
  animation: spanInnerAnimation 48s ease-in-out infinite;
  &:after {
    content: '';
    position: absolute;
    background-size: inherit;
    background-image: inherit;
    animation: inherit;
    left: 0;
    right: 0;
    top: 2px;
    height: 100%;
    filter: blur(0.32rem);
    border-radius: 20px;
  }
}
.spanCover2 {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  /* background: #fff; */
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spanCover {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(1px);
}
</style>
