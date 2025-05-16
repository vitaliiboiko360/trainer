<script setup>
import { ref } from 'vue';
import PageNumber from './PageNumber.vue';
const { index, isActive } = defineProps(['index', 'isActive']);

const COLORS = ['#f000a0', '#35acfc', '#00d0df', '#4b00fa', '#9cf000'];

const getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};
function getShufledArray() {
  console.log('test propsssss');
  const colors = [...COLORS];
  for (let i = colors.length - 1; i >= 0; i--) {
    let index = getRandomNumber(i);
    let temp = colors[index];
    colors[index] = colors[i];
    colors[i] = temp;
  }
  console.log(colors.join(' '));
  return colors;
}
const colors = ref(getShufledArray());
</script>

<template>
  <PageNumber :index :isActive :colors />
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
