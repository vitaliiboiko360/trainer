<script setup>
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js';
import { defineModel, ref, defineProps, watch } from 'vue';
import { activeFieldIndex } from './refs';

const { indexNumberLine } = defineProps(['indexNumberLine']);

const start = defineModel('start');

const isFocused = ref();
const isEdited = ref();

const onFocused = () => {
  isFocused.value = true;
  activeFieldIndex.value = indexNumberLine;
};

const onEdit = () => {
  isEdited.value = true;
};

watch(activeFieldIndex, () => {
  if (activeFieldIndex.value != indexNumberLine) {
    isFocused.value = false;
  }
});
</script>

<template>
  <div class="d-flex">
    <v-btn
      v-show="isFocused"
      @click="onEdit"
      :icon="mdiMenuLeft"
      size="x-small"
      variant="plain"
    ></v-btn>
    <v-text-field
      v-model="start"
      density="compact"
      type="number"
      variant="outlined"
      hide-details
      style="width: 80px"
      @click="onFocused"
    >
    </v-text-field>
    <v-btn
      v-show="isFocused"
      @click="onEdit"
      :icon="mdiMenuRight"
      size="x-small"
      variant="plain"
    ></v-btn>
  </div>
</template>
