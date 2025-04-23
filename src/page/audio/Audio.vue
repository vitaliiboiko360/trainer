<script setup lang="ts">
import { ref, watch } from 'vue';
import { isPlaying, playTime, isPlay } from '../state/playTime';

import { useIndicatorIndexStore } from '../../store/indicatorIndex';
const indicatorIndexStore = useIndicatorIndexStore();

const { audioSource, timeData } = defineProps(['audioSource', 'timeData']);
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
      isPlay.value = false;
      if (isAlreadyUpdatedIndicator == false) {
        isAlreadyUpdatedIndicator = true;
        indicatorIndexStore.update(indicatorIndexStore.indicatorIndex + 1);
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
    // if (audio.value.currentTime >= playTime.endTime) {
    //   audio.value.currentTime = playTime.startTime;
    // }
    // audio.value.play();

    const currentIndex = indicatorIndexStore.indicatorIndex - 1;
    const { start: startTime, end: endTime } = timeData[currentIndex];
    playTime.updateTime(startTime, endTime);
  } else if (isPlay.value == false) {
    audio.value.pause();
  }
});
</script>

<template>
  <audio ref="audio" :src="`data/${audioSource}`"></audio>
</template>
