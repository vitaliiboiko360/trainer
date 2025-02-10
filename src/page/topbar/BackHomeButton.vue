<script setup>
import css from '../page.module.scss';
import { useRouter } from 'vue-router';

const router = useRouter();
const onClick = () => {
  router.push({ path: '/' });
};
</script>

<template>
  <button :class="css.topBarButtonBackHome" @click="onClick"></button>
</template>
