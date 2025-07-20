<script setup>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
} from 'vue';
import Slide from './Slide.vue';
import SlideCircles from './SlideCircles.vue';
import Slide_2 from './Slide_2.vue';
import Slide_3 from './Slide_3.vue';

const isUpdated = ref(false);

import {
  show1,
  show2,
  show3,
  activeSlide,
  setActiveSlide,
  resetSlide,
} from './sliderState';

onMounted(() => {
  setTimeout(() => {
    show1.value = true;
  }, 1500);
});

watch([activeSlide, isUpdated], () => {
  if (activeSlide.value == -1) return;

  if (activeSlide.value == 1) {
    show1.value = true;
    show2.value = false;
    show3.value = false;
  }
  if (activeSlide.value == 2) {
    show2.value = true;
    show1.value = false;
    show3.value = false;
  }
  if (activeSlide.value == 3) {
    show3.value = true;
    show1.value = false;
    show2.value = false;
  }
});

onUpdated(() => {
  if (show1.value == false) {
    isUpdated.value = !isUpdated.value;
  }
});
onBeforeUnmount(() => {
  activeSlide.value = 1;
  show1.value = true;
  show2.value = false;
  show3.value = false;
});
</script>

<template>
  <Slide v-if="show1" key="0" />
  <Slide_2 v-if="show2" key="2" />
  <Slide_3 v-if="show3" key="3" />
  <SlideCircles
    :numberOfSlides="3"
    :resetSlide
    :setActiveSlide
    :activeAnimation="activeSlide"
  />
</template>
