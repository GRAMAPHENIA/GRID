/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#101112',
        light: '#f0f8ff', // aliceblue
        'dark-light': '#14181b',
        accent: '#d2691e', // chocolate/madera
        'accent-light': '#daa520', // goldenrod
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      borderRadius: {
        '3xl': '24px',
      },
      animation: {
        'slide-up': 'slideUp 700ms ease-out',
        'slide-in-left': 'slideInFromLeft 1s forwards',
        'slide-in-right': 'slideInFromRight 1s forwards',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(15%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-800%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(800%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}