<script setup>
import css from './linesblocklayout.module.scss';
import { defineProps } from 'vue';
const { index } = defineProps(['index']);
</script>

<template>
  <p v-if="index == 1" :class="css.pTagPageNumber_1"></p>
  <p v-if="index == 2" :class="css.pTagPageNumber_2"></p>
</template>
