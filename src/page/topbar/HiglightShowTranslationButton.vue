<script setup>
import css from '../page.module.scss';
import cssTopbar from './topbar.module.scss';
</script>

<template>
  <button
    :class="[css.topBarButtonTranslations, cssTopbar.topbarButtonBase]"
  ></button>
</template>
