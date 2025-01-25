<script setup>
// import {
//   VCard,
//   VToolbar,
//   VBtn,
//   VToolbarTitle,
//   VSpacer,
//   VList,
// } from 'vuetify/components';
import { defineProps } from 'vue';
const { listOfLessons } = defineProps(['listOfLessons']);

const items = [];

listOfLessons.texts.forEach((textElement) => {
  const item = { title: textElement.title };
  items.push(item);
  items.push({ type: 'divider', inset: true });
});
</script>

<template>
  <v-card class="mx-auto" max-width="450">
    <v-toolbar color="cyan-lighten-1">
      <v-btn icon="mdi-menu" variant="text"></v-btn>

      <v-toolbar-title>Inbox</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-magnify" variant="text"></v-btn>
    </v-toolbar>

    <v-list :items="items" lines="three" item-props>
      <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
      </template>
    </v-list>
  </v-card>
</template>
