<script setup>
import {
  detectClickEvent,
  isPlayFromPaused,
  activeAnimationSentenceNumber,
} from '../state/playTime';
import { useAudioPlayStore } from '../../store/audioPlay';
const audioPlayStore = useAudioPlayStore();
const iconPlay2 =
  'M19.5712 11.8043 7.1498 4.5984v14.4118zm1.695-1.4896a1.7164 1.7164 90 010 2.9791l-13.6178 7.9015C6.5355 21.8417 5.0096 21.1033 5.0096 19.7058V3.9028c0-1.3975 1.5259-2.1359 2.6388-1.4896z';
const iconPlay1 =
  'm18.0898 13.5673-9.9263 5.7595c-.8424.4883-1.9235-.103-1.9235-1.0873V6.7205c0-.9828 1.0795-1.5756 1.9235-1.0858l9.9263 5.7595a1.2511 1.2511 90 010 2.1731';

const iconPause2 =
  'M7.355 4.3987A1.1212 1.1212 90 018.4763 5.52V18.408a1.1212 1.1212 90 01-2.2425 0V5.52A1.1212 1.1212 90 017.355 4.3987m8.97 0a1.1212 1.1212 90 011.1212 1.1212V18.4a1.1212 1.1212 90 01-2.2425 0V5.52A1.1212 1.1212 90 0116.325 4.3987';
const iconPause1 =
  'M9 6A1.25 1.25 90 0110.25 7.25v10a1.25 1.25 90 01-2.5 0v-10a1.25 1.25 90 011.25-1.25m6 0a1.25 1.25 90 011.25 1.25v10a1.25 1.25 90 01-2.5 0v-10a1.25 1.25 90 011.25-1.25';

const iconPlay =
  'M17.8527 12.3615 7.7913 6.5247v11.6736zm1.373-1.2066a1.3903 1.3903 90 010 2.4131l-11.0304 6.4002C7.2938 20.4918 6.0578 19.8937 6.0578 18.7617V5.9613c0-1.132 1.236-1.7301 2.1374-1.2066z';
const iconPause =
  'M8.75 5.5A1 1 90 019.75 6.5v11a1 1 90 01-2 0v-11a1 1 90 011-1m6.5 0a1 1 90 011 1v11a1 1 90 01-2 0v-11a1 1 90 011-1';

import { isPlay } from '../state/playTime';
import { useIndicatorIndexStore } from '../../store/indicatorIndex';
const indicatorIndex = useIndicatorIndexStore();
const onClick = () => {
  // detectClickEvent.value = !detectClickEvent.value;
  if (audioPlayStore.isPlay) {
    audioPlayStore.setPause();
  } else {
    activeAnimationSentenceNumber.value = indicatorIndex.indicatorIndex;
    audioPlayStore.setPlay();
  }
};
</script>

<template>
  <div>
    <v-btn rounded="lg" size="80" @click="onClick"
      ><v-icon size="70" :icon="audioPlayStore.isPlay ? iconPause : iconPlay"
    /></v-btn>
  </div>
</template>
