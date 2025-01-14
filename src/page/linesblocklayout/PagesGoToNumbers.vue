<script setup>
import { defineProps, onMounted, ref } from 'vue';
import cssPage from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';
import PageNumber from './PageNumber.vue';
const refPageNumbersContainer = ref();
const { lastIndex } = defineProps(['lastIndex']);
onMounted(() => {
  new ResizeObserver(console.log).observe(refPageNumbersContainer.value);
});
</script>

<template>
  <div
    :ref="(el) => (refPageNumbersContainer = ref)"
    :class="[$style.divPageNumbers, cssPage.whiteSpaceNoWrap]"
  >
    <PageNumber
      v-for="pageNumber in lastIndex + 1"
      :index="pageNumber"
      :isActive="currentPageBlock == pageNumber - 1"
    />
  </div>
</template>

<style module>
.divPageNumbers {
  text-align: center;
  display: flex;
  align-items: center;
  gap: 1.7rem;
}
</style>
