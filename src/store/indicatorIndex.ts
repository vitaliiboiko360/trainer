import { defineStore } from 'pinia';
export const useIndicatorIndexStore = defineStore('indicatorIndex', {
  state: () => ({
    indicatorIndexState: 0,
  }),
  getters: {
    indicatorIndex: (state) => state.indicatorIndexState,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    update(value) {
      this.indicatorIndexState = value;
    },
    updateToNext() {
      this.indicatorIndexState++;
    },
    updateToPrev() {
      this.indicatorIndexState--;
    },
  },
});
