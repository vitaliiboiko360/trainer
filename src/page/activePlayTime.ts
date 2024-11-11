import { reactive, ref } from 'vue';

export const activePlayTime = reactive({
  startTime: -1,
  endTime: -1,
  booleanToTriggerRepeatedClicks: true,
  updateTime(startTime: number, endTime: number) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.booleanToTriggerRepeatedClicks = !this.booleanToTriggerRepeatedClicks;
  },
});

export const activeAnimationSentenceNumber = ref(-1);
