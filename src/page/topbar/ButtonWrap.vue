<script setup>
import ButtonWrapSlot from './ButtonWrapSlot.vue';
</script>

<template>
  <div :class="$style.divOuter">
    <ButtonWrapSlot>
      <template v-slot:button>
        <slot name="button"></slot>
      </template>
    </ButtonWrapSlot>
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
