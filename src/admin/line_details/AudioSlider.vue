<script setup>
const { editStart, editEnd } = defineProps(['editStart', 'editEnd']);
const slider = defineModel('slider');
</script>

<template>
  <div>
    <div class="text-caption" :class="$style.labelCaption">Audio Timeline</div>
    <div :class="$style.sliderLine">
      <v-spacer :class="$style.columenOne" />

      <v-slider
        :class="$style.columenTwo"
        v-model="slider"
        thumb-label="always"
        color="blue"
        track-color="green"
      >
        <template v-slot:prepend>
          <div>{{ editStart }}</div>
        </template>
        <template v-slot:append>
          <div>{{ editEnd }}</div>
        </template></v-slider
      >
      <v-spacer :class="$style.columenThree" />
    </div>
  </div>
</template>

<style module>
.labelCaption {
  margin-bottom: 1.8rem;
}
.sliderLine {
  display: grid;
  grid-template-columns: 0.5fr 100% 0.5fr;
}
.columnOne {
  grid-column: 1;
}
.columnTwo {
  grid-column: 2;
}
.columnThree {
  grid-column: 3;
}
</style>
