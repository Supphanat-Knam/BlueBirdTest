/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideTilt: {
          '0%': { transform: 'translateX(100%) rotate(-10deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: 1 },
        },
        "fade-in-right": {
              "0%": {
                  opacity: 0,
                  transform: "translate3d(100%, 0, 0)",
              },
              "100%": {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
              },
          },
          "fade-in-up": {
              "0%": {
                  opacity: 0,
                  transform: "translate3d(0, 100%, 0)",
              },
              "100%": {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
              },
          },
      },
      animation: {
        slideTilt: 'slideTilt 0.5s ease-out forwards',
        fadeinright: 'fade-in-right 1s ease-in-out 0.025s 1',
        fadeinup: 'fade-in-up 1s ease-in-out 0.025s 1',

      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
};
