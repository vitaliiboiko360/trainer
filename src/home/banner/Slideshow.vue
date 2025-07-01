<script setup>
import { nextTick, onMounted, onUpdated, ref, watch } from 'vue';
import Slide from './Slide.vue';
import SlideCircles from './SlideCircles.vue';
import Slide_2 from './Slide_2.vue';

const show1 = ref(false);
const activeSlide = ref(-1);
const isUpdated = ref(false);
const resetSlide = () => {
  show1.value = false;
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
});

onUpdated(() => {
  if (show1.value == false) {
    isUpdated.value = !isUpdated.value;
  }
});
</script>

<template>
  <Slide v-if="0" key="0" />
  <Slide_2 v-if="show1" key="1" />
  <SlideCircles :resetSlide :setActiveSlide />
</template>
