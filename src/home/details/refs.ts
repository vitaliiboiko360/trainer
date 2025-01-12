import { ref, reactive } from 'vue';

export const REM_IN_PX = ref(14);
export const updateRemInPxValue = (value) => {
  REM_IN_PX.value = parseInt(
    window.getComputedStyle(document.documentElement).fontSize
  );
  return parseInt(window.getComputedStyle(document.documentElement).fontSize);
};

export const textBlock = ref(0);

export const textInside = ref(0);
export const onCompleteStartTextInside = () => {
  textInside.value++;
};

export const pointHand = ref(0);
export const onCompleteStartPointHand = () => {
  pointHand.value++;
};

export const frameBorder = ref(0);

export const hihglightTextInside = ref(0);
export const incrementHiglightTextInside = () => {
  hihglightTextInside.value++;
};

export const pointHandCoordinates = reactive({
  x: 0,
  y: 0,

  update(x: number, y: number) {
    this.x = x;
    this.y = y;
  },
});

export const refSvgCanvas = ref();
