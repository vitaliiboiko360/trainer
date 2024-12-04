<script setup>
import * as css from '../page.module.scss';
import { clsx } from 'clsx';
</script>

<template>
  <button
    :class="clsx(css.topBarGroupedButtonLeft, css.topBarButtonTextByBlocks)"
  ></button>
  <button
    :class="clsx(css.topBarGroupedButtonRight, css.topBarButtonTextOrdinary)"
  ></button>
</template>
