<script setup>
import {
  VCard,
  VToolbar,
  VBtn,
  VToolbarTitle,
  VSpacer,
  VList,
} from 'vuetify/components';
import { defineProps } from 'vue';
const { listOfLessons } = defineProps(['listOfLessons']);

const items = [];

listOfLessons.texts.forEach((textElement) => {
  const item = { title: textElement.title, subtitle: '0%' };
  items.push(item);
  items.push({ type: 'divider' });
});
</script>

//min-width="450"
<template>
  <v-card class="mx-auto" max-width="760">
    <v-toolbar color="cyan-lighten-1">
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
      item-props
      class="mx-auto"
      max-width="560"
    >
      <template v-slot:subtitle="{ subtitle }">
        <div>{{ subtitle }}</div>
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
