<script setup>
import LineSentence from './LineSentence.vue';
import * as css from './page.module.scss';

const { lines } = defineProps(['lines']);
</script>

<template>
  <LineSentence
    v-for="(textLine, index) in lines"
    :textLine="textLine"
    :index="index + 1"
  />
</template>
