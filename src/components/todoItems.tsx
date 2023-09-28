import * as React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../store/todoSlice";

const TodoItem = (state) => {
  console.log(state);

  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={state.complited}
        onChange={() => toggleComplete(state.id)}
      />
      <span>{state.title}</span>
      <span className='delete' onClick={() => dispatch(removeTodo(state.id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
