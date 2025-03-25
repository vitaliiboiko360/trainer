<script setup>
import { onMounted, ref } from 'vue';
import Slide from './Slide.vue';
import gsap from 'gsap';

const show1 = ref(false);

onMounted(() => {
  setTimeout(() => {
    console.log(`test`);
    show1.value = true;
  }, 1500);
});
</script>

<template>
  <Slide v-if="show1" />
</template>
