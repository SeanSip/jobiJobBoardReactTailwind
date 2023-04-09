/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        'color-one': '#D2F34C',
        'color-gray': '#81B197',
        'color-title': '#254035',
        'color-body': '#000000B2',
        'color-background': '#244034',
        'color-jobCardBg': '#F8FDE4',
        'color-button-green': '#31795A',
        'color-bg-gray': '#F6F6F6',
        'color-hover': '#98BD00',
        'color-light-text': '#333333',
        'color-lightest-text': '#464646',
      },
      screens: {
        phone: '400px',
        experImg: '510px',
        tablet: '640px',
        laptop: '1125px',
        desktop: '1300px',
        desktopXl: '1600px',
      },
      fontFamily: {
        title: ['EB Garamond', 'serif'],
        body: ['Kumbh Sans', 'sans-serif'],
        logo: ['Alike Angular', 'serif'],
        button: ['Plus Jakarta Sans', 'sans-serif'],
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
