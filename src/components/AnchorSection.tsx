import { ReactNode } from "react";

export function AnchorSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <a id={id} className="block font-sans even:bg-zinc-800">
      <div className="mx-auto max-w-7xl py-20">{children}</div>
    </a>
  );
}
