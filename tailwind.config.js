/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/20': '7vh',    // 1/10th of the screen height
        '19/20': '93vh',    // 9/10th of the screen height
      },
      width: {
        '1/20': '5%',    // 1/10th of the screen height
        '19/20': '90%',    // 9/10th of the screen height
      },
    },
  },
  plugins: [],
};
