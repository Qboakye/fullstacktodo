import ModifyTodo from "./ModifyTodo";

function TodosItem({ name, completed, id }) {
  return (
    <li className="shadow-sm border border-1 bg-light p-3 mb-3">
      <i className="fas fa-check-circle" style={{ color: "#51cf66" }}></i>
      <h5
        className="text"
        style={{ textDecoration: completed ? "line-through" : "" }}
      >
        {name}
      </h5>
      <ModifyTodo id={id} />
    </li>
  );
}

export default TodosItem;
