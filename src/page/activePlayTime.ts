import { reactive, ref } from 'vue';

export const activePlayTime = reactive({
  startTime: -1,
  endTime: -1,
  updateTime(startTime: number, endTime: number) {
    this.startTime = startTime;
    this.endTime = endTime;
  },
});

export const activeAnimationSentenceNumber = ref(-1);
