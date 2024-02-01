import { About, Contact, Experience, Projects, Tech } from "@/components";

interface PageLink {
  name: string;
  section: JSX.Element;
}

export const PAGE_LINKS: PageLink[] = [
  { name: "about", section: <About /> },
  { name: "tech", section: <Tech /> },
  { name: "projects", section: <Projects /> },
  { name: "experience", section: <Experience /> },
  { name: "contact", section: <Contact /> },
];
