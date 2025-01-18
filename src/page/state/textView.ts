import { ref } from 'vue';

export const enum TEXTVIEW_BUTTONS {
  LineMode = 0,
  ParagraphMode,
}
export const textView = ref(TEXTVIEW_BUTTONS.LineMode);
