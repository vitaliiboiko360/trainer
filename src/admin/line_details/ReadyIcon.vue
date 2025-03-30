<script setup>
import {
  mdiCheckboxMarkedCircleOutline,
  mdiCheckboxBlankCircleOutline,
} from '@mdi/js';
const { isAudioReady } = defineProps(['isAudioReady']);
</script>

<template>
  <v-icon
    v-if="isAudioReady"
    size="24"
    color="success"
    :icon="mdiCheckboxMarkedCircleOutline"
  ></v-icon>
  <v-icon
    v-else
    size="24"
    color="info"
    :icon="mdiCheckboxBlankCircleOutline"
  ></v-icon>
  <span>&nbsp;&nbsp;</span>
</template>

<style module></style>
