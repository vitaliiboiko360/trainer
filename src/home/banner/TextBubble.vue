<script setup>
import { onMounted, getCurrentInstance } from 'vue';

const textMessages = [
  'Este estudiante tiene un libro',
  'Él también tiene una pluma',
  'Es domingo por la mañana',
];

const createWordElement = (textToInsert, targetToInsertTo) => {
  const pElement = document.createElement('span');
  pElement.style.opacity = '0';
  pElement.textContent = textToInsert;
  targetToInsertTo.value.append(pElement);
  return pElement;
};

onMounted(() => {
  const instance = getCurrentInstance();
  console.log(instance.vnode.el.parentNode);
});
</script>

<template></template>

<style module></style>
