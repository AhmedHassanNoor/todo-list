export interface Todo {
    id: string
    bodyText: string
    completed: boolean
}

export type TodoListType = Todo[]

export interface AppState {
    todoList: TodoListType
}