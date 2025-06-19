<script setup>
import { onMounted } from 'vue';
import { textView, TEXTVIEW_BUTTONS } from './state/textView';
import LinesBlockLayout from './layout/LinesBlockLayout.vue';
import LinesPageLayout from './layout/LinesPageLayout.vue';
import PageSliderDivider from './layout/PageSliderDivider.vue';
import { useIndicatorIndexStore } from '../store/indicatorIndex';

const indicatorIndexStore = useIndicatorIndexStore();
const { lines } = defineProps(['lines']);
onMounted(() => {
  indicatorIndexStore.update(1);
});
</script>

<template>
  <PageSliderDivider :lines v-slot="slotProps">
    <LinesBlockLayout
      v-if="textView == TEXTVIEW_BUTTONS.LineMode"
      :displayedLines="slotProps.displayedLines"
    />
    <LinesPageLayout
      v-if="textView == TEXTVIEW_BUTTONS.ParagraphMode"
      :displayedLines="slotProps.displayedLines"
    />
  </PageSliderDivider>
</template>
