import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function SingleTodo() {
  const [todo, setTodo] = useState();
  const { id } = useParams();

  let navigate = useNavigate();

  const url = `https://qtodosbackend.herokuapp.com/todo/${id}`;

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(({ todo }) => setTodo(todo));
  }, [url, id]);

  if (!todo) return <></>;

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(todo),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <div className="w-50 container shadow-sm border border-1 bg-light pb-4 my-5 ">
        <h2 className="p-3 text-center">Edit Todos</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="editName"
                value={todo.name}
                onChange={(e) => setTodo({ ...todo, name: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-2">Completed</div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                  checked={todo.completed}
                  onChange={() =>
                    setTodo((prev) => ({ ...todo, completed: !prev.completed }))
                  }
                />
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="btn btn-lg btn-primary btn-block w-100"
              type="submit"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
      <div className="back-btn">
        <button
          className="btn w-25 btn-secondary back"
          onClick={() => navigate("/")}
        >
          Back To Todos
        </button>
      </div>
    </>
  );
}

export default SingleTodo;
