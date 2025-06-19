<script setup>
import { onMounted, ref } from 'vue';
import Slide from './Slide.vue';
import SlideCircles from './SlideCircles.vue';

const show1 = ref(false);

onMounted(() => {
  setTimeout(() => {
    show1.value = true;
  }, 1500);
});
</script>

<template>
  <Slide v-if="show1" />
  <SlideCircles />
</template>
