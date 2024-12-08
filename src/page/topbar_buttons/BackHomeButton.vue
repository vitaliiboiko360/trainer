<script setup>
import css from '../page.module.scss';
</script>

<template>
  <button :class="css.topBarButtonBackHome">
    <RouterLink to="/" />
  </button>
</template>
