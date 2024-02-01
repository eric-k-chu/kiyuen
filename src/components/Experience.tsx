import { EXPERIENCE } from "@/lib/constants";

export function Experience() {
  return (
    <>
      <h1 className="text-5xl font-semibold">Experience</h1>
      <div className="relative flex min-h-[30rem] flex-col items-center justify-around gap-y-20 py-4">
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
        <div
          className="group relative z-[1] hidden md:block"
          key={JSON.stringify(n)}
        >
          <div className="size-10 rounded-full bg-red-400 lg:size-12" />
          <div className="absolute top-0 w-[18rem] space-y-2 rounded-md bg-neutral-700 py-4 pl-4 group-odd:right-20 group-even:left-20 lg:w-96">
            <h1 className="text-lg font-semibold lg:text-2xl">{n.title}</h1>
            <h2 className="text-sm font-medium lg:text-lg">{n.company}</h2>
          </div>
          <h2 className="absolute top-2 w-96 text-sm font-semibold text-neutral-400 group-odd:left-20 group-odd:text-left group-even:right-20 group-even:text-right lg:text-lg">
            {n.date}
          </h2>
        </div>
      ))}
    </>
  );
}

function TimelineLine() {
  return (
    <div className="absolute z-0 h-[30rem] w-2 rounded-md bg-gradient-to-t from-transparent via-primary-blue to-transparent" />
  );
}
