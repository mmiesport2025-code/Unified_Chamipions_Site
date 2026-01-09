/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    colors: {
      Blanc: '#ffffff',
      Gris: '#58585A',
      GrisFonce: '#363639',
      Noir: '#202024',
      NoirPur: '#0c0b0bff',
      Violet: '#65298c',
      Violet600: '#8b36c4',
      Violet700: '#ae47f2',
      Rose: '#c61e6a',
    },
    fontFamily: {
      Agrandir: 'Agrandir',
      Inter: 'Inter',
      Sarabun: 'Sarabun',
    },
    screens: {
      xs: '24rem', // >= 384px
      ssm: '32rem', // >= 512px
      sm: '40rem', // >= 640px
      md: '48rem', // >= 768px
      lg: '64rem', // >= 1024px
      xl: '80rem', // >= 1280px
      xxl: '88rem', // >= 1408px
      '2xl': '96rem', // >= 1536px
      'h-sm': { raw: '(max-height: 650px)' },
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, 1fr)',
        pc12: 'repeat(12, 1fr)',
        pc11: 'repeat(11, 1fr)',
        pc10: 'repeat(10, 1fr)',
        pc9: 'repeat(9, 1fr)',
        pc8: 'repeat(8, 1fr)',
        pc7: 'repeat(7, 1fr)',
        pc6: 'repeat(6, 1fr)',
        pc5: 'repeat(5, 1fr)',
        pc4: 'repeat(4, 1fr)',
        pc3: 'repeat(3, 1fr)',
        pc2: 'repeat(2, 1fr)',
        pc1: 'repeat(1, 1fr)',
        telprincipal: 'repeat(12, 20px)',
        tel12: 'repeat(12, 20px)',
        tel11: 'repeat(11, 20px)',
        tel10: 'repeat(10, 20px)',
        tel9: 'repeat(9, 20px)',
        tel8: 'repeat(8, 20px)',
        tel7: 'repeat(7, 20px)',
        tel6: 'repeat(6, 20px)',
        tel5: 'repeat(5, 20px)',
        tel4: 'repeat(4, 20px)',
        tel3: 'repeat(3, 20px)',
        tel2: 'repeat(2, 20px)',
        tel1: 'repeat(1, 20px)',
      },
    },
  },
  plugins: [],
}
