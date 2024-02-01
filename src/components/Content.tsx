"use client";

import { PAGE_LINKS } from "@/lib/sections";
import { AnchorSection } from ".";

export function Content() {
  return (
    <>
      {PAGE_LINKS.map((n) => (
        <AnchorSection id={n.name}>{n.section}</AnchorSection>
      ))}
    </>
  );
}
