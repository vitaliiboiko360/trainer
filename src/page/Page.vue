<script setup>
import { useQuery } from '@tanstack/vue-query';
import css from './page.module.scss';
import TextPage from './TextPage.vue';
import Audio from './audio/Audio.vue';

import { queryJson } from '../query/default';

const { id, resource } = defineProps(['id', 'resource']);
const url = `/api/lessons/${resource}`;

const { isPending, isError, data, error, isFetched } = useQuery({
  queryKey: [`lesson-${id}`],
  queryFn: () => queryJson(url),
});
</script>

<template>
  <Audio v-if="isFetched" :audioSource="data.audio" :timeData="data.lines" />
  <span v-if="isPending">Loading Page...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <div v-else :class="[css.divPage, $style.page]">
    <TextPage :data />
  </div>
</template>

<style module>
.page {
  background-color: aliceblue;
}
</style>
