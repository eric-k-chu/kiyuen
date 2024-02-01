import { EXPERIENCE } from "@/lib/constants";
import Image from "next/image";

export function Experience() {
  return (
    <>
      <h1 className="text-5xl font-semibold">Experience</h1>
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
          <div className="shadow-primary-orange absolute left-20 top-0 w-56 space-y-2 rounded-md bg-neutral-700 py-4 pl-4 shadow-md sm:w-64 md:left-auto md:w-[18rem] md:group-odd:right-20 md:group-even:left-20 lg:w-96">
            <h1 className="text-primary-orange text-base font-semibold md:text-lg lg:text-2xl">
              {n.title}
            </h1>
            <h2 className="text-xs font-medium md:text-sm lg:text-lg">
              {n.company}
            </h2>
            <h2 className="block text-xs font-medium uppercase md:hidden">
              {n.date}
            </h2>
          </div>
          <h2 className="absolute top-2 hidden w-96 text-sm font-semibold uppercase text-neutral-400 group-odd:left-20 group-odd:text-left group-even:right-20 group-even:text-right md:block lg:text-lg">
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
      <div className="absolute left-4 z-0 h-[30rem] w-2 rounded-md bg-gradient-to-t from-transparent via-primary-blue to-transparent md:left-auto" />
    </>
  );
}
