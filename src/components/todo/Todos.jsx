import React, { useEffect, useState } from "react";
import "./Todo.scss";

const Todos = (props) => {
  const { todos, setTodos } = props;

  const deleteTodo = (id) => {
    fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => setTodos(res));
  };

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{todo.title}</h2>{" "}
            <button
              style={{ paddingInline: "0.5rem" }}
              onClick={() => deleteTodo(todo.id)}
            >
              delete
            </button>
          </div>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
