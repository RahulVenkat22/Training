/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: "#3b82f6",
        primary: "#111827",
        secondary: "#9ca3af",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
