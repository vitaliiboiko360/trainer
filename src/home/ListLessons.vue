<script setup>
import css from './home.module.scss';
import { useQuery } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';

import LessonListItem from './LessonListItem.vue';
import { queryJson } from '../query/default';

const router = useRouter();

const url = '/data/list_of_texts.json';
const { isPending, isError, data, error } = useQuery({
  queryKey: ['list'],
  queryFn: () => queryJson(url),
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
      <router-link :to="`/lesson-${index + 1}`">
        <div :class="[css.lessonListItem, css.fredokaFont]">
          <LessonListItem :title="item.title" />
        </div>
      </router-link>
    </div>
  </div>
</template>

//@click="() => router.push(`/lesson-${index + 1}`)"
