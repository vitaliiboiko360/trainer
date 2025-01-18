<script setup>
import { ref } from 'vue';
import css from '../page.module.scss';
import { textView, TEXTVIEW_BUTTONS as buttons } from '../state/textView.ts';

const onClick = (value) => {
  textView.value = value;
  switch (value) {
    case buttons.LineMode:
      paragraphModeClassList.value = paragraphModeClassList.value.slice(0, 2);
      return lineModeClassList.value.push(css.selectedButton);
    case buttons.ParagraphMode:
      lineModeClassList.value = lineModeClassList.value.slice(0, 2);
      return paragraphModeClassList.value.push(css.selectedButton);
  }
};

let lineModeClassList = ref([
  css.topBarGroupedButtonLeft,
  css.topBarButtonLineOnTheirOwn,
  css.selectedButton,
]);
let paragraphModeClassList = ref([
  css.topBarGroupedButtonRight,
  css.topBarButton_TextOrdinary,
]);
</script>

<template>
  <button
    :class="lineModeClassList"
    @click="() => onClick(buttons.LineMode)"
  ></button>
  <button
    :class="paragraphModeClassList"
    @click="() => onClick(buttons.ParagraphMode)"
  ></button>
</template>
