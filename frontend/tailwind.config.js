/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gold Primary Palette - Elegant Academic
        gold: {
          50: '#FDF8ED',
          100: '#F5E5B8',
          200: '#F0D99A',
          300: '#EBCD7C',
          400: '#E6C87C',  // Main Gold
          500: '#D4B566',
          600: '#C2A250',
          700: '#A88B3E',
          800: '#8E742C',
          900: '#745D1A',
        },
        // Brown Accent Palette
        brown: {
          50: '#F5F3F2',
          100: '#E8E4E3',
          200: '#C9BFBD',
          300: '#AA9A97',
          400: '#6B4644',
          500: '#4A2C2A',  // Main Brown
          600: '#3D2422',
          700: '#2D1A19',
          800: '#1F1211',
          900: '#110A09',
        },
        // Background Palette
        bg: {
          primary: '#0B0A08',
          secondary: '#1A1816',
          tertiary: '#2A2724',
        },
        // Text Palette
        text: {
          white: '#FAFAFA',
          muted: '#B8B8B8',
          dark: '#6B6B6B',
        },
        // Semantic Colors
        success: '#E6C87C',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#D4B566',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px 0 rgba(0, 0, 0, 0.08)',
        'large': '0 10px 40px 0 rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 50px 0 rgba(0, 0, 0, 0.12)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'green': '0 4px 20px 0 rgba(230, 200, 124, 0.15)',
        'green-lg': '0 10px 40px 0 rgba(230, 200, 124, 0.2)',
        'gold': '0 4px 20px 0 rgba(230, 200, 124, 0.15)',
        'gold-lg': '0 10px 40px 0 rgba(230, 200, 124, 0.2)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
