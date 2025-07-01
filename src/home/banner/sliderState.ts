import { nextTick, ref } from 'vue';
export const show1 = ref(false);
export const show2 = ref(false);
export const show3 = ref(false);
export const resetSlide = () => {
  show1.value = false;
  show2.value = false;
  show3.value = false;
};
export const activeSlide = ref(1);
export const setActiveSlide = (index) => {
  nextTick();
  activeSlide.value = index;
};
