import { Github, Linkedin } from ".";

export function Footer() {
  return (
    <footer className="flex items-center justify-around py-20">
      <h2 className="font-sans text-xl font-semibold">&#169; Eric Chu</h2>
      <div className="flex gap-x-4">
        <a href="https://github.com/eric-k-chu" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/eric-k-chu/" target="_blank">
          <Linkedin />
        </a>
      </div>
    </footer>
  );
}
