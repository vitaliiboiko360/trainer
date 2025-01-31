<script setup>
import { defineProps } from 'vue';
import AdminEditFormLine from './AdminEditFormLine.vue';

const { data } = defineProps(['data']);
</script>

<template>
  <div class="my-6">
    <AdminEditFormLine
      v-for="(line, index) in data.lines"
      :start="line.start"
      :end="line.end"
      :text="line.text"
      :fieldId="index"
    />
  </div>
</template>
