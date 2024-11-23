<script setup>
import * as css from './page.module.scss';
</script>

<template>
  <div :class="css.divTopBarOuter">
    <div :class="css.divTopBarButtonWrap1st">
      <button :class="css.topBarButtonBackHome"></button>
    </div>
    <div :class="css.divTopBarButtonWrap3rd">
      <button :class="css.topBarButtonGroupLeft"></button>
      <button :class="css.topBarButtonGroupMiddle"></button>
      <button :class="css.topBarButtonGroupRight"></button>
    </div>
  </div>
</template>
