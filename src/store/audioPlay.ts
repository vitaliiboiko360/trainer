import { defineStore } from 'pinia';

export type PlayTime = {
  startTime: number;
  endTime: number;
};

export const useAudioPlayStore = defineStore('audioPlay', {
  state: () => ({
    play: false,
    playUpdated: false,
    time: {
      startTime: 0,
      endTime: 0,
    },
  }),
  getters: {
    isPlay: (state) => state.play,
    isPlayUpdated: (state) => state.playUpdated,
    playTime: (state) => state.time,
  },
  actions: {
    setPlay() {
      this.play = true;
      this.playUpdated = !this.playUpdated;
    },
    setPause() {
      this.play = false;
      this.playUpdated = !this.playUpdated;
    },
    updatePlayTime(newPlayTime: PlayTime) {
      this.time.startTime = newPlayTime.startTime;
      this.time.endTime = newPlayTime.endTime;
    },
  },
});
