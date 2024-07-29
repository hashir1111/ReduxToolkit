import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import '../style.css'

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch()
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("")
  };
  return (
    <div className="add-task">
      <form onSubmit={addHandler}>
        <input
          type="text"
          placeholder="Add Todo"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-field"
        />
        <input
          type="submit"
          value="Add Todo"
          className="submit-button"
        />
      </form>
    </div>
  );
};

export default AddTodo;