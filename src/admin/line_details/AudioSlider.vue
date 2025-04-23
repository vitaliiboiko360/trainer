<script setup>
import gsap from 'gsap';
import { ref, watch } from 'vue';
import { isPlaying } from '../../page/state/playTime';
const { editStart, editEnd } = defineProps(['editStart', 'editEnd']);

const audioCurrentTimeValue = ref(editStart);
watch(isPlaying, () => {
  if (isPlaying.value == true) {
    const sliderUpdatedObject = {
      slider: editStart,
    };
    gsap.to(sliderUpdatedObject, {
      slider: editEnd,
      duration: editEnd - editStart,
      ease: 'none',
      onUpdate: () => {
        audioCurrentTimeValue.value = sliderUpdatedObject.slider;
      },
      onComplete: () => {
        audioCurrentTimeValue.value = editStart;
      },
    });
  }
  if (isPlaying.value == false) {
    audioCurrentTimeValue.value = editStart;
  }
});
</script>

<template>
  <div>
    <div class="text-caption" :class="$style.labelCaption">
      Audio Current Time, Second:
      <span :class="$style.labelCurrentTime">{{ audioCurrentTimeValue }}</span>
    </div>
    <div :class="$style.sliderLine">
      <v-spacer :class="$style.columenOne" />
      <v-slider
        :class="$style.columenTwo"
        thumb-label="always"
        :model-value="audioCurrentTimeValue"
        thumb-size="10"
        color="blue"
        track-color="green"
        :min="editStart"
        :max="editEnd"
        :step="0.1"
        disabled
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
.labelCurrentTime {
  font-size: 1.2rem;
}
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
