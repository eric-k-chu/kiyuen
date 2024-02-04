interface Project {
  name: string;
  path: string;
  desc: string;
  gh: string;
  live?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Castle v2",
    path: "/image/castle2.png",
    desc: "A Chess.com statistics site with Next.js",
    gh: "https://github.com/eric-k-chu/Castle-v2",
    live: "https://castle2.vercel.app/",
  },
  {
    name: "Artus",
    path: "/image/artus.png",
    desc: "A full-stack video hosting web app.",
    gh: "https://github.com/eric-k-chu/Artus",
    live: "http://artus-dev.us-west-1.elasticbeanstalk.com/",
  },

  {
    name: "Castle",
    path: "/image/castle.png",
    desc: "A Chess.com statistics site.",
    gh: "https://github.com/eric-k-chu/Castle",
    live: "https://eric-k-chu.github.io/Castle/",
  },
  {
    name: "Geo Run",
    path: "/image/georun.png",
    desc: "A 2.5D endless runner",
    gh: "https://github.com/eric-k-chu/Geo-Run",
    live: "https://eric-k-chu.github.io/Geo-Run-Host/",
  },
  {
    name: "Project S",
    path: "/image/projects.png",
    desc: "A 2.5D action platformer",
    gh: "https://github.com/eric-k-chu/Project-S",
  },
];

interface Experience {
  title: string;
  company: string;
  date: string;
  icon: string;
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Teaching Assistant",
    company: "Learning Fuze",
    date: "Dec 2023 - Present",
    icon: "/image/lfz.svg",
  },
  {
    title: "Web Dev Bootcamp",
    company: "Learning Fuze",
    date: "Aug 2023 - Dec 2023",
    icon: "/image/lfz.svg",
  },
  {
    title: "B.S in Computer Science",
    company: "California State University Fullerton",
    date: "Aug 2018 - Aug 2022",
    icon: "/image/csuf.svg",
  },
];

export const LANGS = ["TypeScript", "C++", "C#"] as const;
