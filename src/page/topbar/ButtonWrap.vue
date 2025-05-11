<script setup></script>

<template>
  <div :class="$style.divOuter">
    <slot name="button"></slot>
  </div>
</template>

<style module>
@keyframes partialFadeIn {
  0% {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}
.divOuter {
  animation: partialFadeIn 0.3s;
}
</style>
