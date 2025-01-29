<script setup>
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js';
import { defineModel, ref, defineProps, watch } from 'vue';
import { activeEditFieldId } from './refs';

const { fieldId } = defineProps(['fieldId']);

const edit = defineModel('edit');

const isFocused = ref();
const isEdited = ref();

const onFocused = () => {
  isFocused.value = true;
  activeEditFieldId.value = fieldId;
};

const onEdit = () => {
  isEdited.value = true;
};

watch(activeEditFieldId, () => {
  if (activeEditFieldId.value != fieldId) {
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
      v-model="edit"
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
