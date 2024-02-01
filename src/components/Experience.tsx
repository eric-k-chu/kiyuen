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
        <div className="group relative z-[1]" key={JSON.stringify(n)}>
          <div className="size-12 rounded-full bg-red-400" />
          <div className="absolute top-0 h-fit w-96 space-y-2 rounded-md bg-neutral-700 py-4 pl-4 group-odd:right-20 group-even:left-20">
            <h1 className="text-2xl font-semibold">{n.title}</h1>
            <h2 className="text-lg font-medium">{n.company}</h2>
          </div>
          <h2 className="absolute top-2 w-96 text-lg font-semibold text-neutral-400 group-odd:left-20 group-odd:text-left group-even:right-20 group-even:text-right">
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
