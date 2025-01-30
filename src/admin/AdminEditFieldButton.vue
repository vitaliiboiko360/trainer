<script setup>
import { defineProps } from 'vue';
const { icon } = defineProps(['icon']);
</script>

<template>
  <v-btn :icon size="x-small" variant="plain"></v-btn>
</template>
