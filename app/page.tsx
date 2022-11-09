import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="text-rose-500">
      <Link href={`/todos`}>todos</Link>
    </div>
  );
};

export default Home;
