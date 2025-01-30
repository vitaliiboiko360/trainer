<script setup>
import { defineModel, defineProps } from 'vue';
const { text: textLine, fieldId } = defineProps(['text', 'fieldId']);
const start = defineModel('start');
const end = defineModel('end');
import AdminEditField from './AdminEditField.vue';
</script>

edit fields
<template>
  <div class="d-flex align-start" :class="$style.textEditLine">
    <AdminEditField
      :editStart="start"
      :editEnd="end"
      :fieldId
      class="flex-0-0-0"
    />
    <div>{{ textLine }}</div>
  </div>
</template>

<style module>
.textEditLine {
  margin-bottom: 4px;
}
</style>
