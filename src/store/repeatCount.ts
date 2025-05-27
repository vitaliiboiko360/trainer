import { defineStore } from 'pinia';

const enum REPEAT_COUNT {
  INITIAL = 0,
  ONE,
  TWO,
  THREE,
}

export type RC = REPEAT_COUNT;

export const useRepeatCountStore = defineStore('repeatCount', {
  state: () => ({
    repeatCount: REPEAT_COUNT.ONE,
    repeatCountCurrent: REPEAT_COUNT.INITIAL,
  }),
  getters: {
    repeatCount: (state) => {
      return {
        repeatCount: state.repeatCount,
      };
    },
    repeatCountCurrent: (state) => {
      return {
        repeatCountCurrent: state.repeatCountCurrent,
      };
    },
  },
  actions: {
    setRepeatCount(newRepeatCount: REPEAT_COUNT) {
      this.repeatCount = newRepeatCount;
    },
    resetCountCurrent() {
      this.repeatCountCurrent = REPEAT_COUNT.INITIAL;
    },
    incrementCountCurrent(): Boolean {
      if (this.repeatCountCurrent + 1 == this.repeatCount) {
        this.repeatCountCurrent = REPEAT_COUNT.INITIAL;
        return true;
      }
      this.repeatCountCurrent = this.repeatCountCurrent + 1;
      return false;
    },
  },
});
