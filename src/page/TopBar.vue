<script setup>
import * as css from './page.module.scss';
import { clsx } from 'clsx';
</script>

<template>
  <div :class="css.divTopBarOuter">
    <div :class="css.divTopBarButtonColumn1">
      <button :class="css.topBarButtonBackHome"></button>
    </div>
    <div :class="css.divTopBarButtonColumn3">
      <button
        :class="clsx(css.topBarGroupedButtonLeft, css.topBarButtonTextByBlocks)"
      ></button>
      <button
        :class="
          clsx(css.topBarGroupedButtonRight, css.topBarButtonTextOrdinary)
        "
      ></button>
    </div>
    <div :class="css.divTopBarButtonColumn5">
      <button :class="css.topBarButtonTranslations"></button>
    </div>
  </div>
</template>
