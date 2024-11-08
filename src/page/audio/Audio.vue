<script setup>
import { useTemplateRef, ref, watch, watchEffect, onMounted } from 'vue';
const audio = useTemplateRef('audioTrack');
const { audioSource } = defineProps(['audioSource']);

const previousOnTimeUpdateHandler = ref();

watchEffect(() => {
  if (!audio.value) return;
  const onClickTextSentenceEvent = audio.value
    ? (eventData) => {
        console.log(`eventData=`, eventData);
        const { startTime, endTime } = eventData;
        audio.value.currentTime = startTime;
        audio.value.play();
        if (previousOnTimeUpdateHandler.value)
          audio.value.removeEventListner(
            'timeupdate',
            previousOnTimeUpdateHandler.value
          );
        previousOnTimeUpdateHandler.value = audio.value.addEventListener(
          'timeupdate',
          (event) => {
            if (audio.value.currentTime >= endTime) audio.value.pause();
          }
        );
      }
    : () => {
        console.log(`empty audio`);
      };

  audio.value.addEventListener(
    'clickTextSentenceEvent',
    onClickTextSentenceEvent
  );
});
</script>

<template>
  <audio
    @clickTextSentenceEvent="onClickTextSentenceEvent"
    ref="audioTrack"
    :src="`data/${audioSource}`"
  ></audio>
</template>
