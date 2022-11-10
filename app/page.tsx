import Link from "next/link";
import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <h1>Loading Todos</h1>

        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading 2...</p>}>
        <h1>Loading Shopping Trolley</h1>

        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
