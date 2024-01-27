import {
  About,
  AnchorSection,
  Contact,
  Experience,
  Footer,
  Navbar,
  Primary,
  Projects,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Primary />
      <section className="bg-gradient-to-t from-zinc-900 from-90% to-zinc-950 pt-20">
        <AnchorSection id="about">
          <About />
        </AnchorSection>
      </section>

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
