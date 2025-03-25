<script setup></script>

<template>
  <div>
    <p :class="$style.text">Learn Spanish Online</p>
    <img :class="$style.image" src="/data/hm/home-1.jpg" />
  </div>
</template>

<style module>
.text {
  color: white;
}
.image {
  height: 100%;
}
</style>
