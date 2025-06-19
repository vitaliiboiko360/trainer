<script>
import { h } from 'vue';
import ButtonWrapInside from './ButtonWrapInside.vue';
export default {
  setup(props, { slots }) {
    return () => {
      h(slots.button([h(ButtonWrapInside)]));
    };
  },
};
</script>

<template></template>

<style module></style>
