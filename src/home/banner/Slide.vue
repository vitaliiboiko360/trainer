<script setup></script>

<template>
  <div>
    <p :class="$style.text">Learn Spanish Online</p>
    <img :class="$style.image" src="/data/hm/home-1.png" />
  </div>
</template>

<style module>
.text {
  color: white;
}
.image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
