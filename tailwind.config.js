/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        Green: "#03b57b",
        Black: "#323232",
        DarkGray: "#595456",
        FadedWhite: "#eeede8",
        White: "#fefefe",
      },
    },
  },
  plugins: [],
};
