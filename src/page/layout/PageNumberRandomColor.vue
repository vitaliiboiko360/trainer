<script setup>
import PageNumber from './PageNumber.vue';
const { index, isActive } = defineProps(['index', 'isActive']);

const COLORS = ['#f000a0', '#35acfc', '#00d0df', '#4b00fa', '#9cf000'];
</script>

<template>
  <PageNumber :index :isActive />
</template>

<style module>
.referenceColors {
  background: linear-gradient(
    -90deg,
    #35acfc,
    #4b00fa,
    #f000a0,
    #00d0df,
    #9cf000
  );
}
</style>
