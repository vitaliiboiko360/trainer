<script setup>
import * as css from './home.module.scss';
import { useQuery } from '@tanstack/vue-query';

import LessonListItem from './LessonListItem.vue';
import { queryJson } from '../query/default';

const url = '/data/list_of_texts.json';
const { isPending, isError, data, error } = useQuery({
  queryKey: ['list'],
  queryFn: (_) => queryJson(url),
});

let counter = 0;
const getKey = () => {
  return `lesson-item-key-${counter++}`;
};
</script>

<template>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <div v-else>
    <div
      v-for="item in data.texts"
      :key="getKey"
      :class="[css.lessonListItem, css.fredokaFont]"
    >
      <LessonListItem :title="item.title" />
    </div>
  </div>
</template>
