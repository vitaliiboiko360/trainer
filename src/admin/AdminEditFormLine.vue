<script setup>
import { defineModel, defineProps } from 'vue';
const { text: textLine, fieldId } = defineProps(['text', 'fieldId']);
const start = defineModel('start');
const end = defineModel('end');
import AdminEditField from './AdminEditField.vue';
</script>

// TODO: replace '100' to some sensible number to distinct between start and end
edit fields
<template>
  <div class="d-flex align-start">
    <AdminEditField :edit="start" :fieldId class="flex-0-0-0" />
    <AdminEditField :edit="end" :fieldId="fieldId + 100" class="flex-0-0-0" />
    <div>{{ textLine }}</div>
  </div>
</template>
