<script setup>
import css from './layout.module.scss';
import { defineProps } from 'vue';
const { index, isActive } = defineProps(['index', 'isActive']);
import { currentPageBlock } from '../state/currentPageBlock';
const page1 =
  'M 2.2 11.74 a 9.8 9.8 90 1 0 19.6 0 A 9.8 9.8 90 0 0 2.2 11.74 m 21 0 A 11.2 11.2 90 1 1 0.8 11.74 a 11.2 11.2 90 0 1 22.4 0 M 13.7962 6.1428 V 17.34 H 11.9594 V 8.0132 h -0.091 L 9.3008 9.8584 V 8.079 l 2.6586 -1.9362 z';
const page2 =
  'M2.2 11.7a9.8 9.8 90 1019.6 0A9.8 9.8 90 002.2 11.7m21 0A11.2 11.2 90 11.8 11.7a11.2 11.2 90 0122.4 0M10.104 9.236v.098H8.325v-.09c0-1.698 1.231-3.363 3.692-3.363 2.215 0 3.658 1.329 3.658 3.101 0 1.403-.84 2.334-1.802 3.402l-.134.15-2.764 3.108v.108h4.897V17.3H8.391v-1.165l4.158-4.61c.608-.665 1.264-1.411 1.264-2.387 0-1.042-.78-1.73-1.838-1.73-1.18 0-1.87.861-1.87 1.828';
const onClick = (setNewIndex) => {
  currentPageBlock.value = setNewIndex;
};
</script>

<template>
  <v-btn
    v-if="index == 1"
    @click="() => onClick(index - 1)"
    rounded="xl"
    size="40"
    :variant="isActive ? `tonal` : `plain`"
  >
    <v-icon :icon="page1" color="#4B574A"></v-icon>
  </v-btn>
  <v-btn
    v-if="index == 2"
    @click="() => onClick(index - 1)"
    rounded
    size="40"
    :variant="isActive ? `tonal` : `plain`"
    color="#4B574A"
  >
    <v-icon :icon="page2"></v-icon>
  </v-btn>
  <button
    v-if="index == 3"
    :class="[css.buttonPageNumber_3, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
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
