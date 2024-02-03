"use client";

import { useState } from "react";
import { HackerText } from "./HackerText";

export function Primary() {
  const [lang, setLang] = useState(0);

  const langs = ["TypeScript", "C++", "C#"];

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url(/image/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="z-[1] flex w-[440px] flex-col items-center gap-y-6">
        <HackerText />
        <div className="flex w-full items-center justify-evenly font-semibold tracking-wider">
          {langs.map((n, i) => (
            <button
              className={`border-b-2 p-2 text-sm hover:bg-white/10 md:text-base ${lang === i ? "rounded-t-md border-b-primary-blue text-primary-blue" : "rounded-lg border-b-transparent text-white"}`}
              key={n}
              onClick={() => setLang(i)}
            >
              {n}
            </button>
          ))}
        </div>
        <Code index={lang} />
        <div className="flex w-full justify-evenly">
          <a
            download="eric_chu_resume.pdf"
            className="rounded-lg bg-white px-4 py-2 text-center text-lg font-semibold text-black hover:bg-white/90"
            href="/eric_chu_resume.pdf"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-white px-4 py-2 text-center text-lg font-semibold text-black hover:bg-white/90"
            rel="noopener"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

function Code({ index }: { index: number }) {
  let title = "Full-Stack Software Engineer";

  if (index === 0) {
    return (
      <code className="space-x-2 rounded-lg bg-zinc-700 px-4 py-4 text-xs sm:text-sm md:text-base">
        <span className="text-[#5C98D0]">let</span>
        <span>title &#61;</span>
        <span className="text-[#CAA48F]">
          &quot;{title}&quot;<span className="text-white">&#59;</span>
        </span>
      </code>
    );
  }

  if (index === 1) {
    return (
      <code className="space-x-2 rounded-lg bg-zinc-700 px-4 py-4 text-xs sm:text-sm md:text-base">
        <span className="text-[#5C98D0]">
          char<span className="text-white">*</span>
        </span>
        <span>title &#61;</span>
        <span className="text-[#CAA48F]">
          &quot;{title}&quot;<span className="text-white">&#59;</span>
        </span>
      </code>
    );
  }

  return (
    <code className="space-x-2 rounded-lg bg-zinc-700 px-4 py-4 text-xs sm:text-sm md:text-base">
      <span className="text-[#5C98D0]">string</span>
      <span>title &#61;</span>
      <span className="text-[#CAA48F]">
        &quot;{title}&quot;<span className="text-white">&#59;</span>
      </span>
    </code>
  );
}
