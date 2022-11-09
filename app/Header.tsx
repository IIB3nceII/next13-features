import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex space-x-4 p-5 bg-blue-500">
      <Link href={`/`}>Home</Link>
      <Link href={`/todos`}>Todos</Link>
    </header>
  );
};

export default Header;
