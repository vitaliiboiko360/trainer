<script setup>
import { defineProps } from 'vue';
import cssPage from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';
import PageNumber from './PageNumber.vue';

const { lastIndex } = defineProps(['lastIndex']);
</script>

<template>
  <div :class="[$style.divPageNumbers, cssPage.whiteSpaceNoWrap]">
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
  gap: 2.3rem;
}
</style>
