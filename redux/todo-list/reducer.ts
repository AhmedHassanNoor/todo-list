import { Todo } from 'types/types';
import { createReducer } from 'typesafe-actions';
import { addTodo, updateTodo, clearTodo } from './actions';

const emptyTodo: Todo = {
    id: '',
    bodyText: '',
    completed: false
};

interface State {
  todoList: Todo[];
}

const initialState: State = {
    todoList: [emptyTodo],
};

const todoListReducer = createReducer(initialState)
  .handleAction(addTodo, (state: State, { payload }: any) => ({
    ...state,
    todoList: payload,
  }))
  .handleAction(updateTodo, (state: State, { payload }: any) => ({
    ...state,
    todoList: payload,
  }))
  .handleAction(clearTodo, () => initialState);

export default todoListReducer;
export type todoListState = ReturnType<typeof todoListReducer>;
