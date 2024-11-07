<script setup>
import * as css from './page.module.scss';
const { titleLine } = defineProps(['titleLine']);
</script>

<template>
  <div :class="css.titleLine">
    <b>{{ titleLine }}</b>
  </div>
</template>
