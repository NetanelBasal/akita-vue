import { createQuery } from "@datorama/akita";
import { counterStore } from "./counter.store";

export const counterQuery = createQuery<{ counter: number }>(counterStore);
