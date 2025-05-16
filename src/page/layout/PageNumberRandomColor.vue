<script setup>
import PageNumber from './PageNumber.vue';
const { index, isActive } = defineProps(['index', 'isActive']);

const COLORS = ['#f000a0', '#35acfc', '#00d0df', '#4b00fa', '#9cf000'];

const getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};
const getShufledArray = () => {
  const colors = [...COLORS];
  for (let i = colors.length; i > 0; i--) {
    let index = getRandomNumber(i);
    while (index == i) {
      index = getRandomNumber(i);
    }
    let temp = colors[index];
    colors[index] = colors[i];
    colors[i] = temp;
  }
  return colors;
};
</script>

<template>
  <PageNumber :index :isActive />
</template>

<style module>
.referenceColors {
  background: linear-gradient(
    -90deg,
    #35acfc,
    #4b00fa,
    #f000a0,
    #00d0df,
    #9cf000
  );
}
</style>
