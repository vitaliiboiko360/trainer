<script setup lang="ts">
import { ref, watch } from 'vue';
import { isPlaying, playTime, isPlay } from '../state/playTime';

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
    if (audio.value!.currentTime >= endTime) {
      audio.value!.pause();
      isPlaying.value = false;
    }
  };
  previousOnTimeUpdateHandler.value = onTimeUpdate;

  audio.value!.addEventListener('timeupdate', onTimeUpdate);

  audio.value!.currentTime = startTime;
  audio.value!.play();
  isPlaying.value = true;
});

watch(isPlay, () => {
  if (isPlay.value == true) {
    if (audio.value.currentTime >= playTime.endTime) {
      audio.value.currentTime = playTime.startTime;
    }
    audio.value.play();
  } else if (isPlay.value == false) {
    audio.value.pause();
  }
});
</script>

<template>
  <audio ref="audio" :src="`data/${audioSource}`"></audio>
</template>
