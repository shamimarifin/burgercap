/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors : {
        'primaryColor' : '#010a5e',
        'primaryColorLight' : '#010d78',
        'secondaryColor'  : '#FFCC00',
        'paragraphColor'  : '#c0c0c0',
        'whiteColor'      : '#fff',
        'blackColor'      : '#000',
        'greenColor'      : '#007936',
        'redColor'        : '#cc3433',
        'darkCOlor'       : '#000',
        'darkCOlorLight'  : '#171717',
      },

      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      }
    },

    container : {
      center : true,
      padding : {
        DEFAULT : '1rem',
        sm: '1.5rem',

      }
    },

    fontFamily : {
      'oswold' : ['Oswald', 'sans-serif'],
      'nunito' : ['Nunito Sans', 'sans-serif'],
      'dm-sans': ['DM Sans', 'sans-serif'],
    }
  },
  plugins: [],
}

