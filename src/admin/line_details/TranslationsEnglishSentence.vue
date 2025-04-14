<script setup>
import { onMounted, ref } from 'vue';

const sentence = defineProps(['sentence']);
const refDiv = ref();

let previousTop = 0;

const onWheel = (event) => {
  if (event.deltaY > 0) {
    const { top } = refDiv.value.getBoundingClientRect();
    if (top > 0 && Math.abs(top - previousTop) > 50) {
      console.log(`top is = ${top}`);
      previousTop = top;
    }

    //(window.innerHeight || document.documentElement.clientHeight);
  }
};

onMounted(() => {
  document.addEventListener('wheel', onWheel);
});
</script>

<template>
  <div :class="$style.transSentence" :ref="(el) => (refDiv = el)">
    {{ sentence.sentence }}
  </div>
</template>

<style module>
.transSentence {
  margin: 15px 0;
  top: 0px;
  position: sticky;
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  display: inline-flex;
  fill: currentcolor;
  font-weight: 500;
  min-height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}
</style>
