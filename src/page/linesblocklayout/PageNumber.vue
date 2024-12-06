<script setup>
import css from './linesblocklayout.module.scss';
import { defineProps } from 'vue';
const { index, isActive } = defineProps(['index', 'isActive']);
</script>

<template>
  <p
    v-if="index == 1"
    :class="[css.pTagPageNumber_1, isActive && css.pTagPageNumberSelected]"
  ></p>
  <p
    v-if="index == 2"
    :class="[css.pTagPageNumber_2, isActive && css.pTagPageNumberSelected]"
  ></p>
</template>
