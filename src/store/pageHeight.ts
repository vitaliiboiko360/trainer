import { defineStore } from 'pinia';

export const usePageHeightStore = defineStore('pageHeight', {
  state: () => ({
    pageHeight: 0,
    topBarHeight: 0,
    playerHeight: 0,
  }),
  actions: {
    updatePageHeight(newPageHeight: number) {
      this.pageHeight = newPageHeight;
    },
    updateTopBarHeight(newTopBarHeight: number) {
      this.topBarHeight = newTopBarHeight;
    },
    updatePlayerHeight(newPlayerHeight: number) {
      this.topPlayerHeight = newPlayerHeight;
    },
  },
});
