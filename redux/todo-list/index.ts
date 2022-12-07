import { createSlice } from '@reduxjs/toolkit'
import { Todo } from 'types/types'
import { RootState } from 'redux/store';

const initialState: Todo[]  = [{
    id: '',
    bodyText: '',
    completed: false
}]

/* Selectors */

const selectTodosState = (rootState: RootState) => rootState.todos;
export const selectTodosList = (rootState: RootState) =>
selectTodosState(rootState);
  
/* Reducer */

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      if(state.length === 1 && !state[0].id) {
        state.pop()
      }
      console.log({action})
      state.push({
        id: action.payload.id,
        bodyText: action.payload.bodyText,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if(todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, todoToggled, removeTodo } = todosSlice.actions
export default todosSlice.reducer
export const { getInitialState, caseReducers, name, reducer } = todosSlice