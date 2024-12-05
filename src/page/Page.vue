<script setup>
import { useQuery } from '@tanstack/vue-query';
import * as css from './page.module.scss';
import TextPage from './TextPage.vue';
import Audio from './audio/Audio.vue';

import { queryJson } from '../query/default';

const { id } = defineProps(['id']);

const url = '/data/mike_tiene_un_perro.json';

const { isPending, isError, data, error, isFetched } = useQuery({
  queryKey: [`lesson-${id}`],
  queryFn: () => queryJson(url),
});
</script>

<template>
  <Audio v-if="isFetched" :audioSource="data.audio" />
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <div v-else :class="css.divPage">
    <TextPage :data />
  </div>
</template>
