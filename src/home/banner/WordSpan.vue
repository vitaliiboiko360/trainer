<script setup>
import { ref } from 'vue';

const { textToInsert } = defineProps(['textToInsert']);
const colors = ['#E0F2FD', '#D7F1F1', '#c4c0ff'];
const choosedColor = ref(colors[~~(Math.random() * colors.length)]);
</script>

<template>
  <span :class="$style.wordSpan">{{ textToInsert }}</span>
</template>

<style module>
.wordSpan {
  background: linear-gradient(v-bind(choosedColor) 85%, transparent 0);
  border-radius: 2px;
}
</style>
