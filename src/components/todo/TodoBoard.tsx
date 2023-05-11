import { useEffect } from "react";
import {
  SET_AZ,
  SET_INCOMPLETED,
  SET_NEWER,
  SET_OLDER,
  SET_ZA,
} from "../../lib/action-type";
import { EmptyState } from "../mollecules/EmptyState";
import TodoItem from "./TodoItem";

export default function TodoBoard() {
  const todos = [
    {
      id: 1,
      title: "Todo 1",
      is_active: true,
      priority: "normal",
    },
    {
      id: 2,
      title: "Todo 2",
      is_active: true,
      priority: "normal",
    },
  ];

  const openForm = () => {
    console.log("open form");
  };

  // const sortTodos = (action) => {
  //     switch (action.type) {
  //       case SET_NEWER:
  //         return todos.sort((a, b) => b.id - a.id)
  //       case SET_OLDER:
  //         return todos.sort((a, b) => a.id - b.id)
  //       case SET_AZ:
  //         return todos.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1))
  //       case SET_ZA:
  //         return todos.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1))
  //       case SET_INCOMPLETED:
  //         return todos.sort((a, b) => b.is_active - a.is_active)
  //       default:
  //         return todos
  //     }
  //   }

  useEffect(
    () => {
      // sortTodos()
      // return () => {};
    },
    [
      // sortTodos
    ]
  );

  if (todos.length > 0) {
    return (
      <div className="flex flex-col w-full space-y-2 md:space-y-3">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={0}
              title={""}
              is_active={false}
              priority={"normal"}
            />
          );
        })}
      </div>
    );
  }

  return (
    <EmptyState
      onClick={openForm}
      data-cy="todo-empty-state"
      src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"
    />
  );
}
