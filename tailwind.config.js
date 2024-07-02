/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      stoneDark: "#E4C9B7",
      stoneLight: "#F7EBE3",
      stoneMedium: "#E7E4D3",
      darkPink: "#F25339",
      salmonPink: "#FFE0DF",
      white: "#FFFFFF",
      lightYellow: "#FFE485",
      bgColor: "#F5F0EC",
      black: "#000000",
      mossGreen: "#004E29",
      smokeGrey: "#222222",
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins"],
      },
    },
  },
  plugins: [],
};
