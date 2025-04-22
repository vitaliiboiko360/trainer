import { mdiFormatTextVariant } from '@mdi/js';
import { defineStore } from 'pinia';
export const useIndicatorIndexStore = defineStore('indicatorIndex', {
  state: () => ({
    indicatorIndexState: 1,
    maxValue: 0,
  }),
  getters: {
    indicatorIndex: (state) => state.indicatorIndexState,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    update(value) {
      this.indicatorIndexState = value;
    },
    updateMaxValue(value) {
      this.maxValue = value;
    },
    updateToNext() {
      if (this.indicatorIndexState < this.maxValue) {
        this.indicatorIndexState++;
      }
    },
    updateToPrev() {
      if (this.indicatorIndexState > 1) {
        this.indicatorIndexState--;
      }
    },
  },
});
