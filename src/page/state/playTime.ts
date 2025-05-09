import { reactive, ref } from 'vue';

export const playTime = reactive({
  startTime: -1,
  endTime: -1,
  booleanToTriggerUpdatesByRepeatedClicks: true,
  updateTime(startTime: number, endTime: number) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.booleanToTriggerUpdatesByRepeatedClicks =
      !this.booleanToTriggerUpdatesByRepeatedClicks;
  },
});

export const activeAnimationSentenceNumber = ref(-1);

export const detectClickEvent = ref(false);

export const isPlaying = ref(false);

export const isPlay = ref(false);

export const playbackSpeed = ref(1);

export const isPlayFromPaused = ref(false);
