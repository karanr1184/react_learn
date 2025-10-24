import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello world"
        },
    ],
    editingTodo: null,
}

// Unlike contextAPI, here in redux toolkit we provide complete definition of the function/reducers during initialisation
// Also here, we always get two parametes 'state' and 'action' in the reducers
// So state is the current state of our context/variables
// Action is the extra arguments that we want in the function for performing the task
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        pushTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => (todo.id === action.payload.id ? todo.text=action.payload.text : todo))
            state.editingTodo = null;
        },
        setEditingTodo: (state, action) => {
            state.editingTodo = action.payload
        }
    }
});

export const {pushTodo, removeTodo, updateTodo, setEditingTodo} = todoSlice.actions
export default todoSlice.reducer