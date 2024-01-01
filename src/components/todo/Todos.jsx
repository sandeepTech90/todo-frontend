import React, { useEffect, useState } from "react";
import "./Todo.scss";

const Todos = (props) => {
  const { todos } = props;

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
