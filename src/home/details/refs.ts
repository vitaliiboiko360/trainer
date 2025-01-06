import { ref, reactive } from 'vue';

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
