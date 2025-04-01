<script setup>
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js';
import { defineModel, ref, defineProps, watch, computed } from 'vue';
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

const getRoundedValue = (value) => parseFloat(Math.fround(value).toFixed(2));

const increaseStart = () => {
  editStart.value = getRoundedValue(editStart.value + 0.1);
};
const decreaseStart = () => {
  editStart.value = getRoundedValue(editStart.value - 0.1);
};

const increaseEnd = () => {
  editEnd.value = getRoundedValue(editEnd.value + 0.1);
};
const decreaseEnd = () => {
  editEnd.value = getRoundedValue(editEnd.value - 0.1);
};

let increasingIntervalStart;
const startIncreasingStart = computed(() => {
  increasingIntervalStart = setInterval(increaseStart, 100);
});
const stopIncreasingStart = computed(() => {
  clearInterval(increasingIntervalStart);
});

let decreasingIntervalStart;
const startDecreasingStart = computed(() => {
  decreasingIntervalStart = setInterval(decreaseStart, 100);
});
const stopDecreasingStart = computed(() => {
  clearInterval(decreasingIntervalStart);
});

let increasingIntervalEnd;
const startIncreasingEnd = computed(() => {
  increasingIntervalEnd = setInterval(increaseEnd, 100);
});
const stopIncreasingEnd = computed(() => {
  clearInterval(increasingIntervalEnd);
});

let decreasingIntervalEnd;
const startDecreasingEnd = computed(() => {
  decreasingIntervalEnd = setInterval(decreaseEnd, 100);
});
const stopDecreasingEnd = computed(() => {
  clearInterval(decreasingIntervalEnd);
});

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
      @click="decreaseStart"
      @mousedown="() => startDecreasingStart"
      @mouseup="() => stopDecreasingStart"
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
      @click="increaseStart"
      @mousedown="() => startIncreasingStart"
      @mouseup="() => stopIncreasingStart"
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
      @click="decreaseEnd"
      @mousedown="() => startDecreasingEnd"
      @mouseup="() => stopDecreasingEnd"
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
      @click="increaseEnd"
      @mousedown="() => startIncreasingEnd"
      @mouseup="() => stopIncreasingEnd"
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
