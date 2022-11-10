import React from "react";
import { ITodo } from "../../../../typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

interface ITodoPageProps {
  params: {
    id: string;
  };
}

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 60 },
  });
  const todo: ITodo = await res.json();

  return todo;
};

const TodoPage = async ({ params: { id } }: ITodoPageProps) => {
  const todo = await fetchTodo(id);

  if (!todo.id) {
    return notFound();
  }

  return <div>{todo.title}</div>;
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: ITodo[] = await res.json();

  const trimmed = todos.splice(0, 10);

  return trimmed.map((todo) => ({
    id: todo.id.toString(),
  }));
}
