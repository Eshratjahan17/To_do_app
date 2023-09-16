/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#333333',
        "light": '#444444',
        "dark":"#FF9900",
      },
    },
  },
  plugins: [require("daisyui")],
}

