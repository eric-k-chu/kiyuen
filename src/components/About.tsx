import Image from "next/image";

export function About() {
  return (
    <>
      <h1 className="text-5xl font-semibold uppercase">About</h1>
      <p className="my-4 max-w-[500px] font-sans text-lg">
        Building is something I&#39;ve always been passionate about&#46; From
        building Legos to theory-crafting a Path of Exile build to designing a
        web app&#44; it&#39;s been my primary drive for becoming a software
        developer&#46;
      </p>
    </>
  );
}

function tes() {
  return (
    <div>
      <Image
        src="/image/web.svg"
        alt="web development"
        width={0}
        height={0}
        className="h-40 w-auto"
      />
      <Image
        src="/image/controller.svg"
        alt="game development"
        width={0}
        height={0}
        className="h-40 w-auto"
      />
    </div>
  );
}
