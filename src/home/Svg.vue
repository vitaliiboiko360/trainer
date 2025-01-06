<script setup>
import { defineProps } from 'vue';
import { xmlnsSvg as xmlns } from './details/etc';
const { viewBox } = defineProps(['viewBox']);
</script>

<template>
  <svg :xmlns :viewBox>
    <slot></slot>
  </svg>
</template>
