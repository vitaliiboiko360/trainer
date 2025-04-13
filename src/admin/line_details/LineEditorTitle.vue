<script setup>
defineProps(['line', 'selectedClass']);
</script>

<template>
  <span v-for="word in line.split(' ')" :class="selectedClass"
    >{{ word }}<span> </span
  ></span>
</template>

<style module></style>
