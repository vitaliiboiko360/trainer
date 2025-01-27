<script setup>
import { defineProps } from 'vue';

const { data } = defineProps(['data']);
</script>

<template>
  <div>{{ data }}</div>
</template>
