import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice.js";

function App() {
  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default App;
