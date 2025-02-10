<script setup>
import { textView, TEXTVIEW_BUTTONS } from './state/textView';
import LinesBlockLayout from './layout/LinesBlockLayout.vue';
import LinesPageLayout from './layout/LinesPageLayout.vue';
import PageSliderDivider from './layout/PageSliderDivider.vue';

const { lines } = defineProps(['lines']);
</script>

<template>
  <PageSliderDivider :lines v-slot="slotProps">
    <LinesBlockLayout
      v-if="textView == TEXTVIEW_BUTTONS.LineMode"
      :totalNumberOfPages="slotProps.totalNumberOfPages"
      :displayedLines="slotProps.displayedLines"
    />
    <LinesPageLayout
      v-if="textView == TEXTVIEW_BUTTONS.ParagraphMode"
      :totalNumberOfPages="slotProps.totalNumberOfPages"
      :displayedLines="slotProps.displayedLines"
    />
  </PageSliderDivider>
</template>
