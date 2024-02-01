"use client";

import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Github } from ".";

export function Projects() {
  const [selected, setSelected] = useState(PROJECTS[0]);

  return (
    <>
      <h1 className="text-5xl font-semibold">Projects</h1>
      <motion.div className="my-4 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
        {PROJECTS.map((n) => (
          <div
            className={`relative w-full transition-all duration-300 ease-in-out lg:h-[400px] ${selected === n ? "h-[500px] lg:w-[500px]" : "h-[150px] lg:w-[150px]"}`}
            key={n.name}
          >
            <div
              className={`absolute z-[2] size-full rounded-xl transition-colors duration-300 ease-in-out ${selected === n ? "cursor-default bg-black/10" : "cursor-pointer bg-black/60"}`}
              onClick={() => setSelected(n)}
            />
            <Image
              key={n.name}
              src={n.path}
              alt={n.name}
              width={0}
              height={0}
              unoptimized
              className="absolute z-[1] size-full rounded-xl object-cover"
            />
            <h1
              className={`absolute bottom-3 left-3 z-[3] text-2xl font-semibold transition-opacity duration-300 ease-in-out lg:left-auto lg:right-3 lg:-rotate-180 lg:text-4xl lg:[writing-mode:vertical-rl] ${selected === n ? "opacity-0" : "opacity-100"}`}
            >
              {n.name}
            </h1>
            <div
              className={`absolute bottom-0 left-0 z-[3] w-full space-y-2 rounded-b-xl bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ease-in-out ${selected === n ? "opacity-100 delay-200" : "pointer-events-none opacity-0 delay-0"}`}
            >
              <div className="p-3">
                <h1 className="w-fit rounded-md bg-primary-blue p-1 text-2xl font-semibold lg:text-4xl">
                  {n.name}
                </h1>
                <h1 className="text-base font-semibold md:text-lg lg:text-2xl">
                  {n.desc}
                </h1>
                <div className="flex items-center gap-x-4">
                  <a target="_blank" href={n.gh}>
                    <Github />
                  </a>
                  {n.live && (
                    <a>
                      <Image
                        src="/image/link.svg"
                        alt={`${n.name} live demo`}
                        width={0}
                        height={0}
                        className="size-6"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}
