import { ref } from 'vue';

export const textBlock = ref(0);

export const textInside = ref(0);
export const onCompleteStartTextInside = () => {
  textInside.value = 1;
};

export const frameBorder = ref(0);
