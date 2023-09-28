import * as React from "react";
import { useAppDispatch } from "../../hook";
import { addTodo } from "../../store/todoSlice";
import TodoList from "../TodoList";

// interface TodoItemsProps {
//   id: string;
//   title: string;
//   completed: boolean;
// }

function Main() {
  const dispatch = useAppDispatch();
  const addTask = () => dispatch(addTodo("123"));

  return (
    <>
      <h2>Test</h2>

      <input type='text' onSubmit={(e) => dispatch(addTodo(e.target.value))} />

      <button onClick={addTask}>Click me</button>

      {/* <p>{completed}</p> */}

      <TodoList />
    </>
  );
}

export default Main;
