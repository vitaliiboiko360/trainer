<script setup>
import css from './home.module.scss';
import { useQuery } from '@tanstack/vue-query';

import LessonListItem from './LessonListItem.vue';
import { LIST_TEXT_JSON_KEY, queryListOfTextJson } from '../query/default';

const toLessonId = (index) => index + 1;

const { isPending, isError, data, error } = useQuery({
  queryKey: [LIST_TEXT_JSON_KEY],
  queryFn: () => queryListOfTextJson(),
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
    <div v-for="(item, index) in data.texts" :key="getKey">
      <router-link
        :to="{
          path: `/lesson-${toLessonId(index)}`,
          query: { resource: item.resource },
        }"
      >
        <div :class="[css.lessonListItem, css.fredokaFont]">
          <LessonListItem :title="item.title" />
        </div>
      </router-link>
    </div>
  </div>
</template>
