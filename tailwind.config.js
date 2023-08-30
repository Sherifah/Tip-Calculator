/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'Space Mono',
      },
      colors: {
        primary: {
          100: 'hsl(172, 67%, 45%)'
        },
        secondary: {
          100: 'hsl(183, 100%, 15%)',
          200: 'hsl(186, 14%, 43%)',
          300: 'hsl(184, 14%, 56%)',
          400: 'hsl(185, 41%, 84%)',
          500: 'hsl(189, 41%, 97%)',
          white: 'hsl(0, 0%, 100%)'
        }
      },
      backgroundColor: {
        body: 'hsl(185, 41%, 84%)',
        dark: 'hsl(183, 100%, 15%)',
        form: 'hsl(189, 41%, 97%)',
        btn: 'hsl(172, 67%, 45%)',
      }
    },
  },
  plugins: [],
}
