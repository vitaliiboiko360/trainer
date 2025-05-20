<script setup>
const { numberOfSlides = 5 } = defineProps(['numberOfSlides']);
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.flexDiv">
      <div v-for="i in numberOfSlides" :class="$style.item" :key="i">
        <p :class="$style.pInside">.</p>
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
.pInside {
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
}
</style>
