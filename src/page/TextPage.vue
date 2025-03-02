<script setup>
import LinesLayout from './LinesLayout.vue';
import TopBar from './topbar/TopBar.vue';
import Player from './Player.vue';
import css from './page.module.scss';
const { data } = defineProps(['data']);
const { lines } = data;
</script>

<template>
  <div :class="[css.divTextBlock, $style.pageMainBlock]">
    <TopBar />
    <LinesLayout :lines />
    <Player />
  </div>
</template>

<style module>
.pageMainBlock {
  /* min-width: 709px; */
}
</style>
