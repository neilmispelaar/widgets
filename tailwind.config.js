const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // The following colours deviate from the tailwind default
        gray: colors.gray,
        green: colors.emerald,
        blue: colors.lightBlue,
        purple: colors.fuchsia,
      },
    },
  },
  variants: {},
  plugins: [
  ],
}
