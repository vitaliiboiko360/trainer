<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, watch } from 'vue';
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

import { useAudioPlayStore } from '../../store/audioPlay';
const audioPlayStore = useAudioPlayStore();

import { useAudioTimeStore } from '../../store/playTime';
const autioTimeStore = useAudioTimeStore();

const { audioSource, timeData } = defineProps(['audioSource', 'timeData']);
const audio = ref();
const previousOnTimeUpdateHandler = ref();

const adjustPlaybackSpeed = (value) => {
  if (value == 0.8) return 0.87;
  if (value == 0.9) return 0.93;
  return 1;
};

// watch(playTime, () => {
//   if (!audio.value) return;

//   const { startTime, endTime } = playTime;

//   audio.value!.removeEventListener(
//     'timeupdate',
//     previousOnTimeUpdateHandler.value
//   );
//   let isAlreadyUpdatedIndicator = false;
//   const lineNumber = indicatorIndexStore.indicatorIndex;
//   const onTimeUpdate = (event) => {
//     if (audio.value!.currentTime >= endTime) {
//       audio.value!.pause();
//       isPlaying.value = false;
//       isPlay.value = false;
//       if (isAlreadyUpdatedIndicator == false) {
//         isAlreadyUpdatedIndicator = true;
//         indicatorIndexStore.update(lineNumber + 1);
//       }
//     }
//   };
//   previousOnTimeUpdateHandler.value = onTimeUpdate;

//   audio.value!.addEventListener('timeupdate', onTimeUpdate);

//   audio.value!.currentTime = startTime;
//   audio.value!.play();
//   isPlaying.value = true;
// });

watch(playbackSpeed, () => {
  audio.value.playbackRate = adjustPlaybackSpeed(playbackSpeed.value);
});

watch(autioTimeStore, () => {
  if (!audio.value) return;

  const { startTime, endTime } = autioTimeStore.playTime;

  if (previousOnTimeUpdateHandler.value) {
    audio.value!.removeEventListener(
      'timeupdate',
      previousOnTimeUpdateHandler.value
    );
  }
  const onTimeUpdate = (event) => {
    if (audio.value!.currentTime >= endTime) {
      audio.value!.pause();
      audioPlayStore.setPause();
      audio.value!.currentTime = startTime;
      indicatorIndexStore.updateToNext();
    }
  };

  previousOnTimeUpdateHandler.value = onTimeUpdate;

  audio.value!.addEventListener('timeupdate', onTimeUpdate);
  audio.value!.currentTime = startTime;
});

onBeforeUnmount(() => {
  if (previousOnTimeUpdateHandler.value) {
    audio.value!.removeEventListener(
      'timeupdate',
      previousOnTimeUpdateHandler.value
    );
  }
});

watch(audioPlayStore, () => {
  if (audioPlayStore.isPlay == true) {
    audio.value!.play();
    // if (isPlayFromPaused.value == true) {
    //   return;
    // }

    // const currentIndex = indicatorIndexStore.indicatorIndex - 1;
    // const { start: startTime, end: endTime } = timeData[currentIndex];
    // playTime.updateTime(startTime, endTime);
    // activeAnimationSentenceNumber.value = indicatorIndexStore.indicatorIndex;
  } else if (audioPlayStore.isPlay == false) {
    audio.value!.pause();
  }
});
</script>

<template>
  <audio ref="audio" :src="`audio/${audioSource}`"></audio>
</template>
