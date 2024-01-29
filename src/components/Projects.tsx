"use client";

import { useState } from "react";

const arr = [1, 2, 3, 4, 5];

export function Projects() {
  const [selected, setSelected] = useState(0);

  function next(): void {
    setSelected((selected + 1) % arr.length);
  }

  function prev(): void {
    setSelected((selected - 1 + arr.length) % arr.length);
  }

  return (
    <>
      <h1 className="text-5xl font-semibold">Projects</h1>
      <div className="flex items-center justify-between py-4">
        <button onClick={prev}>PREV</button>
        <div className="relative flex h-[400px] w-[500px] items-center justify-center bg-red-400">
          <h1>{arr[selected]}</h1>
          <div className="absolute left-40 z-[-1] h-[400px] w-[500px] -scale-90 bg-blue-400/50" />
          <div className="absolute right-40 z-[-1] h-[400px] w-[500px] -scale-90 bg-blue-400/50" />
        </div>
        <button onClick={next}>NEXT</button>
      </div>
    </>
  );
}
