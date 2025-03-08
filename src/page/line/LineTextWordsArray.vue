<script setup>
const { textLine } = defineProps(['textLine']);
</script>

<template>
  <div
    v-for="(word, index) of textLine.split(' ')"
    :key="index"
    :class="$style.lineWrap"
  >
    <span>{{ `${word} ` }} </span>
    <div :class="$style.underLine"></div>
  </div>
</template>

<style module>
.lineWrap {
  display: inline-block;
  white-space: pre;
}
.underLine {
  height: 4px;
  box-sizing: border-box;
  background-color: #0178d5;
  clip-path: path(
    'M0 1.5a1.5 1.5 90 011.5-1.5h30a1 1 90 010 3h-30A1.5 1.5 90 010 1.5z'
  );
}
</style>
