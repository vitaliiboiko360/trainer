<script setup>
import { ref } from 'vue';
import css from '../page.module.scss';
import { textView, TEXTVIEW_BUTTONS as buttons } from '../state/textView.ts';

const onClick = (value) => {
  textView.value = value;
  switch (value) {
    case buttons.LineOnTheirOwn:
      textOrdinaryClassList.value = textOrdinaryClassList.value.slice(0, 2);
      return textLineOnTheirOwnClassList.value.push(css.selectedButton);
    case buttons.TextOridnaryPage:
      textLineOnTheirOwnClassList.value =
        textLineOnTheirOwnClassList.value.slice(0, 2);
      return textOrdinaryClassList.value.push(css.selectedButton);
  }
};

let textLineOnTheirOwnClassList = ref([
  css.topBarGroupedButtonLeft,
  css.topBarButtonLineOnTheirOwn,
  css.selectedButton,
]);
let textOrdinaryClassList = ref([
  css.topBarGroupedButtonRight,
  css.topBarButton_TextOrdinary,
]);
</script>

<template>
  <button
    :class="textLineOnTheirOwnClassList"
    @click="() => onClick(buttons.LineOnTheirOwn)"
  ></button>
  <button
    :class="textOrdinaryClassList"
    @click="() => onClick(buttons.TextOridnaryPage)"
  ></button>
</template>
