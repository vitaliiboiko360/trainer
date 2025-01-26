<script setup>
import { defineProps } from 'vue';
const { resource, id } = defineProps(['resource', 'id']);
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row justify="center" no-gutters>
      <v-col align-self="center" cols="auto">
        <v-sheet :elevation="9" :width="960" border :border-radius="20">
          <AdminEditLessonForm :resource :id />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
