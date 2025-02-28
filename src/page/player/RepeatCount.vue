<script setup>
import { ref } from 'vue';

const icon =
  'M 15.6 8 v 1.759 a 0.3 0.3 90 0 0 0.492 0.23 l 2.832 -2.359 a 0.3 0.3 90 0 0 0 -0.461 l -2.832 -2.359 a 0.3 0.3 90 0 0 -0.492 0.23 V 6.8 H 8.4 a 6 6 90 0 0 -5.376 8.668 a 0.6 0.6 90 0 0 1.075 -0.535 A 4.8 4.8 90 0 1 8.4 8 z m 5.376 2.132 a 0.6 0.6 90 0 0 -1.075 0.535 A 4.8 4.8 90 0 1 15.6 17.6 H 8.401 v -1.759 a 0.3 0.3 90 0 0 -0.492 -0.23 l -2.832 2.359 a 0.3 0.3 90 0 0 0 0.461 l 2.832 2.359 a 0.3 0.3 90 0 0 0.492 -0.23 V 18.8 h 7.2 a 6 6 90 0 0 5.376 -8.668 Z M 13.2 9.8 a 0.6 0.6 90 0 0 -1.025 -0.425 l -2.1 2.1 a 0.6 0.6 90 1 0 0.85 0.85 L 12 11.248 V 15.8 a 0.6 0.6 90 0 0 1.2 0 z';

const repeatCount = ref(1);
const onClick = () => {
  repeatCount.value = repeatCount.value;
};
</script>

<template>
  <div>
    <v-btn rounded="lg" size="55" @click="onClick"
      ><v-icon size="45" :icon="icon"
    /></v-btn>
  </div>
</template>
