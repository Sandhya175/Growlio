/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'growlio-bg': '#0B1320',
          'growlio-header': '#1C2732',
          'growlio-accent': '#4AC7B7',
          'growlio-orange': '#F7B46A',
          'growlio-text': '#A3C1B9',
        },
      },
    },
    plugins: [],
  };