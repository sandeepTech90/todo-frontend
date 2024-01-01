import "./NewTodo.scss";

const NewTodo = () => {
  const addTodo = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new-todo">
      <form action="">
        <h2>New Todo</h2>
        <div className="item">
          <label htmlFor="">Title</label>
          <input type="text" placeholder="Enter title" />
        </div>
        <div className="item">
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Enter description for the todo"
          ></textarea>
        </div>
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
