<script setup>
import AdminQueryLesson from './AdminQueryLesson.vue';
import { defineProps } from 'vue';
const { resource, id } = defineProps(['resource', 'id']);
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row justify="center" no-gutters>
      <v-col align-self="center" cols="auto">
        <v-sheet :elevation="9" border rounded>
          <v-toolbar title="Edit Lesson"></v-toolbar>
          <AdminQueryLesson :resource :id />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
