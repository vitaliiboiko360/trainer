<script setup>
import { nextTick, ref } from 'vue';
import css from '../page.module.scss';
import { textView, TEXTVIEW_BUTTONS as buttons } from '../state/textView.ts';

const textMode = ref(buttons.LineMode);

const onClick = (value) => {
  textView.value = value;
  if (value == buttons.LineMode) {
    textMode.value = buttons.LineMode;
  } else if (value == buttons.ParagraphMode) {
    textMode.value = buttons.ParagraphMode;
  }
};
</script>

<template>
  <button
    :class="[
      { [$style.selectedButton]: textMode == buttons.LineMode },
      $style.topbarButtonBaseLeft,
      css.topBarGroupedButtonLeft,
      css.topBarButtonLineOnTheirOwn,
    ]"
    @click="() => onClick(buttons.LineMode)"
  ></button>
  <button
    :class="[
      { [$style.selectedButton]: textMode == buttons.ParagraphMode },
      $style.topbarButtonBaseRight,
      css.topBarGroupedButtonRight,
      css.topBarButton_TextOrdinary,
    ]"
    @click="() => onClick(buttons.ParagraphMode)"
  ></button>
</template>

<style module>
.selectedButton {
  &:before {
    background-color: #eee;
  }
}
.topbarButtonBaseLeft {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.topbarButtonBaseRight {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
