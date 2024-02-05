import { ReactNode } from "react";

export function AnchorSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="from-grad-blue to-grad-purple even:bg-gradient-to-br"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 pb-20 pt-12">
        {children}
      </div>
    </section>
  );
}
