<script setup>
import { nextTick, ref } from 'vue';
import css from '../page.module.scss';
import { textView, TEXTVIEW_BUTTONS as buttons } from '../state/textView.ts';

const onClick = (value) => {
  textView.value = value;
  nextTick();
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
    :class="[lineModeClassList, $style.topbarButtonBaseLeft]"
    @click="() => onClick(buttons.LineMode)"
  ></button>
  <button
    :class="[paragraphModeClassList, $style.topbarButtonBaseRight]"
    @click="() => onClick(buttons.ParagraphMode)"
  ></button>
</template>

<style module>
.topbarButtonBaseLeft {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.topbarButtonBaseRight {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
