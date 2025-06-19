<script setup>
import { ref } from 'vue';

const { colorPlace } = defineProps(['colorPlace']);
const { textToInsert } = defineProps(['textToInsert']);
const colors = ['#E0F2FD', '#D7F1F1', '#c4c0ff'];
const choosenColor = ref(
  colors[colorPlace ? colorPlace : ~~(Math.random() * colors.length)]
);
</script>

<template>
  <p :class="$style.initOpacity">
    <span :class="$style.wordSpan">{{ textToInsert }}</span>
  </p>
</template>

<style module>
.initOpacity {
  opacity: 0;
}
.wordSpan {
  background: linear-gradient(v-bind(choosenColor) 85%, transparent 0);
  border-radius: 2px;
  padding: 0 5px;
}
</style>
