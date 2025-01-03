<script setup>
import { defineProps } from 'vue';
const { viewBox = '' } = defineProps(['viewBox']);
const xlmns = 'http://www.w3.org/2000/svg';
</script>

<template>
  <svg :xlmns :viewBox>
    <slot></slot>
  </svg>
</template>
