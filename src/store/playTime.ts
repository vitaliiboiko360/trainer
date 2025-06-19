import { defineStore } from 'pinia';

export const useAudioTimeStore = defineStore('playTime', {
  state: () => ({
    startTime: 0,
    endTime: 0,
  }),
  getters: {
    playTime: (state) => {
      return {
        startTime: state.startTime,
        endTime: state.endTime,
      };
    },
  },
  actions: {
    updatePlayTime(newStartTime: number, newEndTime: number) {
      this.startTime = newStartTime;
      this.endTime = newEndTime;
    },
  },
});
