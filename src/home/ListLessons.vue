<script setup>
import { useQuery } from '@tanstack/vue-query';

const { isPending, isError, data, error } = useQuery({
  queryKey: ['list'],
  queryFn: async () => {
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
  <!-- We can assume by this point that `isSuccess === true` -->
  <div v-else>
    <p v-for="item in data.texts" :key="getKey">{{ item.title }}</p>
  </div>
</template>
