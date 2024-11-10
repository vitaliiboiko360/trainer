<script setup>
import LineSentence from './LineSentence.vue';
import * as css from './page.module.scss';
import Title from './Title.vue';
const { lines } = defineProps(['lines']);
const titleLine = lines[0].text;
const textLines = lines.slice(1);
</script>

<template>
  <Title :titleLine :index="0" />
  <LineSentence
    v-for="(textLine, index) in textLines"
    :textLine="textLine"
    :index="index + 1"
  />
</template>
