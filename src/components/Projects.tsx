"use client";

import Image from "next/image";
import { useState } from "react";
import { Github } from ".";

interface Project {
  name: string;
  path: string;
  desc: string;
  gh: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Project S",
    path: "/image/projects.png",
    desc: "A 2.5D action platformer",
    gh: "https://github.com/eric-k-chu/Project-S",
  },
  {
    name: "Geo Run",
    path: "/image/georun.png",
    desc: "A 2.5D endless runner",
    gh: "https://github.com/eric-k-chu/Geo-Run",
    live: "https://eric-k-chu.github.io/Geo-Run-Host/",
  },
  {
    name: "Castle",
    path: "/image/castle.png",
    desc: "A Chess.com statistics site.",
    gh: "https://github.com/eric-k-chu/Castle",
    live: "https://eric-k-chu.github.io/Castle/",
  },
  {
    name: "Artus",
    path: "/image/artus.png",
    desc: "A full-stack video hosting web app.",
    gh: "https://github.com/eric-k-chu/Artus",
    live: "http://artus-dev.us-west-1.elasticbeanstalk.com/",
  },
  {
    name: "Castle v2",
    path: "/image/castle2.png",
    desc: "A Chess.com statistics site with Next.js",
    gh: "https://github.com/eric-k-chu/Castle-v2",
    live: "https://castle2.vercel.app/",
  },
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
        <button onClick={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            className="size-8 stroke-neutral-500 hover:stroke-neutral-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
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
        <button onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            className="size-8 stroke-neutral-500 hover:stroke-neutral-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
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
    <div className="absolute z-[3] flex h-[400px] w-[700px] items-end rounded-xl shadow-md after:absolute after:z-[4] after:size-full after:rounded-xl after:bg-black/40">
      <Image
        src={props.project.path}
        alt={props.project.name}
        width={0}
        height={0}
        unoptimized
        className="absolute size-full rounded-xl object-cover"
      />
      <div className="z-[5] space-y-4 p-8">
        <h1 className="w-fit rounded-md bg-primary-blue px-2 py-1 text-4xl font-semibold">
          {props.project.name}
        </h1>
        <h2 className="text-xl font-semibold">{props.project.desc}</h2>
        <div className="flex items-center gap-x-4">
          <a target="_blank" href={props.project.gh}>
            <Image
              src="/image/github.svg"
              alt="github"
              width={0}
              height={0}
              className="size-12"
            />
          </a>
          {props.project.live && (
            <a target="_blank" href={props.project.live}>
              <Image
                src="/image/link.svg"
                alt="live site"
                width={0}
                height={0}
                className="size-10"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
