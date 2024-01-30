"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  name: string;
  path: string;
}

const PROJECTS: Project[] = [
  { name: "Project S", path: "/image/projects.png" },
  { name: "Geo Run", path: "/image/georun.png" },
  { name: "Castle", path: "/image/castle.png" },
  { name: "Artus", path: "/image/artus.png" },
  { name: "Castle v2", path: "/image/castle2.png" },
];

export function Projects() {
  const [selected, setSelected] = useState(0);

  function next(): void {
    setSelected((selected + 1) % PROJECTS.length);
  }

  function prev(): void {
    setSelected((selected - 1 + PROJECTS.length) % PROJECTS.length);
  }

  return (
    <>
      <h1 className="text-5xl font-semibold">Projects</h1>
      <div className="flex items-center justify-between py-4">
        <button onClick={prev}>PREV</button>
        <div className="relative flex h-[400px] w-full items-center justify-center">
          <Card
            position="left"
            project={
              selected === 0
                ? PROJECTS[PROJECTS.length - 1]
                : PROJECTS[selected - 1]
            }
            prev={prev}
          />
          <Card position="mid" project={PROJECTS[selected]} />
          <Card
            position="right"
            project={
              selected === PROJECTS.length - 1
                ? PROJECTS[0]
                : PROJECTS[selected + 1]
            }
            next={next}
          />
        </div>
        <button onClick={next}>NEXT</button>
      </div>
    </>
  );
}

type CardProps =
  | {
      position: "mid";
      project: Project;
    }
  | {
      position: "left";
      project: Project;
      prev: () => void;
    }
  | {
      position: "right";
      project: Project;
      next: () => void;
    };

function Card(props: CardProps) {
  if (props.position === "right") {
    return (
      <div
        className="absolute right-[4rem] z-[1] flex h-[400px] w-[700px] scale-90 items-center justify-center rounded-xl after:z-[2] after:size-full after:rounded-xl after:bg-black/60 hover:cursor-pointer"
        onClick={props.next}
      >
        <Image
          src={props.project.path}
          alt={props.project.name}
          width={0}
          height={0}
          unoptimized
          className="absolute size-full rounded-xl object-cover"
        />
      </div>
    );
  }

  if (props.position === "left") {
    return (
      <div
        className="absolute left-[4rem] z-[1] flex h-[400px] w-[700px] scale-90 items-center justify-center rounded-xl after:z-[2] after:size-full after:rounded-xl after:bg-black/60 hover:cursor-pointer"
        onClick={props.prev}
      >
        <Image
          src={props.project.path}
          alt={props.project.name}
          width={0}
          height={0}
          unoptimized
          className="absolute size-full rounded-xl object-cover"
        />
      </div>
    );
  }

  return (
    <div className="absolute z-[3] flex h-[400px] w-[700px] items-end rounded-xl after:absolute after:z-[4] after:size-full after:rounded-xl after:bg-black/20">
      <Image
        src={props.project.path}
        alt={props.project.name}
        width={0}
        height={0}
        unoptimized
        className="absolute size-full rounded-xl object-cover"
      />
      <div className="z-[5] p-8">
        <h1 className="rounded-md bg-primary-blue px-2 py-1 text-4xl font-semibold">
          {props.project.name}
        </h1>
        <h1 className="">{props.project.name}</h1>
      </div>
    </div>
  );
}
