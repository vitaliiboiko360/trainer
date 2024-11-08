<script setup>
import LineSentence from './LineSentence.vue';
import * as css from './page.module.scss';
import Title from './Title.vue';
const { lines } = defineProps(['lines']);
const titleLine = lines[0].text;
const textLines = lines.slice(1);
</script>

<template>
  <Title :titleLine />
  <LineSentence v-for="textLine in textLines" :textLine="textLine" />
</template>
