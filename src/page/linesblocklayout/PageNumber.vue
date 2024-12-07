<script setup>
import css from './linesblocklayout.module.scss';
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
</template>
