import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";
import "../style.css"

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="todos-container">
      <h3 className="todos-title">Todos</h3>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <button
              className="remove-button"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
