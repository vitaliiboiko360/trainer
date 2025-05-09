<script setup lang="ts">
import { ref, watch } from 'vue';
import {
  isPlaying,
  playTime,
  isPlay,
  activeAnimationSentenceNumber,
  playbackSpeed,
  isPlayFromPaused,
} from '../state/playTime';

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
  const lineNumber = indicatorIndexStore.indicatorIndex;
  const onTimeUpdate = (event) => {
    if (audio.value!.currentTime >= endTime) {
      audio.value!.pause();
      isPlaying.value = false;
      isPlay.value = false;
      if (isAlreadyUpdatedIndicator == false) {
        isAlreadyUpdatedIndicator = true;
        indicatorIndexStore.update(lineNumber + 1);
      }
    }
  };
  previousOnTimeUpdateHandler.value = onTimeUpdate;

  audio.value!.addEventListener('timeupdate', onTimeUpdate);

  audio.value!.currentTime = startTime;
  audio.value!.play();
  isPlaying.value = true;
});

watch(playbackSpeed, () => {
  audio.value.playbackRate = playbackSpeed.value;
});

watch([isPlay, isPlayFromPaused], () => {
  if (isPlay.value == true) {
    if (isPlayFromPaused.value == true) {
      audio.value.play();
      return;
    }

    const currentIndex = indicatorIndexStore.indicatorIndex - 1;
    const { start: startTime, end: endTime } = timeData[currentIndex];
    playTime.updateTime(startTime, endTime);
    activeAnimationSentenceNumber.value = indicatorIndexStore.indicatorIndex;
  } else if (isPlay.value == false) {
    audio.value.pause();
  }
});
</script>

<template>
  <audio ref="audio" :src="`audio/${audioSource}`"></audio>
</template>
