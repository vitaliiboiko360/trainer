<script setup>
const {
  numberOfSlides = 5,
  resetSlide,
  setActiveSlide,
  animationDuration = 20,
  activeAnimation = 1,
} = defineProps([
  'numberOfSlides',
  'resetSlide',
  'setActiveSlide',
  'animationDuration',
  'activeAnimation',
]);
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.flexDiv">
      <div
        v-for="i in numberOfSlides"
        :class="[
          { [$style.sectorCircle]: i == activeAnimation },
          { [$style.circleBorder]: i == activeAnimation },
          $style.item,
        ]"
        :key="i"
        @click="
          () => {
            resetSlide();
            setActiveSlide(i);
          }
        "
      >
        <div
          :class="[{ [$style.sectorCircle_before]: i == activeAnimation }]"
        ></div>
        <div
          :class="[{ [$style.sectorCircle_after]: i == activeAnimation }]"
        ></div>
        <!-- <p :class="$style.pInside">.</p> -->
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
  z-index: 10;
}
.flexDiv {
  display: flex;
  position: absolute;
  bottom: 8px;
  flex-direction: row;
  align-items: center;
  gap: 14px;
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
@keyframes sectors {
  0% {
    background-image: linear-gradient(0deg, transparent 50%, white 50%),
      linear-gradient(0deg, white 50%, transparent 50%);
  }
  50% {
    background-image: linear-gradient(180deg, transparent 50%, white 50%),
      linear-gradient(0deg, white 50%, transparent 50%);
  }
}
@keyframes semiCircleRotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes sectorCircleStaticKeyframes {
  0% {
    background-image: linear-gradient(90deg, #d7d9e8 50%, transparent 50%);
  }
  100% {
    background-image: linear-gradient(90deg, transparent 50%, #6e75d2 50%);
  }
}
@-webkit-keyframes sectorCircleStaticKeyframes {
  0% {
    background-image: linear-gradient(90deg, #d7d9e8 50%, transparent 50%);
  }
  50% {
    background-image: linear-gradient(90deg, #d7d9e8 50%, transparent 50%);
  }
  100% {
    background-image: linear-gradient(90deg, transparent 50%, #6e75d2 50%);
  }
}
.sectorCircle {
  display: block;
  position: relative;
}
.sectorCircle p {
  z-index: 2;
}
.sectorCircle_before {
  content: '';
  display: block;
  background-image: linear-gradient(90deg, #6e75d2 50%, transparent 50%);
  animation: calc(v-bind(animationDuration) * 1s) linear infinite
    semiCircleRotate;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-origin: border-box;
}
.sectorCircle_after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-size: 100% 100%;
  animation: calc(v-bind(animationDuration) * 1s) linear infinite
    sectorCircleStaticKeyframes;
  background-origin: border-box;
}
.circleBorder {
  border-style: solid;
  border-width: 1px;
  border-color: #d7d9e8;
  border-radius: 50%;
}
</style>
