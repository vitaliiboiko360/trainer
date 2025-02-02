<script setup>
import { defineProps } from 'vue';

defineProps(['translations']);
</script>

<template>
  <div>
    <div>
      {{ translations.sentenceEnglishTranslation }}
    </div>
    <div></div>
  </div>
</template>
