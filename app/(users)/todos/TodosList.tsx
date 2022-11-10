import Link from "next/link";
import React from "react";
import { ITodo } from "../../../typings";

const fetchTodos = async (): Promise<ITodo[]> => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: ITodo[] = await res.json();

  return todos;
};

const TodosList = async () => {
  const todos: ITodo[] = await fetchTodos();

  return (
    <div className="flex flex-col">
      {todos?.map((todo, i) => (
        <Link className="hover:underline" href={`/todos/${todo.id}`}>
          {todo.title}
        </Link>
      ))}
    </div>
  );
};

export default TodosList;
