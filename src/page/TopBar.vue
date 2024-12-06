<script setup>
import BackHomeButton from './topbar_buttons/BackHomeButton.vue';
import HiglightShowTranslationButton from './topbar_buttons/HiglightShowTranslationButton.vue';
import TextDisplayButtonGroup from './topbar_buttons/TextViewButtonGroup.vue';
import css from './page.module.scss';
import clsx from 'clsx';
</script>

<template>
  <div :class="css.divTopBarOuter">
    <div :class="css.divTopBarButtonColumn1">
      <BackHomeButton />
    </div>
    <div :class="clsx(css.divTopBarButtonColumn3, css.whiteSpaceNoWrap)">
      <TextDisplayButtonGroup />
    </div>
    <div :class="css.divTopBarButtonColumn5">
      <HiglightShowTranslationButton />
    </div>
  </div>
</template>
