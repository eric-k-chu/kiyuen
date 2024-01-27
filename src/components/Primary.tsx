import { HackerText } from "./HackerText";

export function Primary() {
  return (
    <div className="flex min-h-screen w-full items-center justify-around bg-zinc-950">
      <div className="flex flex-col items-start gap-y-6">
        <HackerText />
        <div className="flex w-full items-center justify-around font-sans font-semibold tracking-wider">
          <h2 className="hover:text-primary-blue text-white transition-colors duration-150 ease-in-out">
            React&#46;js
          </h2>
          <h2 className="hover:text-primary-blue text-white transition-colors duration-150 ease-in-out">
            TypeScript
          </h2>
          <h2 className="hover:text-primary-blue text-white transition-colors duration-150 ease-in-out">
            Node&#46;js
          </h2>
        </div>
        <code className="text-medium rounded-md bg-zinc-800 px-4 py-4">
          <span className="select-none pr-2">$</span>
          <span className="text-primary-blue">full-stack</span> software
          engineer
        </code>
      </div>
      <div className="h-[400px] w-[600px] rounded-md bg-red-400" />
    </div>
  );
}
