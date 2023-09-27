/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          // 900: '#00344C',
          900: '#101D2D',
        },
        blue: {
          100: '#01d9ff',
          200: '#00c9ed',
          300: '#00b8d9',
          400: '#00a8c6',
          500: '#0097b2',
          600: '#00869e',
          700: '#00768b',
          800: '#006577',
        },
        pink: {
          200: '#ffeeeb',
          300: '#feded8',
          400: '#fecec4',
          500: '#febeb1',
          600: '#feae9e',
          700: '#fe9e8a',
          800: '#fd8e77',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'playfair-display': ['var(--font-playfair-display)', 'serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['2rem', { lineHeight: '1.3125', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '6xl': ['4rem', { lineHeight: '1.1562', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
