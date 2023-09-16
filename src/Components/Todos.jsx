
import { deleteTodo, getallTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tab from "./Tab";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";
import { useEffect, useState } from "react";

const Todos = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    dispatch(getallTodos)
      .then(() => setLoading(false)) 
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  }, []);

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <article>
      <div>
        <Tab currentTab={currentTab} />
        {loading ? (
          <p>Loading...</p> 
        ) : todos.some((todo) => todo.done) ? (
          <button onClick={removeDoneTodos} className="button clear">
            Remove Done Todos
          </button>
        ) : null}
      </div>
      <ul>
        {getTodos()?.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
