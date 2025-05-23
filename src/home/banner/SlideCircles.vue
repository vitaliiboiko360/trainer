<script setup>
const { numberOfSlides = 5 } = defineProps(['numberOfSlides']);
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.flexDiv">
      <div
        v-for="i in numberOfSlides"
        :class="[
          { [$style.sectorCircle]: i == 1 },
          { [$style.sectorCircleLeft]: i == 1 },
          $style.item,
        ]"
        :key="i"
      >
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
  bottom: 8px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.item {
  height: 12px;
  width: 12px;
  background-color: #d7d9e8;
  border-radius: 50%;
  cursor: pointer;
}
.pInside {
  color: #ececec;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
}
/* 10% = 126deg = 90 + ( 360 * .1 ) */

@keyframes sectors {
  0% {
    background-image: linear-gradient(0deg, transparent 50%, white 50%),
      linear-gradient(0deg, white 50%, transparent 50%);
  }
  50% {
    background-image: linear-gradient(180deg, transparent 50%, white 50%),
      linear-gradient(0deg, white 50%, transparent 50%);
  }
  /* 50% {
    background-image: linear-gradient(270deg, transparent 50%, white 50%);
  }
  75% {
    background-image: linear-gradient(360deg, transparent 50%, white 50%);
  } */
}
@keyframes semiCircleRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.sectorCircle {
  /* /* background-image: linear-gradient(126deg, transparent 50%, white 50%),
    linear-gradient(90deg, white 50%, transparent 50%); */
  display: block;
}
.sectorCircle::before {
  content: '';
  display: block;
  background-image: linear-gradient(90deg, transparent 50%, white 50%);
  animation: 5s linear infinite semiCircleRotate;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.sectorCircleLeft {
  background-image: linear-gradient(90deg, white 50%, transparent 50%);
}
</style>
