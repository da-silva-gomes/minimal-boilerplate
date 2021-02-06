module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  prefix: '',
  darkMode: false,
  theme: {
    extend: {
      inset: {
        '-46': '-11.5rem',
      },
      height: {
        '104': '38rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out infinite',
      },
      transitionProperty: {
        'bg': 'background',
      }
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'titillium': ['Titillium Web', 'sans-serif'],
    },
    colors: {
      white: '#fff',
      black: '#000',
      gray: {
        200: '#c4c4c4',
        400: '#828282',
      },
      yellow: '#f6bf2b',
      blue: {
        400: '#1d3c6e',
        700: '#072d5c',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
