<script setup>
import PlaybackSpeed from './PlaybackSpeed.vue';
import PlayPauseButton from './PlayPauseButton.vue';
import PreviousNextButton from './PreviousNextButton.vue';
</script>

<template>
  <div :class="$style.playerButtonBar">
    <div :class="$style.buttons">
      <PreviousNextButton previous="true" />
      <PlayPauseButton />
      <PreviousNextButton next="true" />
      <PlaybackSpeed />
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
  align-items: center;
  gap: 1rem;
}
</style>
