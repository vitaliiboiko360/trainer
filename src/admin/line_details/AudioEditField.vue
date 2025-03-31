<script setup>
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js';
import { defineModel, ref, defineProps, watch } from 'vue';
import { activeEditFieldId } from '../refs';
import AudioEditFieldButton from './AudioEditFieldButton.vue';

const { fieldId } = defineProps(['fieldId']);

const editStart = defineModel('editStart');
const editEnd = defineModel('editEnd');

const isFocusedStart = ref();
const isFocusedEnd = ref();

const onFocusedStart = () => {
  isFocusedStart.value = true;
  isFocusedEnd.value = false;
  activeEditFieldId.value = fieldId;
};

const onFocusedEnd = () => {
  isFocusedEnd.value = true;
  isFocusedStart.value = false;
  activeEditFieldId.value = fieldId;
};

const onEdit = () => {};

watch(activeEditFieldId, () => {
  if (activeEditFieldId.value != fieldId) {
    isFocusedStart.value = false;
    isFocusedEnd.value = false;
  }
});
</script>

<template>
  <div class="d-flex" :class="$style.outerEditTextLineContainer">
    <AudioEditFieldButton
      :icon="mdiMenuLeft"
      v-show="isFocusedStart"
      @click="onEdit"
    />
    <div
      v-show="!isFocusedStart"
      :class="$style.placeholderForEditButton"
    ></div>
    <v-text-field
      v-model="editStart"
      density="compact"
      type="number"
      variant="outlined"
      hide-details
      :class="[!isFocusedEnd && $style.inputNoBorder, $style.inputCustomStyle]"
      style="width: 50px"
      @click="onFocusedStart"
    >
    </v-text-field>
    <div
      v-show="!(isFocusedStart || isFocusedEnd)"
      :class="$style.placeholderForEditButtonMiddle"
    ></div>
    <AudioEditFieldButton
      :icon="mdiMenuRight"
      v-show="isFocusedStart"
      @click="onEdit"
    />
    <div
      v-show="isFocusedStart"
      :class="$style.placeholderForEditButtonAppendPrepend"
    ></div>
    <div
      v-show="isFocusedEnd"
      :class="$style.placeholderForEditButtonAppendPrepend"
    ></div>
    <AudioEditFieldButton
      :icon="mdiMenuLeft"
      v-show="isFocusedEnd"
      @click="onEdit"
    />
    <v-text-field
      v-model="editEnd"
      density="compact"
      type="number"
      variant="outlined"
      hide-details
      :class="[!isFocusedEnd && $style.inputNoBorder, $style.inputCustomStyle]"
      style="width: 50px"
      @click="onFocusedEnd"
    >
    </v-text-field>
    <div v-show="!isFocusedEnd" :class="$style.placeholderForEditButton"></div>
    <AudioEditFieldButton
      :icon="mdiMenuRight"
      v-show="isFocusedEnd"
      @click="onEdit"
    />
  </div>
</template>

<style module>
.outerEditTextLineContainer :global(.v-btn) {
  width: 32px;
  min-width: 32px;
  align-items: center;
}
.placeholderForEditButton {
  box-sizing: border-box;
  width: 32px;
}
.placeholderForEditButtonAppendPrepend {
  box-sizing: border-box;
  width: 4px;
}
.placeholderForEditButtonMiddle {
  box-sizing: border-box;
  width: 36px;
}
.inputNoBorder {
  div input {
    outline: 0px;
  }
}
.inputCustomStyle {
  div input {
    padding-inline: 4px 4px;
    padding: 4px;
    text-align: center;
    font-size: 1rem;
  }
}
</style>
