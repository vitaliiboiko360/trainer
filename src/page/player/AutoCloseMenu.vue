<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const emit = defineEmits(['close']);

const refMenuContainer = ref();

const onClickCheckIfOutside = (event) => {
  if (refMenuContainer.value.contains(event.target) != true) {
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('click', onClickCheckIfOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickCheckIfOutside);
});
</script>

<template>
  <div :ref="(el) => (refMenuContainer = el)">
    <slot></slot>
  </div>
</template>

<style module></style>
