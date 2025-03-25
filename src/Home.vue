<script setup>
import HomeTitle from './home/HomeTitle.vue';
import ListLessons from './home/ListLessons.vue';
import Banner from './home/Banner.vue';
import css from './home/home.module.scss';
</script>

<template>
  <div>
    <div :class="css.homeDivOuter"><HomeTitle /><Banner /><ListLessons /></div>
  </div>
</template>
