<script setup>
import HomeTitle from './home/HomeTitle.vue';
import ListLessons from './home/ListLessons.vue';
import * as css from './home/home.module.scss';
</script>

<template>
  <div>
    <div :class="css.homeDivOuter"><HomeTitle /> <ListLessons /></div>
  </div>
</template>
