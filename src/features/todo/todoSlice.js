import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      state.push(todo);
      // return [...state, todo] is also good
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
