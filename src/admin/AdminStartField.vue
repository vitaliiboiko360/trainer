<script setup>
import { mdiMenuLeft } from '@mdi/js';
import { defineModel } from 'vue';
const start = defineModel('start');
</script>

//style="width: 80px"
<template>
  <v-text-field
    v-model="start"
    density="compact"
    type="number"
    variant="outlined"
    hide-details
    ><template v-slot:append>
      <v-btn :icon="mdiMenuLeft"></v-btn>
    </template>
  </v-text-field>
</template>
