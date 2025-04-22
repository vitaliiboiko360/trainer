<script setup lang="ts">
import { ref, watch } from 'vue';
import { isPlaying, playTime, isPlay } from '../state/playTime';

import { useIndicatorIndexStore } from '../../store/indicatorIndex';
const lineIndicatorStore = useIndicatorIndexStore();

const { audioSource } = defineProps(['audioSource']);
const audio = ref();
const previousOnTimeUpdateHandler = ref();

watch(playTime, () => {
  if (!audio.value) return;

  const { startTime, endTime } = playTime;

  audio.value!.removeEventListener(
    'timeupdate',
    previousOnTimeUpdateHandler.value
  );
  let isAlreadyUpdatedIndicator = false;
  const onTimeUpdate = (event) => {
    if (audio.value!.currentTime >= endTime) {
      audio.value!.pause();
      isPlaying.value = false;
      if (isAlreadyUpdatedIndicator == false) {
        lineIndicatorStore.updateToNext();
        isAlreadyUpdatedIndicator = true;
      }
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
