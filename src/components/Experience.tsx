import { EXPERIENCE } from "@/lib/constants";
import Image from "next/image";
import { SectionHeader } from ".";

export function Experience() {
  return (
    <>
      <SectionHeader text="Experience" black />
      <div className="relative my-4 flex min-h-[30rem] flex-col items-start justify-around gap-y-20 md:items-center">
        <TimelineLine />
        <Experiences />
      </div>
    </>
  );
}

function Experiences() {
  return (
    <>
      {EXPERIENCE.map((n) => (
        <div className="group relative z-[1]" key={JSON.stringify(n)}>
          <Image
            className="size-10 rounded-full border-4 border-white bg-white lg:size-12"
            src={n.icon}
            alt={`${n.company} icon`}
            width={0}
            height={0}
          />
          <div className="absolute left-20 top-0 w-56 space-y-2 rounded-lg bg-zinc-800 py-4 pl-4 ring ring-primary-orange sm:w-64 md:left-auto md:w-[18rem] md:group-odd:right-20 md:group-even:left-20 lg:w-96">
            <h1 className="text-base font-semibold text-primary-orange md:text-lg lg:text-2xl">
              {n.title}
            </h1>
            <h2 className="text-xs font-medium sm:text-sm md:text-base">
              {n.company}
            </h2>
            <h2 className="block text-xs font-medium uppercase text-zinc-500 md:hidden">
              {n.date}
            </h2>
          </div>
          <h2 className="absolute top-2 hidden w-96 text-sm font-semibold uppercase text-zinc-500 group-odd:left-20 group-odd:text-left group-even:right-20 group-even:text-right md:block lg:text-lg">
            {n.date}
          </h2>
        </div>
      ))}
    </>
  );
}

function TimelineLine() {
  return (
    <>
      <div className="absolute left-4 z-0 h-[30rem] w-2 rounded-lg bg-gradient-to-t from-transparent via-primary-orange to-transparent md:left-auto" />
    </>
  );
}
