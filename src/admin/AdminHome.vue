<script setup>
import AdminListLessons from './AdminListLessons.vue';

import { useQuery } from '@tanstack/vue-query';

import { LIST_TEXT_JSON_KEY, queryListOfTextJson } from '../query/default';

const { isPending, isFetched, isError, data, error } = useQuery({
  queryKey: [LIST_TEXT_JSON_KEY],
  queryFn: () => queryListOfTextJson(),
});
</script>

<template>
  <p v-if="isError">{{ error }}</p>
  <p v-if="isPending">Getting lessons ...</p>
  <AdminListLessons v-if="isFetched" :listOfLessons="data" />
</template>
