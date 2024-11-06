<script setup>
import './app.module.scss';
import Home from './Home.vue';
</script>

<template>
  <router-view v-slot="{ Home }"></router-view>
</template>
