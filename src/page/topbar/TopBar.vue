<script setup>
import BackHomeButton from './BackHomeButton.vue';
import HiglightShowTranslationButton from './HiglightShowTranslationButton.vue';
import TextDisplayButtonGroup from './TextViewButtonGroup.vue';
import css from '../page.module.scss';

import { ref, watchEffect } from 'vue';
import { usePageHeightStore } from '../../store/pageHeight';

const refDivRoot = ref();

const pageHeightStore = usePageHeightStore();
watchEffect(() => {
  if (refDivRoot.value) {
    pageHeightStore.updateTopBarHeight(refDivRoot.value.clientHeight);
  }
});
</script>

<template>
  <div
    :ref="(el) => (refDivRoot = el)"
    :class="[css.divTopBarOuter, $style.outerDiv]"
  >
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
