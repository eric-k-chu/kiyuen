"use client";

// must have use client if importing an object with a JSX property
import { PAGE_LINKS } from "@/lib/sections";
import { useState, Fragment } from "react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-zinc-900/90 px-12 py-6 backdrop-blur-sm">
      <h1 className="text-xl font-medium">朱</h1>
      <MobileMenu />
      <nav className="hidden items-center gap-x-4 text-xl font-semibold tracking-wider md:flex">
        {PAGE_LINKS.map((n, i) => (
          <Fragment key={n.name}>
            <a
              href={`#${n.name}`}
              rel="noopener"
              className="border-b-2 border-b-transparent uppercase transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
            >
              {n.name}
            </a>
            {i < PAGE_LINKS.length - 1 && (
              <span className="font-medium">&#47;</span>
            )}
          </Fragment>
        ))}
      </nav>
    </nav>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 flex min-h-screen w-screen items-center justify-end transition-all duration-300 ease-in-out ${isOpen ? "bg-zinc-900/25 backdrop-blur-md" : "pointer-events-none bg-transparent"}`}
      >
        <nav
          className={`flex size-full flex-col gap-y-8 p-8 text-xl font-semibold tracking-wider transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          {PAGE_LINKS.map((n) => (
            <a
              href={`#${n.name}`}
              key={n.name}
              rel="noopener"
              onClick={() => setIsOpen(false)}
              className="w-fit border-b-2 border-b-transparent uppercase transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
            >
              {n.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
