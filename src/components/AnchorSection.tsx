import { ReactNode } from "react";

export function AnchorSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="block font-sans even:bg-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-20">{children}</div>
    </section>
  );
}
