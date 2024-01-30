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
        <div className="relative h-[400px] w-[1000px]">
          <div className=" absolute z-[2] flex h-[400px] w-[500px] translate-x-[50%] items-center justify-center bg-red-400">
            <h1>{arr[selected]}</h1>
          </div>
          <div
            className="absolute z-[1] h-[400px] w-[500px] translate-x-[25%] -scale-90 bg-green-400/50 hover:cursor-pointer"
            onClick={prev}
          />
          <div
            className="absolute z-[1] h-[400px] w-[500px] translate-x-[75%] -scale-90 bg-blue-400/50 hover:cursor-pointer"
            onClick={next}
          />
        </div>
        <button onClick={next}>NEXT</button>
      </div>
    </>
  );
}
