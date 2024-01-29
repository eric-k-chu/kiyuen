export function Navbar() {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-zinc-900/90 px-12 py-6 backdrop-blur-sm">
      <h1 className="text-xl font-medium">朱</h1>
      <nav className="flex items-center gap-x-8 font-sans text-xl font-semibold tracking-wider">
        <a
          href="#about"
          rel="noopener"
          className="border-b-2 border-b-transparent transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
        >
          ABOUT
        </a>
        <a
          href="#tech"
          rel="noopener"
          className="border-b-2 border-b-transparent transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
        >
          TECH
        </a>
        <a
          href="#projects"
          rel="noopener"
          className="border-b-2 border-b-transparent transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
        >
          PROJECTS
        </a>
        <a
          href="#experience"
          rel="noopener"
          className="border-b-2 border-b-transparent transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
        >
          EXPERIENCE
        </a>
        <a
          href="#contact"
          rel="noopener"
          className="border-b-2 border-b-transparent transition-colors duration-150 ease-in-out hover:border-b-primary-blue"
        >
          CONTACT
        </a>
      </nav>
    </nav>
  );
}
