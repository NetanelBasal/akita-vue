import { counterStore } from "./counter.store";

export function increment() {
  counterStore.update(state => {
    return {
      counter: state.counter + 1
    };
  });
}
