<script setup lang="ts">
import { ref, watch } from 'vue';
import { playTime } from '../state/platTime';

const { audioSource } = defineProps(['audioSource']);
const audio = ref();
const previousOnTimeUpdateHandler = ref();

watch(playTime, () => {
  if (!audio.value) return console.log(`!!!!audio.value= `, audio.value);

  const { startTime, endTime } = playTime;

  audio.value!.removeEventListener(
    'timeupdate',
    previousOnTimeUpdateHandler.value
  );

  const onTimeUpdate = (event) => {
    if (audio.value!.currentTime >= endTime) audio.value!.pause();
  };
  previousOnTimeUpdateHandler.value = onTimeUpdate;

  audio.value!.addEventListener('timeupdate', onTimeUpdate);

  audio.value!.currentTime = startTime;
  audio.value!.play();
});
</script>

<template>
  <audio ref="audio" :src="`data/${audioSource}`"></audio>
</template>
