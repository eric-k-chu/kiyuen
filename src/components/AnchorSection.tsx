import { ReactNode } from "react";

export function AnchorSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="even:bg-zinc-800">
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-24">{children}</div>
    </section>
  );
}
