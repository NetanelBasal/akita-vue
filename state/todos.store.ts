import { createEntityStore } from '@datorama/akita';

const initialState = {};

export const todosStore = createEntityStore(initialState, { name: 'todos' });

