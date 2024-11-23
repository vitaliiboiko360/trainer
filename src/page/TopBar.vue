<script setup>
import * as css from './page.module.scss';
import { clsx } from 'clsx';
</script>

<template>
  <div :class="css.divTopBarOuter">
    <div :class="css.divTopBarButtonWrap1st">
      <button :class="css.topBarButtonBackHome"></button>
    </div>
    <div :class="css.divTopBarButtonWrap3rd">
      <button
        :class="clsx(css.topBarGroupedButtonLeft, css.topBarButtonTextPlay)"
      ></button>
      <button
        :class="
          clsx(css.topBarGroupedButtonRight, css.topBarButtonTextOrdinary)
        "
      ></button>
    </div>
    <div :class="css.divTopBarButtonWrap5th">
      <button :class="css.topBarButtonTranslations"></button>
    </div>
  </div>
</template>
