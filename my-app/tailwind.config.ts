import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define the Poppins font
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkylight: "#EDF9FD",
        lamaPurple:"#CFCEFF",
        lamaPurplelight:"#F1F0FF",
        lamaYellow:"#FAE27C",
        lamaYellowLight:"#FEFCEB"
      },
    },
  },
  plugins: [],
};
export default config;
