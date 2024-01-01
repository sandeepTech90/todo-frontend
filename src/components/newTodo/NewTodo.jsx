import { useState } from "react";
import "./NewTodo.scss";

const NewTodo = (props) => {
  const { setTodos } = props;
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const addTodo = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:3000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => setTodos(res));
  };

  return (
    <div className="new-todo">
      <form action="" onSubmit={addTodo}>
        <h2>New Todo</h2>
        <div className="item">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div className="item">
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Enter description for the todo"
            onChange={(e) => {
              console.log(e.target.value);
              setFormData((prev) => ({ ...prev, description: e.target.value }));
            }}
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTodo;
