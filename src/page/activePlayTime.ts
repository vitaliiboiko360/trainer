import { reactive, ref } from 'vue';

export const activePlayTime = reactive({
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
