<script setup>
import BackHomeButton from './BackHomeButton.vue';
import HiglightShowTranslationButton from './HiglightShowTranslationButton.vue';
import TextDisplayButtonGroup from './TextViewButtonGroup.vue';
import css from '../page.module.scss';
</script>

<template>
  <div :class="[css.divTopBarOuter, $style.outerDiv]">
    <div :class="css.divTopBarButtonColumn1">
      <BackHomeButton />
    </div>
    <div :class="[css.divTopBarButtonColumn3, css.whiteSpaceNoWrap]">
      <TextDisplayButtonGroup />
    </div>
    <div :class="css.divTopBarButtonColumn5">
      <HiglightShowTranslationButton />
    </div>
  </div>
</template>

<style module>
.outerDiv {
  margin-left: 1.5rem;
  margin-right: 0.6rem;
}
</style>
