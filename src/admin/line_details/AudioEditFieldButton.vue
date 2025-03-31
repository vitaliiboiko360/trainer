<script setup>
import { defineProps } from 'vue';
const { icon } = defineProps(['icon']);
</script>

<template>
  <v-btn :icon size="32" variant="plain"></v-btn>
</template>
