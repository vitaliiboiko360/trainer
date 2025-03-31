<script setup>
import { useQuery } from '@tanstack/vue-query';
import Audio from '../page/audio/Audio.vue';
import { queryJson } from '../query/default';
import AdminLessonWithTranslations from './AdminLessonWithTranslations.vue';

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
</script>

<template>
  <Audio v-if="isFetched" :audioSource="`../../../data/${data.audio}`" />
  <AdminLessonWithTranslations
    v-if="isFetched && isFetchedTranslations"
    :data
    :translations
  />
</template>
