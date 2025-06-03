/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'next-art': ['"Next Art Heavy"', 'Arial Black', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#227A8E',
        secondary: '#F59D55',
        tertiary: '#FACFC8',
        dark: '#221820',
        light: '#FAFAFA',
        
        // Extended color ramps for design system
        'primary-light': '#3498af',
        'primary-dark': '#1a5c6a',
        'secondary-light': '#f7b278',
        'secondary-dark': '#d47e37',
        'tertiary-light': '#fde0dc',
        'tertiary-dark': '#f5ae9f',
        
        // Status colors
        success: '#2ecc71',
        warning: '#f1c40f',
        error: '#e74c3c',
        
        // Neutral tones
        neutral: {
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
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};