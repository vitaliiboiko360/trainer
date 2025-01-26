<script setup>
import { useQuery } from '@tanstack/vue-query';

import { queryJson } from '../query/default';

const { id, resource } = defineProps(['id', 'resource']);
const url = `/data/${resource}.json`;

const { isPending, isError, data, error, isFetched } = useQuery({
  queryKey: [`lesson-${id}`],
  queryFn: () => queryJson(url),
});
</script>

<template>
  <div v-if="isFetched">{{ data }}</div>
</template>
