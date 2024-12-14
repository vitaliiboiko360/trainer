<script setup>
import HomeTitle from './home/HomeTitle.vue';
import ListLessons from './home/ListLessons.vue';
import Animation from './home/Animation.vue';
import css from './home/home.module.scss';
</script>

<template>
  <div>
    <div :class="css.homeDivOuter">
      <HomeTitle /><Animation /><ListLessons />
    </div>
  </div>
</template>
