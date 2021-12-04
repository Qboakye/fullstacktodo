import { useState } from "react";

function TodosInput() {
  const [name, setName] = useState("");

  const url = "https://qtodosbackend.herokuapp.com/todo";

  const submitTodo = (e) => {
    e.preventDefault();
    fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ name }),
      mode: "cors",
    })
      .then(() => {
        setName("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container shadow-sm border border-1 bg-light pb-4 my-5 text-center w-50">
      <h2 className="p-3">Todos Manager</h2>
      <form className="input-group mb-3 container" onSubmit={submitTodo}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          aria-label="Enter Todo"
          aria-describedby="basic-addon2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodosInput;
