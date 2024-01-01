import { useEffect, useState } from "react";
import "./App.css";
import NewTodo from "./components/newTodo/NewTodo";
import Todos from "./components/todo/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <NewTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
