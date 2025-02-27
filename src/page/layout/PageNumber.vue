<script setup>
import css from './layout.module.scss';
import { defineProps } from 'vue';
const { index, isActive } = defineProps(['index', 'isActive']);
import { currentPageBlock } from '../state/currentPageBlock';
const page1 =
  'M 2.2 11.7 a 9.8 9.8 90 1 0 19.6 0 A 9.8 9.8 90 0 0 2.2 11.7 m 21 0 A 11.2 11.2 90 1 1 0.8 11.7 a 11.2 11.2 90 0 1 22.4 0 M 13.7962 6.1028 V 17.3 H 11.9594 V 7.9732 h -0.091 L 9.3008 9.8184 V 8.039 l 2.6586 -1.9362 z';
const page2 =
  'M2.2 11.7a9.8 9.8 90 1019.6 0A9.8 9.8 90 002.2 11.7m21 0A11.2 11.2 90 11.8 11.7a11.2 11.2 90 0122.4 0M10.104 9.236v.098H8.325v-.09c0-1.698 1.231-3.363 3.692-3.363 2.215 0 3.658 1.329 3.658 3.101 0 1.403-.84 2.334-1.802 3.402l-.134.15-2.764 3.108v.108h4.897V17.3H8.391v-1.165l4.158-4.61c.608-.665 1.264-1.411 1.264-2.387 0-1.042-.78-1.73-1.838-1.73-1.18 0-1.87.861-1.87 1.828';
const page3 =
  'M 11.8852 12.2796 h -1.2306 V 10.7788 h 1.1732 c 1.092 0 1.8872 -0.7308 1.8788 -1.7318 c 0 -0.9926 -0.7882 -1.673 -1.8872 -1.673 c -1.106 0 -1.8368 0.6972 -1.8872 1.477 H 8.185 c 0.0504 -1.5918 1.33 -2.961 3.675 -2.9694 c 2.2316 -0.0168 3.6512 1.239 3.6918 2.8868 c 0.0322 1.5918 -1.239 2.4864 -2.0748 2.625 v 0.098 c 0.9842 0.098 2.394 0.896 2.4276 2.6838 c 0.0336 2.0426 -1.7878 3.3544 -4.102 3.3544 c -2.387 0 -3.7898 -1.3538 -3.8556 -3.0016 H 9.662 c 0.0826 0.8358 0.952 1.484 2.1574 1.4924 c 1.3622 0.0084 2.24 -0.7882 2.2232 -1.8956 c -0.0084 -1.0906 -0.8694 -1.8452 -2.1574 -1.8452 M 23.2 11.7 A 11.2 11.2 90 1 1 0.8 11.7 a 11.2 11.2 90 0 1 22.4 0 M 2.2 11.7 a 9.8 9.8 90 1 0 19.6 0 A 9.8 9.8 90 0 0 2.2 11.7';
const onClick = (setNewIndex) => {
  currentPageBlock.value = setNewIndex;
};
</script>

<template>
  <v-btn
    v-if="index == 1"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded="xl"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
  >
    <v-icon :icon="page1" color="#4B574A"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 2"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    size="40"
    :variant="!isActive && `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page2"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 3"
    :class="$style.buttonPageNumberBase"
    @click="() => onClick(index - 1)"
    rounded
    size="40"
    :variant="!isActive && `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page3"></v-icon>
  </v-btn>
  <button
    v-if="index == 4"
    :class="[css.buttonPageNumber_4, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
  <button
    v-if="index == 5"
    :class="[css.buttonPageNumber_5, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
  <button
    v-if="index == 6"
    :class="[css.buttonPageNumber_6, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
  <button
    v-if="index == 7"
    :class="[css.buttonPageNumber_7, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
  <button
    v-if="index == 8"
    :class="[css.buttonPageNumber_8, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
  <button
    v-if="index == 9"
    :class="[css.buttonPageNumber_9, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
</template>

<style module>
.buttonPageNumberBase {
  display: inline;
}
.unused {
  margin: 0;
  padding: 0rem 1rem 0rem;
  cursor: pointer;
  border: 0;
}
</style>
