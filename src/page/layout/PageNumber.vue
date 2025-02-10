<script setup>
import css from './layout.module.scss';
import { defineProps } from 'vue';
const { index, isActive } = defineProps(['index', 'isActive']);
import { currentPageBlock } from '../state/currentPageBlock';

const onClick = (setNewIndex) => {
  currentPageBlock.value = setNewIndex;
};
</script>

<template>
  <button
    v-if="index == 1"
    :class="[css.buttonPageNumber_1, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
  <button
    v-if="index == 2"
    :class="[css.buttonPageNumber_2, isActive && css.buttonPageNumberSelected]"
    @click="() => onClick(index - 1)"
  ></button>
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
