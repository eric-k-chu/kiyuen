"use client";

import { HackerText } from "./HackerText";
import { useState } from "react";

export function Primary() {
  const [lang, setLang] = useState(0);

  const langs = ["TypeScript", "C++", "C#"];

  return (
    <div className="flex min-h-screen w-full items-center justify-around bg-zinc-950">
      <div className="flex w-[440px] flex-col items-center gap-y-6">
        <HackerText />
        <div className="flex w-full items-center justify-evenly font-sans font-semibold tracking-wider">
          {langs.map((n, i) => (
            <button
              className={`border-b-2 p-2 hover:bg-white/10 ${lang === i ? "text-primary-blue border-b-primary-blue rounded-t-md" : "rounded-md border-b-transparent text-white"}`}
              key={n}
              onClick={() => setLang(i)}
            >
              {n}
            </button>
          ))}
        </div>
        <Code index={lang} />
      </div>
      <div className="h-[400px] w-[600px] rounded-md bg-red-400" />
    </div>
  );
}

function Code({ index }: { index: number }) {
  let title = "Full-Stack Software Engineer";

  if (index === 0) {
    return (
      <code className="text-medium space-x-2 rounded-md bg-zinc-800 px-4 py-4">
        <span className="text-[#5C98D0]">let</span>
        <span>title =</span>
        <span className="text-[#CAA48F]">
          &quot;{title}&quot;<span className="text-white">&#59;</span>
        </span>
      </code>
    );
  }

  if (index === 1) {
    return (
      <code className="text-medium space-x-2 rounded-md bg-zinc-800 px-4 py-4">
        <span className="text-[#5C98D0]">
          char<span className="text-white">*</span>
        </span>
        <span>title =</span>
        <span className="text-[#CAA48F]">
          &quot;{title}&quot;<span className="text-white">&#59;</span>
        </span>
      </code>
    );
  }

  return (
    <code className="text-medium space-x-2 rounded-md bg-zinc-800 px-4 py-4">
      <span className="text-[#5C98D0]">string</span>
      <span>title =</span>
      <span className="text-[#CAA48F]">
        &quot;{title}&quot;<span className="text-white">&#59;</span>
      </span>
    </code>
  );
}
