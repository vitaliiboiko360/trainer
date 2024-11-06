<script setup>
import * as css from './home.module.scss';
import { useQuery } from '@tanstack/vue-query';

import LessonListItem from './LessonListItem.vue';

const { isPending, isError, data, error } = useQuery({
  queryKey: ['list'],
  queryFn: async () => {
    // TODO: make it default query function takes url as parameter
    const response = await fetch('/data/list_of_texts.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
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
