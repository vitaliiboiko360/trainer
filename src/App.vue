<script setup>
import './app.module.scss';
import Home from './Home.vue';
</script>

<template>
  <router-view v-slot="{ Home }"></router-view>
</template>

<style>
.color1 {
  color: #dbddbb;
  color: #6ba587;
  color: #d5d88d;
  color: #dbf2ff;
}
</style>
