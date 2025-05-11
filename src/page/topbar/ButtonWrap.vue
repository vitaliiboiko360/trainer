<script setup></script>

<template>
  <div :class="$style.divOuter">
    <slot name="button">
      <span :class="$style.spanOuter"
        ><span :class="$style.spanInner"></span
      ></span>
    </slot>
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
.spanOuter {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding: 0 6px;
}
@keyframes spanInnerAnimation {
  50% {
    background-position: 140% 50%;
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
  border-radius: 6px;
  background: linear-gradient(-90deg, #007cf0, #00dfd8, #ff0080, #007cf0);
  background-size: 400% 100%;
  border: none;
  padding: 0;
  margin: 0;
  animation: spanInnerAnimation 8s ease-in-out infinite;
  ::after {
    content: '';
    position: absolute;
    background-size: inherit;
    background-image: inherit;
    animation: inherit;
    left: 0;
    right: 0;
    top: 2px;
    height: 100%;
    filter: blur(0.5rem);
  }
}
</style>
