<script setup>
const { index, isActive, colors } = defineProps([
  'index',
  'isActive',
  'colors',
]);
import { currentPageBlock } from '../state/currentPageBlock';
import PageNumberInnerColorway from './PageNumberInnerColorway.vue';

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
} from './pageNumberPaths';

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
    <PageNumberInnerColorway :isActive :colors />
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
    <PageNumberInnerColorway :isActive :colors />
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
    <PageNumberInnerColorway :isActive :colors />
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
    <PageNumberInnerColorway :isActive :colors />
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
    <PageNumberInnerColorway :isActive :colors />
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
    <PageNumberInnerColorway :isActive :colors />
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
    <PageNumberInnerColorway :isActive :colors />
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
    <PageNumberInnerColorway :isActive :colors />
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
</style>
