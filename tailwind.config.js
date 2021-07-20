module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },

       keyframes: {
        'wiggle': {
        '0%, 100%': { transform: 'rotate(-6deg)' },
        '50%': { transform: 'rotate(6deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
