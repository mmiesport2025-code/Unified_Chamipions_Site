/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    colors: {
      Blanc: '#ffffff',
      Noir: '#242729',
      NoirPur: '#000000',
      Violet: '#65298c',
      Violet700: '#ae47f2',
      Rose: '#c61e6a',
    },
    fontFamily: {
      Agrandir: 'Agrandir',
      Inter: 'Inter',
      Sarabun: 'Sarabun',
    },
    extend: {},
  },
  plugins: [],
}
