import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore("main", {
  state: () => ({
    counter: 0,
    name: "Tom Bombadil",
  }),
  getters: {
    doubleCount: (state) => {
      state.counter = state.counter * 2;
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    addOne() {
      this.counter++;
    },
    minusOne() {
      this.counter--;
    },
  },
});
