import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello Word",
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action) => {
            if (!action.payload) return

            const todo = {
                id: nanoid(),
                text: action.payload,
            }

            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const toUpdate = state.todos.filter((todo) => todo.id === action.payload)
            console.log(toUpdate[0].text);
        },

    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer