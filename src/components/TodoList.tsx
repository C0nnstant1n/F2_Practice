import * as React from "react";
import { useAppSelector } from "../hook";
import TodoItem from "./todoItems";

const TodoList = () => {
  const todoes = useAppSelector((state) => state.todo.list);

  return (
    <ul>
      {todoes.map((todo) => (
        <TodoItem {...todo} key={todo.id}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
