<script setup>
import { defineModel, defineProps } from 'vue';
const { text: textLine, indexNumberLine } = defineProps([
  'text',
  'indexNumberLine',
]);
const start = defineModel('start');
const end = defineModel('end');
import AdminEditField from './AdminEditField.vue';
</script>

<template>
  <div class="d-flex align-start">
    <AdminEditField :edit="start" :indexNumberLine class="flex-0-0-0" />
    <AdminEditField
      :edit="end"
      :indexNumberLine="indexNumberLine + 100"
      class="flex-0-0-0"
    />
    <div>{{ textLine }}</div>
  </div>
</template>
