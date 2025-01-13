<script setup>
import { useQuery } from '@tanstack/vue-query';

import { LIST_TEXT_JSON_KEY, queryListOfTextJson } from '../query/default';
import router from '../router/router';

import Page from './Page.vue';
import { computed } from 'vue';

const idToIndex = (id) => id - 1;

const { id, resource: resourceFromUrl } = defineProps(['id', 'resource']);

const enabled = computed(() => resourceFromUrl === undefined);

const { isPending, isError, data, error, isFetched } = useQuery({
  queryKey: [LIST_TEXT_JSON_KEY],
  queryFn: () => queryListOfTextJson(),
  enabled,
});
router.replace({ query: null });
</script>

<template>
  <Page v-if="resourceFromUrl" :id :resource="resourceFromUrl" />
  <Page
    v-else-if="isFetched"
    :id
    :resource="data.texts[idToIndex(id)].resource"
  />
  <span v-else-if="isPending">Loading PageEntryPoint...</span>
  <span v-else-if="isError">Error {{ error }}</span>
</template>
