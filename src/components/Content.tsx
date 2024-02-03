"use client";

import { SECTIONS } from "@/lib/sections";
import { About, AnchorSection, Contact, Experience, Projects, Tech } from ".";
import { useCallback } from "react";

export function Content() {
  const getSection = useCallback(
    (name: (typeof SECTIONS)[number]) => {
      switch (name) {
        case "about":
          return <About />;
        case "tech":
          return <Tech />;
        case "projects":
          return <Projects />;
        case "experience":
          return <Experience />;
        case "contact":
          return <Contact />;
        default:
          return <></>;
      }
    },
    [SECTIONS],
  );
  return (
    <>
      {SECTIONS.map((n) => (
        <AnchorSection id={n} key={n}>
          {getSection(n)}
        </AnchorSection>
      ))}
    </>
  );
}
