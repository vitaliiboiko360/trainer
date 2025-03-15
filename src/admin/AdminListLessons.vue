<script setup>
import {
  VCard,
  VToolbar,
  VToolbarTitle,
  VSpacer,
  VList,
} from 'vuetify/components';
import { mdiPlaylistEdit } from '@mdi/js';
import { defineProps } from 'vue';
const { listOfLessons } = defineProps(['listOfLessons']);

const toLessonId = (index) => index + 1;
const items = [];

listOfLessons.texts.forEach((textElement, index, array) => {
  const item = {
    title: textElement.title,
    subtitle: '0%',
    props: { lessonId: toLessonId(index), resourceName: textElement.resource },
    to: {
      path: `/admin/edit/lesson-${toLessonId(index)}`,
      query: { resource: textElement.resource },
    },
  };
  items.push(item);
  if (index != array.length - 1) {
    items.push({ type: 'divider' });
  }
});
</script>

//min-width="450"
<template>
  <v-container :class="[`bg-surface-variant`, $style.container]">
    <v-card class="mx-auto" max-width="760">
      <v-toolbar>
        <v-spacer></v-spacer>
        <v-icon :icon="mdiPlaylistEdit"></v-icon>
        <v-toolbar-title :class="$style.centerToolbar" class="mx-lg-auto"
          >List of Lessons</v-toolbar-title
        >
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-list
        :items="items"
        lines="three"
        class="mx-auto"
        max-width="560"
        item-props
      >
        <template v-slot:title="{ title }">
          <div>{{ title }}</div>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<style module>
.centerToolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  &::before {
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    top: -10px;
    bottom: -10px;
    backdrop-filter: blur(2px);
  }
}
</style>
