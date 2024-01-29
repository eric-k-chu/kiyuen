import {
  About,
  AnchorSection,
  Contact,
  Experience,
  Footer,
  Navbar,
  Primary,
  Projects,
  Tech,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Primary />

      <AnchorSection id="about">
        <About />
      </AnchorSection>

      <AnchorSection id="tech">
        <Tech />
      </AnchorSection>

      <AnchorSection id="projects">
        <Projects />
      </AnchorSection>

      <AnchorSection id="experience">
        <Experience />
      </AnchorSection>

      <AnchorSection id="contact">
        <Contact />
      </AnchorSection>
      <Footer />
    </>
  );
}
