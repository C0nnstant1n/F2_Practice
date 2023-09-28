import * as React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../store/todoSlice";

interface TodoItemsProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem = (state: TodoItemsProps) => {
  console.log(state);

  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={state.completed}
        onChange={() => {
          console.log(state.completed);
          toggleComplete(state.id);
        }}
      />
      <span>{state.title}</span>
      <span className='delete' onClick={() => dispatch(removeTodo(state.id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
