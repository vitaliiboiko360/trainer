<script setup>
import { defineProps, onMounted, ref, computed } from 'vue';
import cssPage from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';
import PageNumber from './PageNumber.vue';
const refPageNumbersContainer = ref();
const { lastIndex } = defineProps(['lastIndex']);

const numberOfColumns = Math.floor(lastIndex / 2);
const COLORS = ['#f2ecf2', '#f2f2ec', '#ecf2f2', '#ecf2ec', '#eff2ec'];
function getColor() {
  return COLORS[~~Math.random(COLORS.length)];
}
onMounted(() => {});
</script>

<template>
  <div
    :ref="(el) => (refPageNumbersContainer = el)"
    :class="[lastIndex > 5 ? $style.gridTwoLines : $style.flexOneLiner]"
  >
    <PageNumber
      v-for="pageNumber in lastIndex + 1"
      :key="index"
      :index="pageNumber"
      :isActive="currentPageBlock == pageNumber - 1"
      :color="getColor()"
    />
  </div>
</template>

<style module>
.flexOneLiner {
  text-align: center;
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
}
.gridTwoLines {
  display: grid;
  grid-template-columns: repeat(v-bind(numberOfColumns), 2.5rem);
  grid-template-rows: repeat(2, 2.5rem);
  column-gap: 0.6rem;
  row-gap: 0rem;
  button:nth-child(even) {
    grid-row: 2;
    margin-left: 1.6rem;
  }
  button:nth-child(odd) {
    grid-row: 1;
  }
}
</style>
