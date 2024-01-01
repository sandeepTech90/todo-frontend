import React, { useEffect, useState } from "react";
import "./Todo.scss";

const Todos = () => {
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
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
