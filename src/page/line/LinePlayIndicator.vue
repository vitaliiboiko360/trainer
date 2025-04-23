<script setup>
const iconEmptyLine =
  'M6.5 17.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5';
const icontCurrentWillBePlaying =
  'M11 14a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3A.5.5 0 0111 14M8.854 9.146a.5.5 0 10-.708.708L9.793 11.5 8.146 13.146a.5.5 0 10.708.708l2-2a.5.5 0 000-.708z M6.5 17.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5';
const currentPlayIcon =
  'M12 16a1 1 90 011-1h3a1 1 90 010 2h-3A1 1 90 0112 16M7.7 6.3a1 1 90 10-1.4 1.4L9.6 11 6.3 14.3a1 1 90 101.4 1.4l4-4a1 1 90 000-1.4z';
const cursorIcon = 'M12 16a1 1 90 011-1h3a1 1 90 010 2h-3A1 1 90 0112 16';
</script>

<template>
  <div :class="$style.divContainer">
    <div :class="$style.divInnerContainer">
      <v-icon
        color="#1a9fef"
        :class="$style.icon"
        :icon="currentPlayIcon"
        size="40"
      ></v-icon>
      <v-icon
        :class="[$style.icon, $style.iconCursor]"
        :icon="cursorIcon"
        size="40"
      ></v-icon>
    </div>
  </div>
</template>

<style module>
@keyframes pulse {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.divInnerContainer {
  position: relative;
  i {
    position: absolute;
    -webkit-filter: drop-shadow(0px 0px 8px #1a9fef);
    filter: drop-shadow(0px 0px 8px #1a9fef);
  }
  i:nth-child(2) {
    animation: pulse 1.5s linear infinite alternate-reverse;
    left: 0px;
  }
}
.divContainer {
  display: inline-block;
  position: absolute;
  left: -2rem;
  top: 0.3rem;
}
.icon {
  display: inline-block;
}

.iconCursor {
  left: -2.5rem;
}
</style>
