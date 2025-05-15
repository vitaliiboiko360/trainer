<script setup>
import { defineProps, onMounted, ref, computed } from 'vue';
import cssPage from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';
import PageNumber from './PageNumber.vue';
const refPageNumbersContainer = ref();
const { lastIndex } = defineProps(['lastIndex']);

const numberOfColumns = Math.floor(lastIndex / 2);
const COLORS = ['#dcdaea', '#daeadc', '#e8eada', '#ede6f7', '#eff2ec'];
function getColor(index) {
  return index == undefined
    ? COLORS[~~Math.random(COLORS.length)]
    : COLORS[index % COLORS.length];
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
      :key="pageNumber"
      :index="pageNumber"
      :isActive="currentPageBlock == pageNumber - 1"
      :color1="COLORS[pageNumber % COLORS.length]"
      :color2="COLORS[(pageNumber + 1) % COLORS.length]"
      :color3="COLORS[(pageNumber + 2) % COLORS.length]"
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
