/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores base minimalistas
        'almost-black': '#111111',
        'pure-white': '#FFFFFF',
        
        // Tonos ocres para acentos
        'ochre': {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d8bf',
          300: '#e8bd94',
          400: '#dc9b67',
          500: '#d2691e', // Color principal ocre
          600: '#b8571a',
          700: '#9a4617',
          800: '#7d3a18',
          900: '#653016',
        },
        
        // Grises neutros para elementos secundarios
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        
        // Alias para compatibilidad
        dark: '#111111',
        light: '#FFFFFF',
        'dark-light': '#171717',
        accent: '#d2691e',
        'accent-light': '#e8bd94',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
      borderRadius: {
        '3xl': '24px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        'square': '1 / 1',
        'video': '16 / 9',
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