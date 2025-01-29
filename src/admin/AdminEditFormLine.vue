<script setup>
import { defineModel, defineProps } from 'vue';
const { text: textLine, indexNumberLine } = defineProps([
  'text',
  'indexNumberLine',
]);
const start = defineModel('start');
const end = defineModel('end');
import AdminStartField from './AdminStartField.vue';
</script>

<template>
  <div class="d-flex">
    <AdminStartField :start :indexNumberLine class="flex-0-1" />
    <v-text-field
      class="flex-0-1"
      v-model="end"
      density="compact"
      style="width: 80px"
      type="number"
      variant="outlined"
      hide-details
    ></v-text-field>
    <div>{{ textLine }}</div>
  </div>
</template>
