import { createEntityQuery } from "@datorama/akita";
import { todosStore } from "./todos.store";

export const todosQuery = createEntityQuery(todosStore, {});
