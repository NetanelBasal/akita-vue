import { todosStore } from "./todos.store";

export function add() {
  todosStore.add({
    id: Math.random().toString(),
    name: Math.random().toString()
  });
}
