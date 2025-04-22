<script setup>
const iconEmptyLine =
  'M6.5 17.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5';
const icontCurrentWillBePlaying =
  'M11 14a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3A.5.5 0 0111 14M8.854 9.146a.5.5 0 10-.708.708L9.793 11.5 8.146 13.146a.5.5 0 10.708.708l2-2a.5.5 0 000-.708z M6.5 17.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5';
const currentPlayIcon =
  'M12 16a1 1 90 011-1h3a1 1 90 010 2h-3A1 1 90 0112 16M7.7 6.3a1 1 90 10-1.4 1.4L9.6 11 6.3 14.3a1 1 90 101.4 1.4l4-4a1 1 90 000-1.4z';
</script>

<template>
  <div :class="$style.divContainer">
    <v-icon :class="$style.icon" :icon="currentPlayIcon" size="40"></v-icon>
  </div>
</template>

<style module>
.divContainer {
  display: inline-block;
  position: absolute;
  left: -2rem;
}
.icon {
  display: inline-block;
}
</style>
