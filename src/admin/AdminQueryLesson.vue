<script setup>
import { useQuery } from '@tanstack/vue-query';
import Audio from '../page/audio/Audio.vue';
import { queryJson } from '../query/default';
import AdminLessonWithTranslations from './AdminLessonWithTranslations.vue';
const buttonSaveIsActive = defineModel('buttonSaveIsActive');
const buttonSaveFlushData = defineModel('buttonSaveFlushData');
const { id, resource } = defineProps(['id', 'resource']);
const url = `/api/lessons/${resource}`;
const urlTranslations = `/api/translations/${resource}`;

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
  <div>
    <Audio v-if="isFetched" :audioSource="data.audio" />
    <AdminLessonWithTranslations
      v-if="isFetched && isFetchedTranslations"
      :data
      :translations
      v-model:buttonSaveIsActive="buttonSaveIsActive"
      v-model:buttonSaveFlushData="buttonSaveFlushData"
    />
  </div>
</template>
