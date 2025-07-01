<script setup>
import { nextTick, onMounted, onUpdated, ref, watch } from 'vue';
import Slide from './Slide.vue';
import SlideCircles from './SlideCircles.vue';
import Slide_2 from './Slide_2.vue';
import Slide_3 from './Slide_3.vue';

const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const activeSlide = ref(-1);
const isUpdated = ref(false);
const resetSlide = () => {
  show1.value = false;
  show2.value = false;
  show3.value = false;
};
const setActiveSlide = (index) => {
  nextTick();
  activeSlide.value = index;
};

onMounted(() => {
  setTimeout(() => {
    show1.value = true;
  }, 1500);
});

watch([activeSlide, isUpdated], () => {
  if (activeSlide.value == -1) return;

  if (activeSlide.value == 1) {
    show1.value = true;
  }
  if (activeSlide.value == 2) {
    show2.value = true;
  }
  if (activeSlide.value == 3) {
    show3.value = true;
  }
});

onUpdated(() => {
  if (show1.value == false) {
    isUpdated.value = !isUpdated.value;
  }
});
</script>

<template>
  <Slide v-if="show1" key="0" />
  <Slide_2 v-if="show2" key="2" />
  <Slide_3 v-if="show3" key="3" />
  <SlideCircles :numberOfSlides="3" :resetSlide :setActiveSlide />
</template>
