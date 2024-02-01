"use client";

// must have use client if importing an object with a JSX property
import { PAGE_LINKS } from "@/lib/sections";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-zinc-900/90 px-12 py-6 backdrop-blur-sm">
      <h1 className="text-xl font-medium">朱</h1>
      <nav className="hidden items-center gap-x-8 text-xl font-semibold tracking-wider md:flex">
        {PAGE_LINKS.map((n) => (
          <a
            href={`#${n.name}`}
            key={n.name}
            rel="noopener"
            className="border-b-2 border-b-transparent uppercase transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
          >
            {n.name}
          </a>
        ))}
      </nav>
    </nav>
  );
}
