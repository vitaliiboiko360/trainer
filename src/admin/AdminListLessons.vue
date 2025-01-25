<script setup>
import {
  VCard,
  VToolbar,
  VToolbarTitle,
  VSpacer,
  VList,
} from 'vuetify/components';
import { defineProps } from 'vue';
const { listOfLessons } = defineProps(['listOfLessons']);

const toLessonId = (index) => index + 1;
const items = [];

listOfLessons.texts.forEach((textElement, index) => {
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
  items.push({ type: 'divider' });
});
</script>

//min-width="450"
<template>
  <v-card class="mx-auto" max-width="760">
    <v-toolbar color="blue-lighten-3">
      <v-toolbar-title
        :class="$style.centerToolbar"
        class="mx-lg-auto"
        width="560px"
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
</template>

<style module>
.centerToolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
