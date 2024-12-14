<script setup>
import { defineProps } from 'vue';
import css from './linesblocklayout.module.scss';
import cssPage from '../page.module.scss';
import { currentPageBlock } from '../state/currentPageBlock';
import PageNumber from './PageNumber.vue';

const { lastIndex } = defineProps(['lastIndex']);
</script>

<template>
  <div :class="[css.divPageNumbers, cssPage.whiteSpaceNoWrap]">
    <PageNumber
      v-for="i in lastIndex + 1"
      :index="i"
      :isActive="currentPageBlock == i - 1"
    />
  </div>
</template>
