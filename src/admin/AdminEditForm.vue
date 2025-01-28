<script setup>
import { defineProps } from 'vue';
import AdminEditFormLine from './AdminEditFormLine.vue';

const { data } = defineProps(['data']);
</script>

<template>
  <AdminEditFormLine
    v-for="line in data.lines"
    :start="line.start"
    :end="line.end"
    :text="line.text"
  />
</template>
