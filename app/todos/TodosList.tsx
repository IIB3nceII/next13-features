import Link from "next/link";
import React from "react";
import { ITodo } from "../../typings";

const fetchTodos = async (): Promise<ITodo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: ITodo[] = await res.json();

  return todos;
};

const TodosList = async () => {
  const todos: ITodo[] = await fetchTodos();

  return (
    <div>
      {todos?.map((todo, i) => (
        <Link href={`/todos/${todo.id}`}>{todo.id}</Link>
      ))}
    </div>
  );
};

export default TodosList;
