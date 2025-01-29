<script setup>
import { defineProps } from 'vue';
import AdminEditFormLine from './AdminEditFormLine.vue';

const { data } = defineProps(['data']);
</script>

<template>
  <div>
    <AdminEditFormLine
      v-for="(line, index) in data.lines"
      :start="line.start"
      :end="line.end"
      :text="line.text"
      :indexNumberLine="index"
    />
  </div>
</template>
