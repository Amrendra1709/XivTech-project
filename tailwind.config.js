/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c1ff',
          300: '#66a3ff',
          400: '#3384ff',
          500: '#0052FE',
          600: '#0047cb',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
        success: {
          50: '#e6f9f0',
          100: '#ccf3e1',
          200: '#99e8c3',
          300: '#66dca5',
          400: '#33d187',
          500: '#16C784',
          600: '#12a06a',
          700: '#0e7850',
          800: '#095035',
          900: '#04281b',
        },
        error: {
          50: '#fdecee',
          100: '#fcd9dd',
          200: '#f9b3bb',
          300: '#f58e99',
          400: '#f26877',
          500: '#EA3943',
          600: '#d31a25',
          700: '#a5141d',
          800: '#760e15',
          900: '#48080c',
        },
      },
      animation: {
        'pulse-once': 'pulse 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
};