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
}
</style>
