"use client";

import { SECTIONS } from "@/lib/sections";
import { About, AnchorSection, Contact, Experience, Projects, Tech } from ".";

export function Content() {
  const sections: { name: (typeof SECTIONS)[number]; content: JSX.Element }[] =
    [
      { name: "about", content: <About /> },
      { name: "tech", content: <Tech /> },
      { name: "projects", content: <Projects /> },
      { name: "experience", content: <Experience /> },
      { name: "contact", content: <Contact /> },
    ];
  return (
    <>
      {sections.map((n) => (
        <AnchorSection id={n.name} key={n.name}>
          {n.content}
        </AnchorSection>
      ))}
    </>
  );
}
