/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-one': '#D2F34C',
      },
      screens: {
        phone: '400px',
        tablet: '640px',
        laptop: '1125px',
        desktop: '1300px',
        desktopXl: '1600px',
      },
      fontFamily: {
        title: ['EB Garamond', 'serif'],
        body: ['Kumbh Sans', 'sans-serif'],
        logo: ['Alike Angular', 'serif'],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.title') + ' !important',
            },
            h2: {
              fontFamily: theme('fontFamily.title') + ' !important',
            },
            h3: {
              fontFamily: theme('fontFamily.title') + ' !important',
            },
            h4: {
              fontFamily: theme('fontFamily.title') + ' !important',
            },
            h5: {
              fontFamily: theme('fontFamily.title') + ' !important',
            },
            h6: {
              fontFamily: theme('fontFamily.title') + ' !important',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
