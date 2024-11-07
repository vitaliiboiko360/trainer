<script setup>
import LinesLayout from './LinesLayout.vue';
import * as css from './page.module.scss';
const { data } = defineProps(['data']);
const { lines } = data;
</script>

<template>
  <div :class="css.divTextBlock">
    <LinesLayout :lines />
  </div>
</template>
