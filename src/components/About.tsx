import Image from "next/image";
import { SectionHeader } from ".";
import { ReactNode } from "react";

export function About() {
  return (
    <>
      <SectionHeader text="About" />
      <div className="my-4 flex flex-col items-center gap-8 text-lg sm:text-xl md:flex-row md:justify-evenly md:text-2xl">
        <Card>
          <CardContent header="Web Development">
            <p className="text-base md:text-lg">
              Started my Web Development Journey in 2023! I am fascinated by the
              different technologies and tools available for web developers.
            </p>
          </CardContent>
          <CardContent>
            <Image
              src="/image/web.svg"
              alt="web development"
              width={0}
              height={0}
              className="m-auto h-32 w-auto md:h-40"
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent header="Game Development">
            <p className="text-base md:text-lg">
              Love the complexity and technicality that comes with game
              development. I hope to further increase my skills in the coming
              years!
            </p>
          </CardContent>
          <CardContent>
            <Image
              src="/image/controller.svg"
              alt="game development"
              width={0}
              height={0}
              className="m-auto h-32 w-auto md:h-40"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="flex w-full items-center rounded-lg bg-zinc-800 p-6 md:w-1/2">
      {children}
    </div>
  );
}

function CardContent({ header, children }: CardProps & { header?: string }) {
  return (
    <div className="w-1/2">
      {header && (
        <h1 className="text-xl font-semibold md:text-2xl">{header}</h1>
      )}
      <div className="mt-4">{children}</div>
    </div>
  );
}
