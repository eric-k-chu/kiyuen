import Image from "next/image";

export function About() {
  return (
    <>
      <h1 className="font-nova text-5xl font-semibold uppercase">About</h1>
      <div className="space-y-8">
        <p className="my-4 text-lg sm:text-xl md:text-2xl">
          Building is something I&#39;ve always been passionate about&#46; From
          building Legos to theory-crafting a Path of Exile build to designing a
          web app&#44; it&#39;s been my primary drive for becoming a software
          developer&#46;
        </p>
        <div className="flex w-full items-center justify-around">
          <Interests
            name="Web Development"
            path="/image/web.svg"
            color="blue"
          />
          <Interests
            name="Game Development"
            path="/image/controller.svg"
            color="orange"
          />
        </div>
      </div>
    </>
  );
}

function Interests({
  name,
  path,
  color,
}: {
  name: string;
  path: string;
  color: "blue" | "orange";
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={path}
        alt={name}
        width={0}
        height={0}
        className="h-16 w-auto sm:h-24 md:h-32 lg:h-40"
      />
      <h2
        className={`font-nova text-base font-semibold sm:text-lg md:text-xl lg:text-2xl ${color === "blue" ? "text-primary-blue" : "text-primary-orange"}`}
      >
        {name}
      </h2>
    </div>
  );
}
