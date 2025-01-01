<script setup>
import { defineProps } from 'vue';
const { viewBox = '' } = defineProps(['viewBox']);
</script>

<template>
  <svg :xlmns="`http://www.w3.org/2000/svg`" :viewBox>
    <slot></slot>
  </svg>
</template>
