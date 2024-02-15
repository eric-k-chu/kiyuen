import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(to bottom right, #9ed4dc, #c9a6f5)",
      },
      colors: {
        "primary-blue": "#50E6F0",
        "primary-orange": "#F0904F",
        "alt-blue": "#282C34",
        "grad-blue": "#9ED4DC",
        "grad-purple": "#C9A6F5",
        "primary-navy": "#1E1E2E",
      },
      fontFamily: {
        roboto: [`var(--font-roboto)`],
        nova: ["var(--font-nova-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
