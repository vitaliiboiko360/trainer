<script setup>
import { useQuery } from '@tanstack/vue-query';
import Title from './Title.vue';

import { queryJson } from '../query/default';

const { id } = defineProps(['id']);

console.log(`id = ${id}`);

const url = '/data/mike_tiene_un_perro.json';
const { isPending, isError, data, error } = useQuery({
  queryKey: ['lesson'],
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
    <p>{{ JSON.stringify(data) }}</p>
  </div>
</template>
