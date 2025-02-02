<script setup>
import { useQuery } from '@tanstack/vue-query';
import { watch } from 'vue';
import { queryJson } from '../query/default';
import AdminLessonWithTrans_New from './AdminLessonWithTrans_New.vue';

const { id, resource } = defineProps(['id', 'resource']);
const url = `/data/${resource}.json`;
const urlTranslations = `/data/tr/${resource}.json`;

const { isPending, isError, data, error, isFetched } = useQuery({
  queryKey: [`lesson-${id}`],
  queryFn: () => queryJson(url),
});

const { isFetched: isFetchedTranslations, data: translations } = useQuery({
  queryKey: [`translations-${id}`],
  queryFn: () => queryJson(urlTranslations),
});

watch(isFetchedTranslations, () => {
  console.log('fetched translations ', translations.value.translations.length);
});
</script>

<template>
  <AdminLessonWithTrans_New
    v-if="isFetched && isFetchedTranslations"
    :data
    :translations
  />
</template>
