import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "types/types";
import { RootState } from "redux/store";

const initialState: Todo[] = [
  {
    id: "",
    bodyText: "",
    completed: false,
  },
];

/* Selectors */

const selectTodosState = (rootState: RootState) => rootState.todos;
export const selectTodosList = (rootState: RootState) => selectTodosState(rootState);

/* Reducer */

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      if (state.length === 1 && !state[0].id) {
        state.pop();
      }
      state.push({
        id: action.payload.id,
        bodyText: action.payload.bodyText,
        completed: false,
      });
    },
    todoToggled(state, action: PayloadAction<string>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((list) => list.id === action.payload.id);
      state.splice(index, index, action.payload);
    },
    removeCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, todoToggled, removeTodo, updateTodo, removeCompleted } = todosSlice.actions;
export default todosSlice.reducer;
export const { getInitialState, caseReducers, name, reducer } = todosSlice;
