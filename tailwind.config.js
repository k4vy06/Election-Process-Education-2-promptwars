/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#2d2d2d",
        saffron: "#FF9933",
        bharat_white: "#FFFFFF",
        bharat_green: "#138808",
        bharat_blue: "#003399",
        accent: "#FF9933",
      },
    },
  },
  plugins: [],
};
