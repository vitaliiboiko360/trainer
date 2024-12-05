<script setup>
import { watch } from 'vue';
import LineSentence from './LineSentence.vue';
import { textView } from './state/textView';
import LinesBlockLayout from './LinesBlockLayout.vue';
import { TEXTVIEW_BUTTONS as buttons } from './state/textView';

const { lines } = defineProps(['lines']);

watch(textView, () => {
  console.log(`textView= ${textView.value}`);
});
</script>

<template>
  <LinesBlockLayout v-if="textView == buttons.TextByBlock" :lines />
  <LineSentence
    v-if="textView == buttons.TextOridnaryPage"
    v-for="(textLine, index) in lines"
    :textLine="textLine"
    :index="index + 1"
  />
</template>
