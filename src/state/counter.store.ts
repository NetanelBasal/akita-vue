import { createStore } from "@datorama/akita";

const initialState = {
  counter: 0
};

export const counterStore = createStore<{ counter: number }>(initialState, {
  name: "counter"
});
