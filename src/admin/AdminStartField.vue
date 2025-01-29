<script setup>
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js';
import { defineModel, ref } from 'vue';
const start = defineModel('start');

const isFocused = ref();

const onFocused = (focused) => {
  isFocused.value = focused;
};
</script>

<template>
  <v-text-field
    v-model="start"
    density="compact"
    type="number"
    variant="outlined"
    hide-details
    style="width: 80px"
    @update:focused="onFocused"
    ><template v-slot:append>
      <v-btn v-if="isFocused" :icon="mdiMenuRight"></v-btn>
    </template>
    <template v-slot:prepend>
      <v-btn v-if="isFocused" :icon="mdiMenuLeft"></v-btn>
    </template>
  </v-text-field>
</template>
