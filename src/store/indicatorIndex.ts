import { defineStore } from 'pinia';
import { useRepeatCountStore } from './repeatCount';
export const useIndicatorIndexStore = defineStore('indicatorIndex', {
  state: () => ({
    index: 1,
    maxValue: 0,
  }),
  getters: {
    indicatorIndex: (state) => state.index,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    update(value) {
      this.index = value;
    },
    updateMaxValue(value) {
      this.maxValue = value;
    },
    updateToNext() {
      if (this.index < this.maxValue) {
        const repeatCountStore = useRepeatCountStore();
        this.index++;
        repeatCountStore.resetCountCurrent();
      }
    },
    updateToPrev() {
      if (this.index > 1) {
        const repeatCountStore = useRepeatCountStore();
        this.index--;
        repeatCountStore.resetCountCurrent();
      }
    },
  },
});
