<script setup>
const iconEmptyLine =
  'M6.5 17.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5';
const icontCurrentWillBePlaying =
  'M11 14a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3A.5.5 0 0111 14M8.854 9.146a.5.5 0 10-.708.708L9.793 11.5 8.146 13.146a.5.5 0 10.708.708l2-2a.5.5 0 000-.708z M6.5 17.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5m4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5';
</script>

<template>
  <div>
    <v-icon :icon="iconEmptyLine"></v-icon>
    <v-icon :icon="icontCurrentWillBePlaying"></v-icon>
  </div>
</template>

<style module></style>
