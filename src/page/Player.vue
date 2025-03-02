<script setup>
import PlayerButtonBar from './player/PlayerButtonBar.vue';
</script>

<template>
  <div :class="$style.playerOuter">
    <PlayerButtonBar />
  </div>
</template>

<style module>
.playerOuter {
  margin-top: 2rem;
  /* margin-left: -1.5rem; */
  margin-bottom: 1rem;
}
</style>
