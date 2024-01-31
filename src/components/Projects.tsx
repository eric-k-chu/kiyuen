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
      <motion.div className="flex items-center justify-center gap-x-8 py-4">
        {PROJECTS.map((n) => (
          <div
            className={`relative h-[400px] transition-all duration-300 ease-in-out ${selected === n ? "w-[500px]" : "w-[150px]"}`}
            key={n.name}
          >
            <div
              className={`absolute z-[2] size-full rounded-xl transition-colors duration-300 ease-in-out ${selected === n ? "bg-black/10" : "bg-black/60"}`}
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
              className={`absolute bottom-3 right-3 z-[3] -rotate-180 text-4xl font-semibold transition-opacity duration-300 ease-in-out [writing-mode:vertical-rl] ${selected === n ? "opacity-0" : "opacity-100"}`}
            >
              {n.name}
            </h1>
            <div
              className={`absolute bottom-0 left-0 z-[3] w-full space-y-2 rounded-b-xl bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ease-in-out ${selected === n ? "opacity-100 delay-200" : "pointer-events-none opacity-0 delay-0"}`}
            >
              <div className="p-3">
                <h1 className="w-fit rounded-md bg-primary-blue p-1 text-4xl font-semibold">
                  {n.name}
                </h1>
                <h1 className="text-2xl font-semibold">{n.desc}</h1>
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
