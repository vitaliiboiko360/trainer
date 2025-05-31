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
    <div :class="[$style.wrapper]">
      <TextPage :data />
    </div>
  </div>
</template>

<style module>
.page {
  background-color: rgba(240, 248, 255, 0.8);
  justify-self: center;
  width: fit-content;
  min-height: 100vh;
  margin: 0 100px;
}
.wrapper {
  margin: 0 -55px;
  backdrop-filter: blur(40px);
}
</style>
