import { ReactNode } from "react";

export function AnchorSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <a id={id} className="mx-auto block max-w-7xl py-20 font-sans">
      {children}
    </a>
  );
}
