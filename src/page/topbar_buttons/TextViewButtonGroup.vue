<script setup>
import { watch, ref } from 'vue';
import * as css from '../page.module.scss';
import { clsx } from 'clsx';
import { textView, TEXTVIEW_BUTTONS as buttons } from '../state/textView.ts';

const onClick = (value) => {
  textView.value = value;
};

let textByBlockClassList = ref([
  css.topBarGroupedButtonLeft,
  css.topBarButtonTextByBlocks,
  css.selectedButton,
]);
let textOrdinaryClassList = ref([
  css.topBarGroupedButtonRight,
  css.topBarButtonTextOrdinary,
]);
watch(textView, () => {
  console.log(`textView= ${textView.value}`);
  switch (textView.value) {
    case buttons.TextByBlock:
      textOrdinaryClassList.value = textOrdinaryClassList.value.slice(0, 2);
      return textByBlockClassList.value.push(css.selectedButton);
    case buttons.TextOridnaryPage:
      textByBlockClassList.value = textByBlockClassList.value.slice(0, 2);
      return textOrdinaryClassList.value.push(css.selectedButton);
  }
});
</script>

<template>
  <button
    :class="clsx(textByBlockClassList)"
    @click="() => onClick(buttons.TextByBlock)"
  ></button>
  <button
    :class="clsx(textOrdinaryClassList)"
    @click="() => onClick(buttons.TextOridnaryPage)"
  ></button>
</template>
