import { ref } from 'vue';

export const enum TEXTVIEW_BUTTONS {
  EachLineOnTheirOwn = 0,
  TextOridnaryPage,
}
export const textView = ref(TEXTVIEW_BUTTONS.EachLineOnTheirOwn);
