<script setup>
const { isActive, colors } = defineProps(['isActive', 'colors']);
</script>

<template>
  <span :class="$style.spanInner"></span>
  <span :class="$style.spanCover"></span>
  <span
    :class="[
      { [$style.tonal]: isActive },
      { [$style.regular]: !isActive },
      $style.spanCover2,
    ]"
  ></span>
</template>

<style module>
@layer base {
  .tonal {
    background-color: #e9eae9;
  }
  .regular {
    background-color: #fff;
  }
}
@keyframes spanInnerAnimation {
  50% {
    background-position: 100% 50%;
    transform: skew(-2deg);
  }
}
.spanInner {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  background: inherit;
  border-radius: 20px;
  background: linear-gradient(
    -90deg,
    v-bind(colors[0]),
    v-bind(colors[1]),
    v-bind(colors[2]),
    v-bind(colors[3]),
    v-bind(colors[4])
  );
  background-size: 400% 100%;
  border: none;
  padding: 0;
  margin: 0;
  animation: spanInnerAnimation 48s ease-in-out infinite;
  &:after {
    content: '';
    position: absolute;
    background-size: inherit;
    background-image: inherit;
    animation: inherit;
    left: 0;
    right: 0;
    top: 2px;
    height: 100%;
    filter: blur(5px);
    border-radius: 20px;
  }
}
.spanCover2 {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  /* background: #fff; */
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spanCover {
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(1px);
}
</style>
