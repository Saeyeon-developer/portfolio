import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#101315",
        mist: "#f2f5f3",
        pine: "#173f35",
        clay: "#d0a476",
        sunset: "#be5e3c"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(208, 164, 118, 0.3), transparent 45%), radial-gradient(circle at 80% 0%, rgba(23, 63, 53, 0.25), transparent 50%)"
      },
      boxShadow: {
        panel: "0 10px 40px rgba(16, 19, 21, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
