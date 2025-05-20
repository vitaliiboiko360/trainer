<script setup>
const { numberOfSlides = 5 } = defineProps(['numberOfSlides']);
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.flexDiv">
      <div v-for="i in numberOfSlides" :class="$style.item" :key="i">
        <p>.</p>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: 0;
  top: 0;
}
.flexDiv {
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
}
.item {
  height: 10px;
  width: 10px;
  background-color: #808080c9;
}
</style>
