<script setup>
import * as css from './page.module.scss';
</script>

<template>
  <div :class="css.divTopBarOuter">
    <div :class="css.divTopBarButtonWrap1st">
      <button :class="css.topBarButton"></button>
    </div>
    <div :class="css.divTopBarButtonWrap3rd">
      <button :class="css.topBarButton">Button</button>
    </div>
  </div>
</template>
