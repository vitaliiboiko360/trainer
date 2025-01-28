<script setup>
import { defineModel, defineProps } from 'vue';
const { text: textLine } = defineProps(['text']);
const start = defineModel('start');
const end = defineModel('end');
</script>

<template>
  <v-text-field
    v-model="start"
    density="compact"
    style="width: 80px"
    type="number"
    variant="outlined"
    hide-details
  ></v-text-field>
  <v-text-field
    v-model="end"
    density="compact"
    style="width: 80px"
    type="number"
    variant="outlined"
    hide-details
  ></v-text-field>
  <div>{{ textLine }}</div>
</template>
