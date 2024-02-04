import { SECTIONS } from "@/lib/sections";
import { Fragment } from "react";

export function Navbar() {
  return (
    <nav className="fixed top-2 z-10 flex w-full items-center justify-center px-2">
      <div className="flex w-full max-w-[600px] items-center justify-evenly gap-1 rounded-lg border border-zinc-700/50 bg-zinc-800 p-3 shadow-md">
        {SECTIONS.map((n, i) => (
          <Fragment key={n}>
            <a
              href={`#${n}`}
              rel="noopener"
              className="border-b-2 border-b-transparent font-nova text-sm uppercase text-zinc-400 transition-colors duration-300 ease-in-out hover:border-b-primary-blue hover:text-zinc-50 sm:text-base"
            >
              {n}
            </a>
            {i < SECTIONS.length - 1 && (
              <span className="text-primary-blue">|</span>
            )}
          </Fragment>
        ))}
      </div>
    </nav>
  );
}
