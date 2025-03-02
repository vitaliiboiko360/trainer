import { defineStore } from 'pinia';
export const useIndicatorIndexStore = defineStore('indicatorIndex', {
  state: () => ({
    indicatorIndex: 0,
  }),
  getters: {
    indicatorIndex: (state) => state.indicatorIndex,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    update(value) {
      this.indicatorIndex = value;
    },
    updateToNext() {
      this.indicatorIndex++;
    },
    updateToPrev() {
      this.indicatorIndex--;
    },
  },
});
