import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex">
      <div className="add-task-container">
        <AddTodo />
      </div>
      <div className="todo-list-container">
        <Todos />
      </div>
    </div>
  );
}

export default App;
