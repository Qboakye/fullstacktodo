import useFetch from "../../hooks/useFetch";
import TodosItem from "./TodosItem";

const url = "https://qtodosbackend.herokuapp.com/todo";

function TodosDisplay() {
  const [data] = useFetch(url);

  return (
    <ul className="display-area w-50 ">
      {data &&
        data.map(({ _id, name, completed }) => (
          <TodosItem key={_id} name={name} completed={completed} id={_id} />
        ))}
    </ul>
  );
}

export default TodosDisplay;
