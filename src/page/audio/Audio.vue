<script setup>
const { audioSource } = defineProps(['audioSource']);
</script>

<template>
  <audio :src="`data/${audioSource}`"></audio>
</template>
