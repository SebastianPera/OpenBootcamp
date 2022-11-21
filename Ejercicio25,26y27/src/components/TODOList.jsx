import { Button, FormControlLabel, Switch } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "./Form";
import { useState, useContext } from "react";
import { StoreContext } from "./../store/storeProvider";
import style from '../style/styled.module.css'

const TODOList = () => {
  const [todos, dispatch, types] = useContext(StoreContext);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState(null);
  const [completed, setCompleted] = useState("");

  let todoID = Date.now();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.length !== 0) {
      const addTodo = { id: todoID, nameTodo: task, checked: false };
      dispatch({ type: types.CREATE, payload: addTodo });
      sessionStorage.setItem("todos", JSON.stringify([...todos, addTodo]));
      setTask("");
    }
  };

  const handleDelete = (todo) => {
    dispatch({ type: types.DELETE, payload: todo.id });
    sessionStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((item) => item.id !== todo.id))
    );
  };

  const handleFilter = (e) => {
    let value = e.target.value;
    switch (value) {
      case "Completed":
        setFilter(todos.filter((todo) => todo.checked === true));
        break;
      case "Not Completed":
        setFilter(todos.filter((todo) => todo.checked === false));
        break;
      default:
        setFilter(null);
        break;
    }
    setCompleted(e.target.value);
  };

  const handleChecked = (todo, e) => {
    const todoCheck = { ...todo, checked: e.target.checked };
    dispatch({ type: types.CHECKED, payload: todoCheck });
    sessionStorage.setItem(
      "todos",
      JSON.stringify(
        todos.map((item) => (item.id === todo.id ? todoCheck : item))
      )
    );
  };

  return (
    <>
      <Form
        task={task}
        setTask={setTask}
        handleFilter={handleFilter}
        handleSubmit={handleSubmit}
        completed={completed}
      />
      {todos.length === 0 || filter?.length === 0 ? (
        <h3>There are no tasks</h3>
      ) : (
        <ul className={style.ul}>
          {filter
            ? filter.map((todo) => (
                <li key={todo.id}>
                  <div className={style.liText}>
                    <span>{todo.nameTodo}</span>
                  </div>
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={todo.checked}
                        onChange={(e) => handleChecked(todo, e)}
                      />
                    }
                    label={todo.checked ? "Completed" : "Not Completed"}
                    labelPlacement="bottom"
                  />
                  <Button
                    onClick={() => handleDelete()}
                    variant="outlined"
                    startIcon={<DeleteIcon fontSize="inherit" color="error" />}
                  >
                    Delete
                  </Button>
                </li>
              ))
            : todos.map((todo) => (
                <li key={todo.id}>
                  <div className={style.liText}>
                    <span>{todo.nameTodo}</span>
                  </div>
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={todo.checked}
                        onChange={(e) => handleChecked(todo, e)}
                        className={style.label}
                      />
                    }
                    label={todo.checked ? "Completed" : "Not Completed"}
                    labelPlacement="bottom"
                  />
                  <Button
                    onClick={() => handleDelete(todo)}
                    variant="outlined"
                    startIcon={<DeleteIcon fontSize="inherit" />}
                    color="error"
                  >
                    Delete
                  </Button>
                </li>
              ))}
        </ul>
      )}
    </>
  );
};

export default TODOList;
