/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      bg: {
        app: {
          powderblue: "#7A7A7A",
          isabeline: "#f7f6f4",
        },
      },
    },
  },
  plugins: [],
};
