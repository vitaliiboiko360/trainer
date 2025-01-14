<script setup>
import { defineProps, onMounted, ref } from 'vue';
import cssPage from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';
import PageNumber from './PageNumber.vue';
const refPageNumbersContainer = ref();
const { lastIndex } = defineProps(['lastIndex']);

onMounted(() => {
  console.log(`window.innerWidth == ${window.innerWidth}`);
});
</script>

<template>
  <div
    :ref="(el) => (refPageNumbersContainer = el)"
    :class="[$style.flexOneLiner]"
  >
    <PageNumber
      v-for="pageNumber in lastIndex + 1"
      :index="pageNumber"
      :isActive="currentPageBlock == pageNumber - 1"
    />
  </div>
</template>

<style module>
.flexOneLiner {
  text-align: center;
  display: flex;
  align-items: center;
  gap: 1.7rem;
  white-space: nowrap;
}
.gridTwoLines {
  display: grid;
  span:nth-child(4n + 3) {
    grid-column: 2;
  }
  span:nth-child(4n + 4) {
    grid-column: 1;
  }
}
</style>
