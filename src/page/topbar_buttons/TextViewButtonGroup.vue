<script setup>
import { ref } from 'vue';
import css from '../page.module.scss';
import { textView, TEXTVIEW_BUTTONS as buttons } from '../state/textView.ts';

const onClick = (value) => {
  textView.value = value;
  switch (value) {
    case buttons.TextByBlock:
      textOrdinaryClassList.value = textOrdinaryClassList.value.slice(0, 2);
      return textByBlockClassList.value.push(css.selectedButton);
    case buttons.TextOridnaryPage:
      textByBlockClassList.value = textByBlockClassList.value.slice(0, 2);
      return textOrdinaryClassList.value.push(css.selectedButton);
  }
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
</script>

<template>
  <button
    :class="textByBlockClassList"
    @click="() => onClick(buttons.TextByBlock)"
  ></button>
  <button
    :class="textOrdinaryClassList"
    @click="() => onClick(buttons.TextOridnaryPage)"
  ></button>
</template>
