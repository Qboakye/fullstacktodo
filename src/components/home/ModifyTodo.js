import { useNavigate } from "react-router-dom";

function ModifyTodo({ id }) {
  const url = `https://qtodosbackend.herokuapp.com/todo/${id}`;
  let navigate = useNavigate();
  return (
    <div className="del-edit">
      <i
        className="fas fa-edit"
        style={{ color: "#51cf66" }}
        onClick={() => navigate(`/${id}`)}
      ></i>
      <i
        className="fas fa-trash"
        style={{ color: "#ff6b6b" }}
        onClick={() => {
          fetch(url, {
            headers: { "Content-Type": "application/json" },
            method: "DELETE",
            mode: "cors",
            body: JSON.stringify({ id }),
          });
        }}
      ></i>
    </div>
  );
}

export default ModifyTodo;
