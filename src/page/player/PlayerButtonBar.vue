<script setup>
import PlayPauseButton from './PlayPauseButton.vue';
</script>

<template>
  <div :class="$style.playerButtonBar">
    <div :class="$style.buttons">
      <PlayPauseButton />
    </div>
  </div>
</template>

<style module>
.playerButtonBar {
  display: flex;
  justify-content: center;
}
.buttons {
  display: flex;
}
</style>
